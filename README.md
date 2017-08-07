# Goose
The base of a Spruce component library. It aims to describe the functions of UI components semantically, and without knowledge of how styles will visually appear.

# Core Components

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Badge 
An un-interactive presentation of state.
Core modifiers: `success` `failure` `hero` `$color`

## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Box 
A divided area of content.

The unmodified `Box` should not have any margins or padding so it can be used as an invisible element container, like a `<div>`.

### Modifiers
* `hero` - 
* `success` - 
* `failure` - 
* `hairline` - 
* `thin` - Applies a thin amount of padding.
* `thick` - Applies a thick amount of padding.
* `tight` - Applies a tight amount of margins.
* `loose` - Applies a loose amount of margins.


## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square) Button 

The unmodified `Button` should appear as having netural importance. The `primary` modifier can be used on buttons that need to convey more importance.

Core modifiers: `primary` `success` `failure` `$color` `small` `clear` `solo`
- `primary` - Makes the button more important.
- `success` - A button that implies a positive outcome.
- `failure` - A button that implies a negative outcome.
- `solo` - A button that is standalone and does not have siblings within the information heirarchy.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Checkbox 
???

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Choice 
The result of a user selection.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Dropdown 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) FieldRow 

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


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Loader 
Displays the current state of an asynchronous operation.


## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Media 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Message 
Information presented to the user from the site. 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Overlay 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) ProgressBar 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Select 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Table 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) ToggleSet 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Terminal 

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Text 
Raw characters of text.

Core modifiers: `alpha` `beta` `gamma` `delta` `label` `strong` `emphasis` `muted`

#### Sizing
- `alpha` - First level heading.
- `beta` - Second level heading.
- `gamma` - Third level heading.
- `delta` - Fourth level heading.

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
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Navigation 
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) DayPicker 
A way to choose a date and or time.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) DeadEnd 
The point at which the user can no longer progress and must choose to navigate elsewhere.
E.g: 404's, Large form submissions.

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Login 
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Modal 
## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square) Breadcrumbs 
The representation of one branch of a tree hierarchy



# Todo: Confused modifiers

These are perhaps too bound to specific visual or design choices and will need to be worked upon before being accepted or rejected from goose.

- `flood` - Fills the width and height of the parent element.
- `spread` - Fills the width of the parent element.
