  
  let intervalid;
  
  // function to generate random colors

let randomcolor= ()=>{

  let color='#'
  let hex= '0123456789ABCDEF'
    
  for(let i=0;i<6;i++){

    color+= hex[parseInt(Math.random()*16)]
   }

   return color;
  }

  console.log(randomcolor());
  
// change color of background in every second
  let start=document.querySelector('.start');

   start.addEventListener('click', function(){

    let colorchange=()=>{document.body.style.backgroundColor= randomcolor()};
    
    intervalid =setInterval(colorchange,500)



  })

  //stop the color change in background

  let stop=document.querySelector('.stop');

     stop.addEventListener('click', function(){

      clearInterval(intervalid);

    
  })


