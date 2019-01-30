
```sass
@function zindex($componentName)
```

Returns the position of `$componentName` in `$bruce-zindexList`


#### Example

```sass
// config.scss
$bruce-zindex: (
    'Button',
    'Select',
    'Link'
);

// Button.scss
.Button {
    z-index: zindex('Button'); // 1
}

```

