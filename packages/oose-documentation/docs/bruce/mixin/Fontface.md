import Param from 'component/Param';

```sass
@mixin BruceFontFace($lists);
```
Chains all your font face declarations into one include.

* <Param name="$lists" type="list<tuple<$name, $path, $font-weight, $font-style>>" />


#### Example

```sass
@include BruceFontFace((
    ('ProximaNova'          'fonts/proxima-nova/proximanova-light'      100),
    ('ProximaNova'          'fonts/proxima-nova/proximanova-regular'    300),
    ('ProximaNova'          'fonts/proxima-nova/proximanova-regitalic'  300   italic),
    ('ProximaNova'          'fonts/proxima-nova/proximanova-bold'       600),
    ('Glyphicons'           'fonts/glyphicons-regular'),
    ('GlyphiconsHalflings'  'fonts/glyphicons-halflings-regular')
));
```

