"use strict";

function n(t) {
  if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}
r("854508"), r("70102");

function i(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t
}
var o = r("884691"),
  a = r("881854"),
  u = r("808598"),
  s = r("989089"),
  c = a.isBrowser("IE <= 11"),
  l = function(t) {
    function e(e) {
      var r;
      return i(n(r = t.call(this, e) || this), "_forceFlag", void 0), i(n(r), "_node", void 0), r._forceFlag = !1, r
    }
    r = e, a = t, r.prototype = Object.create(a.prototype), r.prototype.constructor = r, r.__proto__ = a;
    var r, a, l = e.prototype;
    return l.shouldComponentUpdate = function(t) {
      var e, r = this._node,
        n = "" === t.children;
      s(r) || u(!1);
      if (n) {
        ;
        return e = r, c ? "\n" !== e.textContent : "BR" !== e.tagName
      }
      return r.textContent !== t.children
    }, l.componentDidMount = function() {
      this._forceFlag = !this._forceFlag
    }, l.componentDidUpdate = function() {
      this._forceFlag = !this._forceFlag
    }, l.render = function() {
      var t, e, r = this;
      if ("" === this.props.children) {
        ;
        return this._forceFlag ? (t = function(t) {
          return r._node = t
        }, c ? o.createElement("span", {
          key: "A",
          "data-text": "true",
          ref: t
        }, "\n") : o.createElement("br", {
          key: "A",
          "data-text": "true",
          ref: t
        })) : (e = function(t) {
          return r._node = t
        }, c ? o.createElement("span", {
          key: "B",
          "data-text": "true",
          ref: e
        }, "\n") : o.createElement("br", {
          key: "B",
          "data-text": "true",
          ref: e
        }))
      }
      return o.createElement("span", {
        key: this._forceFlag ? "A" : "B",
        "data-text": "true",
        ref: function(t) {
          return r._node = t
        }
      }, this.props.children)
    }, e
  }(o.Component);
t.exports = l