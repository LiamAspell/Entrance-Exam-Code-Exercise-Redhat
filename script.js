var selectedRow = null

//Dealing with submit function
function onFormSubmit() {
    
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
        resetForm();
        
}

function resetForm() {
    document.getElementById('myForm').reset();
}

function readFormData() {
    var formData ={};
    formData["thingtoDo"] = document.getElementById("thingtoDo").value;
    return formData;
}



//Submitting data into the table
function insertNewRecord(data){
    var table = document.getElementById("taskTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    
    cell1.innerHTML = '<label for="task">' +data.thingtoDo +'</label>';
    cell2.innerHTML = '<input type="checkbox" id="taskComplete" style: "zoom: 1.5;">';
    cell3.innerHTML = '<button type="button" onClick = "deleteRow(this)" class="btn btn-danger">Delete</button>';
}


//Deleting Row
function deleteRow(td){
    if (confirm('Are you sure to delete this record ?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("taskTable").deleteRow(row.rowIndex);
        resetForm();
    }
}



