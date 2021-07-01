
//============================================================================
// Gabe MZ - Event Floating Info
//----------------------------------------------------------------------------
// 29/06/21 | Version: 1.0.0 | Released
//----------------------------------------------------------------------------
// This software is released under the zlib License.
//============================================================================

/*:
 * @target MZ
 * @plugindesc [v1.0.0] Allows to display floating infos above the events.
 * @author Gabe (Gabriel Nascimento)
 * @url https://github.com/comuns-rpgmaker/GabeMZ
 * 
 * @help Gabe MZ - Event Floating Info
 *  - This plugin is released under the zlib License.
 * 
 * This plugin provides a option to display floating infos above the events, either 
 * text or icons.
 * 
 */

var Imported = Imported || {};
Imported.GMZ_EventFloatingInfo = true;

var GabeMZ                       = GabeMZ || {};
GabeMZ.EventFloatingInfo         = GabeMZ.EventFloatingInfo || {};
GabeMZ.EventFloatingInfo.VERSION = [1, 0, 0];

(() => {

    //-----------------------------------------------------------------------------
    // Game_Event
    //
    // The game object class for an event. It contains functionality for event page
    // switching and running parallel process events.

    const _Game_Event_initMembers = Game_Event.prototype.initMembers;
    Game_Event.prototype.initMembers = function() {
        _Game_Event_initMembers.call(this);
        this._floatingInfo = null;
    };

    const _Game_Event_setupPage = Game_Event.prototype.setupPage;
    Game_Event.prototype.setupPage = function() {
        _Game_Event_setupPage.call(this);
        if (this._pageIndex < 0) return;
        this.getFloatingInfo();
    };

    Game_Event.prototype.getFloatingInfo = function() {
        this._floatingInfo = null;
        let rawInfo = [];
        this.list().forEach(command => {
            if (command.code === 108 || command.code === 408) {
                rawInfo.push(command.parameters[0])
            }
        });
        const info = rawInfo.join('\n');
        const reg = /^<gmz(\w+)*>([^<]*)<\/gmz\w+>/gm;
        let match;
        while (match = reg.exec(info)) {
            if (match[1] === "Text") this.setFloatingInfo(match[2]);
        }
    }

    Game_Event.prototype.setFloatingInfo = function(parameters) {
        this._floatingInfo = {};
        const reg = /(\w+):\s*([^\n]*)/gm;
        let match;
        while (match = reg.exec(parameters)) {
            switch (match[1]) {
                case "text":
                    this._floatingInfo.text = match[2];
                    break;
                case "icon":
                    this._floatingInfo.icon = this.getIntParameter(match[2], false);
                    break;
                case "distance":
                    this._floatingInfo.distance = this.getIntParameter(match[2], false);
                    break;
                case "x":
                    this._floatingInfo.x = this.getIntParameter(match[2], 0);
                    break;
                case "y":
                    this._floatingInfo.y = this.getIntParameter(match[2], 0);
                    break;
            }
        }
    }

    Game_Event.prototype.getIntParameter = function(parameter, value) {
        return parseInt(parameter) || value;
    }
    
    Game_Event.prototype.floatingInfo = function() {
        return this._floatingInfo;
    }

    const _Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
    Spriteset_Map.prototype.createLowerLayer = function() {
        _Spriteset_Map_createLowerLayer.call(this);
        this.createEventFloatingInfo();
    }

    Spriteset_Map.prototype.createEventFloatingInfo = function() {
        this._eventsFloatingInfoArea = new Sprite();
        this._eventsFloatingInfoSprites = [];
        for (const event of $gameMap.events()) {
            let sprite = new Sprite_FloatingInfo(event);
            this._eventsFloatingInfoSprites.push(sprite);
            this._eventsFloatingInfoArea.addChild(sprite);
        }
        this._baseSprite.addChild(this._eventsFloatingInfoArea);
    }
    
    //-----------------------------------------------------------------------------
    // Sprite_FloatingInfo
    //
    // The sprite for displaying a event floating info.

    function Sprite_FloatingInfo() {
        this.initialize(...arguments);
    }
    
    Sprite_FloatingInfo.prototype = Object.create(Sprite.prototype);
    Sprite_FloatingInfo.prototype.constructor = Sprite_FloatingInfo;
    
    Sprite_FloatingInfo.prototype.initialize = function(event) {
        Sprite.prototype.initialize.call(this);
        this._event = event;
        this.anchor = new Point(0.5, 0.5);
        this.initMembers();
        this.createBitmap();
    };

    Sprite_FloatingInfo.prototype.initMembers = function() {
        this._offsetX = 0;
        this._offsetY = 0;
        this._parameters = null;
        this._distanceTrigger = null;
        this._opacityTarget = 0;
    };

    Sprite_FloatingInfo.prototype.createBitmap = function() {
        this.bitmap = new Bitmap(200, 32);
    }

    Sprite_FloatingInfo.prototype.update = function() {
        Sprite.prototype.update.call(this);
        this.updatePosition();
        this.updateFloatingInfo();
        this.updateOpacity();
    };

    Sprite_FloatingInfo.prototype.updatePosition = function() {
        this.x = this._event.screenX() + this._offsetX;
        this.y = (this._event.screenY() - 48) + this._offsetY;
    };

    Sprite_FloatingInfo.prototype.updateFloatingInfo = function() {
        if (this._parameters != this._event.floatingInfo()) {
            this._parameters = this._event.floatingInfo();
            this.bitmap.clear();
            if (!this._parameters) return;
            this._offsetX = this._parameters.x || this._offsetX;
            this._offsetY = this._parameters.y || this._offsetY;
            this._distanceTrigger = this._parameters.distance || null;
            const w = this.bitmap.width;
            const h = this.bitmap.height;
            this.bitmap.drawText(this._parameters.text, 0, 0, w, h, "center");
            //this.bitmap = ImageManager.loadSystem("IconSet");
            //this.setFrame(32, 0, 32, 32);
        }
    };

    Sprite_FloatingInfo.prototype.updateOpacity = function() {
        if (!this._distanceTrigger) return;
        const distance = $gameMap.distance($gamePlayer.x, $gamePlayer.y, this._event.x, this._event.y);
        if (this._distanceTrigger >= distance) {
            this._opacityTarget = 255 / 30;
        } else {
            this._opacityTarget = -255 / 30;
        }
        this.updateOpacityTransition();
    }

    Sprite_FloatingInfo.prototype.updateOpacityTransition = function() {
        this.opacity += this._opacityTarget;
    }

})();