// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"================================","status":false,"description":"==================================================================","parameters":{}},
{"name":"AkeaAnimatedBattleSystem","status":true,"description":"[v1.2.0] Akea Animated Battle System 2","parameters":{"Frame Configuration":"[\"{\\\"FrameNum\\\":\\\"3\\\",\\\"SpritesheetHeight\\\":\\\"6\\\",\\\"SpritesheetWidth\\\":\\\"9\\\"}\",\"{\\\"FrameNum\\\":\\\"1\\\",\\\"SpritesheetHeight\\\":\\\"1\\\",\\\"SpritesheetWidth\\\":\\\"1\\\"}\"]","Actor Configuration":"[\"{\\\"id\\\":\\\"1\\\",\\\"baseSpritesheet\\\":\\\"1\\\"}\",\"{\\\"id\\\":\\\"2\\\",\\\"baseSpritesheet\\\":\\\"1\\\"}\",\"{\\\"id\\\":\\\"3\\\",\\\"baseSpritesheet\\\":\\\"1\\\"}\"]","Actor Poses":"[\"{\\\"id\\\":\\\"1\\\",\\\"poses\\\":\\\"[\\\\\\\"1\\\\\\\",\\\\\\\"2\\\\\\\",\\\\\\\"3\\\\\\\",\\\\\\\"4\\\\\\\",\\\\\\\"5\\\\\\\",\\\\\\\"6\\\\\\\",\\\\\\\"7\\\\\\\",\\\\\\\"8\\\\\\\",\\\\\\\"9\\\\\\\",\\\\\\\"10\\\\\\\",\\\\\\\"11\\\\\\\",\\\\\\\"12\\\\\\\",\\\\\\\"13\\\\\\\",\\\\\\\"14\\\\\\\",\\\\\\\"15\\\\\\\",\\\\\\\"16\\\\\\\",\\\\\\\"17\\\\\\\",\\\\\\\"18\\\\\\\"]\\\"}\",\"{\\\"id\\\":\\\"2\\\",\\\"poses\\\":\\\"[\\\\\\\"1\\\\\\\",\\\\\\\"2\\\\\\\",\\\\\\\"3\\\\\\\",\\\\\\\"4\\\\\\\",\\\\\\\"5\\\\\\\",\\\\\\\"6\\\\\\\",\\\\\\\"7\\\\\\\",\\\\\\\"8\\\\\\\",\\\\\\\"9\\\\\\\",\\\\\\\"10\\\\\\\",\\\\\\\"11\\\\\\\",\\\\\\\"12\\\\\\\",\\\\\\\"13\\\\\\\",\\\\\\\"14\\\\\\\",\\\\\\\"15\\\\\\\",\\\\\\\"16\\\\\\\",\\\\\\\"17\\\\\\\",\\\\\\\"18\\\\\\\"]\\\"}\",\"{\\\"id\\\":\\\"3\\\",\\\"poses\\\":\\\"[\\\\\\\"1\\\\\\\",\\\\\\\"2\\\\\\\",\\\\\\\"3\\\\\\\",\\\\\\\"4\\\\\\\",\\\\\\\"5\\\\\\\",\\\\\\\"6\\\\\\\",\\\\\\\"7\\\\\\\",\\\\\\\"8\\\\\\\",\\\\\\\"9\\\\\\\",\\\\\\\"10\\\\\\\",\\\\\\\"11\\\\\\\",\\\\\\\"12\\\\\\\",\\\\\\\"13\\\\\\\",\\\\\\\"14\\\\\\\",\\\\\\\"15\\\\\\\",\\\\\\\"16\\\\\\\",\\\\\\\"17\\\\\\\",\\\\\\\"18\\\\\\\"]\\\"}\"]","Enemy Configuration":"[\"{\\\"id\\\":\\\"1\\\",\\\"baseSpritesheet\\\":\\\"2\\\",\\\"svBattler\\\":\\\"Gnome\\\"}\"]","Enemy Poses":"[]","Poses":"[\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"walk\\\",\\\"InOut\\\":\\\"true\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"0\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"wait\\\",\\\"InOut\\\":\\\"true\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"0\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"chant\\\",\\\"InOut\\\":\\\"true\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"2\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"guard\\\",\\\"InOut\\\":\\\"true\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"3\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"damage\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"4\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"evade\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"5\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"thrust\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"6\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"swing\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"7\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"missile\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"8\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"skill\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"9\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"spell\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"10\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"item\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"11\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"escape\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"12\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"victory\\\",\\\"InOut\\\":\\\"true\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"13\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"dying\\\",\\\"InOut\\\":\\\"true\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"14\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"abnormal\\\",\\\"InOut\\\":\\\"true\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"15\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"sleep\\\",\\\"InOut\\\":\\\"true\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"16\\\"}\",\"{\\\"info\\\":\\\"default\\\",\\\"name\\\":\\\"dead\\\",\\\"InOut\\\":\\\"true\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"17\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"wait\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"0\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"guard\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"1\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"abnormal\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"2\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"damage\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"3\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"swing\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"4\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"item\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"5\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"spell\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"6\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"chant\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"7\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"walk\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"8\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"retreat\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"9\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"victory\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"10\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"enter\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"false\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"11\\\"}\",\"{\\\"info\\\":\\\"holder\\\",\\\"name\\\":\\\"dead\\\",\\\"InOut\\\":\\\"false\\\",\\\"loop\\\":\\\"true\\\",\\\"frequency\\\":\\\"12\\\",\\\"poseIndex\\\":\\\"12\\\"}\"]","Actions":"[\"{\\\"info\\\":\\\"entry\\\",\\\"pose\\\":\\\"walk\\\",\\\"time\\\":\\\"60\\\",\\\"movementType\\\":\\\"fromHome\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"standing\\\",\\\"pose\\\":\\\"wait\\\",\\\"time\\\":\\\"10\\\",\\\"movementType\\\":\\\"noMove\\\",\\\"offsetX\\\":\\\"-96\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"step foward\\\",\\\"pose\\\":\\\"walk\\\",\\\"time\\\":\\\"10\\\",\\\"movementType\\\":\\\"fromHome\\\",\\\"offsetX\\\":\\\"-60\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"step backward\\\",\\\"pose\\\":\\\"evade\\\",\\\"time\\\":\\\"30\\\",\\\"movementType\\\":\\\"fromHome\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"4\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"retreat\\\",\\\"pose\\\":\\\"evade\\\",\\\"time\\\":\\\"60\\\",\\\"movementType\\\":\\\"fromHome\\\",\\\"offsetX\\\":\\\"500\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"1\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"damage\\\",\\\"pose\\\":\\\"damage\\\",\\\"time\\\":\\\"10\\\",\\\"movementType\\\":\\\"noMove\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"evade\\\",\\\"pose\\\":\\\"evade\\\",\\\"time\\\":\\\"10\\\",\\\"movementType\\\":\\\"fromHome\\\",\\\"offsetX\\\":\\\"20\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"3\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"move to target\\\",\\\"pose\\\":\\\"walk\\\",\\\"time\\\":\\\"30\\\",\\\"movementType\\\":\\\"target\\\",\\\"offsetX\\\":\\\"50\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"2\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"swing attack\\\",\\\"pose\\\":\\\"swing\\\",\\\"time\\\":\\\"5\\\",\\\"movementType\\\":\\\"noMove\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"move to spell\\\",\\\"pose\\\":\\\"walk\\\",\\\"time\\\":\\\"30\\\",\\\"movementType\\\":\\\"target\\\",\\\"offsetX\\\":\\\"200\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"2\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"casting\\\",\\\"pose\\\":\\\"chant\\\",\\\"time\\\":\\\"60\\\",\\\"movementType\\\":\\\"noMove\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"spell\\\",\\\"pose\\\":\\\"spell\\\",\\\"time\\\":\\\"5\\\",\\\"movementType\\\":\\\"noMove\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"reid prepare\\\",\\\"pose\\\":\\\"skill\\\",\\\"time\\\":\\\"5\\\",\\\"movementType\\\":\\\"noMove\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"reid slash 01\\\",\\\"pose\\\":\\\"swing\\\",\\\"time\\\":\\\"10\\\",\\\"movementType\\\":\\\"target\\\",\\\"offsetX\\\":\\\"-100\\\",\\\"offsetY\\\":\\\"-64\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"reid slash 02\\\",\\\"pose\\\":\\\"swing\\\",\\\"time\\\":\\\"10\\\",\\\"movementType\\\":\\\"target\\\",\\\"offsetX\\\":\\\"100\\\",\\\"offsetY\\\":\\\"64\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"true\\\"}\",\"{\\\"info\\\":\\\"reid slash 03\\\",\\\"pose\\\":\\\"swing\\\",\\\"time\\\":\\\"10\\\",\\\"movementType\\\":\\\"target\\\",\\\"offsetX\\\":\\\"-100\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"reid slash 04\\\",\\\"pose\\\":\\\"swing\\\",\\\"time\\\":\\\"10\\\",\\\"movementType\\\":\\\"target\\\",\\\"offsetX\\\":\\\"100\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"true\\\"}\",\"{\\\"info\\\":\\\"ghost move\\\",\\\"pose\\\":\\\"walk\\\",\\\"time\\\":\\\"10\\\",\\\"movementType\\\":\\\"target\\\",\\\"offsetX\\\":\\\"-90\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"true\\\"}\",\"{\\\"info\\\":\\\"kasey star shoot 01\\\",\\\"pose\\\":\\\"walk\\\",\\\"time\\\":\\\"30\\\",\\\"movementType\\\":\\\"target\\\",\\\"offsetX\\\":\\\"225\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"2\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"kasey fireball 01\\\",\\\"pose\\\":\\\"evade\\\",\\\"time\\\":\\\"80\\\",\\\"movementType\\\":\\\"absolute\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"-90\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"true\\\",\\\"mirror\\\":\\\"true\\\"}\",\"{\\\"info\\\":\\\"kasey fireball 02\\\",\\\"pose\\\":\\\"spell\\\",\\\"time\\\":\\\"5\\\",\\\"movementType\\\":\\\"noMove\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"true\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"eliot split 01\\\",\\\"pose\\\":\\\"swing\\\",\\\"time\\\":\\\"20\\\",\\\"movementType\\\":\\\"target\\\",\\\"offsetX\\\":\\\"60\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"10\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"false\\\"}\",\"{\\\"info\\\":\\\"eliot heal 01\\\",\\\"pose\\\":\\\"walk\\\",\\\"time\\\":\\\"30\\\",\\\"movementType\\\":\\\"target\\\",\\\"offsetX\\\":\\\"-100\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"true\\\"}\",\"{\\\"info\\\":\\\"eliot heal 02\\\",\\\"pose\\\":\\\"chant\\\",\\\"time\\\":\\\"20\\\",\\\"movementType\\\":\\\"noMove\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"true\\\"}\",\"{\\\"info\\\":\\\"eliot heal 03\\\",\\\"pose\\\":\\\"spell\\\",\\\"time\\\":\\\"5\\\",\\\"movementType\\\":\\\"noMove\\\",\\\"offsetX\\\":\\\"0\\\",\\\"offsetY\\\":\\\"0\\\",\\\"jumpHeight\\\":\\\"0\\\",\\\"levitate\\\":\\\"false\\\",\\\"mirror\\\":\\\"true\\\"}\"]","Script":"[]","entryActors":"{\"action\":\"1\",\"offsetX\":\"400\",\"offsetY\":\"-50\",\"homeX\":\"820 + index * 32\",\"homeY\":\"340 + index * 48\"}","entryEnemies":"{\"action\":\"1\",\"offsetX\":\"-400\",\"offsetY\":\"-50\",\"homeX\":\"0\",\"homeY\":\"0\"}","returnAction":"4","idleAction":"2","stepForward":"3","retreat":"5","damage":"6","evade":"7","shortNoteNotation":"false"}},
{"name":"--------------------------------","status":false,"description":"------------------------------------------------------------------","parameters":{}},
{"name":"AkeaAnimatedCursor","status":true,"description":"[v1.0.0] Akea Animated Cursor","parameters":{"defaultWindow":"false","MainCursor":"{\"cursorImage\":\"cursor1\",\"maxMotion\":\"0\",\"motionSpeed\":\"0.00\",\"y\":\"0\",\"rotation\":\"0.05\"}","SecondCursor":"{\"cursorImage\":\"cursor2\",\"maxMotion\":\"6\",\"motionSpeed\":\"0.5\",\"y\":\"-25\",\"rotation\":\"0.00\"}","actorText":"{\"textColor\":\"008408\",\"outlineColor\":\"FFFFFF\",\"outlineWidth\":\"3\",\"fontSize\":\"20\",\"x\":\"20\",\"y\":\"0\"}","enemyText":"{\"textColor\":\"860000\",\"outlineColor\":\"FFFFFF\",\"outlineWidth\":\"3\",\"fontSize\":\"20\",\"x\":\"-50\",\"y\":\"0\"}"}},
{"name":"AkeaAnimatedBattlerOrder","status":false,"description":"[v1.0.1] Akea Animated Battler Order","parameters":{"actorFrame":"[\"{\\\"battlerImage\\\":\\\"ReidFrame\\\",\\\"id\\\":\\\"1\\\"}\",\"{\\\"battlerImage\\\":\\\"KaseyFrame\\\",\\\"id\\\":\\\"2\\\"}\",\"{\\\"battlerImage\\\":\\\"EliotFrame\\\",\\\"id\\\":\\\"3\\\"}\"]","enemyFrame":"[\"{\\\"battlerImage\\\":\\\"FrogogoFrame\\\",\\\"id\\\":\\\"1\\\"}\"]","hudConfig":"{\"x\":\"0\",\"y\":\"0\",\"hudImage\":\"orderHud\"}","framePos":"{\"startX\":\"38\",\"endX\":\"38\",\"startY\":\"622\",\"endY\":\"104\",\"actX\":\"38\",\"actY\":\"68\"}","startingOpacity":"150","startingScale":"0.7","atbBar":"false"}},
{"name":"AkeaBattlerControl","status":true,"description":"[v1.0.1] Akea Battler Control","parameters":{}},
{"name":"AkeaBattleShockwaveEffect","status":true,"description":"[v1.0.0] Akea Battle Shockwave Effect","parameters":{}},
{"name":"AkeaBattleCamera","status":true,"description":"[v1.1.0] Akea Battle Camera","parameters":{"defaultCameraMode":"0","defaultSmoothExponent":"1.5","defaultActor":"{\"x\":\"0\",\"y\":\"0\",\"zoom\":\"1.0\",\"duration\":\"30\"}","defaultEnemy":"{\"x\":\"0\",\"y\":\"0\",\"zoom\":\"1.0\",\"duration\":\"30\"}","resetCameraActionEnd":"true","bitmapSmoothMode":"false"}},
{"name":"AkeaSVWeaponsPlus","status":true,"description":"[v1.0.0] Use custom graphics for each weapon in battle.","parameters":{"weaponSettings":"[\"{\\\"weaponId\\\":\\\"2\\\",\\\"filename\\\":\\\"MZCoverArtDLCWeapons\\\",\\\"index\\\":\\\"1\\\"}\",\"{\\\"weaponId\\\":\\\"10\\\",\\\"filename\\\":\\\"MZCoverArtDLCWeapons\\\",\\\"index\\\":\\\"2\\\"}\"]"}},
{"name":"================================","status":false,"description":"==================================================================","parameters":{}},
{"name":"GabeMZ_DisableTitleScreen","status":true,"description":"[v1.0.0] Disable the default Title Screen.","parameters":{"defaultTitleScreen":"false"}},
{"name":"--------------------------------","status":false,"description":"------------------------------------------------------------------","parameters":{}},
{"name":"GabeMZ_MessagePlus","status":true,"description":"[v1.0.1b] Improved message system.","parameters":{"defaultSettings":"===============================================","defaultXPos":"(Graphics.width - Graphics.boxWidth) / 2","defaultYPos":"Graphics.boxHeight - this.height","defaultWidth":"Graphics.boxWidth","defaultHeight":"this.fittingHeight(4)","defaultPadding":"12","pauseSignSettings":"===============================================","defaultPauseSignXPos":"this._width - 24","defaultPauseSignYPos":"this._height + 6","defaultPauseSignVisible":"true","balloonModeSettings":"===============================================","balloonPopFilename":"MessagePop","balloonPopOffset":"4","nameBoxDefaultSettings":"===============================================","nameBoxDefaultX":"Left","nameBoxDefaultY":"Upper","nameBoxDefaultPadding":"12","choiceListDefaultSettings":"===============================================","choiceListDefaultXOffset":"0","choiceListDefaultYOffset":"0","choiceListDefaultPadding":"12","sfxSettings":"===============================================","sfxList":"[\"{\\\"filename\\\":\\\"gui/Message\\\",\\\"frequency\\\":\\\"1\\\",\\\"volume\\\":\\\"25\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\",\"{\\\"filename\\\":\\\"Cursor2\\\",\\\"frequency\\\":\\\"2\\\",\\\"volume\\\":\\\"25\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\"]","defaultSFXId":"1","otherSettings":"===============================================","colorPicker":"[\"#0398fc\",\"rgba(119, 209, 92, 255)\",\"rgba(150, 40, 27, 1)\",\"rgba(0, 0, 0, 100)\",\"\"]"}},
{"name":"GabeMZ_RegionPlus","status":true,"description":"[v1.0.1] Adds improvements and new functions to the game regions.","parameters":{"passageSettings":"","onlyPlayerRegion":"40","onlyEventRegion":"41","passableRegion":"42","impassableRegion":"43"}},
{"name":"--------------------------------","status":false,"description":"------------------------------------------------------------------","parameters":{}},
{"name":"GabeMZ_FogEffects","status":true,"description":"[v2.1.0] Allows to create and display fog effects on maps and battles.","parameters":{"fogSettings":"[\"{\\\"fogFilename\\\":\\\"Fog\\\",\\\"fogOpacity\\\":\\\"100\\\",\\\"fogBlendMode\\\":\\\"0\\\",\\\"fogMoveX\\\":\\\"1.0\\\",\\\"fogMoveY\\\":\\\"0\\\"}\",\"{\\\"fogFilename\\\":\\\"Fog\\\",\\\"fogOpacity\\\":\\\"115\\\",\\\"fogBlendMode\\\":\\\"0\\\",\\\"fogMoveX\\\":\\\"2.0\\\",\\\"fogMoveY\\\":\\\"0\\\"}\",\"{\\\"fogFilename\\\":\\\"Fog\\\",\\\"fogOpacity\\\":\\\"75\\\",\\\"fogBlendMode\\\":\\\"0\\\",\\\"fogMoveX\\\":\\\"3.0\\\",\\\"fogMoveY\\\":\\\"0\\\"}\",\"{\\\"fogFilename\\\":\\\"Rain\\\",\\\"fogOpacity\\\":\\\"0\\\",\\\"fogBlendMode\\\":\\\"0\\\",\\\"fogMoveX\\\":\\\"0.9\\\",\\\"fogMoveY\\\":\\\"5.0\\\"}\",\"{\\\"fogFilename\\\":\\\"Rain\\\",\\\"fogOpacity\\\":\\\"0\\\",\\\"fogBlendMode\\\":\\\"0\\\",\\\"fogMoveX\\\":\\\"0.5\\\",\\\"fogMoveY\\\":\\\"3.0\\\"}\",\"{\\\"fogFilename\\\":\\\"Fog\\\",\\\"fogOpacity\\\":\\\"75\\\",\\\"fogBlendMode\\\":\\\"2\\\",\\\"fogMoveX\\\":\\\"1.0\\\",\\\"fogMoveY\\\":\\\"0\\\"}\"]","fogInMap":"true","fogInBattle":"true","fogOptionsMenuCommand":"===============================================","commandEnabled":"true","commandName":"Fog Effects"}},
{"name":"GabeMZ_StepSound","status":false,"description":"[v1.5.1] Allows characters to emit step sounds when walking.","parameters":{"stepSoundSettings":"[\"{\\\"baseName\\\":\\\"Step_Grass\\\",\\\"variance\\\":\\\"6\\\",\\\"volume\\\":\\\"75\\\",\\\"volumeVariance\\\":\\\"0\\\",\\\"pitch\\\":\\\"100\\\",\\\"pitchVariance\\\":\\\"0\\\",\\\"pan\\\":\\\"0\\\",\\\"panVariance\\\":\\\"0\\\"}\",\"{\\\"baseName\\\":\\\"Step_Grass\\\",\\\"variance\\\":\\\"6\\\",\\\"volume\\\":\\\"75\\\",\\\"volumeVariance\\\":\\\"0\\\",\\\"pitch\\\":\\\"100\\\",\\\"pitchVariance\\\":\\\"0\\\",\\\"pan\\\":\\\"0\\\",\\\"panVariance\\\":\\\"0\\\"}\",\"{\\\"baseName\\\":\\\"Step_Stone\\\",\\\"variance\\\":\\\"8\\\",\\\"volume\\\":\\\"75\\\",\\\"volumeVariance\\\":\\\"0\\\",\\\"pitch\\\":\\\"100\\\",\\\"pitchVariance\\\":\\\"0\\\",\\\"pan\\\":\\\"0\\\",\\\"panVariance\\\":\\\"0\\\"}\"]","playerStepSound":"true","followersStepSound":"false","walkingFrequency":"100","dashingFrequency":"90"}},
{"name":"GabeMZ_EventFloatingInfo","status":true,"description":"[v1.0.0] Allows to display floating infos above the events.","parameters":{}},
{"name":"GabeMZ_EventTouchInteract","status":true,"description":"[v1.0.3] Allows you to interact with events using touch even from a distance.","parameters":{}},
{"name":"--------------------------------","status":false,"description":"------------------------------------------------------------------","parameters":{}},
{"name":"GabeMZ_SmartFollowers","status":true,"description":"[v1.1.1] Changes the way followers behave for a more intelligent movement.","parameters":{"turnToward":"true","preventDiagonalClip":"true"}},
{"name":"GabeMZ_FollowersControl","status":true,"description":"[v1.0.4] Allows to control the followers via the event commands.","parameters":{}},
{"name":"GabeMZ_FollowersInteraction","status":true,"description":"[v1.0.0] Allows to interact with followers, calling Common Events that can be freely configured.","parameters":{"keyCode":"17","commonEventList":"[\"{\\\"actorId\\\":\\\"1\\\",\\\"commonEventId\\\":\\\"1\\\"}\",\"{\\\"actorId\\\":\\\"2\\\",\\\"commonEventId\\\":\\\"2\\\"}\",\"{\\\"actorId\\\":\\\"3\\\",\\\"commonEventId\\\":\\\"3\\\"}\"]"}},
{"name":"--------------------------------","status":false,"description":"------------------------------------------------------------------","parameters":{}},
{"name":"GabeMZ_StopAudioOnBlur","status":true,"description":"[v1.0.0] Stops playing audio when game window is blurred.","parameters":{}},
{"name":"================================","status":false,"description":"==================================================================","parameters":{}},
{"name":"IgnisItemGoldPopup","status":true,"description":"Item and Gold Popup v.1.0.0","parameters":{"switchPopUp":"true","windowWidth":"300","windowHeight":"56","dynamic":"true","outlineSize":"3","fontSize":"24","fontName":"","fontColorGold":"FFFFFF","outlineColorGold":"000000","fontColorItem":"FFFFFF","outlineColorItem":"000000","fontColorWeapon":"FFFFFF","outlineColorWeapon":"000000","fontColorEquip":"FFFFFF","outlineColorEquip":"000000"}},
{"name":"IgnisFollowersRotation","status":true,"description":"Adds a camera to battle and allows to control it.","parameters":{"rotateUp":"pageup","rotateDown":"pagedown"}},
{"name":"--------------------------------","status":false,"description":"------------------------------------------------------------------","parameters":{}},
{"name":"IgnisDebugControl","status":true,"description":"Debug control for developing","parameters":{"DebugWindow":"false"}},
{"name":"================================","status":false,"description":"==================================================================","parameters":{}},
{"name":"DragonSmoothCamera","status":true,"description":"It provides some functions to make your game's camera smoother and more functional.","parameters":{"slideCoefficient":"550","cameraOffset":"{\"x\": \"0\", \"y\": \"0\"}","dinamicCameraOffset":"false","charDirVariableName":"_direction","cameraOffsetbyDir":"{\"1\":\"{\\\"x\\\": \\\"-60\\\", \\\"y\\\": \\\"60\\\"}\",\"2\":\"{\\\"x\\\": \\\"0\\\", \\\"y\\\": \\\"60\\\"}\",\"3\":\"{\\\"x\\\": \\\"60\\\", \\\"y\\\": \\\"60\\\"}\",\"4\":\"{\\\"x\\\": \\\"-60\\\", \\\"y\\\": \\\"0\\\"}\",\"6\":\"{\\\"x\\\": \\\"60\\\", \\\"y\\\": \\\"0\\\"}\",\"7\":\"{\\\"x\\\": \\\"-60\\\", \\\"y\\\": \\\"-60\\\"}\",\"8\":\"{\\\"x\\\": \\\"0\\\", \\\"y\\\": \\\"-60\\\"}\",\"9\":\"{\\\"x\\\": \\\"60\\\", \\\"y\\\": \\\"-60\\\"}\"}"}},
{"name":"================================","status":false,"description":"==================================================================","parameters":{}},
{"name":"comuns-pixi-filters","status":true,"description":"Imports the pixi default filters.","parameters":{}},
{"name":"--------------------------------","status":false,"description":"------------------------------------------------------------------","parameters":{}},
{"name":"schach-parsing","status":true,"description":"Parsing core library.","parameters":{}},
{"name":"schach-pathfinding","status":true,"description":"Shortest path algorithm implementations.","parameters":{}},
{"name":"================================","status":false,"description":"==================================================================","parameters":{}}
];
