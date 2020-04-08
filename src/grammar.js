// Generated automatically by nearley, version 2.19.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const flatten = list => list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
  const prune = d => flatten(d).filter(x => x !== null)
  const join = d => prune(d).join('')
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["EXTENDED_QUERY"], "postprocess": id},
    {"name": "MAIN", "symbols": ["SIMPLE_QUERY"], "postprocess": id},
    {"name": "EXTENDED_QUERY", "symbols": ["CSS_COMBINATOR", "__", "QUERY_EXTENSION", "_"], "postprocess":  d => ({
          selector: d[0],
          getter: d[2].getter,
          filters: d[2].filters
        }) },
    {"name": "EXTENDED_QUERY", "symbols": ["QUERY_EXTENSION"], "postprocess": id},
    {"name": "SIMPLE_QUERY", "symbols": ["CSS_COMBINATOR"], "postprocess":  d => ({
          selector: d[0],
          getter: null,
          filters: [],
        })},
    {"name": "QUERY_EXTENSION", "symbols": ["GETTER"], "postprocess": d => ({ getter: d[0], filters: [] })},
    {"name": "QUERY_EXTENSION", "symbols": ["FILTER_LIST"], "postprocess": d => ({ getter: null, filters: d[0] })},
    {"name": "QUERY_EXTENSION", "symbols": ["GETTER", "__", "FILTER_LIST"], "postprocess": d => ({ getter: d[0], filters: d[2] })},
    {"name": "GETTER$string$1", "symbols": [{"literal":"="}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GETTER", "symbols": ["GETTER$string$1", "__", "IDENTIFIER"], "postprocess": d => d[2]},
    {"name": "FILTER_LIST", "symbols": ["FILTER"]},
    {"name": "FILTER_LIST", "symbols": ["FILTER_LIST", "__", "FILTER"], "postprocess": d => flatten([d[0], d[2]])},
    {"name": "FILTER$ebnf$1", "symbols": []},
    {"name": "FILTER$ebnf$1", "symbols": ["FILTER$ebnf$1", "FILTER_ARG"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "FILTER", "symbols": [{"literal":"|"}, "__", "IDENTIFIER", "FILTER$ebnf$1"], "postprocess":  d => ({
          name: d[2],
          args: d[3]
        }) },
    {"name": "FILTER_ARG", "symbols": [{"literal":":"}, "VALUE"], "postprocess": d => d[1]},
    {"name": "IDENTIFIER$ebnf$1", "symbols": []},
    {"name": "IDENTIFIER$ebnf$1", "symbols": ["IDENTIFIER$ebnf$1", /[a-zA-Z0-9_$-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "IDENTIFIER", "symbols": ["ID_START", "IDENTIFIER$ebnf$1"], "postprocess": join},
    {"name": "ID_START", "symbols": [/[a-zA-Z$_]/], "postprocess": id},
    {"name": "VALUE", "symbols": ["NUMBER"], "postprocess": id},
    {"name": "VALUE", "symbols": ["STRING"], "postprocess": id},
    {"name": "VALUE", "symbols": ["LITERAL"], "postprocess": id},
    {"name": "LITERAL", "symbols": ["NULL"], "postprocess": id},
    {"name": "LITERAL", "symbols": ["TRUE"], "postprocess": id},
    {"name": "LITERAL", "symbols": ["FALSE"], "postprocess": id},
    {"name": "LITERAL", "symbols": ["SYMBOL"], "postprocess": id},
    {"name": "SYMBOL$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "SYMBOL$ebnf$1", "symbols": ["SYMBOL$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "SYMBOL", "symbols": ["SYMBOL$ebnf$1"], "postprocess":  (d, loc, reject) => {
          const token = join(d)
          return ["null", "true", "false"].includes(token) ? reject : token
        } },
    {"name": "CSS_COMBINATOR", "symbols": ["SELECTOR_BODY"], "postprocess": join},
    {"name": "CSS_COMBINATOR", "symbols": [/[><+~]/, "_", "SELECTOR_BODY"], "postprocess": join},
    {"name": "CSS_COMBINATOR", "symbols": ["CSS_COMBINATOR", "_", /[><+~]/, "_", "SELECTOR_BODY"], "postprocess": join},
    {"name": "CSS_COMBINATOR", "symbols": ["CSS_COMBINATOR", "__", "SELECTOR_BODY"], "postprocess": join},
    {"name": "SELECTOR_BODY$ebnf$1", "symbols": ["PSEUDO_ELEMENT_SELECTOR"], "postprocess": id},
    {"name": "SELECTOR_BODY$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "SELECTOR_BODY", "symbols": ["BASE_SELECTOR", "SELECTOR_BODY$ebnf$1"], "postprocess": join},
    {"name": "SELECTOR_BODY$ebnf$2", "symbols": ["PSEUDO_ELEMENT_SELECTOR"], "postprocess": id},
    {"name": "SELECTOR_BODY$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "SELECTOR_BODY", "symbols": ["COMPOUND_SELECTOR", "SELECTOR_BODY$ebnf$2"], "postprocess": join},
    {"name": "SELECTOR_BODY$ebnf$3", "symbols": ["PSEUDO_ELEMENT_SELECTOR"], "postprocess": id},
    {"name": "SELECTOR_BODY$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "SELECTOR_BODY", "symbols": ["BASE_SELECTOR", "COMPOUND_SELECTOR", "SELECTOR_BODY$ebnf$3"], "postprocess": join},
    {"name": "COMPOUND_SELECTOR", "symbols": ["MODIFIER_SELECTOR"], "postprocess": join},
    {"name": "COMPOUND_SELECTOR", "symbols": ["COMPOUND_SELECTOR", "MODIFIER_SELECTOR"], "postprocess": join},
    {"name": "MODIFIER_SELECTOR", "symbols": ["ID_SELECTOR"], "postprocess": join},
    {"name": "MODIFIER_SELECTOR", "symbols": ["CLASS_SELECTOR"], "postprocess": join},
    {"name": "MODIFIER_SELECTOR", "symbols": ["ATTRIBUTE_VALUE_SELECTOR"], "postprocess": join},
    {"name": "MODIFIER_SELECTOR", "symbols": ["ATTRIBUTE_PRESENCE_SELECTOR"], "postprocess": join},
    {"name": "MODIFIER_SELECTOR", "symbols": ["PSEUDO_CLASS_SELECTOR"], "postprocess": join},
    {"name": "BASE_SELECTOR", "symbols": ["TYPE_SELECTOR"], "postprocess": join},
    {"name": "BASE_SELECTOR", "symbols": ["UNIVERSAL_SELECTOR"], "postprocess": join},
    {"name": "UNIVERSAL_SELECTOR", "symbols": [{"literal":"*"}]},
    {"name": "TYPE_SELECTOR", "symbols": ["ATTRIBUTE_NAME"], "postprocess": join},
    {"name": "ID_SELECTOR", "symbols": [{"literal":"#"}, "ATTRIBUTE_NAME"], "postprocess": join},
    {"name": "CLASS_SELECTOR", "symbols": [{"literal":"."}, "CLASS_NAME"], "postprocess": join},
    {"name": "CLASS_NAME", "symbols": ["NAME_START"], "postprocess": join},
    {"name": "CLASS_NAME", "symbols": [{"literal":"-"}, "NAME_START", "NAME_BODY"], "postprocess": join},
    {"name": "CLASS_NAME", "symbols": ["NAME_START", "NAME_BODY"], "postprocess": join},
    {"name": "ATTRIBUTE_PRESENCE_SELECTOR", "symbols": [{"literal":"["}, "ATTRIBUTE_NAME", {"literal":"]"}], "postprocess": join},
    {"name": "ATTRIBUTE_VALUE_SELECTOR", "symbols": [{"literal":"["}, "ATTRIBUTE_NAME", "ATTRIBUTE_OPERATOR", "ATTRIBUTE_VALUE", {"literal":"]"}], "postprocess": join},
    {"name": "ATTRIBUTE_NAME", "symbols": ["NAME_START"], "postprocess": join},
    {"name": "ATTRIBUTE_NAME", "symbols": ["NAME_START", "NAME_BODY"], "postprocess": join},
    {"name": "ATTRIBUTE_OPERATOR", "symbols": [{"literal":"="}]},
    {"name": "ATTRIBUTE_OPERATOR$string$1", "symbols": [{"literal":"~"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ATTRIBUTE_OPERATOR", "symbols": ["ATTRIBUTE_OPERATOR$string$1"]},
    {"name": "ATTRIBUTE_OPERATOR$string$2", "symbols": [{"literal":"|"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ATTRIBUTE_OPERATOR", "symbols": ["ATTRIBUTE_OPERATOR$string$2"]},
    {"name": "ATTRIBUTE_OPERATOR$string$3", "symbols": [{"literal":"^"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ATTRIBUTE_OPERATOR", "symbols": ["ATTRIBUTE_OPERATOR$string$3"]},
    {"name": "ATTRIBUTE_OPERATOR$string$4", "symbols": [{"literal":"$"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ATTRIBUTE_OPERATOR", "symbols": ["ATTRIBUTE_OPERATOR$string$4"]},
    {"name": "ATTRIBUTE_OPERATOR$string$5", "symbols": [{"literal":"*"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ATTRIBUTE_OPERATOR", "symbols": ["ATTRIBUTE_OPERATOR$string$5"]},
    {"name": "ATTRIBUTE_VALUE", "symbols": ["UNQUOTED_ATTRIBUTE_VALUE"], "postprocess": join},
    {"name": "ATTRIBUTE_VALUE", "symbols": ["STRING"], "postprocess": join},
    {"name": "UNQUOTED_ATTRIBUTE_VALUE$ebnf$1", "symbols": [/[^\[\]"',= ]/]},
    {"name": "UNQUOTED_ATTRIBUTE_VALUE$ebnf$1", "symbols": ["UNQUOTED_ATTRIBUTE_VALUE$ebnf$1", /[^\[\]"',= ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "UNQUOTED_ATTRIBUTE_VALUE", "symbols": ["UNQUOTED_ATTRIBUTE_VALUE$ebnf$1"], "postprocess": join},
    {"name": "PSEUDO_ELEMENT_SELECTOR$string$1", "symbols": [{"literal":":"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PSEUDO_ELEMENT_SELECTOR", "symbols": ["PSEUDO_ELEMENT_SELECTOR$string$1", "PSEUDO_SELECTOR_NAME"], "postprocess": join},
    {"name": "PSEUDO_CLASS_SELECTOR", "symbols": [{"literal":":"}, "PSEUDO_SELECTOR_NAME"], "postprocess": join},
    {"name": "PSEUDO_CLASS_SELECTOR$ebnf$1", "symbols": []},
    {"name": "PSEUDO_CLASS_SELECTOR$ebnf$1", "symbols": ["PSEUDO_CLASS_SELECTOR$ebnf$1", /[^\(\)]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "PSEUDO_CLASS_SELECTOR", "symbols": [{"literal":":"}, "PSEUDO_SELECTOR_NAME", {"literal":"("}, "PSEUDO_CLASS_SELECTOR$ebnf$1", {"literal":")"}], "postprocess": join},
    {"name": "PSEUDO_SELECTOR_NAME", "symbols": [/[a-zA-Z]/, "NAME_BODY"], "postprocess": join},
    {"name": "NAME_START", "symbols": [/[_a-zA-Z]/], "postprocess": join},
    {"name": "NAME_BODY$ebnf$1", "symbols": [/[a-zA-Z0-9-_]/]},
    {"name": "NAME_BODY$ebnf$1", "symbols": ["NAME_BODY$ebnf$1", /[a-zA-Z0-9-_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NAME_BODY", "symbols": ["NAME_BODY$ebnf$1"], "postprocess": join},
    {"name": "NUMBER$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "NUMBER$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "NUMBER$subexpression$1", "symbols": [{"literal":"0"}]},
    {"name": "NUMBER$subexpression$1$ebnf$1", "symbols": []},
    {"name": "NUMBER$subexpression$1$ebnf$1", "symbols": ["NUMBER$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NUMBER$subexpression$1", "symbols": [/[1-9]/, "NUMBER$subexpression$1$ebnf$1"]},
    {"name": "NUMBER$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "NUMBER$ebnf$2$subexpression$1$ebnf$1", "symbols": ["NUMBER$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NUMBER$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "NUMBER$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "NUMBER$ebnf$2", "symbols": ["NUMBER$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "NUMBER$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "NUMBER$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "NUMBER$ebnf$3$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "NUMBER$ebnf$3$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "NUMBER$ebnf$3$subexpression$1$ebnf$2", "symbols": ["NUMBER$ebnf$3$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NUMBER$ebnf$3$subexpression$1", "symbols": [/[eE]/, "NUMBER$ebnf$3$subexpression$1$ebnf$1", "NUMBER$ebnf$3$subexpression$1$ebnf$2"]},
    {"name": "NUMBER$ebnf$3", "symbols": ["NUMBER$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "NUMBER$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "NUMBER", "symbols": ["NUMBER$ebnf$1", "NUMBER$subexpression$1", "NUMBER$ebnf$2", "NUMBER$ebnf$3"], "postprocess":   d => {
          return Number.parseFloat(
            join(d)
          )
        } },
    {"name": "STRING", "symbols": ["SINGLE_QUOTE_STRING"], "postprocess": id},
    {"name": "STRING", "symbols": ["DOUBLE_QUOTE_STRING"], "postprocess": id},
    {"name": "SINGLE_QUOTE_STRING$ebnf$1", "symbols": []},
    {"name": "SINGLE_QUOTE_STRING$ebnf$1", "symbols": ["SINGLE_QUOTE_STRING$ebnf$1", "SINGLE_QUOTE_CHAR"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "SINGLE_QUOTE_STRING", "symbols": [{"literal":"'"}, "SINGLE_QUOTE_STRING$ebnf$1", {"literal":"'"}], "postprocess": join},
    {"name": "DOUBLE_QUOTE_STRING$ebnf$1", "symbols": []},
    {"name": "DOUBLE_QUOTE_STRING$ebnf$1", "symbols": ["DOUBLE_QUOTE_STRING$ebnf$1", "DOUBLE_QUOTE_CHAR"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "DOUBLE_QUOTE_STRING", "symbols": [{"literal":"\""}, "DOUBLE_QUOTE_STRING$ebnf$1", {"literal":"\""}], "postprocess": join},
    {"name": "SINGLE_QUOTE_CHAR", "symbols": ["ESCAPED_CHAR"], "postprocess": id},
    {"name": "SINGLE_QUOTE_CHAR", "symbols": [/[^'\\]/], "postprocess": id},
    {"name": "SINGLE_QUOTE_CHAR$string$1", "symbols": [{"literal":"\\"}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SINGLE_QUOTE_CHAR", "symbols": ["SINGLE_QUOTE_CHAR$string$1"], "postprocess": () => "'"},
    {"name": "DOUBLE_QUOTE_CHAR", "symbols": ["ESCAPED_CHAR"], "postprocess": id},
    {"name": "DOUBLE_QUOTE_CHAR", "symbols": [/[^"\\]/], "postprocess": id},
    {"name": "DOUBLE_QUOTE_CHAR$string$1", "symbols": [{"literal":"\\"}, {"literal":"\""}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DOUBLE_QUOTE_CHAR", "symbols": ["DOUBLE_QUOTE_CHAR$string$1"], "postprocess": () => '"'},
    {"name": "ESCAPED_CHAR$string$1", "symbols": [{"literal":"\\"}, {"literal":"\\"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ESCAPED_CHAR", "symbols": ["ESCAPED_CHAR$string$1"], "postprocess": () => '\\'},
    {"name": "ESCAPED_CHAR$string$2", "symbols": [{"literal":"\\"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ESCAPED_CHAR", "symbols": ["ESCAPED_CHAR$string$2"], "postprocess": () => '/'},
    {"name": "ESCAPED_CHAR$string$3", "symbols": [{"literal":"\\"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ESCAPED_CHAR", "symbols": ["ESCAPED_CHAR$string$3"], "postprocess": () => '\n'},
    {"name": "ESCAPED_CHAR$string$4", "symbols": [{"literal":"\\"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ESCAPED_CHAR", "symbols": ["ESCAPED_CHAR$string$4"], "postprocess": () => '\b'},
    {"name": "ESCAPED_CHAR$string$5", "symbols": [{"literal":"\\"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ESCAPED_CHAR", "symbols": ["ESCAPED_CHAR$string$5"], "postprocess": () => '\f'},
    {"name": "ESCAPED_CHAR$string$6", "symbols": [{"literal":"\\"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ESCAPED_CHAR", "symbols": ["ESCAPED_CHAR$string$6"], "postprocess": () => '\r'},
    {"name": "ESCAPED_CHAR$string$7", "symbols": [{"literal":"\\"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ESCAPED_CHAR", "symbols": ["ESCAPED_CHAR$string$7"], "postprocess": () => '\t'},
    {"name": "ESCAPED_CHAR$string$8", "symbols": [{"literal":"\\"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ESCAPED_CHAR", "symbols": ["ESCAPED_CHAR$string$8", "HEX", "HEX", "HEX", "HEX"], "postprocess":  d => {
          const point = Number.parseInt(join(d.slice(1)), 16)
          if (point === 92) return '\\'
          return String.fromCodePoint(point)
        } },
    {"name": "HEX", "symbols": [/[0-9a-fA-F]/], "postprocess": id},
    {"name": "NULL$string$1", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NULL", "symbols": ["NULL$string$1"], "postprocess": () => null},
    {"name": "TRUE$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TRUE", "symbols": ["TRUE$string$1"], "postprocess": () => true},
    {"name": "FALSE$string$1", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FALSE", "symbols": ["FALSE$string$1"], "postprocess": () => false},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "WSCHAR"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": join},
    {"name": "__$ebnf$1", "symbols": ["WSCHAR"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "WSCHAR"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": join},
    {"name": "WSCHAR", "symbols": [/[ \t\n\v\f]/], "postprocess": join}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
