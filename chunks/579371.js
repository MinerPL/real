"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("77078"),
  o = l("446674"),
  i = l("430568"),
  u = l("86678"),
  d = l("385976"),
  r = l("42203"),
  m = l("18494"),
  c = l("697218"),
  S = l("882641"),
  j = l("945330"),
  x = l("719923"),
  f = l("233965"),
  h = l("32346"),
  T = l("958706"),
  v = l("782340"),
  g = l("645897");

function p(e) {
  let {
    customStatusEmoji: t,
    setCustomStatusEmoji: l,
    onClose: n
  } = e, d = (0, o.useStateFromStores)([m.default, r.default], () => r.default.getChannel(m.default.getVoiceChannelId())), c = e => {
    var t;
    if (null == e) {
      l(null);
      return
    }
    let a = null != e.id ? {
      id: e.id,
      name: e.name,
      animated: e.animated
    } : {
      id: null,
      name: null !== (t = e.optionallyDiverseSequence) && void 0 !== t ? t : "",
      animated: !1
    };
    l(a)
  };
  return (0, a.jsx)(s.Popout, {
    renderPopout: e => {
      var t;
      let {
        closePopout: l
      } = e;
      return (0, a.jsx)(u.default, {
        channel: d,
        guildId: null !== (t = null == d ? void 0 : d.guild_id) && void 0 !== t ? t : void 0,
        closePopout: l,
        onSelectEmoji: (e, t) => {
          c(e), t && l()
        },
        pickerIntention: T.EmojiIntention.STATUS,
        onNavigateAway: n
      })
    },
    position: "left",
    animation: s.Popout.Animation.NONE,
    align: "top",
    children: (e, l) => {
      let {
        isShown: n
      } = l;
      return (0, a.jsx)(S.default, {
        ...e,
        active: n,
        className: g.emojiButton,
        tabIndex: 0,
        renderButtonContents: null == t ? null : () => (0, a.jsx)(i.default, {
          className: g.emoji,
          emojiId: t.id,
          emojiName: t.name,
          animated: !!t.animated
        })
      })
    }
  })
}

function C(e) {
  var t, l;
  let {
    transitionState: o,
    onClose: i,
    startingText: u,
    startingEmoji: r
  } = e, m = h.default.getCustomHangStatus(), S = null != u ? u : null !== (t = null == m ? void 0 : m.status) && void 0 !== t ? t : "", T = null !== (l = null == m ? void 0 : m.emoji) && void 0 !== l ? l : null;
  if ((null == r ? void 0 : r.id) != null) {
    let e = x.default.canUseEmojisEverywhere(c.default.getCurrentUser()) && null != d.default.getUsableCustomEmojiById(r.id);
    T = e ? r : null
  } else(null == r ? void 0 : r.name) != null && (T = r);
  let [C, N] = n.useState(S), [E, _] = n.useState(T);
  return (0, a.jsxs)(s.ModalRoot, {
    className: g.modal,
    transitionState: o,
    size: s.ModalSize.DYNAMIC,
    children: [(0, a.jsxs)(s.ModalContent, {
      className: g.modalContent,
      children: [(0, a.jsx)(s.Button, {
        "aria-label": v.default.Messages.CLOSE,
        look: s.Button.Looks.BLANK,
        size: s.Button.Sizes.NONE,
        onClick: i,
        className: g.closeButton,
        children: (0, a.jsx)(j.default, {
          width: 16,
          height: 16,
          className: g.closeIcon
        })
      }), (0, a.jsx)(p, {
        customStatusEmoji: E,
        setCustomStatusEmoji: _,
        onClose: i
      }), (0, a.jsxs)("div", {
        className: g.customInputGroup,
        children: [(0, a.jsx)(s.Text, {
          className: g.leadInText,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: v.default.Messages.STATUS_LEAD_IN_JUST
        }), (0, a.jsx)(s.TextInput, {
          className: g.customInput,
          value: C,
          onChange: e => N(e.substring(0, 60)),
          placeholder: v.default.Messages.CUSTOM_HANG_STATUS_PLACEHOLDER
        })]
      })]
    }), (0, a.jsxs)(s.ModalFooter, {
      className: g.modalFooter,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: v.default.Messages.SET_STATUS_MODAL_TITLE
        }), (0, a.jsx)(s.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: v.default.Messages.SET_STATUS_MODAL_SUBTITLE
        })]
      }), (0, a.jsx)(s.Button, {
        onClick: () => {
          let e = C.trim();
          "" !== e && ((0, f.updateCustomHangStatus)(e, E, !0), i())
        },
        disabled: "" === C.trim(),
        children: v.default.Messages.SET_STATUS_MODAL_CTA
      })]
    })]
  })
}