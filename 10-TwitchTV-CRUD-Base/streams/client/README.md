# What are we doing here?

## Dependencies

- Redux Form (https://redux-form.com/)

![Redux Form](https://github.com/erossini/ReactJsTutorial/blob/master/10-TwitchTV/images/reduxform.png)

```
npm install --save redux-form
```

## Redux architecture design

![Redux architecture design](https://github.com/erossini/ReactJsTutorial/blob/master/10-TwitchTV/images/redux-architecture-design-for-oauth.png)

# Redux Dev Tools

[Redux Tools Download](https://github.com/zalmoxisus/redux-devtools-extension)

# Debug mode with Redux Dev Tools

```
http://localhost:3000/?debug_session=thisisfortest
```

`thisisfortest` is a random string.

# json Server

`json server` (http://npmjs.com/package/json-server) gets a full fake REST API with zero coding in less than 30 seconds (seriously). Created with <3 for front-end developers who need a quick back-end for prototyping and mocking.

![Api Method](https://github.com/erossini/ReactJsTutorial/blob/master/10-TwitchTV/images/api-methods.png)

Create a new folder for your api, in this repo I have created a folder called `api`. Start a new project with

```
npm init
```

and press enter until the end. In the folder now, you find a `package.json` file. Open this file and change __only__ the `script` section like:

    {
      "name": "api",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
          "start": "json-server -p 3001 -w db.json"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "json-server": "^0.16.1"
      }
    }

Then, create in the root of the folder a file called `db.json`: this file will contain all records and we can do all classical operations (create, insert, update, delete) via api.

Replace the content in `db.json` with

    {
        "streams": []
    }

Now start your project with

```
npm start
```

Now you have your server up and running, read to accept your calls.

![json server](https://github.com/erossini/ReactJsTutorial/blob/master/10-TwitchTV/images/jsonserver.png)