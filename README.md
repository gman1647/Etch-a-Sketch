This project utilizes a hover event listener to color pixels over which the mouse passes. The user can also select the pixel size from 5 pixels per side up to 100 pixels per side.

The page is laid out using mostly flex box. The color buttons and drawing board are in a flex container. The color buttons move to the top of the page using a media query when the screen width is narrow. The Etch a Sketch is a fixed width and is not designed for use on mobile devices.

The color buttons allow a choice of the background and drawing colors. The color of the button background is the same as the background color in the etchasketch when clicked. The text matches the drawing color.

A random color selector function was used to generate a random hexidecimal color key to be used for the random and rainbow buttons. The random button selects background and draw colors at random. The rainbow button applies a random color to each pixel. The colors are generated when the board is created based on the id of each pixel. The pixel ids were generated in a loop.

Finally, the user can select their own drawing and board color using the color input buttons. These are applied to the board when the "apply choice" button is clicked. 

The design of the page is a bit 90s looking and could use some work, but this project was mostly about building the page and using the event listeners. 

The frame for the etch a sketch was built using a fair use image that was modified to be square using GIMP.

This was fun project. Learning to work with colors was enjoyable. Building the board itself was challenging. I initially overthought the process of generating the board. I initially thought that I build a number of rows with a number of pixels in each (eg. 10 rows of 10 pixels each). I ended up using a flexbox using a function to generate pixel size to add all the pixels in a loop. It works, but may not be the most efficient way to do it. That was the most difficult of the project.