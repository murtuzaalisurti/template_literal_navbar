let header_links = document.querySelectorAll("nav ul div");
header_links.forEach((link) => {
    link.addEventListener("click", (e) => {
        let anchor = String(e.target.innerText.toLowerCase());
        let anchored_element = document.querySelector(`#${anchor}`);
        anchored_element.scrollIntoView({behavior: "smooth"});
    })
})

