"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("917351"),
  o = n.n(r),
  u = n("458960"),
  d = n("446674"),
  c = n("95410"),
  f = n("77078"),
  E = n("167359"),
  _ = n("206230"),
  h = n("619443"),
  C = n("488284"),
  I = n("870696"),
  T = n("168851"),
  S = n("50647"),
  m = n("15435"),
  p = n("637888"),
  A = n("718517"),
  g = n("773336"),
  N = n("709681"),
  R = n("50885"),
  O = n("49111"),
  L = n("782340"),
  v = n("923075");
class M extends s.PureComponent {
  createSound() {
    let {
      soundpack: e
    } = this.props, t = (0, N.createSoundForPack)("discodo", e);
    return t.volume = 1, t
  }
  componentDidMount() {
    this.setProblemsTimeout()
  }
  componentDidUpdate(e, t) {
    let {
      ready: n,
      hide: a,
      problems: s,
      opacity: i
    } = this.state, {
      connected: l,
      soundpack: r,
      reducedMotion: o
    } = this.props, d = l && n && !a && !s;
    if (e.soundpack !== r && (this._connectedSound = this.createSound()), e.connected !== l || d) {
      if (l && null != this.videoRef) {
        let e = Math.max(Math.ceil((this.videoRef.duration - this.videoRef.currentTime) * A.default.Millis.SECOND), 600);
        clearTimeout(this._noProblemsTimeout), c.default.get(O.DISCODO_STORAGE_KEY) && this._connectedSound.play(), o ? this.setState({
          problems: !1,
          hide: l
        }) : this._noProblemsTimeout = setTimeout(() => {
          this.setState({
            problems: !1,
            hide: l
          })
        }, e)
      } else this.setState({
        problems: !1,
        hide: l
      })
    } else t.hide !== a ? (a ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
      shouldRender: !0
    }), u.default.timing(i, {
      toValue: a ? 0 : 1,
      duration: 200
    }).start(() => this.setState({
      shouldRender: !a
    }))) : t.problems !== s && s && E.default.checkIncidents()
  }
  componentWillUnmount() {
    this.clearProblemsTimeout(), clearTimeout(this._noProblemsTimeout)
  }
  render() {
    let {
      connected: e,
      incident: t
    } = this.props;
    if (!this.state.shouldRender) return null;
    {
      let n = this._loadingText,
        s = null;
      return null != this._eventLoadingText && (n = this._eventLoadingText), null != t && (n = t.name, s = t.incident_updates[0].body), (0, a.jsxs)(u.default.div, {
        className: v.container,
        style: {
          opacity: this.state.opacity
        },
        children: [(0, a.jsxs)("div", {
          className: v.content,
          children: [(0, a.jsx)(p.default, {
            autoPlay: !0,
            loop: !e,
            setRef: this.setVideoRef,
            onReady: this.handleReady,
            className: this.state.ready ? v.ready : ""
          }), (0, a.jsxs)("div", {
            className: v.text,
            children: [null != t ? null : (0, a.jsx)("div", {
              className: v.tipTitle,
              children: L.default.Messages.LOADING_DID_YOU_KNOW
            }), (0, a.jsx)("div", {
              className: null != t ? v.title : v.tip,
              children: n
            }), (0, a.jsx)("div", {
              className: v.body,
              children: s
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: l(v.problems, {
            [v.slideIn]: this.state.problems
          }),
          children: [(0, a.jsx)("div", {
            className: v.problemsText,
            children: L.default.Messages.CONNECTING_PROBLEMS_CTA
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(f.Anchor, {
              className: v.twitterLink,
              href: O.Links.TWITTER_SUPPORT,
              target: "_blank",
              children: [(0, a.jsx)(m.default, {
                className: v.icon
              }), L.default.Messages.TWEET_US]
            }), (0, a.jsxs)(f.Anchor, {
              className: v.statusLink,
              href: O.Links.STATUS,
              target: "_blank",
              children: [(0, a.jsx)(S.default, {
                className: v.icon
              }), L.default.Messages.SERVER_STATUS]
            })]
          })]
        })]
      })
    }
  }
  constructor(e) {
    super(e), this.videoRef = null, this._noProblemsTimeout = null, this._problemsTimeout = null, this._connectedSound = this.createSound(), this._loadingText = function() {
      let e = [L.default.Messages.ACCESSIBILITY_LOADING_TIP_1, L.default.Messages.ACCESSIBILITY_LOADING_TIP_2, L.default.Messages.ACCESSIBILITY_LOADING_TIP_3, L.default.Messages.ACCESSIBILITY_LOADING_TIP_4, L.default.Messages.ACCESSIBILITY_LOADING_TIP_5, L.default.Messages.ACCESSIBILITY_LOADING_TIP_6.format({
        tabHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "tab",
          className: v.keybind
        }, t)
      }), L.default.Messages.ACCESSIBILITY_LOADING_TIP_7, L.default.Messages.ACCESSIBILITY_LOADING_TIP_8, L.default.Messages.ACCESSIBILITY_LOADING_TIP_9, L.default.Messages.ACCESSIBILITY_LOADING_TIP_10.format({
        F6Hook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "f6",
          className: v.keybind
        }, t),
        tabHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "tab",
          className: v.keybind
        }, t)
      }), L.default.Messages.LOADING_LINE_1, L.default.Messages.LOADING_LINE_2, L.default.Messages.LOADING_LINE_4, L.default.Messages.LOADING_LINE_5, L.default.Messages.LOADING_LINE_6, L.default.Messages.LOADING_LINE_7, L.default.Messages.LOADING_LINE_8, L.default.Messages.LOADING_LINE_9, L.default.Messages.LOADING_LINE_10, L.default.Messages.LOADING_LINE_11, L.default.Messages.LOADING_LINE_12, L.default.Messages.LOADING_LINE_13, L.default.Messages.LOADING_LINE_14, L.default.Messages.LOADING_LINE_15, L.default.Messages.LOADING_TIP_1, L.default.Messages.LOADING_TIP_2, L.default.Messages.LOADING_TIP_3, L.default.Messages.LOADING_TIP_4, L.default.Messages.LOADING_TIP_5, L.default.Messages.LOADING_TIP_6, L.default.Messages.LOADING_TIP_7, L.default.Messages.LOADING_TIP_8, L.default.Messages.LOADING_TIP_9, L.default.Messages.LOADING_TIP_10, L.default.Messages.LOADING_TIP_11, L.default.Messages.LOADING_TIP_12, L.default.Messages.LOADING_TIP_13, L.default.Messages.LOADING_TIP_14, L.default.Messages.LOADING_TIP_15, L.default.Messages.LOADING_TIP_16, L.default.Messages.LOADING_TIP_17, L.default.Messages.LOADING_TIP_18, L.default.Messages.LOADING_TIP_19, L.default.Messages.LOADING_TIP_20, L.default.Messages.LOADING_TIP_21, L.default.Messages.LOADING_TIP_22, L.default.Messages.LOADING_TIP_23, L.default.Messages.LOADING_TIP_24, L.default.Messages.LOADING_TIP_25, L.default.Messages.LOADING_TIP_26, L.default.Messages.LOADING_TIP_27.format({
        asterisks: "**"
      }), L.default.Messages.LOADING_KEYBIND_TIP_1.format({
        quickSwitcherHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "mod+k",
          className: v.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_2.format({
        markUnreadHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "alt+click",
          className: v.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_3.format({
        markServerUnreadHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift+esc",
          className: v.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_4.format({
        navigateUnreadHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift+alt+up",
          className: v.keybind
        }, t),
        downHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "down",
          className: v.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_5.format({
        keyboardShortcutsHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "mod+/",
          className: v.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_6.format({
        messageNewlineHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift+return",
          className: v.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_7.format({
        shiftHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift",
          className: v.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_8.format({
        upHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "up",
          className: v.keybind
        }, t)
      })];
      return e[o.random(e.length - 1)]
    }(), this._eventLoadingText = function() {
      let e = C.default.getLoadingTips();
      if (null != e && e.length > 0) return e[o.random(e.length - 1)]
    }(), this.handleReady = () => {
      this.setState({
        ready: !0
      }), (0, g.isDesktop)() && (R.default.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), R.default.send("UPDATE_OPEN_ON_STARTUP"))
    }, this.setVideoRef = e => {
      this.videoRef = e
    }, this.setProblemsTimeout = () => {
      null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({
        problems: !0
      }), 1e4))
    }, this.clearProblemsTimeout = () => {
      clearTimeout(this._problemsTimeout), this._problemsTimeout = null
    };
    let {
      connected: t
    } = e;
    this.state = {
      ready: t,
      hide: t,
      problems: !1,
      shouldRender: !t,
      opacity: new u.default.Value(t ? 0 : 1)
    }, this._connectedSound.volume = 1
  }
}
var P = d.default.connectStores([h.default, T.default, I.default, _.default], () => ({
  isTryingToConnect: h.default.isTryingToConnect(),
  connected: h.default.isConnected(),
  incident: T.default.getIncident(),
  soundpack: I.default.getSoundpack(),
  reducedMotion: _.default.useReducedMotion
}))(e => {
  let {
    isTryingToConnect: t,
    connected: n,
    incident: s,
    soundpack: i,
    reducedMotion: l
  } = e;
  return t ? (0, a.jsx)(M, {
    reducedMotion: l,
    soundpack: i,
    connected: n,
    incident: s
  }) : null
})