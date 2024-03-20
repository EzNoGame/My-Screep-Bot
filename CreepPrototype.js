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