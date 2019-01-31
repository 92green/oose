---
id: introduction
title: Introduction
---

## Why
* Unidirectional rendering frameworks have given developers the ability to modularise code bases. 
* The prevailing methodology seems to be small dumb components and large smart components.
* This split is too naive and in practice it doesn't create a meaningful abstraction. Codebases end 
up with a tiny amount of small reusable 'dumb' components and a large amount of monolithic 
application specific 'smart' components.

What the front-end really needs is a way to talk about interfaces that effectively separates its concerns. 

## Core Ideas
Moose aims to provide clear descriptions of the parts that make up a client-side application.
If we can describe these parts correctly it becomes easy to label and categorise the areas of our 
apps. Once categorised, code structure and responsibility becomes easier to define.

## Clientside Concerns
The client side code has six clear areas of concern:

* Data fetching
* Data Storage
* Application logic
* User Interaction Logic
* Positional Styles (Layout)
* Aesthetic Styles (Component Styles)

_Broadly speaking you can split these six areas of concern into two main layers. Application and 
Interaction. Application is concerned with data and how it is stored and transformed to render.
Interaction is concerned with how things look and feel and how the user interacts with them.

The interaction layer is general and naturally lends itself to abstraction. The application layer is 
specific and tends to describe concrete implementations._


## Application Layer
### Data Fetching
This concern describes how data from exterior sources makes it's way into the application. 

### Data Storage
Often labelled as state management, data storage describes how external data is stored in memory 
throughout your app.

### Application Logic 
Like business logic in a backend, application logic is the specific ways that data is transformed 
and applied to your interfaces. Taking a collection of users and applying their attributes to a 
table is application logic. In a unique location you have decided that these users are best 
displayed as a table and this is how you transform the data into the shape a table requires.

## Interaction Layer
### Interaction Logic 
Distinct to application logic, interaction logic is the specific ways the user interacts with parts 
of the site. When a user types in a search box and a list of possible choices appears, that is 
interaction logic. Some part of the app is concerned with what the user has typed and what possible
choices it could show in response. It is a separate concern from application logic because it 
doesn't care what data it is given or where it came from, just how that data should respond to the 
users interaction. 

### Aesthetic Styles
Aesthetic styles describe how your individual components should look. Libraries and methodologies,
like Bootstrap, Atomic Design etc. have got this right. You can describe all possible states of a 
button quite clearly and all the code required to define how a button looks should be separate from 
other parts of your app.

### Positional Styles 
Positional styles describe how the different parts of your app relate to each other in position. 
Grids, floats, text spacing all fall under this category. Component libraries often become bloated 
and confused when positional styles are combined with aesthetic ones. Class names like 
`.marginLeftLarge` and `paddingTopExtraSmall` become littered throughout the app, making things hard 
to move and refactor. Positional styles are a unique concern and should be separate for other parts 
of you app.


