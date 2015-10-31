var SpriteSystem = function(client)
{
    System.call(this, "sprite", client);
}

SpriteSystem.prototype = Object.create(System.prototype);
SpriteSystem.prototype.constructor = SpriteSystem;

SpriteSystem.prototype.update = function()
{
    this.entities.forEach(function(entity) {
        // Animation
    });
}
SpriteSystem.prototype.addEntity = function(entity)
{
    if (entity.sprite && entity.render) {
        this.entities.push(entity);
    }
}
