const videoPlayer = document.getElementById('videoPlayer');

videoPlayer.addEventListener('play', function() {
    console.log('Video started playing');
    // You can add additional logic here, like tracking user actions.
});

videoPlayer.addEventListener('pause', function() {
    console.log('Video paused');
    // You can add additional logic here, like tracking user actions.
});

videoPlayer.addEventListener('ended', function() {
    console.log('Video ended');
    // You can add additional logic here, like showing related videos.
});
