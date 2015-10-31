var System = function(name, client)
{
    this.name = name;
    this.client = client;
    this.entities = [];
}
System.prototype.update = function() {};
System.prototype.addEntity = function(entity) {};
System.prototype.removeEntity = function(entity) {
    var idx = this.entities.indexOf(entity);
    if (idx >= 0) {
        this.entities.splice(idx, 1);
    }
};
