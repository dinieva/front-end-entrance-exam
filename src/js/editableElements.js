export function editableElements(elements) {

  elements.forEach(element=> {
    element.addEventListener('click', function setRippleEffect(e) {
        let
            x = this.offsetWidth ,
            y = this.offsetHeight ,
            wave = this.querySelector('.wave')
        if (!wave) {
            wave = document.createElement('span')
            wave.className = 'wave'
        }
         wave.style.cssText = `width:${x}px;height:${y}px;top:${0}px;left:${0}px`
        this.appendChild(wave)
        setTimeout((e)  => {
          this.removeChild(wave)
        },2000)
      })
  })
}    