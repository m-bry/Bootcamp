$(()=>{
    $(`#img1`).click(()=> {
        $(`#img1`).addClass('imgClik');
        $(`.imgClik`).fadeOut();
        alert(`You have clicked the image`);
    })
    
    // $(`li`).click(()=> {
    //     alert(`You have clicked on a list element`);
    // })

    //Switched to named function in order use 'this' keyword
    $(`li`).click(function clickEvent1(){
        $(this).addClass('clicked');
        $(`.clicked`).fadeOut();
    })

    $(`li`).click(function clickEvent2(){
        alert($(this).text());
    })

    // $(`div p span`).click(function clickEvent3(){
    //     $(this).remove().stopPropogation();
    // })
        $(`div p span`).click(function clickEvent3(){
        $(this).remove().stopPropagation();
    })

    $(`div p`).click(function clickEvent4(event){
        event.stopPropagation();
        $(this).remove();
    })

    $(`input`).keypress(function clickEvent5(event){
        if(event.which === 13){
            console.log(`Event object:`, event);
        }
    })

    $(`ol`).append(`<li>Magenta</li>`);
    $(`ol`).append(`<li>Zima Blue</li>`);

    $(`#img2`).click(function clickEvent1(){
        $(this).addClass('imgClik');
        $(`.imgClik`).fadeOut(5000)
        setTimeout(()=>{
            alert(`The image is now gone.`);
        }, 5000);
    })

})