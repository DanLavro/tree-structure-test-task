var TreeStructure = /** @class */ (function () {
    function TreeStructure(data) {
        this.data = data;
    }
    TreeStructure.prototype.getAll = function () {
        return this.data;
    };
    TreeStructure.prototype.getItem = function (id) {
        return this.data.find(function (item) { return item.id === id; });
    };
    TreeStructure.prototype.getChildren = function (id) {
        return this.data.filter(function (item) { return item.parent === id; });
    };
    TreeStructure.prototype.getAllChildren = function (id) {
        var _this = this;
        var children = this.getChildren(id);
        return children.concat(children.reduce(function (acc, item) {
            var children = _this.getAllChildren(item.id);
            return acc.concat(children);
        }, []));
    };
    TreeStructure.prototype.getAllParents = function (id) {
        var item = this.getItem(id);
        if (!item) {
            return [];
        }
        var parent = this.getItem(item.parent);
        if (!parent) {
            return [];
        }
        return [parent].concat(this.getAllParents(parent.id));
    };
    return TreeStructure;
}());
module.exports = TreeStructure;
