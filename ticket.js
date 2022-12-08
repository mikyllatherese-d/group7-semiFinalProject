
function myFunction(){
    var selector = document.getElementsByName("location")[0];
    var value = selector[selector.selectedIndex].value;
    document.getElementById('result').innerHTML = value;

document.addEventListener("DOMContentLoaded", myFunction);
}

function myFunc(){
    var selector = document.getElementsByName("subtract")[0];
    var value = selector[selector.selectedIndex].value;
    document.getElementById('res').innerHTML = value;

document.addEventListener("DOMContentLoaded", myFunc);
}   

function bookNow(){
    window.location.reload();
}