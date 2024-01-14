"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007"), n("781738");
var l = n("884691"),
  i = n("371621"),
  r = n("798609"),
  o = n("383018"),
  s = n("640830"),
  a = n("83800"),
  u = n("939563"),
  d = n("385887"),
  c = n("467123"),
  f = n("100576"),
  p = n("566819");
let m = (e, t, n) => ({
  getSlateEditor: () => e,
  submit(e) {
    e.preventDefault(), n()
  },
  focus() {
    d.EditorUtils.focus(e)
  },
  blur() {
    i.ReactEditor.blur(e)
  },
  getCurrentWord() {
    let t = e.selection;
    if (null == t || !d.SelectionUtils.isValid(e, t) || d.RangeUtils.isExpanded(t) || (0, c.hasOpenPlainTextCodeBlock)(e)) return {
      word: null,
      isAtStart: !1
    };
    let [n, l] = d.EditorUtils.node(e, d.PathUtils.parent(t.anchor.path)), [i, r] = d.EditorUtils.node(e, t.anchor.path), o = t.anchor.offset;
    if (!d.PathUtils.hasPrevious(r) && d.TextUtils.isText(i)) {
      let e = i.text.substring(0, o);
      if (d.NodeUtils.isType(n, "applicationCommand") && o < n.command.displayName.length + 2) return {
        word: e,
        isAtStart: !0
      }
    }
    let s = "",
      a = !1;
    for (;;) {
      if (--o < 0) {
        if (!d.PathUtils.hasPrevious(r)) {
          a = !0;
          break
        } [i, r] = d.EditorUtils.node(e, d.PathUtils.previous(r))
      }
      if (!d.TextUtils.isText(i)) break;
      let t = i.text[o];
      if (p.WHITESPACE_RE.test(t)) break;
      s = t + s
    }
    return {
      word: s,
      isAtStart: a && d.PathUtils.isFirstEditorBlock(l)
    }
  },
  getFirstText() {
    var t, n;
    return null !== (n = null === (t = d.EditorUtils.getFirstText(e)) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : ""
  },
  getCurrentCommandOption() {
    let t = s.getCurrentCommandOption(e);
    return null == t ? null : t[0].optionName
  },
  getCurrentCommandOptionValue() {
    var n;
    let l = s.getCurrentCommandOption(e);
    if (null == l) return [];
    let i = o.default.getActiveCommand(t.id),
      r = null == i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === l[0].optionName);
    return null == r ? [] : s.optionToValues(e, r, l[0])
  },
  getCommandOptionValues() {
    let n = o.default.getActiveCommand(t.id);
    return null == n ? {} : s.getOptionValues(e, n)
  },
  insertText(n) {
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    a.HistoryUtils.withSingleEntry(e, () => {
      let r = s.getCurrentCommandOption(e),
        o = null != r && h(t, r[0]);
      if (null != l && o && (u.SlateTransforms.removeInlineChildren(e, r), i = !1), E(e, n, l, i), null != l && o) {
        let n = s.getCommandBlock(e);
        if (r = d.ElementUtils.updateElement(e, r), null != n) {
          let l = d.ElementUtils.markdown(n[0], t.id);
          (0, f.convertRawToInlineVoids)(e, r, t.id, l) && (r = d.ElementUtils.updateElement(e, r))
        }
        s.validateOption(e, t.guild_id, t.id, d.ElementUtils.updateElement(e, r), !1), u.SlateTransforms.selectNextCommandOption(e)
      }
    })
  },
  insertAutocomplete(n) {
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    a.HistoryUtils.withSingleEntry(e, () => {
      let r = s.getCurrentCommandOption(e),
        o = null != r && h(t, r[0]);
      if (o) u.SlateTransforms.removeInlineChildren(e, r), i = !1;
      else {
        let {
          word: t
        } = this.getCurrentWord();
        null != t && t.length > 0 && u.SlateTransforms.delete(e, {
          distance: t.length,
          unit: "character",
          reverse: !0
        })
      }
      E(e, n, l, i), o && u.SlateTransforms.selectNextCommandOption(e)
    })
  },
  insertEmoji(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    a.HistoryUtils.withSingleEntry(e, () => {
      var l, i;
      let r = t.animated ? "a" : "",
        o = null !== (i = null !== (l = t.originalName) && void 0 !== l ? l : t.name) && void 0 !== i ? i : "",
        s = ":".concat(t.name, ":"),
        a = null != t.id ? "<".concat(r, ":").concat(o.replace(/:/g, ""), ":").concat(t.id, ">") : null;
      E(e, s, a, n)
    })
  }
});

function h(e, t) {
  var n;
  let l = o.default.getActiveCommand(e.id),
    i = null == l ? void 0 : null === (n = l.options) || void 0 === n ? void 0 : n.find(e => e.name === t.optionName);
  return null != i && (i.type !== r.ApplicationCommandOptionType.STRING || (null == i ? void 0 : i.choices) != null || (null == i ? void 0 : i.autocomplete))
}

function E(e, t, n, l) {
  let i = d.EditorUtils.areStylesDisabled(e) || null == n ? t : n;
  a.HistoryUtils.withSingleEntry(e, () => {
    u.SlateTransforms.insertText(e, l ? i + " " : i)
  })
}

function S(e, t, n, i) {
  l.useImperativeHandle(e, () => m(t, n, i), [t, n, i])
}