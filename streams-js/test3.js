export class TwitchStreamXStarwake extends HTMLElement {
    static TWITCH_EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';
    static get attributes() {
        return {
            channel: {},
            width: { default: 940 },
            height: { default: 480 },
            theme: { default: 'dark' },
            muted: { default: false },
            autoplay: { default: true },
            chat: { default: false },
            allowfullscreen: { default: true },
            parent: { default: '' },
        };
    }

var options = {
      channel: "baydaine", // TODO: Change this to the streams username you want to embed
      height: 180,
      width: 320,
    };
    var player = new Twitch.Player("twitch-video", options);

    player.addEventListener(Twitch.Player.READY, initiate)

    function initiate() {
      player.addEventListener(Twitch.Player.ONLINE, handleOnline);
      player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
      player.removeEventListener(Twitch.Player.READY, initiate);
    }

    function handleOnline() {
      document.getElementById("twitch-video").classList.remove('hide');
      document.getElementById("twitch-container").classList.remove('hide');
      player.removeEventListener(Twitch.Player.ONLINE, handleOnline);
      player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
      player.setMuted(false);
    }

    function handleOffline() {
      document.getElementById("twitch-video").classList.add('hide');
      document.getElementById("twitch-container").classList.add('hide');
      player.removeEventListener(Twitch.Player.OFFLINE, handleOffline);
      player.addEventListener(Twitch.Player.ONLINE, handleOnline);
      player.setMuted(true);
    }