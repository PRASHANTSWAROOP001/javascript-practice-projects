const redInput = document.querySelector("#red")
const blueInput = document.querySelector("#blue")
const greenInput = document.querySelector("#green")


const rgbButton = document.getElementById("Rgb-generator")

const rgbValue = document.querySelector(".rgb-value")

console.log(rgbValue);




rgbButton.addEventListener("click", (e)=>{
    let redValue = redInput.value;
    let greenValue = greenInput.value;
    let blueValue = blueInput.value;

 

    const rgbContainer = document.querySelector(".rgb-container") 
    rgbContainer.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;

    rgbButton.style.color = `rgb(${redValue},${greenValue},${blueValue})`;

    rgbValue.textContent = `rgb(${redValue},${greenValue},${blueValue})`

})

const RgbCopy = document.querySelector("#rgb-copy-button")

RgbCopy.addEventListener("click",(e)=>{

    navigator.clipboard.writeText(rgbValue.textContent)
    alert("text copied to clipboard")

})


const hexButton = document.querySelector("#hexButton")
const hexText = document.querySelector(".hex-text")

hexButton.addEventListener("click", (e)=>{

    const baseString= "0123456789abcdef"
    
    let randomHexValue = "#";

    for (let index = 0; index < 6; index++) {
        let randomValue = Math.floor(Math.random()*baseString.length)
        randomHexValue = randomHexValue + baseString[randomValue]
        
    }


    const hexContainer = document.querySelector(".hex-container");

    hexContainer.style.backgroundColor = randomHexValue

    hexText.textContent = randomHexValue;

    hexButton.style.color = randomHexValue


} )


const hexCopy = document.querySelector("#hex-copy-button")

hexCopy.addEventListener("click", (e)=>{
    if(hexText.content != ""){
    navigator.clipboard.writeText(hexText.textContent)
    alert("hex value copied to clipboard")
    }
})