//highlight all of the boxes with a different background color
var listItems = document.getElementsByClassName('box');

function changeColor() {
  this.classList.add('color-change');
}

for (i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', changeColor);
}

//have a message appear somewhere on the page that says “Oooh - so close, but no cigar”
listItems[0].addEventListener('click', function(){
 "Oooh - so close, but no cigar"
});

//have a message appear somewhere on the page that says “DING DING DING - We have a winner”
listItems[1].addEventListener('click', function(){
 "DING DING DING - We have a winner"
});

//have a message appear somewhere on the page that says “Oops, butter luck next time”
listItems[2].addEventListener('click', function(){
 "Oops, butter luck next time"
});
