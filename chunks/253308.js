"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("69678"),
  u = s("372283"),
  c = s("380710"),
  E = s("837648"),
  _ = s("461380"),
  T = s("673220"),
  I = s("228220"),
  S = s("449008"),
  N = s("653274"),
  g = s("330724"),
  f = s("136278"),
  A = s("594523"),
  L = s("653138"),
  m = s("782340"),
  C = s("963245");
let O = {
  optionErrors: []
};

function h(e) {
  var t;
  let {
    guild: s,
    prompt: l,
    disableAutofocus: u,
    promptIndex: A,
    dragIndex: h,
    includeCount: M,
    singleColumn: G,
    onPromptDragComplete: x,
    onPromptDragStart: p,
    onPromptDragReset: U
  } = e, {
    dropdownsAllowed: v
  } = (0, E.useOnboardingDropdownExperiment)(s.id), j = (0, r.useStateFromStores)([N.default], () => N.default.editedDefaultChannelIds), P = v ? L.DROPDOWN_MAX_NUM_OPTIONS : L.MULTIPLE_CHOICE_MAX_NUM_OPTIONS, {
    drag: y,
    dragSourcePosition: b,
    drop: B,
    setIsDraggable: F
  } = (0, d.default)({
    type: "ONBOARDING_PROMPT_CARD",
    index: h,
    optionId: l.id,
    onDragStart: p,
    onDragComplete: x,
    onDragReset: U
  }), H = (0, r.useStateFromStoresObject)([f.default], () => {
    var e;
    return null !== (e = f.default.errors[A]) && void 0 !== e ? e : O
  }), [V, k] = n.useState(!1), [w, Y] = n.useState(!1), K = null !== (t = H.options) && void 0 !== t ? t : H.optionErrors.filter(S.isNotNullish)[0], W = H.config, z = v && l.options.length >= L.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD, X = (0, c.getMinimumSetOfDefaultChannelIds)(s.id, Array.from(j), [l]).length - j.size, Z = n.useRef(null);
  return (n.useLayoutEffect(() => {
    setTimeout(() => {
      if (0 === A && !u) {
        var e;
        null === (e = Z.current) || void 0 === e || e.focus()
      }
    }, 0)
  }, [u]), V) ? (0, a.jsx)(o.FocusRing, {
    children: (0, a.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => Y(!0),
      onBlur: () => Y(!1),
      onMouseLeave: () => Y(!1),
      className: i(C.container, {
        [C.dropIndicatorBefore]: null != b && A < b,
        [C.dropIndicatorAfter]: null != b && A > b,
        [C.containerFocused]: w
      }),
      ref: e => y(B(e)),
      children: [(0, a.jsx)("div", {
        className: C.dragContainer,
        onMouseEnter: () => F(!0),
        onMouseLeave: () => F(!1),
        children: (0, a.jsx)(T.default, {
          className: C.dragIcon
        })
      }), (0, a.jsx)(o.Text, {
        className: C.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: m.default.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
          index: A + 1
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-lg/semibold",
        color: "text-normal",
        children: l.title
      }), (0, a.jsx)(o.Clickable, {
        className: C.collapseButton,
        onClick: () => k(!1),
        children: (0, a.jsx)(_.default, {
          direction: _.default.Directions.DOWN,
          height: 16,
          width: 16
        })
      }), (0, a.jsx)(o.TooltipContainer, {
        text: m.default.Messages.ONBOARDING_PROMPT_DELETE,
        className: C.removeButton,
        children: (0, a.jsx)(o.Clickable, {
          className: C.closeIcon,
          onClick: () => (0, g.deleteGuildOnboardingPrompt)(s, l.id),
          children: (0, a.jsx)(I.default, {
            height: 16,
            width: 16
          })
        })
      })]
    })
  }) : (0, a.jsx)(o.FocusRing, {
    children: (0, a.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => Y(!0),
      onBlur: () => Y(!1),
      className: i(C.container, {
        [C.dropIndicatorBefore]: null != b && A < b,
        [C.dropIndicatorAfter]: null != b && A > b,
        [C.containerFocused]: w
      }),
      ref: e => y(B(e)),
      children: [(0, a.jsx)("div", {
        className: C.dragContainer,
        onMouseEnter: () => F(!0),
        onMouseLeave: () => F(!1),
        children: (0, a.jsx)(T.default, {
          className: C.dragIcon
        })
      }), (0, a.jsx)(o.Text, {
        className: C.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: m.default.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
          index: A + 1
        })
      }), (0, a.jsx)(o.TextInput, {
        className: C.title,
        inputClassName: C.titleInput,
        inputRef: Z,
        value: l.title,
        onChange: e => (0, g.editGuildOnboardingPrompt)(s, l.id, {
          title: e
        }),
        placeholder: m.default.Messages.ONBOARDING_PROMPT_TITLE_PLACEHOLDER,
        maxLength: L.MAX_PROMPT_TITLE_LENGTH,
        error: H.title
      }), (0, a.jsx)(R, {
        prompt: l,
        guild: s
      }), (0, a.jsx)(o.Text, {
        className: C.optionsHeader,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: z ? m.default.Messages.ONBOARDING_PROMPT_DROPDOWN_OPTIONS_HEADER.format({
          count: l.options.length,
          total: P
        }) : m.default.Messages.ONBOARDING_PROMPT_OPTIONS_HEADER.format({
          count: l.options.length,
          total: P
        })
      }), (0, a.jsx)(D, {
        guild: s,
        prompt: l,
        promptIndex: A,
        errors: H,
        singleColumn: G
      }), null != K ? (0, a.jsx)(o.InputError, {
        error: K
      }) : null, (0, a.jsxs)("div", {
        className: C.buttons,
        children: [(0, a.jsxs)("div", {
          className: C.checkboxes,
          children: [(0, a.jsx)(o.Checkbox, {
            size: 20,
            type: o.Checkbox.Types.INVERTED,
            value: !l.singleSelect,
            onChange: (e, t) => (0, g.editGuildOnboardingPrompt)(s, l.id, {
              singleSelect: !t
            }),
            children: (0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: m.default.Messages.ONBOARDING_PROMPT_ALLOW_MULTIPLE_LABEL
            })
          }), l.inOnboarding ? (0, a.jsx)(o.Checkbox, {
            size: 20,
            type: o.Checkbox.Types.INVERTED,
            value: l.inOnboarding && l.required,
            onChange: (e, t) => (0, g.editGuildOnboardingPrompt)(s, l.id, {
              required: t
            }),
            disabled: !l.inOnboarding,
            children: (0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: M ? m.default.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL_WITH_COUNT.format({
                count: X
              }) : m.default.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
            })
          }) : null]
        }), (0, a.jsx)(o.Clickable, {
          className: C.collapseButton,
          onClick: () => k(!0),
          children: (0, a.jsx)(_.default, {
            direction: _.default.Directions.UP,
            height: 16,
            width: 16
          })
        }), (0, a.jsx)(o.TooltipContainer, {
          text: m.default.Messages.ONBOARDING_PROMPT_DELETE,
          className: C.removeButton,
          children: (0, a.jsx)(o.Clickable, {
            className: C.closeIcon,
            onClick: () => (0, g.deleteGuildOnboardingPrompt)(s, l.id),
            children: (0, a.jsx)(I.default, {
              height: 16,
              width: 16
            })
          })
        })]
      }), null != W ? (0, a.jsx)(o.InputError, {
        error: W
      }) : null]
    })
  })
}

function R(e) {
  let {
    prompt: t,
    guild: s
  } = e, [l, i] = n.useState(!1);
  if (n.useEffect(() => {
      !l && t.title.length > 0 && i(!0)
    }, [l, t]), l) return null;

  function r(e) {
    return (0, a.jsx)(o.Clickable, {
      className: C.example,
      onClick: () => (0, g.editGuildOnboardingPrompt)(s, t.id, {
        title: e
      }),
      children: (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: e
      })
    })
  }
  return (0, a.jsxs)("div", {
    className: C.examplesSection,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: m.default.Messages.ONBOARDING_PROMPT_EXAMPLES_HEADER
    }), (0, a.jsxs)("div", {
      className: C.examples,
      children: [r(m.default.Messages.ONBOARDING_PROMPT_EXAMPLES_1), r(m.default.Messages.ONBOARDING_PROMPT_EXAMPLES_2), r(m.default.Messages.ONBOARDING_PROMPT_EXAMPLES_3), r(m.default.Messages.ONBOARDING_PROMPT_EXAMPLES_4)]
    })]
  })
}

function D(e) {
  let {
    guild: t,
    prompt: s,
    promptIndex: n,
    singleColumn: l,
    errors: i
  } = e, {
    dropdownsAllowed: r
  } = (0, E.useOnboardingDropdownExperiment)(t.id), o = r ? L.DROPDOWN_MAX_NUM_OPTIONS : L.MULTIPLE_CHOICE_MAX_NUM_OPTIONS, {
    handleDragStart: d,
    handleDragReset: c,
    handleDragComplete: _
  } = (0, u.default)(s.options, e => (0, g.editGuildOnboardingPrompt)(t, s.id, {
    options: e
  }));
  return (0, a.jsxs)("div", {
    className: C.options,
    children: [s.options.map((e, r) => (0, a.jsx)(A.default, {
      guild: t,
      prompt: s,
      promptIndex: n,
      singleColumn: l,
      option: e,
      onDragStart: d,
      onDragComplete: _,
      onDragReset: c,
      hasError: null != i.optionErrors[r]
    }, e.id)), s.options.length < o ? (0, a.jsx)(A.AddOptionCard, {
      guild: t,
      prompt: s,
      promptIndex: n,
      singleColumn: l
    }) : null]
  })
}