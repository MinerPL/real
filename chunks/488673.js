"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("414456"),
  r = n.n(i),
  s = n("551042"),
  u = n("77078"),
  o = n("272030"),
  d = n("49671"),
  c = n("817963"),
  f = n("42203"),
  m = n("305961"),
  v = n("957255"),
  E = n("697218"),
  p = n("433487"),
  h = n("299039"),
  C = n("803725"),
  N = n("142485"),
  x = n("643290"),
  S = n("431734"),
  g = n("80028"),
  I = n("846325"),
  _ = n("782340"),
  L = n("515597"),
  M = n("446825").Buffer;

function T(e) {
  let {
    clip: t,
    cropData: i,
    channelId: T,
    clipName: A,
    voiceAudioEnabled: j,
    applicationAudioEnabled: R,
    onSetClipName: P,
    onChangeVoiceAudioEnabled: b,
    onChangeApplicationAudioEnabled: w,
    onPrompt: y,
    onClose: D
  } = e, [k, O] = l.useState(null), {
    onShareClick: G
  } = (0, N.default)({
    channelId: T,
    setExporting: e => O(null != e ? "share" : null)
  });
  async function F() {
    let e = f.default.getChannel(T);
    O("export"), y(!0);
    try {
      let l = await (0, C.exportClip)(t, {
        ...i,
        applicationAudio: R,
        voiceAudio: j
      });
      (0, u.openModalLazy)(async () => {
        let {
          default: i
        } = await n.el("823749").then(n.bind(n, "823749")), r = (null == e ? void 0 : e.guild_id) != null ? m.default.getGuild(e.guild_id) : null, s = null != r && (0, c.getManageResourcePermissions)(r, v.default, E.default).canCreateExpressions, u = null == A || "" === A ? (0, g.CLIP_NAME_TEMPLATE)(h.default.extractTimestamp(t.id)) : A, o = u.slice(0, I.MAX_LENGTH_SOUND_NAME);
        return t => (0, a.jsx)(i, {
          ...t,
          showGuildPicker: !0,
          guildId: s ? null == e ? void 0 : e.guild_id : void 0,
          sourceFile: {
            file: new File([l], "".concat(u, ".mp4"), {
              type: "video/mp4"
            }),
            name: o
          }
        })
      })
    } catch (e) {} finally {
      O(null), y(!1)
    }
  }
  async function U() {
    O("export"), y(!0);
    try {
      let e = await (0, C.exportClip)(t, {
          ...i,
          applicationAudio: R,
          voiceAudio: j
        }),
        n = await e.arrayBuffer();
      await d.default.fileManager.saveWithDialog(M.from(n), (0, g.CLIPS_EXPORT_FILENAME)(t.id))
    } catch (e) {} finally {
      O(null), y(!1)
    }
  }

  function B() {
    y(!0), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("386092").then(n.bind(n, "386092"));
      return n => (0, a.jsx)(e, {
        clip: t,
        ...n,
        onClose: async () => {
          await n.onClose(), y(!1)
        },
        onDelete: async () => {
          await n.onClose(), D(), y(!1)
        }
      })
    })
  }
  return (0, a.jsxs)("div", {
    className: L.clipForm,
    children: [(0, a.jsxs)("div", {
      className: r(L.clipFormSection, L.editSection),
      children: [(0, a.jsx)(u.FormItem, {
        className: L.clipFormItem,
        title: _.default.Messages.CLIPS_EDIT_TITLE,
        children: (0, a.jsx)(u.TextInput, {
          onChange: e => {
            "" === e ? P(void 0) : P(e)
          },
          value: A,
          minLength: g.CLIP_NAME_MIN_CHAR_LENGTH,
          maxLength: g.CLIP_NAME_MAX_CHAR_LENGTH,
          placeholder: _.default.Messages.CLIPS_UNTITLED
        })
      }), (0, a.jsxs)("div", {
        className: L.clipFormSwitches,
        children: [(0, a.jsx)(u.FormSwitch, {
          onChange: w,
          value: R,
          hideBorder: !0,
          children: _.default.Messages.CLIPS_EDIT_GAME_AUDIO
        }), (0, a.jsx)(u.FormSwitch, {
          onChange: b,
          value: j,
          hideBorder: !0,
          children: _.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: r(L.clipFormSection, L.metadataSection),
      children: [(0, a.jsx)(x.default, {
        clip: t
      }), (0, a.jsx)(S.default, {
        className: L.userList,
        clip: t
      })]
    }), (0, a.jsxs)("div", {
      className: L.clipFormFooter,
      children: [(0, a.jsx)(u.Button, {
        submitting: "share" === k,
        disabled: null != k && "share" !== k,
        color: u.Button.Colors.BRAND,
        wrapperClassName: L.clipFormFooterButton,
        onClick: () => G({
          clip: {
            ...t,
            name: A
          },
          cropData: i,
          applicationAudioEnabled: R,
          voiceAudioEnabled: j,
          onShareComplete: () => {
            s.closeModal(g.CLIPS_EDIT_MODAL_KEY), s.closeModal(g.CLIPS_GALLERY_MODAL_KEY)
          }
        }),
        children: _.default.Messages.CLIPS_EDIT_SHARE_CLIP
      }), (0, a.jsx)(u.Button, {
        size: u.Button.Sizes.ICON,
        className: L.clipFormFooterButton,
        disabled: null != k,
        wrapperClassName: r(L.clipFormFooterButton, {
          [L.submittingWrapperFix]: null != k
        }),
        color: u.Button.Colors.PRIMARY,
        onClick: D,
        children: _.default.Messages.SAVE_CHANGES
      }), (0, a.jsx)(u.Button, {
        "aria-label": _.default.Messages.MORE_OPTIONS,
        size: u.Button.Sizes.ICON,
        wrapperClassName: r(L.clipFormFooterButton, {
          [L.submittingWrapperFix]: null != k
        }),
        submitting: "export" === k,
        disabled: null != k && "export" !== k,
        color: u.Button.Colors.PRIMARY,
        onClick: function(e) {
          (0, o.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await n.el("87102").then(n.bind(n, "87102"));
            return t => (0, a.jsx)(e, {
              ...t,
              onExportToSoundboard: F,
              onExportToFile: U,
              onDelete: B,
              channelId: T
            })
          })
        },
        children: (0, a.jsx)(p.default, {})
      })]
    })]
  })
}