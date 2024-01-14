"use strict";
n.r(e), n.d(e, {
  scheduler: function() {
    return l
  },
  updateCount: function() {
    return f
  }
});
var r = n("48255"),
  i = n("741921"),
  o = n("122417"),
  a = 0,
  u = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  },
  s = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
  c = !1,
  l = new(function() {
    function t() {
      var t = this;
      this.stopped = !0, this.listener = function() {
        return t.schedule()
      }
    }
    return t.prototype.run = function(t) {
      var e = this;
      !c && (c = !0, (0, o.queueResizeObserver)(function() {
        var n = !1;
        try {
          n = (0, r.process)()
        } finally {
          if (c = !1, !a) return;
          n ? e.run(60) : t ? e.run(t - 1) : e.start()
        }
      }))
    }, t.prototype.schedule = function() {
      this.stop(), this.run(12)
    }, t.prototype.observe = function() {
      var t = this,
        e = function() {
          return t.observer && t.observer.observe(document.body, u)
        };
      document.body ? e() : i.global.addEventListener("DOMContentLoaded", e)
    }, t.prototype.start = function() {
      var t = this;
      this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), s.forEach(function(e) {
        return i.global.addEventListener(e, t.listener, !0)
      }))
    }, t.prototype.stop = function() {
      var t = this;
      !this.stopped && (this.observer && this.observer.disconnect(), s.forEach(function(e) {
        return i.global.removeEventListener(e, t.listener, !0)
      }), this.stopped = !0)
    }, t
  }()),
  f = function(t) {
    !a && t > 0 && l.start(), (a += t) || l.stop()
  }