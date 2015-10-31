var RenderComponent = function(entity)
{
    Component.call(this, "render", entity);

    this.scaleX = 1;
    this.scaleY = 1;
    this.rotation = 0;

}

RenderComponent.prototype = Object.create(Component.prototype);
RenderComponent.prototype.constructor = RenderComponent;
Component.prototype.register("render", RenderComponent);
