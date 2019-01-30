---
id: appliance
title: Appliances
---

An appliance is an affordance bound to data or application logic. A button by itself is just an
affordance but a button with a "Save" label and callback that triggers the save API is an appliance.

A save button inherits all the general affordances given by button (clicking, and a label). But now 
it performs a specific purpose. We can distinguish a save button from a delete button from a log out
button. Each is its own unique appliance. 

### Example

### Rules
* Appliances can contain one or many affordances.
* Appliances can be in its own file.
* Appliances can be declared ad-hoc in a structure.
* Appliances cannot fetch data.


