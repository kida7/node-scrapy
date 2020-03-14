const { test } = require('tap')

const scrapy = require('../../src')

const { getFixtureSet } = require('../test-utils')

const { source, model, expected } = getFixtureSet(__dirname, __filename)

const result = scrapy.extract(source, model)

test('default getter should be $textContent', (t) => {
  t.strictSame(result.default, expected.default)
  t.strictSame(result.default, result.textContent)
  t.end()
})

test('$textNodes should only count for direct child nodes', (t) => {
  t.strictSame(result.textNodes, expected.textNodes)
  t.end()
})

test('should return matching attribute if getter is not one of the getters collection', (t) => {
  t.same(result.links, expected.links)
  t.end()
})

test('$outerHTML should return outer HTML of selected element', (t) => {
  t.strictSame(result.outerHTML, expected.outerHTML)
  t.end()
})

test('$innerHTML should return inner HTML of selected element', (t) => {
  t.strictSame(result.innerHTML, expected.innerHTML)
  t.end()
})
