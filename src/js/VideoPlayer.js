// VideoPlayer is a Compnent witch want to handler video with html5
// Author Yu Tingzhao
// Date 2013 3 9
// Version 1.0.0
// Site yutingzhao.com
;(function(window) {

var VideoPlayer = function(options) {
    this.options = options || {}
    options.width = options.width || '100%'
    options.height = options.height || '100%'
    this._playGround = this._cratePlayGround()
}

// CanvasGround is a Object witch has a canvas
// video should be play on it
VideoPlayer.CanvasGround = function() {
    this.canvas = document.createElement('canvas')
}

VideoPlayer.CanvasGround.prototype.draw = function() {

}

VideoPlayer.CanvasGround.prototype.getGround = function() {
    return this.canvas
}

VideoPlayer.prototype._cratePlayGround = function() {
    var ground = new VideoPlayer.CanvasGround()
    return ground
}

VideoPlayer.prototype.getPlayGround = function() {
    return this._playGround
}


// append player to a container
// @param {String} container Element or id
VideoPlayer.prototype.appendTo = function(container) {
    if (!container) {
        return
    }
    if (typeof container == 'string') {
        container = document.getElementById(container)
    }
    if (container) {
        container.appendChild(this.getPlayGround().getGround())
    } else {
        return
    }
}

//bind to top window
window.VideoPlayer = window.VideoPlayer || VideoPlayer

})(window);






