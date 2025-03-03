
let uuid = localStorage.getItem("uuid")
if(!uuid){
    window.location.href="/Log in"
}
// document.addEventListener("DOMContentLoaded", function () {
//     const inputs = document.querySelectorAll(".otp-input");

//     inputs.forEach((input, index) => {
//         input.addEventListener("input", (e) => {
//             if (e.target.value.length === 1 && index < inputs.length - 1) {
//                 inputs[index + 1].focus(); // Move to next input
//             }
//             checkOtpFilled();
//         });

//         input.addEventListener("keydown", (e) => {
//             if (e.key === "Backspace" && index > 0 && !input.value) {
//                 inputs[index - 1].focus(); // Move to previous input on backspace
//             }
//         });
//     });

//     function checkOtpFilled() {
//         let otp = "";
//         inputs.forEach(input => otp += input.value);
//         if (otp.length === inputs.length) {
//             window.location.href = "nextpage.html"; // Redirect to next page
//         }
//     }
// }); 


2.

// for (let i = 1; i <=6; i++) {
//     let otp = `otp-${[i]}`
// let otpx = document.getElementById(otp);
// otpx.addEventListener('input', function (e) {
//         console.log(e, "asdsd")
//         if (e.target.value.length > 1) {
//             document.getElementById(`otp-${[i]}`).value = e.target.value[0]
//         }
//         else if (e.target.value.length == 1) {
//             document.getElementById(`otp-${[i]}`).blur()
//             document.getElementById(`otp-${[i+1]}`).focus()
//         } else if (e.target.value.length == 0) {
//             document.getElementById(`otp-${[i+1]}`).blur()
//             document.getElementById(`otp-${[i]}`).focus()
//         }
//     })
//     otpx.addEventListener('keydown', function (e) {
//             if (e.key == "Backspace" && e.target.value.length == 0) {
//                 document.getElementById(`otp-${[i]}`).blur()
//                 document.getElementById(`otp-${[i-1]}`).focus()
//             }
//         })
//     }




// let Otp_1 = document.getElementById('otp-1')
// let Otp_2 = document.getElementById('otp-2')
// let Otp_3 = document.getElementById('otp-3')
// let Otp_4 = document.getElementById('otp-4')
// let Otp_5 = document.getElementById('otp-5')
// let Otp_6 = document.getElementById('otp-6')

// console.log(Otp_2,"asdfas")


// Otp_1.addEventListener('input', function (e) {
//     if (e.target.value.length > 1) {
//         document.getElementById('otp-1').value = e.target.value[0]
//     } else if (e.target.value.length == 1) {
//         document.getElementById('otp-1').blur()
//         document.getElementById('otp-2').focus()
//     }
//     // } else if (e.target.value.length == 0) {
//     //     document.getElementById('otp-1').blur()
//     //     document.getElementById('otp-2').focus()
//     // }
// })

// Otp_2.addEventListener('input', function (e) {
//     console.log(e.target.value.length,"i am length")
//     if (e.target.value.length > 1) {
//         console.log("inasdfads")
//         document.getElementById('otp-2').value = e.target.value[0]
//     } else if (e.target.value.length == 1) {
//         console.log("inn")
//         document.getElementById('otp-2').blur()
//         document.getElementById('otp-3').focus()
//         console.log("out")
//     } else if (e.target.value.length == 0) {
//         document.getElementById('otp-2').blur()
//         document.getElementById('otp-1').focus()
//     }
// })

//     Otp_2.addEventListener('keypress', function (e) {
//         if (e.key === "Backspace") {
//             document.getElementById('otp-2').blur()
//             document.getElementById('otp-1').focus()
//         }
//     })


// Otp_3.addEventListener('input', function (e) {
//     console.log("first")
//     if (e.target.value.length > 1) {
//         document.getElementById('otp-3').value = e.target.value[0]
//     } else if (e.target.value.length == 1) {
//         document.getElementById('otp-3').blur()
//         console.log("in")
//         document.getElementById('otp-4').focus()
//     } else if (e.target.value.length == 0) {
//         document.getElementById('otp-3').blur()
//         document.getElementById('otp-2').focus()
//     }

//     Otp_3.addEventListener('keypress', function (e) {
//         if (e.key === "Backspace") {
//             document.getElementById('otp-3').blur()
//             document.getElementById('otp-2').focus()
//         }
//     })
// })

// Otp_4.addEventListener('input', function (e) {
//     if (e.target.value.length > 1) {
//         document.getElementById('otp-4').value = e.target.value[0]
//     } else if (e.target.value.length == 1) {
//         document.getElementById('otp-4').blur()
//         document.getElementById('otp-5').focus()
//     } else if (e.target.value.length == 0) {
//         document.getElementById('otp-4').blur()
//         document.getElementById('otp-3').focus()
//     }

//     Otp_4.addEventListener('keypress', function (e) {
//         if (e.key === "Backspace") {
//             document.getElementById('otp-4').blur()
//             document.getElementById('otp-3').focus()
//         }
//     })
// })

// Otp_5.addEventListener('input', function (e) {
//     if (e.target.value.length > 1) {
//         document.getElementById('otp-5').value = e.target.value[0]
//     } else if (e.target.value.length == 1) {
//         document.getElementById('otp-5').blur()
//         document.getElementById('otp-6').focus()
//     } else if (e.target.value.length == 0) {
//         document.getElementById('otp-5').blur()
//         document.getElementById('otp-4').focus()
//     }

//     Otp_5.addEventListener('keypress', function (e) {
//         if (e.key === "Backspace") {
//             document.getElementById('otp-5').blur()
//             document.getElementById('otp-4').focus()
//         }
//     })
// })


// Otp_6.addEventListener('input', function (e) {
//     if (e.target.value.length > 1) {
//         document.getElementById('otp-6').value = e.target.value[0]
//     } else if (e.target.value.length == 1) {
//         document.getElementById('otp-6').blur() 
//     } else if (e.target.value.length == 0) {
//         document.getElementById('otp-6').blur() 
//     }

//     Otp_6.addEventListener('keypress', function (e) {
//         if (e.key === "Backspace") {
//             document.getElementById('otp-6').blur() 
//             document.getElementById('otp-5').focus() 

//         }
//     })

// })




// let button = document.getElementById('js-startTimer')
// function showtime(){
//     let current = new Date()
//     // time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
//     document.getElementById('js-resetTimer').innerHTML = time
// }
// let result2 = setInterval(showtime,1000)
// button.addEventListener('click',()=>{
//     clearInterval(result2)
// })  






// otp1.addEventListener('input',function(e){
//     if(e.target.value.length>1){
//         document.getElementById("otp-1").value = e.target.value[0]
//     }
//     else if(e.target.value.length==1){
//         document.getElementById("otp-1").blur()
//         document.getElementById("otp-2").focus()
//     }
//     // else if(e.target.value.length==0){
//     //     document.getElementById("otp-1").blur()
//     // }
// })
// otp2.addEventListener('input',function(e){
//     console.log(e,"asdsd")
//     if(e.target.value.length>1){
//         document.getElementById("otp-2").value = e.target.value[0]
//     }
//    else if(e.target.value.length==1){
//         document.getElementById("otp-2").blur()
//         document.getElementById("otp-3").focus()
//     } else if(e.target.value.length==0){
//         document.getElementById("otp-2").blur()
//         document.getElementById("otp-1").focus()
//     }
// })
// otp2.addEventListener('keydown',function(e){
//     if(e.key=="Backspace" && e.target.value.length==0){
//         document.getElementById("otp-2").blur()
//         document.getElementById("otp-1").focus()
//     }
// })
// otp3.addEventListener('input',function(e){
//     if(e.target.value.length>1){
//         document.getElementById("otp-3").value = e.target.value[0]
//     }
//    else if(e.target.value.length==1){
//         document.getElementById("otp-3").blur()
//         document.getElementById("otp-4").focus()
//     } else if(e.target.value.length==0){
//         document.getElementById("otp-3").blur()
//         document.getElementById("otp-2").focus()
//     }
// })
// otp3.addEventListener('keydown',function(e){
//     if(e.key=="Backspace" && e.target.value.length==0){
//         document.getElementById("otp-3").blur()
//         document.getElementById("otp-2").focus()
//     }
// })


// function gettime() {
//     let data = new Date();
//     const time = `${data.getMinutes()}:${data.getSeconds()}`;
//     // console.log(time); 
//     document.getElementById("h1").innerText = time
// }

// setInterval(gettime, 1000);


// let timeLeft = 120; 

// function startTimer() {
//     const timerDisplay = document.getElementById("h1");

//     function updateTimer() {
//         let minutes = Math.floor(timeLeft / 60);
//         let seconds = timeLeft % 60;

//         let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//         timerDisplay.innerText = formattedTime;

//         if (timeLeft > 0) {
//             timeLeft--;
//         } else {
//             clearInterval(timerInterval); 
//         }
//     }
//     updateTimer();  
//     var timerInterval = setInterval(updateTimer, 1000);  
// }
// startTimer();  



// let value = document.getElementById("current")
// let counter = 120;

// setInterval(() => {
//     value.innerText = counter
//     counter--
//     if(counter>1) {

//     }
// },1000);




// let timer = document.getElementById('h1')
// let counter = 120;

// setInterval(() => {
//     counter--
//     timer.innerText = counter
//     if(counter>0){
//         clearInterval(counter)
//     }
// },1000);




for (let i = 1; i <= 6; i++) {
    let otp = `otp-${[i]}`
    let OtpValue = document.getElementById(otp)
    OtpValue.addEventListener('input', (e) => {
        if (e.target.value.length > 1) {
            document.getElementById(`otp-${[i]}`).value = e.target.value[0]
        } else if (e.target.value.length == 1) {
            document.getElementById(`otp-${[i]}`).blur()
            document.getElementById(`otp-${[i + 1]}`).focus()
        } else if (e.target.value.length == 0) {
            document.getElementById(`otp-${[i]}`).blur()
            document.getElementById(`otp-${[i + 1]}`).focus()
        }

    })

    OtpValue.addEventListener('keydown', function (e) {
        if (e.key === "Backspace" && e.target.value.length == 0) {
            document.getElementById(`otp-${[i]}`).blur()
            document.getElementById(`otp-${[i - 1]}`).focus()
        }
    })
}



// let countervalue;
// function createtime(minutes, seconds) {
//     let timer = document.getElementById('timer')
//     timer.innerText =
//         minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)

//     seconds--
//     if (seconds >= 0) {
//         countervalue = setTimeout(createtime, 1000);
//     } else if (minutes >= 1) {
//         setTimeout(() => {
//             createtime(minutes - 1, 59)
//         }, 1000);
//     }
// }
// createtime(2)


// let base_url = ""
// function PasswordApi(Mobile,Password){
//     let Mobile = document.getElementById('Mobile').value
//     let Password = document.getElementById('Password').value


// }