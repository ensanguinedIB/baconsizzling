window.addEventListener("load", () =>
{
    /* Attempt to play the audio and video files.  As the video has no sound,
       it will probably play without a problem.
       Browsers tend to block autoplay on audio, so if autoplay fails, the user is shown a button.
       On pressing the button, the audio is tried once more, as interaction usually works. */

    let video = document.getElementById("video");
    let audio = document.getElementById("audio");

    let play_video = video.play();

    play_video.then(_ => {}, _error =>
    {
        console.log("Video autoplay failed.");
    });

    let play_audio = audio.play();

    play_audio.then(_ => {}, _error =>
    {
        console.log("Audio autoplay failed.");

        let play_button = document.getElementById("play-button");
        play_button.style.display = "block";
    });
});


function play_audio()
{
    /* Callback function for the button.  Attempt to play audio, then remove the button. */
        
    let audio = document.getElementById("audio");
    audio.play();

    let play_button = document.getElementById("play-button");
    play_button.style.display = "none";
}
