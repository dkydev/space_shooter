var Component = function(name, entity)
{
    this.name = name;
    this.entity = entity;
}

Component.prototype.components = {};
Component.prototype.register = function(name, component)
{
    Component.prototype.components[name] = component;
}

Component.prototype.getComponent = function(name, entity)
{
    return new Component.prototype.components[name](entity);
}
