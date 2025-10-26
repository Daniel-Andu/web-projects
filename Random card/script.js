const generateBtn=document.getElementById("generate-btn")
const paletteContainer=document.querySelector(".palette-container")

generateBtn.addEventListener("click", generatePalette)


function generatePalette(){
    const colors = [];
    for(let i=0; i<5; i++){
        colors.push(generateRandomColor())

    }

    updatePaletteDisplay(colors)
}
function generateRandomColor(){
  const letters = "0123456789ABCDEF";
  let color = "#";

   for(let i = 0; i<6 ; i++){
    color+= letters[Math.floor(Math.random() * 16)];
   }
  return color;
   
}


    function updatePaletteDisplay(colors){
    const colorBoxes = document.querySelectorAll(".color-box");

    colorBoxes.forEach((Box,index) => {


        const color = colors[index];
        const colorDiv = Box.querySelector(".color")
        const hexValue = Box.querySelector(".hex-value")

        colorDiv.style.backgroundColor = color;

        hexValue.textContent = color;



 });
 }

generatePalette();

