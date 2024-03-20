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
    console.log(this.store.getFreeCapacity());
    switch (true)
    {
        case this.store.getFreeCapacity() == 0:
            this.feedController();
            console.log('feed');
            break;
        case this.store.getFreeCapacity() > 0:
            this.harvestResource(RESOURCE_ENERGY);
            console.log('harvest');
            break;
    }
}