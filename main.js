var SpawnManager = require('SpawnManager');
module.exports.loop = function()
{
    switch(Game.gcl.level)
    {
        case 1:
            SpawnManager.SpawnManager();
            break;
        case 2:
            console.log("Level 2");
            break;
        case 3:
            console.log("Level 3");
            break;
        case 4:
            console.log("Level 4");
            break;
        case 5:
            console.log("Level 5");
            break;
        case 6:
            console.log("Level 6");
            break;
        case 7:
            console.log("Level 7");
            break;
        case 8:
            console.log("Level 8");
            break;
        case 9:
            console.log("Level 9");
            break;
        case 10:
            console.log("Level 10");
            break;
    }
}