window.addEventListener("load", () =>
{
    /* Attempt to play the audio and video files.  As the video has no sound,
       it will probably play on a desktop, mobile tends to fare less well.
       Browsers on the whole block autoplay on audio if there is no user interaction.
       If either fails, the user is shown a button which attempts to play both manually. */

    let video = document.getElementById("video");
    let audio = document.getElementById("audio");
    let play_button = document.getElementById("play-button");

    let play_video = video.play();

    play_video.then(_ => {}, _error =>
    {
        console.log("Video autoplay failed.");
        play_button.style.display = "block";
    });

    let play_audio = audio.play();

    play_audio.then(_ => {}, _error =>
    {
        console.log("Audio autoplay failed.");
        play_button.style.display = "block";
    });
});


function play_audio()
{
    /* Callback function for the button.  Attempt to play audio and video, then remove the button. */
        
    let audio = document.getElementById("audio");
    audio.play();

    let video = document.getElementById("video");
    video.play();

    let play_button = document.getElementById("play-button");
    play_button.style.display = "none";
}
