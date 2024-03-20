var CreepFeatures = require('./CreepFeatures');
var CreepState = require('./CreepState');

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