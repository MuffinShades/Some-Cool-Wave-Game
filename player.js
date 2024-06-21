var p = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    w: 0,
    h: 0,
    xp: 0,
    xpLvl: 1,
    skills: [],
    backpack: [],
    inventory: [],
    health: 100,
    maxHelath: 100,

    //functions
    update: null,
    draw: null,
}

p.update = function() {
    p.draw();
}

p.draw = function() {

}