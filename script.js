let gridReset        = false;
const wrapper        = document.getElementById("wrapper");
const sliderSizeText = document.getElementById("sliderText");
const gridSlider     = document.getElementById("gridSlider");
const resetBtn       = document.getElementById("resetButton");



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~MENU RELATED~~~~~~~~~~~~~~~~~~~~~~~~*/

resetBtn.addEventListener('click',() =>{
    window.location.reload();
});

gridSlider.onmousemove = function(e) {updateSliderText(e.target.value);}

function updateSliderText(size) {
    sliderSizeText.innerText = `${size}x${size}`;
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~GRID RELATED~~~~~~~~~~~~~~~~~~~~~~~~*/

gridSlider.addEventListener('pointerup', () => {
  wrapper.textContent=""
  if(wrapper.textContent == ""){
    gridSlider.onmouseup = function(e){grid(e.target.value);}
  }
});
function grid(cells){
    wrapper.style.gridTemplateColumns = `repeat(${cells}, 1fr)`; 
    wrapper.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    for(let i=0; i<(cells * cells);i++){
        const gridCell = document.createElement('div');
        gridCell.classList.add("gridSquare");
        wrapper.appendChild(gridCell);
    }
}

do{
    grid(16);
    gridReset = false;
} while (gridReset === true);

//TODO Add function to buttons. Reset button. Find a way to lock grid to single click?
//new cells made, but not shown on each slider click.