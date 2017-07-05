# Goose
The base of a Spruce component library

# Core Components

## Badge
An un-interactive presentation of state.
Core modifiers: `success` `failure` `hero` `$color`

## Box
A divided area of content.

The unmodified `Box` should not have any margins or padding so it can be used as an invisible element container, like a `<div>`.

Core modifiers: `hero` `success` `failure` `hairline` `thin` `thick`
- `thin` - Applies a thin amount of padding.
- `thick` - Applies a thick amount of padding.

## Button
Core modifiers: `primary` `hero` `success` `failure` `$color` `small` `clear` 
- `primary` - Makes the button more visually prominent.

The unmodified `Button` should be styled in a secondary color. The `primary` modifier can be used to highlight buttons that need more visual prominence.
Buttons should 

## Checkbox
???

## Choice
The result of a user selection.

## DayPicker
A way to choose a date and or time.

## DeadEnd
The point at which the user can no longer progress and must choose to navigate elsewhere.
E.g: 404's, Large form submissions.


## Dropdown


## FieldRow

## Grid

## Header
???

## Icon


## Input
Textual input.

## Lightbox


## Link
A link to other content.


## List
Core modifiers: `divided` `ordered` `unordered` `nested` 
Groupings of related content. 


## Loader
Displays the current state of some asynchronous operation.

### Children:
 * `message` - Indicates the reason for this asynchronous state.
 * `progress` - Visual indication that the operation is ongoing. E.g. spinner, percentage, bar.

### Core Modifiers:
 * `spinner`
 * `progress`


## Login

## Media

## Message
Information presented to the user from the site. 

## Modal

## Navigation

## Overlay

## Pagination

## ProgressBar

## Select

## Table

## ToggleSet

## Terminal

## Text
Raw characters of text.

Core modifiers: `alpha` `beta` `gamma` `delta` `label` `strong` `emphasis` `muted` `left` `center` `right`

#### Sizing
- `alpha` - First level heading.
- `beta` - Second level heading.
- `gamma` - Third level heading.
- `delta` - Fourth level heading.

#### Visual Prominence
- `emphasis` - Styled to demonstrate an emphasis on the text.
- `muted` - Styled to be muted, less visually prominent than normal.

#### Alignment
- `left` - Left aligned text.
- `center` - Center aligned text.
- `right` - Right aligned text.


## Typography

## Wrapper
A container that enforces vertical page boundaries, such as a maximum width and page alignment.

Core modifiers: `spread` `$breakpoint`
- `spread` - Fills the width of the parent element.
- `$breakpoint` - Sets a maximum width of the element, typically with values such as `large`, `small` etc.

# Extra Components

## Animation

## Breadcrumbs
The representation of one branch of a tree hierarchy

# Generic Modifiers

These modifiers have a common meaning across all components, and may be implemented by many different components.

- `column`
- `flood` - Fills the width and height of the parent element.
- `hero` - Applies the hero color scheme to the element.
- `row`
- `spread` - Fills the width of the parent element.
