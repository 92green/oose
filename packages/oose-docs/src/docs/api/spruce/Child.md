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
