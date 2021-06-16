import _ from "lodash";
import { parseQuery, QueryObject, Filter } from "./query-parser";

export function extractItem(
  $: CheerioStatic,
  dom: Cheerio,
  item: any,
  debug?: boolean
): any {
  if (_.isArray(item)) {
    const queryAST = parseQuery(item[0]);
    const matches = dom.find(queryAST.selector);

    if (!matches || !matches.length) return null;

    if (_.isArray(item[1]) || _.isObject(item[1])) {
      return matches.toArray().map((context) => {
        return extractItem($, $(context), item[1]);
      });
    }
    if (debug) {
      console.log(item, queryAST);
    }
    return matches.toArray().map((context) => {
      let data = resolveGetter($(context), queryAST);
      return applyFilters(data, queryAST.filters);
    });
  }

  if (_.isObject(item)) {
    return Object.keys(item).reduce((acc: any, key) => {
      //@ts-ignore
      acc[key] = extractItem($, dom, item[key]);
      return acc;
    }, {});
  }

  if (_.isString(item)) {
    const query = parseQuery(item);

    let match = query.selector ? dom.find(query.selector) : dom;
    if (!match) return null;

    const data = resolveGetter(match, query);
    if (debug) {
      console.log(item, query);
    }
    return applyFilters(data, query.filters);
  }

  const unsupportedType = item === null ? "null" : typeof item;
  throw `The model has to be a string, an Object or an Array; got ${unsupportedType} instead.`;
}

function resolveGetter(dom: Cheerio, query: QueryObject) {
  if (query.getter) return dom.attr(query.getter);
  if (!query.filters.length) return dom.text();
  return dom;
}

function applyFilters(data: any, filters: Filter[]) {
  filters &&
    data &&
    filters.forEach((filter) => {
      //@ts-ignore
      let func: Function = data[filter.name];
      let args = filter.args || [];
      data = func ? func.call(data, ...args) : "";
    });
  return data;
}
