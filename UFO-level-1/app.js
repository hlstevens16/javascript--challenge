// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each ufo object and use d3 to append one table row `tr` for each ufo object
data.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each ufo and append a cell to the row for each value
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Create and complete the event handler function for the form
button.on("click", function () {
    
    //Remove existing
    d3.select("tbody").html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    //Filter
    var filteredData = data.filter(record => record.datetime == inputValue);

    // Print the value to the console
    console.log(filteredData);

    // Loop Through `data` and console.log each pick object and use d3 to append one table row `tr` for each pick object
    filteredData.forEach(function(picks) {
    console.log(picks);
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each pick and append a cell to the row for each value
    Object.entries(picks).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});