"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = void 0;
var cheerio_1 = __importDefault(require("cheerio"));
var extractItem_1 = require("./extractItem");
function extract(html, model, options) {
    // Using Object.assign instead of object spread removes the need of null checks.
    var deserializedModel;
    try {
        deserializedModel = JSON.parse(JSON.stringify(model));
    }
    catch (error) {
        throw "The model cannot be serialized; " + error.messag;
    }
    var $ = cheerio_1.default.load(html, options);
    return extractItem_1.extractItem($, $.root(), deserializedModel);
}
exports.extract = extract;
