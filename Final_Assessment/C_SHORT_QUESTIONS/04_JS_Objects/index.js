    // Shallow Copy
    // const apple = {
    //     type: 'Granny Smith',
    //     weight:  4
    // }

    // var orange = apple

    // orange.type = 'Clementine'

    // console.log('Apple type is ', apple.type)

    //Deep Copy using JSON
    // const apple = {
    //     type: 'Granny Smith',
    //     weight: 4
    // };
    
    // let orange = JSON.parse(JSON.stringify(apple));

    // orange.type = 'Clementine';
    // console.log(`Apple type is ${apple.type} & Orange type is ${orange.type}.`);

    //Deep Copy using Spread operator
    // const apple = {
    //     type: 'Granny Smith',
    //     weight:  4
    // }

    // var orange = { ...apple };

    // orange.type = 'Clementine'

    // console.log(`Apple type is ${apple.type} & Orange type is ${orange.type}`);

    var school_a = {name: 'UTexas', place: 'Austin'};
    var school_b = {name: 'UTexas', place: 'Austin'};

    console.log(school_a === school_b);
    console.log(school_a.name === school_b.name);
    console.log(school_a.place === school_b.place);