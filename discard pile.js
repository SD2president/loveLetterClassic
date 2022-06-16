function movingDiscard(playerHandNum,index){
    discardPile.push(playerHandNum.pop([index]))
    document.body.append(playerHandNum[index].valueImg)
    
}