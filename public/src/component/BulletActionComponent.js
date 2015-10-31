var BulletActionComponent = function(entity)
{
    Component.call(this, "bulletAction", entity);

    this.update = function(entity)
    {
        if (entity.x > 400) {
            //entity.client.removeEntity(entity);
        }
    }
}

BulletActionComponent.prototype = Object.create(Component.prototype);
BulletActionComponent.prototype.constructor = BulletActionComponent;
Component.prototype.register("bulletAction", BulletActionComponent);
