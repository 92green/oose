
```sass
@mixin BruceRatio($width, $height);
```

Uses `:before` to create a fixed ratio for the element

#### Example

```sass

.Square {
    @include BruceRatio(1, 1);
}

.Video {
    @include BruceRatio(16, 9);
}

.Oblong {
    @include BruceRatio(2, 1);
}
```

