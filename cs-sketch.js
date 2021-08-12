// cs-sketch.js; P5 key animation fcns.  // CF p5js.org/reference
// Time-stamp: <2020-02-02 15:58:23 Chuck Siska>

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:10, wid:401, hgt:401 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 24; // Update ever 'mod' frames.
var grid, n = 1, maxLevel = 0;

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;

    createCanvas( width, height );  // Make a P5 canvas.

    // Create the initial grid.  Clear all rows
    // except the first one which should be all black only one white in the center.
    clearGrid( );

    // Display the first level grid which is the initialized grid.
    var i;
    for(i = 0; i < 401; i++) {
        displayGrid( i );
    }
}

function draw( )
{
    // If we're at level 0, then just clear the grid.
    if(maxLevel > 0 && n == 0) {
	clearGrid( );
        var i;
        for(i = 0; i < 401; i++) {
            displayGrid( i );
        }
        n++;
    }
    // At any other level we will draw that next level.
    else {
	// If we are on an update frame and we haven't reached the last level
	// then we will generate the next level.
	g_frame_cnt++;
	if(g_frame_cnt % g_frame_mod == 0 && n < maxLevel) {
	    // Generate the next level.
	    generateNthLevel(n)

	    // Move to the next level.
            n++;

	    // If we're at the end, reset to the beginning.
            if(n == maxLevel) {
		maxLevel = 0;
		n = 0;
	    }
	} 
    }
}

// Make the mouse and keyboard do no action now.
function mousePressed( ) { }
function keyPressed( ) { }

// Display the grid onto the screen one tile at a time.
function displayGrid( n )
{
    var j;
    // Go through all of the grid elements.
    for(j = 0; j < grid[0].length; j++) {
	// If we have a 1 in that location, we will display red (acting as Black).
	if(grid[n][j] == 1) {
	    fill('black');
	}
	// If we have a 0 in that location, we will display blue (acting as White).
	else {
	    fill('white');
	}

	// Color the rectangle onto the screen.
	rect(1 + j * g_canvas.cell_size, 1 + n * g_canvas.cell_size, g_canvas.cell_size - 2, g_canvas.cell_size - 2);
    }
}

// Clear the grid and reset it back to the initial state.
function clearGrid( )
{
    // Create the grid of 401 x 401.  
    grid = new Array(401);
    var i, j;
    for(i = 0; i < 401; i++) {
	grid[i] = new Array(401);
    }

    // Initialize the grid to start with all 1's (Black) at the top
    // and then 0's everywhere else.
    for(i = 0; i < 401; i++) {
	for(j = 0; j < 401; j++) {
	    if(i == 0) 
		grid[i][j] = 1;
	    else
		grid[i][j] = 0;
	}
    }

    // Set center pixel at the top to 0 (White).
    grid[0][200] = 0;
}

// Generate the nth level of the grid, then display it onto the screen.
function generateNthLevel( n )
{
    // Check to see if n is valid (between 0-401)
    // if it is then generate this nth level.  Otherwise error
    // for bad input.
    if(n == null || isNaN(n) || n < 0 || n > 401) {
	alert("Error: Bad n");
    }
    else {
	// Generate that level of the grid.
	var c;
	for(c = 0; c < 401; c++) {
	    grid[n][c] = calculateNextState(n, c);
	}

	// Display the n-th level on the grid.
        displayGrid( n )
    }
}

// Calculate the next start for the pixel at row r, column c.
function calculateNextState( r, c )
{
    // Get the maximum number of columns.
    let maxcols = grid[0].length;
    var count = 0;

    // Check if the above 3 pixels (to the left, directly above, and right)
    // have a value of 0 or 1.  Count the number of Black pixels.
    if(c >= 1 && grid[r-1][c-1] == 1)
	count++;
    if(grid[r-1][c] == 1)
	count++;
    if(c <= maxcols - 1 && grid[r-1][c+1] == 1)
	count++;

    // If the count is 1 or 3, then return 1 (Black), otherwise 0 (White).
    if(count == 1 || count == 3)
	return 1;
    else
	return 0;
}

// Set the maximum level.
function setMaxLevel(level)
{
    // Check to see if n is valid (between 0-401)
    // if it is then generate this nth level.  Otherwise error
    // for bad input.
    if(n == null || isNaN(n) || n < 0 || n > 401) {
	alert("Error: Bad n");
    }
    else {
	// Set level to begin generation.
	maxLevel = level;
    }
}