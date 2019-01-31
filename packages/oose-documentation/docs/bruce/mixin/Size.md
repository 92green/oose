
```sass
@mixin BruceSize($width, $height?);
```

A single declaration for width and height.


#### Example

```sass
// scss
.Box {
    @include BruceSize(1rem);
}

// css
.Box {
    width: 1rem;
    height: 1rem;
}
```

```sass
// scss
.Box {
    @include BruceSize(1rem, 4rem);
}

// css
.Box {
    width: 1rem;
    height: 4rem;
}
```
