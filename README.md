# Demo
Demo page for edunomics

# Documentation
src contains the HTML Files<br/>
public contains the bootstrap and jquery files<br/>
js contains the app.js file, which has react code for landing page(index.html)
Data contains 3 files, user.txt, pass.txt, name.txt.These files contains the details of the users who have registered.It is stored in plaintext currently, but will be stored with encryption in a data base in the real page.<br/>

<b>API</b><br/>
Made with express.<br/>
GET request to / results in index.html being rendered with reactJS.<br/>
POST request to /register registers a new user & stores details in the txt files.It then loads the landing page(index.html) in the browser<br/>
TODO : POST request to /login verifies the details sent by user, and logs in if the details are correct

<b>ReactJS Code</b><br/>
App is the main class which returns to the root element of DOM.<br/>
Navbar function renders a navbar with react.<br/>
This Navbar has links for sign up and login. Clicking sign up takes the user to a form,created with HTML.<br/>
Container creates a bootstrap container and calls the function intro, and sends a mode prop.This prop determines whether text comes first or image (These are rendered by funtions Text and Image respectively).<br/>
