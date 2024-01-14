"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  },
  run: function() {
    return g
  },
  convertRawToInlineVoids: function() {
    return v
  }
}), n("222007"), n("424973");
var l = n("627445"),
  i = n.n(l),
  r = n("798609"),
  o = n("383018"),
  s = n("118851"),
  a = n("83800"),
  u = n("135038"),
  d = n("970153"),
  c = n("939563"),
  f = n("385887");
let p = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
  m = new Set(["emoji", "customEmoji", "textMention", "userMention", "roleMention", "channelMention", "staticRouteLink", "soundboard", "timestamp"]),
  h = new Set(["line", "blockQuote"]),
  E = new Set(["applicationCommandOption"]);

function S(e, t, n) {
  let {
    isInline: l,
    isVoid: i,
    onChange: r
  } = e;
  e.isVoid = e => !!m.has(e.type) || i(e), e.isInline = e => !!m.has(e.type) || l(e);
  let o = null,
    s = !0;
  return e.onChange = () => {
    let l = f.EditorUtils.richValue(e);
    (l !== o || e.previewMarkdown !== s) && (a.HistoryUtils.withMergedEntry(e, () => {
      f.EditorUtils.withoutNormalizing(e, () => g(e, t, n))
    }), o = l, s = e.previewMarkdown), r()
  }, e
}

function g(e, t, n) {
  let l = f.EditorUtils.areStylesDisabled(e),
    i = f.EditorUtils.blocks(e);
  for (let r of i)
    if (h.has(r[0].type)) l ? T(e, r, !0, null) : C(e, r, t, n);
    else {
      let [i, o] = r;
      for (let r = i.children.length - 1; r >= 0; r--) {
        let s = i.children[r];
        if (E.has(s.type)) {
          let i = [s, f.PathUtils.child(o, r)];
          l ? T(e, i, !0, null) : C(e, i, t, n)
        }
      }
    }
}

function C(e, t, n, l) {
  var r;
  let o = "line" === t[0].type && (null === (r = t[0].codeBlockState) || void 0 === r ? void 0 : r.isInCodeBlock) === !0,
    a = f.ElementUtils.markdown(t[0], n);
  T(e, t, o, a) && (t = f.ElementUtils.updateElement(e, t), a = f.ElementUtils.markdown(t[0], n)), !o && (v(e, t, l, a) && (t = f.ElementUtils.updateElement(e, t), a = f.ElementUtils.markdown(t[0], n)), function(e, t, n, l, r) {
    let [o, a] = t, u = !1;
    for (let d = o.children.length - 1; d >= 0; d--) {
      let m;
      let h = o.children[d];
      if (!f.TextUtils.isText(h)) continue;
      let E = f.PathUtils.child(a, d),
        S = [];
      for (p.lastIndex = 0; null != (m = p.exec(h.text));) {
        if (0 !== m.index && null == h.text.charAt(m.index - 1).match(/(\t|\s)/)) {
          p.lastIndex = m.index + 1;
          continue
        }
        let i = {
          path: E,
          offset: m.index
        };
        if (y(e, a, i, r)) continue;
        let o = (0, s.resolvePlaintextInlineVoid)(m[0], n, l);
        null != o && x(l, t[0], o) ? S.push({
          index: m.index,
          length: m[0].length,
          node: o
        }) : p.lastIndex = m.index + 1
      }
      for (let t of S.reverse()) {
        let n = [h, f.PathUtils.child(a, d)];
        (function(e, t, n, l, r) {
          let [o, s] = t, a = {
            path: s,
            offset: n
          }, u = {
            path: s,
            offset: n + l
          };
          i(a.offset >= 0 && a.offset <= o.text.length, "Failed to find valid start position for raw mention replace"), i(u.offset >= 0 && u.offset <= o.text.length, "Failed to find valid end position for raw mention replace"), c.SlateTransforms.textToVoid(e, r, {
            anchor: a,
            focus: u
          })
        })(e, n, t.index, t.length, t.node), u = !0
      }
    };
  }(e, t, n, l, a))
}

function T(e, t, n, l) {
  let [i, r] = t, o = !1;
  for (let t = i.children.length - 1; t >= 0; t--) {
    let s = i.children[t],
      a = t < i.children.length - 1 ? i.children[t + 1] : null;
    if (f.TextUtils.isText(s) && !n) {
      if (null == a || !e.isVoid(a)) continue;
      let n = !1,
        l = 0;
      for (;;) {
        let e = s.text.indexOf("\\", l);
        if (-1 === e) break;
        if (e === s.text.length - 1) {
          n = !0;
          break
        }
        l = e + 2
      }
      if (n) {
        let n = f.PathUtils.child(r, t + 1);
        c.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(a, {
          mode: "plain",
          preventEmojiSurrogates: !0
        }), n), o = !0
      }
    } else if (e.isVoid(s)) {
      let i = f.PathUtils.child(r, t),
        a = {
          path: f.PathUtils.child(i, 0),
          offset: 0
        };
      (n || null != l && y(e, r, a, l)) && (c.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(s, {
        mode: "plain",
        preventEmojiSurrogates: !0
      }), i), o = !0)
    }
  }
  return o
}

function v(e, t, n, l) {
  let i = t[1],
    r = !1,
    o = [...l.entries].reverse();
  for (let s of o) {
    let o;
    switch (s.attributes[0]) {
      case "emoji":
        o = {
          type: "emoji",
          emoji: {
            name: s.data.name,
            src: s.data.src,
            surrogate: s.data.surrogate,
            jumboable: !0 === s.data.jumboable
          },
          children: [{
            text: ""
          }]
        };
        break;
      case "customEmoji":
        o = {
          type: "customEmoji",
          emoji: {
            emojiId: s.data.emojiId,
            name: s.data.name,
            animated: s.data.animated,
            jumboable: !0 === s.data.jumboable
          },
          children: [{
            text: ""
          }]
        };
        break;
      case "textMention":
        o = {
          type: "textMention",
          name: s.data.text,
          children: [{
            text: ""
          }]
        };
        break;
      case "mention":
        o = {
          type: "userMention",
          userId: s.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "roleMention":
        o = {
          type: "roleMention",
          roleId: s.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "channelMention":
        o = {
          type: "channelMention",
          channelId: s.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "staticRouteLink":
        o = {
          type: "staticRouteLink",
          channelId: s.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "soundboard":
        o = {
          type: "soundboard",
          soundId: s.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "timestamp":
        o = {
          type: "timestamp",
          parsed: s.data,
          children: [{
            text: ""
          }]
        };
        break;
      default:
        continue
    }
    if (!x(n, t[0], o)) continue;
    let a = (0, u.getPointFromPosition)(e, i, l.serializedChildren, s.start),
      d = (0, u.getPointFromPosition)(e, i, l.serializedChildren, s.start + s.text.length);
    c.SlateTransforms.textToVoid(e, o, {
      anchor: a,
      focus: d
    }), r = !0
  }
  return r
}

function y(e, t, n, l) {
  let i = 0;
  for (let [l, r] of f.EditorUtils.nodes(e, {
      at: {
        anchor: f.EditorUtils.start(e, t),
        focus: n
      },
      mode: "lowest"
    })) f.TextUtils.isText(l) ? f.PathUtils.equals(r, n.path) ? i += n.offset : i += l.text.length : i += 1;
  for (let e of l.entries) {
    if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
    let t = e.start,
      n = e.start + e.text.length;
    if (t <= i && n >= i) return !0
  }
  return !1
}

function x(e, t, n) {
  if ("applicationCommandOption" !== t.type) return !0;
  switch (t.optionType) {
    case r.ApplicationCommandOptionType.CHANNEL:
      return "channelMention" === n.type;
    case r.ApplicationCommandOptionType.ROLE:
      return "roleMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
    case r.ApplicationCommandOptionType.USER:
      return "userMention" === n.type;
    case r.ApplicationCommandOptionType.MENTIONABLE:
      return "roleMention" === n.type || "userMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
    case r.ApplicationCommandOptionType.STRING: {
      let n = null != e ? o.default.getOption(e, t.optionName) : null;
      return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0
    }
    default:
      return !1
  }
}