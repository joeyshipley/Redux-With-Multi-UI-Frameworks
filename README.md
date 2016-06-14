## Purpose ##

Explore protecting the frontend logic from the ever changing JS frameworks world.

## WIP ##

Currently Aurelia is not setup or working. Fighting through some aurelia/webpack stuff ATM.

##### Current Implementations #####

* (UI) - React
* (UI) - Angular2
* (UI) - Aurelia
* (Shared) - Redux
* (Shared) - Interactors

## Structure ##

Inserting a boundary in the frontend to seperate the UI logic from the Application logic. Looking at the UI frameworks in place, it is reasonable to assume that they can be replaced with near any UI framework with little to no changes to the Interactor or State layers.

Currently this experiment utilizes Redux as the applications data/state management, where all of its logic should be 'clean', immutable, without side effects. 

##### State Management #####

The state/data is housed in a seperate section of frontend to protect it from the complexity of user behavior and the changing javascript landscape. In this layer, a strict no side effect policy is in place to make sure that it is easy to digest what is happening to and effecting the data, while picking up a path to simple and solid tests. Currently this example is using Redux. You could easily replace it with Flux as they are similiar, but nothing would stop you from using something else or rolling your own custom pattern.

##### Interactors #####

To serve as the communication across the boundary of async/sync and pure/non-pure, the Interactor layer houses that transition logic. Currently, the thought is to have the interactors handle the synchronous Actions and then to Dispatch and return Promises to the UI layer. This will keep the transition between the two different flows from bleeding into the other sides of the boundary.

##### UI Frameworks #####

While this example only uses a few of the 'currently' modern frameworks, near any framework that allows you to update the UI based on state given to it can be used in this structure.

For example looking at this commit when implementing the Angular2 UI version of the calculator, I had only touched a React file because of some cosmetic changes that was noticed when working on the Angular version. If I had been a little smarter about it, I would have waited for a seperate commit to show this better. 

https://github.com/joeyshipley/Redux-With-Multi-UI-Frameworks/commit/3142f400ef19b3fb3046d706f25988293f499c82

##### Flow #####

```
UI Framework      (Angular | React | Aurelia | etc...)
     |
     V
Interactor        (Actions | Dispatch | Promises | API | etc...)
     |
     V
State Management  (Reducers | Store)
```

##### Folder Structure #####

```
src
+  app
|  + feature folders (calculator, localization, users, etc...)
|    |  - interactor
|    |  - actions
|    |  - reducer
+  ui 
|  + (structured based on need: page seperation, feature seperation, components, and so on)
|    |  - components
|    |  - templates
|    |  - pages
|    |  - etc...
```

## Setup ##

* Node 6.0.0 (Ignore node stack traces, does not affect app and will be resolved as community works out the issues)
* Terminal: npm install

###### And then choose your front end... ######

* Terminal: npm run react
* Terminal: npm run angular
* Terminal: npm run aurelia
