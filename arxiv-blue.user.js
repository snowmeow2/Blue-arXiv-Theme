// ==UserScript==
// @name         Blue arXiv Theme
// @namespace    https://github.com/snowmeow2/Blue-arXiv-Theme
// @version      1.1
// @description  Customize the appearance of arXiv website
// @author       snowmeow2
// @match        https://arxiv.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Use custom css
    const style = document.createElement('style');
    style.innerHTML = `
    #header {
        background: linear-gradient(90deg, rgb(255, 255, 255), rgb(20, 100, 220), rgb(20, 100, 220));
    }
    .mobile-header {
        background: linear-gradient(90deg, rgb(255, 255, 255), rgb(20, 100, 220), rgb(20, 100, 220));
    }
    .identity {
        background: linear-gradient(90deg, rgb(255, 255, 255), rgb(20, 100, 220), rgb(20, 100, 220));
    }
    .header-breadcrumbs {
        color: black !important;
    }
    .header-breadcrumbs a {
        color: black !important;
    }
    .mobile-header .column {
        border-left: 0px !important;
        border-right: 0px !important;
    }
    `;
    document.head.appendChild(style);

    // Replace the logo image
    const logoImg = document.querySelector('img[alt="arxiv logo"]');
    if (logoImg) {
        logoImg.src = 'https://i.imgur.com/ZkreQPV.png';
        // check the url: If it is the homepage, don't resize the logo
        if (!(window.location.href === 'https://arxiv.org/')) {
            logoImg.style.width = '125px';
        }
        logoImg.style.margin = '0px';
    }
    const logoImg2 = document.querySelector('img[alt="arXiv logo"]');
    if (logoImg2) {
        logoImg2.src = 'https://i.imgur.com/ZkreQPV.png';
    }
    const logoCornell = document.getElementsByClassName('logo-cornell')[0];
    if (logoCornell) {
        logoCornell.style.visibility = 'hidden';
    }

    // Replace all text instances of "arXiv" with "Blue arXiv" except URL
    function replaceTextInNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.nodeValue = node.nodeValue.replace(/arXiv/g, 'Blue arXiv');
        } else {
            node.childNodes.forEach(replaceTextInNode);
        }
    }
    replaceTextInNode(document.body);
})();