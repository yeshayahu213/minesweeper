'use strict'
var gBoard
const MOKESH = 'MOKESH'
var MOKESH_IMG='\n\t\t<img src="img/gamer.png">\n'
var gGame = {
  isOn: false,
  shownCount: 0,
  markedCount: 0,
  secsPassed: 0
 }

 

function onInitGame() {
    
  gBoard = buildBoard()
  console.log(gBoard);
  renderBoard(gBoard)
  const elmokesh =document.querySelector('.MOKESH')
  console.log(elmokesh);
  elmokesh.innertext='mokesh'
  

}

function buildBoard() {
  
  const rowCount = 4
  const colCount = 4
  const board = []
  for (var i = 0; i < rowCount; i++) {
    board[i] = []
    for (var j = 0; j < colCount; j++) {
      board[i][j] = {minesAroundCount:0
        ,isShown:true,isMine:false,isMarked:false }
        
      if (i === 2 &&  j === 2) {
        board[i][j].gameElement=MOKESH
        
      }
      else{
        board[i][j].gameElement='floor'
       
      }
      
    }
  }

  return board
}

function renderBoard(board) {
  
  var strHTML = ''
  for (var i = 0; i < board.length; i++) {
    strHTML += '<tr>\n'
    console.log(board[i].length);
    var a=board[i].length
    for (var j = 0; j < a; j++) {
      console.log('h');
    
      var cellClass = getClassName({ i: i, j: j }) + ' '

      for (var i = 0; i < board.length; i++) {
        
        for (var j = 0; j < board[i].length; j++) {
        
      for (var h = i- 1; h <= i + 1; h++) {
        if (h < 0 || h >= board.length) continue;
        for (var k = j - 1; k <= j + 1; k++) {
          if (k < 0 || k>= board[i][j].length) continue;
          else if (board[i][j].gameElement === MOKESH) board[i][j].minesAroundCount++
         
      }}}}}
    
    if (board[i][j].gameElement==='floor') {
      cellClass += 'floor'
    }
      else{
        cellClass += MOKESH
      }
      strHTML += `<td class="cell ${cellClass}" >`
      }

      strHTML += '</tr>'

      
   
    
    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
   
    // elmokesh.innertext='#'
  }

  
  




function getClassName(location) {
  const cellClass = 'cell-' + location.i + '-' + location.j
  return cellClass
}

function renderCell(location, value) {
  const cellSelector = '.' + getClassName(location) // cell-i-j
  const elCell = document.querySelector(cellSelector)
  elCell.innerHTML = value
}

function countGamerNegs() {
  var negsCount = 0;

    
    
}

function onCellClicked(elCell, i, j)  {
  
}

function onCellMarked(elCell) {

}

function checkGameOver(){

} 

function expandShown(board, elCell, i, j) {
  
}