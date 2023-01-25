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

      
          if (board[i][j].gameElement==='floor') {
            cellClass += 'floor'
          }
            else{
              cellClass += 'MOKESH'
            }



            strHTML += `<td class="cell ${cellClass}"  onclick="onCellClicked(${i},${j})" >`
         
    }
  
    strHTML += '</tr>' 
  }
    
  const elBoard = document.querySelector('.board')
  elBoard.innerHTML = strHTML
}
    
  




function getClassName(location) {
  const cellClass = 'cell-' + location.i + '-' + location.j
  return cellClass
}

function renderCell(location, value) {
  // const cellSelector =  getClassName(location) // cell-i-j
  // console.log(location);
  const elCell = document.querySelector(location)
  console.log(elCell);
  elCell.innerHTML = value
}



function onCellClicked( i, j)  {
  console.log(i,j);
  console.log(gBoard[i][j])
  setMinesNegsCount(i,j)
if (gBoard[i][j].gameElement===MOKESH) {
  console.log('alan alan');
  checkGameOver()
}
 if (gBoard[i][j].minesAroundCount===0){
  console.log('h');
 
 console.log(gBoard[i][j])   ;

}
else if (gBoard[i][j].minesAroundCount===1) {
  console.log('hi');
 
 console.log(gBoard[i][j])   ;

}
var arr=setMinesNegsCount(i, j)
console.log(arr);
for (var  i = 0; i < arr.length; i++) {
  var strhtmk=''
   strhtmk+='.cell'
   var a=arr[i].h




  renderCell('.cell' + a,MOKESH_IMG)
  
}
 

}

function onCellMarked(elCell) {

}

function checkGameOver(){
  alert('game over mf')

} 

function expandShown(board, elCell, i, j) {
  
}
function setMinesNegsCount(i,j) {
  gBoard[i][j].minesAroundCount=0
  var revalArray=[]
  
  for (var h = i- 1; h <= i + 1; h++) {
    
    if (h < 0 || h >= gBoard.length) continue;
    for (var k = j - 1; k <= j + 1; k++) {
      if (k < 0 || k>= gBoard[i].length) continue;
      console.log(gBoard[i][j].minesAroundCount);
      console.log(h,k)
      revalArray.push({h,k})
      if (gBoard[h][k].gameElement === MOKESH) {
       
        gBoard[i][j].minesAroundCount++
       
        

      }
      
    }
      return revalArray
    } 

      
}
