function clear_grid() {
  divs = document.querySelectorAll('.grid_elem_filled');
  divs.forEach( (div) => {
    div.classList.remove('grid_elem_filled');
  });
  const input = prompt('How many columns do you want the next grid to have?');
  grid(input);
}

function grid(length=16) {
  const grid = document.querySelector('.grid');
  grid.style.gridTemplateColumns = 'repeat('+length+', 1fr)';
  grid.style.gridTemplateRows = 'repeat('+length+', 1fr)';

  for(i=0; i<length**2; i++) {
    div = document.createElement('div');
    div.className = 'grid_elem';
    div.addEventListener('mouseover', function(e){
       e.target.classList.add('grid_elem_filled');
     })
    grid.appendChild(div);
   }
}

// initial grid setup
grid();

document.querySelector('.clear_button').onclick = function() { clear_grid() };
