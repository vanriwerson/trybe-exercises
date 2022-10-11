"use strict";
// On root directory:
// setup: npm install -D typescript ts-node-dev
// compile: npx tsc para-fixar/TV.ts
// run: node para-fixar/TV.js
exports.__esModule = true;
var TV = /** @class */ (function () {
    function TV(brand, size, resolution, connections) {
        var _this = this;
        this.getAttributes = function () {
            return {
                brand: _this._brand,
                size: _this._size,
                resolution: _this._resolution,
                connections: _this._connections
            };
        };
        this.getConnection = function () {
            return _this._connectedTo;
        };
        this.setConnection = function (connectTo) {
            var isValidConnection = _this._connections.some(function (conn) { return conn === connectTo; });
            if (isValidConnection) {
                _this._connectedTo = connectTo;
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        };
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    TV.prototype.turnOn = function () {
        var _a = this.getAttributes(), brand = _a.brand, size = _a.size, resolution = _a.resolution, connections = _a.connections;
        console.log(brand, size, resolution, connections);
    };
    return TV;
}());
exports["default"] = TV;
var myOldAndGoodTV = new TV('Samsung', '32"', '1920 x 1080', ['HDMI', 'AVI', 'USB']);
myOldAndGoodTV.turnOn();
myOldAndGoodTV.setConnection('xablau');
myOldAndGoodTV.setConnection('HDMI');
console.log(myOldAndGoodTV.getConnection());
