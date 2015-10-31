var CameraActionComponent = function(entity)
{
    Component.call(this, "cameraAction", entity);

    this.left = 0;
    this.right = 0;
    this.up = 0;
    this.down = 0;
    this.zoomin = 0;
    this.zoomout = 0;

    this.update = function(entity)
    {
        tail(entity.name, entity.x + ", " + entity.y + " zoom : " + entity.zoom);

        entity.motion.vx = (this.right - this.left) * entity.motion.ax;
        entity.motion.vy = (this.down - this.up) * entity.motion.ay;

        entity.zoom += (this.zoomin - this.zoomout) * 0.01;
    }
}

CameraActionComponent.prototype = Object.create(Component.prototype);
CameraActionComponent.prototype.constructor = CameraActionComponent;
Component.prototype.register("cameraAction", CameraActionComponent);
