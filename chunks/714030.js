"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
}), n("424973");
var r = n("884691"),
  i = n.n(r),
  o = n("728983"),
  a = n("416037"),
  u = n.n(a),
  s = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : {},
  c = i.createContext || function(t, e) {
    var n, i, a, c = "__create-react-context-" + (s[n = "__global_unique_id__"] = (s[n] || 0) + 1) + "__",
      l = function(t) {
        function n() {
          var e, n, r;
          return e = t.apply(this, arguments) || this, e.emitter = (n = e.props.value, r = [], {
            on: function(t) {
              r.push(t)
            },
            off: function(t) {
              r = r.filter(function(e) {
                return e !== t
              })
            },
            get: function() {
              return n
            },
            set: function(t, e) {
              n = t, r.forEach(function(t) {
                return t(n, e)
              })
            }
          }), e
        }(0, o.default)(n, t);
        var r = n.prototype;
        return r.getChildContext = function() {
          var t;
          return (t = {})[c] = this.emitter, t
        }, r.componentWillReceiveProps = function(t) {
          if (this.props.value !== t.value) {
            var n, r, i, o = this.props.value,
              a = t.value;
            if ((n = o) === (r = a) ? 0 !== n || 1 / n == 1 / r : n != n && r != r) i = 0;
            else 0 != (i = ("function" == typeof e ? e(o, a) : 1073741823) | 0) && this.emitter.set(t.value, i)
          }
        }, r.render = function() {
          return this.props.children
        }, n
      }(r.Component);
    l.childContextTypes = ((i = {})[c] = u.object.isRequired, i);
    var f = function(e) {
      function n() {
        var t;
        return t = e.apply(this, arguments) || this, t.state = {
          value: t.getValue()
        }, t.onUpdate = function(e, n) {
          ((0 | t.observedBits) & n) != 0 && t.setState({
            value: t.getValue()
          })
        }, t
      }(0, o.default)(n, e);
      var r = n.prototype;
      return r.componentWillReceiveProps = function(t) {
        var e = t.observedBits;
        this.observedBits = null == e ? 1073741823 : e
      }, r.componentDidMount = function() {
        this.context[c] && this.context[c].on(this.onUpdate);
        var t = this.props.observedBits;
        this.observedBits = null == t ? 1073741823 : t
      }, r.componentWillUnmount = function() {
        this.context[c] && this.context[c].off(this.onUpdate)
      }, r.getValue = function() {
        return this.context[c] ? this.context[c].get() : t
      }, r.render = function() {
        var t;
        return (Array.isArray(t = this.props.children) ? t[0] : t)(this.state.value)
      }, n
    }(r.Component);
    return f.contextTypes = ((a = {})[c] = u.object, a), {
      Provider: l,
      Consumer: f
    }
  }