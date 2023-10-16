const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.mobile-nav');
const navBar = document.querySelector('.nav-container')
const testimonials = document.querySelector('#cards-container')



navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

document.onclick = function(e){
    if(!navBar.contains(e.target)){
        nav.classList.remove('nav--visible');
    }
}

let testimonialsArr = [
    {
        name: "Bella P",
        avatarURL: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1697429220/Marketing-Site-Template/BellaP-CEO.jpg',
        altText:'Profile of CEO',
        position: "CEO",
        rating: 5,
        message: "Love working with you, from monthly bookkeeping to tax preparation and financial planning! Keeps my p.c. organized and on track!"
    },
    {
        name: "Sofia G",
        avatarURL: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1697431644/Marketing-Site-Template/Sofia-G-Founder.jpg',
        altText:'Profile of Founder',
        position: "Founder",
        rating: 5,
        message: "Not only were they able to help with the last year's books, but they've given me the advice I need in order to grow my business properly."
    },
    {
        name: "Genisis L",
        avatarURL: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1697431827/Marketing-Site-Template/Genesis-L-CFO.jpg',
        altText:'Profile of CFO',
        position: "CFO",
        rating: 5,
        message: "We are on pace to hit 7 figures this year, and I am able to obtain financial reports promptly every Monday for all YTD revenue and costs."
    },
]

function showTestimonials() {
    testimonialsArr.forEach(item => {
        testimonials.innerHTML += `
        <div class="card">
            <div class="row">
                <div class="avatar">
                    <img src="${item.avatarURL}" alt="${item.altText}">
                </div>
                <div class="name-position-container">
                    <h3 class="paragraph">${item.name}</h3>
                    <h3 class="paragraph">${item.position}</h3>
                </div>
            </div>
            <div>${'⭐'.repeat(item.rating)}</div>
            <p>${item.message}</p>
        </div>`;
    });
}
showTestimonials(); 
