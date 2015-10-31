var CameraEntity = function()
{
    Entity.call(this, "camera");

    this.zoom = 1;

    this.motion = Component.prototype.getComponent("motion", this);
    this.action = Component.prototype.getComponent("cameraAction", this);
}

CameraEntity.prototype = Object.create(Entity.prototype);
CameraEntity.prototype.constructor = CameraEntity;

CameraEntity.prototype.bindControls = function(keyMap)
{
    this.input = Component.prototype.getComponent("input", this);
    this.input.keyMap = keyMap;
};
