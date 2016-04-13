### Purpose ###

Experiment with protecting the frontend logic from the changing JS frameworks.

###### Shared ######

* Redux
* Interactors

###### UI ######

* React
* Angular2

### Architecture ###

Inserting a boundry in the frontend to seperate the UI logic from the Application logic. Looking at the UI frameworks in place, it is reasonable to assume that they can be replaced with near any UI framework with little to no changes to the Interactor layer back.

Currently this experiment utilizes Redux as the applications data/state management, where all of its logic should be 'clean', immutable, without side effects. An interactor layer sits between Redux and the UI implementation. The interactors serve as the transition from clean to the variety of things that will be needed to make an app function... .

### Setup ###

* Terminal: npm install

###### And then choose your front end... ######

* Terminal: npm run react
* Terminal: npm run angular
