"use strict";

var gQuests;
var gCurrQuestIdx = 0;

function initGame() {
  createQuests()
  gCurrQuestIdx = 0
  renderQuest()

  var elRestartBtn = document.querySelector(".restart");
  elRestartBtn.style.display = 'none'
}

function createQuests() {
  gQuests = [
    { id: 1, opts: ["dog", "cow"], correctOptIndex: 1 },
    { id: 2, opts: ["war criminal", "librator"], correctOptIndex: 0 },
    { id: 3, opts: ["tax", "robbery"], correctOptIndex: 1 },
  ];
}

function checkAnswer(optIdx) {
  var currQuest = gQuests[gCurrQuestIdx]
  if (optIdx === currQuest.correctOptIndex) {
    gCurrQuestIdx++
    if(gCurrQuestIdx >= gQuests.length){
      // Victorious msg
      // show restart
      gameWon()
      return
    }
  
    renderQuest()
  }
  
  
}

function renderQuest() {
  var currQuest = gQuests[gCurrQuestIdx]

  // if (gCurrQuestIdx < gQuests.length - 1) alert()

  var elenemtImg = document.querySelector('img')
  elenemtImg.src = `images/${currQuest.id}.jpg`

  var elOptions = document.querySelector('.options')

  var strHTML = ''
  for (var i = 0; i < currQuest.opts.length; i++) {
    strHTML +=
      `<button class="btn" onclick="checkAnswer(${i})">${currQuest.opts[i]}</button>`;
  }
  
  elOptions.innerHTML = strHTML
 
}

function gameWon() {
  alert("Victorious");

  var elRestartBtn = document.querySelector(".restart");
  elRestartBtn.style.display = 'block'
  
}

function turnof() {
  
}
