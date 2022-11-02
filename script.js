//grid related
const wrapper = document.getElementById("wrapper");
//slider related
const sliderSizeText = document.getElementById("sliderText");
const gridSlider     = document.getElementById("gridSlider");


gridSlider.onmousemove = function(e) {updateSliderText(e.target.value);}
gridSlider.onmouseup = function(e) {grid(e.target.value);}
      
function updateSliderText(size) {
    sliderSizeText.innerText = `${size}x${size}`;
}
function grid(cells){
    wrapper.style.gridTemplateColumns = `repeat(${cells}, 1fr)`; 
    wrapper.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    for(let i=0; i<(cells * cells);i++){
        const gridCell = document.createElement('div');
        gridCell.classList.add("gridSquare");
        wrapper.appendChild(gridCell);    
    }
}