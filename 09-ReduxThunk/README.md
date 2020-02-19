# What are we doing here?

In this example I show how to use React with Redux and explain what **Redux Thunk** is. I want to show a list of posts from a blog like in the following picture.

![Result](https://github.com/erossini/ReactJsTutorial/blob/master/09-ReduxThunk/images/Result1.png)

For creating this example, I use fake API from [http://jsonplaceholder.typicode.com/](jsonplaceholder.typicode.com).

To achieve the result, we have to follow this process:

![Process](https://github.com/erossini/ReactJsTutorial/blob/master/09-ReduxThunk/images/process.png)

![Redux cycle](https://github.com/erossini/ReactJsTutorial/blob/master/09-ReduxThunk/images/redux-cycle.png)

## Rules of reducers

- must retun any value desides `undefined`
- prodeces 'state' or data to be used inside of your app using only previous state and the action
- must not return reach `out of itself` to decide what value to return (reducers are pure)
- must not mutate its input `state` argument

# What is a middleware in Redux?

![Middleware in Redux](https://github.com/erossini/ReactJsTutorial/blob/master/09-ReduxThunk/images/middleware.png)

# What Redux thunk does?

[Redux thunk repo](https://github.com/reduxjs/redux-thunk)

![What Redux thunk does?](https://github.com/erossini/ReactJsTutorial/blob/master/09-ReduxThunk/images/redux-thunk.png)

![Redux Thunk flow](https://github.com/erossini/ReactJsTutorial/blob/master/09-ReduxThunk/images/redux-thunk-flow.png)


# Create the project

As usual, we can create the base project with

```
npx create-react-app blog
```

Also we have to install some dependecies.

- Redux
- React-Redux
- Redux-Thunk
- Axios

```
npm install --save redux react-redux axios redux-thunk
```

![Dependecies explain](https://github.com/erossini/ReactJsTutorial/blob/master/09-ReduxThunk/images/dependecies-explain.png)

# Bad and good ways to mutate an array

![Mutate an array](https://github.com/erossini/ReactJsTutorial/blob/master/09-ReduxThunk/images/good_update_object.png)

[Lodash](https://lodash.com/): a modern JavaScript utility library delivering modularity, performance & extras. Easy way to work with objects and arrays