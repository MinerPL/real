"use strict";
r("854508"), r("70102");
var n = r("766811");

function i() {
  return (i = n || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
    }
    return t
  }).apply(this, arguments)
}
var o = r("275725"),
  a = r("742609"),
  u = r("884691"),
  s = r("929312"),
  c = r("628366"),
  l = r("232973"),
  f = r("237396"),
  p = r("348262"),
  h = r("496030"),
  d = r("265943"),
  g = r("160840"),
  y = r("808598"),
  v = r("41112"),
  m = r("893147"),
  _ = function(t, e) {
    return t.getAnchorKey() === e || t.getFocusKey() === e
  },
  b = function(t) {
    function e() {
      for (var e, r, n, i, o = arguments.length, a = Array(o), u = 0; u < o; u++) a[u] = arguments[u];
      return r = function(t) {
        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(e = t.call.apply(t, [this].concat(a)) || this), i = void 0, (n = "_node") in r ? Object.defineProperty(r, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : r[n] = i, e
    }
    r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
    var r, n, b = e.prototype;
    return b.shouldComponentUpdate = function(t) {
      return this.props.block !== t.block || this.props.tree !== t.tree || this.props.direction !== t.direction || _(t.selection, t.block.getKey()) && t.forceSelection
    }, b.componentDidMount = function() {
      if (this.props.preventScroll) return;
      var t, e = this.props.selection,
        r = e.getEndKey();
      if (!!e.getHasFocus() && r === this.props.block.getKey()) {
        var n = this._node;
        if (null != n) {
          var i = c.getScrollParent(n),
            o = d(i);
          if (i === window) {
            var a = h(n),
              u = a.y + a.height;
            (t = u - g().height) > 0 && window.scrollTo(o.x, o.y + t + 10)
          } else {
            v(n) || y(!1);
            var l = n.offsetHeight + n.offsetTop;
            (t = l - (i.offsetTop + i.offsetHeight + o.y)) > 0 && s.setTop(i, s.getTop(i) + t + 10)
          }
        }
      }
    }, b._renderChildren = function() {
      var t = this,
        e = this.props.block,
        r = e.getKey(),
        n = e.getText(),
        s = this.props.tree.size - 1,
        c = _(this.props.selection, r);
      return this.props.tree.map(function(p, h) {
        var d = p.get("leaves");
        if (0 === d.size) return null;
        var g = d.size - 1,
          y = d.map(function(i, l) {
            var f = a.encode(r, h, l),
              p = i.get("start"),
              d = i.get("end");
            return u.createElement(o, {
              key: f,
              offsetKey: f,
              block: e,
              start: p,
              selection: c ? t.props.selection : null,
              forceSelection: t.props.forceSelection,
              text: n.slice(p, d),
              styleSet: e.getInlineStyleAt(p),
              customStyleMap: t.props.customStyleMap,
              customStyleFn: t.props.customStyleFn,
              isLast: h === s && l === g
            })
          }).toArray(),
          v = p.get("decoratorKey");
        if (null == v || !t.props.decorator) return y;
        var _ = m(t.props.decorator),
          b = _.getComponentForKey(v);
        if (!b) return y;
        var S = _.getPropsForKey(v),
          w = a.encode(r, h, 0),
          k = d.first().get("start"),
          x = d.last().get("end"),
          C = n.slice(k, x),
          E = e.getEntityAt(p.get("start")),
          O = f.getHTMLDirIfDifferent(l.getDirection(C), t.props.direction),
          D = {
            contentState: t.props.contentState,
            decoratedText: C,
            dir: O,
            start: k,
            end: x,
            blockKey: r,
            entityKey: E,
            offsetKey: w
          };
        return u.createElement(b, i({}, S, D, {
          key: w
        }), y)
      }).toArray()
    }, b.render = function() {
      var t = this,
        e = this.props,
        r = e.direction,
        n = e.offsetKey,
        i = p({
          "public/DraftStyleDefault/block": !0,
          "public/DraftStyleDefault/ltr": "LTR" === r,
          "public/DraftStyleDefault/rtl": "RTL" === r
        });
      return u.createElement("div", {
        "data-offset-key": n,
        className: i,
        ref: function(e) {
          return t._node = e
        }
      }, this._renderChildren())
    }, e
  }(u.Component);
t.exports = b