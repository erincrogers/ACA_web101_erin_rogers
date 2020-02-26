var previousPlay = null
function addGamePiece (selectedElement) {
// creating element
var newElement = document.createElement('h1')

previousPlay = setGamePiece()
newElement.innerText = previousPlay
selectedElement.appendChild(newElement)
}
function setGamePiece() {
if (previousPlay === 'x') {
return 'o'
} else if (previousPlay === 'o') {
return 'x'
} else {
return 'x'
}
}