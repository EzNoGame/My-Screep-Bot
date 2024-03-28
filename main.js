var SpawnPrototype = require('./SpawnPrototype');
var MinerPrototype = require('./MinerPrototype');
var CreepState = require('./CreepState');
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
                creep.suitsUp(CreepState.harvest);
                creep.runAsMiner();
                break;
            
            case "feeder":
                creep.suitsUp();
                break;
            
            case "builder":
                creep.suitsUp(CreepState.harvest);
                creep.runAsBuilder();
                break;
        }
    }

    if(Game.time % 100 == 0)
    {
        var miner = 0;
        var builder = 0;
        var upgrader = 0;
        var fixer = 0;

        for(i in Game.creeps)
        {
            var creep = Game.creeps[i];
            switch(creep.memory.role)
            {
                case "miner":
                    miner++;
                    break;
                case "builder":
                    builder++;
                    break;
                case "upgrader":
                    upgrader++;
                    break;
                case "fixer":
                    fixer++;
                    break;
            }
        }

        Memory.creepCount = {
            miner: miner,
            builder: builder,
            upgrader: upgrader,
            fixer: fixer,
        }
    }
}