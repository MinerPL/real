"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("702976"), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("498574"),
  u = n("391679"),
  o = n("446674"),
  d = n("444095"),
  c = n("970728"),
  f = n("448993"),
  E = n("678916"),
  I = n("106885"),
  _ = n("378020"),
  p = n("534438"),
  h = n("208620"),
  N = n("129040"),
  m = n("9294"),
  T = n("165926"),
  g = n("393414"),
  A = n("970366"),
  S = n("271938"),
  C = n("476108"),
  v = n("337543"),
  x = n("124969"),
  R = n("599110"),
  L = n("568734"),
  O = n("701909"),
  M = n("883029"),
  D = n("65300"),
  P = n("719451"),
  j = n("291850"),
  U = n("860959"),
  G = n("49111"),
  b = n("492397"),
  B = n("56235"),
  y = n("53452"),
  F = n("782340"),
  V = n("926622");
o.default.initialize();
let w = "Accept Invite Page",
  k = {
    REGISTER: "register",
    LOGIN: "login"
  };
async function H(e) {
  let {
    invite: t
  } = await c.default.resolveInvite(e, w);
  null != t && (0, I.updateAuthInvite)(t)
}
class Y extends a.PureComponent {
  componentDidMount() {
    let {
      isUnderage: e,
      login: t,
      inviteKey: n
    } = this.props;
    if (R.default.track(G.AnalyticEvents.INVITE_VIEWED, {
        invite_code: n
      }, {
        flush: !0
      }), (0, A.trackAppUIViewed)("invite"), !y.IS_APP_COMPATIBLE_BROWSER) {
      let e = this.getInviteKey();
      D.default.launch("discord://" + G.Routes.INVITE(e), () => void 0)
    }
    if (!t && e) {
      let e = this.getInviteKey(),
        {
          baseCode: t
        } = (0, m.parseExtraDataFromInviteKey)(e);
      (0, g.replaceWith)(G.Routes.INVITE_LOGIN(t))
    }
  }
  componentDidUpdate(e) {
    let {
      invite: t,
      nativeAppState: n,
      authenticated: s,
      transitionTo: a
    } = this.props, l = this.getInviteKey();
    if (l !== this.getInviteKey(e)) H(l);
    else if (t.state === G.InviteStates.APP_NOT_OPENED) this.handleContinue();
    else if (this.getMode() === k.LOGIN && s !== e.authenticated && s) {
      let e = S.default.getFingerprint();
      if (null != e) {
        let t = (0, u.extractId)(e);
        this.track(G.AnalyticEvents.INVITE_LOGIN_SUCCESSFUL, !0, {
          prev_user_id: t
        })
      }
      c.default.acceptInvite({
        inviteKey: l,
        context: this.getAcceptInviteContext(w),
        skipOnboarding: !0,
        callback: this.handleContinue
      })
    }
    if (n !== e.nativeAppState && n === G.NativeAppStates.OPEN && this.track(G.AnalyticEvents.INVITE_APP_INVOKED, !1), this.getMode() === k.REGISTER && s && !e.authenticated) {
      let {
        channel: e
      } = t;
      null != e && ((0, T.setNewUser)(B.NewUserTypes.INVITE_UNCLAIMED), null != t.guild ? a(G.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : c.default.transitionToInvite(t, a))
    }
  }
  getInviteKey() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    return e.inviteKey
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    return b.CONFERENCE_MODE_ENABLED ? k.REGISTER : e.login ? k.LOGIN : k.REGISTER
  }
  track(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      {
        invite: s
      } = this.props,
      a = this.getInviteKey(),
      l = (0, m.parseInviteCodeFromInviteKey)(a),
      i = t ? {
        guild_id: null != s.guild ? s.guild.id : null,
        channel_id: null != s.channel ? s.channel.id : null,
        inviter_id: null != s.inviter ? s.inviter.id : null,
        invite_code: l
      } : {
        invite_code: l
      };
    R.default.track(e, {
      ...i,
      ...n
    })
  }
  renderSpinner(e) {
    return (0, s.jsxs)(x.default, {
      children: [(0, s.jsx)(x.Title, {
        children: e
      }), (0, s.jsx)(x.AuthSpinner, {})]
    })
  }
  renderInvalidInvite() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, s.jsxs)(x.default, {
      children: [(0, s.jsx)(x.Image, {
        src: n("653240"),
        className: V.marginBottom8
      }), (0, s.jsx)(x.Title, {
        className: i(V.marginTop8, V.marginBottom8),
        children: F.default.Messages.AUTH_INVALID_INVITE_TITLE
      }), (0, s.jsx)(x.SubTitle, {
        children: e ? F.default.Messages.AUTH_BANNED_INVITE_BODY : F.default.Messages.AUTH_INVALID_INVITE_BODY
      }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP), (0, s.jsx)(x.Button, {
        onClick: () => window.open(O.default.getArticleURL(G.HelpdeskArticles.INVALID_INVITES), "_blank"),
        look: x.Button.Looks.LINK,
        color: x.Button.Colors.LINK,
        className: V.marginTop8,
        children: F.default.Messages.AUTH_INVALID_INVITE_TIP
      })]
    })
  }
  renderErrorInvite() {
    var e, t;
    return (0, s.jsxs)(x.default, {
      children: [(0, s.jsx)(P.default, {
        invite: this.props.invite,
        error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
      }), (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === G.AbortCodes.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP) : this.renderButton(F.default.Messages.INSTANT_INVITE_ACCEPT, this.handleAccept)]
    })
  }
  renderExpiredInvite() {
    return this.renderInvalidInvite(!1)
  }
  renderBannedInvite() {
    return this.renderInvalidInvite(!0)
  }
  renderAppOpened(e) {
    let t = null != e ? e : this.handleContinue;
    return (0, s.jsxs)(x.default, {
      children: [(0, s.jsx)(x.Title, {
        className: V.marginBottom8,
        children: F.default.Messages.APP_OPENED_TITLE
      }), (0, s.jsx)(x.SubTitle, {
        children: F.default.Messages.APP_OPENED_BODY
      }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP, () => t())]
    })
  }
  renderAuthenticatedHeader() {
    let {
      invite: e
    } = this.props;
    return null != e.stage_instance && null != e.guild ? (0, s.jsx)(p.default, {
      stageInstance: e.stage_instance,
      guild: e.guild
    }) : null != e.guild_scheduled_event ? (0, s.jsx)(_.GuildScheduledEventInviteHeader, {
      channel: e.channel,
      guildScheduledEvent: e.guild_scheduled_event
    }) : (0, s.jsx)(P.default, {
      invite: e
    })
  }
  renderAuthenicatedFooter() {
    let {
      invite: e
    } = this.props;
    return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild ? (0, s.jsx)(x.default, {
      className: V.marginTop20,
      children: (0, s.jsx)(p.StageInviteFooter, {
        guild: e.guild,
        onlineCount: e.approximate_presence_count
      })
    }) : null
  }
  renderAuthenticatedOrDownload() {
    let {
      invite: e
    } = this.props, t = null != e.stage_instance ? F.default.Messages.INSTANT_INVITE_ACCEPT_STAGE : F.default.Messages.INSTANT_INVITE_ACCEPT;
    return (0, s.jsxs)("div", {
      children: [(0, s.jsxs)(x.default, {
        children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
      }), this.renderAuthenicatedFooter()]
    })
  }
  renderContinue() {
    return (0, s.jsxs)(x.default, {
      children: [(0, s.jsx)(x.Title, {
        children: F.default.Messages.APP_NOT_OPENED
      }), this.renderButton(F.default.Messages.CONTINUE_TO_WEBAPP)]
    })
  }
  render() {
    let {
      invite: e,
      nativeAppState: t,
      authenticated: n,
      transitionTo: a,
      location: l
    } = this.props;
    if (t === G.NativeAppStates.OPEN) return this.renderAppOpened();
    switch (e.state) {
      case G.InviteStates.APP_OPENED:
        return this.renderAppOpened();
      case G.InviteStates.APP_NOT_OPENED:
        return this.renderContinue();
      case G.InviteStates.RESOLVING:
        return b.CONFERENCE_MODE_ENABLED ? this.renderSpinner(F.default.Messages.DEFAULT_INPUT_PLACEHOLDER) : this.renderSpinner(F.default.Messages.APP_OPENING);
      case G.InviteStates.APP_OPENING:
        return this.renderSpinner(F.default.Messages.APP_OPENING);
      case G.InviteStates.RESOLVED:
        var i;
        if (n && (0, L.hasFlag)(null !== (i = e.flags) && void 0 !== i ? i : 0, r.GuildInviteFlags.IS_GUEST_INVITE)) return c.default.openApp(e.code), d.default.set(N.GUEST_INVITE_KEY, e.code), this.renderAppOpened(() => a(G.Routes.APP));
        if (n || !y.IS_APP_COMPATIBLE_BROWSER) return this.renderAuthenticatedOrDownload();
        else if (this.getMode() === k.LOGIN) return (0, s.jsx)(j.default, {
          invite: e,
          transitionTo: a,
          location: l
        });
        else return (0, s.jsx)(U.default, {
          invite: e,
          onLoginStart: () => this.track(G.AnalyticEvents.INVITE_LOGIN, !0),
          location: l,
          transitionTo: a
        });
      case G.InviteStates.ACCEPTING:
        return this.renderSpinner(F.default.Messages.INSTANT_INVITE_ACCEPTING);
      case G.InviteStates.EXPIRED:
        return this.renderExpiredInvite();
      case G.InviteStates.BANNED:
        return this.renderBannedInvite();
      case G.InviteStates.ERROR:
        return this.renderErrorInvite();
      case G.InviteStates.ACCEPTED:
      default:
        return null
    }
  }
  constructor(...e) {
    var t;
    super(...e), t = this, this.state = {
      error: null
    }, this.getAcceptInviteContext = e => c.default.getInviteContext(e, this.props.invite), this.handleContinue = e => {
      let {
        invite: t,
        transitionTo: n
      } = this.props;
      if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
        var s;
        (null === (s = t.guild) || void 0 === s ? void 0 : s.id) != null ? n(G.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : c.default.transitionToInvite(null != e ? e : t, n)
      }
    }, this.handleAccept = () => {
      this.setState({
        error: null
      });
      let e = this.getInviteKey();
      c.default.acceptInvite({
        inviteKey: e,
        context: this.getAcceptInviteContext(w),
        skipOnboarding: !0,
        callback: t => {
          (0, I.updateAuthInvite)(t), null != t.channel && c.default.openApp(e, t.channel.id)
        }
      }).catch(e => {
        if (e instanceof f.V6OrEarlierAPIError || e instanceof f.APIError) {
          let t = (0, M.getInviteError)(e.code);
          this.setState({
            error: {
              code: e.code,
              message: t
            }
          })
        } else this.setState({
          error: {
            code: e.code,
            message: F.default.Messages.INVITE_MODAL_ERROR_DEFAULT
          }
        })
      })
    }, this.handleDefaultTransition = () => {
      let {
        defaultRoute: e,
        transitionTo: t
      } = this.props;
      t(e)
    }, this.renderButton = function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
        {
          invite: a
        } = t.props,
        l = null != a.stage_instance || null != a.guild_scheduled_event;
      return y.IS_APP_COMPATIBLE_BROWSER ? (0, s.jsx)(x.Button, {
        className: l ? V.marginTop20 : V.marginTop40,
        onClick: n,
        color: l ? x.Button.Colors.GREEN : x.Button.Colors.BRAND,
        children: e
      }) : (0, s.jsx)(x.IncompatibleBrowser, {
        className: V.marginTop40
      })
    }
  }
}
var W = o.default.connectStores([v.default, C.default, S.default, h.default, E.default], e => {
  var t;
  let {
    inviteKey: n
  } = e;
  return {
    invite: null !== (t = v.default.getInvite(n)) && void 0 !== t ? t : {},
    nativeAppState: h.default.getState(n),
    authenticated: S.default.isAuthenticated(),
    defaultRoute: C.default.defaultRoute,
    isUnderage: E.default.isUnderageAnonymous()
  }
})(Y)