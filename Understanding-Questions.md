# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.

* onCLick event is called
* onCLick event calls the useReducer dispatch
* dispatch is called with the addOne function action creator (defined in actions/index.js)
* reducer recieves action
* case matches the action type with ADD_ONE
* returns a new state with total incemented by one

* TotalDisplay shows the total plus 1.
