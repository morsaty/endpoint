  $(window).scroll(function() { 

    if ($(window).scrollTop() >  $("#section1").offset().top + 300) {
      const counters = document.querySelectorAll('.value');
      const speed = 2000;

  counters.forEach( counter => {
    const animate = () => {
    const value = +counter.getAttribute('akhi');
    const data = +counter.innerText;
   
    const time = value / speed;
   if(data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 150);
      }else{
        counter.innerText = value;
      }
   
 }
 
animate();
});
    }

});

$(window).scroll(function() { 

  if ($(window).scrollTop() >  $("#section1").offset().top + 300) {
    const counters2 = document.querySelectorAll('.value2');
    const speed2 = 2000;

counters2.forEach( counter => {
  const animate2 = () => {
  const value2 = +counter.getAttribute('akhi2');
  const data2 = +counter.innerText;
 
  const time2 = value2 / speed2;
 if(data2 < value2) {
      counter.innerText = Math.ceil(data2 + time2);
      setTimeout(animate2, 1);
    }else{
      counter.innerText = value2;
    }
 
}

 animate2();
});
  }

});



// $(document).ready(function(){
//     $(".hamburger").click(function(){
//       $(this).toggleClass("is-active");
//     });
//   });
  
// const counters = document.querySelectorAll('.value');
//         const speed = 2000;

//     counters.forEach( counter => {
//       const animate = () => {
//       const value = +counter.getAttribute('akhi');
//       const data = +counter.innerText;
     
//       const time = value / speed;
//      if(data < value) {
//           counter.innerText = Math.ceil(data + time);
//           setTimeout(animate, 150);
//         }else{
//           counter.innerText = value;
//         }
     
//    }
   
//   // animate();
// });

// //counter 2 for 350+
// const counters2 = document.querySelectorAll('.value2');
//         const speed2 = 2000;

//     counters2.forEach( counter => {
//       const animate2 = () => {
//       const value2 = +counter.getAttribute('akhi2');
//       const data2 = +counter.innerText;
     
//       const time2 = value2 / speed2;
//      if(data2 < value2) {
//           counter.innerText = Math.ceil(data2 + time2);
//           setTimeout(animate2, 1);
//         }else{
//           counter.innerText = value2;
//         }
     
//    }
   
//   //  animate2();
// });
