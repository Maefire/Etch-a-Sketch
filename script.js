//add function to shade button to toggle lightening on a button press?
//In theory, should need to simply reverse shader to be false. Might need to add a class
    //to keep the mode selected? Maybe a new boolean for "deShade", so when you press a certain
    //button, it toggles the boolean, saving space on the visible page. 

let toggleDrawState  = false;
let eraser           = false;
let shader           = false;
const shadeBtn       = document.getElementById("shadeButton"); 
const wrapper        = document.getElementById("wrapper");
const resetBtn       = document.getElementById("resetButton");
const sliderSizeText = document.getElementById("sliderText");
const gridSlider     = document.getElementById("gridSlider");
const menuItems      = document.getElementById("menu");
const eraserBtn      = document.getElementById("eraserButton");
const drawBtn        = document.getElementById("penButton");
const colorPicker    = document.getElementById("colorPicker");
const colorLabel     = document.getElementById("colorLabel");
const themeToggle    = document.querySelector(".themeToggle");


// Draws the actual grid.
wrapper.onmousemove = (e) => {
    wrapper.onmousedown = () => {
        toggleDrawState = !toggleDrawState;                
        }
    if(toggleDrawState === true && shader === false){
        if(e.target && e.target.matches("div.cell")){                          
            setPenColor(e);                
            setCellColor(e);
            e.target.style.opacity = 1.0;
        }
    }
}

grid(16);// Default grid size (slider set in HTML currently 11-17-2022)

/*vvv Mostly Menu/Button Related vvv*/
gridSlider.onmousemove = function(e) {updateSliderText(e.target.value);}

function updateSliderText(size) {
    sliderSizeText.innerText = `${size}x${size}`;
}

menu.onmouseleave = () => {
    toggleDrawState = false;
    return;
}

resetBtn.onclick = () => {
    window.location.reload();
}

//button function time! :D
eraserBtn.onclick = () => {
    eraser = true;
    shader = false; 
}

drawBtn.onclick = () => {
    eraser = false;
    shader = false;
}

shadeBtn.onclick = () => {
    eraser = false;
    shader = true;
    shadeIt();
    console.log("Button Clicked")
}

themeToggle.onclick = (themeHandler);

function setPenColor() {
    if(eraser === false){
        penColor = colorPicker.value;
    }else{
        penColor = "#A7A7A7"
    }
}

function setCellColor(e) {
    if(eraser === false && shader === false){
        e.target.style.backgroundColor = penColor;  
    }else if(eraser === false && shader === true){
        e.target.style.backgroundColor = penColor;
    }else{    
        e.target.style.backgroundColor = "#A7A7A7";
    }
}

colorPicker.onchange = () => {
    colorLabel.style.backgroundColor = colorPicker.value   
}

/*vvv Mostly Grid Related vvv*/
gridSlider.addEventListener("pointerup", () => {
    wrapper.textContent="" //Clears the grid for new set of cells/divs
    if(wrapper.textContent == ""){
    gridSlider.onmouseup = function(e){
        grid(e.target.value);}
    }
});

function grid(cellSize){
    wrapper.style.gridTemplateColumns = `repeat(${cellSize}, 1fr)`; 
    wrapper.style.gridTemplateRows = `repeat(${cellSize}, 1fr)`;
    for(let i=0; i<(cellSize * cellSize);i++){
        const gridCell = document.createElement("div");
        gridCell.classList.add("cell");
        gridCell.style.opacity = 1.0
        wrapper.appendChild(gridCell);      
    }
}

function shadeIt() {
    const gridChildren = document.querySelectorAll(".cell");
    gridChildren.forEach((child) =>{
        const cellCh = child;
        cellCh.count = 0;
        cellCh.onmousemove = (e) =>{
            if(toggleDrawState === true && shader === true){                        
                    setPenColor();               
                    setCellColor(e);
                    e.target.count += 1;
                    e.target.style.opacity = 0.01 * e.target.count;                
            }
        };
    });
}

function themeHandler(){
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "Light Mode";
    } else {
      themeToggle.textContent = "Dark Mode";
    }
};