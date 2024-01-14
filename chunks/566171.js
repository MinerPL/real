"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  o = s.n(r),
  d = s("446674"),
  u = s("769846"),
  c = s("77078"),
  E = s("583367"),
  _ = s("145079"),
  T = s("900938"),
  I = s("735201"),
  S = s("26989"),
  N = s("697218"),
  g = s("773309"),
  f = s("533403"),
  A = s("427459"),
  L = s("159885"),
  m = s("49111"),
  C = s("782340"),
  O = s("765565");
let h = (0, L.cssValueToNumber)(u.default.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class R extends n.Component {
  componentDidMount() {
    this.measure();
    let {
      guildId: e
    } = this.props;
    null != e && (0, E.fetchAppliedGuildBoostsForGuild)(e), window.addEventListener("resize", this.measure)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.measure)
  }
  componentDidUpdate() {
    if (null == this.state.tierPositions) !Object.values(this.tierRefs).some(e => null == e) && this.measure()
  }
  getSubscriptionCount() {
    let {
      subscriptions: e
    } = this.props;
    return null != e ? e.length : 0
  }
  renderProgressBar(e) {
    let {
      tierPositions: t
    } = this.state, {
      guildId: s
    } = this.props, n = this.getSubscriptionCount();
    if (null == t || null == s) return null;
    let l = {
        numRequired: 0,
        y: 0,
        key: g.FIRST_TIER_KEY
      },
      i = (0, A.getAppliedGuildBoostsRequired)(s),
      r = e.map(e => {
        var s;
        return {
          numRequired: i[e.tier],
          name: (0, A.getTierName)(e.tier),
          y: null !== (s = t[e.tier]) && void 0 !== s ? s : 0,
          key: e.tier
        }
      });
    return (0, a.jsx)(g.default, {
      className: n > 0 ? O.progressWithSubscriptions : O.progress,
      progress: n,
      tiers: [l, ...r],
      initialAnimationDelay: 500,
      onAnimatedTierMaker: this.handleAnimatedTier
    })
  }
  renderTierNone() {
    return (0, a.jsxs)("div", {
      className: O.tierDefaultUnlocked,
      ref: this.defaultTierRef,
      children: [(0, a.jsx)(c.FormText, {
        type: c.FormText.Types.LABEL_BOLD,
        children: C.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_NONE
      }), (0, a.jsx)(c.FormText, {
        type: c.FormText.Types.DESCRIPTION,
        className: O.tierDefaultUnlockedDescription,
        children: C.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_DESCRIPTION_NONE
      })]
    })
  }
  renderSubscribers() {
    let {
      subscribers: e,
      subscriberCount: t,
      guildId: s
    } = this.props;
    return (0, a.jsxs)("div", {
      ref: this.defaultTierRef,
      className: O.subscribers,
      children: [(0, a.jsx)(f.default, {
        guildId: null != s ? s : void 0,
        users: e,
        renderUser: this.renderSubscriber,
        renderMoreUsers: this.renderMoreSubscribers,
        max: 5
      }), (0, a.jsx)("div", {
        className: O.subscriberCount,
        children: C.default.Messages.GUILD_SETTINGS_PREMIUM_GUILD_COUNT_SUBSCRIBERS.format({
          count: t
        })
      })]
    })
  }
  render() {
    let {
      guildId: e,
      renderTier: t,
      subscriptions: s,
      subscriberCount: n,
      tiers: l
    } = this.props;
    if (null == s) return (0, a.jsx)(c.Spinner, {
      type: c.Spinner.Type.SPINNING_CIRCLE
    });
    if (null == e) return null;
    let i = (0, A.getAppliedGuildBoostsRequired)(e);
    return (0, a.jsx)("div", {
      children: (0, a.jsxs)("div", {
        className: O.content,
        children: [this.renderProgressBar(l), (0, a.jsxs)("div", {
          className: O.tiers,
          children: [0 === n ? this.renderTierNone() : this.renderSubscribers(), l.map((s, a, n) => t({
            tier: s,
            tiers: n,
            tierIndex: a,
            onSetRef: this.setTierRef,
            isAnimatedTo: i[this.state.animatedTier] >= i[s.tier],
            subscriptionCount: this.getSubscriptionCount(),
            guildId: e
          }))]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this.tierRefs = {}, this.defaultTierRef = n.createRef(), this.state = {
      tierPositions: null,
      animatedTier: m.BoostedGuildTiers.NONE
    }, this.measure = () => {
      let {
        subscriberCount: e
      } = this.props, t = this.defaultTierRef.current;
      if (null == t) return;
      let {
        top: s
      } = t.getBoundingClientRect(), a = {};
      for (let [t, n] of Object.entries(this.tierRefs)) {
        if (null == n) return;
        let {
          top: l
        } = n.getBoundingClientRect(), i = e > 0 ? h : 0;
        a[t] = l - s + 32 - i
      }
      this.setState({
        tierPositions: a
      })
    }, this.setTierRef = (e, t) => {
      this.tierRefs[t.tier] = e
    }, this.handleAnimatedTier = e => {
      this.setState({
        animatedTier: e.key
      })
    }, this.renderSubscriber = (e, t, s) => {
      var n;
      return null == e ? null : (0, a.jsx)(c.Tooltip, {
        text: (0, a.jsx)(_.default, {
          user: e.user,
          nick: e.nick
        }),
        "aria-label": null !== (n = e.nick) && void 0 !== n ? n : e.user.tag,
        children: s => (0, a.jsx)(c.Avatar, {
          ...s,
          tabIndex: -1,
          src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
          className: i(O.avatar, t, null != t ? O.subscriberMask : null),
          size: c.AvatarSizes.SIZE_32
        })
      }, s)
    }, this.renderSubscribersPopout = () => (0, a.jsx)(c.Scroller, {
      className: O.subscribersPopout,
      children: this.props.subscribers.map(e => (0, a.jsxs)("div", {
        className: O.subscribersPopoutUser,
        children: [(0, a.jsx)(c.Avatar, {
          src: e.user.getAvatarURL(this.props.guildId, 32),
          "aria-label": e.user.username,
          size: c.AvatarSizes.SIZE_32,
          className: O.avatar
        }), (0, a.jsx)("div", {
          className: O.subscribersPopoutUsername,
          children: (0, a.jsx)(_.default, {
            user: e.user,
            nick: e.nick
          })
        })]
      }, e.user.id))
    }), this.renderMoreSubscribers = (e, t, s) => (0, a.jsx)(c.Popout, {
      renderPopout: this.renderSubscribersPopout,
      position: "bottom",
      autoInvert: !1,
      children: t => (0, a.jsx)("div", {
        className: O.moreSubscribers,
        ...t,
        children: e
      })
    }, s)
  }
}
let D = d.default.connectStores([T.default, N.default, I.default, S.default], () => {
  let e = T.default.getGuildId(),
    t = null != e ? I.default.getAppliedGuildBoostsForGuild(e) : null,
    s = o(null != t ? t : []).uniqBy(e => e.userId),
    a = s.map(t => ({
      user: N.default.getUser(t.userId),
      nick: S.default.getNick(e, t.userId)
    })).filter(e => null != e.user).value();
  return {
    guildId: e,
    subscriptions: t,
    subscribers: a,
    subscriberCount: s.size()
  }
})(R);
var M = D