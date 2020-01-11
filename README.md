# JavaScript and DOM Manipulation
Creates a table dynamically based upon an Alien eye-witness reports dataset. The website allows users to filter the table data for specific values. Created using pure JavaScript, HTML, and CSS, and D3.js on the web pages.

## Setup
The following must be included in index.html:
* Bootstrap : `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css">`
* Font (optional) : `<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">`
* d3 : `<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>`
* Dataset : `<script src="static/js/data.js"></script>`
* Javascript code : `<script src="static/js/app.js"></script>`
* CSS stylesheet : `<link rel="stylesheet" href="static/css/style.css">`


## Background

This script is for the following scenario: The extra-terrestrial menace has come to Earth and `ALIENS-R-REAL` has collected all of the eye-witness reports possible to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest. However, the collection is too large to search through manually. Even the most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

Thus, this script will create a table dynamically based upon this [dataset](UFO-level-1/static/js/data.js). It also allows the users to filter the table data for specific values. This script only uses use pure JavaScript, HTML, and CSS, and D3.js on the web pages.


### Level 1: Automatic Table and Date Search

* Creates a basic HTML web page

* Uses the UFO [dataset](UFO-level-1/static/js/data.js) in the form of an array of JavaScript objects, writes code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Has a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment`.

* Uses a date form in the HTML document and writes a JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories

* Completes all of Level 1 criteria.

* Uses multiple `input` tags and/or select dropdowns to write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](UFO-level-1/static/js/data.js)

