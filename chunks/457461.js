"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("65597"),
  o = s("77078"),
  d = s("404118"),
  u = s("69678"),
  c = s("372283"),
  E = s("305961"),
  _ = s("351825"),
  T = s("330724"),
  I = s("136278"),
  S = s("253308"),
  N = s("653138"),
  g = s("782340"),
  f = s("108852");

function A(e) {
  let {
    guild: t,
    prejoinOnly: s,
    postjoinOnly: l
  } = e, d = (0, r.default)([I.default], () => I.default.editedOnboardingPrompts), c = d.filter(e => e.inOnboarding), E = c.length, {
    drag: S,
    drop: A,
    dragSourcePosition: L,
    setIsDraggable: m
  } = (0, u.default)({
    type: "ONBOARDING_PROMPT_CARD",
    index: E,
    optionId: "separator",
    onDragStart: () => {},
    onDragComplete: () => {},
    onDragReset: () => {}
  }), C = n.useRef(null);
  return n.useEffect(() => {
    m(!1)
  }, [m]), n.useEffect(() => {
    S(A(C))
  }, [S, A, C]), (0, a.jsxs)("div", {
    ref: C,
    className: i(f.separatorSection, {
      [f.dropIndicatorBefore]: null != L && E < L,
      [f.dropIndicatorAfter]: null != L && E > L
    }),
    children: [!l && c.length < N.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING ? (0, a.jsxs)(o.Clickable, {
      className: f.addPrompt,
      onClick: () => (0, T.editGuildOnboardingPrompts)(t, [...d, (0, N.getEmptyPrompt)(!0)], !1),
      children: [(0, a.jsx)(_.default, {
        className: f.plusIcon,
        width: 20,
        height: 20
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: g.default.Messages.ONBOARDING_PROMPT_ADD_PROMPT
      })]
    }) : null, s ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: f.divider
      }), (0, a.jsx)(o.Heading, {
        variant: "heading-md/bold",
        children: g.default.Messages.ONBOARDING_QUESTIONS_POST_JOIN_HEADER
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: f.subtitle,
        children: g.default.Messages.ONBOARDING_QUESTIONS_POST_JOIN_SUBHEADER
      })]
    })]
  })
}

function L(e) {
  let {
    guildId: t,
    prejoinOnly: s,
    postjoinOnly: n,
    includeCount: l,
    singleColumn: i
  } = e, u = (0, r.default)([E.default], () => E.default.getGuild(t)), L = (0, r.default)([I.default], () => I.default.editedOnboardingPrompts), m = L.filter(e => e.inOnboarding), C = L.filter(e => !0 !== e.inOnboarding), O = [...m.map(e => ({
    id: e.id,
    data: e
  })), {
    id: "separator",
    data: (0, N.getDefaultPrompt)()
  }, ...C.map(e => ({
    id: e.id,
    data: e
  }))], {
    handleDragStart: h,
    handleDragReset: R,
    handleDragComplete: D
  } = (0, c.default)(O, e => {
    let t = e.findIndex(e => "separator" === e.id),
      s = e.slice(0, t).map(e => ({
        ...e.data,
        inOnboarding: !0
      })),
      a = e.slice(t + 1).map(e => ({
        ...e.data,
        inOnboarding: !1,
        required: !1
      }));
    if (s.length > N.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING) {
      d.default.show({
        title: g.default.Messages.ONBOARDING_QUESTIONS_CANNOT_MOVE,
        body: g.default.Messages.ONBOARDING_QUESTIONS_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
          numQuestions: N.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING
        })
      });
      return
    }(0, T.editGuildOnboardingPrompts)(u, [...s, ...a])
  });
  return null == u ? null : (0, a.jsxs)(a.Fragment, {
    children: [n ? null : (0, a.jsxs)(a.Fragment, {
      children: [s ? null : (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/bold",
          children: g.default.Messages.ONBOARDING_QUESTIONS_PRE_JOIN_HEADER
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: f.subtitle,
          children: g.default.Messages.ONBOARDING_QUESTIONS_PRE_JOIN_SUBHEADER
        })]
      }), m.map((e, t) => (0, a.jsx)(S.default, {
        guild: u,
        prompt: e,
        disableAutofocus: s,
        includeCount: l,
        singleColumn: i,
        promptIndex: t,
        dragIndex: t,
        onPromptDragStart: h,
        onPromptDragReset: R,
        onPromptDragComplete: D
      }, e.id))]
    }), (0, a.jsx)(A, {
      guild: u,
      prejoinOnly: s,
      postjoinOnly: n
    }), s ? null : (0, a.jsxs)(a.Fragment, {
      children: [C.map((e, t) => (0, a.jsx)(S.default, {
        guild: u,
        prompt: e,
        promptIndex: t + m.length,
        dragIndex: t + m.length + 1,
        onPromptDragStart: h,
        onPromptDragReset: R,
        onPromptDragComplete: D
      }, e.id)), L.length < N.MAX_NUM_PROMPTS ? (0, a.jsxs)(o.Clickable, {
        className: f.addPrompt,
        onClick: () => (0, T.editGuildOnboardingPrompts)(u, [...L, (0, N.getEmptyPrompt)(!1)], !1),
        children: [(0, a.jsx)(_.default, {
          className: f.plusIcon,
          width: 20,
          height: 20
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-brand",
          children: g.default.Messages.ONBOARDING_PROMPT_ADD_PROMPT
        })]
      }) : null]
    })]
  })
}