const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const previous = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
  {
    name: "ittar",
    title: "Ittar",
    artist: "Jasmine Sandlas",
  },
  {
    name: "Questions",
    title: "Questions",
    artist: "Real Boss",
  },
  {
    name: "Issue",
    title: "Issue",
    artist: "Boss",
  },
];

isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

// for pause
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3";
  img.src = "images/" + songs.name + ".jpg";
};

// loadSong(songs[1]);

let songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex+1)%songs.length;
    loadSong(songs[songIndex]); 
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) %songs.length;
    loadSong(songs[songIndex]); 
};

next.addEventListener("click", nextSong);
previous.addEventListener("click", prevSong);

