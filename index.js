let repass= $("#Re-Password");
let signup= $("#signup");
let signin= $("#signin");
let submit= $("#submit");

signin.addClass("green");
signup.click ( function() {
    repass.css('maxHeight','0');
    signup.addClass("green");
    signin.removeClass("green");
})

signin.click( function(){
    repass.css('maxHeight','3rem');
    signin.addClass("green");
    signup.removeClass("green");
})

submit.click( function () {
    if( repass === "" || signin === "" || signup === ""){
        alert("Please Fill all the contents first!");
        return false;
    }
    else{
        window.location.href = 'landing.html'; 
    }
})