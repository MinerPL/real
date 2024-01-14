"use strict";
r.r(t), r.d(t, {
  default: function() {
    return y
  }
}), r("426094");
var a = r("261438"),
  n = r("8967"),
  s = r("881099"),
  o = r("446873"),
  i = r("281788"),
  u = r("370538"),
  c = r("51138"),
  l = r("309501"),
  f = r("884691"),
  b = r.n(f),
  d = r("493110"),
  h = r.n(d),
  p = r("19421"),
  y = function(e) {
    (0, i.default)(d, e);
    var t, r, f = (t = d, r = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
      } catch (e) {
        return !1
      }
    }(), function() {
      var e, a = (0, c.default)(t);
      if (r) {
        var n = (0, c.default)(this).constructor;
        e = Reflect.construct(a, arguments, n)
      } else e = a.apply(this, arguments);
      return (0, u.default)(this, e)
    });

    function d(e) {
      var t;
      return (0, n.default)(this, d), t = f.call(this, e), (0, l.default)((0, o.default)(t), "handleClick", function() {
        t.setState({
          expanded: !t.state.expanded
        })
      }), t.state = {
        expanded: !1
      }, t
    }
    return (0, s.default)(d, [{
      key: "render",
      value: function() {
        var e = this.props,
          t = e.styling,
          r = e.from,
          n = e.to,
          s = e.renderChildNodes,
          o = e.nodeType;
        return this.state.expanded ? b.createElement("div", t("itemRange", this.state.expanded), s(this.props, r, n)) : b.createElement("div", (0, a.default)({}, t("itemRange", this.state.expanded), {
          onClick: this.handleClick
        }), b.createElement(p.default, {
          nodeType: o,
          styling: t,
          expanded: !1,
          onClick: this.handleClick,
          arrowStyle: "double"
        }), "".concat(r, " ... ").concat(n))
      }
    }]), d
  }(b.Component);
(0, l.default)(y, "propTypes", {
  styling: h.func.isRequired,
  from: h.number.isRequired,
  to: h.number.isRequired,
  renderChildNodes: h.func.isRequired,
  nodeType: h.string.isRequired
})