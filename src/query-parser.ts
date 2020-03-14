import nearley from 'nearley'

const grammar = require('./grammar')

const compiledGrammar = nearley.Grammar.fromCompiled(grammar)

export interface Filter {
  name: string,
  args: string[]
}
export interface QueryObject {
  selector: string,
  getter: string,
  filters: Array<Filter>
}
export function parseQuery(query: string): QueryObject {
  const parser = new nearley.Parser(compiledGrammar)

  parser.feed(query)

  // Return the first result
  return parser.results.find(Boolean)
}

