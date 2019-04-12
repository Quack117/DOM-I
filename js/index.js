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
    "h1": "DOM<br> Is <br>Awesome",
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

let navContent = document.getElementsByTagName("a");
navContent[0].textContent = siteContent.nav["nav-item-1"];
navContent[1].textContent = siteContent.nav["nav-item-2"];
navContent[2].textContent = siteContent.nav["nav-item-3"];
navContent[3].textContent = siteContent.nav["nav-item-4"];
navContent[4].textContent = siteContent.nav["nav-item-5"];
navContent[5].textContent = siteContent.nav["nav-item-6"];

let ctaImgID = document.getElementById("cta-img")
//console.log(ctaImgID)
ctaImgID.src = "img/header-img.png";

let ctaText = document.getElementsByClassName("cta-text")

//console.log(ctaText)

ctaText[0].children[0].innerHTML = siteContent.cta["h1"];
ctaText[0].children[1].textContent = siteContent.cta["button"];

let textContentStuff = document.querySelectorAll(".text-content")

textContentStuff[0].children[0].textContent = siteContent["main-content"]["features-h4"]
textContentStuff[0].children[1].textContent = siteContent["main-content"]["features-content"]
textContentStuff[1].children[0].textContent = siteContent["main-content"]["about-h4"]
textContentStuff[1].children[1].textContent = siteContent["main-content"]["about-content"]
textContentStuff[2].children[0].textContent = siteContent["main-content"]["services-h4"]
textContentStuff[2].children[1].textContent = siteContent["main-content"]["services-content"]
textContentStuff[3].children[0].textContent = siteContent["main-content"]["product-h4"]
textContentStuff[3].children[1].textContent = siteContent["main-content"]["product-content"]
textContentStuff[4].children[0].textContent = siteContent["main-content"]["vision-h4"]
textContentStuff[4].children[1].textContent = siteContent["main-content"]["vision-content"]

let contactText = document.querySelectorAll(".contact")

contactText[0].children[0].textContent = siteContent.contact["contact-h4"]
console.log(contactText[0].children[0])

contactText[0].children[1].textContent = siteContent.contact["address"]
contactText[0].children[2].textContent = siteContent.contact["phone"]
contactText[0].children[3].textContent = siteContent.contact["email"]

let footerText = document.querySelectorAll("footer")

console.log(footerText)

footerText[0].children[0].textContent = siteContent.footer.copyright










