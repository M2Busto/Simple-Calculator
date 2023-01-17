let ResultString = "" ; let ResultNumber = 0
const Elements = document.querySelectorAll(".element")
const Result_Box = document.querySelector("#result-box")

Elements.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.innerHTML === "=") {
            ResultNumber = eval(ResultString)
            ResultString = ResultNumber
            Result_Box.innerHTML = ResultNumber
            console.log(ResultNumber)
        } else if (button.innerHTML === "C") {
            Result_Box.innerHTML = "0"
            ResultString = "0" ; ResultNumber = 0
        } 
        else {
            if (ResultString === "") {
                ResultString = ""
            }
            ResultString += button.innerHTML
            Result_Box.innerHTML = ResultString
        }
    })
})
