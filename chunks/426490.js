"use strict";
n.r(t), n.d(t, {
  PollAnswers: function() {
    return y
  },
  PollMediaView: function() {
    return B
  },
  PollAnswerSelectedIcon: function() {
    return k
  },
  PollAnswerVictorIcon: function() {
    return w
  },
  PollAnswerVotedIcon: function() {
    return H
  }
}), n("794252");
var s, l, a = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("506838"),
  d = n("65597"),
  c = n("77078"),
  f = n("430568"),
  E = n("449918"),
  _ = n("20606"),
  T = n("385976"),
  I = n("845579"),
  m = n("952368"),
  N = n("476765"),
  p = n("578706"),
  S = n("866190"),
  A = n("847511"),
  C = n("214400"),
  h = n("74232"),
  g = n("316350"),
  M = n("49111"),
  O = n("782340"),
  R = n("652886");

function L(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("ul", {
    "aria-label": O.default.Messages.POLL_OPTIONS_ARIA,
    className: t,
    children: n
  })
}

function v(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("div", {
    "aria-label": O.default.Messages.POLL_OPTIONS_ARIA,
    role: "group",
    className: t,
    children: n
  })
}

function P(e) {
  let {
    className: t,
    children: n
  } = e, s = (0, c.useRadioGroup)({
    orientation: "vertical"
  });
  return (0, a.jsx)("div", {
    "aria-label": O.default.Messages.POLL_OPTIONS_ARIA,
    ...s,
    className: t,
    children: n
  })
}

function D(e) {
  let {
    className: t,
    onClick: n,
    isSelected: s,
    isFirstAnswer: l,
    children: i
  } = e, {
    pollAnswerRef: r
  } = (0, g.usePollFocusManager)();
  return (0, a.jsx)(c.Clickable, {
    role: "checkbox",
    className: o(t, R.enabled),
    onClick: n,
    "aria-checked": s,
    ref: l ? r : void 0,
    children: i
  })
}

function x(e) {
  let t, {
    className: n,
    children: s,
    onClick: l,
    isSelected: i,
    hasSelectedAnyAnswer: r,
    isFirstAnswer: u
  } = e;
  t = r ? i ? 0 : -1 : u ? 0 : -1;
  let {
    pollAnswerRef: d
  } = (0, g.usePollFocusManager)();
  return (0, a.jsx)(c.Clickable, {
    role: "radio",
    className: o(n, R.enabled),
    onClick: l,
    "aria-checked": i,
    tabIndex: t,
    ref: u ? d : void 0,
    children: s
  })
}

function y(e) {
  let {
    answers: t,
    answersInteraction: n,
    answerTapAccessibilityLabel: s,
    isInteractive: l,
    hasSelectedAnyAnswer: i,
    className: r,
    answerClassName: d,
    renderAnswerContent: c
  } = e, {
    ContainerComponent: f,
    answerElementType: E
  } = (0, u.match)({
    isInteractive: l,
    answersInteraction: n
  }).with({
    answersInteraction: C.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => ({
    ContainerComponent: P,
    answerElementType: 1
  })).with({
    answersInteraction: C.PollChatAnswerInteractionType.CHECKBOXES
  }, () => ({
    ContainerComponent: v,
    answerElementType: 2
  })).with({
    isInteractive: !0,
    answersInteraction: C.PollChatAnswerInteractionType.LIST
  }, () => ({
    ContainerComponent: L,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: L,
    answerElementType: 0
  }));
  return (0, a.jsx)(f, {
    className: r,
    children: t.map((e, t) => (0, a.jsx)(U, {
      className: o(R.answer, d),
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: E,
      answerTapAccessibilityLabel: s,
      hasSelectedAnyAnswer: i,
      children: c(e)
    }, e.answerId))
  })
}

function U(e) {
  let {
    className: t,
    answer: n,
    answerTapAccessibilityLabel: s,
    children: l,
    hasSelectedAnyAnswer: r,
    isFirstAnswer: u,
    elementType: d
  } = e, {
    channelId: f,
    messageId: E
  } = (0, h.useMessageIds)(), _ = (0, h.useStyleClass)(n.style), T = !0 === n.isSelected, I = i.useCallback(() => {
    A.default.handlePollAnswerTapped({
      channelId: f,
      messageId: E,
      answerId: n.answerId
    })
  }, [f, E, n.answerId]), m = (0, N.useUID)();
  switch (d) {
    case 0:
      return (0, a.jsx)("li", {
        className: o(t, _),
        children: l
      });
    case 3:
      return (0, a.jsxs)("li", {
        children: [(0, a.jsx)(c.Clickable, {
          className: o(R.listItemButton, t, _),
          onClick: I,
          "aria-describedby": m,
          children: l
        }), (0, a.jsx)(c.HiddenVisually, {
          id: m,
          children: s
        })]
      });
    case 1:
      return (0, a.jsx)(x, {
        className: o(t, _),
        onClick: I,
        isSelected: T,
        hasSelectedAnyAnswer: r,
        isFirstAnswer: u,
        children: l
      });
    case 2:
      return (0, a.jsx)(D, {
        className: o(t, _),
        onClick: I,
        isSelected: T,
        isFirstAnswer: u,
        children: l
      })
  }
}

function j(e) {
  let {
    attachment: t,
    alt: n,
    className: s
  } = e, l = (0, S.useIsWindowFocused)(), i = I.GifAutoPlay.useSetting();
  return (0, a.jsx)(m.default, {
    className: s,
    imageClassName: R.attachmentImage,
    src: null != t.proxy_url && "" !== t.proxy_url ? t.proxy_url : t.url,
    alt: n,
    responsive: !0,
    width: 212,
    height: 212,
    autoPlay: i,
    shouldAnimate: l,
    shouldRenderAccessory: !1
  })
}

function b(e) {
  let {
    alt: t,
    className: n,
    emoji: s
  } = e, l = (0, d.default)([T.default], () => {
    var e, t, n;
    return null !== (n = null === (e = T.default.getCustomEmojiById(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "")) || void 0 === e ? void 0 : e.animated) && void 0 !== n && n
  }, [s.id]);
  return (0, a.jsx)(f.default, {
    className: n,
    emojiId: null == s ? void 0 : s.id,
    emojiName: null == s ? void 0 : s.name,
    alt: t,
    animated: l
  })
}

function G(e, t) {
  return null != e ? (0, a.jsx)("div", {
    className: e,
    children: t
  }) : (0, a.jsx)(a.Fragment, {
    children: t
  })
}

function B(e) {
  var t;
  let {
    media: n,
    containerClassName: s,
    attachmentClassName: l,
    emojiClassName: i,
    fallback: r,
    alt: o
  } = e, {
    message: u
  } = (0, h.usePollContext)(), d = null !== (t = null != o ? o : n.text) && void 0 !== t ? t : "";
  if (n.attachmentIds.length > 0) {
    let e = u.attachments.find(e => e.id === n.attachmentIds[0]);
    if (null != e) return G(s, (0, a.jsx)(j, {
      className: l,
      attachment: e,
      alt: d
    }))
  }
  return null != n.emoji ? G(s, (0, a.jsx)(b, {
    className: i,
    emoji: n.emoji,
    alt: d
  })) : void 0 !== r ? (0, a.jsx)(a.Fragment, {
    children: r
  }) : null
}

function F(e) {
  let {
    size: t,
    color: n,
    className: s
  } = e;
  return (0, a.jsx)(p.default, {
    width: t,
    height: t,
    className: o(s, R.checkmarkCircle),
    color: n,
    backgroundColor: "currentColor"
  })
}

function k(e) {
  return (0, a.jsx)(F, {
    color: (0, E.getColor)(M.Color.BRAND_500),
    ...e
  })
}

function w(e) {
  return (0, a.jsx)(F, {
    color: _.default.POLLS_VICTOR_BORDER,
    ...e
  })
}

function H(e) {
  return (0, a.jsx)(F, {
    color: _.default.POLLS_VOTED_BORDER,
    ...e
  })
}(l = s || (s = {}))[l.LIST_ITEM = 0] = "LIST_ITEM", l[l.RADIO = 1] = "RADIO", l[l.CHECKBOX = 2] = "CHECKBOX", l[l.LIST_ITEM_BUTTON = 3] = "LIST_ITEM_BUTTON"