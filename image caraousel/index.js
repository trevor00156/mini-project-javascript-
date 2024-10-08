let next=document.querySelector('.next_button');
let prev=document.querySelector('.prev_button')
let images=document.querySelector('.images_changes')
let image_container=['images/1.jpg', 'images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg' ]

let current_index=0

next.addEventListener('click', function(e){

 current_index=(current_index+1)%image_container.length;

images.src=image_container[current_index];

});


prev.addEventListener('click',function(e){

  current_index=(current_index - 1 + image_container.length )%image_container.length
  images.src=image_container[current_index]
})