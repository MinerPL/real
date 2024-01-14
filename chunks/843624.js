"use strict";
n.r(t), n.d(t, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
    return _
  },
  default: function() {
    return N
  }
}), n("222007"), n("781738");
var l = n("37983"),
  a = n("884691"),
  u = n("65597"),
  r = n("77078"),
  i = n("18054"),
  d = n("207273"),
  s = n("850391"),
  o = n("149022"),
  c = n("681060"),
  f = n("945956"),
  E = n("145131"),
  C = n("599110"),
  S = n("49111"),
  v = n("782340"),
  h = n("447365");
let _ = "VoiceChannelStatusModal";

function N(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: N
  } = e, T = (0, u.default)([d.default], () => d.default.getChannelStatus(t)), g = (0, u.default)([f.default], () => f.default.getMediaSessionId()), [I, m] = a.useState(null != T ? T : ""), [A, p] = a.useState(!1), [y, L] = a.useState(null);
  a.useEffect(() => {
    C.default.track(S.AnalyticEvents.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id
    })
  }, [t.guild_id]);
  let O = async e => {
    I === T && N(), null == e || e.preventDefault(), L(null), p(!0);
    let n = I.length,
      l = I.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
    await i.default.updateVoiceChannelStatus(t.id, I).then(e => {
      204 === e.status ? (C.default.track(S.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
        guild_id: t.guild_id,
        channel_id: t.id,
        media_session_id: g,
        raw_length: n,
        text_length: l
      }), N()) : L(e.body.message)
    }, e => {
      L(e.body.message)
    }), p(!1)
  }, [F, M] = a.useState((0, o.toRichValue)(I));
  return (0, l.jsx)("form", {
    onSubmit: O,
    className: h.form,
    children: (0, l.jsxs)(r.ModalRoot, {
      transitionState: n,
      size: r.ModalSize.SMALL,
      children: [(0, l.jsxs)(r.ModalContent, {
        children: [(0, l.jsxs)(r.ModalHeader, {
          direction: E.default.Direction.VERTICAL,
          className: h.modalHeader,
          separator: !1,
          children: [(0, l.jsx)(r.ModalCloseButton, {
            className: h.closeButton,
            onClick: N
          }), (0, l.jsx)("div", {
            className: h.headerImage
          }), (0, l.jsx)(r.FormTitle, {
            tag: "h1",
            className: h.title,
            children: v.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
          }), (0, l.jsx)(r.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: v.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
          })]
        }), (0, l.jsxs)(r.FormSection, {
          className: h.inputSection,
          title: v.default.Messages.VOICE_CHANNEL_STATUS,
          children: [(0, l.jsx)(c.default, {
            innerClassName: h.textArea,
            textValue: I,
            richValue: F,
            placeholder: v.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
              channelName: t.name
            }),
            focused: !0,
            channel: t,
            onChange: (e, t, n) => {
              m(t), M(n)
            },
            onSubmit: () => (O(), Promise.resolve({
              shouldClear: !1,
              shouldRefocus: !0
            })),
            type: s.ChatInputTypes.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: _,
            maxCharacterCount: 50,
            showRemainingCharsAfterCount: 25,
            emojiPickerCloseOnModalOuterClick: !0
          }), null != y ? (0, l.jsx)(r.FormErrorBlock, {
            className: h.error,
            children: y
          }) : null]
        })]
      }), (0, l.jsxs)(r.ModalFooter, {
        justify: E.default.Justify.BETWEEN,
        direction: E.default.Direction.HORIZONTAL,
        children: [(0, l.jsx)(r.Button, {
          color: r.Button.Colors.PRIMARY,
          onClick: N,
          children: v.default.Messages.CANCEL
        }), (0, l.jsx)(r.Button, {
          onClick: O,
          submitting: A,
          className: h.button,
          disabled: I.length > 50,
          children: v.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })]
      })]
    })
  })
}