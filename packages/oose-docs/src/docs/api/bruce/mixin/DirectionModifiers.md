import Param from 'component/Param';

```sass
@mixin BruceDirectionModifiers($name, $prop, $size);
```


* <Param name="$name" type="list"/> a list containing the prefix and suffix for the goose names
* <Param name="$prop" type="string"/> the css property to affect
* <Param name="$size" type="list"/> four property shorthand


#### Example

```sass
.Text {
    @include BruceDirectionModifiers('margin' 'Giga', 'margin', 1rem 2rem);
}

// Will Produce:

.Text-marginGiga {
  margin-top: 1rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
}

.Text-marginColumnGiga {
  margin-left: 2rem;
  margin-right: 2rem;
}

.Text-marginRowGiga {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.Text-marginTopGiga {
  margin-top: 1rem;
}

.Text-marginRightGiga {
  margin-right: 1rem;
}

.Text-marginBottomGiga {
  margin-bottom: 1rem;
}

.Text-marginLeftGiga {
  margin-left: 1rem;
}
```

