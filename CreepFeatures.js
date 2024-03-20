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
