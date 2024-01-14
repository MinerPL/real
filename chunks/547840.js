"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("222007");
var s = l("37983"),
  n = l("884691"),
  a = l("65597"),
  r = l("819855"),
  i = l("77078"),
  o = l("841098"),
  d = l("716241"),
  u = l("50926"),
  c = l("526253"),
  m = l("367376"),
  f = l("137215"),
  g = l("599110"),
  h = l("49111"),
  x = l("782340"),
  p = l("710362");

function N(e) {
  var t;
  let {
    guild: l,
    prompts: N,
    completeOnboarding: E,
    setCurrentStep: I,
    disableTracking: v,
    previousPromptIndex: O
  } = e, j = n.useRef(null), R = (0, a.default)([c.default], () => c.default.getRulesPrompt(l.id)), [b, C] = n.useState(null !== (t = null == R ? void 0 : R.response) && void 0 !== t && t), S = (0, a.default)([c.default], () => c.default.get(l.id)), T = (0, o.default)(), _ = n.useRef(null), M = n.useRef(null), B = (0, r.isThemeDark)(T) ? "linear-gradient(to top, rgba(54, 57, 63, 1), rgba(54, 57, 63, 0))" : "linear-gradient(to top, rgba(242, 243, 245, 1), rgba(242, 243, 245, 0))", D = n.useCallback(async () => {
    if (null != S && null != R) {
      try {
        await u.default.submitVerificationForm(l.id, {
          ...S,
          formFields: [{
            ...R,
            response: b
          }]
        })
      } catch {}
      E()
    }
  }, [l.id, S, R, b, E]);

  function A(e) {
    let [t] = e;
    t.isIntersecting && C(!0)
  }
  return (n.useEffect(() => {
    let e = new IntersectionObserver(A, {
        root: _.current,
        rootMargin: "0px",
        threshold: 0
      }),
      t = M.current;
    return null != t && null != t.lastElementChild && e.observe(t.lastElementChild), () => {
      null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild)
    }
  }, [M, _]), null == R) ? null : (0, s.jsx)("div", {
    className: p.prompt,
    children: (0, s.jsxs)("div", {
      className: p.promptContent,
      ref: _,
      children: [(0, s.jsxs)(i.AdvancedScrollerThin, {
        className: p.scrollerContent,
        ref: j,
        children: [(0, s.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: x.default.Messages.ONBOARDING_RULES_STEP
        }), (0, s.jsx)(i.Heading, {
          variant: "heading-xl/semibold",
          children: x.default.Messages.ONBOARDING_RULES_TITLE
        }), (0, s.jsx)("div", {
          className: p.termsFieldBody,
          ref: M,
          children: R.values.map((e, t) => (0, s.jsxs)("div", {
            className: p.termsRow,
            children: [(0, s.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "".concat(t + 1, ".")
            }), (0, s.jsx)(i.Text, {
              variant: "text-sm/normal",
              className: p.termsRowContent,
              children: m.default.parseGuildVerificationFormRule(e, !0, {
                channelId: l.rulesChannelId
              })
            })]
          }, "term-".concat(t)))
        })]
      }), (0, s.jsx)("div", {
        className: p.overlay,
        style: {
          background: B
        }
      }), (0, s.jsxs)("div", {
        className: p.navButtons,
        children: [(0, s.jsx)("div", {
          className: p.leftButtons,
          children: -1 !== O && (0, s.jsxs)(i.Button, {
            innerClassName: p.buttonInner,
            onClick: () => {
              !v && (g.default.track(h.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, d.collectGuildAnalyticsMetadata)(l.id),
                step: -1,
                skipped: !1,
                back: !0,
                options_selected: 0,
                in_onboarding: !0,
                is_final_step: !1
              }), O >= 0 && g.default.track(h.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                ...(0, d.collectGuildAnalyticsMetadata)(l.id),
                step: O,
                required: N[O].required
              })), I(O)
            },
            size: i.Button.Sizes.MEDIUM,
            look: i.Button.Looks.OUTLINED,
            grow: !1,
            color: i.Button.Colors.PRIMARY,
            children: [(0, s.jsx)(f.default, {
              className: p.arrow,
              direction: f.default.Directions.LEFT
            }), x.default.Messages.BACK]
          })
        }), (0, s.jsxs)("div", {
          className: p.rightButtons,
          children: [(0, s.jsx)(i.Text, {
            className: p.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: b ? x.default.Messages.MEMBER_VERIFICATION_READ_AGREE_RULES : x.default.Messages.MEMBER_VERIFICATION_MUST_READ_RULES
          }), (0, s.jsxs)(i.Button, {
            innerClassName: p.buttonInner,
            onClick: D,
            disabled: !b,
            size: i.Button.Sizes.MEDIUM,
            look: i.Button.Looks.FILLED,
            grow: !1,
            color: i.Button.Colors.BRAND,
            children: [x.default.Messages.FINISH, (0, s.jsx)("span", {
              className: p.finishEmoji,
              role: "img",
              "aria-hidden": !0,
              children: "\uD83C\uDF89"
            })]
          })]
        })]
      })]
    })
  })
}