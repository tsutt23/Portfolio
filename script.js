// Get the modal
var modal = document.getElementById('modal');

// Get the image and insert it inside the modal
var modalImg = document.getElementById('modal-img');
var captionText = document.getElementById('caption');

document.querySelectorAll('.photo').forEach(function(image) {
    image.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
};
