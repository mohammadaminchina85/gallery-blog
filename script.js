document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById('gallery');
    const uploadInput = document.getElementById('upload');

    // بازیابی تصاویر از LocalStorage
    const savedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];
    savedImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });

    uploadInput.addEventListener('change', function(event) {
        Array.from(event.target.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                gallery.appendChild(img);

                // ذخیره در LocalStorage
                savedImages.push(e.target.result);
                localStorage.setItem("galleryImages", JSON.stringify(savedImages));
            }
            reader.readAsDataURL(file);
        });
    });
});
