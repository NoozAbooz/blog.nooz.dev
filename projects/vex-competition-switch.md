---
title: VEX Competition Switches
date: 2025-01-01
---

# Making a VEX Competition Switch
![image](https://cdn.hackclub.com/019d8988-a34a-7f86-a880-97ca295ad589/paste-1776128925837.png "CAD Render" =600x600)
<Card title="Github Repository" link="https://github.com/NoozAbooz/VEX-Competition-Switch" logo="https://logodix.com/logo/64439.png" />

## Background
In 2025, VEX Robotics discontinued their "Competition Switch", which would plug into V5 controllers and simulate having a real Field Controller plugged in. 
![VEX Part 276-2335](https://cdn.hackclub.com/019d895b-7338-7123-9090-567d625b51d7/paste-1776125964429.png "VEX Part 276-2335" =300x) </br>

Having also seen [other teams](https://roboticsisez.com/products/mini-comp-switch) make their own switches, I set out to make my own. Some design requirements included:
- As slim as possible
- Minimal soldering
- Compatible with a variety of 3dp-scuff mods

To start, I found the [pinout](https://content.vexrobotics.com/docs/VEXnet%20Comp%20Sw%20Diagram.pdf) for the switch-controller wiring：
<Gallery 
  :images="[
	'https://cdn.hackclub.com/019d8981-d86c-7047-8b62-d7626d95b759/paste-1776128480859.png',
	'https://cdn.hackclub.com/019d8982-9601-7ae0-88cf-809921ec04da/paste-1776128529686.png',
  ]" 
  :captions="[
	'Pinout for the competition state protocol',
	'Switch position reference',
  ]"
/>

[This](https://static.rapidonline.com/downloads/vex/Make-Competition-Switch.pdf) also provided helpful details on the corresponding pin numbers and ethernet cable colours.

## Version 0.1 - Single Port
To get a feel for the wiring, I designed a prototype in EasyEDA:
<Gallery 
  :images="[
	'https://github.com/NoozAbooz/VEX-Competition-Switch/raw/master/screenshots/image-1.png =300x300',
	'https://github.com/NoozAbooz/VEX-Competition-Switch/raw/master/screenshots/image-2.png',
  ]" 
  :captions="[
	'EasyEDA schematic for version 1 (solo edition). Though I did have to use both layers of the PCB as to not have overlapping traces, I purposely added vias to make it less complex to debug.',
	'3D model of the PCB, with the ethernet jack (facing up) and switches attached. This was meant to be nearly as wide as the ethernet port itself to be slim, and dangle off the cable connected to a controller.',
  ]"
/>

## Version 1.0 - Duo Port
Knowing that I wanted to recreate the original switch as closely as possible, I designed a second version of the PCB that would support two controllers being connected simultaneously, with standardized holes as to accommodate mounting the PCB to a controller.
<Gallery 
  :images="[
	'https://github.com/NoozAbooz/VEX-Competition-Switch/blob/master/screenshots/image-3.png?raw=true',
	'https://github.com/NoozAbooz/VEX-Competition-Switch/blob/master/screenshots/image-4.png?raw=true',
	'https://github.com/NoozAbooz/VEX-Competition-Switch/blob/master/screenshots/image-5.png?raw=true',
  ]" 
  :captions="[
	'Based on other designs, I found that all I needed to do was to connect each switch with both corresponding pins on the ethernet ports, and both switches lead to the common ground also connected to both ports.',
	'Footprint layout',
	'3D Model',
  ]"
/>

### Version 1.1 - Flipped Ethernet Ports
Knowing that a duo variant was feasible without vias, I could make the ethernet jacks face downwards so that a shorter cable could be used. However, I didn't like the tight clearances and awkward angles used here.
![Version 1.1](https://github.com/NoozAbooz/VEX-Competition-Switch/raw/master/screenshots/image-6.png "Version 1.1 footprint")

## Version 1.2 - Final Version
I restarted the PCB design from scratch, this time avoiding 90 degree angles in the traces. I also added labels to the silkscreen layer to indicate all four possible switch positions.
<Gallery 
  :images="[
	'https://github.com/NoozAbooz/VEX-Competition-Switch/blob/master/screenshots/image-7.png?raw=true',
	'https://github.com/NoozAbooz/VEX-Competition-Switch/blob/master/screenshots/image-8.png?raw=true',
	'https://github.com/NoozAbooz/VEX-Competition-Switch/blob/master/screenshots/image-9.png?raw=true',
  ]" 
  :captions="[
	'Final footprint with pretty silkscreen and better routing on the front traces (red) around the silkscreen. The blue traces are on the backside and their appearance is insignificant.',
	'3D model',
	'3D Model (alt view)',
  ]"
/>

## Physical Product
I ordered through JLCPCB and used their PCBA service. Shoutout to Hack Club for helping offset my costs.
<Gallery 
  :images="[
	'https://cdn.hackclub.com/019d8a69-1bd9-7b72-93e2-363d0851c514/paste-1776143635654.png',
	'https://cdn.hackclub.com/019d8a6b-e1f1-761a-a804-ca025b7f8c41/paste-1776143818054.png',
	'https://cdn.hackclub.com/019d8a6e-6e7a-7e48-a668-1928f00e0402/paste-1776143984778.png',
	'https://cdn.hackclub.com/019d8a6e-88f2-7d24-bcda-d6f232b84b93/paste-1776143991778.png',
	'https://cdn.hackclub.com/019d8a6e-985c-7b37-982a-59153b85955d/paste-1776143996493.png',
  ]" 
  :captions="[
	'JLCPCB cart',
	'Custom 3D modelled mounting bracket in Fusion 360',
	'Mounted onto controller with scuff',
	'Side view',
	'Back view',
  ]"
/>

## Reflection
- I would like to add a small microcontroller to allow for some custom functionality for timed runs, similiar to https://www.vexforum.com/t/a-timing-competition-switch/102689
- I had trouble finding large switches through the JLCPCB PCBA assembly service
- Six-prong switches were slightly overkill but help ensure the switches wont snap off with use
- This was designed for short 5" ethernet cables, which were ludicrously expensive regardless of where they were purchased.

## Handmade Variant
I was in a tough spot without access to my PCB variant, so I hand-soldered a simple budget switch. It only supports changing between auton/driver, and is set to always be enabled.

<Gallery 
  :images="[
	'https://cdn.hackclub.com/019e1f7c-bd7e-7940-93c8-63cad74a8169/1778644572251.jpg',
	'https://cdn.hackclub.com/019e1f7e-586a-71bd-8d61-97cc9dbc1143/1778644572248.jpg',
	'https://cdn.hackclub.com/019e1f7f-dae4-711a-9fbc-881e15c6a412/1778644572239.jpg',
  ]" 
  :captions="[
	'SPDT switch with a small plastic faceplate, soldered to a standard ethernet cable.',
	'Solder connections on the switch, based on the PDF pinout.',
	'I ripped the switch from a old project, so it is just hot glued to the faceplate',
  ]"
/>