const question = document.getElementsByTagName('details');


const questionArray = Array.from(question);

questionArray.forEach(e => e.addEventListener('toggle', (event) =>
{
 console.log(e);
}
));