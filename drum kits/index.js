const kits=["crashdrum.jpg","kickdrum.jpeg","snaredrum.jpeg","tomdrum.jpg"];
const audioFiles = ["crash.mp3","Kick.mp3","snare.mp3","tom.mp3"];
const containerE1=document.querySelector(".container");

kits.forEach((kit,index)=>{
    const btnE1=document.createElement("button");
    btnE1.classList.add("btn")
    btnE1.innerText=kit
    btnE1.style.backgroundImage=`url(./picture/${kit})`
    containerE1.appendChild(btnE1);
    const audioE1=document.createElement("audio");
    audioE1.src=("./sounds/"+audioFiles[index]);
    containerE1.appendChild(audioE1);
    btnE1.addEventListener("click",()=>{console.log("audioE1",audioE1),audioE1.play()})
});