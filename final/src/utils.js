function toggleActiv(className, classNameActive) {
    const links = document.getElementsByClassName(className);

    function removeClass() {
        for (var i = 0; i < links.length; i++) {  
            console.log(links[i])
            links[i].classList.remove(classNameActive);       
        }
    }
    function addClass(event) {
        event.target.classList.add(classNameActive);
    }

    for (var i = 0; i < links.length; i++) { 
        links[i].addEventListener('click', removeClass)
        links[i].addEventListener('click', addClass) 
    }
}