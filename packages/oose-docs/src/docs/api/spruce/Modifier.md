## Modifiers `-`
> Modifiers handle state and variation in Components.

A button component might be red when in a warning state, a caption might be left or right aligned. The Modifiers do not change the base styles of a Component, only the bare minimum required to express the difference.

* Modifiers are written as: `Component-modifier`
* Modifiers are not placed on markup without their Component.

```scss
.Button {
    cursor: pointer;
    padding: 1rem;
}

.Button-red {
    background-color: red;
}

.Button-large {
    padding: 2rem;
}
```
```html
<div class="Button">Regular button</div>
<div class="Button Button-red">Red Button</div>
<div class="Button Button-red Button-large">Large, red button</div>
```

