const Application = {
    quit: null,
    paused: false,
    FPS: 60,
    frameDelta: 1000 / this.FPS,
    main: null,
    tick: null,

    _internalTick: null,
}

window.addEventListener('load', function() {
    var r = -1;
    if (typeof Application.main == 'function')
        r = Application.main();

    if (r !== 0) {
        //todo implement applicaiton.quit
        Application.quit();
        return;
    }

    if (typeof Application._internalTick == 'function')
        this.setInterval(Application._internalTick, Application.frameDelta || 1);
})

Application.quit = function() {

}

Application._internalTick = function() {
    if (typeof this.tick == 'function' && !this.paused)
        this.tick();
}