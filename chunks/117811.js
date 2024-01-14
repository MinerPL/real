"use strict";
r("222007");
var n = r("706621"),
  i = r("516017"),
  o = r("646601"),
  a = o.List,
  Map = o.Map,
  u = o.OrderedSet,
  s = o.Record,
  c = o.Repeat,
  l = u(),
  f = s({
    key: "",
    type: "unstyled",
    text: "",
    characterList: a(),
    depth: 0,
    data: Map()
  }),
  p = function(t) {
    if (!t) return t;
    var e = t.characterList,
      r = t.text;
    return r && !e && (t.characterList = a(c(n.EMPTY, r.length))), t
  },
  h = function(t) {
    function e(e) {
      return t.call(this, p(e)) || this
    }
    r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
    var r, n, o = e.prototype;
    return o.getKey = function() {
      return this.get("key")
    }, o.getType = function() {
      return this.get("type")
    }, o.getText = function() {
      return this.get("text")
    }, o.getCharacterList = function() {
      return this.get("characterList")
    }, o.getLength = function() {
      return this.getText().length
    }, o.getDepth = function() {
      return this.get("depth")
    }, o.getData = function() {
      return this.get("data")
    }, o.getInlineStyleAt = function(t) {
      var e = this.getCharacterList().get(t);
      return e ? e.getStyle() : l
    }, o.getEntityAt = function(t) {
      var e = this.getCharacterList().get(t);
      return e ? e.getEntity() : null
    }, o.findStyleRanges = function(t, e) {
      i(this.getCharacterList(), d, t, e)
    }, o.findEntityRanges = function(t, e) {
      i(this.getCharacterList(), g, t, e)
    }, e
  }(f);

function d(t, e) {
  return t.getStyle() === e.getStyle()
}

function g(t, e) {
  return t.getEntity() === e.getEntity()
}
t.exports = h