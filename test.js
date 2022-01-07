function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJs("https://static.cloudflareinsights.com/beacon.min.js?token=1afd334cb5284f8888cb871b65f60b1b");
