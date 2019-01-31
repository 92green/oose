
```sass
@mixin BruceClearfix();
```

Applies the `display: table` clearfix hack to the `:after` pseudo element.


#### Example

```sass
.Component {
    @include BruceClearfix();
    float: left;
};
