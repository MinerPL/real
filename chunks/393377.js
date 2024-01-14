"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("77078"),
  a = n("81594"),
  u = n("371642"),
  d = n("966724"),
  c = n("474643"),
  f = n("585722"),
  p = n("271972"),
  m = n("761354"),
  h = n("49111"),
  E = n("91310"),
  S = n("602416");

function g(e) {
  let {
    channelId: t,
    option: n,
    keyboardModeEnabled: r
  } = e, g = i.useRef(null), [C, T] = i.useState(!1), v = f.default.getUpload(t, n.name, c.DraftType.SlashCommand), y = i.useRef(null), x = i.useCallback(() => {
    T(!0)
  }, []), I = i.useCallback(() => {
    T(!1)
  }, []), N = i.useCallback(e => {
    var l;
    T(!1);
    let i = {
      id: n.name,
      file: null === (l = e.dataTransfer) || void 0 === l ? void 0 : l.files[0],
      platform: d.UploadPlatform.WEB
    };
    a.default.setFile({
      channelId: t,
      id: n.name,
      file: i,
      draftType: c.DraftType.SlashCommand
    })
  }, [t, n]);
  return (i.useEffect(() => {
    let e = y.current;
    return null == v && (null == e || e.addEventListener("dragover", x, !1), null == e || e.addEventListener("dragleave", I, !1), null == e || e.addEventListener("drop", N, !1)), () => {
      null == e || e.removeEventListener("dragover", x, !1), null == e || e.removeEventListener("dragleave", I, !1), null == e || e.removeEventListener("drop", N, !1)
    }
  }, [v, x, I, N]), null != v) ? (0, l.jsx)(m.default, {
    channelId: t,
    upload: v,
    keyboardModeEnabled: r,
    draftType: c.DraftType.SlashCommand,
    label: (0, l.jsxs)(i.Fragment, {
      children: [(0, l.jsxs)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        children: [n.name, ": "]
      }), (0, l.jsx)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-brand",
        children: v.filename
      })]
    }),
    canEdit: !1
  }) : (0, l.jsxs)(p.default, {
    id: n.name,
    channelId: t,
    keyboardModeEnabled: r,
    onKeyDown: e => {
      if (e.which === h.KeyboardKeys.ENTER) {
        var t;
        e.preventDefault(), null === (t = g.current) || void 0 === t || t.activateUploadDialogue()
      }
    },
    className: o(E.emptyOption, {
      [E.emptyOptionActive]: C
    }),
    draftType: c.DraftType.SlashCommand,
    ref: y,
    children: [(0, l.jsx)("span", {
      className: o(E.optionName, {
        [E.optionNameActive]: C
      }),
      children: n.name
    }), (0, l.jsx)(s.Clickable, {
      className: E.clickContainer,
      onClick: () => {
        var e;
        return null === (e = g.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
      },
      children: (0, l.jsxs)("div", {
        className: E.commandOptionContainer,
        children: [(0, l.jsx)("img", {
          src: S,
          className: E.optionIcon,
          alt: ""
        }), (0, l.jsx)(s.Text, {
          className: E.optionHelp,
          variant: "text-sm/normal",
          children: "Drag and drop or click to upload file"
        }), (0, l.jsx)(u.default, {
          ref: g,
          onChange: e => {
            var l, i;
            if (null != t && (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (l = i.files) || void 0 === l ? void 0 : l[0]) != null) {
              let l = {
                id: n.name,
                file: e.currentTarget.files[0],
                platform: d.UploadPlatform.WEB
              };
              a.default.setFile({
                channelId: t,
                id: n.name,
                file: l,
                draftType: c.DraftType.SlashCommand
              }), e.currentTarget.value = ""
            }
          },
          multiple: !1,
          tabIndex: -1,
          "aria-hidden": !0,
          className: E.fileInput
        })]
      })
    })]
  })
}