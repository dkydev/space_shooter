var InputComponent = function(entity)
{
    Component.call(this, "input", entity);
    this.keyMap = {};
}

InputComponent.prototype = Object.create(Component.prototype);
InputComponent.prototype.constructor = InputComponent;
Component.prototype.register("input", InputComponent);
