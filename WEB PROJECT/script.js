console.log("Welcome to Spotify");
let songindex=0;
let audioElement=new Audio('2.mpeg');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Ranjha-Jasleen Royal",filepath:"songs/1.mpeg",coverpath:"cover1.jpg"},
    {songName:"Saibo-Sachin-Jigar",filepath:"songs/2.mpeg",coverpath:"cover2.jpg"},
    {songName:"Kabhi Tumhe-Javed",filepath:"songs/3.mpeg",coverpath:"cover3.jpg"},
    {songName:"Raataan Lambiyan",filepath:"songs/4.mpeg",coverpath:"cover4.jpg"},
    {songName:"Bol do na zara",filepath:"songs/1.mpeg",coverpath:"cover1.jpg"},
    {songName:"Chale Aaana",filepath:"songs/2.mpeg",coverpath:"cover1.jpg"},
    {songName:"Yaad hai Na",filepath:"songs/1.mpeg",coverpath:"cover1.jpg"},
]
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration/100);
})
const makeAllplays= ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex+1}.mpeg`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
       

    })

})
document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=9){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})