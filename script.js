console.log("Welcome to Vibes");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Ludwig_Van_Beethoven_s_5th_Symphony_in_C_Minor_Fu", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Beethoven_Für_Elise", filePath: "2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mozart_The_Marriage_of_Figaro", filePath: "3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kiss_I_Was_Made_For_Lovin_You", filePath: "4.mp3", coverPath: "covers/4.jpg"},
    {songName: "2_Chainz_We_Own_It_Fast_Furious_", filePath: "5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ghost_Spillways_Official_Music_Video_", filePath: "6.mp3", coverPath: "covers/6.jpg"},
    {songName: "K_NAAN_Wavin_Flag_Coca_Cola_Celebration_Mix_", filePath: "7.mp3", coverPath: "covers/7.jpg"},
    {songName: "In_The_End_Official_HD_Music_Video_Linkin_Park", filePath: "8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Sean_Paul_Temperature_Official_Video_", filePath: "9.mp3", coverPath: "covers/9.jpg"},
    {songName: "The_Chainsmokers_Coldplay_Something_Just_Like_", filePath: "10.mp3", coverPath: "covers/10.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})