"use strict";
n.r(e), n.d(e, {
  default: function() {
    return v
  }
});
var i = n("59079"),
  r = n("728983");
n("416037");
var a = n("884691"),
  s = n.n(a),
  o = n("817736"),
  u = n.n(o),
  l = n("919901"),
  c = n("433479"),
  d = "unmounted",
  p = "exited",
  f = "entering",
  h = "entered",
  E = "exiting",
  x = function(t) {
    function e(e, n) {
      i = t.call(this, e, n) || this;
      var i, r, a = n && !n.isMounting ? e.enter : e.appear;
      return i.appearStatus = null, e.in ? a ? (r = p, i.appearStatus = f) : r = h : r = e.unmountOnExit || e.mountOnEnter ? d : p, i.state = {
        status: r
      }, i.nextCallback = null, i
    }(0, r.default)(e, t), e.getDerivedStateFromProps = function(t, e) {
      return t.in && e.status === d ? {
        status: p
      } : null
    };
    var n = e.prototype;
    return n.componentDidMount = function() {
      this.updateStatus(!0, this.appearStatus)
    }, n.componentDidUpdate = function(t) {
      var e = null;
      if (t !== this.props) {
        var n = this.state.status;
        this.props.in ? n !== f && n !== h && (e = f) : (n === f || n === h) && (e = E)
      }
      this.updateStatus(!1, e)
    }, n.componentWillUnmount = function() {
      this.cancelNextCallback()
    }, n.getTimeouts = function() {
      var t, e, n, i = this.props.timeout;
      return t = e = n = i, null != i && "number" != typeof i && (t = i.exit, e = i.enter, n = void 0 !== i.appear ? i.appear : e), {
        exit: t,
        enter: e,
        appear: n
      }
    }, n.updateStatus = function(t, e) {
      if (void 0 === t && (t = !1), null !== e) {
        this.cancelNextCallback();
        var n = u.findDOMNode(this);
        e === f ? this.performEnter(n, t) : this.performExit(n)
      } else this.props.unmountOnExit && this.state.status === p && this.setState({
        status: d
      })
    }, n.performEnter = function(t, e) {
      var n = this,
        i = this.props.enter,
        r = this.context ? this.context.isMounting : e,
        a = this.getTimeouts(),
        s = r ? a.appear : a.enter;
      if (!e && !i || l.default.disabled) {
        this.safeSetState({
          status: h
        }, function() {
          n.props.onEntered(t)
        });
        return
      }
      this.props.onEnter(t, r), this.safeSetState({
        status: f
      }, function() {
        n.props.onEntering(t, r), n.onTransitionEnd(t, s, function() {
          n.safeSetState({
            status: h
          }, function() {
            n.props.onEntered(t, r)
          })
        })
      })
    }, n.performExit = function(t) {
      var e = this,
        n = this.props.exit,
        i = this.getTimeouts();
      if (!n || l.default.disabled) {
        this.safeSetState({
          status: p
        }, function() {
          e.props.onExited(t)
        });
        return
      }
      this.props.onExit(t), this.safeSetState({
        status: E
      }, function() {
        e.props.onExiting(t), e.onTransitionEnd(t, i.exit, function() {
          e.safeSetState({
            status: p
          }, function() {
            e.props.onExited(t)
          })
        })
      })
    }, n.cancelNextCallback = function() {
      null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
    }, n.safeSetState = function(t, e) {
      e = this.setNextCallback(e), this.setState(t, e)
    }, n.setNextCallback = function(t) {
      var e = this,
        n = !0;
      return this.nextCallback = function(i) {
        n && (n = !1, e.nextCallback = null, t(i))
      }, this.nextCallback.cancel = function() {
        n = !1
      }, this.nextCallback
    }, n.onTransitionEnd = function(t, e, n) {
      this.setNextCallback(n);
      var i = null == e && !this.props.addEndListener;
      if (!t || i) {
        setTimeout(this.nextCallback, 0);
        return
      }
      this.props.addEndListener && this.props.addEndListener(t, this.nextCallback), null != e && setTimeout(this.nextCallback, e)
    }, n.render = function() {
      var t = this.state.status;
      if (t === d) return null;
      var e = this.props,
        n = e.children,
        r = (0, i.default)(e, ["children"]);
      if (delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, "function" == typeof n) return s.createElement(c.default.Provider, {
        value: null
      }, n(t, r));
      var a = s.Children.only(n);
      return s.createElement(c.default.Provider, {
        value: null
      }, s.cloneElement(a, r))
    }, e
  }(s.Component);

function m() {}
x.contextType = c.default, x.propTypes = {}, x.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: m,
  onEntering: m,
  onEntered: m,
  onExit: m,
  onExiting: m,
  onExited: m
}, x.UNMOUNTED = 0, x.EXITED = 1, x.ENTERING = 2, x.ENTERED = 3, x.EXITING = 4;
var v = x