export default function Modal(){
    

    const modalWrapper = document.querySelector('.modal-wrapper');
    const cancelButton = document.querySelector('.button.cancel')
    
    cancelButton.addEventListener("click", close)

    function open(){
        modalWrapper.classList.add('active')
    }
    function close(){
        //funcionlidade para remover a classe da modal
        document.querySelector('.modal-wrapper').classList.remove('active')
    }



    return {
        open,
        close
    }
}