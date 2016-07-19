# react-waypoint-issue-108-example

This demonstrates [Issue #108](https://github.com/brigade/react-waypoint/issues/108) in React-Waypoint.

### Try it out

1. Clone this repository
2. Run `npm install` from the root directory of the repo
3. Open `index.html` in your browser
4. Scroll around with the console open

### What is the grey square?

The grey square represents the bottom 20% of the viewport. In this example, the `scrollableAncestor` is the window, meaning that the boundaries of React Waypoint will be the viewport boundaries.

However, `topOffset` has been specified as 80%, meaning that the top boundary has been scooted down by that much. This means that only the bottom 80% of the viewport will be the area in which waypoints are considered "inside," which will affect when the enter and leave events are triggered.

### What should I be seeing?

![React Waypoint 108 Example](https://cloud.githubusercontent.com/assets/2322305/16938759/0ea0c634-4d30-11e6-814a-1ca670384657.gif)
