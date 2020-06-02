# Returns the value of a nested object, an included parameter, or undefined

This is not necessary when using ECMAScript 2020 or later or TypeScript 3.7 or later which support [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining). 

`duckling?.name?.maiden`


```js
const objSafe = require('objSafe');

const duckling = {
    name: {
        current: 'Quackers'
    }
 };

objSafe (duckling.name.maiden); // -> undefined
objSafe (() => duckling.feathers.color, 'white'); // -> 'white'
objSafe (duckling.name.current, 'Arnold'); // -> 'Quackers'
```


from (StackOverflow answer)[https://stackoverflow.com/questions/14782232/how-to-avoid-cannot-read-property-of-undefined-errors]