"use strict";
r("781738");
var n = r("258310"),
  i = r("706621"),
  o = r("117811"),
  a = r("768232"),
  u = r("188552"),
  s = r("455562"),
  c = r("568355"),
  l = r("707736"),
  f = r("646601"),
  p = r("597643"),
  h = f.List,
  d = f.Record,
  g = f.Repeat,
  y = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    r = e, f = t, r.prototype = Object.create(f.prototype), r.prototype.constructor = r, r.__proto__ = f;
    var r, f, d = e.prototype;
    return d.getEntityMap = function() {
      return u
    }, d.getBlockMap = function() {
      return this.get("blockMap")
    }, d.getSelectionBefore = function() {
      return this.get("selectionBefore")
    }, d.getSelectionAfter = function() {
      return this.get("selectionAfter")
    }, d.getBlockForKey = function(t) {
      return this.getBlockMap().get(t)
    }, d.getKeyBefore = function(t) {
      return this.getBlockMap().reverse().keySeq().skipUntil(function(e) {
        return e === t
      }).skip(1).first()
    }, d.getKeyAfter = function(t) {
      return this.getBlockMap().keySeq().skipUntil(function(e) {
        return e === t
      }).skip(1).first()
    }, d.getBlockAfter = function(t) {
      return this.getBlockMap().skipUntil(function(e, r) {
        return r === t
      }).skip(1).first()
    }, d.getBlockBefore = function(t) {
      return this.getBlockMap().reverse().skipUntil(function(e, r) {
        return r === t
      }).skip(1).first()
    }, d.getBlocksAsArray = function() {
      return this.getBlockMap().toArray()
    }, d.getFirstBlock = function() {
      return this.getBlockMap().first()
    }, d.getLastBlock = function() {
      return this.getBlockMap().last()
    }, d.getPlainText = function(t) {
      return this.getBlockMap().map(function(t) {
        return t ? t.getText() : ""
      }).join(t || "\n")
    }, d.getLastCreatedEntityKey = function() {
      return u.__getLastCreatedEntityKey()
    }, d.hasText = function() {
      var t = this.getBlockMap();
      return t.size > 1 || escape(t.first().getText()).replace(/%u200B/g, "").length > 0
    }, d.createEntity = function(t, e, r) {
      return u.__create(t, e, r), this
    }, d.mergeEntityData = function(t, e) {
      return u.__mergeData(t, e), this
    }, d.replaceEntityData = function(t, e) {
      return u.__replaceData(t, e), this
    }, d.addEntity = function(t) {
      return u.__add(t), this
    }, d.getEntity = function(t) {
      return u.__get(t)
    }, e.createFromBlockArray = function(t, r) {
      var i = Array.isArray(t) ? t : t.contentBlocks,
        o = n.createFromArray(i),
        a = o.isEmpty() ? new s : s.createEmpty(o.first().getKey());
      return new e({
        blockMap: o,
        entityMap: r || u,
        selectionBefore: a,
        selectionAfter: a
      })
    }, e.createFromText = function(t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /\r\n?|\n/g,
        n = t.split(r).map(function(t) {
          return t = p(t), new(l("draft_tree_data_support") ? a : o)({
            key: c(),
            text: t,
            type: "unstyled",
            characterList: h(g(i.EMPTY, t.length))
          })
        });
      return e.createFromBlockArray(n)
    }, e
  }(d({
    entityMap: null,
    blockMap: null,
    selectionBefore: null,
    selectionAfter: null
  }));
t.exports = y