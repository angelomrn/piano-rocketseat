const keys = document.querySelectorAll('.key')

// play notes
function playNote(event) {

    let audioKeyCode = getKeyCode(event)
    //typed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    // if key dont exists
    const cantFoundAnyKey = !key

    if (cantFoundAnyKey) {
        return
    }

    // play audio
    addPlayingClass(key)
    playAudio(audioKeyCode)
    
}

function getKeyCode(event) {
    // key code
    //console.log(event.target.dataset.key)
    //console.log(event.keyCode)
    
    let keyCode;
    const isKeyboard = event.type === 'keydown'

    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    // é necessario ter o return keyCode
    return keyCode
}

function playAudio(audioKeyCode) {

    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()

}

function addPlayingClass (key) {
    key.classList.add('playing')
}

// can use 'key' or 'event'
function removePlayingClass(key) {
    key.target.classList.remove('playing')
}

// click with mouse
keys.forEach( function(key) {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayingClass)
})

// keyboard type / quando for pressionado no teclado
window.addEventListener('keydown', playNote) 