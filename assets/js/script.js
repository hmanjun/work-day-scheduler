var currentTime = $("#currentDay")
currentTime.text(moment().format("dddd, MMMM Do"))

console.log(moment("2013-02-08 09:00").format("hh:mm"))
console.log(timeString(15))

function displayTimeBlocks(){
    for(var i = 9; i <= 17; i++){
        var container = $(".container")

        var groupDiv = $("<div>").addClass("row")
        var timeDiv = $("<div>").text(timeString(i)).addClass("col-2 justify-content-center")
        var noteDiv = $("<div>").addClass("col-8 justify-content-center " + timeColor(i))
        var saveDiv = $("<div>").text("💾").addClass("col-2 bg-info justify-content-center")


        groupDiv.append(timeDiv, noteDiv, saveDiv)
        container.append(groupDiv)
    }
}

function timeColor(time){
    if(time == moment().format("H")){
        return "bg-danger"
    } else if(time < moment().format("H")){
        return "bg-secondary"
    } else {
        return "bg-success"
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

displayTimeBlocks()