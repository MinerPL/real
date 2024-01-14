"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("629109"),
  o = s("673777"),
  d = s("49671"),
  u = s("147746"),
  c = s("42887"),
  S = s("661919"),
  E = s("697218"),
  f = s("145131"),
  T = s("922932"),
  m = s("50885"),
  _ = s("49111"),
  g = s("353927"),
  h = s("782340"),
  I = s("926622");
async function N() {
  let e = await d.default.fileManager.getModulePath(),
    t = d.default.fileManager.join(e, "discord_voice");
  d.default.fileManager.showItemInFolder(t)
}

function p(e) {
  (0, i.openModal)(t => (0, a.jsx)(i.ConfirmModal, {
    header: h.default.Messages.SET_DEBUG_LOGGING,
    confirmText: h.default.Messages.OKAY,
    cancelText: h.default.Messages.CANCEL,
    onCancel: t.onClose,
    onConfirm: () => r.default.setDebugLogging(e),
    ...t,
    children: (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      children: h.default.Messages.SET_DEBUG_LOGGING_BODY
    })
  }))
}

function C() {
  let [e, t] = n.useState(!1), {
    aecDumpSupported: s,
    debugLogging: d,
    aecDumpEnabled: C,
    supportsConnectionReplay: A
  } = (0, l.useStateFromStoresObject)([c.default], () => ({
    aecDumpSupported: c.default.isAecDumpSupported(),
    debugLogging: c.default.getDebugLogging(),
    aecDumpEnabled: c.default.getAecDump(),
    supportsConnectionReplay: c.default.supports(g.Features.CONNECTION_REPLAY)
  })), O = (0, l.useStateFromStores)([S.default], () => S.default.shouldRecordNextConnection()), x = (0, l.useStateFromStores)([E.default], () => {
    var e, t;
    return null !== (t = null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
  }), R = ("canary" === m.default.releaseChannel || "development" === m.default.releaseChannel) && x && A;
  async function M() {
    t(!0);
    try {
      await c.default.getMediaEngine().writeAudioDebugState(), await T.default.submitLiveCrashReport({
        message: {
          message: "User Live Dump"
        }
      }), await (0, u.uploadDebugLogFiles)(_.DebugLogCategory.RTC), ! function() {
        let e = h.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS_HEADER,
          t = h.default.Messages.UPLOAD_DEBUG_LOG_SUCCESS;
        (0, i.openModal)(s => (0, a.jsx)(i.ConfirmModal, {
          header: e,
          confirmButtonColor: i.Button.Colors.BRAND,
          confirmText: h.default.Messages.OKAY,
          ...s,
          children: (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: t
          })
        }))
      }()
    } catch (e) {
      ! function(e) {
        let t = h.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_HEADER,
          s = null != e ? e : h.default.Messages.UPLOAD_DEBUG_LOG_FAILURE;
        (0, i.openModal)(e => (0, a.jsx)(i.ConfirmModal, {
          header: t,
          confirmButtonColor: i.Button.Colors.BRAND,
          confirmText: h.default.Messages.OKAY,
          ...e,
          children: (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: s
          })
        }))
      }(e.displayMessage)
    }
  }
  return (0, a.jsxs)(i.FormSection, {
    className: I.marginBottom40,
    title: h.default.Messages.FORM_LABEL_DEBUG,
    children: [s && (0, a.jsx)(i.FormSwitch, {
      value: C,
      onChange: e => r.default.setAecDump(e),
      note: h.default.Messages.FORM_HELP_AEC_DUMP,
      children: h.default.Messages.FORM_CHECKBOX_AEC_DUMP
    }), R && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.FormSwitch, {
        hideBorder: !0,
        value: O,
        onChange: e => o.setShouldRecordNextConnection(e),
        note: h.default.Messages.FORM_HELP_CONNECTION_LOG,
        children: h.default.Messages.FORM_CHECKBOX_CONNECTION_LOG
      }), (0, a.jsx)(i.FormItem, {
        children: (0, a.jsx)(f.default, {
          className: I.marginBottom20,
          children: (0, a.jsx)(f.default.Child, {
            grow: 0,
            shrink: 0,
            children: (0, a.jsx)(i.Button, {
              size: i.Button.Sizes.SMALL,
              onClick: () => o.openReplay(),
              children: h.default.Messages.OPEN_CONNECTION_REPLAY
            })
          })
        })
      })]
    }), (0, a.jsx)(i.FormSwitch, {
      hideBorder: !0,
      value: d,
      onChange: p,
      note: h.default.Messages.FORM_HELP_DEBUG_LOGGING,
      children: h.default.Messages.FORM_CHECKBOX_DEBUG_LOGGING
    }), (0, a.jsx)(i.FormItem, {
      children: (0, a.jsxs)(f.default, {
        children: [(0, a.jsx)(f.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(i.Button, {
            disabled: e,
            size: i.Button.Sizes.SMALL,
            onClick: M,
            children: h.default.Messages.UPLOAD
          })
        }), (0, a.jsx)(f.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(i.Button, {
            size: i.Button.Sizes.SMALL,
            onClick: N,
            children: h.default.Messages.SHOW_FOLDER
          })
        })]
      })
    })]
  })
}