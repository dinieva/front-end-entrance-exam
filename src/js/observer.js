export function  observerMutation() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
                console.log('Содержимое обновлено!', /* mutation, mutation.target.parentElement.classList.add("change")  */);
               /* mutation.classList.add("pulse-animate") */
            }
        });
    });
    let editableText = document.querySelectorAll('.editable');
    editableText.forEach(item =>{
      
      observer.observe(item, {
        childList: true,
        characterData: true,
        subtree: true
      });
    })

}

