//define the outer function
function outer(){
    console.log('outer');
    inner();
    console.log('done with outer');
}

//define the inner function
function inner(){
    console.log('inner');
}

//run the outer function
outer;