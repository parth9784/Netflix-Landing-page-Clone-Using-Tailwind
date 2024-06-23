function redirectToUrl(event) {
    const ido = event.currentTarget.id;
    if(ido=="1"){
        window.location.href = 'https://www.netflix.com/in/title/81249783';
    }
    else if(ido=="2"){
        window.location.href = 'https://www.netflix.com/in/title/81249783';
    }
    else if(ido=="3"){
        window.location.href = 'https://www.netflix.com/in/title/81249783';
    }
    else if(ido=="4"){
        window.location.href = 'https://www.netflix.com/in/title/81249783';
    }
}
let allq = document.querySelectorAll(".faqq");
// console.log(allq);
allq.forEach((v, index) => {
    v.addEventListener("click", () => {
    v.nextElementSibling.classList.toggle("h-[auto]");
    v.nextElementSibling.classList.toggle("scale-y-100");
    v.nextElementSibling.classList.toggle("p-4");
    });
});