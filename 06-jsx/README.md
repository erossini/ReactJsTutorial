# Videos from YouTube

![](https://github.com/erossini/ReactJsTutorial/blob/master/06-jsx/images/Screenshot_result.png)

## Component

![](https://github.com/erossini/ReactJsTutorial/blob/master/06-jsx/images/Components.png)

![](https://github.com/erossini/ReactJsTutorial/blob/master/06-jsx/images/Component_hierachy.png)

# Alert

In this code I create an axios instance with default values to call the YouTube API with. As of today (5/30/2019), the axios library released v0.19.0 which seems to have included a bug that was never resolved in the beta version. This will cause a 400 error failure with the message "Required Parameter : part"

The get around this and follow along with the course, do the following:

```
npm install axios@0.18.1
```