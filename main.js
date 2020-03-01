//Mobile Navigation Toggle
function myFunction() {
    let x = document.getElementById('mobilelinks');
    if (x.style.display === "block") {
        x.style.display = "none";
    }  else {
        x.style.display = "block";
    }
}

//Currently Reading Slideshow
let slideIndex = 1;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

//Pull latest blog posts
// const http = new EasyHTTP;
// const postsContainer = document.querySelector('.posts-container');

// http.get('http://localhost/wordpress/wp-json/wp/v2/posts')
//     .then(data => {
//         data.map(post => {
//             const postContent = `
//             <div>
//             <h2 class="post-title">${post.title.rendered}</h2>
//             ${post.excerpt.rendered}
//             <a class="read-more" href="${post.link}">Read More</a>
//             </div>
//             `
            
//             postsContainer.innerHTML += postContent;
//         })
//     })
//     .catch(err => console.log(err));