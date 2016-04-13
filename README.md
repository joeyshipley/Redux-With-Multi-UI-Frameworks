## Purpose ##

Experiment with protecting the frontend logic from the changing JS frameworks.

###### Shared ######

* Redux
* Interactors

###### UI #####

* React
* Angular2

## Structure ##

Inserting a boundry in the frontend to seperate the UI logic from the Application logic. Looking at the UI frameworks in place, it is reasonable to assume that they can be replaced with near any UI framework with little to no changes to the Interactor or State layers.

Currently this experiment utilizes Redux as the applications data/state management, where all of its logic should be 'clean', immutable, without side effects. 

##### State Management #####

The state/data is housed in a seperate section of frontend to protect it from the complexity of user behavior and the changing javascript landscape. In this layer, a strict no side effect policy is in place to make sure that it is easy to digest what is happening to and effecting the data, while picking up a path to simple and solid tests. Currently this example is using Redux. You could easily replace it with Flux as they are similiar, but nothing would stop you from using something else or rolling your own custom pattern.

##### Interactors #####

To serve as the communication across the boundry of async/sync and clean/non-clean, the Interactor layer houses that transition logic. Currently, the thought is to have the interactors handle the synchronous Actions and then to Dispatch and return Promises to the UI layer. This will keep the transition between the two different flows from bleeding into the other sides of the boundry.

##### UI Frameworks #####

While this example only uses a few of the 'currently' modern frameworks, near any framework that allows you to update the UI based on state given to it can be used in this structure.

For example looking at this commit, we implemented the Angular2 UI interface for the calculator and had only touched a React file because I wanted to do some cosmetic changes that I noticed when working on the Angular version. If I had been a little smarter about it, I would have waited for a seperate commit to show this better. 

https://github.com/joeyshipley/ReduxCalc/commit/3142f400ef19b3fb3046d706f25988293f499c82

##### Flow #####

UI Framework (Angular | React | etc...)

     |
     V

Interactor (Actions | Dispatch | Promises | ServerSide Interactions | etc...)

     |
     V

State Management (Reducers | Store)

## Setup ##

* Terminal: npm install

###### And then choose your front end... ######

* Terminal: npm run react
* Terminal: npm run angular
