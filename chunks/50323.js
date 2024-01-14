"use strict";
n.r(e), n.d(e, {
  DOMRectReadOnly: function() {
    return DOMRectReadOnly
  }
}), n("274635");
var DOMRectReadOnly = function() {
  function DOMRectReadOnly(t, e, n, r) {
    return this.x = t, this.y = e, this.width = n, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Object.freeze(this)
  }
  return DOMRectReadOnly.prototype.toJSON = function() {
    return {
      x: this.x,
      y: this.y,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left,
      width: this.width,
      height: this.height
    }
  }, DOMRectReadOnly.fromRect = function(t) {
    return new DOMRectReadOnly(t.x, t.y, t.width, t.height)
  }, DOMRectReadOnly
}()