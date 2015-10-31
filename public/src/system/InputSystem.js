var InputSystem = function(client)
{
    System.call(this, "input", client);

    this.self = this;
    this.key = {};
    this.keyEntityAction = {};

    var self = this;
    client.canvas.addEventListener("keydown", function(event) {
        self.keyDown.call(self, event);
    });
    client.canvas.addEventListener("keyup", function(event) {
        self.keyUp.call(self, event);
    });
}

InputSystem.prototype = Object.create(System.prototype);
InputSystem.prototype.constructor = InputSystem;

InputSystem.prototype.keyDown = function(event)
{
    this.setKeyValue(event.keyCode, 1);
    event.preventDefault();
    return false;
}
InputSystem.prototype.keyUp = function(event)
{
    this.setKeyValue(event.keyCode, 0);
    event.preventDefault();
    return false;
}

InputSystem.prototype.setKeyValue = function(keyCode, value)
{
    if (this.key[keyCode] == value) {
        return;
    }

    this.key[keyCode] = value;

    if (this.keyEntityAction[keyCode]) {

        for (var i in this.keyEntityAction[keyCode]) {
            this.keyEntityAction[keyCode][i].entity.action[this.keyEntityAction[keyCode][i].action] = value;
        }

    }
}

InputSystem.prototype.addEntity = function(entity)
{
    if (entity.input && entity.action) {
        this.entities.push(entity);
        for (var key in entity.input.keyMap) {
            if (!this.keyEntityAction[key]) {
                this.keyEntityAction[key] = [];
            }
            this.keyEntityAction[key].push({
                entity : entity,
                action : entity.input.keyMap[key]
            });
        }
    }
}

System.prototype.removeEntity = function(entity) {
    var idx = this.entities.indexOf(entity);
    if (idx >= 0) {
        this.entities.splice(idx, 1);
        for (var key in this.keyEntityAction) {
            for (var i = 0; i < this.keyEntityAction[key].length; i++) {
                if (this.keyEntityAction[key][i].entity == entity) {
                    this.keyEntityAction[key].splice(i, 1);
                    i --;
                }
            }
        }
    }
};
