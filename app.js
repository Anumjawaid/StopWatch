// setInterval(function(){
//it takes two parameter 1-func that provides what to do and 2- the time how much time it take to run
// it will run continuosly until it wil stop
// },time in millisecond)
// var count=0
// function timer(){
//     count++
// document.getElementById("count").innerHTML = count;
    
// }
// var interval=setInterval(timer,1000)//1000ms=1sec
// setTimeout(timeOut)
// setTimeout(function(){clearInterval(setInterval)},5000) not working dont know why
// setTimeout(timeOut,5000)

// function Start() {
// var interval=setInterval(timer,1000)

//   }
//  var interval= setInterval(timer1,1000)
//   var co1;
//   function timer1(){
//       co1++
//       console.log(co1)
//   }
//   function timeOut(){
    // console.log("Runing","timeOut")
    //  document.write("Runing","timeOut")
  //   clearInterval(interval)
    
  //    }
  // function Stop(){
  //   setTimeout(timeOut)


  // }
  var min=0;
  var sec=0;
  var msec=0;
  var minhead=document.getElementById("min")
  var sechead=document.getElementById("sec")
  var msechead=document.getElementById("msec")

  var interval;
  function timer(){
    msec++
    msechead.innerHTML=msec;
    if(msec>=100){
      sec++
      sechead.innerHTML=sec;
      msec=0
    }
    if(sec>=60){
      min++
      minhead.innerHTML=min;
      sec=0
    }

  }
  function  chalja(){
  interval=setInterval(timer,10)//10*100 msec wise
  }

  function rukja(){
    clearInterval(interval)
  }
  function basbhaibas(){
    min=0
    sec=0
    msec=0
    minhead.innerHTML=min
    sechead.innerHTML=sec
    msechead.innerHTML=msec
    rukja()
  }

