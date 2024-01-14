"use strict";
n("70102"), n("854508"), Object.defineProperty(t, "__esModule", {
  value: !0
});
var i = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  },
  o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }
    return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(),
  r = n("884691"),
  a = u(r),
  s = u(n("416037")),
  l = u(n("817736")),
  c = u(n("664621")),
  d = u(n("627445"));

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var f = function(e) {
  function t() {
    ! function(e, t) {
      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }(this, t);
    var e = function(e, t) {
      if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t && ("object" == typeof t || "function" == typeof t) ? t : e
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return e.state = {
      initiated: !1
    }, e.onResize = e.onResize.bind(e), e
  }
  return ! function(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }(t, e), o(t, null, [{
    key: "getDomNodeDimensions",
    value: function(e) {
      var t = e.getBoundingClientRect();
      return {
        top: t.top,
        right: t.right,
        bottom: t.bottom,
        left: t.left,
        width: t.width,
        height: t.height
      }
    }
  }]), o(t, [{
    key: "componentDidMount",
    value: function() {
      this.parentNode = l.default.findDOMNode(this).parentNode, this.elementResizeDetector = (0, c.default)({
        strategy: "scroll",
        callOnAdd: !1
      }), this.elementResizeDetector.listenTo(this.parentNode, this.onResize), this.componentIsMounted = !0, this.onResize()
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.componentIsMounted = !1, this.elementResizeDetector.uninstall(this.parentNode)
    }
  }, {
    key: "onResize",
    value: function() {
      var e = t.getDomNodeDimensions(this.parentNode);
      this.componentIsMounted && this.setState(i({
        initiated: !0
      }, e))
    }
  }, {
    key: "render",
    value: function() {
      if ((0, d.default)(this.props.children, "Expected children to be one of function or React.Element"), !this.state.initiated) return a.default.createElement("div", null);
      if ("function" == typeof this.props.children) {
        var e = this.props.children(this.state);
        return e && r.Children.only(e)
      }
      return r.Children.only(a.default.cloneElement(this.props.children, this.state))
    }
  }]), t
}(r.Component);
f.propTypes = {
  children: s.default.oneOfType([s.default.element, s.default.func]).isRequired
}, t.default = f