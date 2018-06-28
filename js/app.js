var mediaQurey600 = window.matchMedia("(min-width:600px)")
$('video').hide()
function videoDisplay(mediaQuery600) {
    if(mediaQuery600.matches) {
        $('video').show()
    } else {
        $('video').hide()
    }
}

videoDisplay(mediaQurey600);
mediaQurey600.addListener(videoDisplay);