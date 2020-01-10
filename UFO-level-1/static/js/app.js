// UFO data from data.js
var tableData = data;

// Create and display the table in index.html
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

// Create event listener for "click" on the button to filter out the datetime that the user inputs
button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElementDate = d3.select("#datetime");

  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");

  var filteredData = tableData.filter(x => x.datetime === inputValueDate);
 
  // Delete the table
  var table = document.getElementById("table-body")
  for (var i = table.rows.length-1; i >= 0; i--) {
    table.deleteRow(i);
  };

  // Create and display the filtered table with only the datetime value that the user enters
  var tbody = d3.select("tbody");
  filteredData.forEach((filteredReport) => {
    var row = tbody.append("tr");
    Object.entries(filteredReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}); // End button.on() 

