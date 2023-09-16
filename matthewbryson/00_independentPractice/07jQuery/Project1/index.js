//Fat arrow function version of document ready event
$(()=>{
    //Task 2.1
    const firstHeader = $(`h1:first`).text();
    //Task 2.2
    alert(
        `The content of my h1 tag is: ${firstHeader}.`
    );
    //Task 2.3
    $(`h1:first`).text(`This is Matthew Bryson's header`);
    //Task 2.4
    $(`#canine`).text(`Lion`);
    //Task 2.5
    $(`.feline:nth-child(2)`).text(`Leopard`);
    //Task 3.3
    $(`#imageSrc`).text($(`img:first`).attr(`src`));
    //Task 3.4
    $(`img:first`).attr(`src`, `https://i.imgur.com/YVmUMw7.gif`);
    //Task 3.5
    $(`#imageSrc`).text($(`img:first`).attr('src'));
    //Task 3.7 (Commented out to test line 23 & line 24)
    $(`input:first`).attr(`type`, `color`);
    //Task 3.8
    $(`input:first`).attr(`id`, `inputColor`);
    $(`#inputColor`).attr(`type`, `color`);
    //Task 4.3
    //The input box never has a stored value, so this doesn't work?
    //Task 4.4
    $(`input:nth-child(2)`).val(`horse`);
    //Task 6.3
    $(`li`).addClass(`box`);
    //Task 6.4
    $(`img:first`).addClass('imageBox');
    //Task 6.5
    $('ul li:first').removeClass('box').addClass('imageBox');
    //Task 6.6
    $('ul li:last').removeClass(`box`);
});