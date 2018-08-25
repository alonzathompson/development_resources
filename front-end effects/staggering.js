
 var moveButton = document.querySelector('.move-button');
var items = document.querySelectorAll('.grid-a .grid-item');
var isMoved = false;

moveButton.onclick = function() {
  // toggle flag
  isMoved = !isMoved;

  for ( var i=0; i < items.length; i++ ) {
    // get function in closure, so i can iterate
    var toggleItemMove = getToggleItemMove( i );
    // reverse stagger order
    var delay = isMoved ? ( items.length - i - 1 ) : i;
    delay *= 50;
    // stagger transition with setTimeout
    setTimeout( toggleItemMove, delay );
  }
};

function getToggleItemMove( i ) {
  var item = items[i];
  return function() {
    item.classList.toggle('is-moved');
  }
}