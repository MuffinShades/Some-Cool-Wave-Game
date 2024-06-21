const can = document.getElementById('c');
const gl = can.getContext('webgl');

var glGraphics = {
    GetInstance: function() {
        return gl;
    },
    Tick: function() {
        
    }
}