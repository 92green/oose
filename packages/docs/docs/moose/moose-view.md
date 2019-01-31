---
id: view
title: Views
---

Views bind data to your structures. They orchestrate what data is fetched, and when it returns they 
provide it to the structure. The structure defines an api for what data it requires to render 
correctly. It is up to the view to make sure that data is given to it. 

### Example
Our coffee shop profile page structure needs data before it can render. It needs a list of coffee 
shops, information on the state of the request. The coffee shop
profile view should then fetch the required list of coffee shops and pass them to the view.

### Rules
* Views can contain data fetching code.
* Views are specific
* Views can have a one to one relationship to a structure
* Views don't have to be a component. (Hoc chain)


