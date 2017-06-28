## Instalation

Just run 'npm install' from the terminal, and it should install the the needed scripts.

### How to run the server

You can just write 'npm start' in the root folder from the terminal, and it will start the node express server. Otherwise type 'node server.js'

This will start your server at http://localhost:8000

### How to run tests

Front-end tests are visible in the browser.

To test the back-end, open a new terminal, leaving the server running on the other tab/window. Then type 'npm test' and it should run the two tests I have created.

### How to change the css style

Gulp file is available in the main folder, so all you need to do is run 'gulp watch' on the terminal and it should start gulp. After that you can modify the files in sass folder and it will automatically generate and minify the css.