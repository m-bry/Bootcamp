1. Consider the following code.  Why is apple type reported incorrectly as "Clementine", where it is set to "Granny Smith"?

    1. Answer: We have created a "shallow copy", which means we are pointing to the same location in memory but with a different name/variable. The line "var orange = apple" is like saying "Prince = 'The Artist Formerly Known as Prince'"; still the same thing but it now can be referred to by two different names. This means the line "orange.type = 'Clementine'" is the same as "apple.type = 'Clementine'". It is the same object with the same key/value pairs.

    (I still don't understand the point of a shallow copy. Please tell me!)



2. What would you change to address this issue whereby the apple.type is reported as it was set originally i.e. "Granny Smith". In other words, how would you make a true copy of the apple object?

    2. Answer: What we need is a "deep copy". There are a couple of ways to do this, one that falls in line with our conversations with node.js and express.js is JSON stringify/parse. One that we also talked about is the Spread Operator, which in this case requires the least amount of changes to the supplied code, making it the choice I would choose.
```js
//JSON DEEP COPY
    const apple = {
        type: 'Granny Smith',
        weight: 4
    };
    
    let orange = JSON.parse(JSON.stringify(apple));

    orange.type = 'Clementine';
    console.log(`Apple type is ${apple.type} & Orange type is ${orange.type}`);
```
```js
//SPREAD OPERATOR DEEP COPY
    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = { ...apple };

    orange.type = 'Clementine'

    console.log(`Apple type is ${apple.type} & Orange type is ${orange.type}`);
```
```js
//SHALLOW COPY
    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)
```



3. Why does this comparison return false?  Please explain.

    3. Answer: This statement does not compare the values within the objects, but rather the objects themselves. As discussed in the previous question, it's all about where the object is stored in memory. Since these two objects are defined separately, they point to different addresses in memory, therefore returning "false" when comparing the two. If you compare the values of the keys within the two objects you'll get "true" because they are equal values, but this doesn't mean the objects are equal to eachother (or in other words, "the same").


```js    
    var school_a = {name: 'UTexas', place: 'Austin'};
    var school_b = {name: 'UTexas', place: 'Austin'};

    console.log(school_a == school_b);   // returns false, why?
    console.log(school_a.name === school_b.name); // returns true
    console.log(school_a.place === school_b.place); // returns true
```