'use strict'
var gBoard=[]
const MINE = ' mine'
const CLICK= ' click'
const FLAG = 'flag'
const firstcount=0

var gGame = {
  isOn: false,
  shownCount: 0,
  markedCount: 0,
  secsPassed: 0
 }
var gLevel = {
  SIZE: 4,
  MINES: 2
 }
 
 

function onInitGame() {
    
  gBoard = buildBoard()
  console.log(gBoard);
  setMines()
  renderBoard(gBoard)
  
  setMinesNegsCount(gBoard)
  console.log(gBoard);
  
  rendeMines()


}

function buildBoard() {
  
  const rowCount = 4
  const colCount = 4
  const board = []
  for (var i = 0; i < rowCount; i++) {
    board[i] = []
    for (var j = 0; j < colCount; j++) {
      board[i][j] = {
        minesAroundCount:0,
        isShown:false,
        isMine:false,
        isMarked:false
       }  
    }
    
  }
  
 
console.log(board);
  return board
}

function renderBoard(board) {
  
  var strHTML = '<table><tbody>'
  for (var i = 0; i < board.length; i++) {
    strHTML += '<tr>'
    
    var a=board[i].length
    console.log(board[i]);
    for (var j = 0; j < a; j++) {

      var cellClass = getClassName({ i: i, j: j }) 
      
     
      strHTML+= `<td class="cell ${cellClass}" onclick="cellClicked()" onconextmenu="onCellMarked()"></td>`
     
    }
  
    strHTML += '</tr>' 
  }
  strHTML += '</tbody></table>'
    
  const elBoard = document.querySelector('.board')
  elBoard.innerHTML = strHTML
}
    

function getClassName(location) {
  const cellClass = 'cell-' + location.i + '-' + location.j
  
  return cellClass
}

function renderCell(location, value) {
  console.log( value);
  
 

//  const elCell = document.querySelector('.cell-0-3')
  
   const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
   if (elCell){
  console.log(elCell);
  elCell.innerText = value
  console.log(value);}
}

function renderCelltxt(location, value){
  // const elCell = document.querySelector('.cell-0-3')
   const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
  if (elCell) {
    console.log(elCell);
  elCell.innerText = value
}
}


function onCellMarked(elCell) {
  
  document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);
renderCelltxt
 var elRend={i,j}
  if (gBoard[i][j].isShown===true) return;
  if (gBoard[i][j].isMarked===false) {
    
    gBoard[i][j].isMarked = true;
    gGame.markedCount++;
    renderCell(elRend, FLAG);
 
  } else {
    gBoard[i][j].isMarked = false;
    gGame.markedCount--
    renderCell(i, j, '');
   
  }
}

function gameOver(){
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard[i].length; j++) {
     
      var strhtml=' '
      if (gBoard[i][j].isMine) {
        strhtml+=MINE
        var location={i,j}
        renderCelltxt(location, strhtml) 
        continue
      }
      if (gBoard[i][j].minesAroundCount>0) {
        strhtml+=gBoard[i][j].minesAroundCount
        var location={i,j}
        renderCelltxt(location, strhtml) 
      }

      
    }
    
  }

} 

function setMinesNegsCount(board) { 
  for (var i= 0; i < board.length ; i++) {
    console.log(board[i]);
    for (var j =  0; j < board[i].length; j++) {
      var location={i,j}
      var value=NegsCount(i,j)
      
  
      board[i][j].minesAroundCount=value
       renderCell(location, value) 


        } }       
}


function cellClicked(elCell, i, j) {
  console.log(gBoard[i][j]);
  if (gBoard[i][j].isMarked) return;
  if (gBoard[i][j].isShown) return;

  if(firstcount=0){
     setMines()
     setMinesNegsCount()
    // startTimer
  }
  gBoard[i][j].isShown = true
  if(gBoard[i][j].isMine){
    elCell.innerText = MINE
    elCell.classList.remove('hide')
    
    gameOver()

  }


  if (gBoard[i][j].minesAroundCount === 0) {
    expandShown(gBoard,elCell, i, j);
    renderBoard(gBoard);
    return;
  }

  elCell.innerText = gBoard[i][j].minesAroundCount ? gBoard[i][j].minesAroundCount : ''
}

function expandShown(board, elCell,  i, j ) {
 
  
  if (board[i][j].minesAroundCount===0) {
    
    for (var h = i - 1; h <= i + 1; h++) {
      
      if (h < 0 || h > board.length - 1) continue;
      for (var k = j - 1; k <= j + 1; k++) {
       
        if (k < 0 || k > gBoard[0].length - 1) continue;
  
        if (h === i && k === j) continue;
        if (gBoard[h][k].isMarked===true) continue;
        if (gBoard[h][k].isShown===true) continue;
        var location={i:h,j:k}
        var t=NegsCount(i,j)
        if (t>0) {
          renderCelltxt(location,t)
        }
        
       

        
        
      }
    }
  }
}

function setMines(){
gBoard[0][1].isMine=true
gBoard[0][3].isMine=true


}

function NegsCount(i,j) {
  var count=0
  for (var h = i - 1; h <= i + 1; h++) {
      
    if (h < 0 || h > gBoard.length - 1) continue;
    for (var k = j - 1; k <= j + 1; k++) {
     
      if (k < 0 || k > gBoard[h].length - 1) continue;

     
      if (gBoard[h][k].isMine===true)  count++
      

}}

return count


}

function rendeMines() {
  for (let i = 0; i < gBoard.length; i++) {
    for (let j = 0; j < gBoard[i].length; j++) {
     
      if (gBoard[i][j].isMine){
        console.log(`.cell-${i}-${j}`);
       var cellMine= document.querySelector(`.cell-${i}-${j}`)
       cellMine.innerText=MINE
      }
    
    
  }
  
}

}
