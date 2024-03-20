function SpawnManager()
{
    var spawn = Game.spawns['Spawn1'];
    var creep = spawn.spawnCreep([WORK, CARRY, MOVE], 'XXX_'+Game.time, {IsAvaliable : true});
    // console.log("Spawned a harvester: " + creep.name);
    console.log(Resource.length);
}

exports.SpawnManager = SpawnManager