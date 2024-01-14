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
  s = n("371621"),
  a = n("446674"),
  u = n("798609"),
  d = n("383018"),
  c = n("474643"),
  f = n("585722"),
  p = n("640830"),
  m = n("939563"),
  h = n("385887"),
  E = n("782340"),
  S = n("835906");

function g(e, t, n) {
  let {
    attributes: i,
    children: r,
    element: o
  } = t;
  switch (o.type) {
    case "applicationCommand":
      let s = d.default.getActiveCommand(n),
        a = 0,
        u = 0;
      if (null != s && s.id === o.command.id) {
        var c;
        let t = p.getOptionNames(e);
        for (let e of null !== (c = s.options) && void 0 !== c ? c : []) t.includes(e.name) ? u++ : a++
      }
      let f = {};
      if (a > 0) {
        let e;
        e = u > 0 ? E.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
          count: a
        }) : E.default.Messages.COMMANDS_OPTION_COUNT.format({
          count: a
        }), f["data-trailing-placeholder"] = e
      }
      return (0, l.jsx)("div", {
        className: S.applicationCommand,
        ...i,
        ...f,
        children: r
      });
    case "applicationCommandOption":
      return (0, l.jsx)(C, {
        attributes: i,
        channelId: n,
        element: o,
        children: r
      });
    default:
      return null
  }
}
let C = e => {
  let t, {
      channelId: n,
      element: r,
      attributes: p,
      children: g
    } = e,
    C = (0, s.useSelected)(),
    T = (0, s.useFocused)(),
    v = (0, s.useSlateStatic)(),
    {
      optionType: y,
      errored: x
    } = (0, a.useStateFromStoresObject)([d.default], () => {
      var e, t, l;
      return {
        optionType: null === (e = d.default.getOption(n, r.optionName)) || void 0 === e ? void 0 : e.type,
        errored: (null === (l = d.default.getOptionState(n, r.optionName)) || void 0 === l ? void 0 : null === (t = l.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
      }
    }, [n, r.optionName]),
    I = (0, a.useStateFromStores)([f.default], () => f.default.getUpload(n, r.optionName, c.DraftType.SlashCommand), [n, r.optionName]),
    N = r.children[r.children.length - 1],
    _ = null != N && h.TextUtils.isText(N) && N.text.endsWith("\n"),
    A = o(S.inlineElement, S.optionPill, {
      [S.selectedPill]: T && C,
      [S.erroredPill]: (!T || !C) && x
    }),
    R = i.useCallback(() => {
      !h.EditorUtils.isVoid(v, r) && m.SlateTransforms.selectCommandOption(v, r.optionName, !0)
    }, [v, r]);
  return t = y === u.ApplicationCommandOptionType.ATTACHMENT ? (null == I ? void 0 : I.filename) != null ? (0, l.jsxs)("span", {
    className: o(S.optionPillValue, S.attachmentFilename),
    contentEditable: !1,
    children: [I.filename, g]
  }) : (0, l.jsxs)("span", {
    className: o(S.optionPillValue, S.readonlyPillValue),
    contentEditable: !1,
    children: [E.default.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT, g]
  }) : (0, l.jsxs)("span", {
    className: S.optionPillValue,
    children: [g, _ ? (0, l.jsx)("span", {
      className: S.newLine,
      contentEditable: !1
    }) : null]
  }), (0, l.jsxs)("span", {
    ...p,
    className: A,
    children: [(0, l.jsxs)("span", {
      className: S.optionPillKey,
      contentEditable: !1,
      onClick: R,
      children: [r.optionDisplayName, "​"]
    }), t, (0, l.jsx)("span", {
      contentEditable: !1,
      children: "​"
    })]
  })
}