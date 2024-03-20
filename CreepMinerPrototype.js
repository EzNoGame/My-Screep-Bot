var CreepState = require('./CreepState');

Creep.prototype.suitsUp = function()
{
    if (this.memory.state == null)
    {
        this.memory.state = CreepState.harvest;
    }
}

Creep.prototype.harvestResource = function(sourceType)
{
    const source = this.pos.findClosestByPath(FIND_SOURCES, sourceType);
    if (source)
    {
        if (this.harvest(source) == ERR_NOT_IN_RANGE)
        {
            this.moveTo(source);
        }
    }
}

Creep.prototype.feedController = function()
{
    const controller = this.room.controller;
    if (controller)
    {
        if (this.upgradeController(controller) == ERR_NOT_IN_RANGE)
        {
            this.moveTo(controller);
        }
    }
}

Creep.prototype.buildStructure = function(structureType)
{
    const structure = this.pos.findClosestByPath(FIND_CONSTRUCTION_STRUCTURES, structureType);
    if (structure)
    {
        if (this.build(structure) == ERR_NOT_IN_RANGE)
        {
            this.moveTo(structure);
        }
    }
}

Creep.prototype.runAsMiner = function()
{
    if (this.store.getFreeCapacity() == 0)
    {
        this.say('feed');
        this.memory.state = CreepState.feedController;
    }
    else if (this.store.getFreeCapacity() == this.store.getCapacity())
    {
        this.say('harvest');
        this.memory.state = CreepState.harvest;
    }

    switch (this.memory.state)
    {
        case CreepState.feedController:
            this.feedController();
            this.say('feed');
            break;
        case CreepState.harvest:
            this.harvestResource(RESOURCE_ENERGY);
            this.say('harvest');
            break;
    }
}