// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function networkingVideo() {
    var iframe = document.createElement('iframe');
    var h2 = document.createElement('h2');
    h2.innerHTML = "Submission Video";
    h2.style.marginTop = "100px";
    iframe.setAttribute('src', 'https://drive.google.com/file/d/130e73-bmEyUzndj14dnz84-nwSfrIZFj/preview');
    iframe.setAttribute('height', '600');
    iframe.setAttribute('width', '800');
    const div = document.getElementById("networkingDiv");
    while (div.firstChild) {
        div.firstChild.remove();
    }
    document.getElementById("networkingDiv").appendChild(h2);
    document.getElementById("networkingDiv").appendChild(iframe);
}

function networkingDocumentation() {
    var iframe = document.createElement('iframe');
    var h2 = document.createElement('h2');
    h2.innerHTML = "Submission Documentation";
    h2.style.marginTop = "100px";
    iframe.setAttribute('src', 'https://drive.google.com/file/d/1IAYtkUyD62a1Ery3Lf-4R-KSGpSRh9T8/preview');
    iframe.setAttribute('height', '800');
    iframe.setAttribute('width', '640');
    const div = document.getElementById("networkingDiv");
    while (div.firstChild) {
        div.firstChild.remove();
    }
    document.getElementById("networkingDiv").appendChild(h2);
    document.getElementById("networkingDiv").appendChild(iframe);
}

function networkingRequirements() {
    var iframe = document.createElement('iframe');
    var h2 = document.createElement('h2');
    h2.innerHTML = "Project Requirements";
    h2.style.marginTop = "100px";
    iframe.setAttribute('src', 'https://drive.google.com/file/d/1IAYtkUyD62a1Ery3Lf-4R-KSGpSRh9T8/preview');
    iframe.setAttribute('height', '800');
    iframe.setAttribute('width', '640');
    const div = document.getElementById("networkingDiv");
    while (div.firstChild) {
        div.firstChild.remove();
    }
    document.getElementById("networkingDiv").appendChild(h2);
    document.getElementById("networkingDiv").appendChild(iframe);
}

function SystemsDesignCurrent() {
    var iframe = document.createElement('iframe');
    var h2 = document.createElement('h2');
    h2.innerHTML = "Project Requirements - Current";
    h2.style.marginTop = "100px";
    iframe.setAttribute('src', 'https://drive.google.com/file/d/1Ty2hBjOGioLbFIJEbYOc2fI2H9MDbere/preview');
    iframe.setAttribute('height', '800');
    iframe.setAttribute('width', '640');
    const div = document.getElementById("designDiv");
    while (div.firstChild) {
        div.firstChild.remove();
    }
    document.getElementById("designDiv").appendChild(h2);
    document.getElementById("designDiv").appendChild(iframe);
}

function SystemsDesignFuture() {
    var iframe = document.createElement('iframe');
    var h2 = document.createElement('h2');
    h2.innerHTML = "Project Requirements - Future";
    h2.style.marginTop = "100px";
    iframe.setAttribute('src', 'https://drive.google.com/file/d/1l3p5-pBuDsRPVy1B6AwEq7AZWI3fb69C/preview');
    iframe.setAttribute('height', '800');
    iframe.setAttribute('width', '640');
    const div = document.getElementById("designDiv");
    while (div.firstChild) {
        div.firstChild.remove();
    }
    document.getElementById("designDiv").appendChild(h2);
    document.getElementById("designDiv").appendChild(iframe);
}

function SystemsDesignSubmission() {
    //if (navigator.userAgent.indexOf("Firefox") !== -1) {
    //    var win = window.open('https://3307.davicha.com', '_blank');
    //    win.focus();
    //}
    //else {
        var iframe = document.createElement('iframe');
        var h2 = document.createElement('h2');
        h2.innerHTML = "Project Submission";
        h2.style.marginTop = "100px";
        iframe.setAttribute('src', 'https://3307.davicha.com');
        iframe.setAttribute('height', '800');
        iframe.setAttribute('width', '900');
        const div = document.getElementById("designDiv");
        while (div.firstChild) {
            div.firstChild.remove();
        }
        document.getElementById("designDiv").appendChild(h2);
        document.getElementById("designDiv").appendChild(iframe);
    //}
}

function DatabaseDesignRequirements() {
    var iframe = document.createElement('iframe');
    var h2 = document.createElement('h2');
    h2.innerHTML = "Project Requirements - Future";
    h2.style.marginTop = "100px";
    iframe.setAttribute('src', 'https://drive.google.com/file/d/1WHAnyM7UatAdkMyxMO7ctwPUSDEnbZe8/preview');
    iframe.setAttribute('height', '800');
    iframe.setAttribute('width', '640');
    const div = document.getElementById("designDiv");
    while (div.firstChild) {
        div.firstChild.remove();
    }
    document.getElementById("designDiv").appendChild(h2);
    document.getElementById("designDiv").appendChild(iframe);
}