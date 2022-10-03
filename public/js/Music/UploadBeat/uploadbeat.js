input.onchange = function () {
    var sound = document.getElementById('sound');
    var reader = new FileReader();
    reader.onload = function (e) {
        sound.src = this.result;
        sound.controls = true;
        sound.play();
    };
    reader.readAsDataURL(this.files[0]);
}