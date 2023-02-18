const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) =>{
image.setAttribute('src', image.getAttribute('data-src'));
image.onload = ()=>{
    image.removeAttribute('data-src');
};
};

const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, imageObserver) =>{
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            loadImages(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
}, imageOptions);

imagesToLoad.forEach(img => {
    imageObserver.observe(img);
});
