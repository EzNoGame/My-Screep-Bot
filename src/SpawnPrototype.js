var RoomSetup = require('./Setup');

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
            if(Memory.creepCount[fixer])
            break;
        case spawnState.rest:
            break;
    }
}

Spawn.prototype.spawnMiner = function()
{
    console.log('Spawning a miner');
    this.spawnCreep([WORK, CARRY, MOVE], 'Miner' + Game.time.toString(), {memory: {role: 'miner'}});
}

Spawn.prototype.spawnBuilder = function()
{
    console.log('Spawning a builder');
    this.spawnCreep([WORK, CARRY, MOVE], 'Builder' + Game.time.toString(), {memory: {role: 'builder'}});
}

Spawn.prototype.spawnFeeder = function()
{
    console.log('Spawning a feeder');
    this.spawnCreep([WORK, CARRY, MOVE], 'Feeder' + Game.time.toString(), {memory: {role: 'feeder'}});
}

Spawn.prototype.spawnRepairer = function()
{
    console.log('Spawning a repairer');
    this.spawnCreep([WORK, CARRY, MOVE], 'Repairer' + Game.time.toString(), {memory: {role: 'repairer'}});
}