var PlayerEntity = function()
{
    Entity.call(this, "player");

    this.render = Component.prototype.getComponent("render", this);
    this.motion = Component.prototype.getComponent("motion", this);
    this.action = Component.prototype.getComponent("playerAction", this);
}

PlayerEntity.prototype = Object.create(Entity.prototype);
PlayerEntity.prototype.constructor = PlayerEntity;

PlayerEntity.prototype.bindControls = function(keyMap)
{
    this.input = Component.prototype.getComponent("input", this);
    this.input.keyMap = keyMap;
};
