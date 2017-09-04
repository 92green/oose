# Goose
The base of a Spruce component library. It aims to describe the functions of UI components semantically, and without knowledge of how styles will visually appear.

# Core Components

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Badge 
An un-interactive presentation of state.
Core modifiers: `success` `failure` `hero` `primary` `$color`

## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Box 
A divided area of content.

The unmodified `Box` should not have any margins or padding so it can be used as an invisible element container, like a `<div>`.

### Modifiers
* `hero` - 
* `success` - 
* `failure` - 
* `hairline` - 
* `margin<SiPrefix>`
* `marginTop<SiPrefix>`
* `marginBottom<SiPrefix>`
* `marginRow<SiPrefix>`

## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Button 

The unmodified `Button` should appear as having netural importance. The `primary` modifier can be used on buttons that need to convey more importance.

Core modifiers: `primary` `success` `failure` `$color` `small` `clear` `solo`
- `primary` - Makes the button more important.
- `success` - A button that implies a positive outcome.
- `failure` - A button that implies a negative outcome.
- `solo` - A button that is standalone and does not have siblings within the information heirarchy.
- `inline` - A button that has a small amount of spacing so buttons may be placed next to each other.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Checkbox 
???

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Choice 
The result of a user selection.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Dropdown 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Grid 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Header 
???

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Icon 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Image 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Input 
Textual input.


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Link 
A link to other content.


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) List 
Core modifiers: `divided` `ordered` `unordered` `nested` 
Groupings of related content. 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Media 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Overlay 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) ProgressBar 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Select 
A select box to allow the user to choose one or more items from a list. By default goose assumes `react-select` is being used.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Table 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) ToggleSet 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Toggle
A user input that can toggle a boolean value.

Core modifiers: `active`
- `active` - The appearance of the toggle while it's true.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Terminal 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Text 

Any text to display on the website, e.g. copy, headings, titles.

#### Sizing
- `size<SiPrefix>`
  - `sizeGiga` roughly corresponds with traditional `h1` sizing
  - `sizeMega` roughly corresponds with traditional `h2` sizing
  - `sizeKilo` roughly corresponds with traditional `h3` sizing
  - `sizeHecto` roughly corresponds with traditional `h4` sizing
  - `sizeMilli` roughly corresponds with traditional `small` sizing
  
#### Margins
- `margin<SiPrefix>`
  - `marginGiga` margins often go well with `sizeGiga`
  - `marginMega` margins often go well with `sizeMega`
  - `marginKilo` margins often go well with `sizeKilo`
  - `margin` margins often go well to space out normal paragraphs

#### Importance
- `emphasis` - Styled to demonstrate an emphasis on the text.
- `muted` - Styled to be muted, less important than normal.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Typography 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Wrapper 
A container that enforces vertical page boundaries, such as a maximum width and page alignment.

Core modifiers: `spread` `$breakpoint`
- `spread` - Fills the width of the parent element.
- `$breakpoint` - Sets a maximum width of the element, typically with values such as `large`, `small` etc.


# Too Complex. (Are they molecules?)

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Pagination 
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Lightbox 
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Overlay 
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
- `state=success` - A message that is styled to appear as though something has succeeded.
- `state=error` - A message that is styled to appear as though something has failed.

#### Modifiers

The `appearance` and `state` of a Message are applied as modifiers to a Message.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Login 
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Modal 

A standard layout of components to display as a modal. This refers specifically to the content (title, message, buttons) and not the `Overlay` specific visual features such placement of the modal or the possible darkening of the background.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Breadcrumbs 
The representation of one branch of a tree hierarchy



# Todo: Confused modifiers

These are perhaps too bound to specific visual or design choices and will need to be worked upon before being accepted or rejected from goose.

- `flood` - Fills the width and height of the parent element.
- `spread` - Fills the width of the parent element.
