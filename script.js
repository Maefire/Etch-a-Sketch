let toggleDrawState      = "";
let penColor         = "#000000";// pencolor default is black (Nov 11,2022)
let eraser           = false;
/* let shader           = false;
const shadeBtn       = document.getElementById("shadeButton"); */
const wrapper        = document.getElementById("wrapper");
const resetBtn       = document.getElementById("resetButton");
const sliderSizeText = document.getElementById("sliderText");
const gridSlider     = document.getElementById("gridSlider");
const menuItems      = document.getElementById("menu");
const eraserBtn      = document.getElementById("eraserButton");
const drawBtn        = document.getElementById("penButton");
const colorPicker    = document.getElementById("colorPicker");
const colorLabel     = document.getElementById("colorLabel");


drawItNerd();
grid(16);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~MENU RELATED~~~~~~~~~~~~~~~~~~~~~~~~*/


gridSlider.onmousemove = function(e) {updateSliderText(e.target.value);}

function updateSliderText(size) {
    sliderSizeText.innerText = `${size}x${size}`;
}

resetBtn.onclick = () =>{
    window.location.reload();
}
//button function time! :D
eraserBtn.onclick = () =>{
    eraser = true;
    drawItNerd();
    stayInsideYourBox();
}
drawBtn.onclick = () =>{
    eraser = false;
    drawItNerd();
    stayInsideYourBox();
}



function setPenColor(e){
    if(eraser === false){
        penColor = colorPicker.value;
    }else{
        penColor = "#FFFFFF"
    }
}
function setCellColor(e){
    if(eraser === false){
        e.target.style.backgroundColor = penColor;
    }else{
        e.target.style.backgroundColor = "#FFFFFF";
    }
    
}

colorPicker.onchange = () => {
    colorLabel.style.backgroundColor = colorPicker.value   
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~GRID RELATED~~~~~~~~~~~~~~~~~~~~~~~~*/

gridSlider.addEventListener("pointerup", () => {
  wrapper.textContent="" //Clears the grid for new set of cells/divs
  if(wrapper.textContent == ""){
    gridSlider.onmouseup = function(e){grid(e.target.value);}
  }
});

function grid(cellSize){
    wrapper.style.gridTemplateColumns = `repeat(${cellSize}, 1fr)`; 
    wrapper.style.gridTemplateRows = `repeat(${cellSize}, 1fr)`;
    for(let i=0; i<(cellSize * cellSize);i++){
        const gridCell = document.createElement("div");
        gridCell.classList.add("cell");
        wrapper.appendChild(gridCell);      
    }
}
function stayInsideYourBox(){
    menu.onmouseleave = (e) =>{
        toggleDrawState = false;
        return;
    }
}
function drawItNerd(){
    wrapper.onmousemove = (e) =>{
        wrapper.onmousedown = (e) =>{
            if(toggleDrawState !== true){
                toggleDrawState = true;
                return;
            }else{
                toggleDrawState = false;
            }
        }
        if(toggleDrawState === true){
            if(e.target && e.target.matches("div.cell")){                          
                setCellColor(e);
                setPenColor(e);
                // setShade(e);
              }
        }    
    }
}




/*TODO Add function to buttons.
BUTTONS: 
darken
Night mode?*/


/* shadeBtn.onclick = () =>{
    eraser = false;
    shader = true;
    drawItNerd();
    stayInsideYourBox();
    setShade();
}

function setShade(e){
    //if element has class ".shader", run this code
    if(eraser === false && shader === true){
        for(let i = 100; i > 0; i -= 10){
            cell.style.filter = "brightness(100%)"

        }
    } 
} */