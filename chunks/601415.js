"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007"), n("860677");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("917351"),
  r = n.n(o),
  d = n("88807"),
  u = n("721998"),
  c = n("432710"),
  f = n("77078"),
  h = n("539405"),
  p = n("121338"),
  g = n("155084"),
  m = n("393414"),
  E = n("415518"),
  S = n("720691"),
  v = n("560995"),
  y = n("286235"),
  C = n("439932"),
  N = n("819068"),
  O = n("483355"),
  T = n("6791"),
  I = n("49111"),
  _ = n("782340"),
  A = n("353306");

function x() {
  let e = (0, N.getPID)(),
    t = (0, N.getRPCAuthToken)();
  (0, p.send)({
    type: I.OverlayEventTypes.DISPATCH,
    pid: e,
    token: t,
    payloads: [{
      type: "OVERLAY_SET_INPUT_LOCKED",
      locked: !0,
      pid: e
    }]
  })
}
class R extends a.PureComponent {
  componentDidMount() {
    this.notificationTimer = setTimeout(this.hideNotification, 1e4), h.default.track(I.AnalyticEvents.NOTIFICATION_VIEWED, {
      notif_type: T.OverlayNotificationType.OverlayCrashed
    })
  }
  componentWillUnmount() {
    let {
      notificationTimer: e
    } = this;
    null != e && clearTimeout(e)
  }
  render() {
    let {
      info: e,
      error: t
    } = this.props, {
      showTrace: n
    } = this.state, {
      notificationTimer: a
    } = this;
    return null == a ? null : (0, i.jsx)(O.default, {
      observe: !1,
      children: (0, i.jsxs)(f.Clickable, {
        className: s((0, C.getThemeClass)(I.ThemeTypes.DARK), A.container),
        onClick: e => e.stopPropagation(),
        children: [(0, i.jsx)(E.default, {
          expand: !0,
          colorScheme: E.ColorSchemes.DANGER,
          icon: (0, i.jsx)(S.default, {
            width: 40,
            height: 40,
            className: A.notificationIcon
          }),
          title: _.default.Messages.OVERLAY_CRASHED_TITLE,
          confirmText: _.default.Messages.OVERLAY_RELOAD,
          onNotificationClick: this.handleNotificationClick,
          onConfirmClick: this.handleReload,
          onDismissClick: this.hideNotification
        }), n && null != e ? (0, i.jsxs)(v.default, {
          className: A.stackTrace,
          children: [(0, i.jsx)(v.default.Bar, {
            children: "Error Details"
          }), (0, i.jsx)(v.default.Content, {
            className: A.stackTraceCode,
            children: (0, i.jsx)("code", {
              className: A.code,
              children: (0, i.jsx)("pre", {
                children: t.stack
              })
            })
          })]
        }) : null]
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      showTrace: !1,
      busy: !1
    }, this.hideNotification = () => {
      x();
      let {
        notificationTimer: e
      } = this;
      null != e && clearTimeout(e), this.notificationTimer = null
    }, this.handleReload = e => {
      this.setState({
        busy: !0
      }), x(), h.default.track(I.AnalyticEvents.NOTIFICATION_CLICKED, {
        notif_type: T.OverlayNotificationType.OverlayCrashed,
        action_type: "reload"
      }, !0), e.stopPropagation(), setTimeout(() => location.reload(!0), 200)
    }, this.handleNotificationClick = e => {
      e.stopPropagation();
      let {
        notificationTimer: t
      } = this;
      null != t && clearTimeout(t), e.shiftKey && this.setState({
        showTrace: !0
      })
    }
  }
}
let M = r.throttle(() => {
  g.default.increment({
    name: c.MetricEvents.APP_CRASHED,
    tags: ["reason:".concat(d.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(u.ErrorLevels.FATAL)]
  }, !0)
}, 100, {
  trailing: !1
});
class L extends a.PureComponent {
  componentDidCatch(e, t) {
    let n = (0, m.getHistory)().location;
    this.setState({
      error: e,
      info: t
    });
    let i = (0, N.getPID)(),
      a = (0, N.getRPCAuthToken)();
    (0, p.send)({
      type: I.OverlayEventTypes.DISPATCH,
      pid: (0, N.getPID)(),
      token: a,
      payloads: [{
        type: "OVERLAY_CRASHED",
        pid: i
      }, {
        type: "OVERLAY_SET_INPUT_LOCKED",
        locked: !0,
        pid: i
      }]
    }), setImmediate(() => window.addEventListener("click", x));
    let l = y.default.captureCrash(e, {
      extra: t
    });
    h.default.track(I.AnalyticEvents.APP_CRASHED, {
      path: n.pathname,
      extra: t,
      error_message: e.message,
      error_stack: e.stack,
      sentry_issue_id: l
    }), M()
  }
  render() {
    let {
      children: e,
      className: t
    } = this.props, {
      error: n,
      info: a
    } = this.state;
    return null != n ? (0, i.jsx)(R, {
      error: n,
      info: a
    }) : (0, i.jsx)("div", {
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      error: null,
      info: null
    }
  }
}
var D = L