const time =document.querySelector("#time");
const greeting=document.querySelector('#greeting');


function showTime(){
    let today=new Date(),
    hour=today.getHours(),
    min=today.getMinutes(),
    sec=today.getSeconds();

    // Set AM or PM by using terniary operator
    const checktime= hour>=12 ?"PM": "AM";
    // change to 12 hour
    hour= hour%12;
    // template literal
    time.innerHTML=`${hour}<span>:</span>${padZero(min)}<span>:</span> ${padZero(sec)} `

    // set for every second to shows up
    setTimeout(showTime,1000);
}



// Add zeros

function padZero(n){
    //  if less than 10 add 0 else just left blank
    //  if less than 10 add 0 else dont add anything
    return (parseInt(n,10)<10 ?"0":"")+n;
}

// Set background and Greeting
function setBg() {
    let today = new Date(),
      hour = today.getHours();
  
    if (hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('img/morning.jpg')";
      document.body.style.backgroundRepeat="no-repeat";
      document.body.style.backgroundSize="100%";
      greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('img/morning.jpg')";
      document.body.style.backgroundRepeat="no-repeat";
      document.body.style.backgroundSize="100%";
      greeting.textContent = 'Good Afternoon';
      document.body.style.color="white";
    } else {
      // Evening
      document.body.style.backgroundImage = "url('img/night.jpg')";
      document.body.style.backgroundRepeat="no-repeat";
      document.body.style.backgroundSize="100%";
      greeting.textContent = 'Good Evening';
      document.body.style.color = 'white';
    }
  }

showTime();
setBg();