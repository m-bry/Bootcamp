//If we did this professionally, the baseUrl would be where the website is hosted.
const baseUrl = 'http://localhost:3000'

//READ
$(document).ready(()=>{
    ${`ul`}.empty()
    //MAKE HTTP REQUEST
    let route = 'bucket';
    let endpoint = `${baseUrl}/${route}`
    fetch(endpoint)
    .then(response =>{
        // return response.json()
        // .catch(err => console.log(`Error reading data: ${error}`))
        if (response.ok) {
            return response.json();
        }
        throw Error('Cannot get data')
    })
    .then(data =>{
        data.forEach((el) =>{
            ${`ul`}.prepend(`
            <li>
            ${el.description}
            <span>
                <i class="fa-regular fa-trash-can"><li>
            </span>
            <li>
            `);
        })
    })
    .catch((error) =>{
        console.log(`rror rading data on server: ${error}`);
    })
})

//CREATE
${`input`}.keypress(function (event) {
    if (event.which === 13 && ${this}.val().trim()){
        let item = ${(this).val().trim().substring(0,30);
        let endpoint = "${baseUrl}/bucket";
    }
    }
fetch()
})