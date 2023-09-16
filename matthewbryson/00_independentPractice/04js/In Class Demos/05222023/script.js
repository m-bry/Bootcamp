   $("button").on("click", function() {
    var endpoint = "https://dog/ceo/api/breeds/image/random";
    fetch(endpoint)
    .then((response) => {
        //console.log(response.json());
        reutrn response.json()
    })
   })
   .then((data) => {
    console.log(data.messsage)
    $("img").attr("src", data.message)
   })
   .catch((error) => {
    console.log("Error: ", error)

   })