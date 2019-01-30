---
id: naming
title: Spruce
---

A system for writing CSS that uses strict class naming rules to prioritize composing and low specificity.

## Tl;dr
* [Components] are 90% of your styles.
* [Modifiers] describe the state and variation of Components
* [Children] describe unavoidable relationships inside Components.

## Components

> Components are 90% of your styles. 

They are isolated elements that define the styling for a single object. A widget, a button or an image carousel. It doesn't matter where the components are placed they will look the same. 

* Component class names begin with a capital letter.
* Components are isolated. They do not rely on class hierarchy or relationships with other Components.
* Components are defined in a single file per Component.

```scss
.Button {
    cursor: pointer;
    padding: 1rem;
}

// bad
.Carousel {
    .Button {
        ...
    }
}
```


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


## Children `_`
> Children describe unavoidable relationships inside Components. 

Sometimes a Component will need to rely on a relationship between the styles of the parent and the elements inside. Instead of increasing specificity by the use of nesting or the `>`selector we can express the relationship in the semantics of a class name. This allows the developer to understand the relationship perfectly while retaining a singular level of specificity. 

* Children are written as `ComponentName_childName`
* Children are not placed on the same markup as their parent
* All parent modifiers are placed on their children. `Parent Parent-modifier`, `Parent_child Parent_child-modifier`

The media object is a classic example of unavoidable parent child relationships. The `.Media` component by itself is only a clear-fix and `.Media_image` is a float and margin. Used in isolation these classes are pointless. However when used in conjunction as a parent and child they create a highly useful and reusable component. 

```scss
.Media {
    @include clearfix;
}

.Media_body {
    overflow: hidden;
}

.Media_image {
    float: left;
    margin-right: 1rem;
}
```

```html
<div class="Media">
	<div class="Media_image"></div>
	<div class="Media_body"></div>
</div>
```

### Child modifiers
To keep a flat level of specificity parent modifiers must be applied to each child.

```html
<div class="Media Media-right">
    <div class="Media_image Media_image-right"></div>
    <div class="Media_body Media_body-right"></div>
</div>
```

### Warnings
Some more complex modules may seem like they require a parent child relationship when in actual fact they just share a similar location or theme. These are better described as a collection of Components. 

See Component Grouping. 
