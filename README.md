# Returns the value of a nested object or undefined


```js
const getSafe = require('./index'); // or
// import getSafe from ('getsafe);

const duckling = { };

getSafe (duckling.name.maiden); // -> undefined
getSafe (duckling.feathers.color, 'white'); // -> 'white'
```


from (StackOverflow answer)[https://stackoverflow.com/questions/14782232/how-to-avoid-cannot-read-property-of-undefined-errors]