"use strict";
n.r(t), n.d(t, {
  findReactionIndex: function() {
    return I
  },
  default: function() {
    return C
  }
}), n("222007"), n("424973");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("266491"),
  o = n("77078"),
  u = n("875978"),
  d = n("836943"),
  c = n("865343"),
  f = n("621698"),
  m = n("350134"),
  E = n("782340"),
  _ = n("550244"),
  h = n("314934");
let p = (e, t) => null == e && null == t || e === t,
  I = (e, t) => e.findIndex(e => p(e.emoji.id, null == t ? void 0 : t.id) && p(e.emoji.name, null == t ? void 0 : t.name)),
  T = (e, t) => {
    if (null == t) return e;
    let n = I(e, t);
    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
  };
class g extends s.PureComponent {
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
      isLurking: s,
      isGuest: l,
      isPendingMember: p,
      isForumToolbar: I,
      channel: T,
      className: g,
      forceAddReactions: C,
      reactionClassName: S,
      useChatFontScaling: A,
      forceHideReactionCreates: N,
      remainingReactions: M,
      combinedReactions: v,
      visibleReactionsCount: x
    } = this.props, {
      disableTransitionAppear: O
    } = this.state, L = A ? h : _, R = x > 0;
    return R || C ? (0, a.jsxs)(r.default, {
      component: "div",
      className: i(L.reactions, g),
      transitionAppear: !O,
      role: "group",
      transitionLeave: !1,
      id: (0, c.getMessageReactionsId)(e),
      onMouseEnter: () => this.setState({
        isHovered: !0
      }),
      onMouseLeave: () => this.setState({
        isHovered: !1
      }),
      children: [(0, a.jsx)(f.MessageReactionsGroupWrapper, {
        reactions: v,
        message: e,
        readOnly: n,
        isLurking: s,
        isGuest: l,
        isPendingMember: p,
        isForumToolbar: I,
        useChatFontScaling: A,
        className: S
      }), M > 0 && (0, a.jsx)(o.Clickable, {
        onClick: t => {
          t.stopPropagation(), (0, m.showReactionsModal)(T, e)
        },
        className: i(L.reaction, S, L.remainingReactions),
        "aria-label": E.default.Messages.ADD_REACTION,
        children: (0, a.jsxs)(o.Text, {
          className: L.reactionInner,
          variant: "text-sm/normal",
          children: ["+", M]
        })
      }), !t && !N && (0, a.jsx)(d.ButtonAddReaction, {
        type: u.ReactionTypes.NORMAL,
        message: e,
        channel: T,
        useChatFontScaling: A,
        isHovered: this.state.isHovered,
        className: i({
          [L.forceShow]: C && !R,
          [L.forceShowLook]: C
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
var C = e => {
  let {
    message: t,
    maxReactions: n,
    hoistReaction: l
  } = e, {
    combinedReactions: i,
    remainingReactions: r,
    visibleReactionsCount: o
  } = s.useMemo(() => {
    let e = [],
      a = T(t.reactions, l),
      s = null != n && n < a.length,
      i = s ? a.slice(0, n) : a,
      r = a.length - i.length,
      o = a.length;
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
  }, [l, n, t.reactions]);
  return (0, a.jsx)(g, {
    ...e,
    visibleReactionsCount: o,
    combinedReactions: i,
    remainingReactions: r
  })
}