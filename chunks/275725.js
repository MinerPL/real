"use strict";
r("854508"), r("70102"), r("808653");
var n = r("766811"),
  i = r("523054"),
  o = r("884691"),
  a = r("808598"),
  u = r("678741"),
  s = r("287305").setDraftEditorSelection,
  c = function(t) {
    function e() {
      for (var e, r, n, i, o = arguments.length, a = Array(o), u = 0; u < o; u++) a[u] = arguments[u];
      return r = function(t) {
        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(e = t.call.apply(t, [this].concat(a)) || this), i = void 0, (n = "leaf") in r ? Object.defineProperty(r, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : r[n] = i, e
    }
    r = e, c = t, r.prototype = Object.create(c.prototype), r.prototype.constructor = r, r.__proto__ = c;
    var r, c, l = e.prototype;
    return l._setSelection = function() {
      var t, e = this.props.selection;
      if (null != e && !!e.getHasFocus()) {
        var r = this.props,
          n = r.block,
          i = r.start,
          o = r.text,
          c = n.getKey(),
          l = i + o.length;
        if (e.hasEdgeWithin(c, i, l)) {
          var f = this.leaf;
          f || a(!1);
          var p = f.firstChild;
          p || a(!1), p.nodeType === Node.TEXT_NODE ? t = p : u(p) ? t = f : (t = p.firstChild) || a(!1), s(e, t, c, i, l)
        }
      }
    }, l.shouldComponentUpdate = function(t) {
      var e = this.leaf;
      return e || a(!1), e.textContent !== t.text || t.styleSet !== this.props.styleSet || t.forceSelection
    }, l.componentDidUpdate = function() {
      this._setSelection()
    }, l.componentDidMount = function() {
      this._setSelection()
    }, l.render = function() {
      var t = this,
        e = this.props.block,
        r = this.props.text;
      r.endsWith("\n") && this.props.isLast && (r += "\n");
      var a = this.props,
        u = a.customStyleMap,
        s = a.customStyleFn,
        c = a.offsetKey,
        l = a.styleSet,
        f = l.reduce(function(t, e) {
          var r = {},
            i = u[e];
          return void 0 !== i && t.textDecoration !== i.textDecoration && (r.textDecoration = [t.textDecoration, i.textDecoration].join(" ").trim()), n(t, i, r)
        }, {});
      return s && (f = n(f, s(l, e))), o.createElement("span", {
        "data-offset-key": c,
        ref: function(e) {
          return t.leaf = e
        },
        style: f
      }, o.createElement(i, null, r))
    }, e
  }(o.Component);
t.exports = c