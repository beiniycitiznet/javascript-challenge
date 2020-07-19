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



// ======================== Filter =============================
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

    // Select all user's input
    var allInput=d3.selectAll('.form-control').nodes().map(node => node.value);

    // Console out the user's input date in date format
    // console.log(allInput);

    // Create an empty list to store filtered data
    var filteredData=[];

    // Loop through each array of object in tableData
    for (var i=0;i<tableData.length;i++){

        // Loop through each input in allInput
        for (var j=0;j<allInput.length;j++){

            // Create a boolean
            var checkList=true;

            // If the input is filled, and if the jth element in the ith array of object in tableData equals to the input in jth filter, checkList is true
            if (allInput[j]){
                if(Object.values(tableData[i])[j]===allInput[j]){
                    checkList=true;

                // Otherwise, checkList is false
                } else {
                    checkList=false;
                    // End loop whenever checkList is false
                    break;
                };
            };
        };
        // If checkList is true, push the ith array of object in tableData in filteredData
        if (checkList){
            var qualifiedData=Object.values(tableData[i]);
            filteredData.push(qualifiedData);
        };
    };

    // Console out the rows of date user is looking for
    // console.log(filteredData);

    // Display the rows user is searching for in table in html
    filteredData.map(processData);

};



