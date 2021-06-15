"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractItem = void 0;
var lodash_1 = __importDefault(require("lodash"));
var query_parser_1 = require("./query-parser");
function extractItem($, dom, item) {
    if (lodash_1.default.isArray(item)) {
        var queryAST_1 = query_parser_1.parseQuery(item[0]);
        var matches = dom.find(queryAST_1.selector);
        if (!matches || !matches.length)
            return null;
        if (lodash_1.default.isArray(item[1]) || lodash_1.default.isObject(item[1])) {
            return matches.toArray().map(function (context) {
                return extractItem($, $(context), item[1]);
            });
        }
        return matches.toArray().map(function (context) {
            var data = resolveGetter($(context), queryAST_1);
            return applyFilters(data, queryAST_1.filters);
        });
    }
    if (lodash_1.default.isObject(item)) {
        return Object.keys(item).reduce(function (acc, key) {
            //@ts-ignore
            acc[key] = extractItem($, dom, item[key]);
            return acc;
        }, {});
    }
    if (lodash_1.default.isString(item)) {
        var query = query_parser_1.parseQuery(item);
        var match = query.selector ? dom.find(query.selector) : dom;
        if (!match)
            return null;
        var data = resolveGetter(match, query);
        return applyFilters(data, query.filters);
    }
    var unsupportedType = item === null ? 'null' : typeof item;
    throw "The model has to be a string, an Object or an Array; got " + unsupportedType + " instead.";
}
exports.extractItem = extractItem;
function resolveGetter(dom, query) {
    if (query.getter)
        return dom.attr(query.getter);
    if (!query.filters.length)
        return dom.text();
    return dom;
}
function applyFilters(data, filters) {
    filters && filters.forEach(function (filter) {
        //@ts-ignore
        var func = data[filter.name];
        data = func ? func.call.apply(func, __spreadArray([data], filter.args)) : '';
    });
    return data;
}
