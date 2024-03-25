//==========================================================================
// Akea - SV Weapons Plus
//----------------------------------------------------------------------------
// 04/10/20 | Version: 1.0.0
// This software is released under the zlib License.
//============================================================================

/*:
 * @target MZ
 * @plugindesc [v1.0.0] Use custom graphics for each weapon in battle.
 * @author Gabe (Gabriel Nascimento)
 * @url http://patreon.com/gabriel_nfd
 * @base AkeaAnimatedBattleSystem
 * @orderAfter AkeaAnimatedBattleSystem
 * 
 * @help Akea - Battle Camera
 *  - This plugin is released under the zlib License.
 *  - This plugin requires the AkeaAnimatedBattleSystem base plugin.
 * 
 * This plugin allows each weapon to have its own graphics during battle. 
 * Following the Holder's format, it's possible to define two layers of 
 * graphics for each weapon. One below the actor's spritesheet and one above. 
 * 
 * To define the graphics of a specific weapon, just configure it in the plugin 
 * parameters.
 * 
 * The graphics must be inserted in the following directory: img/sv_weapons/
 * 
 * For support and new plugins join our Discord server: 
 * https://discord.gg/GG85QRz
 * 
 * @param weaponSettings
 * @text Weapon Settings
 * @desc Set here the Weapon settings here.
 * @type struct<weaponSettingsStruct>[]
 */

 /*~struct~weaponSettingsStruct:
 * @param weaponId
 * @text Weapon ID
 * @desc Set the weapon ID.
 * @type weapon
 * @default 1
 * 
 * @param filename
 * @text Image
 * @desc Set the weapon image filename.
 * @type file
 * @dir img/sv_weapons
 * 
 * @param index
 * @text Index
 * @desc Set the weapon index in the image.
 * @type number
 * @default 0
 * 
 */

 var Imported = Imported || {};
 Imported.Akea_SVWeaponsPlus = true;
 
 var Akea = Akea || {};
 Akea.SVWeaponsPlus = Akea.SVWeaponsPlus || {};
 Akea.SVWeaponsPlus.VERSION = [1, 0, 0];
 
 if (!Akea.BattleSystem) throw new Error("Akea Visual Weapons plugin needs the Akea Animated Battle System base.");
 if (Akea.BattleSystem.VERSION < [1, 1, 0]) throw new Error("Akea Visual Weapons plugin only works with versions 1.1.0 or higher of the Akea Animated Battle System.");
 
 (() => {
 
     const pluginName = "AkeaSVWeaponsPlus";
     Akea.params = PluginManager.parameters(pluginName);
     Akea.SVWeaponsPlus.weaponSettings = JSON.parse(Akea.params.weaponSettings);
     Akea.SVWeaponsPlus.weapons = [];
     Akea.SVWeaponsPlus.weaponSettings.forEach(weapon => {
         weapon = JSON.parse(weapon);
         settings = {
            weaponId: parseInt(weapon.weaponId),
            filename: weapon.filename,
            index: parseInt(weapon.index)
         }
         Akea.SVWeaponsPlus.weapons.push(settings)
     }); 

    //-----------------------------------------------------------------------------
    // ImageManager
    //
    // The static class that loads images, creates bitmap objects and retains them.

    ImageManager.loadSvWeapon = function(filename) {
        return this.loadBitmap("img/sv_weapons/", filename);
    };

    const _Sprite_Actor_setupWeaponAnimation = Sprite_Actor.prototype.setupWeaponAnimation;
    Sprite_Actor.prototype.setupWeaponAnimation = function() {
        this._weaponSprite.setupWeaponId(this._actor.weapons()[0].id);
        _Sprite_Actor_setupWeaponAnimation.call(this);
    };

    const _Sprite_Weapon_initMembers = Sprite_Weapon.prototype.initMembers;
    Sprite_Weapon.prototype.initMembers = function() {
        _Sprite_Weapon_initMembers.call(this);
        this._weaponId = 0;
    };

    Sprite_Weapon.prototype.setupWeaponId = function(weaponId) {
        this._weaponId = weaponId;
    };

    const _Sprite_Weapon_loadBitmap = Sprite_Weapon.prototype.loadBitmap;
    Sprite_Weapon.prototype.loadBitmap = function() {
        const weaponSettings = Akea.SVWeaponsPlus.weapons.find(weapon => weapon.weaponId == this._weaponId);
        if (weaponSettings) {
            this._weaponImageId = weaponSettings.index;
            this.bitmap = ImageManager.loadSvWeapon(weaponSettings.filename);
        } else {
            _Sprite_Weapon_loadBitmap.call(this);
        }
    };

})();