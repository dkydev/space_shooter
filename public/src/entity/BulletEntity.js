var BulletEntity = function()
{
    Entity.call(this, "bullet");

    this.render = Component.prototype.getComponent("render", this);
    this.motion = Component.prototype.getComponent("motion", this);
    this.action = Component.prototype.getComponent("bulletAction", this);
}

BulletEntity.prototype = Object.create(Entity.prototype);
BulletEntity.prototype.constructor = BulletEntity;
