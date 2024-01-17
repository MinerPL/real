"use strict";
n.r(t), n.d(t, {
  findReactionIndex: function() {
    return N
  },
  default: function() {
    return A
  }
}), n("222007"), n("424973");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("266491"),
  o = n("77078"),
  u = n("875978"),
  d = n("836943"),
  c = n("865343"),
  f = n("621698"),
  E = n("350134"),
  _ = n("782340"),
  T = n("550244"),
  I = n("314934");
let m = (e, t) => null == e && null == t || e === t,
  N = (e, t) => e.findIndex(e => m(e.emoji.id, null == t ? void 0 : t.id) && m(e.emoji.name, null == t ? void 0 : t.name)),
  p = (e, t) => {
    if (null == t) return e;
    let n = N(e, t);
    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
  };
class S extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let n = e.message.reactions.length;
    return 0 === t.reactionsCount && n > 0 ? {
      disableTransitionAppear: !1,
      reactionsCount: n
    } : t.reactionsCount !== n ? {
      reactionsCount: n
    } : null
  }
  render() {
    let {
      message: e,
      disableReactionCreates: t,
      disableReactionUpdates: n,
      isLurking: l,
      isGuest: a,
      isPendingMember: m,
      isForumToolbar: N,
      channel: p,
      className: S,
      forceAddReactions: A,
      reactionClassName: C,
      useChatFontScaling: h,
      forceHideReactionCreates: g,
      remainingReactions: M,
      combinedReactions: O,
      visibleReactionsCount: R
    } = this.props, {
      disableTransitionAppear: L
    } = this.state, v = h ? I : T, P = R > 0;
    return P || A ? (0, s.jsxs)(r.default, {
      component: "div",
      className: i(v.reactions, S),
      transitionAppear: !L,
      role: "group",
      transitionLeave: !1,
      id: (0, c.getMessageReactionsId)(e),
      onMouseEnter: () => this.setState({
        isHovered: !0
      }),
      onMouseLeave: () => this.setState({
        isHovered: !1
      }),
      children: [(0, s.jsx)(f.MessageReactionsGroupWrapper, {
        reactions: O,
        message: e,
        readOnly: n,
        isLurking: l,
        isGuest: a,
        isPendingMember: m,
        isForumToolbar: N,
        useChatFontScaling: h,
        className: C
      }), M > 0 && (0, s.jsx)(o.Clickable, {
        onClick: t => {
          t.stopPropagation(), (0, E.showReactionsModal)(p, e)
        },
        className: i(v.reaction, C, v.remainingReactions),
        "aria-label": _.default.Messages.ADD_REACTION,
        children: (0, s.jsxs)(o.Text, {
          className: v.reactionInner,
          variant: "text-sm/normal",
          children: ["+", M]
        })
      }), !t && !g && (0, s.jsx)(d.ButtonAddReaction, {
        type: u.ReactionTypes.NORMAL,
        message: e,
        channel: p,
        useChatFontScaling: h,
        isHovered: this.state.isHovered,
        className: i({
          [v.forceShow]: A && !P,
          [v.forceShowLook]: A
        })
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), this.state = {
      disableTransitionAppear: !0,
      reactionsCount: this.props.message.reactions.length,
      isHovered: !1
    }
  }
}
var A = e => {
  let {
    message: t,
    maxReactions: n,
    hoistReaction: a
  } = e, {
    combinedReactions: i,
    remainingReactions: r,
    visibleReactionsCount: o
  } = l.useMemo(() => {
    let e = [],
      s = p(t.reactions, a),
      l = null != n && n < s.length,
      i = l ? s.slice(0, n) : s,
      r = s.length - i.length,
      o = s.length;
    return i.forEach(t => {
      t.burst_count > 0 && e.push({
        ...t,
        type: u.ReactionTypes.BURST
      }), t.count > 0 && e.push({
        ...t,
        type: u.ReactionTypes.NORMAL
      }), null != t.me_vote && --o
    }), {
      combinedReactions: e,
      visibleReactionsCount: o,
      remainingReactions: r
    }
  }, [a, n, t.reactions]);
  return (0, s.jsx)(S, {
    ...e,
    visibleReactionsCount: o,
    combinedReactions: i,
    remainingReactions: r
  })
}