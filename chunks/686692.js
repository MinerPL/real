"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var s = l("37983"),
  n = l("884691"),
  a = l("65597"),
  r = l("77078"),
  i = l("716241"),
  o = l("50926"),
  d = l("526253"),
  u = l("795228"),
  c = l("137215"),
  m = l("599110"),
  f = l("449008"),
  g = l("144141"),
  h = l("863636"),
  x = l("380710"),
  p = l("126623"),
  N = l("667712"),
  E = l("469242"),
  I = l("653138"),
  v = l("49111"),
  O = l("782340"),
  j = l("710362");

function R(e, t) {
  return (0, s.jsx)("span", {
    className: j.helpTextItem,
    children: e
  }, t)
}

function b(e) {
  return null != e && g.default.getCurrentConfig({
    location: "ba216b_1"
  }, {
    autoTrackExposure: !0
  }).includeRules
}

function C(e) {
  let {
    headerId: t,
    guild: l,
    step: n,
    lastPrompt: i,
    questionCount: o,
    currentPrompt: d,
    selectOption: m,
    gotoPrevPrompt: f,
    gotoNextPrompt: g,
    completeOnboarding: N
  } = e, I = (0, a.useStateFromStoresArray)([h.default], () => h.default.getOnboardingResponsesForPrompt(l.id, d.id)), v = 0 === I.length && (null == d ? void 0 : d.required), b = null == d ? void 0 : d.options.filter(e => I.includes(e.id)), C = (0, x.getSelectedRoleIds)(b), S = (0, x.getSelectedChannelIds)(b), T = 0 === I.length, {
    helpText: _,
    helpTextAdditional: M
  } = (0, p.default)({
    guild: l,
    prompt: d,
    selectedRoleIds: C,
    selectedChannelIds: S,
    itemHook: R
  }), B = (0, u.default)(l.id, 1e3), D = d.options.map(e => ({
    value: e.id,
    ...e
  })), A = d.options.filter(e => I.includes(e.id)).map(e => e.id);
  return (0, s.jsx)("div", {
    className: j.prompt,
    children: (0, s.jsxs)("div", {
      className: j.promptContent,
      children: [(0, s.jsxs)(r.ScrollerThin, {
        className: j.scrollerContent,
        children: [(0, s.jsxs)("div", {
          className: j.questionHeader,
          children: [(0, s.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: O.default.Messages.ONBOARDING_QUESTION_COUNT.format({
              currentQuestion: n + 1,
              questionCount: o
            })
          }), d.required ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(r.Text, {
              variant: "text-xs/normal",
              className: j.headerSeparator,
              children: "\xb7"
            }), (0, s.jsx)(r.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: O.default.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
            })]
          }) : null]
        }), (0, s.jsx)(r.Heading, {
          className: j.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: d.title
        }), (0, s.jsx)(E.default, {
          options: D,
          value: A,
          onChange: e => {
            let t = e.find(e => !I.includes(e.id)),
              l = e.map(e => e.id);
            if (null != t) m(d.id, t.id, !0);
            else {
              let e = I.filter(e => !l.includes(e)),
                t = d.options.filter(t => e.includes(t.id));
              t.forEach(e => {
                m(d.id, e.id, !1)
              })
            }
          },
          memberCounts: B
        })]
      }), (0, s.jsxs)("div", {
        className: j.navButtons,
        children: [(0, s.jsx)("div", {
          className: j.leftButtons,
          children: n > 0 && (0, s.jsxs)(r.Button, {
            className: j.button,
            innerClassName: j.buttonInner,
            onClick: () => f(I.length),
            size: r.Button.Sizes.MEDIUM,
            look: r.Button.Looks.OUTLINED,
            grow: !1,
            color: r.Button.Colors.PRIMARY,
            children: [(0, s.jsx)(c.default, {
              className: j.arrow,
              direction: c.default.Directions.LEFT
            }), O.default.Messages.BACK]
          })
        }), (0, s.jsxs)("div", {
          className: j.rightButtons,
          children: [(0, s.jsxs)(r.Text, {
            className: j.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [_, " ", M]
          }), (0, s.jsx)(r.Tooltip, {
            text: v ? O.default.Messages.ONBOARDING_REQUIRED_QUESTION : null,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, s.jsx)(r.Button, {
                className: j.button,
                innerClassName: j.buttonInner,
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: () => i ? N() : g(I.length),
                disabled: v,
                size: r.Button.Sizes.MEDIUM,
                look: r.Button.Looks.FILLED,
                grow: !1,
                color: T ? r.Button.Colors.PRIMARY : r.Button.Colors.BRAND,
                children: i ? (0, s.jsxs)(s.Fragment, {
                  children: [O.default.Messages.FINISH, (0, s.jsx)("span", {
                    className: j.finishEmoji,
                    role: "img",
                    "aria-hidden": !0,
                    children: "\uD83C\uDF89"
                  })]
                }) : (0, s.jsxs)(s.Fragment, {
                  children: [T ? O.default.Messages.SKIP : O.default.Messages.NEXT, (0, s.jsx)(c.default, {
                    className: j.arrow,
                    direction: c.default.Directions.RIGHT
                  })]
                })
              })
            }
          })]
        })]
      })]
    })
  })
}

function S(e) {
  let {
    headerId: t,
    guild: l,
    step: n,
    lastPrompt: i,
    questionCount: o,
    currentPrompt: d,
    selectOption: u,
    gotoPrevPrompt: m,
    gotoNextPrompt: f,
    completeOnboarding: g
  } = e, E = (0, a.useStateFromStoresArray)([h.default], () => h.default.getOnboardingResponsesForPrompt(l.id, d.id)), I = 0 === E.length && (null == d ? void 0 : d.required), v = null == d ? void 0 : d.options.filter(e => E.includes(e.id)), b = (0, x.getSelectedRoleIds)(v), C = (0, x.getSelectedChannelIds)(v), S = 0 === E.length, {
    helpText: T,
    helpTextAdditional: _
  } = (0, p.default)({
    guild: l,
    prompt: d,
    selectedRoleIds: b,
    selectedChannelIds: C,
    itemHook: R
  });
  return (0, s.jsx)("div", {
    className: j.prompt,
    children: (0, s.jsxs)("div", {
      className: j.promptContent,
      children: [(0, s.jsxs)(r.ScrollerThin, {
        className: j.scrollerContent,
        children: [(0, s.jsxs)("div", {
          className: j.questionHeader,
          children: [(0, s.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: O.default.Messages.ONBOARDING_QUESTION_COUNT.format({
              currentQuestion: n + 1,
              questionCount: o
            })
          }), d.required ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(r.Text, {
              variant: "text-xs/normal",
              className: j.headerSeparator,
              children: "\xb7"
            }), (0, s.jsx)(r.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: O.default.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
            })]
          }) : null]
        }), (0, s.jsx)(r.Heading, {
          className: j.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: d.title
        }), (0, s.jsx)("div", {
          className: j.promptOptions,
          children: d.options.map(e => (0, s.jsx)(N.default, {
            guildId: l.id,
            option: e,
            onSelect: t => u(d.id, e.id, null != t && t),
            selected: E.includes(e.id)
          }, e.id))
        })]
      }), (0, s.jsxs)("div", {
        className: j.navButtons,
        children: [(0, s.jsx)("div", {
          className: j.leftButtons,
          children: n > 0 && (0, s.jsxs)(r.Button, {
            className: j.button,
            innerClassName: j.buttonInner,
            onClick: () => m(E.length),
            size: r.Button.Sizes.MEDIUM,
            look: r.Button.Looks.OUTLINED,
            grow: !1,
            color: r.Button.Colors.PRIMARY,
            children: [(0, s.jsx)(c.default, {
              className: j.arrow,
              direction: c.default.Directions.LEFT
            }), O.default.Messages.BACK]
          })
        }), (0, s.jsxs)("div", {
          className: j.rightButtons,
          children: [(0, s.jsxs)(r.Text, {
            className: j.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [T, " ", _]
          }), (0, s.jsx)(r.Tooltip, {
            text: I ? O.default.Messages.ONBOARDING_REQUIRED_QUESTION : null,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, s.jsx)(r.Button, {
                className: j.button,
                innerClassName: j.buttonInner,
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: () => i ? g() : f(E.length),
                disabled: I,
                size: r.Button.Sizes.MEDIUM,
                look: r.Button.Looks.FILLED,
                grow: !1,
                color: S ? r.Button.Colors.PRIMARY : r.Button.Colors.BRAND,
                children: i ? (0, s.jsxs)(s.Fragment, {
                  children: [O.default.Messages.FINISH, (0, s.jsx)("span", {
                    className: j.finishEmoji,
                    role: "img",
                    "aria-hidden": !0,
                    children: "\uD83C\uDF89"
                  })]
                }) : (0, s.jsxs)(s.Fragment, {
                  children: [S ? O.default.Messages.SKIP : O.default.Messages.NEXT, (0, s.jsx)(c.default, {
                    className: j.arrow,
                    direction: c.default.Directions.RIGHT
                  })]
                })
              })
            }
          })]
        })]
      })]
    })
  })
}

function T(e) {
  let {
    guild: t,
    prompts: l,
    step: r,
    selectOption: u,
    completeOnboarding: c,
    setCurrentStep: g,
    headerId: h,
    disableTracking: x
  } = e, p = (0, a.default)([d.default], () => d.default.getRulesPrompt(t.id));
  n.useEffect(() => {
    o.default.fetchVerificationForm(t.id)
  }, [t.id]);
  let N = l[r],
    E = r + 1 >= l.length && !b(p),
    O = l[0].required;
  n.useEffect(() => {
    !x && m.default.track(v.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
      ...(0, i.collectGuildAnalyticsMetadata)(t.id),
      step: 0,
      required: O
    })
  }, [t.id, O, x]);
  let j = e => {
      !x && (m.default.track(v.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
        ...(0, i.collectGuildAnalyticsMetadata)(t.id),
        step: r,
        options_selected: e,
        skipped: 0 === e,
        back: !1,
        in_onboarding: !0,
        is_final_step: !1
      }), r < l.length - 1 && m.default.track(v.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
        ...(0, i.collectGuildAnalyticsMetadata)(t.id),
        step: r,
        required: l[r + 1].required
      })), r + 1 < l.length ? g(r + 1) : b(p) && g("rules")
    },
    R = e => {
      !x && (m.default.track(v.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
        ...(0, i.collectGuildAnalyticsMetadata)(t.id),
        step: r,
        skipped: !1,
        back: !0,
        options_selected: e,
        in_onboarding: !0,
        is_final_step: !1
      }), r > 0 && m.default.track(v.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
        ...(0, i.collectGuildAnalyticsMetadata)(t.id),
        step: r - 1,
        required: l[r - 1].required
      })), g(Math.max(0, r - 1))
    };
  if (null == N) return null;
  switch (N.type) {
    case I.OnboardingPromptType.MULTIPLE_CHOICE:
      return (0, s.jsx)(S, {
        guild: t,
        headerId: h,
        step: r,
        questionCount: l.length,
        currentPrompt: N,
        lastPrompt: E,
        selectOption: u,
        gotoPrevPrompt: R,
        gotoNextPrompt: j,
        completeOnboarding: c
      });
    case I.OnboardingPromptType.DROPDOWN:
      return (0, s.jsx)(C, {
        guild: t,
        headerId: h,
        step: r,
        questionCount: l.length,
        currentPrompt: N,
        lastPrompt: E,
        selectOption: u,
        gotoPrevPrompt: R,
        gotoNextPrompt: j,
        completeOnboarding: c
      });
    default:
      (0, f.assertNever)(N.type)
  }
}