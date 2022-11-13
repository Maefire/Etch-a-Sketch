let toggleState      = "";
let penColor         = "#000000";// pencolor is black (Nov 11,2022)
let eraser           = false;
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
grid(5);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~MENU RELATED~~~~~~~~~~~~~~~~~~~~~~~~*/

resetBtn.onclick = (e) =>{
    window.location.reload();
}

gridSlider.onmousemove = function(e) {updateSliderText(e.target.value);}

function updateSliderText(size) {
    sliderSizeText.innerText = `${size}x${size}`;
}

//button function time! :D
eraserBtn.onclick = (e) =>{
    eraser = true;
    eraseItNerd();
    stayInsideYourBox();
}
drawBtn.onclick = (e) =>{
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

colorPicker.onchange = (e) => {
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
        toggleState = false;
        return;
    }
}
function drawItNerd(){
    wrapper.onmousemove = (e) =>{
        wrapper.onmousedown = (e) =>{
            if(toggleState !== true){
                toggleState = true;
                return;
            }else{
                toggleState = false;
            }
        }
        if(toggleState === true){
            if(e.target && e.target.matches("div.cell")){                          
                setCellColor(e);
                setPenColor(e);
              }
        }    
    }
}

function eraseItNerd(){
    wrapper.onmousemove = (e) =>{
        wrapper.onmousedown = (e) =>{
            if(toggleState !== true){
                toggleState = true;
                return;
            }else{
                toggleState = false;
            }
        }
        if(toggleState === true){
            if(e.target && e.target.matches("div.cell")){
                // console.log(e.target)
                setPenColor(e);
                setCellColor(e);
              }
        }    
    }
}


/*TODO Add function to buttons.
BUTTONS: 
darken
Night mode?*/