---
title: Tuning Timeouts
---

In VEX programming, timeouts are used to prevent a robot from getting stuck in a loop or waiting indefinitely for a condition to be met. Our autons have a "hard" timeout based on time elapsed in a single motion and a "soft" timeout based on its position.

Let's take a look at the turnToAngle.cpp movement as an example:
```cpp
kw::turnToAngle(90, 100, 2000);
```
which is in the format (target angle, speed, hard timeout). If the robot doesn't reach the target angle within `2000` milliseconds of starting the movement, it will stop trying to turn and move on to the next command.

Now look at the logic behind the movement:
```cpp:line-numbers=23
max_output = max_output * (12.0 / 127.0); // convert from [-127, 127] decivolts to [-12, 12] volts
min_speed = min_speed * (12.0 / 127.0); // convert from [0, 127] decivolts to [0, 12] volts
kw::stop_chassis(pros::E_MOTOR_BRAKE_COAST);
is_turning = true;
double threshold = 1; // [!code focus]
kw::PID pid = kw::PID(kw::turn_kp, kw::turn_ki, kw::turn_kd);

// Normalize and set PID target
turn_angle = kw::normalize_target(turn_angle);
pid.setTarget(turn_angle);
pid.setIntegralMax(0);  
pid.setIntegralRange(3);
pid.setSmallBigErrorTolerance(threshold, threshold * 3); // [!code focus]
pid.setSmallBigErrorDuration(50, 150); // [!code focus]
pid.setDerivativeTolerance(threshold * 5); // [!code focus]
```
The `threshold` variable is used to determine when the robot is close enough to the target angle to consider the movement successful. If the robot is within `1` degree of the target angle ($error \leq 1$) within a `50` millisecond duration, it will be considered **settled** and move on to the next command. We have an alternate exit condition where if the robot is within `3` degrees of the target angle for at least `150` milliseconds, it will also be considered a success. If the robot is outside of these thresholds for too long, it will be considered a failure and keep trying to turn until the hard timeout is reached.

The "soft" timeout has these two different thresholds to account for the fact that the robot may not be able to get within `1` degree of the target angle due to factors like wheel slip or imprecise movement, but it can still be considered a success if it's close enough for such a long period of time that it's basically not moving by much.