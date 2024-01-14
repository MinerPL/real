"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var s, a = n("37983"),
  i = n("884691"),
  r = n("730290"),
  l = n("446674"),
  u = n("872717"),
  o = n("43982"),
  d = n("393414"),
  c = n("271938"),
  f = n("145131"),
  p = n("124969"),
  m = n("49111"),
  g = n("782340"),
  h = n("200363"),
  x = n("926622");
l.default.initialize();
let N = {
  HANDOFF: "handoff",
  DONE: "done",
  FAILED: "failed"
};

function T() {
  try {
    window.close()
  } catch (e) {}
}
s = class extends i.PureComponent {
  componentDidMount() {
    let {
      stage: e,
      key: t
    } = this.state;
    e === N.DONE ? T() : c.default.isAuthenticated() ? u.default.post({
      url: m.Endpoints.HANDOFF,
      body: {
        key: t
      },
      oldFormErrors: !0
    }).then(e => this.handoff(e.body.handoff_token), () => this.handoff()) : this.handoff()
  }
  handoff(e) {
    o.default.requestRedirect(m.RPCCommands.BROWSER_HANDOFF, {
      handoffToken: e,
      fingerprint: c.default.getFingerprint()
    }).then(this.done, this.failed)
  }
  renderDone() {
    return (0, a.jsxs)(p.default, {
      children: [(0, a.jsx)(p.Image, {
        src: n("203472"),
        className: x.marginBottom20
      }), (0, a.jsx)(p.Title, {
        className: x.marginBottom8,
        children: g.default.Messages.BROWSER_HANDOFF_DONE_TITLE
      }), (0, a.jsx)(p.SubTitle, {
        className: x.marginBottom40,
        children: g.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
      }), (0, a.jsx)(p.Button, {
        onClick: this.handleOpenApp,
        children: g.default.Messages.CONTINUE_TO_WEBAPP
      })]
    })
  }
  renderFailed() {
    return (0, a.jsxs)(p.default, {
      children: [(0, a.jsx)(p.Image, {
        src: n("203472"),
        className: x.marginBottom20
      }), (0, a.jsx)(p.Title, {
        className: x.marginBottom8,
        children: g.default.Messages.BROWSER_HANDOFF_FAILED_TITLE
      }), (0, a.jsx)(p.SubTitle, {
        className: x.marginBottom40,
        children: g.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
      }), (0, a.jsx)(p.Button, {
        onClick: this.handleOpenApp,
        children: g.default.Messages.CONTINUE_TO_WEBAPP
      })]
    })
  }
  renderHandoff() {
    return (0, a.jsxs)(p.default, {
      children: [(0, a.jsx)(p.AuthSpinner, {}), (0, a.jsx)(p.Title, {
        className: x.marginBottom8,
        children: g.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE
      }), (0, a.jsx)(p.SubTitle, {
        children: g.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION
      })]
    })
  }
  render() {
    let e;
    let {
      stage: t
    } = this.state;
    switch (t) {
      case N.DONE:
        e = this.renderDone();
        break;
      case N.FAILED:
        e = this.renderFailed();
        break;
      case N.HANDOFF:
      default:
        e = this.renderHandoff()
    }
    return (0, a.jsx)(f.default, {
      justify: f.default.Justify.CENTER,
      align: f.default.Align.CENTER,
      className: h.wrapper,
      children: e
    })
  }
  constructor(e) {
    var t;
    super(e), this.done = () => {
      T(), this.setState({
        stage: N.DONE
      })
    }, this.failed = () => {
      this.setState({
        stage: N.FAILED
      }), T()
    }, this.handleOpenApp = () => {
      (0, d.transitionTo)(m.Routes.ME)
    };
    let {
      search: n
    } = e.location, s = null != n && "" !== n ? (0, r.parse)(n) : {};
    this.state = {
      key: null !== (t = s.key) && void 0 !== t ? t : "",
      stage: "true" === s.done ? N.DONE : N.HANDOFF
    }
  }
}