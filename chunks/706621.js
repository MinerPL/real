"use strict";
r("222007");
var n = r("646601"),
  Map = n.Map,
  i = n.OrderedSet,
  o = n.Record,
  a = i(),
  u = {
    style: a,
    entity: null
  },
  s = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
    var r, n, i = e.prototype;
    return i.getStyle = function() {
      return this.get("style")
    }, i.getEntity = function() {
      return this.get("entity")
    }, i.hasStyle = function(t) {
      return this.getStyle().includes(t)
    }, e.applyStyle = function(t, r) {
      var n = t.set("style", t.getStyle().add(r));
      return e.create(n)
    }, e.removeStyle = function(t, r) {
      var n = t.set("style", t.getStyle().remove(r));
      return e.create(n)
    }, e.applyEntity = function(t, r) {
      var n = t.getEntity() === r ? t : t.set("entity", r);
      return e.create(n)
    }, e.create = function(t) {
      if (!t) return c;
      var r = Map({
          style: a,
          entity: null
        }).merge(t),
        n = l.get(r);
      if (n) return n;
      var i = new e(r);
      return l = l.set(r, i), i
    }, e
  }(o(u)),
  c = new s,
  l = Map([
    [Map(u), c]
  ]);
s.EMPTY = c, t.exports = s