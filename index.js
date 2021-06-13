//grab elements from the DOM

num = document.getElementById("numberBox");

//create a way to convert any positive integer the user enters to a negative integer.

function convertNumber(num) {
    console.log(num);
    return -Math.abs(num);
}

