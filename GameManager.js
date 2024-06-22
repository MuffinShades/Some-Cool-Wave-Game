var GameManager = {
    LoadedMenu: null,
    inLevel: false,
    LoadMenu: function(id) {

    },
    Tick: function() {
        if (this.inLevel && typeof this.GameTick == 'function')
            this.GameTick();
        
        //displat current menu
    },
    GameTick: null,
};