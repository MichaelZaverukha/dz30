const div = document.querySelector('.div');
const area = document.querySelector('.textarea');

document.addEventListener("keydown", function (event){
   if((event.ctrlKey || event.metaKey) && event.code == 'KeyE'){
      event.preventDefault();
      div.style.display = 'none';
      area.style.display = 'block';
      area.value=div.textContent;
   }
   if((event.ctrlKey || event.metaKey) && event.code == 'KeyS'){
      event.preventDefault();
      div.style.display = 'block';
      area.style.display = 'none';
      div.textContent= area.value;
   }
})