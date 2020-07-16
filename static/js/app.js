// From data.js
var tableData=data;

// Part I
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
var buttonDate=d3.select("#filter-date");
var formDate=d3.select(".class-date");

// Create event handlers
buttonDate.on("click", runEnterDate);
formDate.on("submit", runEnterDate);

// Define the event handler function for the button and form
function runEnterDate(){

    // Clear the table from index.html
    tbody.html("")

    // Prevent the page ".event" from refreshing 
    d3.event.preventDefault();

    // Select the input element to get the raw HTML node
    var inputElement=d3.select("#datetime");

    // On the "inputElement", get the value of the property
    var inputValue=inputElement.property("value");

    // Console out the user's input date in date format
    // console.log(inputValue);

    // Create a new arry of objects 
    var filteredData={};

    // Filter the each info, select a piece of info if its datetime equals the inputValue
    // var filteredData=tableData.filter(info=>(new Date(info.datetime))===(new Date(inputValue)));
    // var filteredData=tableData.filter(info=>console.log(new Date(info.datetime), new Date(inputValue)));
    filteredData=tableData.filter(info=>info.datetime===inputValue);

    // Console out the rows of date user is looking for
    console.log(filteredData);

    // Display the rows user is searching for in table in html
    filteredData.map(processData);

};



// Part II
// ======================== City search =============================
// Use d3 to select button and form
var buttonCity=d3.select("#filter-city");
var formCity=d3.select(".class-city");

// Create event handlers
buttonCity.on("click", runEnterCity);
formCity.on("submit", runEnterCity);

// Define the event handler function for the button and form
function runEnterCity(){

    // Clear the table from index.html
    tbody.html("")

    // Prevent the page ".event" from refreshing 
    d3.event.preventDefault();

    // Select the input element to get the raw HTML node
    var inputElement=d3.select("#cityName");

    // On the "inputElement", get the value of the property
    var inputValue=inputElement.property("value");

    // Console out the user's input date in date format
    // console.log(inputValue);

    // Create a new arry of objects 
    var filteredData={};

    // Filter the each info, select a piece of info if its datetime equals the inputValue
    // var filteredData=tableData.filter(info=>(new Date(info.datetime))===(new Date(inputValue)));
    // var filteredData=tableData.filter(info=>console.log(new Date(info.datetime), new Date(inputValue)));
    filteredData=tableData.filter(info=>info.city===inputValue.toLowerCase());

    // Console out the rows of date user is looking for
    console.log(filteredData);

    // Display the rows user is searching for in table in html
    filteredData.map(processData);

};

// ======================== State search =============================
// Use d3 to select button and form
var buttonState=d3.select("#filter-state");
var formState=d3.select(".class-state");

// Create event handlers
buttonState.on("click", runEnterState);
formState.on("submit", runEnterState);

// Define the event handler function for the button and form
function runEnterState(){

    // Clear the table from index.html
    tbody.html("")

    // Prevent the page ".event" from refreshing 
    d3.event.preventDefault();

    // Select the input element to get the raw HTML node
    var inputElement=d3.select("#stateName");

    // On the "inputElement", get the value of the property
    var inputValue=inputElement.property("value");

    // Console out the user's input date in date format
    // console.log(inputValue);

    // Create a new arry of objects 
    var filteredData={};

    // Filter the each info, select a piece of info if its datetime equals the inputValue
    // var filteredData=tableData.filter(info=>(new Date(info.datetime))===(new Date(inputValue)));
    // var filteredData=tableData.filter(info=>console.log(new Date(info.datetime), new Date(inputValue)));
    filteredData=tableData.filter(info=>info.state===inputValue.toLowerCase());

    // Console out the rows of date user is looking for
    console.log(filteredData);

    // Display the rows user is searching for in table in html
    filteredData.map(processData);

};

// ======================== Country search =============================
// Use d3 to select button and form
var buttonCountry=d3.select("#filter-country");
var formCountry=d3.select(".class-country");

// Create event handlers
buttonCountry.on("click", runEnterCountry);
formCountry.on("submit", runEnterCountry);

// Define the event handler function for the button and form
function runEnterCountry(){

    // Clear the table from index.html
    tbody.html("")

    // Prevent the page ".event" from refreshing 
    d3.event.preventDefault();

    // Select the input element to get the raw HTML node
    var inputElement=d3.select("#countryName");

    // On the "inputElement", get the value of the property
    var inputValue=inputElement.property("value");

    // Console out the user's input date in date format
    // console.log(inputValue);

    // Create a new arry of objects 
    var filteredData={};

    // Filter the each info, select a piece of info if its datetime equals the inputValue
    // var filteredData=tableData.filter(info=>(new Date(info.datetime))===(new Date(inputValue)));
    // var filteredData=tableData.filter(info=>console.log(new Date(info.datetime), new Date(inputValue)));
    filteredData=tableData.filter(info=>info.country===inputValue.toLowerCase());

    // Console out the rows of date user is looking for
    console.log(filteredData);

    // Display the rows user is searching for in table in html
    filteredData.map(processData);

};

// ======================== Shape search =============================
// Use d3 to select button and form
var buttonShape=d3.select("#filter-shape");
var formShape=d3.select(".class-shape");

// Create event handlers
buttonShape.on("click", runEnterShape);
formShape.on("submit", runEnterShape);

// Define the event handler function for the button and form
function runEnterShape(){

    // Clear the table from index.html
    tbody.html("")

    // Prevent the page ".event" from refreshing 
    d3.event.preventDefault();

    // Select the input element to get the raw HTML node
    var inputElement=d3.select("#shapeName");

    // On the "inputElement", get the value of the property
    var inputValue=inputElement.property("value");

    // Console out the user's input date in date format
    // console.log(inputValue);

    // Create a new arry of objects 
    var filteredData={};

    // Filter the each info, select a piece of info if its datetime equals the inputValue
    // var filteredData=tableData.filter(info=>(new Date(info.datetime))===(new Date(inputValue)));
    // var filteredData=tableData.filter(info=>console.log(new Date(info.datetime), new Date(inputValue)));
    filteredData=tableData.filter(info=>info.shape===inputValue.toLowerCase());

    // Console out the rows of date user is looking for
    console.log(filteredData);

    // Display the rows user is searching for in table in html
    filteredData.map(processData);

};