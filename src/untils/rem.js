(function () {
    var html = document.documentElement;
    var windowWidth = html.clientWidth > 1000 ? 1000 : html.clientWidth;
    html.style.fontSize = windowWidth / 7.5 + 'px';
})();
