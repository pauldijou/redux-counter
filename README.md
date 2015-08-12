# redux-counter

Since I started using Redux, I've been wondering why using string constants? Is there a good reason for that?

For me, it's really error prone. In a big app, it might be easy to miss an already existing constant and create a new one with the same string. The code will look just fine since each store will import actions from a different file but when dispatching one action, all will be a mess, both stores will try to update (since using the same action type) but one of them will probably fail since it wasn't expecting such action payload (or worse, the payload match and the state will be updated in the wrong way).

Saying `Just check your constants before creating a new one!` isn't valid IMO. People make mistakes, that's it. And if there is a way to prevent them, we might want to go in this direction. One easy way to solve this is using object references rather than strings.

```javascript
// Using string
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
// Using reference, just create an empty object
// (and it's even less verbose !!)
export const INCREMENT_COUNTER = {};
```

All the rest of the code is exactly the same. You can still use switch statements, it works fine with references. What about the action map pattern? Where you have a `Map[String, Function]` where the key is the action type. You can still do it of course, but using an ES6 Map where you can actually have objects as keys.

You can check a [GitHub repo](https://github.com/pauldijou/redux-counter) which demonstrate the counter example using references rather than strings. I have put an [obvious mistake](https://github.com/pauldijou/redux-counter/blob/master/constants/ActionTypes.js) in the string constants to illustrate how all the code can be just fine but just using the wrong string in the constant break everything.

The only drawback is logging since I guess most people are using the action type to log actions. I understand why since it's really easy to do so. Well, you can still put something the object after all and use it to log your actions...

```javascript
// Dammit... it's verbose again...
export const INCREMENT_COUNTER = { name: 'INCREMENT_COUNTER' };
```

So, what do you think about the idea?
