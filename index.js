function clickerLogger (event) {
    event.preventDefault()
 
    const atr = event.target

     if(atr.getAttribute('src') || atr.getAttribute('href') || atr.tagName == 'BUTTON' ){
        atr.getAttribute('class') != null ? console.log(`Class :${atr.getAttribute('class')}`) : null
        atr.getAttribute('id') != null ? console.log(`ID :${atr.getAttribute('id')}`) : null
     }
}


window.addEventListener('click', clickerLogger)