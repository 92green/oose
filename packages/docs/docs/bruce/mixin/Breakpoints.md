
```sass
@mixin BruceBoxsizing($breakpoint) {
    @content;
}
```

Return a breakpoint matching either:

* __string__: return a `min-width` matching the size from `$bruce-breakpoins`
* __number__: return a `min-width` matching the number
* __tuple<number, number>__: return a min/max matching the first and second number
* __tuple<string, number>__: return a breakpoint whose name is the first and value is the second


#### Example

```sass 
.Component {
    @include BruceBreakpoint('small') {
        // String: returns `min-width` matching the `small` value in $bruce-breakpoints
    }

    @include BruceBreakpoint(40em) {
        // Number: returns `min-width: 40em`
    }

    @include BruceBreakpoint(max-width 40em) {
        // Tuple<string, number>: returns `max-width: 40em`;
    }

    @include BruceBreakpoint(20em 40em) {
        // Tuple<number, number>: returns `(min-width: 20em) and (max-width: 40em)`
    }

}
```
