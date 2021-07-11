"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
try {
    vs;
}
catch (e) {
    console.log(new Error(e).name);
}
process.exit();
// Framework Modules
var Message_1 = __importDefault(require("./Message"));
var Exception_1 = __importDefault(require("./Exception"));
var Server_1 = __importDefault(require("./Server"));
var Atlas = /** @class */ (function () {
    function Atlas() {
    }
    /**
     * Configure the AtlasJS
     *
     * @param config Configures the AtlasJS
     **/
    Atlas.prototype.config = function (Config) {
        Message_1.default.config(Config.Message);
        Exception_1.default.config(Config.Exception);
        Server_1.default.config(Config.Server);
        return this;
    };
    /**
     * Prepare the AtlasJS
     */
    Atlas.prototype.prepare = function () {
        return this;
    };
    /**
     * Start AtlasJS
     */
    Atlas.prototype.start = function () {
        // Prepara o Atlas
        this.prepare();
        Message_1.default.header();
        Server_1.default.start();
    };
    return Atlas;
}());
exports.default = new Atlas();