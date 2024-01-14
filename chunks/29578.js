"use strict";
r.r(t), r.d(t, {
  default: function() {
    return j
  }
}), r("424973"), r("426094");
var a = r("8967"),
  n = r("881099"),
  s = r("446873"),
  o = r("281788"),
  i = r("370538"),
  u = r("51138"),
  c = r("309501"),
  l = r("138754"),
  f = r("261438"),
  b = r("884691"),
  d = r.n(b),
  h = r("493110"),
  p = r.n(h),
  y = r("19421"),
  g = r("222817"),
  v = r("311559"),
  m = r("898475");

function O(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), r.push.apply(r, a)
  }
  return r
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? O(Object(r), !0).forEach(function(t) {
      (0, c.default)(e, t, r[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    })
  }
  return e
}

function k(e) {
  return {
    expanded: !e.isCircular && e.shouldExpandNode(e.keyPath, e.data, e.level)
  }
}
var j = function(e) {
  (0, o.default)(h, e);
  var t, r, b = (t = h, r = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (e) {
      return !1
    }
  }(), function() {
    var e, a = (0, u.default)(t);
    if (r) {
      var n = (0, u.default)(this).constructor;
      e = Reflect.construct(a, arguments, n)
    } else e = a.apply(this, arguments);
    return (0, i.default)(this, e)
  });

  function h(e) {
    var t;
    return (0, a.default)(this, h), t = b.call(this, e), (0, c.default)((0, s.default)(t), "handleClick", function() {
      t.props.expandable && t.setState({
        expanded: !t.state.expanded
      })
    }), t.state = k(e), t
  }
  return (0, n.default)(h, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function(e) {
      var t = k(e);
      k(this.props).expanded !== t.expanded && this.setState(t)
    }
  }, {
    key: "shouldComponentUpdate",
    value: function(e, t) {
      var r = this;
      return !!Object.keys(e).find(function(t) {
        return "circularCache" !== t && ("keyPath" === t ? e[t].join("/") !== r.props[t].join("/") : e[t] !== r.props[t])
      }) || t.expanded !== this.state.expanded
    }
  }, {
    key: "render",
    value: function() {
      var e = this.props,
        t = e.getItemString,
        r = e.nodeTypeIndicator,
        a = e.nodeType,
        n = e.data,
        s = e.hideRoot,
        o = e.createItemString,
        i = e.styling,
        u = e.collectionLimit,
        c = e.keyPath,
        b = e.labelRenderer,
        h = e.expandable,
        p = this.state.expanded,
        O = p || s && 0 === this.props.level ? function e(t, r, a) {
          var n = t.nodeType,
            s = t.data,
            o = t.collectionLimit,
            i = t.circularCache,
            u = t.keyPath,
            c = t.postprocessValue,
            b = t.sortObjectKeys,
            h = [];
          return (0, g.default)(n, s, b, o, r, a).forEach(function(r) {
            if (void 0 !== r.to) h.push(d.createElement(m.default, (0, f.default)({}, t, {
              key: "ItemRange--".concat(r.from, "-").concat(r.to),
              from: r.from,
              to: r.to,
              renderChildNodes: e
            })));
            else {
              var a = r.key,
                n = r.value,
                s = -1 !== i.indexOf(n);
              h.push(d.createElement(v.default, (0, f.default)({}, t, {
                postprocessValue: c,
                collectionLimit: o,
                key: "Node--".concat(a),
                keyPath: [a].concat((0, l.default)(u)),
                value: c(n),
                circularCache: [].concat((0, l.default)(i), [n]),
                isCircular: s,
                hideRoot: !1
              })))
            }
          }), h
        }(w(w({}, this.props), {}, {
          level: this.props.level + 1
        })) : null,
        k = t(a, n, d.createElement("span", i("nestedNodeItemType", p), r), o(n, u), c),
        j = [c, a, p, h];
      return s ? d.createElement("li", i.apply(void 0, ["rootNode"].concat(j)), d.createElement("ul", i.apply(void 0, ["rootNodeChildren"].concat(j)), O)) : d.createElement("li", i.apply(void 0, ["nestedNode"].concat(j)), h && d.createElement(y.default, {
        styling: i,
        nodeType: a,
        expanded: p,
        onClick: this.handleClick
      }), d.createElement("label", (0, f.default)({}, i.apply(void 0, [
        ["label", "nestedNodeLabel"]
      ].concat(j)), {
        onClick: this.handleClick
      }), b.apply(void 0, j)), d.createElement("span", (0, f.default)({}, i.apply(void 0, ["nestedNodeItemString"].concat(j)), {
        onClick: this.handleClick
      }), k), d.createElement("ul", i.apply(void 0, ["nestedNodeChildren"].concat(j)), O))
    }
  }]), h
}(d.Component);
(0, c.default)(j, "propTypes", {
  getItemString: p.func.isRequired,
  nodeTypeIndicator: p.any,
  nodeType: p.string.isRequired,
  data: p.any,
  hideRoot: p.bool.isRequired,
  createItemString: p.func.isRequired,
  styling: p.func.isRequired,
  collectionLimit: p.number,
  keyPath: p.arrayOf(p.oneOfType([p.string, p.number])).isRequired,
  labelRenderer: p.func.isRequired,
  shouldExpandNode: p.func,
  level: p.number.isRequired,
  sortObjectKeys: p.oneOfType([p.func, p.bool]),
  isCircular: p.bool,
  expandable: p.bool
}), (0, c.default)(j, "defaultProps", {
  data: [],
  circularCache: [],
  level: 0,
  expandable: !0
})