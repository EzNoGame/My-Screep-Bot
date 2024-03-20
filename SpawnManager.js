function SpawnManager()
{
    var spawn = Game.spawns['Spawn1'];
    var creep = spawn.spawnCreep([WORK, CARRY, MOVE], 'XXX_'+Game.time, {IsAvaliable : true});
}

exports.SpawnManager = SpawnManager