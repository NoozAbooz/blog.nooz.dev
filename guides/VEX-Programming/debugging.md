---
title: Debugging
---

When something isn't working properly, you may need to read the status of a variable to find out whats happening.
There are 2 ways to print the status of a variable ([serial terminal](#serial-terminal) and [brain](#brain)).

## Serial Terminal
Reads out the variable on your laptop.
1. You need your controller to be connected to your computer with a cable.
2. Consider the following code snippet:
```cpp:line-numbers
void special_auton() {
  int x = 5; // this is a integer number
  double y = 3.14; // this is a decimal number
  std::string z = "Hello, World!"; // this is a string of text/words
  
  printf("%d\n", x); // prints the value of x
  printf("%f\n", y); // prints the value
  printf("%s\n", z.c_str()); // prints the value of z
  printf("Value of x: %d, Value of y: %f, Value of z: %s\n", x, y, z.c_str()); // prints all values in a single line
}
```
3. Run `pros terminal` in your terminal to open the serial terminal connection with the brain (proxied through the controller)
4. Run the program, and the variables will show up on your terminal.

**Output**
```
5
3.140000
Hello, World!
Value of x: 5, Value of y: 3.140000, Value of z: Hello, World!
```

## Brain
We use the robodash library, which is what forms the basis of the dashboard on the brain. It also has a built in function to print variables to the brain's screen.
```cpp:line-numbers
void special_auton() {
  int x = 5; // this is a integer number
  double y = 3.14; // this is a decimal number
  std::string z = "Hello, World!"; // this is a string of text/words
  
  console.printf("%d\n", x); // prints the value of x
  console.printf("%f\n", y); // prints the value
  console.printf("%s\n", z.c_str()); // prints the value of z
  console.printf("Value of x: %d, Value of y: %f, Value of z: %s\n", x, y, z.c_str()); // prints all values in a single line
}
```
The output will be the same as the serial terminal, but it will show up on the brain's screen if you open the `Console` menu.