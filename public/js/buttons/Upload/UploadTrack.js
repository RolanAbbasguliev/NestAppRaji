const dropzone_cover = document.querySelector('.dropzone__cover');

let browseBtn = document.querySelector('.browse__btn');
let inputCover = document.querySelector('input');

let trackCover;

browseBtn.onclick = () => {
    inputCover.click();
}

inputCover.addEventListener('change', function () {
    trackCover = this.files[0];
    displayCover();
})

dropzone_cover.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropzone__cover.classList.add('active')
})

dropzone_cover.addEventListener('dragleave', (event) => {
    dropzone__cover.classList.remove('active')
})

dropzone_cover.addEventListener('drop', (event) => {
    event.preventDefault();
    trackCover = event.dataTransfer.files[0];
    displayCover();
})

function displayCover() {
    let fileReader = new FileReader();

    fileReader.onload = () => {
        let fileURL = fileReader.result;
        let imgTag = `<img src="${fileURL}" alt="Cover Img">`
        dropzone_cover.innerHTML = imgTag;
    }
    fileReader.readAsDataURL(trackCover);
}







//testing 
async function UploadTrack() {

    const trackName = document.getElementById("trackName").value;
    const trackArtist = document.getElementById("trackArtist").value;
    const trackAudio = document.getElementById("inputAudio").files[0];




    let data = new FormData();

    const audioExntension = trackAudio.name.split('.').pop();

    const imgExntension = trackCover.name.split('.').pop();

    data.append("audio", trackAudio, audioExntension);
    data.append("cover", trackCover, imgExntension);
    data.append("artist", trackArtist);
    data.append("name", trackName);

    for (let pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }

    // console.log("SEND REQ:", trackName, trackArtist, trackAudio.files[0], trackCover.files[0])
    // console.log("DATA", data);


    const url = "http://localhost:5000/tracks/create";
    const response = await fetch(url, {
        method: 'POST',
        body: data,
    });
    console.log(response);
    const json = await response.json();
    console.log(json);


}