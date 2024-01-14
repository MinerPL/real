"use strict";
var n = r("376672"),
  i = r("275725"),
  o = r("742609"),
  a = r("646601"),
  u = r("884691"),
  s = r("348262");
a.List;
var c = function(t) {
  var e, r;

  function a() {
    return t.apply(this, arguments) || this
  }
  return e = a, r = t, e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, a.prototype.render = function() {
    var t = this.props,
      e = t.block,
      r = t.contentState,
      a = t.customStyleFn,
      c = t.customStyleMap,
      l = t.decorator,
      f = t.direction,
      p = t.forceSelection,
      h = t.hasSelection,
      d = t.selection,
      g = t.tree,
      y = e.getKey(),
      v = e.getText(),
      m = g.size - 1,
      _ = this.props.children || g.map(function(t, s) {
        var g = t.get("decoratorKey"),
          _ = t.get("leaves"),
          b = _.size - 1,
          S = _.map(function(t, r) {
            var n = o.encode(y, s, r),
              l = t.get("start"),
              f = t.get("end");
            return u.createElement(i, {
              key: n,
              offsetKey: n,
              block: e,
              start: l,
              selection: h ? d : null,
              forceSelection: p,
              text: v.slice(l, f),
              styleSet: e.getInlineStyleAt(l),
              customStyleMap: c,
              customStyleFn: a,
              isLast: g === m && r === b
            })
          }).toArray();
        return g && l ? u.createElement(n, {
          block: e,
          children: S,
          contentState: r,
          decorator: l,
          decoratorKey: g,
          direction: f,
          leafSet: t,
          text: v,
          key: s
        }) : S
      }).toArray();
    return u.createElement("div", {
      "data-offset-key": o.encode(y, 0, 0),
      className: s({
        "public/DraftStyleDefault/block": !0,
        "public/DraftStyleDefault/ltr": "LTR" === f,
        "public/DraftStyleDefault/rtl": "RTL" === f
      })
    }, _)
  }, a
}(u.Component);
t.exports = c