const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update the text content for the CTA
let ctaImg = document.getElementById('cta-img');
let ctaH1 = document.querySelector('.cta-text').childNodes[1];
let ctaButton = document.querySelector('.cta-text').childNodes[3];
ctaH1.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// Update the links in the navigation
let navElement = document.querySelectorAll('nav a');
let navArray = Array.from(navElement);
for (i=0;i<navArray.length;i++){
  navArray[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
}
// navArray.forEach(function(link) {
//   link.textContent = siteContent['nav']['nav-item-1'];
// });  
// try to build as forEach if extra time left


// Update the main content
let contentH4 = document.querySelectorAll(".main-content h4");
let contentP = document.querySelectorAll(".main-content p");
let contentImg = document.getElementById('middle-img');
contentH4[0].textContent = siteContent['main-content']['features-h4'];
contentH4[1].textContent = siteContent['main-content']['about-h4'];
contentH4[2].textContent = siteContent['main-content']['services-h4'];
contentH4[3].textContent = siteContent['main-content']['product-h4'];
contentH4[4].textContent = siteContent['main-content']['vision-h4'];
contentP[0].textContent = siteContent['main-content']['features-content'];
contentP[1].textContent = siteContent['main-content']['about-content'];
contentP[2].textContent = siteContent['main-content']['services-content'];
contentP[3].textContent = siteContent['main-content']['product-content'];
contentP[4].textContent = siteContent['main-content']['vision-content'];
contentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Update the contact section
let contactHeading = document.querySelector(".contact h4");
let contactContent = document.querySelectorAll('.contact p');
contactHeading.textContent = siteContent['contact']['contact-h4'];
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

// Update the footer
let footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent['footer']['copyright'];
