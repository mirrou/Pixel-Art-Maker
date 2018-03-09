//define variables
var color, height, width, canvas, heading, instructions;

//load DOM before querying DOM elemnts
$(document).ready(function() {

  // Select color input
  $("#colorPicker").on("change", function() {
    color = $(this).val();
  });

  // Select size input
  $("#inputHeight").change(function() {
    height = $(this).val();
  })

  $("#inputWidth").change(function() {
    width = $(this).val();
  })
});

//grab the table, heading and instructions elements
canvas = $('#pixelCanvas');
heading = $('#canvasHeading');
instructions = $('#instructions');

function makeGrid() {
  //clear grid
  canvas.empty();
  //show heading and instructions
  heading.text('Design Your Canvas');
  instructions.text('Click on a tile to color it in. Click it again to erase.')
  //create row for length of height
  for (var r = 0; r < height; r++) {
    var row = $('<tr></tr>');
    //add row to the table
    canvas.append(row);
    //create cells and append into rows
    for (var c = 0; c < width; c++) {
      row.append('<td ></td>');
    }
  }
}

//when each cell is clicked
canvas.click('td', function(e){
  //if the cell background is transparent, set it to the user selected color
  if( $(e.target).css("background-color") === 'rgba(0, 0, 0, 0)' || $(this).css("background-color") === 'transparent'){
    $(e.target).css('background-color', color);
    //if it is a color, set it to transparent
  }else{
    $(e.target).css('background-color', 'transparent');
  }
});

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(e) {
  e.preventDefault();
  // alert("height: " + height + " width: " + width + " Color: " + color);
  makeGrid(height, width);
});
