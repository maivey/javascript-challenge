// UFO data from data.js
var tableData = data;

// Create and display the table containing the UFO data
// Each row contains date, city, state, country, shape, and comments
var tbody = d3.select("tbody");
tableData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button to filter the table
var button = d3.select("#filter-btn");

// Create event listener for "click" on the button to filter out the each field that the user inputs
button.on("click", function() {
  d3.event.preventDefault();
 
  // Select the input element and get the raw HTML node
  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");
  

  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");

  // Create array to hold user's entry for all input fields
  var inputVals = [inputValueDate,inputValueCity,inputValueState,inputValueCountry,inputValueShape];

  // Get each input element (the ID of each ".form-control" class) and store in an array
  inputNames = [];
  for (var i = 0; i< inputVals.length; i++) {
    inputNames.push(document.getElementsByClassName("form-control")[i].id)
  };

  // Create new variable filteredData equal to the tableData, to be used in loop below
  var filteredData = tableData;

  // Loop through each input value, if no input is given, filter the original table to show only the input values
  for (var i = 0; i < inputVals.length; i++) {
    if (inputVals[i] !== "") {
      // Filter each filtered table based on how many inputs are given by the user

      var filteredData2 = filteredData.filter(x => x[inputNames[i]] === inputVals[i]);
      filteredData = filteredData2;
    }; // End if statement
  }; // End for statement

  // Delete the existing table on the page
  var table = document.getElementById("table-body")
  for (var i = table.rows.length-1; i >= 0; i--) {
    table.deleteRow(i);
  };

  // Create and display the filtered table on the page
  var tbody = d3.select("tbody");
  filteredData.forEach((filteredReport) => {
    var row = tbody.append("tr");
    Object.entries(filteredReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  }); // End forEach

}); // End button.on() function