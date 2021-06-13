//grab elements from the DOM

let num = document.getElementById("numberBox");
const goButton = document.getElementById("go-btn");
const parentDiv = document.getElementById("resultDiv");
const renderNumber = document.createElement('p');

//create a way to convert any positive integer the user enters to a negative integer.

 function convertNumber(num) {
     num = document.getElementById("numberBox");
     
    renderNumber.innerText = '';
    if (num.value < 1) {
        renderNumber.innerText = `Oops! Try it with a positive number instead!`;
    } else {
    renderNumber.innerText = `-${num.value}`;
    parentDiv.append(renderNumber);
    return -(Math.abs(num.value));
    }
}

//create an event listener that starts the vowel count when the user clicks on the 'go' button.
goButton.addEventListener("click", function() {
    return convertNumber(num.value);
});



