"use strict";
s.r(t), s.d(t, {
  default: function() {
    return V
  }
}), s("424973"), s("222007");
var n = s("37983"),
  a = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  o = s.n(r),
  u = s("866227"),
  d = s.n(u),
  c = s("458960"),
  h = s("509043"),
  f = s("446674"),
  m = s("669491"),
  g = s("77078"),
  S = s("642995"),
  p = s("656723"),
  v = s("299285"),
  x = s("384997"),
  C = s("943551"),
  T = s("630485"),
  N = s("478025"),
  E = s("271938"),
  I = s("305961"),
  _ = s("957255"),
  A = s("27618"),
  M = s("101125"),
  F = s("401848"),
  j = s("191542"),
  O = s("697218"),
  w = s("471671"),
  y = s("32238"),
  L = s("599110"),
  R = s("659500"),
  b = s("718517"),
  P = s("449008"),
  D = s("387111"),
  U = s("49111"),
  H = s("782340"),
  k = s("883181");
let B = [];
class z extends a.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        fadeIn: !0
      }), this.timeout = null, this.logShownEventIfNeeded()
    }, 100)
  }
  componentDidUpdate() {
    this.logShownEventIfNeeded()
  }
  logShownEventIfNeeded() {
    let e = this.props.activity.application_id;
    null != e && -1 === B.indexOf(e) && (L.default.track(U.AnalyticEvents.SHOW_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: e
    }), B.push(e))
  }
  componentWillUnmount() {
    null !== this.timeout && clearTimeout(this.timeout)
  }
  render() {
    let {
      activity: e
    } = this.props;
    return (0, n.jsxs)("div", {
      className: i(k.activityInviteEducation, {
        [k.activityInviteEducationFadeIn]: this.state.fadeIn
      }),
      children: [(0, n.jsx)("div", {
        className: k.activityInviteEducationArrow
      }), (0, n.jsx)("span", {
        children: H.default.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
          game: e.name,
          dismissOnClick: this.handleDismissInviteEducation
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      fadeIn: !1
    }, this.timeout = null, this.handleDismissInviteEducation = () => {
      let {
        activity: e
      } = this.props;
      null != e && null != e.application_id && S.default.dismissForApplicationId(e.application_id)
    }
  }
}

function G(e) {
  let {
    channel: t,
    guild: s
  } = e;
  return (0, n.jsx)(x.default, {
    contentTypes: [],
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e;
      return null
    }
  })
}
class W extends a.PureComponent {
  componentDidMount() {
    R.ComponentDispatch.subscribe(U.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
  }
  componentWillUnmount() {
    R.ComponentDispatch.unsubscribe(U.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
  }
  getCooldownTextStyle() {
    let {
      color: e
    } = this.state, {
      baseTextColor: t,
      activeTextColor: s
    } = this.props, n = {
      color: e.interpolate({
        inputRange: [0, 1],
        outputRange: [t, (0, h.hex2rgb)(s, .9)]
      })
    };
    return n
  }
  render() {
    let e;
    let {
      guildId: t,
      activity: s,
      showInviteEducation: a,
      isFocused: l,
      typingUsers: r,
      className: u,
      slowmodeCooldownGuess: h,
      isBypassSlowmode: f,
      channel: m,
      isThreadCreation: S,
      renderDots: p,
      poggermodeEnabled: v,
      isComboing: x
    } = this.props, {
      rateLimitPerUser: C
    } = m, N = O.default.getCurrentUser(), E = I.default.getGuild(t), _ = C > 0, M = S ? [] : o(r).keys().filter(e => e !== (null == N ? void 0 : N.id)).reject(A.default.isBlocked).map(e => O.default.getUser(e)).filter(P.isNotNullish).map(e => D.default.getName(t, this.props.channel.id, e)).value();
    if (0 === M.length && !_ && !x) return a && null != s ? (0, n.jsx)(z, {
      activity: s,
      isFocused: l
    }) : (0, n.jsx)(G, {
      channel: m,
      guild: E
    });
    let F = "",
      j = null,
      w = "";
    if (_) {
      if (j = (0, n.jsx)(y.default, {
          className: k.slowModeIcon,
          width: 16,
          height: 16
        }), C >= b.default.Seconds.HOUR) {
        let e = Math.floor(C / b.default.Seconds.HOUR),
          t = Math.floor((C - e * b.default.Seconds.HOUR) / b.default.Seconds.MINUTE),
          s = C - e * b.default.Seconds.HOUR - t * b.default.Seconds.MINUTE;
        w = H.default.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
          hours: e,
          minutes: t,
          seconds: s
        })
      } else if (C >= 60) {
        let e = Math.floor(C / 60);
        w = H.default.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
          minutes: e,
          seconds: C - 60 * e
        })
      } else w = H.default.Messages.CHANNEL_SLOWMODE_DESC.format({
        seconds: C
      });
      if (!f && h > 0) {
        let e = d.duration(h);
        if (h > b.default.Millis.HOUR) {
          let t = "".concat(e.minutes()).padStart(2, "0"),
            s = "".concat(e.seconds()).padStart(2, "0");
          F = "".concat(e.hours(), ":").concat(t, ":").concat(s)
        } else {
          let t = "".concat(e.seconds()).padStart(2, "0");
          F = "".concat(e.minutes(), ":").concat(t)
        }
      } else 0 === M.length && (F = f ? H.default.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : H.default.Messages.CHANNEL_SLOWMODE_DESC_SHORT)
    }
    let [L, R, U] = M;
    return e = 0 === M.length ? "" : 1 === M.length ? H.default.Messages.ONE_USER_TYPING.format({
      a: L
    }) : 2 === M.length ? H.default.Messages.TWO_USERS_TYPING.format({
      a: L,
      b: R
    }) : 3 === M.length ? H.default.Messages.THREE_USERS_TYPING.format({
      a: L,
      b: R,
      c: U
    }) : H.default.Messages.SEVERAL_USERS_TYPING, (0, n.jsxs)("div", {
      className: i(k.typing, {
        "stop-animation": !l,
        [k.isComboing]: v && x
      }, u),
      children: [(0, n.jsxs)("div", {
        className: k.typingDots,
        children: [M.length > 0 && !1 !== p && (0, n.jsx)(g.Dots, {
          className: k.ellipsis,
          dotRadius: 3.5,
          themed: !0
        }), (0, n.jsx)("span", {
          className: k.text,
          "aria-live": "polite",
          "aria-atomic": !0,
          children: e
        })]
      }), _ && (0, n.jsx)(g.Tooltip, {
        text: w,
        children: e => (0, n.jsxs)(c.default.div, {
          style: this.getCooldownTextStyle(),
          className: k.cooldownWrapper,
          ...e,
          children: [F, j]
        })
      }), v && x && (0, n.jsx)(T.default, {
        channelId: m.id
      })]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      color: new c.default.Value(0)
    }, this.emphasizeSlowmodeCooldown = () => {
      let {
        color: e
      } = this.state;
      c.default.sequence([c.default.timing(e, {
        toValue: 1,
        duration: 100,
        easing: c.default.Easing.quad
      }), c.default.timing(e, {
        delay: 250,
        toValue: 0,
        duration: 100,
        easing: c.default.Easing.quad
      })]).start()
    }
  }
}

function V(e) {
  let {
    channel: t,
    isThreadCreation: s = !1,
    ...a
  } = e, l = (0, f.useStateFromStores)([M.default], () => M.default.findActivity(e => null != e.application_id)), i = (0, f.useStateFromStores)([C.default, E.default], () => C.default.getUserCombo(E.default.getId(), t.id)), r = (0, f.useStateFromStores)([N.default, v.default], () => (0, p.default)(t, l, N.default, v.default)), o = (0, f.useStateFromStores)([F.default], () => F.default.getSlowmodeCooldownGuess(t.id, s ? F.SlowmodeType.CreateThread : F.SlowmodeType.SendMessage)), u = (0, f.useStateFromStores)([_.default], () => s ? _.default.can(U.Permissions.MANAGE_THREADS, t) : _.default.can(U.Permissions.MANAGE_CHANNELS, t) || _.default.can(U.Permissions.MANAGE_MESSAGES, t)), d = {
    ...a,
    baseTextColor: (0, g.useToken)(m.default.colors.INTERACTIVE_NORMAL).hex(),
    activeTextColor: (0, g.useToken)(m.default.colors.INTERACTIVE_NORMAL).hex(),
    showInviteEducation: r,
    activity: l,
    typingUsers: (0, f.useStateFromStores)([j.default], () => j.default.getTypingUsers(t.id)),
    isFocused: (0, f.useStateFromStores)([w.default], () => w.default.isFocused()),
    guildId: t.guild_id,
    slowmodeCooldownGuess: o,
    isComboing: null != i,
    isBypassSlowmode: u,
    channel: t,
    isThreadCreation: s
  };
  return (0, n.jsx)(W, {
    ...d
  })
}