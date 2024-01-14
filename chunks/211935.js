"use strict";

function n(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t
}
r("222007"), r("781738");
var i = r("881854"),
  o = r("817018"),
  a = r("241819"),
  u = r("646601"),
  s = r("808598"),
  c = r("893147"),
  Map = u.Map,
  l = {
    subtree: !0,
    characterData: !0,
    childList: !0,
    characterDataOldValue: !1,
    attributes: !1
  },
  f = i.isBrowser("IE <= 11"),
  p = function() {
    function t(t) {
      var e = this;
      n(this, "observer", void 0), n(this, "container", void 0), n(this, "mutations", void 0), n(this, "onCharData", void 0), this.container = t, this.mutations = Map();
      var r = a(t);
      r.MutationObserver && !f ? this.observer = new r.MutationObserver(function(t) {
        return e.registerMutations(t)
      }) : this.onCharData = function(t) {
        t.target instanceof Node || s(!1), e.registerMutation({
          type: "characterData",
          target: t.target
        })
      }
    }
    var e = t.prototype;
    return e.start = function() {
      this.observer ? this.observer.observe(this.container, l) : this.container.addEventListener("DOMCharacterDataModified", this.onCharData)
    }, e.stopAndFlushMutations = function() {
      var t = this.observer;
      t ? (this.registerMutations(t.takeRecords()), t.disconnect()) : this.container.removeEventListener("DOMCharacterDataModified", this.onCharData);
      var e = this.mutations;
      return this.mutations = Map(), e
    }, e.registerMutations = function(t) {
      for (var e = 0; e < t.length; e++) this.registerMutation(t[e])
    }, e.getMutationTextContent = function(t) {
      var e = t.type,
        r = t.target,
        n = t.removedNodes;
      if ("characterData" === e) {
        if ("" !== r.textContent) return f ? r.textContent.replace("\n", "") : r.textContent
      } else if ("childList" === e) {
        if (n && n.length) return "";
        if ("" !== r.textContent) return r.textContent
      }
      return null
    }, e.registerMutation = function(t) {
      var e = this.getMutationTextContent(t);
      if (null != e) {
        var r = c(o(t.target));
        this.mutations = this.mutations.set(r, e)
      }
    }, t
  }();
t.exports = p