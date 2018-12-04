## Components

> Components are 90% of your styles. 

They are isolated elements that define the styling for a single object. A widget, a button or an image carousel. It doesn't matter where the components are placed they will look the same. 

* Component class names begin with a capital letter.
* Components are isolated. They do not rely on class hierarchy or relationships with other Components.
* Components are defined in a single file per Component.

```scss
.Button {
    cursor: pointer;
    padding: 1rem;
}

// bad
.Carousel {
    .Button {
        ...
    }
}
```


