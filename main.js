var SpawnPrototype = require('SpawnPrototype');
var CreepPrototype = require('CreepPrototype');
module.exports.loop = function()
{   
    for(s in Game.spawns)
    {
        var spawn = Game.spawns[s];
        spawn.spawnManager();
        spawn.suitsUp();
    }

    for(n in Game.creeps)
    {
        var creep = Game.creeps[n];
        creep.suitsUp();
        creep.runAsMiner();
    }
}