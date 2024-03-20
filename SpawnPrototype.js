const spawnState = 
{
    spawn: "spawn",
    rest: "rest",
}

Spawn.prototype.suitsUp = function()
{
    if(this.memory.state == null)
    {
        this.memory.state = spawnState.spawn;
    }
}

Spawn.prototype.spawnManager = function()
{
    // console.log(this.store.getCapacity(RESOURCE_ENERGY));
    if(this.store.getFreeCapacity(RESOURCE_ENERGY) == 0)
    {   
        this.memory.state = spawnState.spawn;
    }
    else
    {
        this.memory.state = spawnState.rest;
    }

    switch(this.memory.state)
    {
        case spawnState.spawn:
            this.spawnMiner();
            break;
        case spawnState.rest:
            break;
    }
}

Spawn.prototype.spawnMiner = function()
{
    console.log('Spawning a miner');
    Game.
    this.spawnCreep([WORK, CARRY, MOVE], 'Miner' + Game.time.toString(), {memory: {role: 'miner'}});
}
