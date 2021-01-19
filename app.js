const colors = ['left', 'center', 'right']
let currentColor = 0

const interval = setInterval(function(){
    document.getElementById('content').style.textAlign = colors[currentColor++];
    if(currentColor > 2){
        currentColor = 0
    }

}, 0.001)