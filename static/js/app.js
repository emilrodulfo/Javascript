// from data.js
var tableData = data;


// DYNAMIC TABLE //

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Iterate through each array in the data
tableData.forEach((sightingsReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingsReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
  });
});

// FILTERING //

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {


    // Prevent the page from refreshing
    d3.event.preventDefault();

    var tbodyRows = d3.selectAll("tbody>tr");
    tbodyRows.remove();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
    
    //document.getElementById("tbody").innerHTML = "";

    // Iterate through each array in the data
    filteredData.forEach((sightingsReport) => {
      var row = tbody.append("tr");
      Object.entries(sightingsReport).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
  });
});