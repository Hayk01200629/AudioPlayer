var data = {

    title : [
       "Pham – Movements (feat. Yung Fusion)",
       "LP – One Last Time",
       "Stromae – Santé",
       "Poets Of The Fall - Carnival of Rust",
       "Океан Ельзи - Не йди",

    ],

    song :[
        "Music/Pham.mp3",
        "Music/LP_-_One_Last_Time.mp3",
        "Music/Stromae_-_Sant.mp3",
        "Music/Poets Of The Fall - Carnival of Rust.mp3",
        "Music/Океан Ельзи - Не йди.mp3",

    ],

    poster : [
    "https://i.gifer.com/Up2T.gif",
    "https://i.gifer.com/9viJ.gif",
    "https://cdn.dribbble.com/users/1036808/screenshots/7282712/media/bf886fa984a0b8fdbed7c9ae0e7684f6.gif",
    "https://i.gifer.com/J59.gif",
    "https://i.gifer.com/VJE4.gif",
   
    ]

}

var song = new Audio();

window.onload = function (){
    playSong()
}

var currentSong = 0;

function playSong() {
    song.src = data.song[currentSong];

    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong];

    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";

    let main = document.getElementById("main");
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();

}

function playOrPuseSong(){
    let play = document.getElementById("play")

    if (song.paused) {
        song.play();
        play.src = "images/pause.png"
    }else{
        song.pause();

        play.src = "images/play-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate", function(){

    // console.log(song.currentTime);
    // console.log(song.duration);

    let fill = document.getElementById("fill")

    // console.log(fill);

    let position = song.currentTime / song.duration;
    file.style.width = position * 100 + "%"; //file

    convertTime(song.currentTime)


    if (song.ended) {
        next()
    }
    
    
})


function convertTime(seconds) {
    let convertTime = document.getElementById("convertTime");
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime.textContent = min + ":" + sec;
    totalTime(Math.round(song.duration))

}

function totalTime(seconds) {
    // let convertTime = document.getElementById("convertTime");
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    if(isNaN(min) || isNaN(sec)){
        return false
     }else{
         currentTime.textContent +=  "/" + min + ":" + sec;
      }
    };
    



function next() {
    currentSong++;
    if (currentSong >= data.song.length) {
        currentSong = 0;
    }
    playSong();
    play.src = "images/pause.png"
}
function pre() {
    currentSong--;
    if (currentSong < 0){
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "images/pause.png"
}
    function muted (){
        var mute = document.getElementById("mute");
        if(song.muted){
            song.muted = false
            mute.src = "images/volume.png"
        } else{
            song.muted = true
            mute.src = "images/volume-mute.png"
        }
    }

    function decrease() {
        song.volume -= 0.2;
    }

    function increase() {
        song.volume += 0.2;
    }


