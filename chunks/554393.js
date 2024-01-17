"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("281071"),
  o = n("446674"),
  u = n("77078"),
  d = n("731898"),
  c = n("612039"),
  f = n("275318"),
  h = n("762147"),
  C = n("875978"),
  p = n("359132"),
  m = n("836943"),
  g = n("92981"),
  E = n("592707"),
  S = n("350134"),
  A = n("755624"),
  _ = n("263024"),
  T = n("42203"),
  M = n("660279"),
  I = n("36694"),
  N = n("83900"),
  v = n("404008"),
  L = n("680986"),
  x = n("612278"),
  R = n("867965"),
  y = n("688169"),
  D = n("49111"),
  O = n("782340"),
  j = n("827152"),
  b = n("550244");

function P(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: l = !1,
    parentChannelId: P
  } = e, {
    ref: H,
    width: F
  } = (0, d.default)(), [U, k] = a.useState(3), [G, w] = a.useState(!n), [B, V] = (0, c.default)(!1, 2e3), W = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(t), [t]), {
    firstMessage: Z
  } = (0, x.useFirstForumPostMessage)(W), z = (0, o.useStateFromStores)([A.default], () => A.default.hasJoined(t)), {
    disableReactionUpdates: K,
    disableReactionCreates: Y,
    isLurking: X,
    isGuest: q,
    isPendingMember: J
  } = (0, p.default)(W), Q = (0, y.useForumActivityExperiment)(null == W ? void 0 : W.guild_id), $ = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(P)), ee = (0, L.useDefaultReactionEmoji)($), et = (0, o.useStateFromStores)([f.default], () => f.default.shouldDisplayPrompt(t) && !0 === n, [t, n]), en = a.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect,
        s = (e.bottom - e.top) / (n.bottom - n.top);
      w(s < 1)
    }
  }, [n]);
  a.useLayoutEffect(() => {
    let e = H.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(en, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [es, ea] = a.useState(!0);
  if (a.useEffect(() => {
      if (null != F) k(Math.floor((F - 280) / 58)), ea(!1)
    }, [F]), null == W || null == Z) return null;
  let el = Z.reactions.length > 0,
    ei = () => {
      z ? _.default.leaveThread(W, "Forum Toolbar") : _.default.joinThread(W, "Forum Toolbar")
    },
    er = () => {
      (0, R.trackForumPostLinkCopied)({
        postId: W.id,
        location: {
          section: D.AnalyticsSections.CHANNEL_HEADER
        }
      }), (0, r.copy)((0, v.getChannelLinkToCopy)(W, $)), V(!0)
    },
    eo = z ? I.default : M.default;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: i(j.container, {
        [j.header]: G
      }),
      ref: H,
      children: [(0, s.jsxs)("div", {
        className: i(j.reactButtons, {
          [j.loading]: es
        }),
        children: [!el && !Y && null != ee && (0, s.jsx)("div", {
          className: b.reactions,
          children: (0, s.jsx)(S.Reaction, {
            message: Z,
            readOnly: !1,
            useChatFontScaling: !1,
            isLurking: X,
            isGuest: q,
            isPendingMember: J,
            emoji: ee,
            type: C.ReactionTypes.NORMAL,
            hideCount: !0,
            count: 0,
            me: !1,
            burst_count: 0,
            me_burst: !1
          })
        }), (0, s.jsx)(E.default, {
          message: Z,
          channel: W,
          disableReactionCreates: !Q || Y,
          disableReactionUpdates: K,
          isLurking: X,
          isGuest: q,
          isPendingMember: J,
          maxReactions: U,
          className: j.reactions,
          useChatFontScaling: !1,
          isForumToolbar: !0,
          forceHideReactionCreates: !0
        }), !Y && (0, s.jsx)(m.ButtonAddReaction, {
          type: C.ReactionTypes.NORMAL,
          message: Z,
          channel: W,
          useChatFontScaling: !1,
          className: j.addReactButton,
          isForumToolbar: !0,
          children: !el && O.default.Messages.FORUM_REACT_TO_POST
        })]
      }), (0, s.jsxs)("div", {
        className: j.buttons,
        children: [(0, s.jsx)(u.Tooltip, {
          text: O.default.Messages.FORUM_FOLLOW_TOOLTIP,
          children: e => (0, s.jsxs)(u.Button, {
            ...e,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            onClick: ei,
            className: j.button,
            innerClassName: i(j.buttonInner, {
              [j.active]: z
            }),
            children: [(0, s.jsx)(eo, {
              width: 16,
              height: 16
            }), z ? O.default.Messages.FORUM_FOLLOWING_POST : O.default.Messages.FOLLOW]
          })
        }), (0, s.jsx)(u.Tooltip, {
          text: O.default.Messages.COPY_LINK,
          children: e => (0, s.jsxs)(u.Button, {
            ...e,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            onClick: er,
            className: j.button,
            innerClassName: j.buttonInner,
            children: [B ? (0, s.jsx)(I.default, {
              width: 16,
              height: 16
            }) : (0, s.jsx)(N.default, {
              width: 16,
              height: 16
            }), B ? O.default.Messages.COPIED : null]
          })
        })]
      })]
    }), et && (0, s.jsx)(h.default, {
      threadId: t
    }), (0, s.jsx)(g.default, {
      channel: W,
      isLastItem: l
    })]
  })
}