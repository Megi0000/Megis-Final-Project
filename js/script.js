document.querySelector('.card').addEventListener('mouseover', function() {
  document.querySelector('.card-extra').style.transform = 'translateY(0)';
  document.querySelector('.card-image').style.transform = 'scale(1.1)';
 });
 
 document.querySelector('.card').addEventListener('mouseout', function() {
  document.querySelector('.card-extra').style.transform = 'translateY(100%)';
  document.querySelector('.card-image').style.transform = 'scale(1)';
 });

//  dropdown submenus

