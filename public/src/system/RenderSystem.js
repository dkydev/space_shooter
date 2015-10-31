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

    this.stars = [];
    var c = 4000;
    var d = 2000;
    for (var i = 0; i < c; i ++) {
        this.stars.push(Math.floor(Math.random()*d) - d * 0.5);
        this.stars.push(Math.floor(Math.random()*d) - d * 0.5);
        this.stars.push(Math.random());
    }
}

RenderSystem.prototype.update = function()
{
    this.drawBackground();

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
RenderSystem.prototype.drawBackground = function()
{
    this.context.fillStyle = "rgb(0,0,0)";
    this.context.fillRect(0, 0, 800, 600);

    this.context.fillStyle = "rgb(200,200,200)";
    for (var i = 0; i < this.stars.length; i += 3) {
        this.context.fillRect(
            (this.stars[i] - this.camera.x * 0.25) * this.stars[i+2] * this.camera.zoom + this.canvas.width * 0.5,
            (this.stars[i+1] - this.camera.y * 0.25) * this.stars[i+2] * this.camera.zoom + this.canvas.height * 0.5,
            this.stars[i+2] * this.camera.zoom,
            this.stars[i+2] * this.camera.zoom
        );
    }
}
