// from data.js
var tableData = data;


// ======================== Add data into table =============================
// Select "tbody" 
var tbody=d3.select("tbody");

// Loop through each data in tableData, and apply function processData
tableData.map(processData);

// Define function processData
function processData(info) {

    // Check if info is processed
    // console.log(info);

    // Add "<tr>" element
    var row=tbody.append("tr");

    // For every key and value in the array of objects, add<td> element and value
    Object.entries(info).map(([key, value])=>{

        // Check if keys and values are processed
        // console.log(key, value);
        row.append("td").text(value);
    });
};



// ======================== Date search =============================
// Use d3 to select button and form
var buttonDate=d3.select("#filter-btn");
var formDate=d3.select(".class-date");

// Create event handlers
buttonDate.on("click", runEnterDate);
formDate.on("submit", runEnterDate);

// Define the event handler function for the button and form
function runEnterDate(){

    // Clear the table from index.html
    tbody.html("");

    // Prevent the page ".event" from refreshing 
    d3.event.preventDefault();

    // Select the input element to get the raw HTML node
    var inputElementData=d3.select("#datetime");


    // On the "inputElement", get the value of the property
    var inputValueData=inputElementData.property("value");


    // Console out the user's input date in date format
    // console.log(inputValue);

    // Filter the each info, select a piece of info if its datetime equals the inputValue
    var filteredData=tableData.filter(info=>info.datetime===inputValueData); 

    // Console out the rows of date user is looking for
    console.log(filteredData);

    // Display the rows user is searching for in table in html
    filteredData.map(processData);

};



