const question = document.getElementsByTagName('details');
console.log(question);


question.forEach(e => {
question[e].addEventListener("toggle", (event) => {
    if (question[e].open) {
      /* the element was toggled open */
      console.log('open');
    } else {
      /* the element was toggled closed */
      console.log('closed');
    }
  })
});
