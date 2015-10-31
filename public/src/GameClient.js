var GameClient = function(canvas)
{
    this.entities = [];
    this.canvas = canvas;
}

GameClient.prototype.addEntity = function(entity)
{
    this.motionSystem.addEntity(entity);
    this.renderSystem.addEntity(entity);
    this.spriteSystem.addEntity(entity);
    this.inputSystem.addEntity(entity);
    this.actionSystem.addEntity(entity);
    this.entities.push(entity);
    entity.client = this;
}

GameClient.prototype.removeEntity = function(entity)
{
    this.motionSystem.removeEntity(entity);
    this.renderSystem.removeEntity(entity);
    this.spriteSystem.removeEntity(entity);
    this.inputSystem.removeEntity(entity);
    this.actionSystem.removeEntity(entity);
    this.entities.splice(this.entities.indexOf(entity), 1);
    entity.client = null;
}

GameClient.prototype.start = function()
{
    this.motionSystem = new MotionSystem(this);
    this.spriteSystem = new SpriteSystem(this);
    this.inputSystem = new InputSystem(this);
    this.actionSystem = new ActionSystem(this);
    this.renderSystem = new RenderSystem(this);

    this.camera = new CameraEntity();
    this.camera.canvas = this.canvas;
    this.renderSystem.init(this.camera);
    this.camera.bindControls({
        "87" : "up", // w
        "65" : "left", // a
        "83" : "down", // s
        "68" : "right", // d
        "90" : "zoomin", // z
        "88" : "zoomout", // x
    });
    this.addEntity(this.camera);

    this.player = new PlayerEntity();
    this.player.bindControls({
        "37" : "left",
        "39" : "right",
        "38" : "up",
        "40" : "down",
        "32" : "shoot",
    });
    this.addEntity(this.player);

    //this.addEntity(new PlayerEntity());
    //this.addEntity(new BoxEntity());
    //this.addEntity(new BarrelEntity());
}

GameClient.prototype.update = function()
{
    client.motionSystem.update();
    client.actionSystem.update();
    client.spriteSystem.update();
    client.renderSystem.update();
}
