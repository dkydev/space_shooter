var MotionComponent = function(entity)
{
    Component.call(this, "motion", entity);

    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.ax = 2;
    this.ay = 2;
    this.az = 0;
    this.gravity = 1;
}

MotionComponent.prototype = Object.create(Component.prototype);
MotionComponent.prototype.constructor = MotionComponent;
Component.prototype.register("motion", MotionComponent);
