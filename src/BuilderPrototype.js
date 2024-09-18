var CreepFeatures = require('./CreepFeatures');
var CreepState = require('./CreepState');

Creep.prototype.runAsBuilder = function() {
    if(this.store.getFreeCapacity() === 0) {
        this.say('🚧');
        this.memory.state = CreepState.buildStructure;
    }
    else if(this.store.getUsedCapacity() === 0) {
        this.say('🏠');
        this.memory.state = CreepState.harvest;
    }

    switch(this.memory.state) {
        case CreepState.buildStructure:
            this.buildStructure();
            break;
        case CreepState.harvest:
            this.harvestResource(RESOURCE_ENERGY);
            break;
    }
}