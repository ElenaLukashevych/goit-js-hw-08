import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



function onPlay  (data) {
   localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
};

player.on('timeupdate', throttle(onPlay, 1000));



const currentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(currentTime);

