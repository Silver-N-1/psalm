// Autor: Silver Nõgols

//HTML-ist võtab videopleieri, video thumbnail'id, audiopleieri ja helifailide muutujad
const VideoPlayer = document.getElementById('player');
const thumbnails = document.querySelectorAll('.card');
const audioPlayer = document.getElementById('audio-player');
const audioFile = document.querySelectorAll('.audio-file');

// Lisame igale video thumbail'ile klikkimise sündmuse
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {

        // Võtame klikitud kaardi data-id atribuudist uue video aadressi ja paneme selle pleierisse
        const newVideoID = this.getAttribute("data-id");
        VideoPlayer.src = newVideoID;

        // Eemaldame kõigilt kaartidelt aktiivse oleku ja lisame selle ainult klikitud kaardile
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Väiksemal ekraanil (alla 900px) kerime lehe sujuvalt üles videopleieri juurde
        if (window.innerWidth < 900) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});
// Lisame igale helifailile klikkimise sündmuse
audioFile.forEach(item => {
    item.addEventListener('click', function () {
        // Võtame klikitud elemendi data-src atribuudist helifaili aadressi ja paneme selle mängima
        const newAudioSrc = this.getAttribute('data-src');
        audioPlayer.src = newAudioSrc;
        audioPlayer.play();

        // Eemaldame kõigilt kaartidelt aktiivse oleku ja lisame selle ainult klikitud kaardile
        audioFile.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});