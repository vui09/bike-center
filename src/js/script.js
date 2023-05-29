//let elem = document.getElementById("header").getBoundingClientRect();
//
// const helloElement = document.getElementById('header');
// const results = helloElement.getBoundingClientRect();
//
// console.log(results)

document.addEventListener('DOMContentLoaded', () => {
    let header = document.getElementById("header-bottom");
    let logo = document.getElementById("logo-small");
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let elemHeight = header.offsetHeight;

        console.log(scrollTop);
        console.log(elemHeight);

        if (scrollTop >= elemHeight){
            logo.classList.remove('hidden')
        } else {
            logo.classList.add('hidden')
        }
    })
})
// document.addEventListener('scroll', function() {
//     let elem = document.getElementById("slider")
//     console.log(elem.scrollTop)
// })
