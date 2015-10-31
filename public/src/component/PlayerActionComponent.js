var PlayerActionComponent = function(entity)
{
    Component.call(this, "playerAction", entity);

    this.left = 0;
    this.right = 0;
    this.up = 0;
    this.down = 0;
    this.jump = 0;
    this.shoot = 0;

    this.shootTimer = 0;
    this.shootDelay = 1;
    this.update = function(entity)
    {
        tail(entity.name, entity.x + ", " + entity.y);
        /*
        if (this.left) {
            entity.render.scaleX = -1;
        }
        if (this.right) {
            entity.render.scaleX = 1;
        }
        if (this.left || this.right || this.up || this.down) {
            if (entity.sprite.currentAnimation != "walk") {
                entity.sprite.setAnimation("walk");
            }
        } else {
            if (entity.sprite.currentAnimation != "idle") {
                entity.sprite.setAnimation("idle");
            }
        }*/

        entity.motion.vx = (this.right - this.left) * entity.motion.ax;
        entity.motion.vy = (this.down - this.up) * entity.motion.ay;

        if (this.shoot && this.shootTimer == 0) {

            var bullet = new BulletEntity();
            bullet.x = entity.x;
            bullet.y = entity.y;
            bullet.motion.vx = 5;
            this.entity.client.addEntity(bullet);

            this.shootTimer = this.shootDelay;
        } else if (this.shootTimer > 0) {
            this.shootTimer --;
        }
    }
}

PlayerActionComponent.prototype = Object.create(Component.prototype);
PlayerActionComponent.prototype.constructor = PlayerActionComponent;
Component.prototype.register("playerAction", PlayerActionComponent);
