var vlx = null;
var gameSurface = null;
var mode = "front";
var lives = 3;
var level = 0;
var balls = null;
var bonuses = null;
var animatingBlocks = null;
var map = null;
var ballAreaWidth = 0;
var markers;
var player = null;
var moveLeftDown = false;
var moveRightDown = false;
var currentDialogContent = null;
var targetTilesRemaining = 0;

var speedMod = 1;
var adVisible = true;

var levels = [
    "_____________ " + // 1
    "_____________ " +
    "_____________ " +
    "0000000000000 " +
    "1111111111111 " +
    "3333333333333 " +
    "4444444444444 " +
    "5555555555555 " +
    "2222222222222 ",
    "_____________ " + // 2
    "_____________ " +
    "55551___15555 " +
    "____1___1____ " +
    "____1___1____ " +
    "11111_0_11111 " +
    "1____000____1 " +
    "1____000____1 " +
    "11111_0_11111 " +
    "____1___1____ " +
    "____1___1____ " +
    "44441___14444 ",
    "_____________ " + // 3
    "_____________ " +
    "0000000000000 " +
    "3334330331333 " +
    "3344330331133 " +
    "3444440111113 " +
    "4444440111111 " +
    "3444440111113 " +
    "3344330331133 " +
    "3334330331333 " +
    "0000000000000 ",
    "_____________ " + // 4
    "_____________ " +
    "0000000000000 " +
    "0123012301230 " +
    "0123012301230 " +
    "0123012301230 " +
    "0123012301230 " +
    "0123012301230 " +
    "0123012301230 " +
    "0123012301230 " +
    "0000000000000 ",
    "_____________ " + // 5
    "1____________ " +
    "12___________ " +
    "123__________ " +
    "1234_________ " +
    "12345________ " +
    "123451_______ " +
    "1234512______ " +
    "12345123_____ " +
    "123451234____ " +
    "1234512345___ " +
    "12345123451__ " +
    "123451234512_ " +
    "0000000000000 ",
    "_____________ " + // 6
    "___3_____3___ " +
    "___3_____3___ " +
    "____3___3____ " +
    "___0000000___ " +
    "__000000000__ " +
    "__001000100__ " +
    "_00010001000_ " +
    "_00000000000_ " +
    "_00000000000_ " +
    "_0_0000000_0_ " +
    "_0_0_____0_0_ " +
    "_0_0_____0_0_ " +
    "____00_00____ ",
    "_____________ " + // 7
    "______0______ " +
    "______10_____ " +
    "______210____ " +
    "___0__3210___ " +
    "__010_43210__ " +
    "_0121__43210_ " +
    "0123365643210 " +
    "0123444442210 " +
    "0123465642110 " +
    "_01234_21100_ " +
    "__0123_100___ " +
    "___012_______ " +
    "____01_______ " +
    "_____0_______ ",
    "_____________ " + // 8
    "_____________ " +
    "00000___00000 " +
    "11110___01111 " +
    "22220___02222 " +
    "33330___03333 " +
    "44440___04444 " +
    "5555000005555 " +
    "4444000004444 " +
    "33330___03333 " +
    "22220___02222 " +
    "11110___01111 " +
    "00000___00000 ",
    "_____________ " + // 9
    "_____________ " +
    "______1______ " +
    "_____101_____ " +
    "____10201____ " +
    "___1020201___ " +
    "__102030201__ " +
    "_10203030201_ " +
    "1020306030201 " +
    "_10203030201_ " +
    "__102030201__ " +
    "___1020201___ " +
    "____10201____ " +
    "_____101_____ " +
    "______1______ ",
    "_____________ " + // 10
    "_____________ " +
    "1111111111111 " +
    "0000000000011 " +
    "2222222222222 " +
    "2200000000000 " +
    "3333333333333 " +
    "0000000000033 " +
    "4444444444444 " +
    "4400000000000 " +
    "5555555555555 ",
    "_____________ " + // 11
    "____11111____ " +
    "___1111111___ " +
    "__112222211__ " +
    "__112222211__ " +
    "_11223332211_ " +
    "_12234443221_ " +
    "_1234_4_4321_ " +
    "11234___43211 " +
    "1234_____4321 " +
    "1234_____4321 " +
    "1234_____4321 " +
    "1234_____4321 " +
    "1234_____4321 " +
    "0000000000000 " +
    "_____________ ",
    "_____________ " + // 12
    "_____________ " +
    "6666633333666 " +
    "6666333333366 " +
    "6663333333336 " +
    "6633333333666 " +
    "6633333366666 " +
    "6633336666666 " +
    "6633333366666 " +
    "6633333333666 " +
    "6663333333336 " +
    "6666333333366 " +
    "6666633333666 "
    ];

function startGame() {
    vlx = new VectorlightGame();

    if (vlx.getDevice() == "Android") {
        vlx.gameInit2("stage", 1414, 320, 460, 15, true);
    }
    else {
        vlx.gameInit("stage", 1414, 320, 460, 15);
    }

    player = vlx.dg("player");
    ballAreaWidth = vlx.gameWidth - 8;

    if (vlx.useTouch) {
        vlx.aTS("moveleft", moveLeft);
        vlx.aTE("moveleft", moveLeftUp);
        vlx.aTS("moveright", moveRight);
        vlx.aTE("moveright", moveRightUp);
        vlx.aTS("movefire", fire);

        vlx.aTS("startMoreGames", touchMoreGames);
        vlx.aTS("startPlay", touchStart);

        vlx.aTS("lv1", touchLV1Select);
        vlx.aTS("lv2", touchLV2Select);
        vlx.aTS("lv3", touchLV3Select);
        vlx.aTS("lv4", touchLV4Select);
        vlx.aTS("lv5", touchLV5Select);
        vlx.aTS("lv6", touchLV6Select);
        vlx.aTS("lv7", touchLV7Select);
        vlx.aTS("lv8", touchLV8Select);
        vlx.aTS("lv9", touchLV9Select);
        vlx.aTS("lv10", touchLV10Select);
        vlx.aTS("lv11", touchLV11Select);
        vlx.aTS("lv12", touchLV12Select);

        vlx.aTS("quit1", touchQuit);
        vlx.aTS("continue1", touchContinueToLevSelect);
        vlx.aTS("continue2", touchQuit);
        vlx.aTS("retry1", touchRetry);
        vlx.aTS("saveHSButton", touchSaveHighscore);

        document.body.addEventListener('touchstart', touchProcess);
    }
    else {
    }


    document.body.tabIndex = 0;
    document.body.onkeydown = keyDown;
    document.body.onkeyup = keyUp;

    var userID = vlx.getUsername();
    var userIDDisplay = userID;

    if (userID == null) {
        userIDDisplay = "Guest";
    }

    vlx.dg("userLoggedIn").innerHTML = userIDDisplay;

    gameSurface = vlx.dg("stage");
    fadeIn("front");
}

function showAd() {
    vlx.dg('mainAd').style.top = "0px";
}

function hideAd() {
    vlx.dg('mainAd').style.top = "-100px";
}

function touchMoreGames(e) {
    window.location = "http://m.edianyou.com";
}

function touchQuit(e) {
    quit();
    return cD(e);
}

function touchRetry(e) {
    retry();
    return cD(e);
}

function touchContinueToLevSelect(e) {
    continueToLevSelect();
    return cD(e);
}

function touchLV1Select(e) {
    levSel(1);
    return cD(e);
}

function touchLV2Select(e) {
    levSel(2);
    return cD(e);
}

function touchLV3Select(e) {
    levSel(3);
    return cD(e);
}

function touchLV4Select(e) {
    levSel(4);
    return cD(e);
}

function touchLV5Select(e) {
    levSel(5);
    return cD(e);
}

function touchLV6Select(e) {
    levSel(6);
    return cD(e);
}

function touchLV7Select(e) {
    levSel(7);
    return cD(e);
}

function touchLV8Select(e) {
    levSel(8);
    return cD(e);
}

function touchLV9Select(e) {
    levSel(9);
    return cD(e);
}

function touchLV10Select(e) {
    levSel(10);
    return cD(e);
}

function touchLV11Select(e) {
    levSel(11);
    return cD(e);
}

function touchLV12Select(e) {
    levSel(12);
    return cD(e);
}

function touchStart(e) {
    fadeIn('select');
    return cD(e);
}

function touchProcess(e) {
    if (mode != "front") {
        return cD(e);
    }

    return true;
}

function cD(e) {
    if (e != null) {
        e.stopPropagation();
        e.preventDefault();
    }
    return false;
}

function retry() {
    setupGame();
}

function quit() {
    disposeLevel();
    hideDialog();
    fadeIn("front");
}

function continueToLevSelect() {
    level++;

    if (level >= 13) {
        setupHighscore(false, true);
    }
    else {
        setupGame();
    }
}

function fadeIn(v) {
    switch (v) {
        case "select":
            setupLevSelect();
            break;
        case "front":
            setupFront();
            break;
        case "gameover":
            setupGameOver();
            break;
        case "finish":
            setupHighscore(false, false);
            break;
    }
}

function touchSaveHighscore(e) {
    saveHighscore();
    return cD(e);
}

function setupHighscore(complete, end) {
    if (complete) {
        hsC = complete;
        hsE = end;

        mode = "finish";
        showAd();

        var un = vlx.getUsername();
        if (un == null) {
            un = "";
        }

        vlx.dg("usernameInput").value = un;
        showDialog("saveHighscore");
    }
    else {
        setupFinish(complete, end);
    }

    return false;
}

var hsC = false;
var hsE = false;

function saveHighscore() {
    hideDialog();
    vlx.setUsername(vlx.dg("usernameInput").value);
    setupFinish(hsC, hsE);

    if (vlx.useTouch) {
        window.scrollTo(0, vlx.loadScrollY);
    }
    return false;
}

function setupGameOver() {
    mode = "gameover";
}

function setupFinish(complete, end) {
    mode = "finish";
    showAd();

    showDialog("gameover");

    if (complete) {
        vlx.dg("gameoverTitle").innerHTML = "CONGRATULATIONS!";
        vlx.hd("retry1");
        vlx.sh("continue1");
        vlx.hd("continue2");

        if (vlx.getUserId() != null) {
            vlx.dg("finishLogin").innerHTML = "Your highscore has been submitted!";
        }
        else {
            vlx.dg("finishLogin").innerHTML = "Please login to save your highscores!";
        }

        var task = level + 4;
        window.localStorage["batty_lev" + level] = "1";

        vlx.saveAchievement(task, player.score);
    }
    else if (end) {
        vlx.dg("gameoverTitle").innerHTML = "GAME COMPLETE!";
        vlx.dg("finishLogin").innerHTML = "You've completed all the levels.<br />Congratulations you are a batting pro.";
        vlx.hd("retry1");
        vlx.hd("continue1");
        vlx.sh("continue2");
        vlx.dg("finishLogin").innerHTML = "";
    }
    else {
        vlx.dg("gameoverTitle").innerHTML = "GAME OVER";
        vlx.sh("retry1");
        vlx.hd("continue1");
        vlx.hd("continue2");
        vlx.dg("finishLogin").innerHTML = "Too bad, try again?";
    }

    vlx.dg("finishBest").innerHTML = "";// "Level Best: " + vlx.pad(bestLevelScores[level].score, 6) + " by " + bestLevelScores[level].user;
}

function setupFront() {
    hideAd();
    
    mode = "front";
    vlx.sh("front");
    vlx.hd("lives");
    vlx.hd("combo");
    vlx.hd("timer");
    vlx.hd("player");
    vlx.hd("playerRight");
    vlx.hd("moveleft");
    vlx.hd("moveright");
    vlx.hd("movefire");
    vlx.hd("gameover");
}

function levSel(no) {
    level = no;
    setupGame();

    return false;
}

function setupLevSelect() {
    mode = "select";

    vlx.hd("front");

    vlx.dg("lv1").className = "lev";

    var i;

    for (i = 2; i <= 12; i++) {
        if (window.localStorage["batty_lev" + (i-1)] == "1") {
            vlx.dg("lv" + i).className = "lev";
        }
        else {
            vlx.dg("lv" + i).className = "levDisable";
        }
    }

    showDialog("levSelect");
}

function setupGame() {
    try {
        util_createUnknownAccount();
    }
    catch (e) {
    }

    hideAd();

    vlx.recordGamePlay();
    
    mode = "play";
    lives = 3;
    updateLives();

    hideDialog();

    vlx.sh("lives");
    vlx.sh("timer");
    vlx.sh("player");
    vlx.sh("playerRight");

    if (vlx.useTouch) {
        vlx.sh("moveleft");
        vlx.sh("moveright");
        vlx.sh("movefire");
    }
    else {
        vlx.hd("moveleft");
        vlx.hd("moveright");
        vlx.hd("movefire");
    }

    initPlayer();
    updateLives();
    //updatePlayer();
    createLevel(levels[level - 1]);
}

function showDialog(content) {
    vlx.sh("dialog");
    vlx.sh(content);

    currentDialogContent = content;
}

function hideDialog() {
    vlx.hd("dialog");

    if (currentDialogContent != null) {
        vlx.hd(currentDialogContent);
    }
}

function updateMarkers() {
    var i;

    if (markers != null) {
        for (i = 0; i < markers.length; i++) {
            vlx.dg("stage").removeChild(markers[i]);
        }
    }
    markers = new Array();

    var x = 0;
    var y = 0;
    var marker;

    for (x = 1; x < map.width - 1; x++) {
        for (y = 1; y < map.height - 1; y++) {
            if (map.grid[x][y].type == 1) {
                var a = vlx.dce("div", "block marker");
                a.x = (x - 1) * map.cellWidth;
                a.y = (y - 1) * map.cellHeight;
                vlx.dg("stage").appendChild(a);
                vlx.uIP(a);
                markers.push(a);
            }
        }
    }
}

function disposeLevel() {
    var x = 0;
    var y = 0;
    var i;

    if (map != null) {
        for (x = 0; x < map.width; x++) {
            for (y = 0; y < map.height; y++) {
                if (map.grid[x][y].type == 1) {
                    vlx.dg("stage").removeChild(map.grid[x][y].content);
                }
            }
        }
    }
    if (balls != null) {
        for (i = balls.length - 1; i >= 0; i--) {
            vlx.dg("stage").removeChild(balls[i]);
        }
    }
    if (bonuses != null) {
        for (i = bonuses.length - 1; i >= 0; i--) {
            vlx.dg("stage").removeChild(bonuses[i]);
        }
    }

    map = null;
    balls = null;
    bonuses = null;
}

function createLevel(data) {
    var x = 0;
    var y = 0;
    var i;
    var cell;

    disposeLevel();

    map = new PathFindingMap();
    map.setup();
    balls = new Array();
    bonuses = new Array();
    animatingBlocks = new Array();

    for (x = 0; x < map.width; x++) {
        for (y = 0; y < map.height; y++) {
            cell = new CellContent();
            cell.type = 0;

            map.set(x, y, cell);
        }
    }

    var d = data.split(' ');
    var b;
    var e;
    var cN;
    var baseX = 4;
    var strength = 1;
    var value = 100;
    var block;
    var cellContent;

    y = 4;
    targetTilesRemaining = 0;

    for (i = 0; i < d.length; i++) {
        x = baseX;

        for (b = 0; b < d[i].length; b++, x += 24) {
            switch (d[i][b]) {
                case "0":
                    cN = "grey";
                    strength = 2;
                    value = 100;
                    targetTilesRemaining++;
                    break;
                case "1":
                    cN = "red";
                    strength = 1;
                    value = 20;
                    targetTilesRemaining++;
                    break;
                case "2":
                    cN = "green";
                    strength = 1;
                    value = 30;
                    targetTilesRemaining++;
                    break;
                case "3":
                    cN = "yellow";
                    strength = 1;
                    value = 40;
                    targetTilesRemaining++;
                    break;
                case "4":
                    cN = "blue";
                    strength = 1;
                    value = 50;
                    targetTilesRemaining++;
                    break;
                case "5":
                    cN = "magenta";
                    strength = 1;
                    value = 60;
                    targetTilesRemaining++;
                    break;
                case "6":
                    cN = "black";
                    strength = 999;
                    value = 2000;
                    break;
                case "_":
                    continue;
            }

            block = createBlock(x, y, cN, strength, value);
            map.grid[block.gridX][block.gridY].type = 1;
            map.grid[block.gridX][block.gridY].content = block;
        }
        y += 16;
    }

    createNextBall();
}

function createNextBall() {
    var x = player.x + ((player.cWidth - 8) >> 1);
    var y = player.y - 8;
    var ball = createBall(x, y, "normal");
    ball.stuck = true;
    ball.stuckTimer = 5 * 30;
}

function initPlayer() {
    player.style.display = "block";
    player.speed = 2;
    player.cWidth = 62;
    player.cHeight = 19;
    player.x = (vlx.gameWidth - player.cWidth) >> 1;
    player.y = vlx.gameHeight - 160;
    player.score = 0;
    player.magetTimer = 0;
    player.targetWidth = player.cWidth;
    player.widthChangeTimer = 0;
    player.speedTimer = 0;
    player.ballspeedTimer = 0;
    player.ballspeed = 1;
    player.right = vlx.dg("playerRight");
    player.right.style.display = "block";
    player.right.cWidth = 16;
    player.right.cHeight = 19;
    player.style.width = Math.round(player.cWidth - 16) + "px";

    vlx.uIP(player);
    updatePlayerRight();

    updateScore();
}

function updatePlayerRight() {
    player.right.x = (player.cWidth - player.right.cWidth) + player.x;
    player.right.y = player.y;
    vlx.uIP(player.right);
}

function createBlock(x, y, color, strength, value) {
    var a = vlx.dce("div", "block " + color);
    a.color = color;
    a.cWidth = 24;
    a.cHeight = 16;
    a.hWidth = a.cWidth >> 1;
    a.hHeight = a.cHeight >> 1;
    a.x = x;
    a.y = y;
    a.strength = strength;
    a.value = value;
    a.hitTimer = 0;
    setGridCoords(a);
    vlx.dg("stage").appendChild(a);
    vlx.uIP(a);

    return a;
}

function createBall(x, y, type) {
    var a = vlx.dce("div", "ball " + type);
    a.cWidth = 8;
    a.cHeight = 8;
    a.hWidth = 4;
    a.hHeight = 4;
    a.x = x;
    a.y = y;
    a.dirX = 1;
    a.dirY = -1;
    a.speed = 2;
    a.stuck = false;
    a.combo = 0;
    setGridCoords(a);
    vlx.dg("stage").appendChild(a);
    balls.push(a);
    vlx.uIP(a);

    return a;
}

function createBonus(x, y, type) {
    var a = vlx.dce("div", "bonus " + type);
    a.type = type;
    a.cWidth = 16;
    a.cHeight = 16;
    a.hWidth = 8;
    a.hHeight = 8;
    a.x = x;
    a.y = y;
    a.speed = 1.5;
    vlx.dg("stage").appendChild(a);
    bonuses.push(a);
    vlx.uIP(a);

    return a;
}

function showCombo(x, y, value) {
    var combo = vlx.dg("combo");
    combo.x = x;
    combo.y = y;
    combo.timer = 30;
    combo.style.opacity = 1;
    combo.innerHTML = "X" + value + " COMBO";
    vlx.sh("combo");
    vlx.uIP(combo);
}

function updateCombo() {
    var combo = vlx.dg("combo");

    if (combo.timer > 0) {
        combo.timer--;
        if (combo.timer < 10) {
            combo.style.opacity = combo.timer * 0.1;
        }

        combo.y -= speedMod;
        vlx.uIP(combo);

        if (combo.timer == 0) {
            vlx.hd("combo");
        }
    }
}

function setGridCoords(obj) {
    obj.gridX = ((obj.x / map.cellWidth) >> 0) + 1;
    obj.gridY = ((obj.y / map.cellHeight) >> 0) + 1;
}

function updateLives() {
    if (lives >= 3) {
        vlx.dg("life3").style.opacity = 1;
    }
    else {
        vlx.dg("life3").style.opacity = 0.4;
    }

    if (lives >= 2) {
        vlx.dg("life2").style.opacity = 1;
    }
    else {
        vlx.dg("life2").style.opacity = 0.4;
    }

    if (lives >= 1) {
        vlx.dg("life1").style.opacity = 1;
    }
    else {
        vlx.dg("life1").style.opacity = 0.4;
    }
}

function gameLoop() {
    var i;

    switch (mode) {
        case "play":
            updateInPlay();
            break;
    }
}

function updateInPlay() {
    var i;
    var b;
    var a;
    var hit;
    var prevX;
    var prevY;
    var blockHitList;
    var block;
    var z;

    for (i = balls.length-1; i >= 0 ; i--) {
        b = balls[i];
        if (b.stuck) {
            b.y = player.y - 8;
            vlx.uIP(b);

            if (b.stuckTimer > 0) {
                b.stuckTimer--;
                if (b.stuckTimer == 0) {
                    releaseBall(b);
                }
            }
            continue;
        }

        for (z = 0; z < 4; z++) {
            prevX = b.x;
            prevY = b.y;

            b.x += ((b.dirX * (b.speed * 0.25)) * player.ballspeed) * speedMod;
            b.y += ((b.dirY * (b.speed * 0.25)) * player.ballspeed) * speedMod;
            hit = false;
            
            var ballCX = b.x + (b.cWidth >> 1);
            var ballCY = b.y + b.cHeight;

            if (b.dirY > 0 && ballCX >= player.x && ballCX < player.x + player.cWidth && ballCY >= player.y && ballCY < player.y + player.cHeight) {
                if (player.magetTimer > 0) {
                    b.stuck = true;
                }
                else {
                    b.dirY = -b.dirY;
                    setBatBallDirX(b);
                }
                b.combo = 0;
                continue;
            }

            ballCY = b.y + (b.cHeight >> 1);
            blockHitList = map.getSurrounding(b.gridX, b.gridY);
            
            for (a = blockHitList.length - 1; a >= 0; a--) {
                block = blockHitList[a].content;
                if (ballCX >= block.x && ballCX < block.x + block.cWidth && b.y >= block.y && b.y < block.y + block.cHeight) {
                    // Top
                    b.dirY = 1;
                    blockHit(block, b);
                }
                else if (ballCX >= block.x && ballCX < block.x + block.cWidth && b.y + b.cHeight >= block.y && b.y + b.cHeight < block.y + block.cHeight) {
                    // Bottom
                    b.dirY = -1;
                    blockHit(block, b);
                }
                else if (b.x >= block.x && b.x < block.x + block.cWidth && ballCY >= block.y && ballCY < block.y + block.cHeight) {
                    // Left
                    b.dirX = 1;
                    blockHit(block, b);
                }
                else if (b.x + b.cWidth >= block.x && b.x + b.cWidth < block.x + block.cWidth && ballCY >= block.y && ballCY < block.y + block.cHeight) {
                    // Right
                    b.dirX = -1;
                    blockHit(block, b);
                }
            }

            if (b.x > ballAreaWidth - b.cWidth || b.x < 0) {
                b.dirX = -b.dirX;
            }
            if (b.y < 0) {
                b.dirY = -b.dirY;
            }
            if (b.y > vlx.gameHeight - 100) {
                vlx.dg("stage").removeChild(b);
                balls.splice(i, 1);

                if (balls.length <= 0) {
                    lives--;
                    if (lives <= 0) {
                        setupHighscore(false, false);
                    }
                    else {
                        createNextBall();
                    }

                    updateLives();
                }
                break;
            }

            setGridCoords(b);
        }
        vlx.uIP(b);
    }
    updateBonuses();
    updatePlayer();
    updateBlocks();
    updateCombo();
    
    //updateMarkers();
}

function setBatBallDirX(b) {
    var ballCX = b.x + (b.cWidth >> 1);
    var ballCY = b.y + b.cHeight;
    
    var halfBatWidth = (player.cWidth >> 1);
    var cenX = player.x + halfBatWidth;
    var diff;
    var length = player.cWidth * 0.5;
    
    if (ballCX < cenX) {
        diff = (halfBatWidth - (ballCX - player.x)) / length;
        b.dirX = -diff;
    }
    else if (ballCX >= cenX) {
        diff = (halfBatWidth - ((player.x + player.cWidth) - ballCX)) / length;
        b.dirX = diff;
    }

    b.dirX += Math.random() * 0.01;
}

function updateBlocks() {
    var i;
    var block;
    
    for (i = animatingBlocks.length - 1; i >= 0; i--) {
        block = animatingBlocks[i];

        if (block.hitTimer > 0) {
            block.hitTimer--;
            if (block.hitTimer == 0) {
                block.className = "block " + block.color;
                animatingBlocks.splice(i, 1);
            }
        }    
    }
}

function updatePlayer() {
    var origX = player.x;

    if (moveLeftDown) {
        player.x -= player.speed * speedMod;
        if (player.x < 0) {
            player.x = 0;
        }
        vlx.uIP(player);
        updatePlayerRight();
    }
    else if (moveRightDown) {
        player.x += player.speed * speedMod;
        if (player.x + player.cWidth > ballAreaWidth) {
            player.x = ballAreaWidth - player.cWidth;
        }
        vlx.uIP(player);
        updatePlayerRight();
    }

    if (player.targetWidth != player.cWidth) {
        var diff = player.targetWidth - player.cWidth;
        diff = diff * 0.05;

        player.cWidth += diff;
        if (player.cWidth >= player.targetWidth - 1 && player.cWidth < player.targetWidth + 1) {
            player.cWidth = player.targetWidth;
        }
        player.style.width = Math.round(player.cWidth - 16) + "px";
        player.x += diff * -0.5;
        vlx.uIP(player);
        updatePlayerRight();
    }

    if (player.widthChangeTimer > 0) {
        player.widthChangeTimer--;
        if (player.widthChangeTimer == 0) {
            player.targetWidth = 62;
        }
    }

    if (player.speedTimer > 0) {
        player.speedTimer--;
        if (player.speedTimer == 0) {
            player.speed = 2;
        }
    }

    if (player.ballspeedTimer > 0) {
        player.ballspeedTimer--;
        if (player.ballspeedTimer == 0) {
            player.ballspeed = 1;
        }
    }

    var diffX = player.x - origX;
    var i;

    for (i = balls.length - 1; i >= 0; i--) {
        b = balls[i];
        if (b.stuck) {
            b.x += diffX;
            vlx.uIP(b);
        }
    }

    if (player.magetTimer > 0) {
        player.magetTimer--;
        if (player.magetTimer == 0) {

        }
    }
}

function updateBonuses() {
    var i;
    var bonus;
    var x;
    var y;
    var remove;

    for (i = bonuses.length-1; i >= 0; i--) {
        bonus = bonuses[i];
        bonus.y += bonus.speed * speedMod;
        remove = false;

        x = bonus.x + (bonus.cWidth >> 1);
        y = bonus.y + bonus.cHeight;

        if (x >= player.x && x < player.x + player.cWidth && y >= player.y && y < player.y + player.cHeight) {
            remove = true;
            switch (bonus.type) {
                case "magnet":
                    player.magetTimer = 30 * 30;
                    break;
                case "multi":
                    if (balls.length > 0) {
                        spawnBall(balls[0]);
                        spawnBall(balls[0]);
                    }
                    break;
                case "wide":
                    player.targetWidth = 100;
                    player.widthChangeTimer = 30 * 30;
                    break;
                case "batspeed":
                    player.speedTimer = 30 * 30;
                    player.speed = 4;
                    break;
                case "ballspeed":
                    player.ballspeedTimer = 20 * 30;
                    player.ballspeed = 0.5;
                    break;
            }
        }
        
        if (bonus.y > 460) {
            remove = true;
        }

        if (remove) {
            vlx.dg("stage").removeChild(bonus);
            bonuses.splice(i, 1);
        }
        else {
            vlx.uIP(bonus);
        }
    }
}

function spawnBall(master) {
    var ball = createBall(master.x, master.y, "normal");

    ball.dirY = master.dirY;
    ball.dirX = 1 - (Math.random() * 2);
}

function updateScore() {
    var s = vlx.pad(player.score, 6);

    vlx.dg("score1").className = "num" + s.charAt(0);
    vlx.dg("score2").className = "num" + s.charAt(1);
    vlx.dg("score3").className = "num" + s.charAt(2);
    vlx.dg("score4").className = "num" + s.charAt(3);
    vlx.dg("score5").className = "num" + s.charAt(4);
    vlx.dg("score6").className = "num" + s.charAt(5);
}

function blockHit(block, ball) {
    if (block.hitTimer > 0) {
        return;
    }

    block.strength--;

    if (block.strength <= 0) {
        ball.combo++;
        if (ball.combo >= 2) {
            showCombo(ball.x, ball.y, ball.combo);
        }
        
        block.style.display = "none";

        map.grid[block.gridX][block.gridY].type = 0;
        map.grid[block.gridX][block.gridY].content = null;

        player.score += (block.value * ball.combo);
        updateScore();

        switch ((Math.random() * 50) >> 0) {
            case 10:
                createBonus(block.x, block.y, "multi");
                break;
            case 20:
                createBonus(block.x, block.y, "wide");
                break;
            case 30:
                createBonus(block.x, block.y, "batspeed");
                break;
            case 40:
                createBonus(block.x, block.y, "ballspeed");
                break;
            case 5:
                createBonus(block.x, block.y, "magnet");
                break;
        }

        targetTilesRemaining--;
        if (targetTilesRemaining <= 0) {
            setupHighscore(true, false);
        }
    }
    else {
        block.hitTimer = 5;
        block.className = "block " + block.color + "Hit";
        animatingBlocks.push(block);
    }
}

function keyDown(e) {
    if (window.event) keypress = e.keyCode;
    else if (e.which) keypress = e.which;
    switch (keypress) {
        case 90: // Space
        case 122:
            fire(null);
            e.preventDefault();
            break;
        case 39: // Right
            moveRight(null);
            break;
        case 37: // Left
            moveLeft(null);
            break;
    }
}

function keyUp(e) {
    if (window.event) keypress = e.keyCode;
    else if (e.which) keypress = e.which;
    switch (keypress) {
        case 90: // Space
        case 122:
            e.preventDefault();
            break;
        case 39: // Right
            moveRightUp(null);
            break;
        case 37: // Left
            moveLeftUp(null);
            break;
    }
}

function fire(e) {
    var i;
    var b;
    
    for (i = balls.length - 1; i >= 0; i--) {
        b = balls[i];
        if (b.stuck) {
            releaseBall(b);
        }
    }
    
    if (ev != null) {
        ev.preventDefault();
    }
}

function releaseBall(b) {
    b.stuck = false;
    b.dirY = -1;
    b.stuckTimer = 0;
    setBatBallDirX(b);
}

function moveLeft(ev) {
    moveLeftDown = true;

    if (ev != null) {
        ev.preventDefault();
    }
}

function moveLeftUp(ev) {
    moveLeftDown = false;
    if (ev != null) {
        ev.preventDefault();
    }
}

function moveRight(ev) {
    moveRightDown = true;
    if (ev != null) {
        ev.preventDefault();
    }
}

function moveRightUp(ev) {
    moveRightDown = false;

    if (ev != null) {
        ev.preventDefault();
    }
}

/* Path Finding Map */
function PathFindingMap() {
    this.cellWidth = 24;
    this.cellHeight = 16;
    this.width = 15;
    this.height = 32;
    this.grid = null;

    this.setup = function() {
        var i;
        this.grid = new Array(this.width);

        for (i = 0; i < this.width; i++) {
            this.grid[i] = new Array(this.height);
        }
    }

    this.getSurrounding = function(x, y) {
        var results = new Array();

        if (this.grid[x][y].type != 0) {
            results.push(this.grid[x][y]);
        }
        if (this.grid[x - 1][y - 1].type != 0) {
            results.push(this.grid[x - 1][y - 1]);
        }
        if (this.grid[x][y - 1].type != 0) {
            results.push(this.grid[x][y - 1]);
        }
        if (this.grid[x + 1][y - 1].type != 0) {
            results.push(this.grid[x + 1][y - 1]);
        }
        if (this.grid[x - 1][y].type != 0) {
            results.push(this.grid[x - 1][y]);
        }
        if (this.grid[x + 1][y].type != 0) {
            results.push(this.grid[x + 1][y]);
        }
        if (this.grid[x - 1][y + 1].type != 0) {
            results.push(this.grid[x - 1][y + 1]);
        }
        if (this.grid[x][y + 1].type != 0) {
            results.push(this.grid[x][y + 1]);
        }
        if (this.grid[x + 1][y + 1].type != 0) {
            results.push(this.grid[x + 1][y + 1]);
        }

        return results;
    }

    this.get = function(x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return new CellContent();
        }

        return this.grid[x][y];
    }

    this.set = function(x, y, cellContent) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return;
        }

        this.grid[x][y] = cellContent;
    }

    this.setEmpty = function(x, y) {
        var cell = new CellContent();

        cell.type = 0;
        this.set(x, y, cell);
    }

    this.GetCellAtIndex = function(cells, index) {
        var i = this.IndexOfCell(cells, index);

        if (i >= 0) {
            return cells[i];
        }
        else {
            return null;
        }
    }

    this.ConstainsCell = function(cells, index) {
        return this.IndexOfCell(cells, index) >= 0;
    }

    this.IndexOfCell = function(cells, index) {
        var result = -1;
        var i;

        for (i = 0; i < cells.length; i++) {
            if (cells[i].Index == index) {
                result = i;
                break;
            }
        }

        return result;
    }
}

/* CellContent */
// Types:
// 0 = Empty
// 1 = Block
function CellContent() {
    this.type = 0;
    this.content = null;
}
