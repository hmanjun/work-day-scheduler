var currentTime = $("#currentDay")
currentTime.text(moment().format("dddd, MMMM Do"))

console.log(moment("2013-02-08 09:00").format("hh:mm"))
console.log(timeString(15))

function displayTimeBlocks(){
    for(var i = 9; i <= 17; i++){
        var container = $(".container")

        var groupDiv = $("<div>").addClass("row")
        var timeDiv = $("<div>").text(timeString(i)).addClass("hour")
        var noteDiv = $("<input>").addClass("justify-content-center " + timeColor(i))
        var saveDiv = $("<div>").text("💾").addClass("saveBtn")
        saveDiv.attr("id", "save")

        groupDiv.append(timeDiv, noteDiv, saveDiv)
        container.append(groupDiv)
    }
}

function timeColor(time){
    if(time == moment().format("H")){
        return "present"
    } else if(time < moment().format("H")){
        return "past"
    } else {
        return "future"
    }
}

function timeString(int){
    if(int < 12){
        return (int+"AM")
    }
    if(int == 12){
        return (int+"PM")
    } else {
        return ((int-12)+"PM")
    }
}

$(document).on("click", "#save", function(event){
    
})

displayTimeBlocks()