
function speak() {
    ttp = document.getElementById("mytext").value;
    voicetype = document.getElementById("voice").value;
    responsiveVoice.speak(ttp, `UK English ${voicetype}`, {pitch: 1}, {rate: 1.5});    
}