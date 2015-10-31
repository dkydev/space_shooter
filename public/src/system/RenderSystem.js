var RenderSystem = function(client)
{
    System.call(this, "render", client);
}

RenderSystem.prototype = Object.create(System.prototype);
RenderSystem.prototype.constructor = RenderSystem;

RenderSystem.prototype.init = function(camera)
{
    this.camera = camera;
    this.canvas = this.camera.canvas;
    this.context = this.canvas.getContext("2d");
    this.context.font = "32px sans bold";
    this.context.textBaseline = "top";
}

RenderSystem.prototype.update = function()
{
    this.context.fillStyle = "rgb(60,160,80)";
    this.context.fillRect(0, 0, 800, 600);

    this.context.fillStyle = "rgb(255,0,0)";

    var self = this;
    this.entities.forEach(function(entity) {
        self.context.font = Math.round(self.camera.zoom * 32) + "px sans bold";
        //entity.render.x;
        var x = (entity.x - self.camera.x) * self.camera.zoom + this.canvas.width * 0.5;
        var y = (entity.y - self.camera.y) * self.camera.zoom + this.canvas.height * 0.5;
        self.context.fillText(entity.name, x, y);

    });
}
RenderSystem.prototype.addEntity = function(entity)
{
    if (entity.render) {
        this.entities.push(entity);
    }
}
