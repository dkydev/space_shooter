var Entity = function(name)
{
    this.name = (name||"entity")+(Entity.prototype.count++);

    this.components = [];

    this.x = 0;
    this.y = 0;
    this.z = 0;
}

Entity.prototype.count = 0;
