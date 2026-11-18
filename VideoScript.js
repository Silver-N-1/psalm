const VideoPlayer = document.getElementById('player');
const thumbnails = document.querySelectorAll('.card');
const audioPlayer = document.getElementById('audio-player');
const audioFile = document.querySelectorAll('.audio-file');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function(){
        const newVideoID = this.getAttribute("data-id");
        VideoPlayer.src = newVideoID;

    thumbnails.forEach(t => t.classList.remove('active'));
    
        this.classList.add('active');
    
        if (window.innerWidth < 900) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

audioFile.forEach(item => {
    item.addEventListener('click', function() {
        const newAudioSrc = this.getAttribute('data-src');
        audioPlayer.src = newAudioSrc;
        audioPlayer.play();

        audioFile.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});