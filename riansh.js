function onbuttonpress(thingy){
    var line = document.getElementById('v').innerHTML += thingy
}

function add(){
    var li = document.getElementById('v').innerHTML;
   var vhug = eval(li)
    document.getElementById('v').innerHTML = vhug.toFixed(2)
    
}

function listen() {
    var siri = new webkitSpeechRecognition();
    var listenedline = ""
    siri.onresult = evt => {
        listenedline = evt.results[0][0].transcript.toLowerCase();
         document.getElementById('v').innerHTML = listenedline
    }
    siri.start()


  
   
}