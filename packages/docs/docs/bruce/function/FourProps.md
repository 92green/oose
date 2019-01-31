
```sass
@function fourProps($props)
```

Returns a named map of the four property shorthand

#### Example

```sass
fourProps(1px 2px 3px 4px)
// => (top: 1px, right: 2px, bottom: 3px, left: 4px)

fourProps(1rem 2rem)        
// => (top: 1rem, right: 2rem, bottom: 1rem, left: 2rem)
```
