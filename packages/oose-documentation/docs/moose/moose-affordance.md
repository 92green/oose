---
id: affordance
title: Affordances
---

An affordance is a component that affords the user a single action.

* Text affords the user reading
* Button affords the user clicking
* Input affords the user typing

They are the lowest and most abstract parts of an application. They let the user interact in
some way, but only in the most general sense. By themselves they are useless, but when given some
application logic they become useful. Affordances are similar in this respect to 'dumb' components: 
They are small and single purpose. Affordances differ from dumb components in that they must be 
general. A save button is not an affordance, but a button is. A friend list is not an affordance but
a user list is.

### Example
A button affords the user to click. The button affordance should describe how best to do that. 
i.e. a click-handler, some text, and some button-like styles. Importantly the button cant describe 
what that click should perform. A specific callback and label must be provided to the button before 
it makes sense.


### Rules
* Affordances can contain interaction logic
* Affordances can contain aesthetic styles. 
* Affordances can contain layout styles. But only the to control internal positioning, they cannot
influence surrounding components.
* Affordances can contain other affordances.
* Affordances cannot contain application logic.
* Affordances cannot contain data fetching. 
* Affordances must only have one concern.
* Affordances must be declared in their own file; they cannot be declared ad-hoc.

