function clickerLogger (event) {
event.preventDefault()
    console.log(event.target.classList.value)
    console.log(event.srcElement.id)
}


window.addEventListener('click', clickerLogger)