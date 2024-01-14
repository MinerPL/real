"use strict";
s.r(t), s.d(t, {
  EditChannelBenefitModal: function() {
    return R
  },
  EditIntangibleBenefitModal: function() {
    return D
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("627445"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("430568"),
  u = s("86678"),
  c = s("385976"),
  E = s("867805"),
  _ = s("923959"),
  T = s("882641"),
  I = s("145131"),
  S = s("555158"),
  N = s("191814"),
  g = s("476765"),
  f = s("228220"),
  A = s("973956"),
  L = s("958706"),
  m = s("782340"),
  C = s("777750");

function O(e) {
  let {
    guildId: t,
    emojiData: s,
    "aria-labelledby": l,
    onSelectEmoji: i
  } = e, I = (0, r.useStateFromStores)([c.default], () => null != s.id ? c.default.getCustomEmojiById(s.id) : void 0), S = (0, r.useStateFromStores)([_.default], () => _.default.getDefaultChannel(t)), N = n.useCallback(e => {
    let {
      closePopout: t
    } = e;
    return (0, a.jsx)(u.default, {
      pickerIntention: L.EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI,
      channel: S,
      closePopout: t,
      onNavigateAway: t,
      onSelectEmoji: (e, s) => {
        null != e && i(null != e.id ? {
          id: e.id,
          name: void 0
        } : {
          id: void 0,
          name: e.optionallyDiverseSequence
        }), s && t()
      }
    })
  }, [i, S]), g = n.useMemo(() => null == I && null == s.name ? null : function() {
    return (0, a.jsx)(d.default, {
      className: C.emoji,
      emojiId: s.id,
      emojiName: s.name,
      animated: null == I ? void 0 : I.animated
    })
  }, [s, I]), f = "";
  return null != I ? f = ":".concat(I.name, ":") : null != s.name && (f = E.default.convertSurrogateToName(s.name)), (0, a.jsx)(o.Popout, {
    animation: o.Popout.Animation.NONE,
    position: "top",
    renderPopout: N,
    children: (e, t) => {
      let {
        isShown: s
      } = t;
      return (0, a.jsxs)("div", {
        className: C.emojiInputContainer,
        ...e,
        children: [(0, a.jsx)(T.default, {
          className: C.emojiButton,
          active: s,
          tabIndex: 0,
          renderButtonContents: g
        }), (0, a.jsx)(o.TextInput, {
          inputClassName: C.emojiText,
          placeholder: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EMOJI_PLACEHOLDER,
          value: f,
          "aria-labelledby": l,
          readOnly: !0
        })]
      })
    }
  })
}

function h(e) {
  var t;
  let {
    guildId: s,
    initialData: l,
    benefitTypeInput: i,
    descriptionPlaceholder: r,
    canSubmit: d,
    onSave: u,
    onDelete: c,
    transitionState: E,
    onClose: _
  } = e, T = (0, g.useUID)(), S = (0, g.useUID)(), A = (0, g.useUID)(), [L, h] = n.useState(null !== (t = null == l ? void 0 : l.description) && void 0 !== t ? t : ""), [R, D] = n.useState(() => ({
    id: null == l ? void 0 : l.emoji_id,
    name: null == l ? void 0 : l.emoji_name
  })), M = d && "" !== L && (null != R.id || null != R.name);
  return (0, a.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault(), M && (u({
        description: L,
        emojiId: R.id,
        emojiName: R.name
      }), _())
    },
    children: (0, a.jsxs)(o.ModalRoot, {
      transitionState: E,
      "aria-labelledby": T,
      children: [(0, a.jsxs)(o.ModalHeader, {
        children: [(0, a.jsx)(o.Heading, {
          id: T,
          variant: "heading-md/semibold",
          children: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_MODAL_TITLE
        }), (0, a.jsx)(o.ModalCloseButton, {
          className: C.closeButton,
          onClick: _
        })]
      }), (0, a.jsxs)(o.ModalContent, {
        className: C.modalContent,
        children: [i, (0, a.jsx)(N.default, {
          size: 24
        }), (0, a.jsx)(o.FormSection, {
          title: m.default.Messages.DESCRIPTION,
          titleId: S,
          children: (0, a.jsx)(o.TextArea, {
            placeholder: r,
            value: L,
            rows: 1,
            autosize: !0,
            onChange: h,
            "aria-labelledby": S
          })
        }), (0, a.jsx)(N.default, {
          size: 24
        }), (0, a.jsx)(o.FormSection, {
          title: m.default.Messages.EMOJI,
          titleId: A,
          children: (0, a.jsx)(O, {
            guildId: s,
            emojiData: R,
            onSelectEmoji: D,
            "aria-labelledby": A
          })
        })]
      }), (0, a.jsxs)(o.ModalFooter, {
        justify: I.default.Justify.BETWEEN,
        children: [(0, a.jsxs)("div", {
          className: C.primaryButtons,
          children: [(0, a.jsx)(o.Button, {
            type: "submit",
            disabled: !M,
            children: null == l ? m.default.Messages.ADD : m.default.Messages.SAVE
          }), null != c && (0, a.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.ICON,
            className: C.deleteButton,
            onClick: () => {
              c(), _()
            },
            children: (0, a.jsx)(f.default, {
              "aria-label": m.default.Messages.DELETE
            })
          })]
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          className: C.cancelButton,
          onClick: _,
          children: m.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function R(e) {
  let {
    guildId: t,
    omitChannelIds: s,
    initialData: l,
    onSave: r,
    onDelete: d,
    transitionState: u,
    onClose: c
  } = e, [E, _] = n.useState(null == l ? void 0 : l.ref_id), T = (0, g.useUID)(), I = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(S.default, {
      messageType: S.HelpMessageTypes.WARNING,
      children: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_MODAL_WARNING
    }), (0, a.jsx)(N.default, {
      size: 24
    }), (0, a.jsx)(o.FormSection, {
      title: m.default.Messages.CHANNEL,
      titleId: T,
      children: (0, a.jsx)(A.default, {
        guildId: t,
        value: E,
        initialChannelId: null == l ? void 0 : l.ref_id,
        omitChannelIds: s,
        onChange: function(e) {
          _(e)
        },
        "aria-labelledby": T
      })
    })]
  });
  return (0, a.jsx)(h, {
    guildId: t,
    initialData: l,
    benefitTypeInput: I,
    descriptionPlaceholder: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_DESCRIPTION_PLACEHOLDER,
    canSubmit: null != E,
    onSave: function(e) {
      i(null != E, "Cannot submit null channel"), r({
        ...e,
        channelId: E
      })
    },
    transitionState: u,
    onClose: c,
    onDelete: d
  })
}

function D(e) {
  var t;
  let {
    initialData: s,
    onSave: l,
    transitionState: r,
    onClose: d,
    onDelete: u,
    guildId: c
  } = e, [E, _] = n.useState(null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : ""), T = (0, g.useUID)(), I = (0, a.jsx)(o.FormSection, {
    title: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
    titleId: T,
    children: (0, a.jsx)(o.TextArea, {
      placeholder: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
      value: E,
      rows: 1,
      onChange: function(e) {
        _(e)
      },
      "aria-labelledby": T
    })
  });
  return (0, a.jsx)(h, {
    guildId: c,
    initialData: s,
    benefitTypeInput: I,
    descriptionPlaceholder: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_DESCRIPTION_PLACEHOLDER,
    canSubmit: "" !== E,
    onSave: function(e) {
      i("" !== E, "Cannot submit empty name"), l({
        ...e,
        name: E
      })
    },
    transitionState: r,
    onClose: d,
    onDelete: u
  })
}