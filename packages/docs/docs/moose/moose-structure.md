---
id: structure
title: Structures
---

Structures bind data and application logic to affordances and layouts. In the process creating 
appliances. Appliances can be created ad-hoc in the structures or if common they can be moved out 
to their own file.

Structures are the glue between your specific data and your general affordances.
Structure are where your application logic is realised. 

### Example
If you take a list of coffee shops and bind them to a table affordance, placing it in the body of a
profile layout. You have started to create the application logic of the coffee shop profile page by
creating a coffee shop table appliance and placing the body of the page.

### Rules
* Structures can declare ad-hoc appliances
* Structures cannot fetch data
* Structures cannot store data
* Structures cannot contain interaction logic

