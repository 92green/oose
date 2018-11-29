# Goose
The base of a Spruce component library. It aims to describe the functions of UI components semantically, and without knowledge of how styles will visually appear.


# Components




## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Checkbox 
???


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Choice 
The result of a user selection.


## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Dialog 
A small area on screen in which the user is prompted to provide information or select commands.

### Children
* `Dialog_title`
* `Dialog_content`
* `Dialog_actions`


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Dropdown 

## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Grid 
A `Grid` consists of a series of columns, whose widths are defined by ratios of the `Grid`'s total width. These ratios are divisions of 12, so a 2 column `Grid` would contain 2 columns, each with width 6. By default `Grid`s columns stack on top of each other on small page widths.

`Grid`s always have `Grid_column` child elements.

### Modifiers
- `Grid_column-1`, `Grid_column-2` ... `Grid_column-12` - Sets the width of the column as a division of 12 of the `Grid` width.
- `Grid_column-always` - Disables collapsing the Grid on small page widths.
- `Grid_column-shrink` - Causes a `Column` to be the same width as its contents.
- `Grid_column-padding` - The padding between each column. Padding is not applied to the left of the leftmost column, or on the right of the rightmost column.


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Header 
???


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Icon 


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Image 


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Input 
Textual input.


## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Link 
A link to other content.


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) List 
Core modifiers: `divided` `ordered` `unordered` `nested` 

Lists of items. Lists have child elements `List_item`.

Neither the `List` or `List_item` elements should have margins by default. Margins can be applied using a `margin` modifier with an optional SI suffix.


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Media 


## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Overlay 


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) ProgressBar 


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Select 
A select box to allow the user to choose one or more items from a list. By default goose assumes `react-select` is being used.


## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Table 


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) ToggleSet 


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Toggle
A user input that can toggle a boolean value.

Core modifiers: `active`
- `active` - The appearance of the toggle while it's true.


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Terminal 


## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Text 
Any text to display on the website, e.g. copy, headings, titles.

### Sizing
- `size<SiPrefix>`
  - `sizeGiga` roughly corresponds with traditional `h1` sizing
  - `sizeMega` roughly corresponds with traditional `h2` sizing
  - `sizeKilo` roughly corresponds with traditional `h3` sizing
  - `sizeHecto` roughly corresponds with traditional `h4` sizing
  - `sizeMilli` roughly corresponds with traditional `small` sizing
  
### Margins
`Text-margin` modifiers should only affect the bottom margin. The spacing that might normally be provided by a top margin should instead be provided by a preceding sibling or an ancestor.

- `margin<SiPrefix>`
  - `marginGiga` margins often go well with `sizeGiga`
  - `marginMega` margins often go well with `sizeMega`
  - `marginKilo` margins often go well with `sizeKilo`
  - `margin` margins often go well to space out normal paragraphs

### Weight
- `weightKilo` - Text that appears more important than normal, often bolded.
- `weightMilli` - Text trhat appears less important than normal, often muted.
- `emphasis` - Styled to demonstrate an emphasis on the text.


## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Typography 


## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Window 
A combination of a fixed-height title bar and a variable-height content area.

### Children
* `Window_title`
* `Window_content`


## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Wrapper 
A container that enforces vertical page boundaries, such as a maximum width and page alignment.

### Modifiers
- `size<SiPrefix>` - Sets a maximum width to the element.






# Too Complex. (Are they molecules?)

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Pagination 
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Lightbox 
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Navigation 
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) DayPicker 
A way to choose a date and or time. Assumes `react-day-picker`.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Message
Messages are used for when the website communicates information about its current status or data to the user, such as "Loading...", "Invalid password" or "404".

#### Appearance props

- `appearance=deadEnd` - A large message, often used at the point at which the user can no longer progress and must choose to navigate elsewhere. E.g: 404's, Large form submissions.
- `appearance=block` - A block message that appear in their own vertical space, such as password errors.
- `appearance=inline` - An inline message.

#### State props

- `state=fetch` - A message that is styled to appear as though something is loading.
- `state=positive` - A message that is styled to appear as though something has succeeded.
- `state=negative` - A message that is styled to appear as though something has failed.

#### Modifiers

The `appearance` and `state` of a Message are applied as modifiers to a Message.

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
