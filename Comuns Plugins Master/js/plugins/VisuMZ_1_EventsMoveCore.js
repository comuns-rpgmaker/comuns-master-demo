//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.03] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfSwitchValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Radius: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Radius: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 *
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 *
 * ---
 *
 * <Icon Blend Mode: Normal>
 * <Icon Blend Mode: Additive>
 * <Icon Blend Mode: Multiply>
 * <Icon Blend Mode: Screen>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the blend mode for the icon on the event.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 *
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 *
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 *
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 *
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Activation
 * - Runs the page of a different event remotely.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change
 * - Change the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s).
 *
 *   Region ID(s)
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Activation
 * @desc Runs the page of a different event remotely.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change
 * @desc Change the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remotely run.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
//=============================================================================

const _0x1304=['_pattern','isLandOk','isRegionDockable','BlendMode','shadowX','_comments','Game_Event_updateParallel','_cpc','SLEEP','setPose','MUSICNOTE','isDashDisabled','despawnEventId','anchor','processMoveRouteStepToCharacter','gBNDn','Game_Character_setMoveRoute','SpawnEventDespawnRegions','event','getMapSpawnedEventData','UJLNG','labelWindowText','hasMoveOnlyRegions','column','_encounterEffectDuration','PuZgj','szoBE','ANIDF','isMoveOnlyRegionPassable','isAirship','loadSystem','Game_CharacterBase_updatePattern','clamp','ZynNq','width','roundYWithDirection','checkAdvancedSwitchVariablePresent','parse','aVnsN','SPIN\x20CCW','_lastPluginCommandInterpreter','WalkAllow','SelfSwitchID','Game_Variables_value','processMoveRoutePatternLock','vehicle','canPassDiagonally','processMoveRouteHugWall','aTufe','Hidden','clearEventCache','createContents','HMPH','_moveRoute','checkEventTriggerAuto','SelfVariableID','deleteSavedEventLocationKey','erase','updateText','checkSmartEventCollision','Game_SelfSwitches_setValue','moveTowardPoint','BalloonOffsetY','scale','stKzj','updateEventsMoveCoreTagChanges','Game_Map_setup','getPosingCharacterPattern','target','SpawnEventAtXY','constructor','GLFIF','terrainTag','execute','pages','kzglr','%1Allow','_eventMorphData','Window_ScrollText_startMessage','hideShadows','Jiwba','return\x20%1','mMAbL','Game_CharacterBase_increaseSteps','OFF','SwitchGetSelfSwitchABCD','characterPatternY','%1Dock','_labelWindow','shiftY','activationRegionList','Game_Player_increaseSteps','isRunning','Imflk','posNt','opacity','Game_CharacterBase_isDashing','roundY','oLfYT','forceDashing','updateShadowChanges','xKMqZ','reverseDir','tJZUC','SPIN\x20ANTICLOCKWISE','updatePose','VisibleEventLabels','VehicleAllow','OpacitySpeed','_regionRules','savePreservedMorphEventDataKey','turnTowardCharacter','aOZAj','FavorHorz','Vcnfc','Step2MapId','Game_Player_isMapPassable','_type','screenX','isNearTheScreen','rjJpt','LineHeight','variables','height','eventsXyNt','_counter','moveAwayFromCharacter','_spriteset','Game_CharacterBase_moveDiagonally','tiYCD','hasEventIcon','onClickTrigger','setDestination','checkActivationProximity','initMembers','none','_diagonalSupport','contents','processMoveSynchCustom','VQqAH','Event','_CPCs','shadowY','Game_CharacterBase_characterIndex','isValid','fPDuy','charAt','Game_Troop_meetsConditionsCPC','setValue','Settings','_characterName','clearSelfTarget','ixWgi','DLXmN','huAfJ','metCPC','direction','getPreservedMorphEventData','_pose','qYLvM','EventAutoMovement','Step2EventId','_erased','moveForward','processMoveRouteAnimation','Game_Interpreter_PluginCommand','Rope','yTlIu','fittingHeight','nwgpA','screenY','mimic','isDashing','Game_Event_checkEventTriggerAuto','PlayerForbid','Game_Event_initialize','Game_Event_refresh','isShip','RemovePreserve','dir8','MjiTD','isBoat','PostMorphJS','GDfRu','setOpacity','processMoveSynchMimic','tXaeR','dNYRn','getInputDirection','Step1MapId','processMoveSynchApproach','delay','_hidden','processMoveSynchReverseMimic','getDirectionFromPoint','findTargetSprite','xDuTc','processMoveRouteTeleportToCharacter','Direction','setupPageSettings','YaJhD','HLrWG','AiyRK','_eventIcon','offsetY','qPhwK','executeCommand','Operation','QkBru','YkNQC','JXBaK','ARRAYJSON','timer','processMoveSynchMirrorVert','VariableId','clearPageSettings','getDirectionToPoint','IconSet','Game_Message_add','TiltLeft','kLhGl','_commonEvents','RTAtX','ABoGq','process_VisuMZ_EventsMoveCore_Switches_Variables','Game_CharacterBase_screenY','Game_Map_events','DqFlu','list','gHTjh','YsfxS','backX','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','updatePeriodicRefresh','Game_CommonEvent_isActive','isShadowShrink','processMoveRouteJumpForward','registerSelfEvent','windowPadding','ANNOYED','concat','SbPCf','firstSpawnedEventID','PlayerAllow','WalkForbid','Sprite_Character_update','oYbki','CustomPageConditions','Label','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','%1%2','round','Ship','switch1Id','region','tAShH','COBWEB','vertical\x20mirror','OGvrQ','characterPatternYVS8','GCONi','Game_Switches_setValue','MorphEventRemove','_MapSpawnedEventData','isActive','selfValue','updateScale','mapId','EItvQ','isMoving','Spriteset_Map_createShadow','hdZSq','mHsZv','autosaveEventLocation','drawIcon','deltaX','TargetVariableId','Game_CharacterBase_hasStepAnime','iconIndex','_addedHitbox','Self\x20Switch\x20%1','setEventLabelsVisible','SpawnEventDespawnEventID','updateMove','lWGoy','left','isPassableByAnyDirection','PreMorphJS','deltaXFrom','update','yeAKU','isSupportDiagonalMovement','getPose','Game_Character_processMoveCommand','HURT','setDirection','setupEventsMoveCoreNotetags','Letter','NORMAL','isTargetEventValidForLabelWindow','checkEventTriggerEventsMoveCore','LIGHT','Game_Player_checkEventTriggerHere','FastForwardKey','AirshipSpeed','min','updateTilt','AdvancedSwitches','iKZKd','processMoveRouteMoveTo','_pageIndex','name','yRGTk','setMoveRoute','EventAllow','activationProximityDistance','ShowShadows','...','initEventsMoveCoreEffects','processMoveCommand','_characterIndex','AutoMoveEvents','_characterSprites','isEventOverloaded','isPosing','KNgrr','WwOaL','MWNvw','TurnInPlaceDelay','PostSpawnJS','Map%1-Event%2','RegionOkTarget','shadowFilename','updateShadow','DlDki','isTile','deleteIconsOnEventsData','lHOeP','_spawnedEvents','pageIndex','zoomScale','ycAMS','getLastPluginCommandInterpreter','ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20<Copy\x20Event>\x20usage.','_moveOnlyRegions','vroXp','clear','distance','BoatSpeed','SpawnEventDespawnEverything','processMoveRouteStepTo','meetActivationRegionConditions','setMovementSuccess','_opacity','QUESTION','_isObjectCharacter','call','initEventsMoveCore','Game_CharacterBase_pattern','yuWHm','JSON','Game_Vehicle_isMapPassable','deleteIconsOnEventsDataKey','PosX','max','GptXw','lastMovedDirection','createLabelWindows','isBattleTest','setEventIconData','UPPER\x20RIGHT','makeDeepCopy','Game_CharacterBase_realMoveSpeed','updatePattern','jimVr','Ctooq','ejntD','eTFfo','UWBxa','AhudN','updateVS8BalloonOffsets','start','HJfEG','page','Game_CharacterBase_screenX','RIGHT','vjimY','random','refreshIfNeeded','_selfEvent','FUNC','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','processMoveRouteMoveRepeat','updateParallel','meetsSwitchCondition','hasStepAnime','right','isTriggerIn','Map%1.json','match','Game_Interpreter_executeCommand','DashingEnable','OffsetY','square','Airship','lastSpawnedEvent','gUnfV','turn180','isAdvancedVariable','GetMoveSynchTarget','_shadowGraphic','filename','variableValid','setupMorphEvent','clearPose','qhqcz','registerCommand','characterIndexVS8','startMapCommonEventOnOK','text','processMoveRouteTeleportTo','uGjCU','isJumping','isPressed','NUM','_spriteOffsetY','_data','AutoBalloon','KvnGT','initMoveSpeed','reverse\x20copy','DefaultShadow','Game_Map_update','SwitchGetSelfSwitchID','ARRAYSTR','moveDiagonally','labelWindowRange','UYaZT','HEART','isRegionForbidPass','ozmqA','findProperPageIndex','OynYr','iconSize','log','pos','YjCDW','TbCHk','TiltRight','ROUTE_SCRIPT','resizeWindow','slice','PUeuv','hasDragonbones','TerrainTag','drawTextEx','despawnRegions','iAywY','Game_Player_getInputDirection','loadCPC','hOIfV','EventLocationSave','_patternLocked','isPassable','IconIndex','refresh','setupCopyEvent','bixwZ','Value','deletePreservedMorphEventDataKey','processMoveRouteBalloon','SPIN\x20COUNTERCLOCKWISE','key','Walk','Game_Interpreter_updateWaitMode','isAirshipPassable','moveTowardCharacter','indexOf','vPepR','clearDestination','KkGUU','parallelCommonEvents','CPC','ARRAYFUNC','isOnRope','Game_CharacterBase_setDirection','TbedD','switchId','setupSpawnedEvents','Game_Event_event','startMessage','isOnLadder','_SavedEventLocations','variableId','EventTemplates','_moveRouteIndex','All','hChyX','reverse','IconBufferY','iconHeight','PreloadMaps','getSelfTarget','value','MUSIC\x20NOTE','getEventIconIndex','reserveCommonEvent','General','xBiWU','EventLabelVisible','_advancedSwitchVariable','CRvyM','isLabelVisible','sMBXt','_eventOverload','BlKpO','PreCopyJS','textSizeEx','StrictCollision','_EventIcons','nxrxF','processMoveRouteMoveToCharacter','EventIconChange','roundXWithDirection','blendMode','OxkOV','EventLocationCreate','fVHvq','startCallEvent','Step2Preserve','dCKaK','Game_System_initialize','locate','SelfSwitches','Movement','isShadowVisible','_lastMovedDirection','away','Collision','moveSynchType','bVwLX','isTurnInPlace','bind','jumpHeight','isCollidedWithEvents','PlayerIconDelete','PosY','EwvDl','xQZtv','LOVE','setPattern','SMPOc','CallEvent','splice','ByBVO','processMoveCommandEventsMoveCore','parent','toUpperCase','VS8','isNormalPriority','EhRzO','iuwPS','Game_Event_clearPageSettings','kscWV','EventLocationDelete','split','Visible','Game_Map_isDashDisabled','Game_CharacterBase_canPass','turnRight90','switches','setBalloonPose','pageId','_labelWindows','LxsDW','ADDITIVE','isEventTest','default','absDistance','TargetSwitchId','createSpawnedEvent','PlayerIconChange','frontY','XFiII','offsetX','rotation','Ywlcb','MULTIPLY','XqhMr','_callEventMap','initEventsMoveCoreSettings','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','randomInt','lyDup','_needsPeriodicRefresh','filter','EventsMoveCore','BaEQu','add','processMoveSynchRandom','KPeCG','saveEventLocation','DashModifier','registerSelfTarget','isSpawnedEvent','ZjWFB','hasCPCs','deleteEventLocation','isDashingEnabled','FontSize','updateWaitMode','createLabelWindowForTarget','createShadow','apply','checkEventTriggerThere','setupRegionRestrictions','mLUYf','Name','aulUe','ship','events','EnableTurnInPlace','meetsConditions','setDiagonalDirection','despawnAtXY','setupEventsMoveCoreEffects','GMduU','switch1Valid','Window_Message_startMessage','Game_Enemy_meetsSwitchCondition','DItlU','Game_Temp_setDestination','hasClickTrigger','EnableDir8','lineHeight','_eventCopyData','dMNWM','firstSpawnedEvent','DaIZq','ihHHN','ufuKg','_commonEventId','_activationProximity','floor','JhBHm','clearSpriteOffsets','setLastPluginCommandInterpreter','MoveAllSynchTargets','status','faIAg','switch2Valid','SlowerSpeed','UuAtp','executeMove','qFMHd','destinationX','Game_Switches_value','fvmsE','dYoxJ','FSqvu','tvXch','UcdyH','bufferX','meetActivationProximityConditions','trigger','GHBsk','Sprite_Character_initMembers','setMoveSpeed','cJZPv','exit','_shadowSprite','RIGHT\x20TO\x20LEFT','ConvertParams','createSaveEventLocationData','DdvcY','VehicleDock','Forbid','setDashingEnabled','LIGHTBULB','ARRAYEVAL','_eventId','createShadows','DRIlg','_periodicRefreshTimer','isRegionAllowPass','type','horz\x20mirror','_shadowOpacity','Game_Player_executeMove','clearStepPattern','EventId','bufferY','Game_Event_meetsConditions','Sprite_Balloon_updatePosition','vhsTW','map','Toggle','getSavedEventLocation','USER-DEFINED\x205','setup','setupChild','advancedFunc','PostCopyJS','requestBalloon','Game_Event_meetsConditionsCPC','VisuMZ_Setup_Preload_Map','visibleRange','_saveEventLocation','CarryPose','DiagonalSpeedMultiplier','lastSpawnedEventID','ARRAYNUM','TemplateName','Game_Event_setupPageSettings','getPosingCharacterDirection','checkValidEventerMap','SelfVariables','_transparent','abs','Game_CharacterBase_update','findDiagonalDirectionTo','characterIndex','prepareSpawnedEventAtRegion','EventLabelRefresh','WbQzQ','Game_CharacterBase_initMembers','turnTowardPoint','FwPPV','turnAwayFromPoint','IconSize','determineCommonEventsWithCPC','command108','%1DockRegionOnly','setupEventsMoveCoreCommentTags','Game_Player_isDashing','findDirectionTo','setSelfValue','isPlaytest','TiltVert','parameters','azKcw','StopAutoMoveEvents','JeaMe','Region%1','getEventIconData','_stopCount','rNaKI','ShipSpeed','TKSpW','yrpUM','_moveSynch','defaultFontSize','contentsOpacity','dashSpeedModifier','Enable','isSelfSwitch','OuXPk','Step1EventId','format','_moveSpeed','_waitMode','Sprite_Balloon_setup','MaHXR','_forceDashing','isAutoBufferIcon','USER-DEFINED\x204','kLuDJ','QSkxn','executeMoveDir8','characterName','BufferX','Icon','_PreservedEventMorphData','EnableDashTilt','horizontal\x20mirror','_character','PageId','updatePatternEventsMoveCore','startMapCommonEventOnOKTarget','ZuHtJ','JIxpx','dkQBP','approach','EventID','WWrqY','SPIN\x20CW','iconWidth','RegionOk','moveAwayFromPoint','pluginCommandCallEvent','isSpriteVS8dir','fqlNp','pattern','USER-DEFINED\x201','ABOFA','dbvKO','isSelfVariable','StopAutoMoveMessages','HwgIx','morphInto','Game_Map_parallelCommonEvents','ITEM','MwHPI','Scene_Map_startEncounterEffect','setImage','USER-DEFINED\x203','NOTE','Dock','processMoveRouteSelfVariable','_event','row','deltaY','setAllowEventAutoMovement','setupDiagonalSupport','XslZu','Game_CharacterBase_moveStraight','LIGHT\x20BULB','BYEkp','Game_SelfSwitches_value','clearDashing','MueWu','isAllowEventAutoMovement','isDestinationValid','_tilemap','bitmap','processMoveRouteStepFrom','removeTemporaryMapSpawnedEvents','AllForbid','VariableGetSelfVariableID','onChange','PreSpawnJS','_interpreter','code','setEventIconDataKey','copy','toLowerCase','setupSpawn','opacitySpeed','custom','turnLeft90','Citfv','xvCXO','_text','eventsXy','HHWSw','doxcZ','version','updateSelfMovement','some','processMoveRouteStepToPlayer','realMoveSpeed','isBusy','Game_Vehicle_isLandOk','IconBlendMode','Game_Troop_meetsConditions','DOWN','_filename','MiJpo','checkEventsMoveCoreStringTags','processMoveRouteMoveUntilStop','isAdvancedSwitch','Game_Player_checkEventTriggerThere','QFgjm','AllAllow','_eventSpawnData','UPPER\x20LEFT','backY','innerWidth','QsxZl','_callEventData','Player','createSpawnedEventWithData','isMapPassable','AMEJZ','jump','advancedValue','length','determineEventOverload','updatePosition','player','Game_Event_start','includes','MkljB','MessageCore','WLojw','setupEvents','startMapCommonEventOnTouch','moveStraight','ZZZ','FTEdO','MUSIC','addChild','BNslM','processMoveSynch','setupSaveEventLocations','isSaveEventLocations','directionOnLadderSpriteVS8dir','Game_Map_setupEvents','boxWidth','hIvmO','_clickTrigger','PreloadedMaps','cwyTm','spriteId','COLLAPSE','LUeYc','createLowerLayer','checkRegionEventTrigger','_saveEventLocations','STR','Onhuh','EXCLAMATION','Spriteset_Map_createLowerLayer','reverse\x20mimic','Template','airship','posEventsMoveCore','VisibleRange','_vehicleType','checkEventTriggerHere','PkIUx','eventId','EUZIa','KqqTe','OperateValues','Scene_Load_onLoadSuccess','JgsUH','UNTITLED','drawing','kSLqw','_inputTime','VehicleForbid','startEncounterEffect','boat','sBimE','DYMNu','yuwGD','VwHMI','OffsetX','NArDi','_eventIconSprite','STRUCT','createCharacterShadow','deltaYFrom','_stepPattern','forceMoveRoute','ZagzF','SZNDu','Passability','_selfTarget','MapID','isAnyEventStarting','IJOWY','Allow','hasAdvancedSwitchVariable','_spawnData','jbEGm','Game_Variables_setValue','uOMFq','bRTyG','canPass','PtkKu','xTZmR','removeMorph','_eventOverloadThreshold','GrqvX','Boat','_dragonbones','VICTORY','remove','_alwaysUpdateMove','KCYHy','SILENCE','_scene','adjustDir8MovementSpeed','myPAF','LEFT\x20TO\x20RIGHT','push','Disable','isDashingAndMoving','Sprite_Character_characterPatternY','WiQbI','_spriteOffsetX','spawnEventId','uGsOK','initialize','PnAbD','visible','description','template','roundX','onLoadSuccess','VisuMZ_1_MessageCore','updateMoveSynch','deleteSavedEventLocation','ztkrH','setFrame','prototype','SWEAT','eventLabelsVisible','processMoveSynchAway','SpawnEventAtRegion','processMoveRouteSetIndex','_activationProximityAutoTriggerBypass','useCarryPoseForIcons','Game_Map_event','frameCount','restoreSavedEventPosition','Scene_Boot_onDatabaseLoaded','despawnEverything','getInputDir8','turnAwayFromCharacter','$callEventMap','replace','autoEventIconBuffer','Game_Event_findProperPageIndex','getPosingCharacterIndex','regionList','CPCsMet','isEventRunning','processMoveRouteJumpTo','requestRefresh','_poseDuration','meetsCPC','XaBWZ','increaseSteps','updateEventIconSprite','initMembersEventsMoveCore','MapId','Region','Self\x20Variable\x20%1','searchLimit','return\x200','front','Game_Vehicle_initMoveSpeed','UhUfe','canStartLocalEvents','_eventCache','vert\x20mirror','JqRzS','VisuMZ_2_DragonbonesUnion','isSaveEventLocation','Game_Event_updateSelfMovement','padZero','mirror\x20vert','trim','Game_Map_refresh','isPreventSelfMovement','requestAnimation','activationProximityType','correctFacingDirection','removeChild','processDrawIcon','isAllowCharacterTilt','regionId','_EventsMoveCoreSettings','BufferY','mirror\x20horizontal','uLplP','createIconSprite','canMove','qnhuN','_trigger','create','_target','moveRouteIndex','resetFontSettings','IconBufferX','ANGER','isInVehicle','note','SpawnEventDespawnAtXY','MUSIC-NOTE','_mapId','KNEEL','_duration','blt','processMoveRouteSelfSwitch','AdvancedVariables','morphIntoTemplate','AutoBuffer','prepareSpawnedEventAtXY','SwitchId','moveSynchTarget','standing','Game_Character_forceMoveRoute','loadDataFile'];(function(_0x6182ea,_0x1304ac){const _0x1e727c=function(_0x12a899){while(--_0x12a899){_0x6182ea['push'](_0x6182ea['shift']());}};_0x1e727c(++_0x1304ac);}(_0x1304,0x7d));const _0x1e72=function(_0x6182ea,_0x1304ac){_0x6182ea=_0x6182ea-0x0;let _0x1e727c=_0x1304[_0x6182ea];return _0x1e727c;};var label=_0x1e72('0x1d7'),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x7b43b4){return _0x7b43b4[_0x1e72('0x20b')]&&_0x7b43b4[_0x1e72('0x35f')][_0x1e72('0x2f4')]('['+label+']');})[0x0];VisuMZ[label][_0x1e72('0x18')]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x1ab961,_0x4c5f30){for(const _0x508966 in _0x4c5f30){if(_0x508966[_0x1e72('0x112')](/(.*):(.*)/i)){const _0x2da262=String(RegExp['$1']),_0x588154=String(RegExp['$2'])[_0x1e72('0x1b0')]()[_0x1e72('0x398')]();let _0x23dc00,_0xb4dae7,_0x1367d7;switch(_0x588154){case _0x1e72('0x12b'):_0x23dc00=_0x4c5f30[_0x508966]!==''?Number(_0x4c5f30[_0x508966]):0x0;break;case _0x1e72('0x24a'):_0xb4dae7=_0x4c5f30[_0x508966]!==''?JSON['parse'](_0x4c5f30[_0x508966]):[],_0x23dc00=_0xb4dae7[_0x1e72('0x23a')](_0x23c7ea=>Number(_0x23c7ea));break;case'EVAL':_0x23dc00=_0x4c5f30[_0x508966]!==''?eval(_0x4c5f30[_0x508966]):null;break;case _0x1e72('0x22a'):_0xb4dae7=_0x4c5f30[_0x508966]!==''?JSON[_0x1e72('0x3e7')](_0x4c5f30[_0x508966]):[],_0x23dc00=_0xb4dae7[_0x1e72('0x23a')](_0xab7753=>eval(_0xab7753));break;case _0x1e72('0xeb'):_0x23dc00=_0x4c5f30[_0x508966]!==''?JSON[_0x1e72('0x3e7')](_0x4c5f30[_0x508966]):'';break;case _0x1e72('0x56'):_0xb4dae7=_0x4c5f30[_0x508966]!==''?JSON[_0x1e72('0x3e7')](_0x4c5f30[_0x508966]):[],_0x23dc00=_0xb4dae7[_0x1e72('0x23a')](_0x28c29b=>JSON[_0x1e72('0x3e7')](_0x28c29b));break;case _0x1e72('0x109'):_0x23dc00=_0x4c5f30[_0x508966]!==''?new Function(JSON[_0x1e72('0x3e7')](_0x4c5f30[_0x508966])):new Function(_0x1e72('0x38b'));break;case _0x1e72('0x166'):_0xb4dae7=_0x4c5f30[_0x508966]!==''?JSON[_0x1e72('0x3e7')](_0x4c5f30[_0x508966]):[],_0x23dc00=_0xb4dae7['map'](_0x39bed0=>new Function(JSON[_0x1e72('0x3e7')](_0x39bed0)));break;case _0x1e72('0x310'):_0x23dc00=_0x4c5f30[_0x508966]!==''?String(_0x4c5f30[_0x508966]):'';break;case _0x1e72('0x135'):_0xb4dae7=_0x4c5f30[_0x508966]!==''?JSON['parse'](_0x4c5f30[_0x508966]):[],_0x23dc00=_0xb4dae7[_0x1e72('0x23a')](_0x4ddbad=>String(_0x4ddbad));break;case _0x1e72('0x330'):_0x1367d7=_0x4c5f30[_0x508966]!==''?JSON[_0x1e72('0x3e7')](_0x4c5f30[_0x508966]):{},_0x1ab961[_0x2da262]={},VisuMZ[_0x1e72('0x223')](_0x1ab961[_0x2da262],_0x1367d7);continue;case'ARRAYSTRUCT':_0xb4dae7=_0x4c5f30[_0x508966]!==''?JSON[_0x1e72('0x3e7')](_0x4c5f30[_0x508966]):[],_0x23dc00=_0xb4dae7[_0x1e72('0x23a')](_0x19e4ed=>VisuMZ['ConvertParams']({},JSON[_0x1e72('0x3e7')](_0x19e4ed)));break;default:continue;}_0x1ab961[_0x2da262]=_0x23dc00;}}return _0x1ab961;},(_0x326571=>{const _0x583f66=_0x326571[_0x1e72('0xba')];for(const _0x18de23 of dependencies){if(!Imported[_0x18de23]){alert(_0x1e72('0x10a')[_0x1e72('0x279')](_0x583f66,_0x18de23)),SceneManager[_0x1e72('0x220')]();break;}}const _0x543509=_0x326571[_0x1e72('0x35f')];if(_0x543509[_0x1e72('0x112')](/\[Version[ ](.*?)\]/i)){if('qPhwK'!==_0x1e72('0x50')){function _0x27a310(){_0x1750e9[_0x1e72('0x70')](),_0x2ea48b[_0x1e72('0x1d7')]['Window_ScrollText_startMessage'][_0x1e72('0xe7')](this),_0x1d3493[_0x1e72('0x1a')]();}}else{const _0x2ebf53=Number(RegExp['$1']);if(_0x2ebf53!==VisuMZ[label][_0x1e72('0x2d1')]){if(_0x1e72('0x239')!==_0x1e72('0x239')){function _0x3d76a2(){this[_0x1e72('0x359')]=_0x5bf294(_0x50c980['$1']);}}else alert(_0x1e72('0x7c')[_0x1e72('0x279')](_0x583f66,_0x2ebf53)),SceneManager['exit']();}}}if(_0x543509[_0x1e72('0x112')](/\[Tier[ ](\d+)\]/i)){if(_0x1e72('0x329')===_0x1e72('0x281')){function _0x283f37(){return this['_labelWindow'][_0x1e72('0x126')];}}else{const _0x2536e6=Number(RegExp['$1']);if(_0x2536e6<tier)alert(_0x1e72('0x6b')[_0x1e72('0x279')](_0x583f66,_0x2536e6,tier)),SceneManager['exit']();else{if(_0x1e72('0x21f')!==_0x1e72('0x21f')){function _0x879bfd(){_0x12d568[_0x1e72('0x1d7')][_0x1e72('0x78')][_0x1e72('0xe7')](this),_0x5e87be['EventsMoveCore']['Settings'][_0x1e72('0x199')][_0x1e72('0x288')]&&this[_0x1e72('0xb5')](),this[_0x1e72('0x221')]&&this['updateShadow'](),this[_0x1e72('0x32f')]&&this[_0x1e72('0x385')]();}}else tier=Math[_0x1e72('0xef')](_0x2536e6,tier);}}}VisuMZ[_0x1e72('0x223')](VisuMZ[label][_0x1e72('0x18')],_0x326571['parameters']);})(pluginData),VisuMZ[_0x1e72('0x31f')]=function(_0x52ef62,_0xc5dac3,_0x5b2529){switch(_0x5b2529){case'=':return _0xc5dac3;break;case'+':return _0x52ef62+_0xc5dac3;break;case'-':return _0x52ef62-_0xc5dac3;break;case'*':return _0x52ef62*_0xc5dac3;break;case'/':return _0x52ef62/_0xc5dac3;break;case'%':return _0x52ef62%_0xc5dac3;break;}return _0x52ef62;},PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0xc4'),_0x119e25=>{VisuMZ[_0x1e72('0x223')](_0x119e25,_0x119e25);switch(_0x119e25[_0x1e72('0x157')]){case _0x1e72('0x33c'):$gameSystem[_0x1e72('0x2af')](!![]);break;case'Stop':$gameSystem[_0x1e72('0x2af')](![]);break;case _0x1e72('0x23b'):$gameSystem['setAllowEventAutoMovement'](!$gameSystem[_0x1e72('0x2b8')]());break;}}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x1ab'),_0x233656=>{VisuMZ[_0x1e72('0x223')](_0x233656,_0x233656);const _0x3aff83={'mapId':_0x233656[_0x1e72('0x387')],'eventId':_0x233656[_0x1e72('0x235')],'pageId':_0x233656[_0x1e72('0x28b')]};if(_0x3aff83['mapId']<=0x0)_0x3aff83[_0x1e72('0x8e')]=$gameMap?$gameMap['mapId']():0x1;$gameTemp[_0x1e72('0xd9')]()[_0x1e72('0x298')](_0x3aff83);}),PluginManager[_0x1e72('0x123')](pluginData['name'],'DashEnableToggle',_0x22895e=>{VisuMZ[_0x1e72('0x223')](_0x22895e,_0x22895e);switch(_0x22895e[_0x1e72('0x157')]){case _0x1e72('0x275'):$gameSystem[_0x1e72('0x228')](!![]);break;case _0x1e72('0x355'):$gameSystem[_0x1e72('0x228')](![]);break;case _0x1e72('0x23b'):$gameSystem[_0x1e72('0x228')](!$gameSystem[_0x1e72('0x1e3')]());break;}}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x18d'),_0x53e349=>{VisuMZ[_0x1e72('0x223')](_0x53e349,_0x53e349),_0x53e349[_0x1e72('0x387')]=_0x53e349[_0x1e72('0x387')]||$gameMap[_0x1e72('0x8e')](),$gameSystem[_0x1e72('0x2c4')](_0x53e349[_0x1e72('0x387')],_0x53e349[_0x1e72('0x235')],_0x53e349['IconIndex'],_0x53e349['IconBufferX'],_0x53e349['IconBufferY'],_0x53e349[_0x1e72('0x2d8')]);}),PluginManager[_0x1e72('0x123')](pluginData['name'],'EventIconDelete',_0x27ca65=>{VisuMZ[_0x1e72('0x223')](_0x27ca65,_0x27ca65),_0x27ca65[_0x1e72('0x387')]=_0x27ca65[_0x1e72('0x387')]||$gameMap[_0x1e72('0x8e')](),$gameSystem[_0x1e72('0xed')](_0x27ca65['MapId'],_0x27ca65['EventId']);}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x256'),_0x30196b=>{if($gameMap){if('FSqvu'===_0x1e72('0x216'))for(const _0x4816f3 of $gameMap[_0x1e72('0x1ef')]()){if(_0x1e72('0x1c1')===_0x1e72('0xd4')){function _0xbbddff(){const _0x55ac56=this[_0x1e72('0xd5')][_0x1e72('0x146')](0x0)[_0x1e72('0x175')]();for(const _0x5d6c18 of _0x55ac56){if(_0x5d6c18)return _0x5d6c18;}return null;}}else _0x4816f3[_0x1e72('0x154')]();}else{function _0x1804a4(){return this[_0x1e72('0x431')](_0x58e03f);}}}}),PluginManager[_0x1e72('0x123')](pluginData['name'],_0x1e72('0x180'),_0x280928=>{VisuMZ[_0x1e72('0x223')](_0x280928,_0x280928);switch(_0x280928[_0x1e72('0x1b9')]){case'Visible':$gameSystem[_0x1e72('0x9c')](!![]);break;case _0x1e72('0x3f3'):$gameSystem[_0x1e72('0x9c')](![]);break;case _0x1e72('0x23b'):$gameSystem[_0x1e72('0x9c')](!$gameSystem['eventLabelsVisible']());break;}}),PluginManager['registerCommand'](pluginData['name'],_0x1e72('0x150'),_0x1285d6=>{VisuMZ['ConvertParams'](_0x1285d6,_0x1285d6);if(!$gameMap)return;const _0x19c38f=$gameMap['event'](_0x1285d6[_0x1e72('0x235')]);if(_0x19c38f)_0x19c38f[_0x1e72('0x1dc')]();}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x1b7'),_0x4a78e7=>{VisuMZ['ConvertParams'](_0x4a78e7,_0x4a78e7);const _0x2da80b=_0x4a78e7['MapId']||$gameMap[_0x1e72('0x8e')](),_0x35f0d8=_0x4a78e7['EventId'];$gameSystem[_0x1e72('0x3fa')](_0x2da80b,_0x35f0d8);}),PluginManager['registerCommand'](pluginData[_0x1e72('0xba')],_0x1e72('0x191'),_0x16afdb=>{VisuMZ[_0x1e72('0x223')](_0x16afdb,_0x16afdb);const _0x202a0b=_0x16afdb['MapId']||$gameMap['mapId'](),_0x48bf2f=_0x16afdb[_0x1e72('0x235')]||0x1,_0x32667c=_0x16afdb['PosX']||0x0,_0xb105ba=_0x16afdb[_0x1e72('0x1a5')]||0x0,_0x5e723f=_0x16afdb[_0x1e72('0x49')]||0x2,_0x124390=((_0x16afdb[_0x1e72('0x28b')]||0x1)-0x1)['clamp'](0x0,0x13),_0x206d81=_0x16afdb['MoveRouteIndex']||0x0;$gameSystem[_0x1e72('0x224')](_0x202a0b,_0x48bf2f,_0x32667c,_0xb105ba,_0x5e723f,_0x124390,_0x206d81);}),PluginManager['registerCommand'](pluginData[_0x1e72('0xba')],_0x1e72('0x417'),_0x9882c=>{VisuMZ[_0x1e72('0x223')](_0x9882c,_0x9882c),_0x9882c[_0x1e72('0x387')]=_0x9882c[_0x1e72('0x387')]||$gameMap[_0x1e72('0x8e')]();const _0xb8e906=[_0x9882c[_0x1e72('0x387')],_0x9882c['EventId'],_0x9882c[_0x1e72('0xac')]],_0x37c7fb=_0x9882c[_0x1e72('0x1c6')],_0x31e474=$gameSelfSwitches[_0x1e72('0x17a')](_0xb8e906)||![];$gameSwitches[_0x1e72('0x17')](_0x37c7fb,_0x31e474);}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x134'),_0x4da65d=>{VisuMZ[_0x1e72('0x223')](_0x4da65d,_0x4da65d),_0x4da65d[_0x1e72('0x387')]=_0x4da65d[_0x1e72('0x387')]||$gameMap[_0x1e72('0x8e')]();const _0x5acc73=[_0x4da65d[_0x1e72('0x387')],_0x4da65d[_0x1e72('0x235')],'Self\x20Switch\x20%1'[_0x1e72('0x279')](_0x4da65d['SwitchId'])],_0x1672e9=_0x4da65d[_0x1e72('0x1c6')],_0x1c0f7d=$gameSelfSwitches['value'](_0x5acc73)||![];$gameSwitches[_0x1e72('0x17')](_0x1672e9,_0x1c0f7d);}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x2bf'),_0x1ad872=>{VisuMZ[_0x1e72('0x223')](_0x1ad872,_0x1ad872),_0x1ad872[_0x1e72('0x387')]=_0x1ad872[_0x1e72('0x387')]||$gameMap[_0x1e72('0x8e')]();const _0x30c95a=[_0x1ad872[_0x1e72('0x387')],_0x1ad872['EventId'],_0x1e72('0x389')[_0x1e72('0x279')](_0x1ad872['VariableId'])],_0x32cb21=_0x1ad872['TargetVariableId'],_0xc0892d=$gameSelfSwitches[_0x1e72('0x17a')](_0x30c95a)||![];$gameVariables[_0x1e72('0x17')](_0x32cb21,_0xc0892d);}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],'MorphEventTo',_0x4aba63=>{VisuMZ['ConvertParams'](_0x4aba63,_0x4aba63);if(!$gameMap)return;const _0x23d247=_0x4aba63[_0x1e72('0x194')];_0x4aba63['Step1MapId']=_0x4aba63[_0x1e72('0x40')]||$gameMap[_0x1e72('0x8e')](),_0x4aba63[_0x1e72('0x435')]=_0x4aba63[_0x1e72('0x435')]||$gameMap[_0x1e72('0x8e')](),_0x4aba63[_0x1e72('0x24b')]=_0x4aba63[_0x1e72('0x24b')][_0x1e72('0x1b0')]()[_0x1e72('0x398')]();if(!_0x23d247&&_0x4aba63[_0x1e72('0x40')]!==$gameMap['mapId']())return;if($gameMap[_0x1e72('0x8e')]()===_0x4aba63[_0x1e72('0x40')]){const _0x2c4aaa=$gameMap[_0x1e72('0x3d4')](_0x4aba63[_0x1e72('0x278')]);if(!_0x2c4aaa)return;if(_0x4aba63[_0x1e72('0x24b')]!==_0x1e72('0x322')){if(_0x1e72('0x2dc')==='MiJpo')_0x2c4aaa[_0x1e72('0x3ba')](_0x4aba63[_0x1e72('0x24b')]);else{function _0x315840(){return this[_0x1e72('0x24d')]();}}}else{if(_0x1e72('0xfb')!==_0x1e72('0x1f5'))_0x2c4aaa[_0x1e72('0x2a2')](_0x4aba63[_0x1e72('0x435')],_0x4aba63[_0x1e72('0x24')]);else{function _0x4b11bf(){const _0x2920df=['',_0x1e72('0x312'),_0x1e72('0xe5'),'MUSIC\x20NOTE',_0x1e72('0x139'),'ANGER','SWEAT',_0x1e72('0x83'),_0x1e72('0x34f'),_0x1e72('0x2b3'),_0x1e72('0x2fb'),'','','','',''][_0xcb593a];this[_0x1e72('0x3cb')](_0x2920df,_0x47e674);}}}}if(_0x23d247){if(_0x1e72('0x1b4')!=='nRLIT')$gameSystem[_0x1e72('0x430')](_0x4aba63[_0x1e72('0x40')],_0x4aba63[_0x1e72('0x278')],_0x4aba63[_0x1e72('0x24b')],_0x4aba63['Step2MapId'],_0x4aba63[_0x1e72('0x24')]);else{function _0x59420d(){if(this[_0x1e72('0xc7')]()&&this['getPose']()===_0x1e72('0x2fb'))return!![];return _0x376cdf[_0x1e72('0x1d7')][_0x1e72('0x98')]['call'](this);}}}}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x89'),_0x59bef4=>{VisuMZ['ConvertParams'](_0x59bef4,_0x59bef4);if(!$gameMap)return;_0x59bef4[_0x1e72('0x387')]=_0x59bef4[_0x1e72('0x387')]||$gameMap[_0x1e72('0x8e')]();if($gameMap[_0x1e72('0x8e')]()===_0x59bef4['MapId']){const _0x3ca93a=$gameMap[_0x1e72('0x3d4')](_0x59bef4['EventId']);_0x3ca93a[_0x1e72('0x346')]();}if(_0x59bef4[_0x1e72('0x35')]){if(_0x1e72('0x207')===_0x1e72('0x207'))$gameSystem['deletePreservedMorphEventDataKey'](_0x59bef4['MapId'],_0x59bef4['EventId']);else{function _0x31b670(){if(_0x1f22d3)this[_0x1e72('0x127')](_0x49d7d9['x'],_0x5cb15c['y']);}}}}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x1c8'),_0x21b44f=>{VisuMZ[_0x1e72('0x223')](_0x21b44f,_0x21b44f),$gameSystem[_0x1e72('0xf4')]($gamePlayer,_0x21b44f[_0x1e72('0x153')],_0x21b44f[_0x1e72('0x3ae')],_0x21b44f[_0x1e72('0x176')],_0x21b44f[_0x1e72('0x2d8')]);}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x1a4'),_0x30058d=>{VisuMZ[_0x1e72('0x223')](_0x30058d,_0x30058d),$gameSystem[_0x1e72('0xd3')]($gamePlayer);}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],'SelfSwitchABCD',_0x1c3986=>{VisuMZ[_0x1e72('0x223')](_0x1c3986,_0x1c3986),_0x1c3986[_0x1e72('0x387')]=_0x1c3986[_0x1e72('0x387')]||$gameMap['mapId']();const _0x174310=[_0x1c3986[_0x1e72('0x387')],_0x1c3986[_0x1e72('0x235')],_0x1c3986[_0x1e72('0xac')]];switch(_0x1c3986[_0x1e72('0x157')]){case'ON':$gameSelfSwitches[_0x1e72('0x17')](_0x174310,!![]);break;case _0x1e72('0x416'):$gameSelfSwitches[_0x1e72('0x17')](_0x174310,![]);break;case _0x1e72('0x23b'):$gameSelfSwitches[_0x1e72('0x17')](_0x174310,!$gameSelfSwitches[_0x1e72('0x17a')](_0x174310));break;}}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x3ec'),_0x583c25=>{VisuMZ[_0x1e72('0x223')](_0x583c25,_0x583c25),_0x583c25[_0x1e72('0x387')]=_0x583c25[_0x1e72('0x387')]||$gameMap['mapId']();const _0x4f05ed=[_0x583c25[_0x1e72('0x387')],_0x583c25[_0x1e72('0x235')],'Self\x20Switch\x20%1'[_0x1e72('0x279')](_0x583c25[_0x1e72('0x3bd')])];switch(_0x583c25['Value']){case'ON':$gameSelfSwitches['setValue'](_0x4f05ed,!![]);break;case _0x1e72('0x416'):$gameSelfSwitches[_0x1e72('0x17')](_0x4f05ed,![]);break;case _0x1e72('0x23b'):$gameSelfSwitches['setValue'](_0x4f05ed,!$gameSelfSwitches[_0x1e72('0x17a')](_0x4f05ed));break;}}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x3f9'),_0x958f22=>{VisuMZ[_0x1e72('0x223')](_0x958f22,_0x958f22);const _0x3f5473=[_0x958f22['MapId'],_0x958f22[_0x1e72('0x235')],'Self\x20Variable\x20%1'[_0x1e72('0x279')](_0x958f22[_0x1e72('0x59')])];_0x958f22[_0x1e72('0x387')]=_0x958f22[_0x1e72('0x387')]||$gameMap[_0x1e72('0x8e')]();const _0x1687d7=VisuMZ[_0x1e72('0x31f')]($gameSelfSwitches[_0x1e72('0x17a')](_0x3f5473),_0x958f22[_0x1e72('0x157')],_0x958f22[_0x1e72('0x52')]);$gameSelfSwitches[_0x1e72('0x17')](_0x3f5473,_0x1687d7);}),PluginManager['registerCommand'](pluginData[_0x1e72('0xba')],_0x1e72('0x407'),_0x4c85a0=>{VisuMZ[_0x1e72('0x223')](_0x4c85a0,_0x4c85a0);const _0x3633a6={'template':_0x4c85a0[_0x1e72('0x24b')],'mapId':_0x4c85a0[_0x1e72('0x387')],'eventId':_0x4c85a0[_0x1e72('0x235')],'x':_0x4c85a0['PosX'],'y':_0x4c85a0['PosY'],'spawnPreserved':_0x4c85a0[_0x1e72('0x15b')],'spawnEventId':$gameMap[_0x1e72('0xd5')][_0x1e72('0x2ef')]+0x3e8};$gameMap[_0x1e72('0x3bc')](_0x3633a6,_0x4c85a0[_0x1e72('0x19d')],_0x4c85a0['Passability']);}),PluginManager[_0x1e72('0x123')](pluginData['name'],_0x1e72('0x36c'),_0x1a5a5a=>{VisuMZ[_0x1e72('0x223')](_0x1a5a5a,_0x1a5a5a);const _0x4c7578={'template':_0x1a5a5a[_0x1e72('0x24b')],'mapId':_0x1a5a5a['MapId'],'eventId':_0x1a5a5a[_0x1e72('0x235')],'x':-0x1,'y':-0x1,'spawnPreserved':_0x1a5a5a['key'],'spawnEventId':$gameMap[_0x1e72('0xd5')][_0x1e72('0x2ef')]+0x3e8};$gameMap['prepareSpawnedEventAtRegion'](_0x4c7578,_0x1a5a5a[_0x1e72('0x388')],_0x1a5a5a[_0x1e72('0x19d')],_0x1a5a5a[_0x1e72('0x337')]);}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x9d'),_0x3994c9=>{VisuMZ[_0x1e72('0x223')](_0x3994c9,_0x3994c9),$gameMap['despawnEventId'](_0x3994c9[_0x1e72('0x292')]);}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0x3b2'),_0xcfeff5=>{VisuMZ['ConvertParams'](_0xcfeff5,_0xcfeff5);const _0x212883=_0xcfeff5[_0x1e72('0xee')],_0x2f56ee=_0xcfeff5['PosY'];$gameMap['despawnAtXY'](_0x212883,_0x2f56ee);}),PluginManager['registerCommand'](pluginData[_0x1e72('0xba')],_0x1e72('0x3d3'),_0x109d8e=>{VisuMZ[_0x1e72('0x223')](_0x109d8e,_0x109d8e),$gameMap[_0x1e72('0x14b')](_0x109d8e[_0x1e72('0x388')]);}),PluginManager[_0x1e72('0x123')](pluginData[_0x1e72('0xba')],_0x1e72('0xe0'),_0x1f8520=>{VisuMZ[_0x1e72('0x223')](_0x1f8520,_0x1f8520),$gameMap[_0x1e72('0x374')]();}),VisuMZ[_0x1e72('0x1d7')]['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x1e72('0x368')]['onDatabaseLoaded'],Scene_Boot['prototype']['onDatabaseLoaded']=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x373')][_0x1e72('0xe7')](this),this[_0x1e72('0x1d2')](),this[_0x1e72('0x63')]();if(VisuMZ['EventsMoveCore'][_0x1e72('0x7a')])VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')][_0x1e72('0x35c')]();},VisuMZ[_0x1e72('0x308')]=[],VisuMZ[_0x1e72('0x171')]={},Scene_Boot[_0x1e72('0x368')][_0x1e72('0x1d2')]=function(){if(DataManager[_0x1e72('0xf3')]()||DataManager[_0x1e72('0x1c3')]())return;const _0x28fa2b=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x315')],_0x4a7f54=_0x28fa2b[_0x1e72('0x178')]['slice'](0x0);for(const _0x4149e1 of _0x28fa2b['List']){if(_0x1e72('0x1db')!==_0x1e72('0x1db')){function _0x297fbf(){this[_0x1e72('0x35c')][_0x1e72('0x1e8')](this,arguments);}}else{_0x4149e1[_0x1e72('0x1ec')]=_0x4149e1[_0x1e72('0x1ec')]['toUpperCase']()[_0x1e72('0x398')](),VisuMZ[_0x1e72('0x171')][_0x4149e1['Name']]=_0x4149e1;if(!_0x4a7f54['includes'](_0x4149e1[_0x1e72('0x339')]))_0x4a7f54[_0x1e72('0x354')](_0x4149e1[_0x1e72('0x339')]);}}for(const _0x3b37f4 of _0x4a7f54){if(VisuMZ[_0x1e72('0x308')][_0x3b37f4])continue;const _0x39e0f5=_0x1e72('0x111')[_0x1e72('0x279')](_0x3b37f4['padZero'](0x3)),_0x300c51='$preloadedMap_%1'[_0x1e72('0x279')](_0x3b37f4);DataManager[_0x1e72('0x3c1')](_0x300c51,_0x39e0f5),setTimeout(this['VisuMZ_Setup_Preload_Map'][_0x1e72('0x1a1')](this,_0x3b37f4,_0x300c51),0x64);}},Scene_Boot[_0x1e72('0x368')][_0x1e72('0x244')]=function(_0x5938dd,_0x23e4d0){window[_0x23e4d0]?(VisuMZ[_0x1e72('0x308')][_0x5938dd]=window[_0x23e4d0],window[_0x23e4d0]=undefined):setTimeout(this[_0x1e72('0x244')][_0x1e72('0x1a1')](this,_0x5938dd,_0x23e4d0),0x64);},VisuMZ[_0x1e72('0xb6')]=[],VisuMZ[_0x1e72('0x198')]=[],VisuMZ[_0x1e72('0x3b9')]=[],VisuMZ[_0x1e72('0x24f')]=[],Scene_Boot['prototype']['process_VisuMZ_EventsMoveCore_Switches_Variables']=function(){for(let _0xe0647b=0x1;_0xe0647b<$dataSystem[_0x1e72('0x1bd')][_0x1e72('0x2ef')];_0xe0647b++){if(_0x1e72('0x211')!==_0x1e72('0x61')){if($dataSystem[_0x1e72('0x1bd')][_0xe0647b][_0x1e72('0x112')](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x1e72('0xb6')][_0x1e72('0x354')](_0xe0647b);if($dataSystem[_0x1e72('0x1bd')][_0xe0647b][_0x1e72('0x112')](/<SELF>/i))VisuMZ[_0x1e72('0x198')][_0x1e72('0x354')](_0xe0647b);}else{function _0x2ea419(){if(_0x3f9c14['isEventRunning']())return;if(_0x3905af[_0x1e72('0x33a')]())return;let _0x36d4bf=_0x1512c7[_0x1e72('0x1d7')][_0x1e72('0x18')]['RegionTouch'];const _0x11604b=_0x1e72('0x26a')[_0x1e72('0x279')](this['regionId']());_0x36d4bf[_0x11604b]&&_0x17e1a2[_0x1e72('0x17d')](_0x36d4bf[_0x11604b]);}}}for(let _0xd30e7d=0x1;_0xd30e7d<$dataSystem[_0x1e72('0x43c')][_0x1e72('0x2ef')];_0xd30e7d++){if(_0x1e72('0x79')!==_0x1e72('0x29e')){if($dataSystem[_0x1e72('0x43c')][_0xd30e7d][_0x1e72('0x112')](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ['AdvancedVariables'][_0x1e72('0x354')](_0xd30e7d);if($dataSystem[_0x1e72('0x43c')][_0xd30e7d][_0x1e72('0x112')](/<SELF>/i))VisuMZ[_0x1e72('0x24f')]['push'](_0xd30e7d);}else{function _0xa94180(){_0x1ba395[_0x1e72('0x223')](_0x17a303,_0x19b9ba),_0x453bce[_0x1e72('0x387')]=_0x6ed4c9[_0x1e72('0x387')]||_0x1651e1[_0x1e72('0x8e')]();const _0x13ec8c=[_0xe6675e[_0x1e72('0x387')],_0x20155e[_0x1e72('0x235')],'Self\x20Variable\x20%1'[_0x1e72('0x279')](_0x599576[_0x1e72('0x59')])],_0x4dd21d=_0x3c3716[_0x1e72('0x97')],_0x5dd6b5=_0x4efba6[_0x1e72('0x17a')](_0x13ec8c)||![];_0x2b866b[_0x1e72('0x17')](_0x4dd21d,_0x5dd6b5);}}}},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')]={},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')][_0x1e72('0x35c')]=function(){this[_0x1e72('0x2c2')]=new Game_CPCInterpreter(),this[_0x1e72('0x25d')]();},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')][_0x1e72('0x25d')]=function(){this[_0x1e72('0x60')]=[];for(const _0x29043b of $dataCommonEvents){if(_0x1e72('0x128')!==_0x1e72('0x3db')){if(!_0x29043b)continue;VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')]['loadCPC'](_0x29043b);if(_0x29043b[_0x1e72('0x165')][_0x1e72('0x2ef')]>0x0)this['_commonEvents'][_0x1e72('0x354')](_0x29043b['id']);}else{function _0x8282c8(){if(!_0x4303aa['isDashingEnabled']())return!![];return _0x5656fa[_0x1e72('0x1d7')][_0x1e72('0x1ba')][_0x1e72('0xe7')](this);}}}},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')][_0x1e72('0x1e')]=function(_0x5a04a6,_0x3e5993){return this[_0x1e72('0x2c2')][_0x1e72('0x23e')](_0x5a04a6,_0x3e5993),this[_0x1e72('0x2c2')]['execute'](),this[_0x1e72('0x2c2')][_0x1e72('0x3c9')];},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')][_0x1e72('0x14e')]=function(_0x55fba3){let _0x29ab4f=![];_0x55fba3[_0x1e72('0x165')]=[];for(const _0x10a75e of _0x55fba3[_0x1e72('0x67')]){if([0x6c,0x198]['includes'](_0x10a75e[_0x1e72('0x2c3')])){const _0x400444=_0x10a75e[_0x1e72('0x266')][0x0];if(_0x400444[_0x1e72('0x112')](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x29ab4f=!![];else _0x400444[_0x1e72('0x112')](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x29ab4f=![]);}_0x29ab4f&&_0x55fba3[_0x1e72('0x165')][_0x1e72('0x354')](_0x10a75e);}},getSelfSwitchValue=function(_0x50b3ef,_0x13267a,_0x7da814){let _0x5e3a2a=[_0x50b3ef,_0x13267a,_0x1e72('0x9b')[_0x1e72('0x279')](_0x7da814)];if(typeof _0x7da814==='string'){if('Imflk'!==_0x1e72('0x41f')){function _0x25562e(){const _0x41af56=_0x105209[_0x1e72('0x11c')](this[_0x1e72('0x3be')]()),_0x1e8fd2=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x41af56[_0x1e72('0xf1')]()];this[_0x1e72('0x283')](_0x1e8fd2);}}else _0x5e3a2a=[_0x50b3ef,_0x13267a,_0x7da814['toUpperCase']()[_0x1e72('0x398')]()];}return $gameSelfSwitches[_0x1e72('0x17a')](_0x5e3a2a);},getSelfVariableValue=function(_0x2587c3,_0xd123c8,_0x3cba68){const _0x371174=[_0x2587c3,_0xd123c8,'Self\x20Variable\x20%1'[_0x1e72('0x279')](_0x3cba68)];return $gameSelfSwitches[_0x1e72('0x17a')](_0x371174);},setSelfSwitchValue=function(_0x46f334,_0x4503f2,_0xe27b38,_0x43e682){let _0x771f36=[_0x46f334,_0x4503f2,_0x1e72('0x9b')[_0x1e72('0x279')](_0xe27b38)];typeof _0xe27b38==='string'&&(_0x771f36=[_0x46f334,_0x4503f2,_0xe27b38['toUpperCase']()[_0x1e72('0x398')]()]);},setSelfVariableValue=function(_0x3bd58e,_0x9f5f36,_0x288ad0,_0x4b024b){const _0x27ebb7=[_0x3bd58e,_0x9f5f36,'Self\x20Variable\x20%1'[_0x1e72('0x279')](_0x288ad0)];},DataManager[_0x1e72('0x2df')]=function(_0xbc7822){if(SceneManager['_scene'][_0x1e72('0x408')]===Scene_Debug)return![];return VisuMZ[_0x1e72('0xb6')][_0x1e72('0x2f4')](_0xbc7822);},DataManager[_0x1e72('0x11b')]=function(_0x4324ec){if(SceneManager[_0x1e72('0x350')][_0x1e72('0x408')]===Scene_Debug)return![];return VisuMZ[_0x1e72('0x3b9')][_0x1e72('0x2f4')](_0x4324ec);},DataManager[_0x1e72('0x276')]=function(_0x458520){if(SceneManager[_0x1e72('0x350')]['constructor']===Scene_Debug)return![];return VisuMZ[_0x1e72('0x198')][_0x1e72('0x2f4')](_0x458520);},DataManager[_0x1e72('0x29f')]=function(_0x54ee1a){if(SceneManager[_0x1e72('0x350')][_0x1e72('0x408')]===Scene_Debug)return![];return VisuMZ[_0x1e72('0x24f')][_0x1e72('0x2f4')](_0x54ee1a);},VisuMZ['EventsMoveCore'][_0x1e72('0x1fa')]=Game_Temp[_0x1e72('0x368')][_0x1e72('0x7')],Game_Temp['prototype'][_0x1e72('0x7')]=function(_0x4ed5de,_0x59cb2a){if(this['isEventClickTriggered'](_0x4ed5de,_0x59cb2a))return;VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x1fa')][_0x1e72('0xe7')](this,_0x4ed5de,_0x59cb2a);},Game_Temp['prototype']['isEventClickTriggered']=function(_0x207e5e,_0x34ea41){const _0x46f502=$gameMap[_0x1e72('0x2ce')](_0x207e5e,_0x34ea41);for(const _0x260c3b of _0x46f502){if(_0x1e72('0x14')!==_0x1e72('0x427')){if(_0x260c3b&&_0x260c3b[_0x1e72('0x1fb')]())return _0x260c3b['onClickTrigger'](),!![];}else{function _0x172509(){_0x2bb2d7['EventsMoveCore'][_0x1e72('0x7a')][_0x1e72('0x14e')](_0x1341d3);}}}return![];},Game_Temp[_0x1e72('0x368')][_0x1e72('0x209')]=function(_0x4f3645){this[_0x1e72('0x3ea')]=_0x4f3645;},Game_Temp['prototype']['getLastPluginCommandInterpreter']=function(){return this[_0x1e72('0x3ea')];},Game_Temp[_0x1e72('0x368')][_0x1e72('0x1de')]=function(_0x11092c){this[_0x1e72('0x338')]=_0x11092c;},Game_Temp[_0x1e72('0x368')]['clearSelfTarget']=function(){this[_0x1e72('0x338')]=undefined;},Game_Temp['prototype'][_0x1e72('0x179')]=function(){return this[_0x1e72('0x338')];},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x196')]=Game_System[_0x1e72('0x368')][_0x1e72('0x35c')],Game_System[_0x1e72('0x368')][_0x1e72('0x35c')]=function(){VisuMZ['EventsMoveCore'][_0x1e72('0x196')]['call'](this),this[_0x1e72('0xe8')]();},Game_System[_0x1e72('0x368')][_0x1e72('0xe8')]=function(){this[_0x1e72('0x3a2')]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this['_EventIcons']={},this['_MapSpawnedEventData']=[],this[_0x1e72('0x287')]={},this['_SavedEventLocations']={};},Game_System[_0x1e72('0x368')][_0x1e72('0x1e3')]=function(){if(this['_EventsMoveCoreSettings']===undefined)this[_0x1e72('0xe8')]();if(this[_0x1e72('0x3a2')]['DashingEnable']===undefined)this[_0x1e72('0xe8')]();return this[_0x1e72('0x3a2')]['DashingEnable'];},Game_System[_0x1e72('0x368')][_0x1e72('0x228')]=function(_0x3a2784){if(this[_0x1e72('0x3a2')]===undefined)this[_0x1e72('0xe8')]();if(this['_EventsMoveCoreSettings']['DashingEnable']===undefined)this['initEventsMoveCore']();this[_0x1e72('0x3a2')][_0x1e72('0x114')]=_0x3a2784;},Game_System[_0x1e72('0x368')][_0x1e72('0x2b8')]=function(){if(this[_0x1e72('0x3a2')]===undefined)this[_0x1e72('0xe8')]();if(this['_EventsMoveCoreSettings'][_0x1e72('0x23')]===undefined)this['initEventsMoveCore']();return this[_0x1e72('0x3a2')][_0x1e72('0x23')];},Game_System[_0x1e72('0x368')]['setAllowEventAutoMovement']=function(_0x37baa3){if(this['_EventsMoveCoreSettings']===undefined)this[_0x1e72('0xe8')]();if(this[_0x1e72('0x3a2')][_0x1e72('0x23')]===undefined)this[_0x1e72('0xe8')]();this[_0x1e72('0x3a2')][_0x1e72('0x23')]=_0x37baa3;},Game_System['prototype'][_0x1e72('0x36a')]=function(){if(this[_0x1e72('0x3a2')]===undefined)this[_0x1e72('0xe8')]();if(this[_0x1e72('0x3a2')][_0x1e72('0x42c')]===undefined)this[_0x1e72('0xe8')]();return this[_0x1e72('0x3a2')]['VisibleEventLabels'];},Game_System[_0x1e72('0x368')][_0x1e72('0x9c')]=function(_0x52c642){if(this[_0x1e72('0x3a2')]===undefined)this[_0x1e72('0xe8')]();if(this[_0x1e72('0x3a2')][_0x1e72('0x42c')]===undefined)this[_0x1e72('0xe8')]();this[_0x1e72('0x3a2')]['VisibleEventLabels']=_0x52c642;},Game_System[_0x1e72('0x368')][_0x1e72('0x26b')]=function(_0x28c33c){if(this[_0x1e72('0x18a')]===undefined)this['initEventsMoveCore']();if(!_0x28c33c)return null;if(_0x28c33c===$gamePlayer)return this[_0x1e72('0x18a')]['Player'];else{const _0x5583a2=_0x1e72('0xcd')['format'](_0x28c33c[_0x1e72('0x3b4')],_0x28c33c['_eventId']);return this[_0x1e72('0x18a')][_0x5583a2];}},Game_System[_0x1e72('0x368')][_0x1e72('0xf4')]=function(_0xb4601e,_0x2cbb6f,_0xfcb5e9,_0x33c706,_0x64f785){if(this[_0x1e72('0x18a')]===undefined)this[_0x1e72('0xe8')]();const _0x1b94a5=_0xb4601e===$gamePlayer?_0x1e72('0x2e9'):_0x1e72('0xcd')[_0x1e72('0x279')](_0xb4601e[_0x1e72('0x3b4')],_0xb4601e[_0x1e72('0x22b')]);this[_0x1e72('0x18a')][_0x1b94a5]={'iconIndex':_0x2cbb6f,'bufferX':_0xfcb5e9,'bufferY':_0x33c706,'blendMode':_0x64f785};},Game_System[_0x1e72('0x368')][_0x1e72('0x2c4')]=function(_0x4ec577,_0x5c5ed6,_0xc6b30f,_0x17aec5,_0x3fa83f,_0xe875ea){if(this[_0x1e72('0x18a')]===undefined)this[_0x1e72('0xe8')]();const _0x172e42='Map%1-Event%2'[_0x1e72('0x279')](_0x4ec577,_0x5c5ed6);this[_0x1e72('0x18a')][_0x172e42]={'iconIndex':_0xc6b30f,'bufferX':_0x17aec5,'bufferY':_0x3fa83f,'blendMode':_0xe875ea};},Game_System['prototype'][_0x1e72('0xd3')]=function(_0x59c9ea){if(this[_0x1e72('0x18a')]===undefined)this[_0x1e72('0xe8')]();if(!_0x59c9ea)return null;if(_0x59c9ea===$gamePlayer){if(_0x1e72('0x342')!==_0x1e72('0x342')){function _0x436fe6(){const _0x2bad54=this[_0x1e72('0x3d4')]()[_0x1e72('0x3b1')];if(_0x2bad54==='')return;this[_0x1e72('0x2dd')](_0x2bad54);}}else delete this['_EventIcons'][_0x1e72('0x2e9')];}else this[_0x1e72('0xed')](_0x59c9ea[_0x1e72('0x3b4')],_0x59c9ea[_0x1e72('0x22b')]);},Game_System[_0x1e72('0x368')][_0x1e72('0xed')]=function(_0x107ba4,_0x97bf62){if(this[_0x1e72('0x18a')]===undefined)this['initEventsMoveCore']();const _0xbbfcd7=_0x1e72('0xcd')[_0x1e72('0x279')](_0x107ba4,_0x97bf62);delete this[_0x1e72('0x18a')][_0xbbfcd7];},Game_System[_0x1e72('0x368')][_0x1e72('0x23c')]=function(_0x5006c6){if(this[_0x1e72('0x16f')]===undefined)this['initEventsMoveCore']();if(!_0x5006c6)return null;const _0x281e2c=_0x1e72('0xcd')[_0x1e72('0x279')](_0x5006c6[_0x1e72('0x3b4')],_0x5006c6[_0x1e72('0x22b')]);return this[_0x1e72('0x16f')][_0x281e2c];},Game_System[_0x1e72('0x368')][_0x1e72('0x1dc')]=function(_0x384038){if(this[_0x1e72('0x16f')]===undefined)this[_0x1e72('0xe8')]();if(!_0x384038)return;const _0x8d9eec=_0x1e72('0xcd')[_0x1e72('0x279')](_0x384038['_mapId'],_0x384038[_0x1e72('0x22b')]);this[_0x1e72('0x16f')][_0x8d9eec]={'direction':_0x384038[_0x1e72('0x1f')](),'x':Math[_0x1e72('0x7e')](_0x384038['x']),'y':Math['round'](_0x384038['y']),'pageIndex':_0x384038[_0x1e72('0xb9')],'moveRouteIndex':_0x384038[_0x1e72('0x172')]};},Game_System['prototype']['deleteSavedEventLocation']=function(_0x18d6d4){if(this[_0x1e72('0x16f')]===undefined)this['initEventsMoveCore']();if(!_0x18d6d4)return;this[_0x1e72('0x3fa')](_0x18d6d4[_0x1e72('0x3b4')],_0x18d6d4['_eventId']);},Game_System[_0x1e72('0x368')][_0x1e72('0x3fa')]=function(_0x4578c6,_0x44b545){if(this[_0x1e72('0x16f')]===undefined)this['initEventsMoveCore']();const _0x33f241=_0x1e72('0xcd')[_0x1e72('0x279')](_0x4578c6,_0x44b545);delete this[_0x1e72('0x16f')][_0x33f241];},Game_System['prototype'][_0x1e72('0x224')]=function(_0x4fb21d,_0x31329d,_0x19a3f7,_0x31a673,_0x511cfa,_0x1267e9,_0x3a5ed3){if(this[_0x1e72('0x16f')]===undefined)this[_0x1e72('0xe8')]();const _0x3da1c4=_0x1e72('0xcd')['format'](_0x4fb21d,_0x31329d);this[_0x1e72('0x16f')][_0x3da1c4]={'direction':_0x511cfa,'x':Math['round'](_0x19a3f7),'y':Math['round'](_0x31a673),'pageIndex':_0x1267e9,'moveRouteIndex':_0x3a5ed3};},Game_System[_0x1e72('0x368')][_0x1e72('0x20')]=function(_0x4afbd8){if(this[_0x1e72('0x287')]===undefined)this[_0x1e72('0xe8')]();if(!_0x4afbd8)return;const _0x3a538b='Map%1-Event%2'['format'](_0x4afbd8['_mapId'],_0x4afbd8[_0x1e72('0x22b')]);return this[_0x1e72('0x287')][_0x3a538b];},Game_System[_0x1e72('0x368')][_0x1e72('0x430')]=function(_0x4cea49,_0x49b9c5,_0x2a2969,_0x25b2d0,_0x3bf1f0){if(this[_0x1e72('0x287')]===undefined)this[_0x1e72('0xe8')]();const _0x4bd4e1=_0x1e72('0xcd')[_0x1e72('0x279')](_0x4cea49,_0x49b9c5);this['_PreservedEventMorphData'][_0x4bd4e1]={'template':_0x2a2969,'mapId':_0x25b2d0,'eventId':_0x3bf1f0};},Game_System[_0x1e72('0x368')][_0x1e72('0x158')]=function(_0x370cae,_0x15734d){if(this[_0x1e72('0x287')]===undefined)this[_0x1e72('0xe8')]();const _0xf84aed=_0x1e72('0xcd')[_0x1e72('0x279')](_0x370cae,_0x15734d);delete this[_0x1e72('0x287')][_0xf84aed];},Game_System[_0x1e72('0x368')]['getMapSpawnedEventData']=function(_0x1775f4){if(this[_0x1e72('0x8a')]===undefined)this['initEventsMoveCore']();return this[_0x1e72('0x8a')][_0x1775f4]=this[_0x1e72('0x8a')][_0x1775f4]||[],this['_MapSpawnedEventData'][_0x1775f4];},Game_System['prototype'][_0x1e72('0x2bd')]=function(_0x3f25b3){const _0xf8740b=this[_0x1e72('0x3d5')](_0x3f25b3);for(const _0x222f13 of _0xf8740b){if(!_0x222f13)continue;if(_0x222f13['_spawnPreserved'])continue;const _0x2b44f1=_0xf8740b[_0x1e72('0x160')](_0x222f13);_0xf8740b[_0x2b44f1]=null;}},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x5d')]=Game_Message[_0x1e72('0x368')][_0x1e72('0x1d9')],Game_Message[_0x1e72('0x368')]['add']=function(_0x39fd71){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x5d')][_0x1e72('0xe7')](this,_0x39fd71),this['_selfEvent']=$gameTemp[_0x1e72('0x179')]();},Game_Message['prototype'][_0x1e72('0x70')]=function(){$gameTemp[_0x1e72('0x1de')](this[_0x1e72('0x108')]);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x213')]=Game_Switches['prototype'][_0x1e72('0x17a')],Game_Switches[_0x1e72('0x368')][_0x1e72('0x17a')]=function(_0x41cf3d){if(DataManager[_0x1e72('0x2df')](_0x41cf3d)){if(_0x1e72('0x3dc')===_0x1e72('0x3dc'))return!!this[_0x1e72('0x2ee')](_0x41cf3d);else{function _0x4bdff6(){if(this[_0x1e72('0x18a')]===_0x48df2a)this[_0x1e72('0xe8')]();const _0x8b4bf7=_0x1e72('0xcd')[_0x1e72('0x279')](_0x3eb824,_0x941fe3);this[_0x1e72('0x18a')][_0x8b4bf7]={'iconIndex':_0x4b2669,'bufferX':_0x56c5e7,'bufferY':_0x4fe362,'blendMode':_0x4bd839};}}}else return DataManager[_0x1e72('0x276')](_0x41cf3d)?!!this[_0x1e72('0x8c')](_0x41cf3d):VisuMZ['EventsMoveCore'][_0x1e72('0x213')][_0x1e72('0xe7')](this,_0x41cf3d);},Game_Switches[_0x1e72('0x240')]={},Game_Switches['prototype'][_0x1e72('0x2ee')]=function(_0x12e6d0){if(!Game_Switches[_0x1e72('0x240')][_0x12e6d0]){if(_0x1e72('0xd1')!==_0x1e72('0x19f')){$dataSystem[_0x1e72('0x1bd')][_0x12e6d0][_0x1e72('0x112')](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x399ac6=_0x1e72('0x413')[_0x1e72('0x279')](String(RegExp['$1']));Game_Switches[_0x1e72('0x240')][_0x12e6d0]=new Function(_0x1e72('0x16a'),_0x399ac6);}else{function _0x172d47(){if(this[_0x1e72('0x16f')]===_0x5942fa)this[_0x1e72('0xe8')]();const _0x4a6e93=_0x1e72('0xcd')[_0x1e72('0x279')](_0x55ce30,_0x2b14ce);this['_SavedEventLocations'][_0x4a6e93]={'direction':_0x3f67cd,'x':_0x3d53ac[_0x1e72('0x7e')](_0xbcc0ec),'y':_0xb1904c[_0x1e72('0x7e')](_0x3d4710),'pageIndex':_0x5990ef,'moveRouteIndex':_0x3a72d7};}}}const _0x1760c8=$gameTemp['getSelfTarget']()||this;return Game_Switches['advancedFunc'][_0x12e6d0][_0x1e72('0xe7')](_0x1760c8,_0x12e6d0);},Game_Switches[_0x1e72('0x368')][_0x1e72('0x8c')]=function(_0x489d51){const _0x2933b9=$gameTemp[_0x1e72('0x179')]()||this;if(_0x2933b9[_0x1e72('0x408')]!==Game_Event){if('gguft'==='gguft')return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x213')][_0x1e72('0xe7')](this,_0x489d51);else{function _0x57db8c(){const _0x4436f5=this[_0x1e72('0x428')](this['direction']());return _0xa81d8c[_0x1e72('0x18e')](this['x'],_0x4436f5);}}}else{if(_0x1e72('0x93')!==_0x1e72('0x203')){const _0x419a90=[_0x2933b9[_0x1e72('0x3b4')],_0x2933b9[_0x1e72('0x22b')],'Self\x20Switch\x20%1'[_0x1e72('0x279')](_0x489d51)];return $gameSelfSwitches[_0x1e72('0x17a')](_0x419a90);}else{function _0x593f63(){_0x241b15=_0x191bec[_0x1e72('0xef')](_0x44ec25,_0x14e2d2);}}}},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x88')]=Game_Switches[_0x1e72('0x368')][_0x1e72('0x17')],Game_Switches['prototype']['setValue']=function(_0x17ff47,_0x1e6512){DataManager[_0x1e72('0x276')](_0x17ff47)?this[_0x1e72('0x263')](_0x17ff47,_0x1e6512):VisuMZ[_0x1e72('0x1d7')]['Game_Switches_setValue'][_0x1e72('0xe7')](this,_0x17ff47,_0x1e6512);},Game_Switches[_0x1e72('0x368')]['setSelfValue']=function(_0x302366,_0xb5ae24){const _0x54cd28=$gameTemp[_0x1e72('0x179')]()||this;if(_0x54cd28[_0x1e72('0x408')]!==Game_Event){if(_0x1e72('0x192')!==_0x1e72('0x1eb'))VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x88')][_0x1e72('0xe7')](this,_0x302366,_0xb5ae24);else{function _0x5483ee(){return this[_0x1e72('0x299')]()?(this[_0x1e72('0x21')]||'')['toUpperCase']()[_0x1e72('0x398')]():''[_0x1e72('0x1b0')]()[_0x1e72('0x398')]();}}}else{const _0x32ed97=[_0x54cd28[_0x1e72('0x3b4')],_0x54cd28['_eventId'],'Self\x20Switch\x20%1'[_0x1e72('0x279')](_0x302366)];$gameSelfSwitches[_0x1e72('0x17')](_0x32ed97,_0xb5ae24);}},VisuMZ[_0x1e72('0x1d7')]['Game_Variables_value']=Game_Variables['prototype']['value'],Game_Variables[_0x1e72('0x368')][_0x1e72('0x17a')]=function(_0x38ab23){if(DataManager[_0x1e72('0x11b')](_0x38ab23))return this['advancedValue'](_0x38ab23);else{if(DataManager['isSelfVariable'](_0x38ab23)){if(_0x1e72('0xfd')===_0x1e72('0xfd'))return this[_0x1e72('0x8c')](_0x38ab23);else{function _0x52dc85(){_0x1fe6b6[_0x1e72('0x1d7')][_0x1e72('0x1b5')][_0x1e72('0xe7')](this),this[_0x1e72('0xc1')]();}}}else return VisuMZ['EventsMoveCore']['Game_Variables_value'][_0x1e72('0xe7')](this,_0x38ab23);}},Game_Variables[_0x1e72('0x240')]={},Game_Variables[_0x1e72('0x368')][_0x1e72('0x2ee')]=function(_0x37f163){if(!Game_Variables[_0x1e72('0x240')][_0x37f163]){$dataSystem[_0x1e72('0x43c')][_0x37f163][_0x1e72('0x112')](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x1bccad=_0x1e72('0x413')[_0x1e72('0x279')](String(RegExp['$1']));Game_Variables[_0x1e72('0x240')][_0x37f163]=new Function(_0x1e72('0x170'),_0x1bccad);}const _0x544826=$gameTemp[_0x1e72('0x179')]()||this;return Game_Variables[_0x1e72('0x240')][_0x37f163]['call'](_0x544826,_0x37f163);},Game_Variables[_0x1e72('0x368')][_0x1e72('0x8c')]=function(_0x318db0){const _0x13e5b5=$gameTemp[_0x1e72('0x179')]()||this;if(_0x13e5b5[_0x1e72('0x408')]!==Game_Event)return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x3ed')][_0x1e72('0xe7')](this,_0x318db0);else{if(_0x1e72('0x215')!==_0x1e72('0x215')){function _0x5590a3(){_0x551571[_0x1e72('0x1d7')][_0x1e72('0x3fe')]['call'](this,_0x3e986b,_0x15050a);}}else{const _0x52c2aa=[_0x13e5b5[_0x1e72('0x3b4')],_0x13e5b5[_0x1e72('0x22b')],_0x1e72('0x389')['format'](_0x318db0)];return $gameSelfSwitches[_0x1e72('0x17a')](_0x52c2aa);}}},VisuMZ['EventsMoveCore'][_0x1e72('0x340')]=Game_Variables['prototype'][_0x1e72('0x17')],Game_Variables[_0x1e72('0x368')][_0x1e72('0x17')]=function(_0x417664,_0x5b878d){if(DataManager['isSelfVariable'](_0x417664))this[_0x1e72('0x263')](_0x417664,_0x5b878d);else{if('qnhuN'!==_0x1e72('0x3a8')){function _0x24ea2a(){return this[_0x1e72('0x16e')]()&&this[_0x1e72('0x40a')]()===_0x4de498[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x149')][_0x1e72('0x29')];}}else VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x340')][_0x1e72('0xe7')](this,_0x417664,_0x5b878d);}},Game_Variables['prototype'][_0x1e72('0x263')]=function(_0x2e2163,_0x5c0464){const _0xae85ea=$gameTemp[_0x1e72('0x179')]()||this;if(_0xae85ea[_0x1e72('0x408')]!==Game_Event){if(_0x1e72('0x4d')==='AiyRK')VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x340')][_0x1e72('0xe7')](this,_0x2e2163,_0x5c0464);else{function _0x3f2bb7(){const _0x848ec6=_0x483368(_0x33bb07['$1'])[_0x1e72('0x1b0')]()['trim']();return this[_0x1e72('0x3cb')](_0x848ec6);}}}else{if(_0x1e72('0x190')!==_0x1e72('0x1c')){const _0x20cee8=[_0xae85ea[_0x1e72('0x3b4')],_0xae85ea[_0x1e72('0x22b')],_0x1e72('0x389')['format'](_0x2e2163)];$gameSelfSwitches[_0x1e72('0x17')](_0x20cee8,_0x5c0464);}else{function _0x4118a4(){const _0x4f7bfd=[_0x54efcd,_0xc4a10e,_0x1e72('0x389')[_0x1e72('0x279')](_0x4e996b)];}}}},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2b5')]=Game_SelfSwitches[_0x1e72('0x368')]['value'],Game_SelfSwitches[_0x1e72('0x368')][_0x1e72('0x17a')]=function(_0x4a23cd){if(_0x4a23cd[0x2][_0x1e72('0x112')](/SELF/i))return this[_0x1e72('0x8c')](_0x4a23cd);else{if(_0x1e72('0x1b')===_0x1e72('0x1b')){return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2b5')]['call'](this,_0x4a23cd);;}else{function _0x10a5eb(){if(!this[_0x1e72('0x2c2')])return;if(!this[_0x1e72('0x30e')](!![]))return;if(!this[_0x1e72('0x8')](!![]))return;_0x4761d6[_0x1e72('0x1d7')][_0x1e72('0x3c8')][_0x1e72('0xe7')](this);}}}},Game_SelfSwitches[_0x1e72('0x368')][_0x1e72('0x8c')]=function(_0x34efe5){return _0x34efe5[0x2][_0x1e72('0x112')](/VAR/i)?this[_0x1e72('0x12d')][_0x34efe5]||0x0:!!this[_0x1e72('0x12d')][_0x34efe5];},VisuMZ['EventsMoveCore'][_0x1e72('0x3fe')]=Game_SelfSwitches[_0x1e72('0x368')][_0x1e72('0x17')],Game_SelfSwitches[_0x1e72('0x368')][_0x1e72('0x17')]=function(_0x2642c2,_0x3ecb2e){if(_0x2642c2[0x2][_0x1e72('0x112')](/SELF/i)){if(_0x1e72('0x402')!=='WTTGg')this['setSelfValue'](_0x2642c2,_0x3ecb2e);else{function _0xd795d7(){return this[_0x1e72('0x2ab')](_0xca6bde['$1'],_0x554534['$2']);}}}else VisuMZ[_0x1e72('0x1d7')]['Game_SelfSwitches_setValue'][_0x1e72('0xe7')](this,_0x2642c2,_0x3ecb2e);},Game_SelfSwitches['prototype'][_0x1e72('0x263')]=function(_0x4a7e79,_0x5d5c0f){this[_0x1e72('0x12d')][_0x4a7e79]=_0x4a7e79[0x2]['match'](/VAR/i)?_0x5d5c0f:!!_0x5d5c0f,this[_0x1e72('0x2c0')]();},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x1f8')]=Game_Enemy['prototype']['meetsSwitchCondition'],Game_Enemy[_0x1e72('0x368')][_0x1e72('0x10d')]=function(_0xa0f241){$gameTemp['registerSelfTarget'](this);const _0x158a18=VisuMZ[_0x1e72('0x1d7')]['Game_Enemy_meetsSwitchCondition'][_0x1e72('0xe7')](this,_0xa0f241);return $gameTemp[_0x1e72('0x1a')](),_0x158a18;},VisuMZ[_0x1e72('0x1d7')]['Game_Troop_meetsConditions']=Game_Troop[_0x1e72('0x368')]['meetsConditions'],Game_Troop[_0x1e72('0x368')][_0x1e72('0x1f1')]=function(_0x5e8a61){$gameTemp[_0x1e72('0x1de')](this);const _0x4f7d97=VisuMZ['EventsMoveCore'][_0x1e72('0x2d9')]['call'](this,_0x5e8a61);return $gameTemp[_0x1e72('0x1a')](),_0x4f7d97;},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x404')]=Game_Map[_0x1e72('0x368')][_0x1e72('0x23e')],Game_Map['prototype'][_0x1e72('0x23e')]=function(_0xc3fb33){this[_0x1e72('0x2bd')](_0xc3fb33),VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x404')][_0x1e72('0xe7')](this,_0xc3fb33),this[_0x1e72('0x3f4')](),this[_0x1e72('0x2f0')](),this[_0x1e72('0x2b0')](),this[_0x1e72('0x1ea')](),this['setupSaveEventLocations'](),this['setupSpawnedEvents']();},VisuMZ[_0x1e72('0x1d7')]['Game_Map_setupEvents']=Game_Map[_0x1e72('0x368')][_0x1e72('0x2f8')],Game_Map[_0x1e72('0x368')][_0x1e72('0x2f8')]=function(){VisuMZ['EventsMoveCore'][_0x1e72('0x304')]['call'](this),this[_0x1e72('0x107')]();},Game_Map[_0x1e72('0x347')]=0xc8,Game_Map['prototype'][_0x1e72('0x2f0')]=function(){const _0xfd2fcd=Game_Map['_eventOverloadThreshold'];this[_0x1e72('0x185')]=this[_0x1e72('0x1ef')]()[_0x1e72('0x2ef')]>_0xfd2fcd;if(this['_eventOverload']&&$gameTemp[_0x1e72('0x264')]()){}},Game_Map['prototype'][_0x1e72('0xc6')]=function(){return this['_eventOverload'];},Game_Map['prototype'][_0x1e72('0x3f4')]=function(){this[_0x1e72('0x390')]=undefined;},Game_Map[_0x1e72('0x368')][_0x1e72('0x2b0')]=function(){this[_0x1e72('0xb')]=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')][_0x1e72('0x1fc')];const _0x49086a=$dataMap[_0x1e72('0x3b1')]||'';if(_0x49086a[_0x1e72('0x112')](/<DIAGONAL MOVEMENT: ON>/i))this[_0x1e72('0xb')]=!![];else{if(_0x49086a['match'](/<DIAGONAL MOVEMENT: OFF>/i)){if(_0x1e72('0x2fc')===_0x1e72('0x2fc'))this[_0x1e72('0xb')]=![];else{function _0x291de0(){return this[_0x1e72('0x185')];}}}}},Game_Map[_0x1e72('0x368')][_0x1e72('0xa6')]=function(){if(this[_0x1e72('0xb')]===undefined)this['setupDiagonalSupport']();return this[_0x1e72('0xb')];},Game_Map['prototype']['roundXWithDirection']=function(_0x33592c,_0x39a41e){if([0x1,0x4,0x7]['includes'](_0x39a41e))_0x33592c-=0x1;if([0x3,0x6,0x9][_0x1e72('0x2f4')](_0x39a41e))_0x33592c+=0x1;return this[_0x1e72('0x361')](_0x33592c);},Game_Map[_0x1e72('0x368')][_0x1e72('0x3e5')]=function(_0x45d438,_0x54b679){if([0x1,0x2,0x3][_0x1e72('0x2f4')](_0x54b679))_0x45d438+=0x1;if([0x7,0x8,0x9][_0x1e72('0x2f4')](_0x54b679))_0x45d438-=0x1;return this[_0x1e72('0x423')](_0x45d438);},Game_Map[_0x1e72('0x368')][_0x1e72('0x1c5')]=function(_0x3b9c91,_0xabf497,_0x13288f,_0x68c21c){return Math[_0x1e72('0xef')](Math[_0x1e72('0x251')](this[_0x1e72('0x96')](_0x3b9c91,_0x13288f)),Math['abs'](this['deltaY'](_0xabf497,_0x68c21c)));},Game_Map[_0x1e72('0x368')][_0x1e72('0x1ea')]=function(){const _0x501b18=VisuMZ['EventsMoveCore'][_0x1e72('0x18')][_0x1e72('0x388')],_0x4d392c={},_0x5f470f=[_0x1e72('0x33c'),_0x1e72('0x227'),_0x1e72('0x2aa')],_0xfee89d=[_0x1e72('0x173'),_0x1e72('0x15c'),_0x1e72('0x2e9'),_0x1e72('0xf'),'Vehicle',_0x1e72('0x349'),_0x1e72('0x7f'),_0x1e72('0x117')];for(const _0x176768 of _0x5f470f){for(const _0x29a2b1 of _0xfee89d){const _0x3a7e07=_0x1e72('0x7d')[_0x1e72('0x279')](_0x29a2b1,_0x176768);_0x501b18[_0x3a7e07]&&(_0x4d392c[_0x3a7e07]=_0x501b18[_0x3a7e07]['slice'](0x0));}}const _0x4b05f8=$dataMap[_0x1e72('0x3b1')]||'',_0x1c0222=_0x4b05f8[_0x1e72('0x112')](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);if(_0x1c0222)for(const _0x1ee153 of _0x1c0222){_0x1ee153[_0x1e72('0x112')](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x4509ac=String(RegExp['$1'])[_0x1e72('0x2c6')]()[_0x1e72('0x398')](),_0x27398f=String(RegExp['$1'])['toLowerCase']()[_0x1e72('0x398')]();const _0x4b03cb=JSON['parse']('['+RegExp['$3']['match'](/\d+/g)+']');_0x4509ac=_0x4509ac[_0x1e72('0x15')](0x0)[_0x1e72('0x1b0')]()+_0x4509ac[_0x1e72('0x146')](0x1),_0x27398f=_0x27398f[_0x1e72('0x15')](0x0)[_0x1e72('0x1b0')]()+_0x27398f['slice'](0x1);const _0x1a6607=_0x1e72('0x7d')[_0x1e72('0x279')](_0x4509ac,_0x27398f);if(_0x4d392c[_0x1a6607])_0x4d392c[_0x1a6607]=_0x4d392c[_0x1a6607][_0x1e72('0x73')](_0x4b03cb);}this[_0x1e72('0x42f')]=_0x4d392c;},Game_Map['prototype']['isRegionAllowPass']=function(_0x3c4713,_0x487352,_0x3e0832,_0x271845){const _0x18837e=this[_0x1e72('0x18e')](_0x3c4713,_0x3e0832),_0x49da74=this['roundYWithDirection'](_0x487352,_0x3e0832),_0x4c817b=this[_0x1e72('0x3a1')](_0x18837e,_0x49da74),_0x1c2465=this[_0x1e72('0x42f')];if(_0x1c2465[_0x1e72('0x2e2')][_0x1e72('0x2f4')](_0x4c817b))return!![];else{if(_0x271845===_0x1e72('0x2f2'))return _0x1c2465[_0x1e72('0x76')]['includes'](_0x4c817b)||_0x1c2465[_0x1e72('0x3eb')][_0x1e72('0x2f4')](_0x4c817b);else{if(_0x271845===_0x1e72('0x3d4'))return _0x1c2465[_0x1e72('0xbd')][_0x1e72('0x2f4')](_0x4c817b)||_0x1c2465[_0x1e72('0x3eb')]['includes'](_0x4c817b);else{if(_0x1c2465[_0x1e72('0x42d')][_0x1e72('0x2f4')](_0x4c817b))return!![];else{const _0xc7dc36=_0x1e72('0x40e')[_0x1e72('0x279')](_0x271845[_0x1e72('0x15')](0x0)[_0x1e72('0x1b0')]()+_0x271845['slice'](0x1));if(_0x1c2465[_0xc7dc36])return _0x1c2465[_0xc7dc36][_0x1e72('0x2f4')](_0x4c817b);}}}}return![];},Game_Map[_0x1e72('0x368')][_0x1e72('0x13a')]=function(_0x3f7f97,_0x19d9eb,_0x2a73d4,_0x12c0e9){const _0x68b2f1=this[_0x1e72('0x18e')](_0x3f7f97,_0x2a73d4),_0x16893d=this[_0x1e72('0x3e5')](_0x19d9eb,_0x2a73d4),_0x256fa0=this[_0x1e72('0x3a1')](_0x68b2f1,_0x16893d),_0x293bd4=this['_regionRules'];if(_0x293bd4[_0x1e72('0x2be')][_0x1e72('0x2f4')](_0x256fa0))return!![];else{if(_0x12c0e9===_0x1e72('0x2f2')){if(_0x1e72('0xc9')===_0x1e72('0x409')){function _0x165f7d(){const _0x2f7f42=this['_eventCopyData'][_0x1e72('0x8e')],_0xee03e8=this[_0x1e72('0x1fe')][_0x1e72('0x31c')];return _0x2e6d45[_0x1e72('0x308')][_0x2f7f42][_0x1e72('0x1ef')][_0xee03e8];}}else return _0x293bd4[_0x1e72('0x31')][_0x1e72('0x2f4')](_0x256fa0)||_0x293bd4[_0x1e72('0x77')][_0x1e72('0x2f4')](_0x256fa0);}else{if(_0x12c0e9===_0x1e72('0x3d4'))return _0x293bd4['EventForbid'][_0x1e72('0x2f4')](_0x256fa0)||_0x293bd4[_0x1e72('0x77')]['includes'](_0x256fa0);else{if(_0x293bd4[_0x1e72('0x326')][_0x1e72('0x2f4')](_0x256fa0))return!![];else{if(_0x1e72('0x344')!==_0x1e72('0x14f')){const _0x41d907='%1Forbid'[_0x1e72('0x279')](_0x12c0e9[_0x1e72('0x15')](0x0)[_0x1e72('0x1b0')]()+_0x12c0e9[_0x1e72('0x146')](0x1));if(_0x293bd4[_0x41d907])return _0x293bd4[_0x41d907][_0x1e72('0x2f4')](_0x256fa0);}else{function _0x2a6efd(){if(_0x311b71)_0xad64dc[_0x1e72('0x3f4')]();_0x4c1b49[_0x1e72('0x1d7')]['Scene_Load_onLoadSuccess'][_0x1e72('0xe7')](this);}}}}}}return![];},Game_Map[_0x1e72('0x368')][_0x1e72('0x3c4')]=function(_0x3f91fe,_0x5e2d17,_0x1e4a68,_0x4c4690){_0x1e4a68=_0x4c4690===_0x1e72('0x316')?0x5:_0x1e4a68;const _0x561401=this[_0x1e72('0x18e')](_0x3f91fe,_0x1e4a68),_0x238c5f=this[_0x1e72('0x3e5')](_0x5e2d17,_0x1e4a68),_0x1f1df2=this['regionId'](_0x561401,_0x238c5f),_0x180837=this[_0x1e72('0x42f')];if(_0x180837[_0x1e72('0x226')][_0x1e72('0x2f4')](_0x1f1df2)){if('ByBVO'===_0x1e72('0x1ad'))return!![];else{function _0x30e9d3(){this['setSelfValue'](_0x59776c,_0x4fdc83);}}}else{const _0x5b2a72=_0x1e72('0x419')[_0x1e72('0x279')](_0x4c4690[_0x1e72('0x15')](0x0)[_0x1e72('0x1b0')]()+_0x4c4690[_0x1e72('0x146')](0x1));if(_0x180837[_0x5b2a72])return _0x180837[_0x5b2a72][_0x1e72('0x2f4')](_0x1f1df2);}return![];},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x399')]=Game_Map[_0x1e72('0x368')]['refresh'],Game_Map[_0x1e72('0x368')]['refresh']=function(){VisuMZ['EventsMoveCore'][_0x1e72('0x399')][_0x1e72('0xe7')](this),this['checkNeedForPeriodicRefresh']();},Game_Map['prototype']['checkNeedForPeriodicRefresh']=function(){this[_0x1e72('0x1d5')]=![];if(this['events']()[_0x1e72('0x2d3')](_0x2a4a8b=>_0x2a4a8b['hasAdvancedSwitchVariable']())){this[_0x1e72('0x1d5')]=!![];return;}if(this[_0x1e72('0x1ef')]()['some'](_0x22c7d0=>_0x22c7d0[_0x1e72('0x1e1')]())){if(_0x1e72('0x9f')===_0x1e72('0x3e3')){function _0x422897(){if(!this['isSpriteVS8dir']())_0x2771cf=this[_0x1e72('0x39d')](_0x565c34);_0x338615[_0x1e72('0x1d7')][_0x1e72('0x168')][_0x1e72('0xe7')](this,_0x1ed7f1);}}else{this['_needsPeriodicRefresh']=!![];return;}}if(this[_0x1e72('0x60')][_0x1e72('0x2d3')](_0x16e9bd=>_0x16e9bd[_0x1e72('0x33d')]())){this[_0x1e72('0x1d5')]=!![];return;}if(this[_0x1e72('0x60')][_0x1e72('0x2d3')](_0x39d467=>_0x39d467[_0x1e72('0x1e1')]())){this['_needsPeriodicRefresh']=!![];return;}},VisuMZ[_0x1e72('0x1d7')]['Game_Map_update']=Game_Map[_0x1e72('0x368')]['update'],Game_Map[_0x1e72('0x368')][_0x1e72('0xa4')]=function(_0x28f3d6){this[_0x1e72('0x6c')](),VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x133')]['call'](this,_0x28f3d6);},Game_Map[_0x1e72('0x368')][_0x1e72('0x6c')]=function(){if(!this['_needsPeriodicRefresh'])return;this[_0x1e72('0x22e')]=this['_periodicRefreshTimer']||0x3c,this[_0x1e72('0x22e')]--,this[_0x1e72('0x22e')]<=0x0&&(this[_0x1e72('0x380')](),this['_periodicRefreshTimer']=0x3c);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x1ba')]=Game_Map[_0x1e72('0x368')][_0x1e72('0x3cd')],Game_Map['prototype'][_0x1e72('0x3cd')]=function(){if(!$gameSystem[_0x1e72('0x1e3')]())return!![];return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x1ba')][_0x1e72('0xe7')](this);},Game_Map[_0x1e72('0x368')][_0x1e72('0x301')]=function(){this[_0x1e72('0x30f')]=![];const _0x5ceff4=$dataMap[_0x1e72('0x3b1')]||'';if(_0x5ceff4[_0x1e72('0x112')](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)){if('yAThx'!=='yAThx'){function _0x2f0108(){this[_0x1e72('0x2f9')]();}}else this[_0x1e72('0x30f')]=!![];}},Game_Map[_0x1e72('0x368')][_0x1e72('0x302')]=function(){if(this[_0x1e72('0x30f')]===undefined)this['setupSaveEventLocations']();return this[_0x1e72('0x30f')];},Game_Map[_0x1e72('0x368')][_0x1e72('0x2bd')]=function(_0x43a215){_0x43a215!==this[_0x1e72('0x8e')]()&&$gamePlayer&&$gameSystem[_0x1e72('0x2bd')](_0x43a215);},Game_Map[_0x1e72('0x368')]['setupSpawnedEvents']=function(){this[_0x1e72('0xd5')]=$gameSystem[_0x1e72('0x3d5')](this[_0x1e72('0x8e')]()),this['_needsRefresh']=!![];},VisuMZ[_0x1e72('0x1d7')]['Game_Map_events']=Game_Map[_0x1e72('0x368')][_0x1e72('0x1ef')],Game_Map[_0x1e72('0x368')][_0x1e72('0x1ef')]=function(){if(this[_0x1e72('0x390')])return this['_eventCache'];const _0xbb1aeb=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x65')][_0x1e72('0xe7')](this),_0x341c16=_0xbb1aeb[_0x1e72('0x73')](this[_0x1e72('0xd5')]||[]);return this['_eventCache']=_0x341c16[_0x1e72('0x1d6')](_0x38c2df=>!!_0x38c2df),this[_0x1e72('0x390')];},VisuMZ['EventsMoveCore'][_0x1e72('0x370')]=Game_Map[_0x1e72('0x368')]['event'],Game_Map[_0x1e72('0x368')][_0x1e72('0x3d4')]=function(_0x417ee2){if(_0x417ee2>=0x3e8)return _0x417ee2-=0x3e8,this[_0x1e72('0xd5')][_0x417ee2];else{if(_0x1e72('0x38e')!==_0x1e72('0x55'))return VisuMZ['EventsMoveCore']['Game_Map_event'][_0x1e72('0xe7')](this,_0x417ee2);else{function _0x3a0fe7(){if(this[_0x1e72('0x3be')]()>=0x0){const _0x331b0e=_0xe0db13[_0x1e72('0x11c')](this[_0x1e72('0x3be')]());if(_0x331b0e)return _0x331b0e[_0x1e72('0x2d5')]();}return _0x5e660f[_0x1e72('0x368')][_0x1e72('0x2d5')][_0x1e72('0xe7')](this);}}}},Game_Map[_0x1e72('0x368')]['eraseEvent']=function(_0x1a8d0a){const _0x1c77de=this[_0x1e72('0x3d4')](_0x1a8d0a);if(_0x1c77de)_0x1c77de['erase']();},Game_Map['prototype']['createSpawnedEventWithData']=function(_0x466ef3){$gameTemp[_0x1e72('0x33e')]=_0x466ef3;const _0x438289=new Game_Event(_0x466ef3[_0x1e72('0x8e')],_0x466ef3['eventId']);$gameTemp[_0x1e72('0x33e')]=undefined,this[_0x1e72('0xd5')][_0x1e72('0x354')](_0x438289),_0x438289['setupSpawn'](_0x466ef3),this[_0x1e72('0x3f4')]();},Game_Map[_0x1e72('0x368')][_0x1e72('0x3bc')]=function(_0xb0607e,_0x3b76df,_0x2735cc){const _0x3c6121=_0xb0607e['x'],_0x5d614f=_0xb0607e['y'];if(!this[_0x1e72('0x13')](_0x3c6121,_0x5d614f))return;if(_0x3b76df){if(_0x1e72('0x37')===_0x1e72('0x2d0')){function _0x5704e6(){this['_eventMorphData']=_0x9cf8b7,this[_0x1e72('0xb9')]=-0x2,this[_0x1e72('0x154')]();}}else{if(this['eventsXy'](_0x3c6121,_0x5d614f)['length']>0x0)return;if($gamePlayer['x']===_0x3c6121&&$gamePlayer['y']===_0x5d614f)return;if(this[_0x1e72('0x328')]()[_0x1e72('0x420')](_0x3c6121,_0x5d614f))return;if(this[_0x1e72('0x1ee')]()[_0x1e72('0x420')](_0x3c6121,_0x5d614f))return;}}if(_0x2735cc){if('MWNvw'!==_0x1e72('0xca')){function _0x1d628e(){_0x3397c3['x']=_0x450627?_0x4b094b[_0x1e72('0x219')]:0x0,_0x3b953d['y']=_0x599c2b?-this[_0x1e72('0x43d')]+_0xac2339['bufferY']:0x0;}}else{if(!this[_0x1e72('0xa1')](_0x3c6121,_0x5d614f))return;}}this['createSpawnedEventWithData'](_0xb0607e);},Game_Map[_0x1e72('0x368')][_0x1e72('0x255')]=function(_0x1ddde8,_0x27fb12,_0x2e6a9e,_0x16e69e){const _0x1450da=[],_0x129ae8=this[_0x1e72('0x3e4')](),_0x17b5a7=this[_0x1e72('0x43d')]();for(let _0x8ee108=0x0;_0x8ee108<_0x129ae8;_0x8ee108++){if('fqlNp'!==_0x1e72('0x29a')){function _0x4ef38b(){this[_0x1e72('0x232')]=0xff;}}else for(let _0x516173=0x0;_0x516173<_0x17b5a7;_0x516173++){if(_0x1e72('0x217')!==_0x1e72('0x2a')){if(!_0x27fb12[_0x1e72('0x2f4')](this[_0x1e72('0x3a1')](_0x8ee108,_0x516173)))continue;if(!this[_0x1e72('0x13')](_0x8ee108,_0x516173))continue;if(_0x2e6a9e){if(_0x1e72('0x32c')===_0x1e72('0x348')){function _0x24285d(){_0x5563cc[_0x1e72('0x1d7')][_0x1e72('0x33')][_0x1e72('0xe7')](this),this[_0x1e72('0x1f4')]();}}else{if(this[_0x1e72('0x2ce')](_0x8ee108,_0x516173)[_0x1e72('0x2ef')]>0x0)continue;if($gamePlayer['x']===_0x8ee108&&$gamePlayer['y']===_0x516173)continue;if(this[_0x1e72('0x328')]()['posNt'](_0x8ee108,_0x516173))continue;if(this[_0x1e72('0x1ee')]()[_0x1e72('0x420')](_0x8ee108,_0x516173))continue;}}if(_0x16e69e){if(!this[_0x1e72('0xa1')](_0x8ee108,_0x516173))continue;}_0x1450da[_0x1e72('0x354')]([_0x8ee108,_0x516173]);}else{function _0x46bfaa(){_0x53864e[_0x1e72('0x368')][_0x1e72('0x384')][_0x1e72('0xe7')](this);if([_0x1e72('0xa'),_0x1e72('0x81')][_0x1e72('0x2f4')](this['activationProximityType']()))return;_0x280d8e[_0x1e72('0xaf')]([0x2]);}}}}if(_0x1450da[_0x1e72('0x2ef')]>0x0){const _0x4ab35f=_0x1450da[Math[_0x1e72('0x1d3')](_0x1450da['length'])];_0x1ddde8['x']=_0x4ab35f[0x0],_0x1ddde8['y']=_0x4ab35f[0x1],this[_0x1e72('0x2ea')](_0x1ddde8);}},Game_Map[_0x1e72('0x368')]['isPassableByAnyDirection']=function(_0x203f17,_0x4bc4ca){if(this['isPassable'](_0x203f17,_0x4bc4ca,0x2))return!![];if(this[_0x1e72('0x152')](_0x203f17,_0x4bc4ca,0x4))return!![];if(this[_0x1e72('0x152')](_0x203f17,_0x4bc4ca,0x6))return!![];if(this[_0x1e72('0x152')](_0x203f17,_0x4bc4ca,0x8))return!![];return![];},Game_Map['prototype']['despawnEventId']=function(_0x26107c){if(_0x26107c<0x3e8)return;if(!this[_0x1e72('0xd5')])return;const _0x98b5b6=this[_0x1e72('0x3d4')](_0x26107c);_0x98b5b6[_0x1e72('0x197')](-0x1,-0x1),_0x98b5b6[_0x1e72('0x3fb')](),this['_spawnedEvents'][_0x26107c-0x3e8]=null,this[_0x1e72('0x3f4')]();},Game_Map['prototype'][_0x1e72('0x200')]=function(){for(const _0x37e375 of this[_0x1e72('0xd5')]){if(_0x37e375)return _0x37e375;}return null;},Game_Map[_0x1e72('0x368')][_0x1e72('0x75')]=function(){const _0x8fe76d=this[_0x1e72('0x200')]();return _0x8fe76d?_0x8fe76d['_eventId']:0x0;},Game_Map[_0x1e72('0x368')][_0x1e72('0x118')]=function(){const _0x474b7b=this[_0x1e72('0xd5')][_0x1e72('0x146')](0x0)[_0x1e72('0x175')]();for(const _0x4d07d6 of _0x474b7b){if(_0x1e72('0x169')===_0x1e72('0x169')){if(_0x4d07d6)return _0x4d07d6;}else{function _0x2e7600(){_0xe0c125[_0x2257b0]['f']<_0x506784[_0x152781]['f']&&(_0x3411b3=_0x1f77e4);}}}return null;},Game_Map[_0x1e72('0x368')][_0x1e72('0x249')]=function(){const _0x17988d=this[_0x1e72('0x118')]();return _0x17988d?_0x17988d[_0x1e72('0x22b')]:0x0;},Game_Map[_0x1e72('0x368')][_0x1e72('0x1f3')]=function(_0x449125,_0x22f1af){const _0x48ea20=this[_0x1e72('0x2ce')](_0x449125,_0x22f1af);for(const _0xa5ea23 of _0x48ea20){if(!_0xa5ea23)continue;if(_0xa5ea23[_0x1e72('0x1df')]())this[_0x1e72('0x3ce')](_0xa5ea23['_eventId']);}},Game_Map['prototype']['despawnRegions']=function(_0x2b8c4a){for(const _0x43cf67 of this[_0x1e72('0xd5')]){if(_0x1e72('0x341')!=='gaEYO'){if(!_0x43cf67)continue;_0x2b8c4a[_0x1e72('0x2f4')](_0x43cf67[_0x1e72('0x3a1')]())&&this['despawnEventId'](_0x43cf67[_0x1e72('0x22b')]);}else{function _0x51a63d(){this['startCallEvent']();}}}},Game_Map[_0x1e72('0x368')][_0x1e72('0x374')]=function(){for(const _0x4d9f42 of this[_0x1e72('0xd5')]){if(!_0x4d9f42)continue;this[_0x1e72('0x3ce')](_0x4d9f42[_0x1e72('0x22b')]);}},Game_CommonEvent['prototype']['hasAdvancedSwitchVariable']=function(){const _0x44dee9=this[_0x1e72('0x3d4')]();return this[_0x1e72('0x8b')]()&&_0x44dee9[_0x1e72('0x21b')]>=0x1&&DataManager['isAdvancedSwitch'](_0x44dee9[_0x1e72('0x16a')]);},Game_CommonEvent[_0x1e72('0x368')]['hasCPCs']=function(){return VisuMZ[_0x1e72('0x1d7')]['CustomPageConditions'][_0x1e72('0x60')][_0x1e72('0x2f4')](this[_0x1e72('0x204')]);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x6d')]=Game_CommonEvent[_0x1e72('0x368')][_0x1e72('0x8b')],Game_CommonEvent['prototype'][_0x1e72('0x8b')]=function(){return VisuMZ['EventsMoveCore'][_0x1e72('0x6d')][_0x1e72('0xe7')](this)?!![]:VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')][_0x1e72('0x1e')](this[_0x1e72('0x3d4')]()[_0x1e72('0x165')],this['_commonEventId']);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2a3')]=Game_Map[_0x1e72('0x368')][_0x1e72('0x164')],Game_Map[_0x1e72('0x368')][_0x1e72('0x164')]=function(){const _0x5ba20b=VisuMZ[_0x1e72('0x1d7')]['Game_Map_parallelCommonEvents'][_0x1e72('0xe7')](this),_0x163314=VisuMZ['EventsMoveCore'][_0x1e72('0x7a')][_0x1e72('0x60')]['map'](_0x3145c7=>$dataCommonEvents[_0x3145c7]);return _0x5ba20b[_0x1e72('0x73')](_0x163314)[_0x1e72('0x1d6')]((_0x179740,_0x32b3e7,_0x159c36)=>_0x159c36['indexOf'](_0x179740)===_0x32b3e7);},VisuMZ['EventsMoveCore'][_0x1e72('0x258')]=Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x9')],Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x9')]=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x258')]['call'](this),this['initEventsMoveCoreSettings']();},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x1d1')]=function(){this[_0x1e72('0x151')]=![],this['clearPose'](),this[_0x1e72('0x2b6')](),this[_0x1e72('0x208')](),this[_0x1e72('0x234')]();},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x299')]=function(){if(this[_0x1e72('0x408')]===Game_Player&&this[_0x1e72('0x3b0')]()){if(_0x1e72('0x40d')==='kzglr')return this[_0x1e72('0x3ef')]()[_0x1e72('0x284')]()['match'](/\[VS8\]/i);else{function _0x27f451(){return _0x225a79[_0x1e72('0x1d7')]['Settings']['Label'][_0x1e72('0x25c')];}}}else{if(Imported[_0x1e72('0x393')]&&this[_0x1e72('0x148')]()){if(_0x1e72('0x392')===_0x1e72('0x392'))return!![];else{function _0x1452e1(){const _0x753f26=_0x3eadce['round'](_0x37f609(_0x19b4b0['$1'])/0x64*0xff);return this[_0x1e72('0x3b')](_0x753f26[_0x1e72('0x3e2')](0x0,0xff));}}}else{if(_0x1e72('0xdc')!==_0x1e72('0x2b4'))return this['characterName']()[_0x1e72('0x112')](/\[VS8\]/i);else{function _0x30b7f2(){return this[_0x1e72('0x299')]()&&!!this[_0x1e72('0x21')];}}}}},VisuMZ[_0x1e72('0x1d7')]['Game_CharacterBase_direction']=Game_CharacterBase['prototype'][_0x1e72('0x1f')],Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x1f')]=function(){if(this[_0x1e72('0x16e')]()&&!this[_0x1e72('0x129')]()&&this['isSpriteVS8dir']()){if('YaJhD'!==_0x1e72('0x4b')){function _0x28d8d4(){return this['processMoveRouteMoveRepeat'](0x8,_0xd33dfb(_0x7dfd5e['$1']));}}else return this[_0x1e72('0x303')]();}else{if(this['isOnLadder']()&&!this[_0x1e72('0x129')]())return 0x8;else return this[_0x1e72('0xc7')]()&&this['isSpriteVS8dir']()?this[_0x1e72('0x24d')]():VisuMZ['EventsMoveCore']['Game_CharacterBase_direction'][_0x1e72('0xe7')](this);}},VisuMZ[_0x1e72('0x1d7')]['Game_CharacterBase_setDirection']=Game_CharacterBase[_0x1e72('0x368')]['setDirection'],Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0xaa')]=function(_0x9790fe){if(!this['isSpriteVS8dir']())_0x9790fe=this[_0x1e72('0x39d')](_0x9790fe);VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x168')][_0x1e72('0xe7')](this,_0x9790fe);},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x39d')]=function(_0x317d30){if(_0x317d30===0x1)return this[_0x1e72('0x343')](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x317d30===0x3)return this[_0x1e72('0x343')](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x317d30===0x7)return this[_0x1e72('0x343')](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x317d30===0x9)return this[_0x1e72('0x343')](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x317d30;},Game_CharacterBase[_0x1e72('0x368')]['isDiagonalDirection']=function(_0x3582f3){return[0x1,0x3,0x5,0x7,0x9][_0x1e72('0x2f4')](_0x3582f3);},Game_CharacterBase['prototype'][_0x1e72('0xf1')]=function(){return this[_0x1e72('0x19b')]||0x0;},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2b2')]=Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x2fa')],Game_CharacterBase['prototype'][_0x1e72('0x2fa')]=function(_0x421f9f){this[_0x1e72('0x19b')]=_0x421f9f,VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2b2')][_0x1e72('0xe7')](this,_0x421f9f);},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x283')]=function(_0x371982){if(!this['isDiagonalDirection'](_0x371982))return this[_0x1e72('0x2fa')](_0x371982);let _0x452ec9=0x0,_0x584641=0x0;switch(_0x371982){case 0x1:_0x452ec9=0x4,_0x584641=0x2;break;case 0x3:_0x452ec9=0x6,_0x584641=0x2;break;case 0x7:_0x452ec9=0x4,_0x584641=0x8;break;case 0x9:_0x452ec9=0x6,_0x584641=0x8;break;}if(VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')][_0x1e72('0x189')]){if(!this[_0x1e72('0x343')](this['_x'],this['_y'],_0x452ec9))return this['moveStraight'](_0x584641);if(!this[_0x1e72('0x343')](this['_x'],this['_y'],_0x584641))return this[_0x1e72('0x2fa')](_0x452ec9);if(!this['canPassDiagonally'](this['_x'],this['_y'],_0x452ec9,_0x584641)){if('KkGUU'===_0x1e72('0x163')){let _0x2c1fcf=VisuMZ['EventsMoveCore'][_0x1e72('0x18')]['Movement']['FavorHorz']?_0x452ec9:_0x584641;return this[_0x1e72('0x2fa')](_0x2c1fcf);}else{function _0x218b81(){this[_0x1e72('0x2ac')]=_0x3cc7a0;const _0x44b0af=new _0x3ce522(0x0,0x0,_0x22ff9e[_0x1e72('0x305')]/0x4,this[_0x1e72('0x2b')](0x1));_0x5d7060[_0x1e72('0x368')][_0x1e72('0x35c')][_0x1e72('0xe7')](this,_0x44b0af),this['setBackgroundType'](0x2),this[_0x1e72('0x2cd')]='';}}}}this['_lastMovedDirection']=_0x371982,this[_0x1e72('0x136')](_0x452ec9,_0x584641);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0xf7')]=Game_CharacterBase[_0x1e72('0x368')]['realMoveSpeed'],Game_CharacterBase['prototype'][_0x1e72('0x2d5')]=function(){let _0x398029=this[_0x1e72('0x27a')];if(this['isDashing']()){if(_0x1e72('0xc8')===_0x1e72('0x13d')){function _0xcd0d8e(){const _0x36ce89=_0x2cb256[_0x1e72('0x3d4')](_0x1a8229(_0x2c379a['$1']));return this[_0x1e72('0x18c')](_0x36ce89);}}else _0x398029+=this[_0x1e72('0x274')]();}return this[_0x1e72('0x351')](_0x398029);},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x274')]=function(){const _0x201bc7=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')];return _0x201bc7['DashModifier']!==undefined?_0x201bc7[_0x1e72('0x1dd')]:VisuMZ[_0x1e72('0x1d7')][_0x1e72('0xf7')][_0x1e72('0xe7')](this)-this[_0x1e72('0x27a')];},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x351')]=function(_0x42b6f8){const _0x2a099b=VisuMZ['EventsMoveCore'][_0x1e72('0x18')][_0x1e72('0x199')];if(!_0x2a099b[_0x1e72('0x20e')])return _0x42b6f8;return[0x1,0x3,0x7,0x9][_0x1e72('0x2f4')](this[_0x1e72('0x19b')])&&(_0x42b6f8*=_0x2a099b['DiagonalSpeedMultiplier']||0.01),_0x42b6f8;},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x422')]=Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x2f')],Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x2f')]=function(){if(this[_0x1e72('0x27e')])return!![];return VisuMZ[_0x1e72('0x1d7')]['Game_CharacterBase_isDashing'][_0x1e72('0xe7')](this);},Game_CharacterBase[_0x1e72('0x368')]['isDashingAndMoving']=function(){return this[_0x1e72('0x2f')]();},VisuMZ[_0x1e72('0x1d7')]['Game_CharacterBase_pattern']=Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x29b')],Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x29b')]=function(){if(this['isPosing']()){if(_0x1e72('0xb7')===_0x1e72('0x1ed')){function _0x3597ec(){this['turnLeft90']();}}else return this['getPosingCharacterPattern']();}else return VisuMZ[_0x1e72('0x1d7')]['Game_CharacterBase_pattern']['call'](this);},VisuMZ['EventsMoveCore']['Game_CharacterBase_increaseSteps']=Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x384')],Game_CharacterBase[_0x1e72('0x368')]['increaseSteps']=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x415')]['call'](this),this[_0x1e72('0x121')]();},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x12')]=Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x254')],Game_CharacterBase[_0x1e72('0x368')]['characterIndex']=function(){if(this[_0x1e72('0x299')]())return this[_0x1e72('0x124')]();return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x12')]['call'](this);},Game_CharacterBase[_0x1e72('0x368')]['characterIndexVS8']=function(){const _0x29954e=this[_0x1e72('0x1f')]();if(this[_0x1e72('0x129')]()){if([0x2,0x4,0x6,0x8][_0x1e72('0x2f4')](_0x29954e))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x29954e))return 0x5;}else{if(this['isOnLadder']())return 0x6;else{if(this[_0x1e72('0xc7')]()){if(_0x1e72('0x2f5')!==_0x1e72('0x2f5')){function _0x3080c9(){this[_0x1e72('0xc5')]=this['_characterSprites']||[];const _0xede15b=new _0x3e9603(_0x4774f3);this[_0x1e72('0xc5')][_0x1e72('0x354')](_0xede15b),this[_0x1e72('0x2ba')][_0x1e72('0x2fe')](_0xede15b),this[_0x1e72('0x331')](_0xede15b),this['createLabelWindowForTarget'](_0x7ba4ab),_0xede15b['update']();}}else return this[_0x1e72('0x37b')]();}else{if(this[_0x1e72('0x5')]()&&this[_0x1e72('0x36f')]()){if([0x2,0x4,0x6,0x8]['includes'](_0x29954e))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x29954e))return 0x5;}else{if(this[_0x1e72('0x356')]()){if([0x2,0x4,0x6,0x8][_0x1e72('0x2f4')](_0x29954e))return 0x2;if([0x1,0x3,0x7,0x9]['includes'](_0x29954e))return 0x3;}else{if([0x2,0x4,0x6,0x8][_0x1e72('0x2f4')](_0x29954e))return 0x0;if([0x1,0x3,0x7,0x9][_0x1e72('0x2f4')](_0x29954e))return 0x1;}}}}}},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x36f')]=function(){return VisuMZ['EventsMoveCore'][_0x1e72('0x18')][_0x1e72('0x1b1')][_0x1e72('0x247')];},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x167')]=function(){return this[_0x1e72('0x16e')]()&&this[_0x1e72('0x40a')]()===VisuMZ['EventsMoveCore'][_0x1e72('0x18')][_0x1e72('0x149')][_0x1e72('0x29')];},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x303')]=function(){if(this[_0x1e72('0x167')]()){if(_0x1e72('0xbb')!==_0x1e72('0x282'))return 0x4;else{function _0x4d8b8c(){return this['_characterName']&&this[_0x1e72('0x19')][_0x1e72('0x112')](/\[VS8\]/i);}}}else return 0x2;},VisuMZ[_0x1e72('0x1d7')]['Game_CharacterBase_update']=Game_CharacterBase[_0x1e72('0x368')]['update'],Game_CharacterBase['prototype'][_0x1e72('0xa4')]=function(){VisuMZ['EventsMoveCore'][_0x1e72('0x252')]['call'](this),this[_0x1e72('0x42b')]();},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x42b')]=function(){this[_0x1e72('0x381')]=this[_0x1e72('0x381')]||0x0;if(this[_0x1e72('0x381')]>0x0){this[_0x1e72('0x381')]--;if(this[_0x1e72('0x381')]<=0x0&&this[_0x1e72('0x21')]!==_0x1e72('0x2fb'))this['clearPose']();}},VisuMZ[_0x1e72('0x1d7')]['Game_CharacterBase_moveDiagonally']=Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x136')],Game_CharacterBase[_0x1e72('0x368')]['moveDiagonally']=function(_0x52dcca,_0x3aa7ec){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x3')][_0x1e72('0xe7')](this,_0x52dcca,_0x3aa7ec);if(this[_0x1e72('0x299')]())this[_0x1e72('0x1f2')](_0x52dcca,_0x3aa7ec);},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x1f2')]=function(_0xd5cac9,_0x35e72d){if(_0xd5cac9===0x4&&_0x35e72d===0x2)this[_0x1e72('0xaa')](0x1);if(_0xd5cac9===0x6&&_0x35e72d===0x2)this[_0x1e72('0xaa')](0x3);if(_0xd5cac9===0x4&&_0x35e72d===0x8)this['setDirection'](0x7);if(_0xd5cac9===0x6&&_0x35e72d===0x8)this[_0x1e72('0xaa')](0x9);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x98')]=Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x10e')],Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x10e')]=function(){if(this['isPosing']()&&this[_0x1e72('0xa7')]()===_0x1e72('0x2fb'))return!![];return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x98')]['call'](this);},Game_CharacterBase['prototype']['setPose']=function(_0x38a30b,_0x568963){if(_0x38a30b['match'](/Z/i))_0x38a30b=_0x1e72('0x2fb');if(_0x38a30b[_0x1e72('0x112')](/SLEEP/i))_0x38a30b=_0x1e72('0x2fb');this[_0x1e72('0x299')]()&&(this[_0x1e72('0x21')]=_0x38a30b['toUpperCase']()[_0x1e72('0x398')](),this[_0x1e72('0x381')]=_0x568963||Infinity);},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0xa7')]=function(){if(this[_0x1e72('0x299')]()){if(_0x1e72('0x92')===_0x1e72('0x26d')){function _0x524261(){const _0x4e1256=_0x2ca47d[_0x1e72('0x1d7')]['Settings'][_0x1e72('0x199')];return _0x4e1256[_0x1e72('0x1dd')]!==_0x1f2ef8?_0x4e1256['DashModifier']:_0x3025df[_0x1e72('0x1d7')][_0x1e72('0xf7')][_0x1e72('0xe7')](this)-this[_0x1e72('0x27a')];}}else return(this[_0x1e72('0x21')]||'')[_0x1e72('0x1b0')]()[_0x1e72('0x398')]();}else{if('dCKaK'!==_0x1e72('0x195')){function _0x329861(){return this['moveStraight'](_0x405fff);}}else return''[_0x1e72('0x1b0')]()[_0x1e72('0x398')]();}},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x1be')]=function(_0x28325c,_0x40bf89){if(this[_0x1e72('0x299')]()){if(_0x1e72('0xe')==='fdhXJ'){function _0x44d93a(){this[_0x1e72('0x2bd')](_0x388da0),_0x431f90[_0x1e72('0x1d7')]['Game_Map_setup'][_0x1e72('0xe7')](this,_0x433e58),this[_0x1e72('0x3f4')](),this[_0x1e72('0x2f0')](),this[_0x1e72('0x2b0')](),this[_0x1e72('0x1ea')](),this[_0x1e72('0x301')](),this[_0x1e72('0x16b')]();}}else{const _0x578eb2=['',_0x1e72('0x312'),_0x1e72('0xe5'),_0x1e72('0x17b'),'HEART',_0x1e72('0x3af'),_0x1e72('0x369'),_0x1e72('0x83'),_0x1e72('0x34f'),_0x1e72('0x2b3'),_0x1e72('0x2fb'),'','','','',''][_0x28325c];this[_0x1e72('0x3cb')](_0x578eb2,_0x40bf89);}}},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x121')]=function(){this[_0x1e72('0x21')]='',this[_0x1e72('0x381')]=0x0;},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0xc7')]=function(){return this[_0x1e72('0x299')]()&&!!this[_0x1e72('0x21')];},Game_CharacterBase[_0x1e72('0x368')]['getPosingCharacterIndex']=function(){const _0x558677=this[_0x1e72('0x21')][_0x1e72('0x1b0')]();switch(this['_pose']['toUpperCase']()[_0x1e72('0x398')]()){case _0x1e72('0x2a4'):case _0x1e72('0x3f6'):case _0x1e72('0x34b'):case'HURT':case'KNEEL':case _0x1e72('0x30b'):return 0x6;break;default:return 0x7;break;}},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x24d')]=function(){switch(this[_0x1e72('0x21')][_0x1e72('0x1b0')]()){case _0x1e72('0x312'):case _0x1e72('0xe5'):case _0x1e72('0x17b'):return 0x2;break;case _0x1e72('0x139'):case _0x1e72('0x3af'):case _0x1e72('0x369'):return 0x4;break;case'ITEM':case _0x1e72('0x3f6'):case _0x1e72('0x34b'):case _0x1e72('0x83'):case _0x1e72('0x34f'):case'LIGHT\x20BULB':return 0x6;break;case _0x1e72('0xa9'):case _0x1e72('0x3b5'):case _0x1e72('0x30b'):case _0x1e72('0x2fb'):case'SLEEP':return 0x8;break;default:return VisuMZ['EventsMoveCore'][_0x1e72('0x168')][_0x1e72('0xe7')](this);break;}},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x405')]=function(){switch(this[_0x1e72('0x21')]['toUpperCase']()){case'ITEM':case _0x1e72('0xa9'):case _0x1e72('0x312'):case _0x1e72('0x139'):case _0x1e72('0x83'):return 0x0;break;case _0x1e72('0x3f6'):case _0x1e72('0x3b5'):case _0x1e72('0xe5'):case _0x1e72('0x3af'):case _0x1e72('0x34f'):return 0x1;break;case'VICTORY':case _0x1e72('0x30b'):case'MUSIC\x20NOTE':case _0x1e72('0x369'):case _0x1e72('0x2b3'):return 0x2;break;default:return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0xe9')][_0x1e72('0xe7')](this);break;}},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x425')]=function(){this['_forceDashing']=!![];},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x2b6')]=function(){this['_forceDashing']=![];},Game_CharacterBase[_0x1e72('0x368')]['isShadowVisible']=function(){if(this[_0x1e72('0xd2')]())return![];if(this[_0x1e72('0xe6')])return![];if(this[_0x1e72('0x250')])return![];if(this[_0x1e72('0x19')]==='')return![];if(this['constructor']===Game_Vehicle)return![];return!![];},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x6e')]=function(){if(this[_0x1e72('0x16e')]())return!![];if(this[_0x1e72('0x408')]===Game_Player&&this[_0x1e72('0x3b0')]())return!![];return![];},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0xcf')]=function(){return VisuMZ[_0x1e72('0x1d7')]['Settings'][_0x1e72('0x199')][_0x1e72('0x132')];},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x3c6')]=function(){return this[_0x1e72('0x438')]();},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x11')]=function(){return this[_0x1e72('0x2d')]()+this[_0x1e72('0x41b')]()+this[_0x1e72('0x1a2')]();},Game_Character[_0x1e72('0x368')][_0x1e72('0x253')]=function(_0x5210a8,_0x4ed24a){const _0x1f20c7=this[_0x1e72('0x38a')](),_0x381486=$gameMap[_0x1e72('0x3e4')](),_0x8d3510=[],_0x434eb0=[],_0x35df0f=[],_0x158178={};let _0x33d206=_0x158178;if(this['x']===_0x5210a8&&this['y']===_0x4ed24a)return 0x0;_0x158178['parent']=null,_0x158178['x']=this['x'],_0x158178['y']=this['y'],_0x158178['g']=0x0,_0x158178['f']=$gameMap['distance'](_0x158178['x'],_0x158178['y'],_0x5210a8,_0x4ed24a),_0x8d3510[_0x1e72('0x354')](_0x158178),_0x434eb0[_0x1e72('0x354')](_0x158178['y']*_0x381486+_0x158178['x']);while(_0x8d3510[_0x1e72('0x2ef')]>0x0){if(_0x1e72('0x1d8')===_0x1e72('0x358')){function _0x4d8241(){const _0x4e7440=this[_0x1e72('0x200')]();return _0x4e7440?_0x4e7440[_0x1e72('0x22b')]:0x0;}}else{let _0x145989=0x0;for(let _0x34287d=0x0;_0x34287d<_0x8d3510[_0x1e72('0x2ef')];_0x34287d++){if(_0x1e72('0x429')==='HyKHp'){function _0x46de34(){if(_0x1c9664[_0x1e72('0x112')](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x1762c7=_0x1c0331(_0x330dd5['$1'])[_0x1e72('0x2c6')]()[_0x1e72('0x398')](),_0x51e0d2=_0x24e99e(_0x1aedb6['$2']);this[_0x1e72('0x9a')][_0x1762c7]=_0x51e0d2;}}}else{if(_0x8d3510[_0x34287d]['f']<_0x8d3510[_0x145989]['f']){if(_0x1e72('0x122')===_0x1e72('0x122'))_0x145989=_0x34287d;else{function _0x16dea9(){_0x37fff5[_0x1e72('0x223')](_0xa8e5ce,_0x204f3d);const _0x351a5a={'template':_0x1573ca[_0x1e72('0x24b')],'mapId':_0x2a2c8f['MapId'],'eventId':_0x164cd7[_0x1e72('0x235')],'x':_0x498109[_0x1e72('0xee')],'y':_0x5044d3['PosY'],'spawnPreserved':_0x447128['key'],'spawnEventId':_0x46a2f7[_0x1e72('0xd5')][_0x1e72('0x2ef')]+0x3e8};_0x50b876[_0x1e72('0x3bc')](_0x351a5a,_0x4abcff[_0x1e72('0x19d')],_0x712d6f[_0x1e72('0x337')]);}}}}}const _0x234029=_0x8d3510[_0x145989],_0x54afa5=_0x234029['x'],_0x2f0545=_0x234029['y'],_0x461977=_0x2f0545*_0x381486+_0x54afa5,_0x2ee981=_0x234029['g'];_0x8d3510[_0x1e72('0x1ac')](_0x145989,0x1),_0x434eb0[_0x1e72('0x1ac')](_0x434eb0[_0x1e72('0x160')](_0x461977),0x1),_0x35df0f[_0x1e72('0x354')](_0x461977);if(_0x234029['x']===_0x5210a8&&_0x234029['y']===_0x4ed24a){if(_0x1e72('0x20f')!==_0x1e72('0x20f')){function _0x40b1e9(){_0x2ed3b6[_0x1e72('0x223')](_0xd579f9,_0x43bea7),_0x40e6a4[_0x1e72('0x387')]=_0x1a3eb9[_0x1e72('0x387')]||_0x43c45e[_0x1e72('0x8e')](),_0x3923ba[_0x1e72('0xed')](_0x10e3e8[_0x1e72('0x387')],_0x31d8e4[_0x1e72('0x235')]);}}else{_0x33d206=_0x234029;break;}}if(_0x2ee981>=_0x1f20c7)continue;for(let _0x20aec8=0x1;_0x20aec8<0xa;_0x20aec8++){if('ZxWOP'===_0x1e72('0x32e')){function _0x33c9e8(){this[_0x1e72('0x271')][_0x1e72('0x406')]=0x0;}}else{if(_0x20aec8===0x5)continue;const _0x48cf1c=_0x20aec8,_0xa73609=[0x0,0x4,0x0,0x6,0x4,0x0,0x6,0x4,0x0,0x6][_0x20aec8],_0x357b28=[0x0,0x2,0x2,0x2,0x0,0x0,0x0,0x8,0x8,0x8][_0x20aec8],_0xcf0a08=$gameMap[_0x1e72('0x18e')](_0x54afa5,_0x48cf1c),_0x1eed09=$gameMap['roundYWithDirection'](_0x2f0545,_0x48cf1c),_0xa320d=_0x1eed09*_0x381486+_0xcf0a08;if(_0x35df0f[_0x1e72('0x2f4')](_0xa320d)){if(_0x1e72('0x1aa')!==_0x1e72('0x147'))continue;else{function _0x1d1fc9(){_0x4e95b2[_0x1e72('0x368')]['updateMove'][_0x1e72('0xe7')](this),this[_0x1e72('0x94')]();}}}if(this[_0x1e72('0x408')]===Game_Player&&VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')][_0x1e72('0x189')]){if(!this[_0x1e72('0x343')](_0x54afa5,_0x2f0545,_0xa73609))continue;if(!this[_0x1e72('0x343')](_0x54afa5,_0x2f0545,_0x357b28))continue;}if(!this[_0x1e72('0x3f0')](_0x54afa5,_0x2f0545,_0xa73609,_0x357b28))continue;const _0x440e95=_0x2ee981+0x1,_0x1c284d=_0x434eb0[_0x1e72('0x160')](_0xa320d);if(_0x1c284d<0x0||_0x440e95<_0x8d3510[_0x1c284d]['g']){let _0x366d64={};if(_0x1c284d>=0x0){if('hIEQn'!==_0x1e72('0x69'))_0x366d64=_0x8d3510[_0x1c284d];else{function _0x4a3146(){if([0x2,0x4,0x6,0x8][_0x1e72('0x2f4')](_0x1b7b31))return 0x4;if([0x1,0x3,0x7,0x9][_0x1e72('0x2f4')](_0x48f91e))return 0x5;}}}else{if(_0x1e72('0x1cf')===_0x1e72('0x2ff')){function _0x4b2e35(){return _0x5fe40[_0x1e72('0x1dd')];}}else _0x8d3510['push'](_0x366d64),_0x434eb0[_0x1e72('0x354')](_0xa320d);}_0x366d64[_0x1e72('0x1af')]=_0x234029,_0x366d64['x']=_0xcf0a08,_0x366d64['y']=_0x1eed09,_0x366d64['g']=_0x440e95,_0x366d64['f']=_0x440e95+$gameMap[_0x1e72('0xde')](_0xcf0a08,_0x1eed09,_0x5210a8,_0x4ed24a),(!_0x33d206||_0x366d64['f']-_0x366d64['g']<_0x33d206['f']-_0x33d206['g'])&&(_0x33d206=_0x366d64);}}}}}let _0xb7aaf8=_0x33d206;while(_0xb7aaf8[_0x1e72('0x1af')]&&_0xb7aaf8[_0x1e72('0x1af')]!==_0x158178){_0xb7aaf8=_0xb7aaf8[_0x1e72('0x1af')];}const _0x3dee6b=$gameMap['deltaX'](_0xb7aaf8['x'],_0x158178['x']),_0x1ac8e7=$gameMap[_0x1e72('0x2ae')](_0xb7aaf8['y'],_0x158178['y']);if(_0x3dee6b<0x0&&_0x1ac8e7>0x0)return 0x1;if(_0x3dee6b>0x0&&_0x1ac8e7>0x0)return 0x3;if(_0x3dee6b<0x0&&_0x1ac8e7<0x0)return 0x7;if(_0x3dee6b>0x0&&_0x1ac8e7<0x0)return 0x9;if(_0x1ac8e7>0x0)return 0x2;if(_0x3dee6b<0x0)return 0x4;if(_0x3dee6b>0x0)return 0x6;if(_0x1ac8e7<0x0)return 0x8;const _0x201068=this[_0x1e72('0xa3')](_0x5210a8),_0x588abb=this['deltaYFrom'](_0x4ed24a);if(Math[_0x1e72('0x251')](_0x201068)>Math[_0x1e72('0x251')](_0x588abb)){if(_0x1e72('0x32b')===_0x1e72('0x68')){function _0x168912(){return this[_0x1e72('0x167')]()?0x4:0x2;}}else return _0x201068>0x0?0x4:0x6;}else{if(_0x588abb!==0x0)return _0x588abb>0x0?0x8:0x2;}return 0x0;},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x1bb')]=Game_CharacterBase['prototype'][_0x1e72('0x343')],Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x343')]=function(_0x561ac1,_0x345a3a,_0x55972a){if(this[_0x1e72('0x319')]===_0x1e72('0x316')){if(_0x1e72('0x142')!==_0x1e72('0x2f7'))return this['vehicle']()['isAirshipPassable'](_0x561ac1,_0x345a3a,_0x55972a);else{function _0x2d7532(){this['_labelWindow'][_0x1e72('0x126')]=_0x1f50b9(_0x1ef4ed['$1'])[_0x1e72('0x398')]();}}}else{if(_0x1e72('0x335')===_0x1e72('0x335'))return VisuMZ[_0x1e72('0x1d7')]['Game_CharacterBase_canPass'][_0x1e72('0xe7')](this,_0x561ac1,_0x345a3a,_0x55972a);else{function _0x40f1e9(){_0x2447ad+=_0x40f06f[_0x1e72('0x266')][0x0];}}}},Game_CharacterBase['prototype'][_0x1e72('0x208')]=function(){this[_0x1e72('0x359')]=0x0,this['_spriteOffsetY']=0x0;},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x103')]=Game_CharacterBase['prototype'][_0x1e72('0x438')],Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x438')]=function(){return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x103')][_0x1e72('0xe7')](this)+(this[_0x1e72('0x359')]||0x0);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x64')]=Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x2d')],Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x2d')]=function(){return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x64')][_0x1e72('0xe7')](this)+(this['_spriteOffsetY']||0x0);},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x234')]=function(){this[_0x1e72('0x333')]='';},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x3e1')]=Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0xf8')],Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0xf8')]=function(){if(this[_0x1e72('0x151')])return;if(this[_0x1e72('0x28c')]())return;VisuMZ['EventsMoveCore']['Game_CharacterBase_updatePattern'][_0x1e72('0xe7')](this);},Game_CharacterBase['prototype'][_0x1e72('0x28c')]=function(){if(!this[_0x1e72('0x10e')]()&&this[_0x1e72('0x26c')]>0x0)return![];switch(String(this[_0x1e72('0x333')])['toUpperCase']()[_0x1e72('0x398')]()){case _0x1e72('0x353'):this['_pattern']+=0x1;if(this[_0x1e72('0x3c2')]>0x2)this[_0x1e72('0x1a9')](0x0);break;case _0x1e72('0x222'):this['_pattern']-=0x1;if(this[_0x1e72('0x3c2')]<0x0)this[_0x1e72('0x1a9')](0x2);break;case'SPIN\x20CLOCKWISE':case _0x1e72('0x294'):this[_0x1e72('0x1bc')]();break;case _0x1e72('0x15a'):case _0x1e72('0x3e9'):case _0x1e72('0x42a'):case'SPIN\x20ACW':this[_0x1e72('0x2ca')]();break;default:return![];}return!![];},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x26b')]=function(){return $gameSystem[_0x1e72('0x26b')](this);},Game_CharacterBase[_0x1e72('0x368')]['hasEventIcon']=function(){const _0x2bfadf=this[_0x1e72('0x26b')]();if(!_0x2bfadf)return![];return _0x2bfadf[_0x1e72('0x99')]>0x0;},Game_CharacterBase[_0x1e72('0x368')]['frontX']=function(){const _0x18f0f6=this[_0x1e72('0x1f')]();return $gameMap[_0x1e72('0x18e')](this['x'],_0x18f0f6);},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x1c9')]=function(){const _0x25d2ee=this['direction']();return $gameMap[_0x1e72('0x3e5')](this['y'],_0x25d2ee);},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x6a')]=function(){const _0x4a54c2=this[_0x1e72('0x428')](this[_0x1e72('0x1f')]());return $gameMap[_0x1e72('0x18e')](this['x'],_0x4a54c2);},Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x2e5')]=function(){const _0x446101=this['reverseDir'](this[_0x1e72('0x1f')]());return $gameMap[_0x1e72('0x3e5')](this['y'],_0x446101);},VisuMZ[_0x1e72('0x1d7')]['Game_Character_setMoveRoute']=Game_Character['prototype'][_0x1e72('0xbc')],Game_Character[_0x1e72('0x368')][_0x1e72('0xbc')]=function(_0x3e9670){route=JsonEx[_0x1e72('0xf6')](_0x3e9670),VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x3d2')][_0x1e72('0xe7')](this,route);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x3c0')]=Game_Character[_0x1e72('0x368')][_0x1e72('0x334')],Game_Character[_0x1e72('0x368')][_0x1e72('0x334')]=function(_0x21a0c6){route=JsonEx['makeDeepCopy'](_0x21a0c6),VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x3c0')][_0x1e72('0xe7')](this,route);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0xa8')]=Game_Character['prototype'][_0x1e72('0xc2')],Game_Character[_0x1e72('0x368')][_0x1e72('0xc2')]=function(_0x342a81){const _0x31ed5f=Game_Character,_0x1af105=_0x342a81['parameters'];if(_0x342a81[_0x1e72('0x2c3')]===_0x31ed5f[_0x1e72('0x144')]){const _0x573b54=_0x342a81['parameters'][0x0];this[_0x1e72('0x1ae')](_0x342a81,_0x573b54);}else VisuMZ[_0x1e72('0x1d7')][_0x1e72('0xa8')][_0x1e72('0xe7')](this,_0x342a81);},Game_Character[_0x1e72('0x368')]['processMoveCommandEventsMoveCore']=function(_0x486e88,_0x32f2df){if(_0x32f2df[_0x1e72('0x112')](/ANIMATION:[ ](\d+)/i))return this[_0x1e72('0x27')](Number(RegExp['$1']));if(_0x32f2df[_0x1e72('0x112')](/BALLOON:[ ](.*)/i))return this[_0x1e72('0x159')](String(RegExp['$1']));if(_0x32f2df[_0x1e72('0x112')](/HUG:[ ]LEFT/i))return this[_0x1e72('0x3f1')](_0x1e72('0xa0'));if(_0x32f2df[_0x1e72('0x112')](/HUG:[ ]RIGHT/i))return this[_0x1e72('0x3f1')](_0x1e72('0x10f'));if(_0x32f2df[_0x1e72('0x112')](/INDEX:[ ](\d+)/i)){if(_0x1e72('0x66')==='FoiAq'){function _0x14f61f(){if(this[_0x1e72('0x3a2')]===_0x55d56c)this[_0x1e72('0xe8')]();if(this[_0x1e72('0x3a2')]['DashingEnable']===_0x14463e)this[_0x1e72('0xe8')]();return this['_EventsMoveCoreSettings'][_0x1e72('0x114')];}}else return this[_0x1e72('0x36d')](Number(RegExp['$1']));}if(_0x32f2df[_0x1e72('0x112')](/INDEX:[ ]([\+\-]\d+)/i)){if(_0x1e72('0x3a5')!==_0x1e72('0x3a5')){function _0x40ebe3(){if(_0x12f04a)return _0x4cd74e;}}else{const _0x53ceca=this[_0x1e72('0xc3')]+Number(RegExp['$1']);return this[_0x1e72('0x36d')](_0x53ceca);}}if(_0x32f2df[_0x1e72('0x112')](/JUMP FORWARD:[ ](\d+)/i)){if(_0x1e72('0x1cd')!=='Ywlcb'){function _0xf07f05(){return this[_0x1e72('0x2f')]();}}else return this[_0x1e72('0x6f')](Number(RegExp['$1']));}if(_0x32f2df['match'](/JUMP TO:[ ](\d+),[ ](\d+)/i)){if(_0x1e72('0x31e')===_0x1e72('0x31e'))return this[_0x1e72('0x37f')](Number(RegExp['$1']),Number(RegExp['$2']));else{function _0x55e7a4(){return this[_0x1e72('0xaa')](0x9);}}}if(_0x32f2df[_0x1e72('0x112')](/JUMP TO EVENT:[ ](\d+)/i)){if(_0x1e72('0x47')!==_0x1e72('0x1a7')){const _0x936361=$gameMap[_0x1e72('0x3d4')](Number(RegExp['$1']));return this['processMoveRouteJumpToCharacter'](_0x936361);}else{function _0x331083(){const _0x1d6da1=_0x57ec3a[_0x1e72('0x179')]()||this;if(_0x1d6da1[_0x1e72('0x408')]!==_0x3bbd85)return _0x515b83[_0x1e72('0x1d7')][_0x1e72('0x213')][_0x1e72('0xe7')](this,_0x11957e);else{const _0x757927=[_0x1d6da1['_mapId'],_0x1d6da1[_0x1e72('0x22b')],_0x1e72('0x9b')['format'](_0x2d877f)];return _0x5b0ec9[_0x1e72('0x17a')](_0x757927);}}}}if(_0x32f2df[_0x1e72('0x112')](/JUMP TO PLAYER/i))return this['processMoveRouteJumpToCharacter']($gamePlayer);if(_0x32f2df[_0x1e72('0x112')](/MOVE[ ](.*)[ ]UNTIL STOP/i)){if('GWfNP'==='BZTGi'){function _0x115831(){this[_0x1e72('0x26')]();}}else{const _0x57775e=String(RegExp['$1']);return this[_0x1e72('0x2de')](_0x57775e);}}if(_0x32f2df[_0x1e72('0x112')](/MOVE TO:[ ](\d+),[ ](\d+)/i)){const _0x3e51e2=Number(RegExp['$1']),_0x423ac2=Number(RegExp['$2']);return this[_0x1e72('0xb8')](_0x3e51e2,_0x423ac2);}if(_0x32f2df[_0x1e72('0x112')](/MOVE TO EVENT:[ ](\d+)/i)){const _0x4cc8df=$gameMap[_0x1e72('0x3d4')](Number(RegExp['$1']));return this[_0x1e72('0x18c')](_0x4cc8df);}if(_0x32f2df[_0x1e72('0x112')](/MOVE TO PLAYER/i))return this[_0x1e72('0x18c')]($gamePlayer);if(_0x32f2df[_0x1e72('0x112')](/MOVE LOWER LEFT:[ ](\d+)/i)){if(_0x1e72('0x424')!==_0x1e72('0x13b'))return this['processMoveRouteMoveRepeat'](0x1,Number(RegExp['$1']));else{function _0x231b27(){if(this[_0x1e72('0x18a')]===_0x19c855)this[_0x1e72('0xe8')]();const _0x3457cf=_0x106fcf===_0xdab95e?_0x1e72('0x2e9'):_0x1e72('0xcd')[_0x1e72('0x279')](_0x36ecb2['_mapId'],_0x2696d9[_0x1e72('0x22b')]);this[_0x1e72('0x18a')][_0x3457cf]={'iconIndex':_0x1272bf,'bufferX':_0x26e53c,'bufferY':_0x80bf,'blendMode':_0x1fffca};}}}if(_0x32f2df[_0x1e72('0x112')](/MOVE DOWN:[ ](\d+)/i)){if(_0x1e72('0x293')===_0x1e72('0x293'))return this[_0x1e72('0x10b')](0x2,Number(RegExp['$1']));else{function _0x35a4ea(){this[_0x1e72('0x359')]=_0x4d617f(_0x374ca5['$1']),this['_spriteOffsetY']=_0x27e4a1(_0x543f76['$2']);}}}if(_0x32f2df[_0x1e72('0x112')](/MOVE LOWER RIGHT:[ ](\d+)/i)){if(_0x1e72('0x74')===_0x1e72('0x345')){function _0x353177(){return!![];}}else return this['processMoveRouteMoveRepeat'](0x3,Number(RegExp['$1']));}if(_0x32f2df['match'](/MOVE LEFT:[ ](\d+)/i))return this[_0x1e72('0x10b')](0x4,Number(RegExp['$1']));if(_0x32f2df[_0x1e72('0x112')](/MOVE RIGHT:[ ](\d+)/i)){if('iyPCQ'!=='iyPCQ'){function _0x43f0ee(){this[_0x1e72('0x271')][_0x1e72('0x57')]=this[_0x1e72('0x271')][_0x1e72('0x57')]||0x0,this[_0x1e72('0x271')][_0x1e72('0x57')]--;if(this[_0x1e72('0x271')]['timer']>0x0)return;this['_moveSynch'][_0x1e72('0x57')]=this[_0x1e72('0x271')]['delay'],this[_0x1e72('0x300')]();}}else return this[_0x1e72('0x10b')](0x6,Number(RegExp['$1']));}if(_0x32f2df['match'](/MOVE UPPER LEFT:[ ](\d+)/i)){if(_0x1e72('0x201')!==_0x1e72('0x1f9'))return this[_0x1e72('0x10b')](0x7,Number(RegExp['$1']));else{function _0xd4ec83(){let _0x58c540=_0x32ddf9[_0x1e72('0x1d7')][_0x1e72('0x18')]['Movement'][_0x1e72('0x433')]?_0x2fb6b8:_0xf1d81f;return this[_0x1e72('0x2fa')](_0x58c540);}}}if(_0x32f2df['match'](/MOVE UP:[ ](\d+)/i))return this[_0x1e72('0x10b')](0x8,Number(RegExp['$1']));if(_0x32f2df['match'](/MOVE UPPER RIGHT:[ ](\d+)/i))return this[_0x1e72('0x10b')](0x9,Number(RegExp['$1']));if(_0x32f2df[_0x1e72('0x112')](/OPACITY:[ ](\d+)([%％])/i)){const _0x59f78d=Math[_0x1e72('0x7e')](Number(RegExp['$1'])/0x64*0xff);return this[_0x1e72('0x3b')](_0x59f78d[_0x1e72('0x3e2')](0x0,0xff));}if(_0x32f2df['match'](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){if(_0x1e72('0x8f')!==_0x1e72('0x412')){const _0x1ce4b6=this[_0x1e72('0xe4')]+Math[_0x1e72('0x7e')](Number(RegExp['$1'])/0x64*0xff);return this[_0x1e72('0x3b')](_0x1ce4b6[_0x1e72('0x3e2')](0x0,0xff));}else{function _0x591f5f(){this[_0x1e72('0x359')]=0x0,this[_0x1e72('0x12c')]=0x0;}}}if(_0x32f2df[_0x1e72('0x112')](/OPACITY:[ ]([\+\-]\d+)/i)){const _0xab631d=this['_opacity']+Number(RegExp['$1']);return this['setOpacity'](_0xab631d[_0x1e72('0x3e2')](0x0,0xff));}if(_0x32f2df['match'](/PATTERN LOCK:[ ](\d+)/i))return this[_0x1e72('0x3ee')](Number(RegExp['$1']));if(_0x32f2df['match'](/PATTERN UNLOCK/i))return this[_0x1e72('0x151')]=![];if(_0x32f2df[_0x1e72('0x112')](/POSE:[ ](.*)/i)){const _0x379c87=String(RegExp['$1'])[_0x1e72('0x1b0')]()[_0x1e72('0x398')]();return this[_0x1e72('0x3cb')](_0x379c87);}if(_0x32f2df['match'](/STEP TOWARD:[ ](\d+),[ ](\d+)/i)){const _0x54aa15=Number(RegExp['$1']),_0x25a615=Number(RegExp['$2']);return this[_0x1e72('0xe1')](_0x54aa15,_0x25a615);}if(_0x32f2df[_0x1e72('0x112')](/STEP TOWARD EVENT:[ ](\d+)/i)){if(_0x1e72('0xf9')!=='jimVr'){function _0x393b03(){_0x3e2f85[_0x1e72('0x17d')](_0x213369[_0x1897e1]);}}else{const _0x40411a=$gameMap[_0x1e72('0x3d4')](Number(RegExp['$1']));return this[_0x1e72('0x3d0')](_0x40411a);}}if(_0x32f2df['match'](/STEP TOWARD PLAYER/i))return this[_0x1e72('0x2d4')]($gamePlayer);if(_0x32f2df[_0x1e72('0x112')](/STEP AWAY FROM:[ ](\d+),[ ](\d+)/i)){if(_0x1e72('0xa5')!=='yeAKU'){function _0x249a05(){if(!this[_0x1e72('0x102')]())return;const _0x2cc6a4=this[_0x1e72('0x67')]();let _0x2d9a2c='';for(const _0x2203e0 of _0x2cc6a4){if([0x6c,0x198]['includes'](_0x2203e0[_0x1e72('0x2c3')])){if(_0x2d9a2c!=='')_0x2d9a2c+='\x0a';_0x2d9a2c+=_0x2203e0[_0x1e72('0x266')][0x0];}}this[_0x1e72('0x2dd')](_0x2d9a2c);}}else return this[_0x1e72('0x297')](Number(RegExp['$1']),Number(RegExp['$2']));}if(_0x32f2df[_0x1e72('0x112')](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x35dfb0=$gameMap['event'](Number(RegExp['$1']));return this[_0x1e72('0x1')](_0x35dfb0);}if(_0x32f2df[_0x1e72('0x112')](/STEP AWAY FROM PLAYER/i))return this[_0x1e72('0x1')]($gamePlayer);if(_0x32f2df['match'](/TURN TO:[ ](\d+),[ ](\d+)/i)){if(_0x1e72('0x383')==='WBRTY'){function _0x161f70(){if(this[_0x1e72('0x8a')]===_0x341c81)this['initEventsMoveCore']();return this['_MapSpawnedEventData'][_0x8e3c09]=this[_0x1e72('0x8a')][_0x4fb5bf]||[],this[_0x1e72('0x8a')][_0x3b5587];}}else return this[_0x1e72('0x3ff')](Number(RegExp['$1']),Number(RegExp['$2']));}if(_0x32f2df[_0x1e72('0x112')](/TURN TO EVENT:[ ](\d+)/i)){const _0xcf0a2=$gameMap['event'](Number(RegExp['$1']));return this['turnTowardCharacter'](_0xcf0a2);}if(_0x32f2df[_0x1e72('0x112')](/TURN TO PLAYER/i))return this[_0x1e72('0x431')]($gamePlayer);if(_0x32f2df[_0x1e72('0x112')](/TURN AWAY FROM:[ ](\d+),[ ](\d+)/i)){if(_0x1e72('0x22')==='gNDRF'){function _0x4d16e1(){if(_0x58a04e)for(const _0xb56254 of _0xce27eb['events']()){_0xb56254[_0x1e72('0x154')]();}}}else return this[_0x1e72('0x25b')](Number(RegExp['$1']),Number(RegExp['$2']));}if(_0x32f2df['match'](/TURN AWAY FROM EVENT:[ ](\d+)/i)){if(_0x1e72('0x311')!==_0x1e72('0x3d1')){const _0x30432e=$gameMap[_0x1e72('0x3d4')](Number(RegExp['$1']));return this[_0x1e72('0x376')](_0x30432e);}else{function _0x2baaca(){this[_0x1e72('0x2ba')][_0x1e72('0x39e')](_0x2bdd5d[_0x1e72('0x221')]);}}}if(_0x32f2df[_0x1e72('0x112')](/TURN AWAY FROM PLAYER/i))return this[_0x1e72('0x376')]($gamePlayer);if(_0x32f2df[_0x1e72('0x112')](/TURN LOWER LEFT/i)){if('xNGQr'!==_0x1e72('0x34e'))return this['setDirection'](0x1);else{function _0x28f61f(){const _0x43c269=this[_0x1e72('0xa3')](_0x2fdfcc),_0x4fe3a4=this[_0x1e72('0x332')](_0x1edf5e);}}}if(_0x32f2df[_0x1e72('0x112')](/TURN LOWER RIGHT/i)){if(_0x1e72('0x2e7')!==_0x1e72('0x336'))return this['setDirection'](0x3);else{function _0x3216bf(){_0x3b3043[_0x1e72('0x223')](_0x146f2c,_0x188744),_0x55e941[_0x1e72('0x387')]=_0x846402[_0x1e72('0x387')]||_0x2f3e24[_0x1e72('0x8e')]();const _0x154c61=[_0x8cfbc4[_0x1e72('0x387')],_0x12e585[_0x1e72('0x235')],_0x1e72('0x9b')[_0x1e72('0x279')](_0x2e563e[_0x1e72('0x3bd')])],_0xdd032f=_0x14e801[_0x1e72('0x1c6')],_0x2cf1ea=_0x569059[_0x1e72('0x17a')](_0x154c61)||![];_0x52d110[_0x1e72('0x17')](_0xdd032f,_0x2cf1ea);}}}if(_0x32f2df[_0x1e72('0x112')](/TURN UPPER LEFT/i))return this[_0x1e72('0xaa')](0x7);if(_0x32f2df[_0x1e72('0x112')](/TURN UPPER RIGHT/i)){if(_0x1e72('0x3d6')==='UJLNG')return this[_0x1e72('0xaa')](0x9);else{function _0x3e30b9(){this['_advancedSwitchVariable']=!![];}}}if(_0x32f2df[_0x1e72('0x112')](/Self Switch[ ](.*):[ ](.*)/i))return this['processMoveRouteSelfSwitch'](RegExp['$1'],RegExp['$2']);if(_0x32f2df['match'](/Self Variable[ ](.*):[ ](.*)/i))return this[_0x1e72('0x2ab')](RegExp['$1'],RegExp['$2']);if(_0x32f2df[_0x1e72('0x112')](/TELEPORT TO:[ ](\d+),[ ](\d+)/i))return this[_0x1e72('0x127')](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x32f2df[_0x1e72('0x112')](/TELEPORT TO EVENT:[ ](\d+)/i)){if(_0x1e72('0x306')===_0x1e72('0x12f')){function _0x478431(){const _0x4a15fe=_0x528b4e[_0x1e72('0x43e')](_0x4a52cc,_0x3b6b16)[_0x1e72('0x1d6')](_0x53c616=>_0x53c616!==this);return _0x4a15fe['length']>0x0;}}else{const _0x32eb90=$gameMap[_0x1e72('0x3d4')](Number(RegExp['$1']));return this[_0x1e72('0x48')](_0x32eb90);}}if(_0x32f2df[_0x1e72('0x112')](/TELEPORT TO PLAYER/i)){if(_0x1e72('0x434')!==_0x1e72('0x3f2'))return this[_0x1e72('0x48')]($gamePlayer);else{function _0x1eb32b(){_0x47db4d['ConvertParams'](_0x4d8af4,_0x76356d),_0x2c97db['deleteIconsOnEventsData'](_0xf72d79);}}}try{if(_0x1e72('0x186')!==_0x1e72('0x352'))VisuMZ[_0x1e72('0x1d7')][_0x1e72('0xa8')][_0x1e72('0xe7')](this,_0x486e88);else{function _0x1f0149(){return this[_0x1e72('0x41a')][_0x1e72('0x245')];}}}catch(_0xcf98c1){if($gameTemp['isPlaytest']())console['log'](_0xcf98c1);}},Game_Character[_0x1e72('0x368')][_0x1e72('0x27')]=function(_0x109623){$gameTemp[_0x1e72('0x39b')]([this],_0x109623);},Game_Character[_0x1e72('0x368')]['processMoveRouteBalloon']=function(_0x275c57){let _0x3c2ac5=0x0;switch(_0x275c57[_0x1e72('0x1b0')]()[_0x1e72('0x398')]()){case'!':case _0x1e72('0x312'):_0x3c2ac5=0x1;break;case'?':case _0x1e72('0xe5'):_0x3c2ac5=0x2;break;case _0x1e72('0x2fd'):case _0x1e72('0x2a9'):case _0x1e72('0x17b'):case _0x1e72('0x3b3'):case _0x1e72('0x3cc'):_0x3c2ac5=0x3;break;case _0x1e72('0x139'):case _0x1e72('0x1a8'):_0x3c2ac5=0x4;break;case _0x1e72('0x3af'):_0x3c2ac5=0x5;break;case'SWEAT':_0x3c2ac5=0x6;break;case _0x1e72('0x83'):case _0x1e72('0x72'):_0x3c2ac5=0x7;break;case _0x1e72('0x34f'):case _0x1e72('0xc0'):_0x3c2ac5=0x8;break;case _0x1e72('0xb0'):case'BULB':case _0x1e72('0x2b3'):case'LIGHT-BULB':case _0x1e72('0x229'):_0x3c2ac5=0x9;break;case'Z':case'ZZ':case _0x1e72('0x2fb'):case _0x1e72('0x3ca'):_0x3c2ac5=0xa;break;case _0x1e72('0x29c'):_0x3c2ac5=0xb;break;case'USER-DEFINED\x202':_0x3c2ac5=0xc;break;case _0x1e72('0x2a8'):_0x3c2ac5=0xd;break;case _0x1e72('0x280'):_0x3c2ac5=0xe;break;case _0x1e72('0x23d'):_0x3c2ac5=0xf;break;}$gameTemp[_0x1e72('0x242')](this,_0x3c2ac5);},Game_Character[_0x1e72('0x368')][_0x1e72('0x3f1')]=function(_0x3e3667){const _0x9a7220=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0xfe67ee=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x374e16=this[_0x1e72('0x1f')](),_0x4b3d56=(_0x3e3667===_0x1e72('0xa0')?_0x9a7220:_0xfe67ee)[_0x374e16],_0x2d4659=(_0x3e3667===_0x1e72('0xa0')?_0xfe67ee:_0x9a7220)[_0x374e16];if(this[_0x1e72('0x343')](this['x'],this['y'],_0x4b3d56))_0x3e3667===_0x1e72('0xa0')?this['turnLeft90']():this['turnRight90']();else{if(!this[_0x1e72('0x343')](this['x'],this['y'],this['direction']())){if(_0x1e72('0x2a5')===_0x1e72('0x28e')){function _0x488bfe(){this[_0x1e72('0x263')](_0x5a8398,_0x1eeddc);}}else{if(this[_0x1e72('0x343')](this['x'],this['y'],_0x2d4659)){if(_0x1e72('0x18b')!=='nxrxF'){function _0x2dea66(){return this[_0x1e72('0x3ff')](_0x2ccd09(_0x1bb2be['$1']),_0x30bb44(_0x3e5ec3['$2']));}}else{if(_0x3e3667==='left'){if(_0x1e72('0x31d')!==_0x1e72('0x1d4'))this[_0x1e72('0x1bc')]();else{function _0x1067ba(){return this[_0x1e72('0x2f')]()&&(this[_0x1e72('0x90')]()||this[_0x1e72('0x3f')]()!==0x0&&this['canPass'](this['_x'],this['_y'],this[_0x1e72('0x3f')]())||_0x5b0b1d[_0x1e72('0x2b9')]());}}}else this['turnLeft90']();}}else{if(_0x1e72('0x141')===_0x1e72('0x141'))this[_0x1e72('0x11a')]();else{function _0x318a80(){const _0x29f909=this[_0x1e72('0x26b')]();if(!_0x29f909)return![];return _0x29f909[_0x1e72('0x99')]>0x0;}}}}}}if(this[_0x1e72('0x343')](this['x'],this['y'],this[_0x1e72('0x1f')]())){if(_0x1e72('0x32a')===_0x1e72('0x32a'))this[_0x1e72('0x26')]();else{function _0x548b01(){this[_0x1e72('0x95')](_0x5384e1,_0xe6e886['x']+0x2,_0x2a166b['y']);}}}},Game_Character[_0x1e72('0x368')][_0x1e72('0x36d')]=function(_0x43d41e){if(ImageManager['isBigCharacter'](this[_0x1e72('0x19')]))return;_0x43d41e=_0x43d41e[_0x1e72('0x3e2')](0x0,0x7),this[_0x1e72('0x2a7')](this[_0x1e72('0x19')],_0x43d41e);},Game_Character[_0x1e72('0x368')]['processMoveRouteJumpForward']=function(_0x3ceddf){switch(this['direction']()){case 0x1:this[_0x1e72('0x2ed')](-_0x3ceddf,_0x3ceddf);break;case 0x2:this[_0x1e72('0x2ed')](0x0,_0x3ceddf);break;case 0x3:this['jump'](_0x3ceddf,_0x3ceddf);break;case 0x4:this[_0x1e72('0x2ed')](-_0x3ceddf,0x0);break;case 0x6:this[_0x1e72('0x2ed')](_0x3ceddf,0x0);break;case 0x7:this[_0x1e72('0x2ed')](-_0x3ceddf,-_0x3ceddf);break;case 0x8:this[_0x1e72('0x2ed')](0x0,-_0x3ceddf);break;case 0x9:this[_0x1e72('0x2ed')](_0x3ceddf,-_0x3ceddf);break;}},Game_Character[_0x1e72('0x368')][_0x1e72('0x37f')]=function(_0x538410,_0x5c817d){const _0x198f7a=Math[_0x1e72('0x7e')](_0x538410-this['x']),_0x1d8510=Math['round'](_0x5c817d-this['y']);this[_0x1e72('0x2ed')](_0x198f7a,_0x1d8510);},Game_Character[_0x1e72('0x368')]['processMoveRouteJumpToCharacter']=function(_0x54643f){if(_0x54643f)this[_0x1e72('0x37f')](_0x54643f['x'],_0x54643f['y']);},Game_Character[_0x1e72('0x368')][_0x1e72('0xe1')]=function(_0x28ea8d,_0x1e49d3){let _0x5bf258=0x0;$gameMap[_0x1e72('0xa6')]()?_0x5bf258=this[_0x1e72('0x253')](_0x28ea8d,_0x1e49d3):_0x5bf258=this[_0x1e72('0x262')](_0x28ea8d,_0x1e49d3),this[_0x1e72('0x283')](_0x5bf258),this['setMovementSuccess'](!![]);},Game_Character[_0x1e72('0x368')]['processMoveRouteStepToCharacter']=function(_0x4c9aab){if(_0x4c9aab)this[_0x1e72('0xe1')](_0x4c9aab['x'],_0x4c9aab['y']);},Game_Character['prototype'][_0x1e72('0x2bc')]=function(_0x402169,_0x2b46d8){const _0x1e70aa=this[_0x1e72('0xa3')](_0x402169),_0x55b279=this['deltaYFrom'](_0x2b46d8);},Game_Character['prototype'][_0x1e72('0x2de')]=function(_0xf26023){const _0x3f1c78=['','LOWER\x20LEFT',_0x1e72('0x2da'),'LOWER\x20RIGHT','LEFT','',_0x1e72('0x104'),_0x1e72('0x2e4'),'UP',_0x1e72('0xf5')],_0x315aea=_0x3f1c78[_0x1e72('0x160')](_0xf26023[_0x1e72('0x1b0')]()[_0x1e72('0x398')]());if(directioin<=0x0)return;this['canPass'](this['x'],this['y'],_0x315aea)&&(this[_0x1e72('0x283')](_0x315aea),this[_0x1e72('0x172')]-=0x1);},Game_Character[_0x1e72('0x368')][_0x1e72('0xb8')]=function(_0x3818a8,_0x3d01cf){this[_0x1e72('0xe1')](_0x3818a8,_0x3d01cf);if(this['x']!==_0x3818a8||this['y']!==_0x3d01cf)this[_0x1e72('0x172')]--;},Game_Character[_0x1e72('0x368')][_0x1e72('0x18c')]=function(_0x3a166f){if(_0x3a166f)this[_0x1e72('0xb8')](_0x3a166f['x'],_0x3a166f['y']);},Game_Character[_0x1e72('0x368')][_0x1e72('0x10b')]=function(_0xf5ad71,_0x2d2f48){_0x2d2f48=_0x2d2f48||0x0;const _0x25924b={'code':0x1,'indent':null,'parameters':[]};_0x25924b['code']=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0xf5ad71],this[_0x1e72('0x3f7')][_0x1e72('0x67')][this[_0x1e72('0x172')]][_0x1e72('0x266')][0x0]='';while(_0x2d2f48--){if(_0x1e72('0x321')===_0x1e72('0x269')){function _0x2b44e6(){return!![];}}else this['_moveRoute']['list'][_0x1e72('0x1ac')](this['_moveRouteIndex']+0x1,0x0,_0x25924b);}},Game_Character[_0x1e72('0x368')][_0x1e72('0x3ee')]=function(_0x166f7b){this[_0x1e72('0x151')]=!![],this[_0x1e72('0x1a9')](_0x166f7b);},Game_Character[_0x1e72('0x368')][_0x1e72('0x3b8')]=function(_0x36e353,_0x5d4c8d){if(this===$gamePlayer)return;const _0x28bbb4=[this[_0x1e72('0x3b4')],this[_0x1e72('0x22b')],'A'];if(_0x36e353[_0x1e72('0x112')](/\b[ABCD]\b/i))_0x28bbb4[0x2]=String(_0x36e353)['charAt'](0x0)[_0x1e72('0x1b0')]()[_0x1e72('0x398')]();else{if('TSeHY'===_0x1e72('0x82')){function _0x373638(){return this[_0x1e72('0x3ef')]()['isAirshipPassable'](_0x339c06,_0x2bca47,_0x11c81b);}}else _0x28bbb4[0x2]='Self\x20Switch\x20%1'[_0x1e72('0x279')](_0x36e353);}switch(_0x5d4c8d[_0x1e72('0x1b0')]()[_0x1e72('0x398')]()){case'ON':case'TRUE':$gameSelfSwitches['setValue'](_0x28bbb4,!![]);break;case _0x1e72('0x416'):case'FALSE':$gameSelfSwitches[_0x1e72('0x17')](_0x28bbb4,![]);break;case _0x1e72('0x23b'):$gameSelfSwitches[_0x1e72('0x17')](_0x28bbb4,!$gameSelfSwitches[_0x1e72('0x17a')](_0x28bbb4));break;}},Game_Character[_0x1e72('0x368')]['processMoveRouteSelfVariable']=function(_0x542562,_0x2d4e6e){if(this===$gamePlayer)return;const _0x1e8632=[this[_0x1e72('0x3b4')],this['_eventId'],_0x1e72('0x389')[_0x1e72('0x279')](switchId)];$gameSelfSwitches[_0x1e72('0x17')](_0x1e8632,Number(_0x2d4e6e));},Game_Character[_0x1e72('0x368')][_0x1e72('0x127')]=function(_0x3183e9,_0xe0c583){this[_0x1e72('0x197')](_0x3183e9,_0xe0c583);},Game_Character[_0x1e72('0x368')][_0x1e72('0x48')]=function(_0x51f9ff){if(_0x51f9ff)this['processMoveRouteTeleportTo'](_0x51f9ff['x'],_0x51f9ff['y']);},Game_Character[_0x1e72('0x368')][_0x1e72('0x1bc')]=function(){switch(this[_0x1e72('0x1f')]()){case 0x1:this[_0x1e72('0xaa')](0x7);break;case 0x2:this[_0x1e72('0xaa')](0x4);break;case 0x3:this[_0x1e72('0xaa')](0x1);break;case 0x4:this[_0x1e72('0xaa')](0x8);break;case 0x6:this[_0x1e72('0xaa')](0x2);break;case 0x7:this[_0x1e72('0xaa')](0x9);break;case 0x8:this[_0x1e72('0xaa')](0x6);break;case 0x9:this[_0x1e72('0xaa')](0x3);break;}},Game_Character[_0x1e72('0x368')]['turnLeft90']=function(){switch(this[_0x1e72('0x1f')]()){case 0x1:this[_0x1e72('0xaa')](0x3);break;case 0x2:this['setDirection'](0x6);break;case 0x3:this[_0x1e72('0xaa')](0x9);break;case 0x4:this[_0x1e72('0xaa')](0x2);break;case 0x6:this[_0x1e72('0xaa')](0x8);break;case 0x7:this[_0x1e72('0xaa')](0x1);break;case 0x8:this['setDirection'](0x4);break;case 0x9:this[_0x1e72('0xaa')](0x7);break;}},Game_Character[_0x1e72('0x368')][_0x1e72('0x5b')]=function(_0x43cb66,_0x564a41,_0x189795){const _0x562678=this[_0x1e72('0xa3')](_0x43cb66),_0x1b7b7b=this[_0x1e72('0x332')](_0x564a41);if($gameMap[_0x1e72('0xa6')]()){if(_0x189795||this[_0x1e72('0x299')]()){if(_0x562678>0x0&&_0x1b7b7b<0x0)return 0x1;if(_0x562678<0x0&&_0x1b7b7b<0x0)return 0x3;if(_0x562678>0x0&&_0x1b7b7b>0x0)return 0x7;if(_0x562678<0x0&&_0x1b7b7b>0x0)return 0x9;}}if(Math[_0x1e72('0x251')](_0x562678)>Math[_0x1e72('0x251')](_0x1b7b7b)){if(_0x1e72('0x5f')===_0x1e72('0x5f'))return _0x562678>0x0?0x4:0x6;else{function _0xf04c24(){this[_0x1e72('0x381')]--;if(this['_poseDuration']<=0x0&&this[_0x1e72('0x21')]!==_0x1e72('0x2fb'))this[_0x1e72('0x121')]();}}}else{if(_0x1b7b7b!==0x0)return _0x1b7b7b>0x0?0x8:0x2;}return 0x0;},Game_Character[_0x1e72('0x368')][_0x1e72('0x45')]=function(_0x21508e,_0x22c11a,_0x344224){const _0x2cb6c8=this[_0x1e72('0xa3')](_0x21508e),_0x17e7fc=this[_0x1e72('0x332')](_0x22c11a);if($gameMap[_0x1e72('0xa6')]()){if(_0x1e72('0x214')!==_0x1e72('0x2e1')){if(_0x344224||this[_0x1e72('0x299')]()){if(_0x2cb6c8>0x0&&_0x17e7fc<0x0)return 0x9;if(_0x2cb6c8<0x0&&_0x17e7fc<0x0)return 0x7;if(_0x2cb6c8>0x0&&_0x17e7fc>0x0)return 0x3;if(_0x2cb6c8<0x0&&_0x17e7fc>0x0)return 0x1;}}else{function _0x406e76(){return this[_0x1e72('0x438')]();}}}if(Math[_0x1e72('0x251')](_0x2cb6c8)>Math[_0x1e72('0x251')](_0x17e7fc))return _0x2cb6c8>0x0?0x6:0x4;else{if(_0x17e7fc!==0x0)return _0x17e7fc>0x0?0x2:0x8;}return 0x0;},Game_Character[_0x1e72('0x368')][_0x1e72('0x3ff')]=function(_0x1b639d,_0xdc252e){const _0x24883a=this[_0x1e72('0x5b')](_0x1b639d,_0xdc252e,!![]);if(_0x24883a)this[_0x1e72('0x283')](_0x24883a);},Game_Character['prototype'][_0x1e72('0x297')]=function(_0x1ffdb7,_0x4f60f8){const _0x2ffd3b=this[_0x1e72('0x45')](_0x1ffdb7,_0x4f60f8,!![]);if(_0x2ffd3b)this[_0x1e72('0x283')](_0x2ffd3b);},Game_Character[_0x1e72('0x368')][_0x1e72('0x259')]=function(_0x3ddd99,_0x2e2fcc){const _0x303ed9=this[_0x1e72('0x5b')](_0x3ddd99,_0x2e2fcc,![]);if(_0x303ed9)this[_0x1e72('0xaa')](_0x303ed9);},Game_Character[_0x1e72('0x368')][_0x1e72('0x25b')]=function(_0x42cebc,_0x37c72a){const _0x207d6=this[_0x1e72('0x45')](_0x42cebc,_0x37c72a,![]);if(_0x207d6)this[_0x1e72('0xaa')](_0x207d6);},Game_Character['prototype'][_0x1e72('0x15f')]=function(_0x1d84b1){if(_0x1d84b1)this['moveTowardPoint'](_0x1d84b1['x'],_0x1d84b1['y']);},Game_Character[_0x1e72('0x368')]['moveAwayFromCharacter']=function(_0x19e351){if(_0x19e351)this['moveAwayFromPoint'](_0x19e351['x'],_0x19e351['y']);},Game_Character[_0x1e72('0x368')][_0x1e72('0x431')]=function(_0x43684a){if(_0x43684a)this[_0x1e72('0x259')](_0x43684a['x'],_0x43684a['y']);},Game_Character[_0x1e72('0x368')][_0x1e72('0x376')]=function(_0x1aff30){if(_0x1aff30)this[_0x1e72('0x25b')](_0x1aff30['x'],_0x1aff30['y']);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x261')]=Game_Player[_0x1e72('0x368')][_0x1e72('0x2f')],Game_Player[_0x1e72('0x368')][_0x1e72('0x2f')]=function(){if(this[_0x1e72('0x27e')])return!![];return VisuMZ[_0x1e72('0x1d7')]['Game_Player_isDashing'][_0x1e72('0xe7')](this);},Game_Player[_0x1e72('0x368')][_0x1e72('0x356')]=function(){return this[_0x1e72('0x2f')]()&&(this['isMoving']()||this[_0x1e72('0x3f')]()!==0x0&&this[_0x1e72('0x343')](this['_x'],this['_y'],this[_0x1e72('0x3f')]())||$gameTemp['isDestinationValid']());},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x14d')]=Game_Player[_0x1e72('0x368')][_0x1e72('0x3f')],Game_Player['prototype'][_0x1e72('0x3f')]=function(){if($gameMap[_0x1e72('0xa6')]()){if(_0x1e72('0x1ca')===_0x1e72('0x2a1')){function _0x11a3de(){if([0x1,0x4,0x7][_0x1e72('0x2f4')](_0x62712f))_0x5ec434-=0x1;if([0x3,0x6,0x9][_0x1e72('0x2f4')](_0x250288))_0x1bfe4c+=0x1;return this[_0x1e72('0x361')](_0x2da039);}}else return this[_0x1e72('0x375')]();}else return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x14d')][_0x1e72('0xe7')](this);},Game_Player[_0x1e72('0x368')]['getInputDir8']=function(){return Input[_0x1e72('0x36')];},Game_Player[_0x1e72('0x368')]['moveByInput']=function(){if(!this[_0x1e72('0x90')]()&&this[_0x1e72('0x3a7')]()){let _0x29b7a9=this['getInputDirection']();if(_0x29b7a9>0x0)$gameTemp[_0x1e72('0x162')]();else{if($gameTemp[_0x1e72('0x2b9')]()){const _0x27df38=$gameTemp[_0x1e72('0x212')](),_0x19cf8c=$gameTemp['destinationY']();$gameMap[_0x1e72('0xa6')]()?_0x29b7a9=this['findDiagonalDirectionTo'](_0x27df38,_0x19cf8c):_0x29b7a9=this[_0x1e72('0x262')](_0x27df38,_0x19cf8c);}}_0x29b7a9>0x0?(this[_0x1e72('0x325')]=this[_0x1e72('0x325')]||0x0,this[_0x1e72('0x1a0')]()?this[_0x1e72('0xaa')](_0x29b7a9):this[_0x1e72('0x210')](_0x29b7a9),this[_0x1e72('0x325')]++):this['_inputTime']=0x0;}},Game_Player[_0x1e72('0x368')][_0x1e72('0x1a0')]=function(){const _0x3c0901=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')]['Movement'];if(!_0x3c0901[_0x1e72('0x1f0')])return![];if($gameTemp[_0x1e72('0x2b9')]())return![];if(this[_0x1e72('0x2f')]()||this[_0x1e72('0x90')]()||this[_0x1e72('0x16e')]())return![];return this[_0x1e72('0x325')]<_0x3c0901[_0x1e72('0xcb')];},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x233')]=Game_Player[_0x1e72('0x368')][_0x1e72('0x210')],Game_Player[_0x1e72('0x368')][_0x1e72('0x210')]=function(_0x3d673b){$gameMap[_0x1e72('0xa6')]()?this[_0x1e72('0x283')](_0x3d673b):VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x233')][_0x1e72('0xe7')](this,_0x3d673b);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x436')]=Game_Player['prototype'][_0x1e72('0x2eb')],Game_Player['prototype'][_0x1e72('0x2eb')]=function(_0x2def62,_0x1038f8,_0x72806a){if($gameMap[_0x1e72('0x22f')](_0x2def62,_0x1038f8,_0x72806a,_0x1e72('0x2f2')))return!![];if($gameMap[_0x1e72('0x13a')](_0x2def62,_0x1038f8,_0x72806a,_0x1e72('0x2f2')))return![];return VisuMZ[_0x1e72('0x1d7')]['Game_Player_isMapPassable']['call'](this,_0x2def62,_0x1038f8,_0x72806a);},VisuMZ['EventsMoveCore']['Game_Player_checkEventTriggerHere']=Game_Player[_0x1e72('0x368')][_0x1e72('0x31a')],Game_Player[_0x1e72('0x368')][_0x1e72('0x31a')]=function(_0x2869cb){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0xb1')][_0x1e72('0xe7')](this,_0x2869cb);if(this[_0x1e72('0x38f')]()){if(_0x1e72('0x20c')!==_0x1e72('0x20c')){function _0x668cc(){const _0x107acd=_0x236133[_0x1e72('0x3d4')](_0x494b96(_0x53326f['$1']));return this[_0x1e72('0x3d0')](_0x107acd);}}else{this[_0x1e72('0xaf')](_0x2869cb);if(_0x2869cb[_0x1e72('0x2f4')](0x0)&&this[_0x1e72('0x28d')]()===_0x1e72('0x3bf'))this['startMapCommonEventOnOK'](this['x'],this['y']);else(_0x2869cb[_0x1e72('0x2f4')](0x1)||_0x2869cb[_0x1e72('0x2f4')](0x2))&&this[_0x1e72('0x2f9')]();}}},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2e0')]=Game_Player[_0x1e72('0x368')][_0x1e72('0x1e9')],Game_Player[_0x1e72('0x368')][_0x1e72('0x1e9')]=function(_0x321085){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2e0')][_0x1e72('0xe7')](this,_0x321085);if(this['canStartLocalEvents']()&&_0x321085[_0x1e72('0x2f4')](0x0)&&this[_0x1e72('0x28d')]()===_0x1e72('0x38c')){const _0x54f2ce=this['direction'](),_0x27f5be=$gameMap[_0x1e72('0x18e')](this['x'],_0x54f2ce),_0x21dfec=$gameMap[_0x1e72('0x3e5')](this['y'],_0x54f2ce);this[_0x1e72('0x125')](_0x27f5be,_0x21dfec);}},Game_Player[_0x1e72('0x368')][_0x1e72('0xaf')]=function(_0x5245b3){if($gameMap['isEventRunning']())return;if($gameMap[_0x1e72('0x33a')]())return;const _0x5bcd02=$gameMap['events']();for(const _0x1d944d of _0x5bcd02){if(_0x1e72('0x33f')===_0x1e72('0x33f')){if(!_0x1d944d)continue;if(!_0x1d944d[_0x1e72('0x110')](_0x5245b3))continue;if(this[_0x1e72('0xe2')](_0x1d944d))return _0x1d944d['start']();if(this[_0x1e72('0x21a')](_0x1d944d))return _0x1d944d[_0x1e72('0x100')]();}else{function _0x8fabdf(){const _0x58d3c2=this['lastSpawnedEvent']();return _0x58d3c2?_0x58d3c2[_0x1e72('0x22b')]:0x0;}}}},Game_Player[_0x1e72('0x368')][_0x1e72('0xe2')]=function(_0x1db944){if($gameMap[_0x1e72('0x37e')]())return![];if($gameMap[_0x1e72('0x33a')]())return![];return _0x1db944[_0x1e72('0x41c')]()[_0x1e72('0x2f4')](this[_0x1e72('0x3a1')]());},Game_Player[_0x1e72('0x368')][_0x1e72('0x21a')]=function(_0x1c0cd9){if($gameMap[_0x1e72('0x37e')]())return![];if($gameMap[_0x1e72('0x33a')]())return![];if([_0x1e72('0xa'),_0x1e72('0x81')]['includes'](_0x1c0cd9[_0x1e72('0x39c')]()))return![];const _0x52676c=_0x1c0cd9[_0x1e72('0x39c')](),_0x1439d6=_0x1c0cd9[_0x1e72('0xbe')]();switch(_0x52676c){case'radius':const _0x30100a=$gameMap[_0x1e72('0xde')](this['x'],this['y'],_0x1c0cd9['x'],_0x1c0cd9['y']);return _0x1c0cd9[_0x1e72('0xbe')]()>=_0x30100a;break;case _0x1e72('0x116'):return _0x1439d6>=Math[_0x1e72('0x251')](_0x1c0cd9['deltaXFrom'](this['x']))&&_0x1439d6>=Math[_0x1e72('0x251')](_0x1c0cd9[_0x1e72('0x332')](this['y']));break;case _0x1e72('0x2ad'):return _0x1439d6>=Math[_0x1e72('0x251')](_0x1c0cd9[_0x1e72('0x332')](this['y']));break;case _0x1e72('0x3d9'):return _0x1439d6>=Math[_0x1e72('0x251')](_0x1c0cd9[_0x1e72('0xa3')](this['x']));break;case _0x1e72('0x1c4'):return![];break;}},Game_Player[_0x1e72('0x368')]['startMapCommonEventOnOK']=function(_0x2c2b63,_0x179929){if($gameMap[_0x1e72('0x37e')]())return;if($gameMap[_0x1e72('0x33a')]())return;let _0x2bdd78=VisuMZ[_0x1e72('0x1d7')]['Settings'][_0x1e72('0x296')],_0x3ecf9b=$gameMap[_0x1e72('0x3a1')](_0x2c2b63,_0x179929);const _0x43ae63=_0x1e72('0x26a')['format'](_0x3ecf9b);if(_0x2bdd78[_0x43ae63]){if(_0x1e72('0x22d')!==_0x1e72('0x54'))$gameTemp[_0x1e72('0x17d')](_0x2bdd78[_0x43ae63]);else{function _0x7f6fc5(){return _0x7ce644[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0xce')];}}}},Game_Player[_0x1e72('0x368')][_0x1e72('0x28d')]=function(){return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0xce')];},Game_Player['prototype'][_0x1e72('0x2f9')]=function(){if($gameMap[_0x1e72('0x37e')]())return;if($gameMap[_0x1e72('0x33a')]())return;let _0x2163ab=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')]['RegionTouch'];const _0x346962=_0x1e72('0x26a')[_0x1e72('0x279')](this[_0x1e72('0x3a1')]());_0x2163ab[_0x346962]&&$gameTemp[_0x1e72('0x17d')](_0x2163ab[_0x346962]);},VisuMZ['EventsMoveCore']['Game_Player_increaseSteps']=Game_Player[_0x1e72('0x368')][_0x1e72('0x384')],Game_Player['prototype'][_0x1e72('0x384')]=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x41d')][_0x1e72('0xe7')](this),VisuMZ[_0x1e72('0x20a')](0x0);},Game_Follower['prototype']['isDashing']=function(){return $gamePlayer[_0x1e72('0x2f')]();},Game_Follower[_0x1e72('0x368')][_0x1e72('0x356')]=function(){return $gamePlayer[_0x1e72('0x356')]();},Game_Follower['prototype'][_0x1e72('0x2d5')]=function(){return $gamePlayer['realMoveSpeed']();},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0xec')]=Game_Vehicle[_0x1e72('0x368')][_0x1e72('0x2eb')],Game_Vehicle[_0x1e72('0x368')][_0x1e72('0x2eb')]=function(_0x2ad198,_0x53fa78,_0x3ab5a0){if($gameMap[_0x1e72('0x22f')](_0x2ad198,_0x53fa78,_0x3ab5a0,this[_0x1e72('0x437')]))return!![];if($gameMap[_0x1e72('0x13a')](_0x2ad198,_0x53fa78,_0x3ab5a0,this[_0x1e72('0x437')]))return![];return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0xec')][_0x1e72('0xe7')](this,_0x2ad198,_0x53fa78,_0x3ab5a0);},Game_Vehicle[_0x1e72('0x368')][_0x1e72('0x15e')]=function(_0x24cbb2,_0x3c6673,_0x20e3af){if($gameMap[_0x1e72('0x22f')](_0x24cbb2,_0x3c6673,_0x20e3af,this['_type']))return!![];if($gameMap[_0x1e72('0x13a')](_0x24cbb2,_0x3c6673,_0x20e3af,this[_0x1e72('0x437')]))return![];return VisuMZ[_0x1e72('0x1d7')]['Game_CharacterBase_canPass'][_0x1e72('0xe7')]($gamePlayer,_0x24cbb2,_0x3c6673,_0x20e3af);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2d7')]=Game_Vehicle[_0x1e72('0x368')]['isLandOk'],Game_Vehicle[_0x1e72('0x368')][_0x1e72('0x3c3')]=function(_0x2a465b,_0x16bef7,_0x2c43f3){if($gameMap[_0x1e72('0x3c4')](_0x2a465b,_0x16bef7,_0x2c43f3,this[_0x1e72('0x437')]))return!![];const _0x5e30db=this[_0x1e72('0x437')][_0x1e72('0x15')](0x0)[_0x1e72('0x1b0')]()+this[_0x1e72('0x437')][_0x1e72('0x146')](0x1),_0x464d30=_0x1e72('0x25f')[_0x1e72('0x279')](_0x5e30db);return VisuMZ['EventsMoveCore']['Settings'][_0x1e72('0x388')][_0x464d30]?![]:VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2d7')]['call'](this,_0x2a465b,_0x16bef7,_0x2c43f3);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x38d')]=Game_Vehicle[_0x1e72('0x368')]['initMoveSpeed'],Game_Vehicle['prototype'][_0x1e72('0x130')]=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x38d')][_0x1e72('0xe7')](this);const _0x98cb4b=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')];if(this[_0x1e72('0x38')]()){if(_0x98cb4b[_0x1e72('0xdf')])this[_0x1e72('0x21e')](_0x98cb4b['BoatSpeed']);}else{if(this[_0x1e72('0x34')]()){if(_0x98cb4b[_0x1e72('0x26e')])this[_0x1e72('0x21e')](_0x98cb4b[_0x1e72('0x26e')]);}else{if(this[_0x1e72('0x3df')]()){if('fWYVu'===_0x1e72('0x4c')){function _0x4e0b85(){this[_0x1e72('0x210')](_0x598225);}}else{if(_0x98cb4b[_0x1e72('0xb3')])this[_0x1e72('0x21e')](_0x98cb4b[_0x1e72('0xb3')]);}}}}},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x32')]=Game_Event[_0x1e72('0x368')][_0x1e72('0x35c')],Game_Event[_0x1e72('0x368')][_0x1e72('0x35c')]=function(_0x352c35,_0x216298){VisuMZ[_0x1e72('0x1d7')]['Game_Event_initialize'][_0x1e72('0xe7')](this,_0x352c35,_0x216298),this[_0x1e72('0x155')](),this[_0x1e72('0x120')](),this[_0x1e72('0x372')]();},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x16c')]=Game_Event[_0x1e72('0x368')][_0x1e72('0x3d4')],Game_Event[_0x1e72('0x368')][_0x1e72('0x3d4')]=function(){if(this[_0x1e72('0x40f')]!==undefined){if('UEmtj'==='UEmtj'){const _0x2d7704=this['_eventMorphData'][_0x1e72('0x8e')],_0x3f8b90=this[_0x1e72('0x40f')][_0x1e72('0x31c')];return VisuMZ[_0x1e72('0x308')][_0x2d7704][_0x1e72('0x1ef')][_0x3f8b90];}else{function _0x1a9d7c(){this[_0x1e72('0x1d5')]=!![];return;}}}if(this['_eventCopyData']!==undefined){const _0x46b212=this[_0x1e72('0x1fe')][_0x1e72('0x8e')],_0x52c602=this[_0x1e72('0x1fe')][_0x1e72('0x31c')];return VisuMZ[_0x1e72('0x308')][_0x46b212][_0x1e72('0x1ef')][_0x52c602];}if(this['_eventSpawnData']!==undefined){if(_0x1e72('0x218')===_0x1e72('0x218')){const _0x9329bb=this[_0x1e72('0x2e3')]['mapId'],_0x1d9e80=this['_eventSpawnData'][_0x1e72('0x31c')];return VisuMZ[_0x1e72('0x308')][_0x9329bb]['events'][_0x1d9e80];}else{function _0x54bf0e(){return this['_lastPluginCommandInterpreter'];}}}if($gameTemp[_0x1e72('0x33e')]!==undefined){const _0xa1321a=$gameTemp[_0x1e72('0x33e')][_0x1e72('0x8e')],_0x363e78=$gameTemp[_0x1e72('0x33e')]['eventId'];return VisuMZ[_0x1e72('0x308')][_0xa1321a]['events'][_0x363e78];}return VisuMZ['EventsMoveCore'][_0x1e72('0x16c')]['call'](this);},Game_Event[_0x1e72('0x368')][_0x1e72('0x24e')]=function(_0x2a6239,_0x57f6cf){if(_0x2a6239===0x0||_0x57f6cf===0x0)return![];if(!VisuMZ[_0x1e72('0x308')][_0x2a6239])return $gameTemp[_0x1e72('0x264')]()&&console[_0x1e72('0x13f')](_0x1e72('0xda')['format'](_0x2a6239)),![];return!![];},VisuMZ['EventsMoveCore']['Game_Event_start']=Game_Event[_0x1e72('0x368')][_0x1e72('0x100')],Game_Event['prototype'][_0x1e72('0x100')]=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2f3')][_0x1e72('0xe7')](this);if(Imported[_0x1e72('0x363')]&&Input[_0x1e72('0x12a')](VisuMZ[_0x1e72('0x2f6')]['Settings'][_0x1e72('0x17e')][_0x1e72('0xb2')])){if(_0x1e72('0x1b3')!==_0x1e72('0x1b3')){function _0x1e4f0a(){const _0x4c6aca=this[_0x1e72('0x3d4')](_0x50f138);if(_0x4c6aca)_0x4c6aca[_0x1e72('0x3fb')]();}}else Input[_0x1e72('0xdd')]();}},Game_Event[_0x1e72('0x368')][_0x1e72('0x155')]=function(){const _0x41a74b=this['event']()[_0x1e72('0x3b1')];if(_0x41a74b==='')return;if(DataManager[_0x1e72('0xf3')]()||DataManager[_0x1e72('0x1c3')]())return;const _0x4b22d6=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x315')];let _0x149469=null,_0x1f60a9=0x0,_0x5cccd0=0x0;if(_0x41a74b[_0x1e72('0x112')](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i))_0x1f60a9=Number(RegExp['$1']),_0x5cccd0=Number(RegExp['$2']);else{if(_0x41a74b[_0x1e72('0x112')](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)){if(_0x1e72('0x414')===_0x1e72('0x414'))_0x1f60a9=Number(RegExp['$1']),_0x5cccd0=Number(RegExp['$2']);else{function _0x4288e0(){return!![];}}}else{if(_0x41a74b[_0x1e72('0x112')](/<COPY EVENT:[ ](.*?)>/i)){const _0x31cb71=String(RegExp['$1'])[_0x1e72('0x1b0')]()[_0x1e72('0x398')]();_0x149469=VisuMZ[_0x1e72('0x171')][_0x31cb71];if(!_0x149469)return;_0x1f60a9=_0x149469[_0x1e72('0x339')],_0x5cccd0=_0x149469['EventID'];}}}if(!this['checkValidEventerMap'](_0x1f60a9,_0x5cccd0))return;_0x4b22d6['PreCopyJS'][_0x1e72('0xe7')](this,_0x1f60a9,_0x5cccd0,this);if(_0x149469)_0x149469[_0x1e72('0x187')][_0x1e72('0xe7')](this,_0x1f60a9,_0x5cccd0,this);this[_0x1e72('0x1fe')]={'mapId':_0x1f60a9,'eventId':_0x5cccd0},this['_pageIndex']=-0x2,this[_0x1e72('0x154')](),_0x4b22d6[_0x1e72('0x241')][_0x1e72('0xe7')](this,_0x1f60a9,_0x5cccd0,this);if(_0x149469)_0x149469[_0x1e72('0x241')]['call'](this,_0x1f60a9,_0x5cccd0,this);$gameMap['clearEventCache']();},Game_Event['prototype'][_0x1e72('0x120')]=function(){const _0xf5eef9=$gameSystem[_0x1e72('0x20')](this);if(!_0xf5eef9)return;const _0x5e1eb4=_0xf5eef9[_0x1e72('0x360')]['toUpperCase']()[_0x1e72('0x398')]();if(_0x5e1eb4!==_0x1e72('0x322'))this[_0x1e72('0x3ba')](_0x5e1eb4,!![]);else{if(_0x1e72('0x2c')!=='nwgpA'){function _0x506593(){return _0x2684f4[_0x1e72('0x1d7')][_0x1e72('0x7a')][_0x1e72('0x1e')](this['event']()[_0x1e72('0x165')],this[_0x1e72('0x204')]);}}else this[_0x1e72('0x2a2')](_0xf5eef9[_0x1e72('0x8e')],_0xf5eef9[_0x1e72('0x31c')],!![]);}},Game_Event[_0x1e72('0x368')][_0x1e72('0x2a2')]=function(_0x5df37f,_0x3c2f79,_0x107518){if(!this[_0x1e72('0x24e')](_0x5df37f,_0x3c2f79))return;const _0x1853b7=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x315')];if(!_0x107518)_0x1853b7['PreMorphJS'][_0x1e72('0xe7')](this,_0x5df37f,_0x3c2f79,this);this['_eventMorphData']={'mapId':_0x5df37f,'eventId':_0x3c2f79},this[_0x1e72('0xb9')]=-0x2,this[_0x1e72('0x154')]();if(!_0x107518)_0x1853b7['PostMorphJS'][_0x1e72('0xe7')](this,_0x5df37f,_0x3c2f79,this);this[_0x1e72('0x3f4')]();},Game_Event[_0x1e72('0x368')][_0x1e72('0x3ba')]=function(_0x3884aa,_0x241da7){_0x3884aa=_0x3884aa[_0x1e72('0x1b0')]()[_0x1e72('0x398')]();const _0x2f06c9=VisuMZ['EventTemplates'][_0x3884aa];if(!_0x2f06c9)return;const _0x4c67e7=_0x2f06c9[_0x1e72('0x339')],_0x4b9273=_0x2f06c9[_0x1e72('0x292')];if(!this[_0x1e72('0x24e')](_0x4c67e7,_0x4b9273))return;if(!_0x241da7)_0x2f06c9[_0x1e72('0xa2')][_0x1e72('0xe7')](this,_0x4c67e7,_0x4b9273,this);this[_0x1e72('0x2a2')](_0x4c67e7,_0x4b9273,_0x241da7);if(!_0x241da7)_0x2f06c9[_0x1e72('0x39')][_0x1e72('0xe7')](this,_0x4c67e7,_0x4b9273,this);this[_0x1e72('0x3f4')]();},Game_Event['prototype'][_0x1e72('0x346')]=function(){this[_0x1e72('0x40f')]=undefined,this[_0x1e72('0xb9')]=-0x2,this[_0x1e72('0x154')]();},Game_Event[_0x1e72('0x368')][_0x1e72('0x2c7')]=function(_0x333798){const _0x4e5dd5=VisuMZ[_0x1e72('0x1d7')]['Settings'][_0x1e72('0x315')],_0x31da95=_0x333798[_0x1e72('0x360')][_0x1e72('0x1b0')]()[_0x1e72('0x398')](),_0x2db493=!['','UNTITLED']['includes'](_0x31da95);let _0x33eb32=0x0,_0x5c7dc6=0x0;if(_0x2db493){const _0x354d74=VisuMZ[_0x1e72('0x171')][_0x31da95];if(!_0x354d74)return;_0x33eb32=_0x354d74[_0x1e72('0x339')],_0x5c7dc6=_0x354d74[_0x1e72('0x292')];}else _0x33eb32=_0x333798['mapId'],_0x5c7dc6=_0x333798[_0x1e72('0x31c')];if(!this['checkValidEventerMap'](_0x33eb32,_0x5c7dc6))return;if(_0x2db493){if(_0x1e72('0x21c')===_0x1e72('0x26f')){function _0x3efd41(){this[_0x1e72('0x1d5')]=!![];return;}}else{const _0x2d7e0a=VisuMZ[_0x1e72('0x171')][_0x31da95];_0x2d7e0a[_0x1e72('0x2c1')][_0x1e72('0xe7')](this,_0x33eb32,_0x5c7dc6,this);}}_0x4e5dd5['PreSpawnJS'][_0x1e72('0xe7')](this,_0x33eb32,_0x5c7dc6,this),this[_0x1e72('0x2e3')]=_0x333798,this[_0x1e72('0xb9')]=-0x2,this[_0x1e72('0x3b4')]=$gameMap[_0x1e72('0x8e')](),this[_0x1e72('0x22b')]=_0x333798[_0x1e72('0x35a')],this['_spawnPreserved']=_0x333798['spawnPreserved'],this[_0x1e72('0x197')](_0x333798['x'],_0x333798['y']),this['setDirection'](_0x333798['direction']),this[_0x1e72('0x154')]();if(_0x2db493){if(_0x1e72('0x35d')===_0x1e72('0x35d')){const _0x963a51=VisuMZ[_0x1e72('0x171')][_0x31da95];if(!_0x963a51)return;_0x963a51['PostSpawnJS']['call'](this,_0x33eb32,_0x5c7dc6,this);}else{function _0x21abaa(){this['executeMoveDir8'](_0x5aa8f3),this[_0x1e72('0x172')]-=0x1;}}}_0x4e5dd5[_0x1e72('0xcc')][_0x1e72('0xe7')](this,_0x33eb32,_0x5c7dc6,this);const _0x5d2026=SceneManager[_0x1e72('0x350')];if(_0x5d2026&&_0x5d2026[_0x1e72('0x2')])_0x5d2026['_spriteset'][_0x1e72('0x1c7')](this);},Game_Event[_0x1e72('0x368')][_0x1e72('0x1df')]=function(){return!!this[_0x1e72('0x2e3')];},VisuMZ[_0x1e72('0x1d7')]['Game_Event_refresh']=Game_Event[_0x1e72('0x368')][_0x1e72('0x154')],Game_Event[_0x1e72('0x368')][_0x1e72('0x154')]=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x33')][_0x1e72('0xe7')](this),this[_0x1e72('0x1f4')]();},VisuMZ[_0x1e72('0x1d7')]['Game_Event_clearPageSettings']=Game_Event[_0x1e72('0x368')][_0x1e72('0x5a')],Game_Event[_0x1e72('0x368')][_0x1e72('0x5a')]=function(){VisuMZ[_0x1e72('0x1d7')]['Game_Event_clearPageSettings'][_0x1e72('0xe7')](this),this[_0x1e72('0xc1')]();},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x24c')]=Game_Event['prototype'][_0x1e72('0x4a')],Game_Event['prototype'][_0x1e72('0x4a')]=function(){this[_0x1e72('0x36e')]=!![],VisuMZ['EventsMoveCore']['Game_Event_setupPageSettings']['call'](this),this[_0x1e72('0x1f4')](),this['_activationProximityAutoTriggerBypass']=![];},Game_Event['prototype']['setupEventsMoveCoreEffects']=function(){if(!this['event']())return;this[_0x1e72('0xc1')](),this['setupEventsMoveCoreNotetags'](),this[_0x1e72('0x260')](),this[_0x1e72('0x403')]();},Game_Event[_0x1e72('0x368')][_0x1e72('0xab')]=function(){const _0x21d89a=this[_0x1e72('0x3d4')]()[_0x1e72('0x3b1')];if(_0x21d89a==='')return;this[_0x1e72('0x2dd')](_0x21d89a);},Game_Event['prototype'][_0x1e72('0x260')]=function(){if(!this[_0x1e72('0x102')]())return;const _0x94c6b8=this[_0x1e72('0x67')]();let _0x16e9c7='';for(const _0x22cb1b of _0x94c6b8){if([0x6c,0x198][_0x1e72('0x2f4')](_0x22cb1b[_0x1e72('0x2c3')])){if(_0x16e9c7!=='')_0x16e9c7+='\x0a';_0x16e9c7+=_0x22cb1b['parameters'][0x0];}}this[_0x1e72('0x2dd')](_0x16e9c7);},Game_Event[_0x1e72('0x368')][_0x1e72('0xc1')]=function(){const _0x1458b3=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')];this[_0x1e72('0x205')]={'type':_0x1e72('0xa'),'distance':0x0,'regionList':[]},this[_0x1e72('0x34d')]=![],this[_0x1e72('0x307')]=![],this['_addedHitbox']={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this[_0x1e72('0x4e')]={'iconIndex':0x0,'bufferX':_0x1458b3[_0x1e72('0x286')][_0x1e72('0x285')],'bufferY':_0x1458b3[_0x1e72('0x286')][_0x1e72('0x3a3')],'blendMode':_0x1458b3[_0x1e72('0x286')][_0x1e72('0x3c5')]},this[_0x1e72('0x41a')]={'text':'','visibleRange':_0x1458b3[_0x1e72('0x7b')][_0x1e72('0x318')],'offsetX':_0x1458b3[_0x1e72('0x7b')][_0x1e72('0x32d')],'offsetY':_0x1458b3['Label'][_0x1e72('0x115')]},this[_0x1e72('0xdb')]=[],this[_0x1e72('0x271')]={'target':-0x1,'type':'random','delay':0x1},this['_saveEventLocation']=![],this['_shadowGraphic']={'visible':!![],'filename':_0x1458b3[_0x1e72('0x199')]['DefaultShadow']},this['clearSpriteOffsets'](),this[_0x1e72('0x234')]();},Game_Event[_0x1e72('0x368')][_0x1e72('0x2dd')]=function(_0x4fb41d){if(_0x4fb41d[_0x1e72('0x112')](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x1e72('0x1d')===_0x1e72('0x1d'))this[_0x1e72('0x205')][_0x1e72('0x37c')]=JSON[_0x1e72('0x3e7')]('['+RegExp['$1']['match'](/\d+/g)+']'),this[_0x1e72('0x205')][_0x1e72('0x230')]='region';else{function _0x48a588(){return this[_0x1e72('0x18c')](_0xbf28d9);}}}else{if(_0x4fb41d[_0x1e72('0x112')](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)){if(_0x1e72('0xfa')===_0x1e72('0x2cc')){function _0x46deb4(){const _0x71c99c=_0x490579[_0x1e72('0x3e7')]('['+_0x58b8ff['$1'][_0x1e72('0x112')](/\d+/g)+']');this[_0x1e72('0xdb')]=this[_0x1e72('0xdb')][_0x1e72('0x73')](_0x71c99c),this['_moveOnlyRegions'][_0x1e72('0x34c')](0x0);}}else type=String(RegExp['$1'])[_0x1e72('0x2c6')]()[_0x1e72('0x398')](),this[_0x1e72('0x205')][_0x1e72('0x230')]=type,this[_0x1e72('0x205')][_0x1e72('0xde')]=Number(RegExp['$2']);}}if(_0x4fb41d['match'](/<ALWAYS UPDATE MOVEMENT>/i)){if('HljPT'!==_0x1e72('0x87'))this[_0x1e72('0x34d')]=!![];else{function _0x3d7728(){return this[_0x1e72('0x205')][_0x1e72('0x230')]||'none';}}}_0x4fb41d[_0x1e72('0x112')](/<CLICK TRIGGER>/i)&&(this[_0x1e72('0x307')]=!![]);const _0x49b813=_0x4fb41d[_0x1e72('0x112')](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x49b813)for(const _0x5d466d of _0x49b813){if(_0x1e72('0x225')===_0x1e72('0x225')){if(_0x5d466d['match'](/<HITBOX[ ](.*?):[ ](\d+)>/i)){if(_0x1e72('0x309')===_0x1e72('0x105')){function _0x519cbf(){return _0x5dac6b[_0x1e72('0x1d7')][_0x1e72('0x18')]['Label'][_0x1e72('0x42e')];}}else{const _0x91da6d=String(RegExp['$1'])[_0x1e72('0x2c6')]()[_0x1e72('0x398')](),_0x4a7e6e=Number(RegExp['$2']);this[_0x1e72('0x9a')][_0x91da6d]=_0x4a7e6e;}}}else{function _0x41e674(){_0x210b10=this[_0x1e72('0x262')](_0x22baa8,_0x1b1449);}}}if(_0x4fb41d['match'](/<ICON:[ ](\d+)>/i)){if('rjJpt'===_0x1e72('0x43a'))this[_0x1e72('0x4e')][_0x1e72('0x99')]=Number(RegExp['$1']);else{function _0x6f64c7(){const _0x501940=_0xe65b85[_0x1e72('0x179')]()||this;if(_0x501940['constructor']!==_0x4352d8)_0x22fc75[_0x1e72('0x1d7')][_0x1e72('0x340')][_0x1e72('0xe7')](this,_0x27c600,_0x3bec29);else{const _0x54ba41=[_0x501940['_mapId'],_0x501940[_0x1e72('0x22b')],_0x1e72('0x389')[_0x1e72('0x279')](_0xefd561)];_0x49b7ca[_0x1e72('0x17')](_0x54ba41,_0x5c2914);}}}}_0x4fb41d[_0x1e72('0x112')](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x1e72('0x4e')]['bufferX']=Number(RegExp['$1']));if(_0x4fb41d[_0x1e72('0x112')](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)){if(_0x1e72('0x35b')==='NJzxk'){function _0x236a5f(){this[_0x1e72('0x271')]['type']=_0x22e8e9(_0x3c8074['$1'])[_0x1e72('0x2c6')]()[_0x1e72('0x398')]();}}else this[_0x1e72('0x4e')][_0x1e72('0x236')]=Number(RegExp['$1']);}_0x4fb41d[_0x1e72('0x112')](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x1e72('0x4e')][_0x1e72('0x219')]=Number(RegExp['$1']),this[_0x1e72('0x4e')][_0x1e72('0x236')]=Number(RegExp['$2']));if(_0x4fb41d[_0x1e72('0x112')](/<ICON BLEND MODE:[ ](.*?)>/i)){if(_0x1e72('0x53')==='UzgWx'){function _0x55c392(){this[_0x1e72('0x1cc')]=0x0;if(this[_0x1e72('0x3a0')]()){const _0x12164e=_0x174d9b[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')],_0x2e415c=this[_0x1e72('0x28a')][_0x1e72('0x1f')]();if([0x1,0x4,0x7]['includes'](_0x2e415c))this[_0x1e72('0x1cc')]=_0x12164e[_0x1e72('0x5e')];if([0x3,0x6,0x9]['includes'](_0x2e415c))this['rotation']=_0x12164e[_0x1e72('0x143')];[0x2,0x8][_0x1e72('0x2f4')](_0x2e415c)&&(this[_0x1e72('0x1cc')]=[-_0x12164e[_0x1e72('0x265')],0x0,_0x12164e[_0x1e72('0x265')]][this[_0x1e72('0x28a')][_0x1e72('0x29b')]()]);}}}else{const _0x174b23=String(RegExp['$1'])['toUpperCase']()[_0x1e72('0x398')](),_0x56aec2=[_0x1e72('0xad'),_0x1e72('0x1c2'),_0x1e72('0x1ce'),'SCREEN'];this['_eventIcon'][_0x1e72('0x18f')]=_0x56aec2['indexOf'](_0x174b23)[_0x1e72('0x3e2')](0x0,0x3);}}_0x4fb41d['match'](/<LABEL:[ ](.*?)>/i)&&(this[_0x1e72('0x41a')][_0x1e72('0x126')]=String(RegExp['$1'])[_0x1e72('0x398')]());_0x4fb41d['match'](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)&&(this[_0x1e72('0x41a')][_0x1e72('0x126')]=String(RegExp['$1'])['trim']());if(_0x4fb41d[_0x1e72('0x112')](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)){if('ztkrH'===_0x1e72('0x366'))this[_0x1e72('0x41a')][_0x1e72('0x1cb')]=Number(RegExp['$1']);else{function _0xe88416(){return _0x5976db[_0x1e72('0x1d7')][_0x1e72('0xf7')][_0x1e72('0xe7')](this)-this[_0x1e72('0x27a')];}}}if(_0x4fb41d['match'](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)){if('bixwZ'===_0x1e72('0x156'))this['_labelWindow'][_0x1e72('0x4f')]=Number(RegExp['$1']);else{function _0x39c055(){return!!this[_0x1e72('0x8c')](_0x5dc03f);}}}_0x4fb41d[_0x1e72('0x112')](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x1e72('0x41a')][_0x1e72('0x1cb')]=Number(RegExp['$1']),this[_0x1e72('0x41a')]['offsetY']=Number(RegExp['$2']));$gameTemp['registerSelfTarget'](this);for(;;){if(this[_0x1e72('0x41a')][_0x1e72('0x126')][_0x1e72('0x112')](/\\V\[(\d+)\]/gi))this[_0x1e72('0x41a')][_0x1e72('0x126')]=this[_0x1e72('0x41a')][_0x1e72('0x126')][_0x1e72('0x378')](/\\V\[(\d+)\]/gi,(_0x1a863f,_0x524149)=>$gameVariables[_0x1e72('0x17a')](parseInt(_0x524149)));else break;}$gameTemp[_0x1e72('0x1a')]();if(_0x4fb41d[_0x1e72('0x112')](/<LABEL RANGE:[ ](\d+)>/i)){if(_0x1e72('0x290')!==_0x1e72('0x290')){function _0x41d13e(){this[_0x1e72('0x205')]['regionList']=_0x5df0a8['parse']('['+_0x3551c3['$1'][_0x1e72('0x112')](/\d+/g)+']'),this[_0x1e72('0x205')]['type']='region';}}else this[_0x1e72('0x41a')][_0x1e72('0x245')]=Number(RegExp['$1']);}if(_0x4fb41d[_0x1e72('0x112')](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){if(_0x1e72('0x2cb')===_0x1e72('0x3e')){function _0x5b0fb2(){this[_0x1e72('0x1d5')]=!![];return;}}else{const _0x4d7dfd=JSON[_0x1e72('0x3e7')]('['+RegExp['$1'][_0x1e72('0x112')](/\d+/g)+']');this[_0x1e72('0xdb')]=this['_moveOnlyRegions'][_0x1e72('0x73')](_0x4d7dfd),this[_0x1e72('0xdb')][_0x1e72('0x34c')](0x0);}}if(_0x4fb41d[_0x1e72('0x112')](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){if(_0x1e72('0x202')!==_0x1e72('0x202')){function _0xf77f03(){_0x232d98[_0x1e72('0x158')](_0x1a27e6[_0x1e72('0x387')],_0x175c84[_0x1e72('0x235')]);}}else{const _0x79bb94=String(RegExp['$1']);if(_0x79bb94[_0x1e72('0x112')](/PLAYER/i))this[_0x1e72('0x271')]['target']=0x0;else _0x79bb94['match'](/EVENT[ ](\d+)/i)&&(this[_0x1e72('0x271')][_0x1e72('0x406')]=Number(RegExp['$1']));}}_0x4fb41d[_0x1e72('0x112')](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this[_0x1e72('0x271')][_0x1e72('0x230')]=String(RegExp['$1'])[_0x1e72('0x2c6')]()[_0x1e72('0x398')]());if(_0x4fb41d[_0x1e72('0x112')](/<MOVE SYNCH DELAY:[ ](\d+)>/i)){if('JaeiI'===_0x1e72('0x182')){function _0x250bd6(){_0x3a952d[_0x1e72('0x165')]===_0x17ebb4&&_0x4f3bb2[_0x1e72('0x1d7')][_0x1e72('0x7a')]['loadCPC'](_0x10a21);if(_0x5a86d5[_0x1e72('0x165')][_0x1e72('0x2ef')]>0x0)return _0x410cec['EventsMoveCore'][_0x1e72('0x7a')][_0x1e72('0x1e')](_0x190516[_0x1e72('0x165')],0x0);return!![];}}else this[_0x1e72('0x271')][_0x1e72('0x42')]=Number(RegExp['$1']);}_0x4fb41d[_0x1e72('0x112')](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x1e72('0x246')]=!![]);_0x4fb41d[_0x1e72('0x112')](/<HIDE SHADOW>/i)&&(this[_0x1e72('0x11d')]['visible']=![]);if(_0x4fb41d[_0x1e72('0x112')](/<SHADOW FILENAME:[ ](.*?)>/i)){if(_0x1e72('0x62')===_0x1e72('0x25a')){function _0x4dbfbe(){this[_0x1e72('0x41a')][_0x1e72('0x1cb')]=_0x18efae(_0x3feb08['$1']),this['_labelWindow'][_0x1e72('0x4f')]=_0x1d5a86(_0x4ea45c['$2']);}}else this[_0x1e72('0x11d')][_0x1e72('0x11e')]=String(RegExp['$1']);}_0x4fb41d[_0x1e72('0x112')](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x1e72('0x359')]=Number(RegExp['$1']));_0x4fb41d[_0x1e72('0x112')](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x1e72('0x12c')]=Number(RegExp['$1']));if(_0x4fb41d[_0x1e72('0x112')](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)){if(_0x1e72('0x3dd')===_0x1e72('0x4')){function _0x108766(){if(_0x358578[_0x1e72('0x37e')]())return;if(_0x1472b3[_0x1e72('0x33a')]())return;let _0x583c03=_0x3a38a3[_0x1e72('0x1d7')][_0x1e72('0x18')]['RegionOk'],_0x2a9e41=_0x568c90[_0x1e72('0x3a1')](_0x379d4a,_0xcacd24);const _0x44a7f5=_0x1e72('0x26a')[_0x1e72('0x279')](_0x2a9e41);_0x583c03[_0x44a7f5]&&_0x28c022[_0x1e72('0x17d')](_0x583c03[_0x44a7f5]);}}else this[_0x1e72('0x359')]=Number(RegExp['$1']),this[_0x1e72('0x12c')]=Number(RegExp['$2']);}_0x4fb41d[_0x1e72('0x112')](/<STEP PATTERN:[ ](.*)>/i)&&(this[_0x1e72('0x333')]=String(RegExp['$1'])[_0x1e72('0x1b0')]()[_0x1e72('0x398')]());},Game_Event[_0x1e72('0x368')][_0x1e72('0x403')]=function(){this['updateShadowChanges']();},Game_Event['prototype'][_0x1e72('0x439')]=function(){if(this[_0x1e72('0x34d')])return!![];return Game_Character[_0x1e72('0x368')]['isNearTheScreen'][_0x1e72('0xe7')](this);},VisuMZ['EventsMoveCore'][_0x1e72('0x395')]=Game_Event[_0x1e72('0x368')][_0x1e72('0x2d2')],Game_Event[_0x1e72('0x368')][_0x1e72('0x2d2')]=function(){if(this[_0x1e72('0x39a')]())return;VisuMZ[_0x1e72('0x1d7')]['Game_Event_updateSelfMovement'][_0x1e72('0xe7')](this),this[_0x1e72('0x90')]()&&VisuMZ[_0x1e72('0x20a')](this['_eventId']);},Game_Event[_0x1e72('0x368')][_0x1e72('0x39a')]=function(){const _0x39fb24=VisuMZ['EventsMoveCore'][_0x1e72('0x18')]['Movement'];if($gameMap[_0x1e72('0x37e')]()&&_0x39fb24[_0x1e72('0x268')])return!![];if($gameMessage[_0x1e72('0x2d6')]()&&_0x39fb24[_0x1e72('0x2a0')])return!![];if(!$gameSystem[_0x1e72('0x2b8')]())return!![];if(this['moveSynchTarget']()>=0x0)return!![];return![];},Game_Event[_0x1e72('0x368')][_0x1e72('0x426')]=function(){const _0x361aae=SceneManager[_0x1e72('0x350')][_0x1e72('0x2')];if(_0x361aae){const _0x4ade15=_0x361aae[_0x1e72('0x46')](this);if(_0x4ade15&&_0x4ade15[_0x1e72('0x221')]&&_0x4ade15['_shadowSprite'][_0x1e72('0x2db')]!==this['shadowFilename']()){if(_0x1e72('0x324')!==_0x1e72('0x324')){function _0x3a7dcf(){return![];}}else _0x4ade15['_shadowSprite']['_filename']=this[_0x1e72('0xcf')](),_0x4ade15[_0x1e72('0x221')][_0x1e72('0x2bb')]=ImageManager[_0x1e72('0x3e0')](_0x4ade15[_0x1e72('0x221')][_0x1e72('0x2db')]);}}},Game_Event[_0x1e72('0x368')][_0x1e72('0xcf')]=function(){return this[_0x1e72('0x11d')]['filename'];},Game_Event[_0x1e72('0x368')][_0x1e72('0x19a')]=function(){if(!this[_0x1e72('0x11d')][_0x1e72('0x35e')])return![];return Game_CharacterBase[_0x1e72('0x368')][_0x1e72('0x19a')][_0x1e72('0xe7')](this);},Game_Event['prototype'][_0x1e72('0x3d7')]=function(){return this[_0x1e72('0x41a')][_0x1e72('0x126')];},Game_Event[_0x1e72('0x368')][_0x1e72('0x137')]=function(){return this[_0x1e72('0x41a')][_0x1e72('0x245')];},Game_Event[_0x1e72('0x368')][_0x1e72('0x2eb')]=function(_0xa59d35,_0x5ec358,_0x137d03){if(this[_0x1e72('0x3d8')]())return this[_0x1e72('0x3de')](_0xa59d35,_0x5ec358,_0x137d03);if($gameMap[_0x1e72('0x22f')](_0xa59d35,_0x5ec358,_0x137d03,_0x1e72('0x3d4')))return!![];if($gameMap['isRegionForbidPass'](_0xa59d35,_0x5ec358,_0x137d03,'event'))return![];return Game_Character[_0x1e72('0x368')][_0x1e72('0x2eb')][_0x1e72('0xe7')](this,_0xa59d35,_0x5ec358,_0x137d03);},Game_Event['prototype'][_0x1e72('0x3d8')]=function(){if(this[_0x1e72('0xdb')]===undefined)this[_0x1e72('0xc1')]();return this['_moveOnlyRegions']['length']>0x0;},Game_Event['prototype'][_0x1e72('0x3de')]=function(_0x2a8727,_0x391b28,_0x279440){const _0x1eaf80=$gameMap[_0x1e72('0x18e')](_0x2a8727,_0x279440),_0x9caf9e=$gameMap[_0x1e72('0x3e5')](_0x391b28,_0x279440),_0x2cd465=$gameMap[_0x1e72('0x3a1')](_0x1eaf80,_0x9caf9e);return this[_0x1e72('0xdb')][_0x1e72('0x2f4')](_0x2cd465);},VisuMZ[_0x1e72('0x1d7')]['Game_Event_findProperPageIndex']=Game_Event[_0x1e72('0x368')][_0x1e72('0x13c')],Game_Event[_0x1e72('0x368')][_0x1e72('0x13c')]=function(){return this[_0x1e72('0x181')]=![],this[_0x1e72('0x10')]=![],this[_0x1e72('0x3d4')]()?VisuMZ['EventsMoveCore'][_0x1e72('0x37a')]['call'](this):-0x1;},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x237')]=Game_Event[_0x1e72('0x368')][_0x1e72('0x1f1')],Game_Event[_0x1e72('0x368')]['meetsConditions']=function(_0x401a79){this[_0x1e72('0x3e6')](_0x401a79),$gameTemp[_0x1e72('0x1de')](this);const _0x3e8a24=VisuMZ[_0x1e72('0x1d7')]['Game_Event_meetsConditions'][_0x1e72('0xe7')](this,_0x401a79);return $gameTemp[_0x1e72('0x1a')](),_0x3e8a24;},Game_Event[_0x1e72('0x368')][_0x1e72('0x33d')]=function(){return this[_0x1e72('0x181')];},Game_Event[_0x1e72('0x368')]['checkAdvancedSwitchVariablePresent']=function(_0x101c37){const _0x349385=_0x101c37['conditions'];if(_0x349385[_0x1e72('0x1f6')]&&DataManager[_0x1e72('0x2df')](_0x349385[_0x1e72('0x80')]))this['_advancedSwitchVariable']=!![];else{if(_0x349385[_0x1e72('0x20d')]&&DataManager['isAdvancedSwitch'](_0x349385['switch2Id'])){if(_0x1e72('0x101')===_0x1e72('0x101'))this[_0x1e72('0x181')]=!![];else{function _0x4c0294(){_0x111788[_0x1e72('0x1d7')][_0x1e72('0xb1')]['call'](this,_0x2de230);if(this[_0x1e72('0x38f')]()){this[_0x1e72('0xaf')](_0x5c3508);if(_0x436f38[_0x1e72('0x2f4')](0x0)&&this[_0x1e72('0x28d')]()===_0x1e72('0x3bf'))this[_0x1e72('0x125')](this['x'],this['y']);else(_0x3d410b[_0x1e72('0x2f4')](0x1)||_0x249055['includes'](0x2))&&this[_0x1e72('0x2f9')]();}}}}else _0x349385[_0x1e72('0x11f')]&&DataManager[_0x1e72('0x11b')](_0x349385[_0x1e72('0x170')])&&(this[_0x1e72('0x181')]=!![]);}},Game_Event[_0x1e72('0x368')][_0x1e72('0x1fb')]=function(){return this['_clickTrigger'];},Game_Event[_0x1e72('0x368')][_0x1e72('0x6')]=function(){$gameTemp['clearDestination'](),this['start']();},Game_Event[_0x1e72('0x368')][_0x1e72('0x140')]=function(_0x40a417,_0x3fa64b){if(this[_0x1e72('0x9a')]){if(_0x1e72('0xf0')!==_0x1e72('0xf0')){function _0x490f83(){this[_0x1e72('0x6c')](),_0x374511[_0x1e72('0x1d7')]['Game_Map_update'][_0x1e72('0xe7')](this,_0x40208d);}}else return this[_0x1e72('0x317')](_0x40a417,_0x3fa64b);}else{if(_0x1e72('0x2cf')!=='nnbEU')return Game_Character[_0x1e72('0x368')]['pos'][_0x1e72('0xe7')](this,_0x40a417,_0x3fa64b);else{function _0x2bd997(){return _0x15ee6c[_0x1e72('0x368')]['pos']['call'](this,_0x138c0a,_0x25679c);}}}},Game_Event[_0x1e72('0x368')][_0x1e72('0x317')]=function(_0x390816,_0xa86ff3){var _0x597265=this['x']-this[_0x1e72('0x9a')]['left'],_0x34d9a9=this['x']+this[_0x1e72('0x9a')]['right'],_0x3416d1=this['y']-this[_0x1e72('0x9a')]['up'],_0x46c398=this['y']+this[_0x1e72('0x9a')]['down'];return _0x597265<=_0x390816&&_0x390816<=_0x34d9a9&&_0x3416d1<=_0xa86ff3&&_0xa86ff3<=_0x46c398;},Game_Event[_0x1e72('0x368')][_0x1e72('0x343')]=function(_0x2300f1,_0x33448c,_0x30ef82){for(let _0x3096ce=-this['_addedHitbox'][_0x1e72('0xa0')];_0x3096ce<=this[_0x1e72('0x9a')][_0x1e72('0x10f')];_0x3096ce++){if('OPofB'!==_0x1e72('0x1a6'))for(let _0x32ebbf=-this['_addedHitbox']['up'];_0x32ebbf<=this[_0x1e72('0x9a')]['down'];_0x32ebbf++){if(_0x1e72('0x184')!==_0x1e72('0x138')){if(!Game_Character['prototype'][_0x1e72('0x343')][_0x1e72('0xe7')](this,_0x2300f1+_0x3096ce,_0x33448c+_0x32ebbf,_0x30ef82)){if('LUeYc'===_0x1e72('0x30c'))return![];else{function _0x3eec2f(){_0x50928d[_0x1e72('0x43c')][_0x4bfa83][_0x1e72('0x112')](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x2b84ab=_0x1e72('0x413')[_0x1e72('0x279')](_0x5b1cd8(_0x157578['$1']));_0x15ece4[_0x1e72('0x240')][_0x134e50]=new _0x354e9f(_0x1e72('0x170'),_0x2b84ab);}}}}else{function _0x300e8e(){if(!this[_0x1e72('0xa1')](_0x5595c9,_0x58f424))return;}}}else{function _0x1569be(){return this[_0x1e72('0x2c2')]['setup'](_0x205a2b,_0x23d635),this[_0x1e72('0x2c2')][_0x1e72('0x40b')](),this[_0x1e72('0x2c2')]['_cpc'];}}}return!![];},Game_Event[_0x1e72('0x368')][_0x1e72('0x1a3')]=function(_0x298405,_0x594eb2){const _0x52fb31=$gameMap[_0x1e72('0x43e')](_0x298405,_0x594eb2)[_0x1e72('0x1d6')](_0xdd3f3c=>_0xdd3f3c!==this);return _0x52fb31['length']>0x0;},Game_Event['prototype'][_0x1e72('0x3fd')]=function(_0x2aa5a7,_0x2090d1){if(!this[_0x1e72('0x1b2')]())return![];else{if(_0x1e72('0xfc')===_0x1e72('0x2ec')){function _0xa83d91(){if(_0x42b064)this['turnAwayFromPoint'](_0xbe6de3['x'],_0x9c944e['y']);}}else{const _0xd38a3c=$gameMap[_0x1e72('0x43e')](_0x2aa5a7,_0x2090d1)[_0x1e72('0x1d6')](_0x4ddda2=>_0x4ddda2!==this&&_0x4ddda2['isNormalPriority']());return _0xd38a3c[_0x1e72('0x2ef')]>0x0;}}},Game_Event[_0x1e72('0x368')][_0x1e72('0x39c')]=function(){return this[_0x1e72('0x205')][_0x1e72('0x230')]||_0x1e72('0xa');},Game_Event[_0x1e72('0x368')][_0x1e72('0xbe')]=function(){return this[_0x1e72('0x205')]['distance']||0x0;},Game_Event['prototype'][_0x1e72('0x41c')]=function(){return this[_0x1e72('0x205')]['regionList']||[];},Game_Event[_0x1e72('0x368')][_0x1e72('0x384')]=function(){Game_Character[_0x1e72('0x368')][_0x1e72('0x384')][_0x1e72('0xe7')](this);if([_0x1e72('0xa'),_0x1e72('0x81')][_0x1e72('0x2f4')](this['activationProximityType']()))return;$gamePlayer[_0x1e72('0xaf')]([0x2]);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x30')]=Game_Event[_0x1e72('0x368')][_0x1e72('0x3f8')],Game_Event['prototype'][_0x1e72('0x3f8')]=function(){if(this[_0x1e72('0x3a9')]!==0x3)return;if(this[_0x1e72('0x36e')])return;if(!this[_0x1e72('0x30e')](![]))return;if(!this[_0x1e72('0x8')](![]))return;VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x30')][_0x1e72('0xe7')](this);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x3c8')]=Game_Event[_0x1e72('0x368')][_0x1e72('0x10c')],Game_Event[_0x1e72('0x368')][_0x1e72('0x10c')]=function(){if(!this[_0x1e72('0x2c2')])return;if(!this[_0x1e72('0x30e')](!![]))return;if(!this[_0x1e72('0x8')](!![]))return;VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x3c8')][_0x1e72('0xe7')](this);},Game_Event['prototype'][_0x1e72('0x30e')]=function(_0x429d93){if(!_0x429d93&&$gameMap[_0x1e72('0x37e')]())return![];if(!_0x429d93&&$gameMap['isAnyEventStarting']())return![];if(this[_0x1e72('0x41c')]()<=0x0)return!![];return $gamePlayer[_0x1e72('0xe2')](this);},Game_Event[_0x1e72('0x368')][_0x1e72('0x8')]=function(_0x165473){if(!_0x165473&&$gameMap[_0x1e72('0x37e')]())return![];if(!_0x165473&&$gameMap[_0x1e72('0x33a')]())return![];if([_0x1e72('0xa'),_0x1e72('0x81')]['includes'](this[_0x1e72('0x39c')]()))return!![];return $gamePlayer[_0x1e72('0x21a')](this);},VisuMZ[_0x1e72('0x20a')]=function(_0x2a6bf9){for(const _0x937a19 of $gameMap['events']()){if(_0x1e72('0x174')!==_0x1e72('0x174')){function _0x419338(){_0x4971d3[_0x1e72('0x70')](),_0x363562[_0x1e72('0x1d7')][_0x1e72('0x1f7')][_0x1e72('0xe7')](this),_0x31f229[_0x1e72('0x1a')]();}}else{if(!_0x937a19)continue;if(_0x937a19[_0x1e72('0x3be')]()===_0x2a6bf9){if(_0x1e72('0x85')==='OGvrQ')_0x937a19['updateMoveSynch']();else{function _0x26c2c2(){if(_0x295416===0x1)return this['canPass'](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0xfb6ef6===0x3)return this[_0x1e72('0x343')](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x528ac0===0x7)return this[_0x1e72('0x343')](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x4ad529===0x9)return this['canPass'](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x3f5336;}}}}}},VisuMZ[_0x1e72('0x11c')]=function(_0x5ebe59){if(_0x5ebe59===0x0)return $gamePlayer;return $gameMap[_0x1e72('0x3d4')](_0x5ebe59);},Game_Event[_0x1e72('0x368')][_0x1e72('0x3be')]=function(){return this[_0x1e72('0x271')][_0x1e72('0x406')];},Game_Event[_0x1e72('0x368')][_0x1e72('0x19e')]=function(){return this[_0x1e72('0x271')][_0x1e72('0x230')];},Game_Event[_0x1e72('0x368')][_0x1e72('0x2d5')]=function(){if(this[_0x1e72('0x3be')]()>=0x0){const _0x35f3c0=VisuMZ[_0x1e72('0x11c')](this[_0x1e72('0x3be')]());if(_0x35f3c0)return _0x35f3c0[_0x1e72('0x2d5')]();}return Game_Character[_0x1e72('0x368')][_0x1e72('0x2d5')]['call'](this);},Game_Event['prototype'][_0x1e72('0x364')]=function(){this[_0x1e72('0x271')][_0x1e72('0x57')]=this[_0x1e72('0x271')][_0x1e72('0x57')]||0x0,this[_0x1e72('0x271')][_0x1e72('0x57')]--;if(this[_0x1e72('0x271')][_0x1e72('0x57')]>0x0)return;this[_0x1e72('0x271')][_0x1e72('0x57')]=this[_0x1e72('0x271')][_0x1e72('0x42')],this[_0x1e72('0x300')]();},Game_Event['prototype'][_0x1e72('0x300')]=function(){switch(this[_0x1e72('0x19e')]()){case _0x1e72('0x106'):this['processMoveSynchRandom']();break;case _0x1e72('0x291'):this[_0x1e72('0x41')]();break;case _0x1e72('0x19c'):this[_0x1e72('0x36b')]();break;case _0x1e72('0x2c9'):this[_0x1e72('0xd')]();break;case _0x1e72('0x2e'):case _0x1e72('0x2c5'):this[_0x1e72('0x3c')]();break;case _0x1e72('0x314'):case _0x1e72('0x131'):this['processMoveSynchReverseMimic']();break;case _0x1e72('0x3a4'):case _0x1e72('0x289'):case'mirror\x20horz':case _0x1e72('0x231'):this['processMoveSynchMirrorHorz']();break;case'mirror\x20vertical':case _0x1e72('0x84'):case _0x1e72('0x397'):case _0x1e72('0x391'):this[_0x1e72('0x58')]();break;default:this[_0x1e72('0x1da')]();break;}this['update']();},Game_Event[_0x1e72('0x368')][_0x1e72('0x1da')]=function(){const _0x446f0b=[0x2,0x4,0x6,0x8];$gameMap[_0x1e72('0xa6')]()&&_0x446f0b[_0x1e72('0x354')](0x1,0x3,0x7,0x9);const _0x34db9f=[];for(const _0x551fdb of _0x446f0b){if(_0x1e72('0x3d')===_0x1e72('0x3d')){if(this[_0x1e72('0x343')](this['x'],this['y'],_0x551fdb))_0x34db9f['push'](_0x551fdb);}else{function _0x5a1db4(){if(_0x38eef6||this[_0x1e72('0x299')]()){if(_0x5a2141>0x0&&_0x306981<0x0)return 0x1;if(_0x43f11f<0x0&&_0x465933<0x0)return 0x3;if(_0x4a1721>0x0&&_0x4dabaf>0x0)return 0x7;if(_0xe2781c<0x0&&_0x17e579>0x0)return 0x9;}}}}if(_0x34db9f[_0x1e72('0x2ef')]>0x0){const _0x36c81f=_0x34db9f[Math[_0x1e72('0x1d3')](_0x34db9f[_0x1e72('0x2ef')])];this[_0x1e72('0x283')](_0x36c81f);}},Game_Event[_0x1e72('0x368')][_0x1e72('0x41')]=function(){const _0x5c715e=VisuMZ[_0x1e72('0x11c')](this[_0x1e72('0x3be')]());this['moveTowardCharacter'](_0x5c715e);},Game_Event[_0x1e72('0x368')][_0x1e72('0x36b')]=function(){const _0x5431cc=VisuMZ['GetMoveSynchTarget'](this[_0x1e72('0x3be')]());this[_0x1e72('0x1')](_0x5431cc);},Game_Event[_0x1e72('0x368')][_0x1e72('0xd')]=function(){this['updateRoutineMove']();},Game_Event[_0x1e72('0x368')]['processMoveSynchMimic']=function(){const _0x2bc813=VisuMZ[_0x1e72('0x11c')](this['moveSynchTarget']());this[_0x1e72('0x283')](_0x2bc813[_0x1e72('0xf1')]());},Game_Event['prototype'][_0x1e72('0x44')]=function(){const _0xc3526f=VisuMZ[_0x1e72('0x11c')](this[_0x1e72('0x3be')]()),_0x15feb2=this[_0x1e72('0x428')](_0xc3526f[_0x1e72('0xf1')]());this[_0x1e72('0x283')](this[_0x1e72('0x428')](_0xc3526f[_0x1e72('0x1f')]()));},Game_Event[_0x1e72('0x368')]['processMoveSynchMirrorHorz']=function(){const _0x362cca=VisuMZ['GetMoveSynchTarget'](this[_0x1e72('0x3be')]()),_0x4654c6=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x362cca['lastMovedDirection']()];this[_0x1e72('0x283')](_0x4654c6);},Game_Event[_0x1e72('0x368')]['processMoveSynchMirrorVert']=function(){const _0x3767ae=VisuMZ[_0x1e72('0x11c')](this[_0x1e72('0x3be')]()),_0x49c3da=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x3767ae['lastMovedDirection']()];this[_0x1e72('0x283')](_0x49c3da);},Game_Event['prototype'][_0x1e72('0x372')]=function(){const _0x27ca29=$gameSystem[_0x1e72('0x23c')](this);if(!_0x27ca29)return;this[_0x1e72('0x197')](_0x27ca29['x'],_0x27ca29['y']),this[_0x1e72('0xaa')](_0x27ca29[_0x1e72('0x1f')]),this[_0x1e72('0xb9')]===_0x27ca29['pageIndex']&&(this[_0x1e72('0x172')]=_0x27ca29['moveRouteIndex']);},Game_Event[_0x1e72('0x368')][_0x1e72('0x9e')]=function(){Game_Character[_0x1e72('0x368')]['updateMove'][_0x1e72('0xe7')](this),this[_0x1e72('0x94')]();},Game_Event['prototype'][_0x1e72('0x394')]=function(){if($gameMap['isSaveEventLocations']())return!![];return this[_0x1e72('0x246')];},Game_Event[_0x1e72('0x368')][_0x1e72('0x94')]=function(){if(!this[_0x1e72('0x394')]())return;this['saveEventLocation']();},Game_Event[_0x1e72('0x368')][_0x1e72('0x1dc')]=function(){$gameSystem[_0x1e72('0x1dc')](this);},Game_Event[_0x1e72('0x368')][_0x1e72('0x1e2')]=function(){$gameSystem[_0x1e72('0x365')](this);},Game_Event[_0x1e72('0x368')][_0x1e72('0x26b')]=function(){return $gameSystem[_0x1e72('0x26b')]()?Game_Character[_0x1e72('0x368')][_0x1e72('0x26b')]['call'](this):this[_0x1e72('0x4e')];},Game_Event[_0x1e72('0x368')][_0x1e72('0x1e1')]=function(){return this[_0x1e72('0x10')];},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x243')]=Game_Event[_0x1e72('0x368')][_0x1e72('0x1f1')],Game_Event[_0x1e72('0x368')][_0x1e72('0x1f1')]=function(_0x44978a){const _0x4ca220=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x243')]['call'](this,_0x44978a);if(!_0x4ca220)return![];return this[_0x1e72('0x382')](_0x44978a);},Game_Event[_0x1e72('0x368')][_0x1e72('0x382')]=function(_0x3220aa){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')][_0x1e72('0x14e')](_0x3220aa),this[_0x1e72('0x10')]=_0x3220aa[_0x1e72('0x165')][_0x1e72('0x2ef')]>0x0;_0x3220aa[_0x1e72('0x165')]===undefined&&VisuMZ['EventsMoveCore'][_0x1e72('0x7a')][_0x1e72('0x14e')](_0x3220aa);if(_0x3220aa['CPC'][_0x1e72('0x2ef')]>0x0){if(_0x1e72('0x1e0')==='guTCn'){function _0x3f49f9(){return this[_0x1e72('0x8c')](_0x1e2f85);}}else return $gameMap[_0x1e72('0x3d4')](this[_0x1e72('0x22b')])&&VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')]['metCPC'](_0x3220aa[_0x1e72('0x165')],this[_0x1e72('0x22b')]);}return!![];},VisuMZ['EventsMoveCore'][_0x1e72('0x16')]=Game_Troop[_0x1e72('0x368')][_0x1e72('0x1f1')],Game_Troop[_0x1e72('0x368')][_0x1e72('0x1f1')]=function(_0x1f41df){var _0x268742=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x16')]['call'](this,_0x1f41df);return _0x268742&&this[_0x1e72('0x37d')](_0x1f41df);},Game_Troop[_0x1e72('0x368')][_0x1e72('0x37d')]=function(_0x5cbc3c){_0x5cbc3c[_0x1e72('0x165')]===undefined&&VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')][_0x1e72('0x14e')](_0x5cbc3c);if(_0x5cbc3c[_0x1e72('0x165')][_0x1e72('0x2ef')]>0x0)return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x7a')]['metCPC'](_0x5cbc3c[_0x1e72('0x165')],0x0);return!![];},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x15d')]=Game_Interpreter[_0x1e72('0x368')][_0x1e72('0x1e5')],Game_Interpreter['prototype'][_0x1e72('0x1e5')]=function(){if(this[_0x1e72('0x27b')]===_0x1e72('0x1ab')){if(_0x1e72('0x1b6')===_0x1e72('0x1b6')){if(window[this[_0x1e72('0x1d0')]]){if(_0x1e72('0xd8')!=='ycAMS'){function _0x34802f(){let _0x44fea2=0x0;_0x17f462[_0x1e72('0xa6')]()?_0x44fea2=this[_0x1e72('0x253')](_0x4d6126,_0x3c723b):_0x44fea2=this[_0x1e72('0x262')](_0x5d2cb3,_0x384f3a),this[_0x1e72('0x283')](_0x44fea2),this[_0x1e72('0xe3')](!![]);}}else this[_0x1e72('0x27b')]='',this[_0x1e72('0x193')]();}else{if('tVCXq'===_0x1e72('0x277')){function _0x17e697(){if(_0x4295ae['isRegionAllowPass'](_0x24ab2c,_0x48b733,_0x314ef0,this['_type']))return!![];if(_0x111b05[_0x1e72('0x13a')](_0x434ebd,_0x9b33a2,_0x5c9117,this[_0x1e72('0x437')]))return![];return _0x55ab14[_0x1e72('0x1d7')][_0x1e72('0xec')]['call'](this,_0x18d5c5,_0x3d25ba,_0x5de359);}}else return!![];}}else{function _0x5a0db3(){if(!_0x2f9c2b[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')][_0x1e72('0xbf')])return;for(const _0x44d5ed of this[_0x1e72('0xc5')]){this[_0x1e72('0x2ba')][_0x1e72('0x39e')](_0x44d5ed[_0x1e72('0x221')]);}}}}else{if(_0x1e72('0x1ff')===_0x1e72('0x27d')){function _0x2c0968(){return _0x1b1bb4[_0x1e72('0x1d7')]['Game_CharacterBase_pattern'][_0x1e72('0xe7')](this);}}else return VisuMZ[_0x1e72('0x1d7')]['Game_Interpreter_updateWaitMode']['call'](this);}},VisuMZ['EventsMoveCore'][_0x1e72('0x113')]=Game_Interpreter[_0x1e72('0x368')]['executeCommand'],Game_Interpreter['prototype'][_0x1e72('0x51')]=function(){const _0x33ed58=$gameMap&&this['_eventId']?$gameMap[_0x1e72('0x3d4')](this[_0x1e72('0x22b')]):null;$gameTemp['registerSelfTarget'](_0x33ed58);const _0x2e4447=VisuMZ['EventsMoveCore'][_0x1e72('0x113')][_0x1e72('0xe7')](this);return $gameTemp[_0x1e72('0x1a')](),_0x2e4447;},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x28')]=Game_Interpreter[_0x1e72('0x368')]['command357'],Game_Interpreter[_0x1e72('0x368')]['command357']=function(_0x466d7f){return $gameTemp[_0x1e72('0x209')](this),VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x28')][_0x1e72('0xe7')](this,_0x466d7f);},Game_Interpreter[_0x1e72('0x368')][_0x1e72('0x298')]=function(_0x269ce5){this['_callEventData']=_0x269ce5;const _0x3c2716='Map%1.json'[_0x1e72('0x279')](_0x269ce5[_0x1e72('0x8e')][_0x1e72('0x396')](0x3));this[_0x1e72('0x1d0')]=_0x1e72('0x377')+Graphics[_0x1e72('0x371')]+'_'+this[_0x1e72('0x31c')](),DataManager[_0x1e72('0x3c1')](this[_0x1e72('0x1d0')],_0x3c2716);if(window[this[_0x1e72('0x1d0')]]){if(_0x1e72('0x267')===_0x1e72('0xea')){function _0x22b2b9(){_0x27f957(this[_0x1e72('0x244')][_0x1e72('0x1a1')](this,_0x34f63e,_0x130f72),0x64);}}else this[_0x1e72('0x193')]();}else this['setWaitMode'](_0x1e72('0x1ab'));},Game_Interpreter[_0x1e72('0x368')][_0x1e72('0x193')]=function(){const _0x1b7d7f=this[_0x1e72('0x2e8')],_0x2d091d=window[this[_0x1e72('0x1d0')]],_0xd777=_0x2d091d['events'][_0x1b7d7f['eventId']];if(_0xd777&&_0xd777[_0x1e72('0x40c')][_0x1b7d7f['pageId']-0x1]){const _0x54f9d0=_0xd777['pages'][_0x1b7d7f[_0x1e72('0x1bf')]-0x1][_0x1e72('0x67')];this[_0x1e72('0x23f')](_0x54f9d0,this[_0x1e72('0x31c')]());}window[this[_0x1e72('0x1d0')]]=undefined,this[_0x1e72('0x1d0')]=undefined,this[_0x1e72('0x2e8')]=undefined;};function Game_CPCInterpreter(){this[_0x1e72('0x35c')][_0x1e72('0x1e8')](this,arguments);};Game_CPCInterpreter[_0x1e72('0x368')]=Object[_0x1e72('0x3aa')](Game_Interpreter[_0x1e72('0x368')]),Game_CPCInterpreter[_0x1e72('0x368')][_0x1e72('0x408')]=Game_CPCInterpreter,Game_CPCInterpreter[_0x1e72('0x368')][_0x1e72('0xdd')]=function(){Game_Interpreter['prototype'][_0x1e72('0xdd')]['call'](this),this[_0x1e72('0x3c9')]=![];},Game_CPCInterpreter[_0x1e72('0x368')][_0x1e72('0x40b')]=function(){while(this[_0x1e72('0x41e')]()){if(_0x1e72('0x432')!==_0x1e72('0x432')){function _0x3ff6ce(){if(_0x5e1cc0||this[_0x1e72('0x299')]()){if(_0x24478b>0x0&&_0x43724f<0x0)return 0x9;if(_0x47bcd8<0x0&&_0x3e906b<0x0)return 0x7;if(_0x3586bc>0x0&&_0xc50c65>0x0)return 0x3;if(_0x455630<0x0&&_0x19981a>0x0)return 0x1;}}}else this[_0x1e72('0x51')]();}},Game_CPCInterpreter[_0x1e72('0x368')][_0x1e72('0x25e')]=function(_0x31fa5e){return Game_Interpreter[_0x1e72('0x368')]['command108'][_0x1e72('0xe7')](this,_0x31fa5e),this[_0x1e72('0x3c7')][_0x1e72('0x2d3')](_0x2fbc34=>_0x2fbc34[_0x1e72('0x112')](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this[_0x1e72('0x3c9')]=!![]),!![];},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x2a6')]=Scene_Map[_0x1e72('0x368')][_0x1e72('0x327')],Scene_Map[_0x1e72('0x368')][_0x1e72('0x327')]=function(){VisuMZ[_0x1e72('0x1d7')]['Scene_Map_startEncounterEffect'][_0x1e72('0xe7')](this),this[_0x1e72('0x2')]['hideShadows']();},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x320')]=Scene_Load[_0x1e72('0x368')][_0x1e72('0x362')],Scene_Load[_0x1e72('0x368')][_0x1e72('0x362')]=function(){if($gameMap)$gameMap[_0x1e72('0x3f4')]();VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x320')][_0x1e72('0xe7')](this);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x21d')]=Sprite_Character[_0x1e72('0x368')]['initMembers'],Sprite_Character['prototype'][_0x1e72('0x9')]=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x21d')]['call'](this),this['initMembersEventsMoveCore'](),this[_0x1e72('0x3a6')]();},Sprite_Character[_0x1e72('0x368')][_0x1e72('0x386')]=function(){this[_0x1e72('0x232')]=0xff;},Sprite_Character[_0x1e72('0x368')][_0x1e72('0x3a6')]=function(){this[_0x1e72('0x32f')]=new Sprite(),this['_eventIconSprite'][_0x1e72('0x2bb')]=ImageManager[_0x1e72('0x3e0')](_0x1e72('0x5c')),this[_0x1e72('0x32f')][_0x1e72('0x367')](0x0,0x0,0x0,0x0),this['_eventIconSprite']['anchor']['x']=0.5,this[_0x1e72('0x32f')]['anchor']['y']=0x1,this[_0x1e72('0x2fe')](this[_0x1e72('0x32f')]);},Sprite_Character[_0x1e72('0x368')][_0x1e72('0x299')]=function(){return this['_characterName']&&this[_0x1e72('0x19')][_0x1e72('0x112')](/\[VS8\]/i);},Sprite_Character[_0x1e72('0x368')]['isAutoBufferIcon']=function(){return this['isSpriteVS8dir']()&&VisuMZ[_0x1e72('0x1d7')]['Settings'][_0x1e72('0x1b1')][_0x1e72('0x3bb')];},VisuMZ[_0x1e72('0x1d7')]['Sprite_Character_update']=Sprite_Character[_0x1e72('0x368')]['update'],Sprite_Character[_0x1e72('0x368')][_0x1e72('0xa4')]=function(){VisuMZ[_0x1e72('0x1d7')]['Sprite_Character_update'][_0x1e72('0xe7')](this);VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')]['Movement'][_0x1e72('0x288')]&&this['updateTilt']();if(this[_0x1e72('0x221')]){if(_0x1e72('0x28f')===_0x1e72('0x28f'))this[_0x1e72('0xd0')]();else{function _0x5b2da9(){this[_0x1e72('0xaf')](_0x39499f);if(_0x3207f4[_0x1e72('0x2f4')](0x0)&&this[_0x1e72('0x28d')]()===_0x1e72('0x3bf'))this[_0x1e72('0x125')](this['x'],this['y']);else(_0x7f8218[_0x1e72('0x2f4')](0x1)||_0x166119[_0x1e72('0x2f4')](0x2))&&this[_0x1e72('0x2f9')]();}}}this[_0x1e72('0x32f')]&&this[_0x1e72('0x385')]();},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x357')]=Sprite_Character[_0x1e72('0x368')][_0x1e72('0x418')],Sprite_Character[_0x1e72('0x368')][_0x1e72('0x418')]=function(){return this[_0x1e72('0x299')]()?this[_0x1e72('0x86')]():VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x357')][_0x1e72('0xe7')](this);},Sprite_Character[_0x1e72('0x368')][_0x1e72('0x86')]=function(){const _0x2abf0f=this[_0x1e72('0x28a')][_0x1e72('0x1f')](),_0x57754c=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return(_0x57754c[_0x2abf0f]-0x2)/0x2;},Sprite_Character[_0x1e72('0x368')][_0x1e72('0xb5')]=function(){this['rotation']=0x0;if(this[_0x1e72('0x3a0')]()){if(_0x1e72('0x17f')!==_0x1e72('0x17f')){function _0x39166(){const _0x51534e=this[_0x1e72('0xc3')]+_0x4227a7(_0x4c26a8['$1']);return this[_0x1e72('0x36d')](_0x51534e);}}else{const _0x54a3c9=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')],_0x48ad88=this[_0x1e72('0x28a')][_0x1e72('0x1f')]();if([0x1,0x4,0x7][_0x1e72('0x2f4')](_0x48ad88))this[_0x1e72('0x1cc')]=_0x54a3c9[_0x1e72('0x5e')];if([0x3,0x6,0x9][_0x1e72('0x2f4')](_0x48ad88))this[_0x1e72('0x1cc')]=_0x54a3c9[_0x1e72('0x143')];if([0x2,0x8][_0x1e72('0x2f4')](_0x48ad88)){if(_0x1e72('0x14c')===_0x1e72('0x14c'))this[_0x1e72('0x1cc')]=[-_0x54a3c9[_0x1e72('0x265')],0x0,_0x54a3c9[_0x1e72('0x265')]][this['_character']['pattern']()];else{function _0x53c89b(){_0x26f5cf[_0x1e72('0x1d7')][_0x1e72('0x32')][_0x1e72('0xe7')](this,_0x3fd119,_0xc3d36d),this[_0x1e72('0x155')](),this['setupMorphEvent'](),this[_0x1e72('0x372')]();}}}}}},Sprite_Character['prototype'][_0x1e72('0x3a0')]=function(){if(this[_0x1e72('0x34a')])return![];return this[_0x1e72('0x28a')][_0x1e72('0x356')]()&&!this[_0x1e72('0x28a')][_0x1e72('0x16e')]()&&!this[_0x1e72('0x28a')][_0x1e72('0xc7')]()&&this[_0x1e72('0x17c')]()===0x0;},Sprite_Character[_0x1e72('0x368')][_0x1e72('0xd0')]=function(){this[_0x1e72('0x221')]['x']=this[_0x1e72('0x28a')][_0x1e72('0x3c6')](),this[_0x1e72('0x221')]['y']=this[_0x1e72('0x28a')][_0x1e72('0x11')](),this['_shadowSprite'][_0x1e72('0x421')]=this[_0x1e72('0x421')],this[_0x1e72('0x221')][_0x1e72('0x35e')]=this['_character'][_0x1e72('0x19a')](),this[_0x1e72('0x221')]['_hidden']=this[_0x1e72('0x43')],!this['_character'][_0x1e72('0x6e')]()?(this['_shadowSprite'][_0x1e72('0x401')]['x']=Math[_0x1e72('0xb4')](0x1,this[_0x1e72('0x221')][_0x1e72('0x401')]['x']+0.1),this[_0x1e72('0x221')][_0x1e72('0x401')]['y']=Math['min'](0x1,this[_0x1e72('0x221')][_0x1e72('0x401')]['y']+0.1)):(this[_0x1e72('0x221')][_0x1e72('0x401')]['x']=Math[_0x1e72('0xef')](0x0,this['_shadowSprite'][_0x1e72('0x401')]['x']-0.1),this[_0x1e72('0x221')]['scale']['y']=Math['max'](0x0,this[_0x1e72('0x221')][_0x1e72('0x401')]['y']-0.1));},Sprite_Character[_0x1e72('0x368')][_0x1e72('0x385')]=function(){const _0x158c9e=this[_0x1e72('0x32f')],_0x1cbd2e=this[_0x1e72('0x17c')]();if(_0x1cbd2e<=0x0){if(_0x1e72('0x3a')===_0x1e72('0x33b')){function _0x2fb432(){this[_0x1e72('0x2cd')]=this[_0x1e72('0x2ac')][_0x1e72('0x3d7')](),this[_0x1e72('0x154')]();}}else return _0x158c9e['setFrame'](0x0,0x0,0x0,0x0);}else{if('AhudN'!==_0x1e72('0xfe')){function _0x4a183f(){if([0x6c,0x198][_0x1e72('0x2f4')](_0x5d55a4['code'])){if(_0x221bea!=='')_0x3539be+='\x0a';_0x561c51+=_0x1d95a4[_0x1e72('0x266')][0x0];}}}else{const _0x31731f=ImageManager[_0x1e72('0x295')],_0x1ad498=ImageManager['iconHeight'],_0x310f9c=_0x1cbd2e%0x10*_0x31731f,_0x7ac483=Math['floor'](_0x1cbd2e/0x10)*_0x1ad498;_0x158c9e[_0x1e72('0x367')](_0x310f9c,_0x7ac483,_0x31731f,_0x1ad498),this['visible']=!![];}}const _0x2a4d93=this[_0x1e72('0x28a')]['getEventIconData']();if(this[_0x1e72('0x27f')]()){if('xskhA'===_0x1e72('0x2b7')){function _0x1c4ed7(){return this['characterName']()[_0x1e72('0x112')](/\[VS8\]/i);}}else this[_0x1e72('0x379')](_0x158c9e);}else _0x158c9e['x']=_0x2a4d93?_0x2a4d93[_0x1e72('0x219')]:0x0,_0x158c9e['y']=_0x2a4d93?-this[_0x1e72('0x43d')]+_0x2a4d93[_0x1e72('0x236')]:0x0;_0x158c9e[_0x1e72('0x18f')]=_0x2a4d93?_0x2a4d93['blendMode']:0x0,this[_0x1e72('0x39e')](_0x158c9e),this[_0x1e72('0x2fe')](_0x158c9e),_0x158c9e[_0x1e72('0x1cc')]=-this['rotation'];},Sprite_Character[_0x1e72('0x368')][_0x1e72('0x379')]=function(_0xd12865){_0xd12865['x']=0x0,_0xd12865['y']=-this['height']+this['height']*0x2/0x5,this[_0x1e72('0x28a')]['pattern']()!==0x1&&(_0xd12865['y']+=0x1);},Sprite_Character[_0x1e72('0x368')][_0x1e72('0x17c')]=function(){if(!this[_0x1e72('0x28a')])return 0x0;const _0x1b58bc=this[_0x1e72('0x28a')][_0x1e72('0x26b')]();return _0x1b58bc?_0x1b58bc[_0x1e72('0x99')]||0x0:0x0;},VisuMZ[_0x1e72('0x1d7')]['Sprite_Balloon_setup']=Sprite_Balloon[_0x1e72('0x368')]['setup'],Sprite_Balloon['prototype'][_0x1e72('0x23e')]=function(_0x7b1cc4,_0x4ccf3e){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x27c')][_0x1e72('0xe7')](this,_0x7b1cc4,_0x4ccf3e),VisuMZ['EventsMoveCore'][_0x1e72('0x18')]['VS8'][_0x1e72('0x12e')]&&this[_0x1e72('0x3ab')][_0x1e72('0x28a')][_0x1e72('0x1be')](_0x4ccf3e,this[_0x1e72('0x3b6')]);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x238')]=Sprite_Balloon[_0x1e72('0x368')][_0x1e72('0x2f1')],Sprite_Balloon[_0x1e72('0x368')][_0x1e72('0x2f1')]=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x238')][_0x1e72('0xe7')](this),this[_0x1e72('0xff')]();},Sprite_Balloon[_0x1e72('0x368')][_0x1e72('0xff')]=function(){this[_0x1e72('0x3ab')][_0x1e72('0x28a')][_0x1e72('0x299')]()&&(this['x']+=VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x1b1')]['BalloonOffsetX'],this['y']+=VisuMZ[_0x1e72('0x1d7')]['Settings'][_0x1e72('0x1b1')][_0x1e72('0x400')]);},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x313')]=Spriteset_Map[_0x1e72('0x368')]['createLowerLayer'],Spriteset_Map[_0x1e72('0x368')][_0x1e72('0x30d')]=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x313')][_0x1e72('0xe7')](this),this[_0x1e72('0xf2')]();},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x91')]=Spriteset_Map[_0x1e72('0x368')][_0x1e72('0x1e7')],Spriteset_Map[_0x1e72('0x368')][_0x1e72('0x1e7')]=function(){VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x91')][_0x1e72('0xe7')](this),this[_0x1e72('0x22c')]();},Spriteset_Map[_0x1e72('0x368')]['createShadows']=function(){if(!VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')][_0x1e72('0xbf')])return;for(const _0x55ce71 of this['_characterSprites']){this[_0x1e72('0x331')](_0x55ce71);}},Spriteset_Map['prototype'][_0x1e72('0x331')]=function(_0x32b3ff){_0x32b3ff[_0x1e72('0x221')]=new Sprite(),_0x32b3ff['_shadowSprite'][_0x1e72('0x2db')]=_0x32b3ff['_character'][_0x1e72('0xcf')](),_0x32b3ff[_0x1e72('0x221')][_0x1e72('0x2bb')]=ImageManager[_0x1e72('0x3e0')](_0x32b3ff[_0x1e72('0x221')][_0x1e72('0x2db')]),_0x32b3ff[_0x1e72('0x221')]['anchor']['x']=0.5,_0x32b3ff['_shadowSprite'][_0x1e72('0x3cf')]['y']=0x1,_0x32b3ff[_0x1e72('0x221')]['z']=0x0,this[_0x1e72('0x2ba')]['addChild'](_0x32b3ff[_0x1e72('0x221')]);},Spriteset_Map['prototype'][_0x1e72('0x411')]=function(){if(!VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')][_0x1e72('0xbf')])return;for(const _0x3a2b68 of this[_0x1e72('0xc5')]){if(_0x1e72('0x119')==='gUnfV')this[_0x1e72('0x2ba')][_0x1e72('0x39e')](_0x3a2b68[_0x1e72('0x221')]);else{function _0x3b1090(){return!!this[_0x1e72('0x2ee')](_0x36a9f3);}}}},Spriteset_Map[_0x1e72('0x368')][_0x1e72('0xf2')]=function(){this[_0x1e72('0x1c0')]=[];for(const _0x70ecfa of $gameMap[_0x1e72('0x1ef')]()){this[_0x1e72('0x1e6')](_0x70ecfa);}},Spriteset_Map[_0x1e72('0x368')][_0x1e72('0x1e6')]=function(_0x135f8b){if(!this[_0x1e72('0xae')](_0x135f8b))return;const _0x26e619=new Window_EventLabel(_0x135f8b);_0x26e619['z']=0x8,_0x26e619[_0x1e72('0x30a')]=Sprite[_0x1e72('0x0')]++,this['_tilemap'][_0x1e72('0x2fe')](_0x26e619),this[_0x1e72('0x1c0')][_0x1e72('0x354')](_0x26e619);},Spriteset_Map[_0x1e72('0x368')][_0x1e72('0xae')]=function(_0x59df42){const _0x24e767=_0x59df42['event']();if(_0x24e767[_0x1e72('0x3b1')][_0x1e72('0x112')](/<LABEL:[ ](.*?)>/i))return!![];if(_0x24e767[_0x1e72('0x3b1')][_0x1e72('0x112')](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x185a03 of _0x24e767['pages']){if(_0x1e72('0x161')!==_0x1e72('0x161')){function _0x8a00ba(){_0x18e907[_0x1e72('0x1d7')][_0x1e72('0x5d')][_0x1e72('0xe7')](this,_0x3294f1),this[_0x1e72('0x108')]=_0x2e238c[_0x1e72('0x179')]();}}else{let _0x552739='';for(const _0x31148c of _0x185a03[_0x1e72('0x67')]){[0x6c,0x198][_0x1e72('0x2f4')](_0x31148c[_0x1e72('0x2c3')])&&(_0x552739+=_0x31148c[_0x1e72('0x266')][0x0]);}if(_0x552739[_0x1e72('0x112')](/<LABEL:[ ](.*?)>/i))return!![];if(_0x552739['match'](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){if(_0x1e72('0x3e8')===_0x1e72('0x257')){function _0x824fb9(){return _0x1f6e60>0x0?0x8:0x2;}}else return!![];}}}return![];},Spriteset_Map['prototype']['createSpawnedEvent']=function(_0x3d1b0f){this[_0x1e72('0xc5')]=this[_0x1e72('0xc5')]||[];const _0x29c2fb=new Sprite_Character(_0x3d1b0f);this[_0x1e72('0xc5')][_0x1e72('0x354')](_0x29c2fb),this['_tilemap'][_0x1e72('0x2fe')](_0x29c2fb),this[_0x1e72('0x331')](_0x29c2fb),this[_0x1e72('0x1e6')](_0x3d1b0f),_0x29c2fb[_0x1e72('0xa4')]();},VisuMZ['EventsMoveCore'][_0x1e72('0x1f7')]=Window_Message[_0x1e72('0x368')][_0x1e72('0x16d')],Window_Message[_0x1e72('0x368')][_0x1e72('0x16d')]=function(){$gameMessage['registerSelfEvent'](),VisuMZ['EventsMoveCore'][_0x1e72('0x1f7')][_0x1e72('0xe7')](this),$gameTemp['clearSelfTarget']();},VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x410')]=Window_ScrollText[_0x1e72('0x368')][_0x1e72('0x16d')],Window_ScrollText['prototype'][_0x1e72('0x16d')]=function(){$gameMessage['registerSelfEvent'](),VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x410')][_0x1e72('0xe7')](this),$gameTemp[_0x1e72('0x1a')]();};function Window_EventLabel(){this[_0x1e72('0x35c')](...arguments);}Window_EventLabel[_0x1e72('0x368')]=Object[_0x1e72('0x3aa')](Window_Base[_0x1e72('0x368')]),Window_EventLabel[_0x1e72('0x368')]['constructor']=Window_EventLabel,Window_EventLabel[_0x1e72('0x368')][_0x1e72('0x35c')]=function(_0x555d92){this['_event']=_0x555d92;const _0x5142ca=new Rectangle(0x0,0x0,Graphics['boxWidth']/0x4,this[_0x1e72('0x2b')](0x1));Window_Base[_0x1e72('0x368')][_0x1e72('0x35c')][_0x1e72('0xe7')](this,_0x5142ca),this['setBackgroundType'](0x2),this[_0x1e72('0x2cd')]='';},Window_EventLabel[_0x1e72('0x368')]['update']=function(){Window_Base[_0x1e72('0x368')][_0x1e72('0xa4')][_0x1e72('0xe7')](this),this[_0x1e72('0x3fc')](),this[_0x1e72('0x8d')](),this['updatePosition'](),this['updateOpacity']();},Window_EventLabel[_0x1e72('0x368')][_0x1e72('0x3fc')]=function(){this[_0x1e72('0x2ac')][_0x1e72('0x3d7')]()!==this[_0x1e72('0x2cd')]&&(this[_0x1e72('0x2cd')]=this[_0x1e72('0x2ac')][_0x1e72('0x3d7')](),this[_0x1e72('0x154')]());},Window_EventLabel[_0x1e72('0x368')][_0x1e72('0x8d')]=function(){this[_0x1e72('0x401')]['x']=0x1/$gameScreen[_0x1e72('0xd7')](),this[_0x1e72('0x401')]['y']=0x1/$gameScreen[_0x1e72('0xd7')]();},Window_EventLabel[_0x1e72('0x368')][_0x1e72('0x2f1')]=function(){const _0x21fef4=SceneManager[_0x1e72('0x350')][_0x1e72('0x2')][_0x1e72('0x46')](this[_0x1e72('0x2ac')]);this['x']=Math['round'](this[_0x1e72('0x2ac')]['screenX']()-Math[_0x1e72('0x206')](this[_0x1e72('0x3e4')]*this[_0x1e72('0x401')]['x']/0x2)),this['x']+=this[_0x1e72('0x2ac')][_0x1e72('0x41a')][_0x1e72('0x1cb')],this['y']=this[_0x1e72('0x2ac')]['screenY']()-_0x21fef4['height'],this['y']+=Math[_0x1e72('0x7e')]($gameSystem[_0x1e72('0x71')]()*0.5),this['y']-=Math[_0x1e72('0x7e')](this[_0x1e72('0x43d')]*this[_0x1e72('0x401')]['y']),this['y']+=this[_0x1e72('0x2ac')][_0x1e72('0x41a')][_0x1e72('0x4f')];},Window_EventLabel[_0x1e72('0x368')]['updateOpacity']=function(){if(this[_0x1e72('0x183')]())this[_0x1e72('0x273')]+=this[_0x1e72('0x2c8')]();else{if(SceneManager[_0x1e72('0x350')][_0x1e72('0x3da')]>0x0){if('JUyiB'!==_0x1e72('0x29d'))this[_0x1e72('0x273')]=0x0;else{function _0x4b2a9d(){const _0x31acf1=_0x203d28['getSavedEventLocation'](this);if(!_0x31acf1)return;this[_0x1e72('0x197')](_0x31acf1['x'],_0x31acf1['y']),this[_0x1e72('0xaa')](_0x31acf1[_0x1e72('0x1f')]),this[_0x1e72('0xb9')]===_0x31acf1[_0x1e72('0xd6')]&&(this[_0x1e72('0x172')]=_0x31acf1[_0x1e72('0x3ac')]);}}}else{if(_0x1e72('0x31b')!==_0x1e72('0x31b')){function _0x50de72(){_0x59677a[_0x1e72('0x1d7')][_0x1e72('0x88')][_0x1e72('0xe7')](this,_0x5e045f,_0x5e4448);}}else this[_0x1e72('0x273')]-=this[_0x1e72('0x2c8')]();}}},Window_EventLabel['prototype'][_0x1e72('0x183')]=function(){if(!$gameSystem['eventLabelsVisible']())return![];if(this[_0x1e72('0x2ac')]?.[_0x1e72('0x25')])return![];if(SceneManager['_scene'][_0x1e72('0x3da')]>0x0)return![];const _0x49c067=$gamePlayer['x'],_0x378b0a=$gamePlayer['y'],_0x3e2536=this['_event']['x'],_0x118d46=this[_0x1e72('0x2ac')]['y'];if($gameMap[_0x1e72('0x1c5')](_0x49c067,_0x378b0a,_0x3e2536,_0x118d46)>this[_0x1e72('0x2ac')][_0x1e72('0x137')]()){if(_0x1e72('0x270')===_0x1e72('0x270'))return![];else{function _0xf3aa6a(){if(!this[_0x1e72('0x1d5')])return;this[_0x1e72('0x22e')]=this[_0x1e72('0x22e')]||0x3c,this['_periodicRefreshTimer']--,this[_0x1e72('0x22e')]<=0x0&&(this[_0x1e72('0x380')](),this['_periodicRefreshTimer']=0x3c);}}}return!![];},Window_EventLabel[_0x1e72('0x368')][_0x1e72('0x2c8')]=function(){return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x7b')][_0x1e72('0x42e')];},Window_EventLabel[_0x1e72('0x368')][_0x1e72('0x145')]=function(){const _0x2e0a13=this[_0x1e72('0x188')](this[_0x1e72('0x2cd')]);this[_0x1e72('0x3e4')]=_0x2e0a13[_0x1e72('0x3e4')]+($gameSystem['windowPadding']()+this['itemPadding']())*0x2,this[_0x1e72('0x43d')]=Math[_0x1e72('0xef')](this[_0x1e72('0x1fd')](),_0x2e0a13[_0x1e72('0x43d')])+$gameSystem['windowPadding']()*0x2,this[_0x1e72('0x3f5')]();},Window_EventLabel['prototype'][_0x1e72('0x1fd')]=function(){return VisuMZ[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x7b')][_0x1e72('0x43b')];},Window_EventLabel['prototype'][_0x1e72('0x3ad')]=function(){Window_Base[_0x1e72('0x368')]['resetFontSettings'][_0x1e72('0xe7')](this),this[_0x1e72('0xc')]['fontSize']=this[_0x1e72('0x272')]();},Window_EventLabel[_0x1e72('0x368')][_0x1e72('0x272')]=function(){return VisuMZ['EventsMoveCore'][_0x1e72('0x18')][_0x1e72('0x7b')][_0x1e72('0x1e4')];},Window_EventLabel['prototype'][_0x1e72('0x154')]=function(){this[_0x1e72('0x145')](),this[_0x1e72('0xc')][_0x1e72('0xdd')]();const _0x4736ed=this[_0x1e72('0x2cd')][_0x1e72('0x1b8')](/[\r\n]+/);let _0x185496=0x0;for(const _0x345c of _0x4736ed){const _0x45087f=this[_0x1e72('0x188')](_0x345c),_0x3eaf21=Math[_0x1e72('0x206')]((this[_0x1e72('0x2e6')]-_0x45087f[_0x1e72('0x3e4')])/0x2);this[_0x1e72('0x14a')](_0x345c,_0x3eaf21,_0x185496),_0x185496+=_0x45087f[_0x1e72('0x43d')];}},Window_EventLabel[_0x1e72('0x368')][_0x1e72('0x39f')]=function(_0x362d5f,_0x11715f){if(_0x11715f[_0x1e72('0x323')]){if(_0x1e72('0x2b1')!==_0x1e72('0x2b1')){function _0x1bbf4b(){const _0x3d88ea=_0x3d828e[_0x1e72('0x1d7')][_0x1e72('0x18')][_0x1e72('0x199')];if(!_0x3d88ea[_0x1e72('0x20e')])return _0x27e520;return[0x1,0x3,0x7,0x9][_0x1e72('0x2f4')](this[_0x1e72('0x19b')])&&(_0x579efc*=_0x3d88ea[_0x1e72('0x248')]||0.01),_0x1c47f4;}}else this[_0x1e72('0x95')](_0x362d5f,_0x11715f['x']+0x2,_0x11715f['y']);}_0x11715f['x']+=Math[_0x1e72('0xb4')](this['iconSize'](),ImageManager[_0x1e72('0x295')])+0x4;},Window_EventLabel[_0x1e72('0x368')][_0x1e72('0x95')]=function(_0x4f56d9,_0x3a3a48,_0x261f2f){const _0x598298=ImageManager[_0x1e72('0x3e0')](_0x1e72('0x5c')),_0x56a2da=ImageManager[_0x1e72('0x295')],_0x1d7da6=ImageManager[_0x1e72('0x177')],_0x4f8390=_0x4f56d9%0x10*_0x56a2da,_0x6d475b=Math['floor'](_0x4f56d9/0x10)*_0x1d7da6,_0x1ae4fd=Math['min'](this[_0x1e72('0x13e')]()),_0x1e2023=Math[_0x1e72('0xb4')](this[_0x1e72('0x13e')]());this[_0x1e72('0xc')][_0x1e72('0x3b7')](_0x598298,_0x4f8390,_0x6d475b,_0x56a2da,_0x1d7da6,_0x3a3a48,_0x261f2f,_0x1ae4fd,_0x1e2023);},Window_EventLabel[_0x1e72('0x368')][_0x1e72('0x13e')]=function(){return VisuMZ[_0x1e72('0x1d7')]['Settings'][_0x1e72('0x7b')][_0x1e72('0x25c')];};