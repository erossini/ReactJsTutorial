# What are we doing in this code?

- Class-based components
- State in React Components
- lifecycle
- Ternary expressions in JSX
- helper functions

![](https://github.com/erossini/ReactJsTutorial/blob/master/03-jsx/images/components.png)

What is the difference between an **functional** component and a **class** component?

![](https://github.com/erossini/ReactJsTutorial/blob/master/03-jsx/images/function-or-component.png)

## Benefits of Class components

- easier code organization
- can use 'state' (another `React` system) and to handle user input
- understands lifecycle events also when the app starts

![](https://github.com/erossini/ReactJsTutorial/blob/master/03-jsx/images/Class-component.png)

## Lifecycle method

- constructor
- render
- componentDidMount
- componentDidUpdate
- componentWillUnmount

A component lifecycle method is a function that we can optionally define inside of our class based components if we decide to implement these methods. They will be called automatically by react at certain points during a component's life cycle. And when I use the term lifecycle I'm referring to the fact that a component is going to be created and then show up in the DOM or show up on the screen of our browser and then at some point in time we might do something like say call set state which will cause the component to render and then in theory at some point in time a component might be removed from the DOM altogether and stop showing its content on the screen.

That entire series of events is for two as the components life cycle.

So these lifecycle methods are functions that are called during very distinct or discrete times during that cycle. We've already seen the constructor function that is a function that we can optionally define if we do it will be automatically called when a new instance of our component is created.

And we've also spoken about the render method the render method is not optional which is unlike all the other methods on here.

So the render method is the one function that we absolutely have to define. Now technically the render method is a lifecycle function.

It gets called at some point during the lifecycle of a component.

We start off with the constructor being called then the render method will be called we return some amount of GSX and that content then becomes visible on the screen.

After that we're going to see a series of different life cycle methods being called at different points in time.

First off immediately after a component shows up on the screen of our browser a lifecycle method calls component did mount is called. So that means that if we define a function inside of our class like right here outside of the constructor right above the render method.

If we define a method right here called very specifically component did MT like so this function will be automatically called one time when our component first gets rendered onto the screen.

So we could put some amount of code inside of here to set up or do some initial data loading or a wide variety of different operations that we might want to do.

After that component did mount method gets called our component essentially we'll sit around and wait for an update member an update is going to come in the form of calling that set state method anytime we call set state and update our state.

The component will render itself or essentially update itself.

Anytime that happens another lifecycle method is called component did update will be called automatically.

And so once again if we decided we wanted to we could optionally define a function inside if you're called very specifically component.

Did update if we defined that function it will be called automatically any time that our component updates itself.

Then after that our component might just sit around and wait until it gets another update. If it gets another update component to it update we'll be called a second time or third time fourth time.

However many times our component gets updated at some point in time.

We might decide to stop showing this component on the screen.

So if for some reason we decide to no longer show this method we are asked to meet show this component the component will unmount method will be automatically called this method will be usually used if we want to do some kind of cleanup after our component. 

![](https://github.com/erossini/ReactJsTutorial/blob/master/03-jsx/images/lifecycle.png)

# App challenges

- need to get the users physical location
- need to determine the current month
- need to change text and styling based on location + month

![](https://github.com/erossini/ReactJsTutorial/blob/master/03-jsx/images/result1.png)

# How to create yout app

```
npx create-react-app seasons
```

# Dependecies

<<<<<<< HEAD
![Mozilla Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
![Babeljs](https://babeljs.io/) to try how your code looks like with different implementation of javascript
=======
[Mozilla Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
>>>>>>> 6392dd4c690150dafbcd21fe0b537bea6bf23727
