
```sass
@function mapGetIn($map, $keys)
```

Returns the value from a nested map.

#### Examples

```sass
.Text {
    color: mapGetIn($settings, 'colors', 'primary');
}
```
