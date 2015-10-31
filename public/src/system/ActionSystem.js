var ActionSystem = function(client)
{
    System.call(this, "action", client);
}

ActionSystem.prototype = Object.create(System.prototype);
ActionSystem.prototype.constructor = ActionSystem;

ActionSystem.prototype.update = function() {
    this.entities.forEach(function(entity) {
        entity.action.update(entity, client);
    });
};

ActionSystem.prototype.addEntity = function(entity) {
    if (entity.action) {
        this.entities.push(entity);
    }
};
