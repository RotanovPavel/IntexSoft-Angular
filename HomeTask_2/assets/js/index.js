let clickBlock = () => {
    let blocks = document.querySelectorAll(".block");

    function addEvent(block, listener){
        console.log('odd');
        document.addEventListener('mousemove', listener, false);
    }
    function removeEvent(block, listener) {
        console.log('even');
        document.removeEventListener('mousemove', listener, false);
    }

    let getCurrentCursor =  (block) =>{
        let x = event.clientX;
        let y = event.clientY;
        block.style.left = (x - 20) + 'px';
        block.style.top = (y - 20) + 'px';
    };

    blocks.forEach(function(e){
        const listener = getCurrentCursor.bind(this, e);
        e.addEventListener('click', (elem) => {
            let block = elem.currentTarget;
            
            blocks.forEach((e) => {
                if (e.classList.contains('active') && e!==block) {
                    e.classList.remove('active')
                }
            });
            if (block.classList.contains('active')) {
                block.classList.remove('active')
            } else {
                block.classList.add('active')
            }
            if (block.classList.contains('active')) { 
                addEvent(block, listener);
            } else {
                removeEvent(block, listener);
            }
        }) 
    })
};
clickBlock();
