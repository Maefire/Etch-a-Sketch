let gridReset        = false;
let toggleState      = "";
const wrapper        = document.getElementById("wrapper");
const resetBtn       = document.getElementById("resetButton");
const sliderSizeText = document.getElementById("sliderText");
const gridSlider     = document.getElementById("gridSlider");
const currentColor   = document.getElementsByClassName("penColor");
//TODO let penColor = e.target.value? Have pen color update on click?



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~MENU RELATED~~~~~~~~~~~~~~~~~~~~~~~~*/

resetBtn.addEventListener("click",() =>{
    window.location.reload();
});

gridSlider.onmousemove = function(e) {updateSliderText(e.target.value);}

function updateSliderText(size) {
    sliderSizeText.innerText = `${size}x${size}`;
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~GRID RELATED~~~~~~~~~~~~~~~~~~~~~~~~*/

gridSlider.addEventListener("pointerup", () => {
  wrapper.textContent=""
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


wrapper.onmouseover = (e) =>{
    wrapper.onmouseup = (e) =>{
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
            e.target.classList.add("penColor");
          }
    }    
}
do{
    grid(16);
    gridReset = false;
} while (gridReset === true);

//TODO Add function to buttons. Reset button. 
/* toggle: add current color for selection (let currentColor = [])
then add a class of "draw" on toggle to all grid divs 
if class of draw exists, mouseover event fires.
on toggle/click remove class of draw, disabling mouseover event from firing*/