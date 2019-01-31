---
id: Message
title: Message
---

## ![](https://img.shields.io/badge/-draft-red.svg?style=flat-square)
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
