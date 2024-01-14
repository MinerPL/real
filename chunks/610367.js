"use strict";
n("854508"), n("70102"), t.__esModule = !0, t.default = void 0;
var o = u(n("416037")),
  r = u(n("884691")),
  i = n("909484"),
  a = n("87764");

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function s() {
  return (s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
    }
    return e
  }).apply(this, arguments)
}

function l(e) {
  if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}
var c = Object.values || function(e) {
    return Object.keys(e).map(function(t) {
      return e[t]
    })
  },
  p = function(e) {
    function t(t, n) {
      var o, r = (o = e.call(this, t, n) || this).handleExited.bind(l(l(o)));
      return o.state = {
        handleExited: r,
        firstRender: !0
      }, o
    }
    n = t, o = e, n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.__proto__ = o;
    var n, o, i = t.prototype;
    return i.getChildContext = function() {
      return {
        transitionGroup: {
          isMounting: !this.appeared
        }
      }
    }, i.componentDidMount = function() {
      this.appeared = !0, this.mounted = !0
    }, i.componentWillUnmount = function() {
      this.mounted = !1
    }, t.getDerivedStateFromProps = function(e, t) {
      var n = t.children,
        o = t.handleExited;
      return {
        children: t.firstRender ? (0, a.getInitialChildMapping)(e, o) : (0, a.getNextChildMapping)(e, n, o),
        firstRender: !1
      }
    }, i.handleExited = function(e, t) {
      var n = (0, a.getChildMapping)(this.props.children);
      !(e.key in n) && (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
        var n = s({}, t.children);
        return delete n[e.key], {
          children: n
        }
      }))
    }, i.render = function() {
      var e = this.props,
        t = e.component,
        n = e.childFactory,
        o = function(e, t) {
          if (null == e) return {};
          var n, o, r = {},
            i = Object.keys(e);
          for (o = 0; o < i.length; o++) n = i[o], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
          return r
        }(e, ["component", "childFactory"]),
        i = c(this.state.children).map(n);
      return (delete o.appear, delete o.enter, delete o.exit, null === t) ? i : r.default.createElement(t, o, i)
    }, t
  }(r.default.Component);
p.childContextTypes = {
  transitionGroup: o.default.object.isRequired
}, p.propTypes = {}, p.defaultProps = {
  component: "div",
  childFactory: function(e) {
    return e
  }
};
var d = (0, i.polyfill)(p);
t.default = d, e.exports = t.default