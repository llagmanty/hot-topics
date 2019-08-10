//main
const container = document.querySelector("main");
const errorContainer = document.querySelector(".error");
let url = "./partials/article-1.html";
const links = document.querySelectorAll("nav a");

function linkClick(ev) {
    ev.preventDefault();

    //click
    let currentLink = ev.target;
    url = currentLink.href;
    handleAjax(url);
}

for (let link of links) {
    link.addEventListener("click", linkClick);
}

function handleAjax(urlParam) {
    fetch(urlParam)
        .then(function (response) {
            if (response.statusText === "OK") {
                return response.text();
            }

            throw new Error(response.statusText)
        })
        .then(function (data) {
            //partials
            container.innerHTML = data;
        })
        .catch(function (err) {
            errorContainer.textContent = `${err.name}: ${err.message}`;
        });
}

// page 2
const containerPort = document.querySelector(".capstone");
const errorCont = document.querySelector(".error");
let urlPort = "./partials/portfolio-slice.html";
const linksPort = document.querySelectorAll("nav a");

function HandlelinkClick(evPort) {
    evPort.preventDefault();

    //link clicked
    let currentLinkPort = evPort.target;
    urlPort = currentLinkPort.href;
    AjaxLoad(urlPort);
}

for (let linkPort of linksPort) {
    linkPort.addEventListener("click", HandlelinkClick);
}

function AjaxLoad(urlParamPort) {
    fetch(urlParamPort)
        .then(function (responsePort) {
            if (responsePort.statusText === "OK") {
                return responsePort.text();
            }

            throw new Error(responsePort.statusText)
        })
        .then(function (data) {
            //partials
            containerPort.innerHTML = data;
        })
        .catch(function (err) {
            errorCont.textContent = `${err.name}: ${err.message}`;
        });
}
