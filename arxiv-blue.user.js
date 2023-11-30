// ==UserScript==
// @name         Blue arXiv Theme
// @namespace    https://github.com/snowmeow2/Blue-arXiv-Theme
// @version      1.2
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
    #content, .content {
        margin: 0em 1em 0em 1em;
        border-radius: 15px;
        padding: 1em 2em 1em 2em;
        filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
        background-color: rgba(255, 255, 255, 0.8);
    }
    #header {
        background: transparent;
        border-bottom: 0px;
    }
    .mobile-header {
        background: transparent;
    }
    .identity {
        background: transparent;
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
    #abs-outer .subheader {
        background: transparent;
    }
    #abs-outer .extra-services {
        margin: 1em 0em 0em 0em;
    }
    .extra-services {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
        border-radius: 15px;
    }
    .full-text, .browse, .extra-ref-cite, .extra-general {
        border-left: 0px;
        border-bottom: 1px solid #ccc;
    }
    .bookmarks {
        border-left: 0px;
        border-bottom: 0px;
    }
    footer {
        background: transparent;
        margin-top: 2.5rem;
    }
    footer > .columns {
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
        border-radius: 15px;
    }
    footer ul li {
        justify-content: center;
    }
    `;
    document.head.appendChild(style);

    const content_element = document.getElementById('content');
    const content_class = document.getElementsByClassName('content');
    if (content_element || content_class) {
        let body = document.body;
        body.style.background = 'linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(20, 100, 220, 0.75), rgba(20, 100, 220, 1)), url("https://p2.bahamut.com.tw/B/2KU/50/1940acba5a56b975233e7e53521e9aq5.JPG")';
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center';
        body.style.backgroundAttachment = 'fixed';
        body.style.height = 'auto';
    }

    // Replace the logo image
    const logoImg = document.querySelector('img[alt="arxiv logo"]');
    if (logoImg) {
        logoImg.src = 'https://i.imgur.com/ZkreQPV.png';
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

    // replace the favicon
    const link = document.querySelectorAll("link[rel*='icon']");
    link.forEach(el => {
        el.href = 'https://play-lh.googleusercontent.com/k-BmewE1HZ4hrF9E9ABVvANeu1dBI5Bya0ttg8KiFGam_NpbmRqmFL4zz_RjgHbojA=s128-rw';
    });

})();
