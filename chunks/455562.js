"use strict";
var n = r("646601").Record,
  i = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
    var r, n, i = e.prototype;
    return i.serialize = function() {
      return "Anchor: " + this.getAnchorKey() + ":" + this.getAnchorOffset() + ", Focus: " + this.getFocusKey() + ":" + this.getFocusOffset() + ", Is Backward: " + String(this.getIsBackward()) + ", Has Focus: " + String(this.getHasFocus())
    }, i.getAnchorKey = function() {
      return this.get("anchorKey")
    }, i.getAnchorOffset = function() {
      return this.get("anchorOffset")
    }, i.getFocusKey = function() {
      return this.get("focusKey")
    }, i.getFocusOffset = function() {
      return this.get("focusOffset")
    }, i.getIsBackward = function() {
      return this.get("isBackward")
    }, i.getHasFocus = function() {
      return this.get("hasFocus")
    }, i.hasEdgeWithin = function(t, e, r) {
      var n = this.getAnchorKey(),
        i = this.getFocusKey();
      if (n === i && n === t) {
        var o = this.getStartOffset(),
          a = this.getEndOffset();
        return e <= o && o <= r || e <= a && a <= r
      }
      if (t !== n && t !== i) return !1;
      var u = t === n ? this.getAnchorOffset() : this.getFocusOffset();
      return e <= u && r >= u
    }, i.isCollapsed = function() {
      return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset()
    }, i.getStartKey = function() {
      return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey()
    }, i.getStartOffset = function() {
      return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset()
    }, i.getEndKey = function() {
      return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey()
    }, i.getEndOffset = function() {
      return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset()
    }, e.createEmpty = function(t) {
      return new e({
        anchorKey: t,
        anchorOffset: 0,
        focusKey: t,
        focusOffset: 0,
        isBackward: !1,
        hasFocus: !1
      })
    }, e
  }(n({
    anchorKey: "",
    anchorOffset: 0,
    focusKey: "",
    focusOffset: 0,
    isBackward: !1,
    hasFocus: !1
  }));
t.exports = i