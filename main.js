var SpawnManager = require('SpawnManager');
var CreepPrototype = require('CreepPrototype');
module.exports.loop = function()
{
    // console.log(Game.gcl.level);
    SpawnManager.SpawnManager();

    for(n in Game.creeps)
    {
        var creep = Game.creeps[n];
        creep.harvestResource(RESOURCE_ENERGY);
    }
}