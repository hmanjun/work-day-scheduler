var currentTime = $("#currentDay")
currentTime.text(moment().format("dddd, MMMM Do"))

console.log(moment("2013-02-08 09:00").format("hh:mm"))
console.log(timeString(15))

function displayTimeBlocks(){
    for(var i = 9; i <= 17; i++){
        var container = $(".container")

        var groupDiv = $("<div>").addClass("row")
        var timeDiv = $("<div>").text(timeString(i)).addClass("hour col-1")
        var noteDiv = $("<input>").addClass("justify-content-center col-10 " + timeColor(i))
        noteDiv.attr("id", i+"storage")
        if(localStorage.getItem(i+"storage") != null){
            noteDiv.val(localStorage.getItem(i+"storage"))
        }
        var saveDiv = $("<div>").text("💾").addClass("saveBtn col-1")
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
    //console.log($(this).siblings("input").val())
    var id = $(this).siblings("input").attr("id")
    localStorage.setItem(id, $(this).siblings("input").val())
    console.log(localStorage.getItem(id))
})

displayTimeBlocks()