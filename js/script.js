document.querySelector('.card').addEventListener('mouseover', function() {
  document.querySelector('.card-extra').style.transform = 'translateY(0)';
  document.querySelector('.card-image').style.transform = 'scale(1.1)';
 });
 
 document.querySelector('.card').addEventListener('mouseout', function() {
  document.querySelector('.card-extra').style.transform = 'translateY(100%)';
  document.querySelector('.card-image').style.transform = 'scale(1)';
 });

// burgerbar
let navBar = document.getElementById('navBar');
let burgerBar = document.getElementById('burger');

burgerBar.addEventListener('click', function() {
  navBar.classList.toggle('activeNav');
  
})

// 

