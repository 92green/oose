---
id: naming-conventions
title: Naming Conventions
---

Spruce's main aim is to standardize specificity and class name confusion by using punctuation to define relationships and convey meaning. Because of this all punctuation is reserved for defining relationships and so multiple words are separated through camel case. 

```html
<!-- bad -->
<div class="bluetooth-list--selected"><div>
<div class="large_red_button"><div>

<!-- Good -->
<div class="BluetoothList BluetoothList-selected"><div>
<div class="Button Button-large Button-red"><div>
```

Words are always written out in full. Needless confusion is created when one developer shortens a word to what they deem logical only for another developer to have know idea what it refers to. The main point of Spruce is to clearly define 

```scss
// Bad
.Btn-lrg
.UsrPrfl

// Good
.Button-large
.UserProfile
```
