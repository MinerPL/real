"use strict";
n.r(t), n.d(t, {
  DOMRectReadOnly: function() {
    return DOMRectReadOnly
  }
}), n("274635");
var DOMRectReadOnly = function() {
  function DOMRectReadOnly(e, t, n, r) {
    return this.x = e, this.y = t, this.width = n, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Object.freeze(this)
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
  }, DOMRectReadOnly.fromRect = function(e) {
    return new DOMRectReadOnly(e.x, e.y, e.width, e.height)
  }, DOMRectReadOnly
}()