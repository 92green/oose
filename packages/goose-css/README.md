# Goose
The base of a Spruce component library. It aims to describe the functions of UI components semantically, and without knowledge of how styles will visually appear.


# Components













## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) List 
Core modifiers: `divided` `ordered` `unordered` `nested` 

Lists of items. Lists have child elements `List_item`.

Neither the `List` or `List_item` elements should have margins by default. Margins can be applied using a `margin` modifier with an optional SI suffix.

## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Overlay 

## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Typography 



# Too Complex. (Are they molecules?)

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Lightbox 
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Navigation 


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Login 


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Breadcrumbs 
The representation of one branch of a tree hierarchy








# Todo: Confused modifiers

These are perhaps too bound to specific visual or design choices and will need to be worked upon before being accepted or rejected from goose.

- `flood` - Fills the width and height of the parent element.
- `spread` - Fills the width of the parent element.








# Goose Box Model

```
               Boundary
              +--------------------------------+-------------------------------------+
              |                                ^                                     |  ^
              |                                |                                     |  | Size
              |                                | Padding                             |  |
              |                                |                                     |  |
              |                                v                                     |  |
              |         +----------------------+-----------------------------+       |  |
              |         |                                                    |       |  |
              |         |    ####   ####  #    # ##### ###### #    # #####   |       |  |
 Margin       |         |   #    # #    # ##   #   #   #      ##   #   #     |       |  |
              |         |   #      #    # # #  #   #   #####  # #  #   #     |       |  |
<-----------+ |         |   #      #    # #  # #   #   #      #  # #   #     |       |  |
              |         |   #    # #    # #   ##   #   #      #   ##   #     |       |  |
              |         |    ####   ####  #    #   #   ###### #    #   #     |       |  |
              |         |                                                    |       |  |
              |         +----------------------------------------------------+       |  |
              |                                                                      |  |
              |                                                                      |  |
              |                                                                      |  |
              |                                                                      |  |
              |                                                                      |  v
              +----------------------------------------------------------------------+
   
```






# Categorical State Modifiers

## Importance
```
primary
tertiary
```

## Interactions 
```
active
focus
disabled
waiting
hover
```

## Connotation (suffixable)
```
positive
negative
warning
edit
```
