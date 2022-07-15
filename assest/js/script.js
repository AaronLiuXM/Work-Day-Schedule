// Today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(todayDate);

// save text to local storage
$(".saveBtn").on("click", function() {
    var time = $(this).siblings(".hour").text();
    var sch = $(this).siblings(".description").val();

    localStorage.setItem(time, sch);
});

// load data from local storage
function planner() {
    $("#hour8 .description").val(localStorage.getItem("8 AM"));
    $("#hour9 .description").val(localStorage.getItem("9 AM"));
    $("#hour10 .description").val(localStorage.getItem("10 AM"));
    $("#hour11 .description").val(localStorage.getItem("11 AM"));
    $("#hour12 .description").val(localStorage.getItem("12 PM"));
    $("#hour13 .description").val(localStorage.getItem("1 PM"));
    $("#hour14 .description").val(localStorage.getItem("2 PM"));
    $("#hour15 .description").val(localStorage.getItem("3 PM"));
    $("#hour16 .description").val(localStorage.getItem("4 PM"));
    $("#hour17 .description").val(localStorage.getItem("5 PM"));

};

function tracker() {
    // set currnt time
    var currentTime = moment().hour();

    // loop time-black and track if it is pastdue    
    $(".time-block").each(function(){
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        if (timeBlock < currentTime){
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

            }
    })
}

planner();

tracker();