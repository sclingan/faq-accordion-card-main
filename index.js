
for(let i = 0; i < 6; i++){
let chevron = document.getElementsByClassName('chevron');
let question = document.getElementsByTagName('label');
  chevron[i].addEventListener('click', function(){
        chevron[i].style.transform = 'rotate(180deg)';
        question[i].style.fontWeight = '700';
        question[i].style.borderBottom = 'none';
    });
}