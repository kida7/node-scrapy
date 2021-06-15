"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQuery = void 0;
var nearley_1 = __importDefault(require("nearley"));
var grammar = require("./grammar");
var compiledGrammar = nearley_1.default.Grammar.fromCompiled(grammar);
function parseQuery(query) {
    var parser = new nearley_1.default.Parser(compiledGrammar);
    parser.feed(query);
    // Return the first result
    return parser.results.find(Boolean);
}
exports.parseQuery = parseQuery;
