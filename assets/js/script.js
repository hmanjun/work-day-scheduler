var currentTime = $("#currentDay")
currentTime.text(moment().format("dddd, MMMM Do")) //Add curent day to header

console.log(moment("2013-02-08 09:00").format("hh:mm"))
console.log(timeString(15))

function displayTimeBlocks(){ 
    for(var i = 9; i <= 17; i++){ //Dynamically create time-blocks
        var container = $(".container")

        var groupDiv = $("<div>").addClass("row time-block") //Rows
        var timeDiv = $("<div>").text(timeString(i)).addClass("hour col-1") //Time eLement

        //Use input text to save notes
        var noteDiv = $("<input>").addClass("justify-content-center col-10 " + timeColor(i))
        
        noteDiv.attr("id", i+"storage")//Add dynamic id tag to use of local storage

        
        if(localStorage.getItem(i+"storage") != null){ //Check for if localstorage data exsits
            noteDiv.val(localStorage.getItem(i+"storage"))
        }
        var saveDiv = $("<div>").text("💾").addClass("saveBtn col-1") //Save element
        saveDiv.attr("id", "save")

        groupDiv.append(timeDiv, noteDiv, saveDiv)
        container.append(groupDiv)
    }
}

function timeColor(time){ //Determine if time-block is in past, present, future
    if(time == moment().format("H")){
        return "present"
    } else if(time < moment().format("H")){
        return "past"
    } else {
        return "future"
    }
}

function timeString(int){ //Convert time from loop into readable format
    if(int < 12){
        return (int+"AM")
    }
    if(int == 12){
        return (int+"PM")
    } else {
        return ((int-12)+"PM")
    }
}

//Save button listener that checks stores value to localStorage
$(document).on("click", "#save", function(event){
    var id = $(this).siblings("input").attr("id") //Get localStorage name 
    localStorage.setItem(id, $(this).siblings("input").val()) //Store
    console.log(localStorage.getItem(id))
})

displayTimeBlocks() //Call display