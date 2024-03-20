var SpawnPrototype = require('SpawnPrototype');
var CreepMinerPrototype = require('CreepMinerPrototype');
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
        switch(creep.memory.role)
        {
            case "miner":
                creep.suitsUp();
                creep.runAsMiner();
                break;
            
            case "feeder":
                creep.suitsUp();
        }
    }
}