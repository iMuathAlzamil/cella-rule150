Readme.txt

CPSC 335-03 Algorithms

Project 1 - Cella 150 Project

Name - Moaz Alzamil


Intro

  This project draws a grid and runs through each cell from left to right, top
  to bottom and depending on the pattern of the cells above and to the left,
  center, and right of a lower cell, that lower cell is painted a certian color.
  This is done for each row n amount of times specified by the user.


Zip Contents

  File readme.txt.  This file.

  File cella150.html. Drag and drop this into a browser to run the example.

  File cs-sketch.js This file contains many important functions that contribute
    to the functionality of the project such as creating and displaying the grid
    and determining the value of the cells in lower rows.

  File p5.js This is the P5 package.


External Requirements

  Access to an internet browser on your machine.


Installation & Running

  1. Extract the .zip file into a folder.

  2. Drag the cella150.html file into an internet browser window. This should
     bring up the Cella 150 Rule Program page. You should see a 401x401 grid.

  3. After entering a value, press the Submit button and the program will begin
     running for the number of rows you entered.


Sample Invocation

  After opening up the page, enter the number 25 and click Submit. The program
  will paint the first 25 rows with each row based on the pattern of cells above
  in the previous rows.


Features

  Prompts user to input the number of rows they want to see painted.
  


Known Bugs

  Program will accept an n value > 401 and run the program which will cause an
  error because it attempts to generate another level after all created levels
  have been drawn. Not noticable by the user.
