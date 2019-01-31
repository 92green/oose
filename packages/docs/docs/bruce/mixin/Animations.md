
```sass
@mixin BruceAnimation($name, $duration, $prop, $fromEnter, $toEnter, $toEnter, $toLeave)
```

Uses the React.addons.CSSTransitionGroup syntax to create simple single property animations.

#### Example

```sass
@include bruce-singlePropAnimation('fade', 300ms, opacity, 0, 1);
```

```css
.fade-enter {
    opacity: 0;
}
.fade-enter.fade-enter-active {
    transition: all 300ms;
    opacity: 1;
}
.fade-leave {
    transition: all 300ms;
    opacity: 1;
}
.fade-leave.fade-leave-active {
    opacity: 0;
}
```
