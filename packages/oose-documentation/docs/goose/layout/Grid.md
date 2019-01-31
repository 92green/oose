---
id: Grid
title: Grid
---

## ![](https://img.shields.io/badge/-candidate-yellow.svg?style=flat-square)
A `Grid` consists of a series of columns, whose widths are defined by ratios of the `Grid`'s total width. These ratios are divisions of 12, so a 2 column `Grid` would contain 2 columns, each with width 6. By default `Grid`s columns stack on top of each other on small page widths.

`Grid`s always have `Grid_column` child elements.

### Modifiers
- `Grid_column-1`, `Grid_column-2` ... `Grid_column-12` - Sets the width of the column as a division of 12 of the `Grid` width.
- `Grid_column-always` - Disables collapsing the Grid on small page widths.
- `Grid_column-shrink` - Causes a `Column` to be the same width as its contents.
- `Grid_column-padding` - The padding between each column. Padding is not applied to the left of the leftmost column, or on the right of the rightmost column.

