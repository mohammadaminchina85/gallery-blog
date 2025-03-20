document.getElementById('upload').addEventListener('change', function(event) {
    const gallery = document.getElementById('gallery');
    Array.from(event.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        }
        reader.readAsDataURL(file);
    });
});
