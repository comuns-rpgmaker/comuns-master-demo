//============================================================================
// Gabe MZ - Enhanced Camera
//----------------------------------------------------------------------------
// 02/09/20 | Version: 1.0.0 | Released
//----------------------------------------------------------------------------
// This software is released under the zlib License.
//============================================================================

/*:
 * @target MZ
 * @plugindesc Adds improvements and new functions to the game's camera.
 * @author Gabe (Gabriel Nascimento)
 * @url https://github.com/comuns-rpgmaker/GabeMZ
 * 
 * @help Gabe MZ - Enhanced Camera
 *  - This plugin is released under the zlib License.
 * 
 * This plugin provides improvements and new functions to the game's camera.
 * 
 * @command setCameraFocus
 * @text Set Camera Focus
 * @desc Set the camera focus
 * 
 * @arg target
 * @text Target
 * @type number
 * @default 0
 * 
 * @arg zoom
 * @text Zoom
 * @type number
 * @decimals 1
 * @default 1.0
 * 
 * @arg time
 * @text Time
 * @type number
 * @default 60
 * 
 */

var GabeMZ                    = GabeMZ || {};
GabeMZ.EnhancedCamera         = GabeMZ.EnhancedCamera || {};
GabeMZ.EnhancedCamera.VERSION = [0, 0, 1];

(() => {

    const pluginName = "GabeMZ_EnhancedCamera";
    GabeMZ.params = PluginManager.parameters(pluginName);
    GabeMZ.EnhancedCamera.cameraFocus = {
        target: null,
        zoom: null,
        time: null,
    } 
    //-----------------------------------------------------------------------------
    // PluginManager
    //
    // The static class that manages the plugins.

    PluginManager.registerCommand(pluginName, "setCameraFocus", args => {
        const id = parseInt(args.target);
        const zoom = parseFloat(args.zoom);
        const time = parseInt(args.time);
        let target;
        if (id == 0) {
            target = $gameMap.currentEvent();
        } else {
            target = $gameMap._events[id];
        }
        SceneManager.camera().setFollow(null);
        SceneManager.camera().focusIn(target, zoom, time);
    });

    //-----------------------------------------------------------------------------
    // SceneManager
    //
    // The static class that manages scene transitions.

    SceneManager.camera = function() {
        return this._scene.camera();
    }

    //-----------------------------------------------------------------------------
    // Scene_Map
    //
    // The scene class of the map screen.

    const _Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function() {
        _Scene_Map_createDisplayObjects.call(this);
        this._camera = new Game_Camera(this._spriteset);
    };

    const _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        this._camera.update();
    };

    Scene_Map.prototype.camera = function() {
        return this._camera;
    }

    //-----------------------------------------------------------------------------
    // Game_Camera
    //
    // The game object class for battle camera.

    function Game_Camera() {
        this.initialize(...arguments);
    }

    Game_Camera.prototype.initialize = function(spriteset) {
        this._spriteset = spriteset;
        this.setup();
        this.createShockFilter();
    };

    Game_Camera.prototype.setup = function() {
        this._x = this._spriteset.x;
        this._y = this._spriteset.y;
        this._scaleX = this._spriteset.scale.x;
        this._scaleY = this._spriteset.scale.y;   
        this._offset = {x: 0, y: 0};
        this._follow = $gamePlayer;
    };

    Game_Camera.prototype.setOffset = function(x, y) {
        this._offset = {x: x, y: y};
    };

    Game_Camera.prototype.setFollow = function(follow) {
        return this._follow = follow;
    };

    Game_Camera.prototype.isFollowing = function() {
        return this._follow != null;
    };

    Game_Camera.prototype.focusIn = function(target, zoom, time) {
        const scaleX = parseFloat(zoom) || this._scaleX;
        const scaleY = parseFloat(zoom) || this._scaleY;
        let x = ((-(target.screenX()) + this._offset.x) * scaleX) + Graphics.width / 2;
        let y = ((-(target.screenY()) + this._offset.y) * scaleY) + Graphics.height / 2;
        let maxX = Graphics.boxWidth - (Graphics.boxWidth * zoom);
        let maxY = Graphics.boxHeight - (Graphics.boxHeight * zoom);
        x = x > 0 ? 0 : (x < maxX ? maxX : x);
        y = y > 0 ? 0 : (y < maxY ? maxY : y);
        const duration = parseInt(time) || 1;
        this.move(x, y, scaleX, scaleY, duration);
    }

    Game_Camera.prototype.zoom = function(zoom, duration) {
        const x = this._x;
        const y = this._y;
        const scaleX = zoom;
        const scaleY = zoom;
        this.move(x, y, scaleX, scaleY, duration);
    }

    Game_Camera.prototype.createShockFilter = function() {
        this._shockFilter = new PIXI.filters.ShockwaveFilter();
        this._shockFilter.time = 10;
        this._shockFilter.brightness = 0.9;
        this._shockFilter.wavelength = 300;
        this._shockwaveSpeed = 0.05;
        this._spriteset.filters.push(this._shockFilter);
    }

    Game_Camera.prototype.shockFilter = function(x, y) {
        this._shockFilter.center = [x, y];
        this._shockFilter.time = 0;
    }

    Game_Camera.prototype.reset = function(duration) {
        this._offset = {x: 0, y: 0};
        this.move(0, 0, 1, 1, duration);
    }

    Game_Camera.prototype.move = function(x, y, scaleX, scaleY, duration) {
        this._targetX = x;
        this._targetY = y;
        this._targetScaleX = scaleX;
        this._targetScaleY = scaleY;
        this._duration = duration;
        this._wholeDuration = duration;
        this._easingType = 0;
        this._easingExponent = 0.05;
    }

    Game_Camera.prototype.update = function() {
        this.updateMove();
        this.updateSpriteset();
        if (this.isFollowing()) this.focusIn(this._follow, 2, 0);
        if (this._shockFilter.time < 10)
            this._shockFilter.time += this._shockwaveSpeed;
    };

    Game_Camera.prototype.updateMove = function() {
        if (this._duration > 0) {
            this._x = this.applyEasing(this._x, this._targetX);
            this._y = this.applyEasing(this._y, this._targetY);
            this._scaleX = this.applyEasing(this._scaleX, this._targetScaleX);
            this._scaleY = this.applyEasing(this._scaleY, this._targetScaleY);
            this._duration--;
        }
    };
    
    Game_Camera.prototype.updateSpriteset = function() {
        this._spriteset.children[0].x = this._spriteset._weather.x = this._x
        this._spriteset.children[0].y = this._spriteset._weather.y = this._y
        this._spriteset.children[0].scale.x = this._spriteset._weather.scale.x = this._scaleX;
        this._spriteset.children[0].scale.y = this._spriteset._weather.scale.y = this._scaleY;
    }

    Game_Camera.prototype.applyEasing = function(current, target) {
        const d = this._duration;
        const wd = this._wholeDuration;
        const lt = this.calcEasing((wd - d) / wd);
        const t = this.calcEasing((wd - d + 1) / wd);
        const start = (current - target * lt) / (1 - lt);
        return start + (target - start) * t;
    };

    Game_Camera.prototype.calcEasing = function(t) {
        const exponent = this._easingExponent;
        switch (this._easingType) {
            case 1: // Slow start
                return this.easeIn(t, exponent);
            case 2: // Slow end
                return this.easeOut(t, exponent);
            case 3: // Slow start and end
                return this.easeInOut(t, exponent);
            default:
                return t;
        }
    };

    Game_Camera.prototype.easeIn = function(t, exponent) {
        return Math.pow(t, exponent);
    };
    
    Game_Camera.prototype.easeOut = function(t, exponent) {
        return 1 - Math.pow(1 - t, exponent);
    };
    
    Game_Camera.prototype.easeInOut = function(t, exponent) {
        if (t < 0.5) {
            return this.easeIn(t * 2, exponent) / 2;
        } else {
            return this.easeOut(t * 2 - 1, exponent) / 2 + 0.5;
        }
    };

})();