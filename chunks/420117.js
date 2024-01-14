"use strict";
r.r(t), r.d(t, {
  JSONTree: function() {
    return E
  }
}), r("426094"), r("424973");
var a = r("261438"),
  n = r("126153"),
  s = r("8967"),
  o = r("881099"),
  i = r("281788"),
  u = r("370538"),
  c = r("51138"),
  l = r("309501"),
  f = r("572149"),
  b = r("884691"),
  d = r.n(b),
  h = r("493110"),
  p = r.n(h),
  y = r("311559"),
  g = r("286396"),
  v = r("809599"),
  m = ["data", "keyPath", "postprocessValue", "hideRoot", "theme", "invertTheme"];

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
      (0, l.default)(e, t, r[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    })
  }
  return e
}
var k = function(e) {
  return e
};

function j(e) {
  var t, r, a, n, s = (t = e.theme, r = e, (n = Object.keys(a = {
    getArrowStyle: "arrow",
    getListStyle: "nestedNodeChildren",
    getItemStringStyle: "nestedNodeItemString",
    getLabelStyle: "label",
    getValueStyle: "valueText"
  }).filter(function(e) {
    return r[e]
  })).length > 0 && (t = "string" == typeof t ? {
    extend: t
  } : w({}, t), n.forEach(function(e) {
    console.error('Styling method "'.concat(e, '" is deprecated, use "theme" property instead')), t[a[e]] = function(t) {
      for (var a = t.style, n = arguments.length, s = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) s[o - 1] = arguments[o];
      return {
        style: w(w({}, a), r[e].apply(r, s))
      }
    }
  })), t);
  return e.invertTheme && (s = (0, v.invertTheme)(s)), {
    styling: (0, g.default)(s)
  }
}
var E = function(e) {
  (0, i.default)(f, e);
  var t, r, l = (t = f, r = function() {
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

  function f(e) {
    var t;
    return (0, s.default)(this, f), (t = l.call(this, e)).state = j(e), t
  }
  return (0, o.default)(f, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function(e) {
      var t = this;
      ["theme", "invertTheme"].find(function(r) {
        return e[r] !== t.props[r]
      }) && this.setState(j(e))
    }
  }, {
    key: "shouldComponentUpdate",
    value: function(e) {
      var t = this;
      return !!Object.keys(e).find(function(r) {
        return "keyPath" === r ? e[r].join("/") !== t.props[r].join("/") : e[r] !== t.props[r]
      })
    }
  }, {
    key: "render",
    value: function() {
      var e = this.props,
        t = e.data,
        r = e.keyPath,
        s = e.postprocessValue,
        o = e.hideRoot,
        i = (e.theme, e.invertTheme, (0, n.default)(e, m)),
        u = this.state.styling;
      return d.createElement("ul", u("tree"), d.createElement(y.default, (0, a.default)({}, w({
        postprocessValue: s,
        hideRoot: o,
        styling: u
      }, i), {
        keyPath: o ? [] : r,
        value: s(t)
      })))
    }
  }]), f
}(d.Component);
(0, l.default)(E, "propTypes", {
  data: p.any,
  hideRoot: p.bool,
  theme: p.oneOfType([p.object, p.string]),
  invertTheme: p.bool,
  keyPath: p.arrayOf(p.oneOfType([p.string, p.number])),
  postprocessValue: p.func,
  sortObjectKeys: p.oneOfType([p.func, p.bool])
}), (0, l.default)(E, "defaultProps", {
  shouldExpandNode: function(e, t, r) {
    return 0 === r
  },
  hideRoot: !1,
  keyPath: ["root"],
  getItemString: function(e, t, r, a) {
    return d.createElement("span", null, r, " ", a)
  },
  labelRenderer: function(e) {
    var t = (0, f.default)(e, 1)[0];
    return d.createElement("span", null, t, ":")
  },
  valueRenderer: k,
  postprocessValue: k,
  isCustomNode: function() {
    return !1
  },
  collectionLimit: 50,
  invertTheme: !0
})