"use strict";
n.r(t), n.d(t, {
  parse: function() {
    return M
  }
}), n("222007"), n("70102"), n("781738"), n("424973");
var l = n("627445"),
  i = n.n(l),
  r = n("693566"),
  o = n.n(r),
  s = n("132710"),
  a = n("933805"),
  u = n("605250"),
  d = n("647374"),
  c = n("888198"),
  f = n("290689"),
  p = n("788554"),
  m = n("718517"),
  h = n("23690"),
  E = n("10680");
let S = {
    link: {
      type: "skip"
    },
    highlight: {
      type: "skip"
    },
    blockQuote: {
      type: "skip"
    },
    codeBlock: {
      type: "skip"
    },
    list: {
      type: "skip"
    },
    heading: {
      type: "skip"
    },
    channelOrMessageUrl: {
      type: "skip"
    },
    mediaPostLink: {
      type: "skip"
    },
    attachmentLink: {
      type: "skip"
    },
    newline: {
      type: "verbatim"
    },
    br: {
      type: "verbatim"
    },
    paragraph: {
      type: "verbatim"
    },
    text: {
      type: "verbatim"
    },
    emoticon: {
      type: "verbatim"
    },
    mention: {
      type: "inlineObject"
    },
    roleMention: {
      type: "inlineObject"
    },
    commandMention: {
      type: "inlineObject"
    },
    channelMention: {
      type: "inlineObject"
    },
    emoji: {
      type: "inlineObject"
    },
    customEmoji: {
      type: "inlineObject"
    },
    em: {
      type: "inlineStyle",
      before: "*",
      after: "*"
    },
    looseEm: {
      type: "inlineStyle",
      before: "*",
      after: " *"
    },
    autolink: {
      type: "inlineStyle",
      before: "<",
      after: ">"
    },
    strong: {
      type: "inlineStyle",
      before: "**",
      after: "**"
    },
    u: {
      type: "inlineStyle",
      before: "__",
      after: "__"
    },
    s: {
      type: "inlineStyle",
      before: "~~",
      after: "~~"
    },
    escape: {
      type: "inlineStyle",
      before: "\\",
      after: ""
    },
    inlineCode: {
      type: "inlineStyle",
      before: "`",
      after: "`"
    },
    staticRouteLink: {
      type: "inlineStyle",
      before: "<id:",
      after: ">"
    },
    soundboard: {
      type: "inlineStyle",
      before: "<sound:",
      after: ">"
    },
    spoiler: {
      type: "inlineStyle",
      before: "||",
      after: "||"
    },
    url: {
      type: "inlineStyle",
      before: "",
      after: ""
    },
    codeBlockText: {
      type: "inlineStyle",
      before: "",
      after: ""
    },
    codeBlockSyntax: {
      type: "inlineStyle",
      before: "",
      after: ""
    },
    codeBlockLang: {
      type: "inlineStyle",
      before: "",
      after: ""
    },
    timestamp: {
      type: "inlineObject"
    }
  },
  g = new Set(["*", "_", "\\"]),
  C = {},
  T = {};
for (let e in c.default.RULES) {
  if (!(e in S)) throw Error("Slate: Unknown markdown rule: ".concat(e, ".  If you have just added a new markdown rule ") + "then you probably need to add it to this file so that the rich chat box understands it.");
  let t = S[e];
  "skip" !== t.type && (C[e] = v(c.default.RULES[e])), "skip" !== t.type && "inlineObject" !== t.type && (T[e] = v("text" === e ? f.default : c.default.RULES[e]))
}

function v(e) {
  i(null != e.parse, "Slate: rule must have a parse function");
  let t = e.parse;
  return {
    ...e,
    parse(e, n, l) {
      let i = t.call(this, e, n, l);
      return !(i instanceof Array) && (i.originalMatch = e), i
    }
  }
}
let y = {
    url: {
      parse: e => null == (0, d.punycodeLink)(e[1]) ? {
        type: "text",
        content: e[0],
        originalMatch: e
      } : {
        type: "link",
        content: e[1],
        originalMatch: e
      }
    },
    autolink: {
      parse: e => null == (0, d.punycodeLink)(e[1]) ? {
        type: "text",
        content: e[0],
        originalMatch: e
      } : {
        type: "autolink",
        content: e[1],
        originalMatch: e
      }
    },
    codeBlockSyntax: {
      order: s.defaultRules.inlineCode.order - .1,
      match: e => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
      parse: e => null != e[2] && "" !== e[2] && E.isKnownLang(e[2]) ? [{
        type: "codeBlockSyntax",
        content: e[1],
        originalMatch: e
      }, {
        type: "codeBlockLang",
        content: e[2],
        originalMatch: e
      }] : {
        type: "codeBlockSyntax",
        content: e[0],
        originalMatch: e
      }
    }
  },
  x = (0, p.default)([C, y]),
  I = (0, p.default)([T, y]),
  N = a.astParserFor(x),
  _ = a.astParserFor(I),
  A = {
    max: 1 / 0,
    maxAge: 1 * m.default.Millis.MINUTE,
    updateAgeOnGet: !0
  },
  R = new o(A),
  O = new o(A);

function M(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = E.findBackticks(e);
  if (i.push(e.length), 1 === i.length && n) return [];
  let r = 0,
    o = n,
    s = [];
  for (let n of i) {
    if (o) s.push({
      text: e.substring(r, n),
      start: r,
      attributes: ["codeBlockText"],
      data: void 0
    });
    else {
      let o = n === i[i.length - 2],
        a = o ? e.substring(n + 3) : "",
        u = null != a.match(E.caseInsensitiveLangRegex),
        d = u ? a : "";
      n += 3 + d.length;
      let c = e.substring(r, n);
      if ("" !== c) {
        let e = function(e, t, n) {
          let l = [],
            i = n ? O : R,
            r = i.get(e);
          if (null != r) return r;
          let o = e.replace(/\r\n/g, " \n").replace(/[\r\f]/g, " ").replace(/\t/g, " ") + "\n\n",
            s = {
              originalMatch: {
                index: 0,
                0: ""
              },
              type: "paragraph",
              content: (n ? _ : N)(o, !1, {
                returnMentionIds: !0,
                disableAutoBlockNewlines: !0,
                guildId: t
              })
            };
          k(l, o, s, 0, []);
          let a = function(e) {
            if (0 === (e = e.filter(e => e.text.length > 0)).length) return e;
            let t = [e[0]];
            for (let n = 1; n < e.length; n++) {
              let l = t[t.length - 1],
                i = l.start + l.text.length,
                r = e[n];
              r.start === i && null == l.data && null == r.data && l.attributes.join("-") === r.attributes.join("-") ? l.text += r.text : t.push(r)
            }
            return t
          }(l);
          return i.set(e, a), a
        }(c, t, l);
        e.forEach(e => {
          s.push({
            ...e,
            start: e.start + r
          })
        })
      }
    }
    o = !o, r = n
  }
  return s
}

function k(e, t, n, l, r) {
  let {
    content: o,
    type: s,
    originalMatch: a
  } = n;
  switch (i(null != a, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), s) {
    case "newline":
    case "br":
    case "paragraph":
    case "text":
    case "emoticon":
      return b(e, t, o || "", l, r);
    case "emoji":
    case "customEmoji": {
      let i = t.substring(l);
      if (!i.startsWith(a[0]) && (l = j(e, t, l, t.length), i = t.substring(l)), i.startsWith(a[0])) return L({
        result: e,
        sourceText: t,
        text: a[0],
        originalStart: l,
        attributes: [s],
        data: n
      });
      throw Error("Slate: Unable to find emoji: ".concat(a[0], " in ").concat(t, " at ").concat(l))
    }
    case "mention":
    case "roleMention":
    case "channelMention":
    case "commandMention":
    case "staticRouteLink":
    case "soundboard":
    case "channel": {
      let {
        text: r,
        id: o
      } = n;
      if (null != r) return i(r === a[0], "Slate: text mentions must exactly match the regex match"), L({
        result: e,
        sourceText: t,
        text: r,
        originalStart: l,
        attributes: ["textMention"],
        data: {
          text: r
        }
      });
      return L({
        result: e,
        sourceText: t,
        text: a[0],
        originalStart: l,
        attributes: [s],
        data: {
          id: o
        }
      })
    }
    case "timestamp":
      if (h.default.getCurrentConfig({
          location: "c70cbb_1"
        }, {
          autoTrackExposure: !1
        }).enabled) return L({
        result: e,
        sourceText: t,
        text: a[0],
        originalStart: l,
        attributes: [s],
        data: n
      });
      return b(e, t, a[0], l, r);
    case "em":
    case "autolink":
    case "strong":
    case "u":
    case "s":
    case "escape":
    case "inlineCode":
    case "codeBlockSyntax":
    case "codeBlockLang":
    case "spoiler":
    case "url":
    case "link": {
      l = U(t, l);
      let {
        before: n,
        after: i
      } = function(e, t, n, l) {
        if ("inlineCode" === t) return {
          before: l[1],
          after: l[1]
        };
        if ("em" === t && "_" === e.substring(n, n + 1)) return {
          before: "_",
          after: "_"
        };
        let i = S["link" === t ? "url" : t];
        if ("inlineStyle" === i.type) return i;
        throw Error("Slate: rule must be an inlineStyle")
      }(t, s, l, a);
      return l = P(e, t, n, l, "syntaxBefore"), r.push(s), l = b(e, t, null != o ? o : "", l, r), r.pop(), l = P(e, t, i, l, "syntaxAfter"), U(t, l)
    }
    default:
      throw Error("Slate: Unknown rule type: ".concat(s))
  }
}

function b(e, t, n, l, i) {
  return "string" == typeof n ? l = L({
    result: e,
    sourceText: t,
    text: n,
    originalStart: l,
    attributes: i,
    data: null
  }) : (!(n instanceof Array) && (n = [n]), n.forEach(n => {
    l = k(e, t, n, l, i)
  })), U(t, l)
}

function P(e, t, n, l, r) {
  if (n.length > 0) {
    let o = t.indexOf(n, l),
      s = t.substring(l, o + n.length);
    i(o >= 0, "Slate: Unable to find syntax characters"), e.push({
      text: s,
      attributes: [r],
      start: l,
      data: null
    }), l = o + n.length
  }
  return l
}

function L(e) {
  let {
    result: t,
    sourceText: n,
    text: l,
    originalStart: i,
    attributes: r,
    data: o
  } = e, s = U(n, i);
  for (;
    "\n" === l.charAt(0) || " " === l.charAt(0);) l = l.substring(1);
  let a = n.indexOf(l, s);
  if (a !== s ? s = i = j(t, n, s, a) : "\\" === l && "\\" === n.charAt(a + 1) && (a++, i = ++s), a !== s) throw new(0, u.default)("MarkdownToSlate").error(JSON.stringify({
    sourceText: n,
    searchText: l,
    searchStartsAt: n.substring(s),
    startPos: s
  })), Error("Slate: Unable to find content in source text!");
  let d = s + l.length,
    c = n.substring(i, d);
  return t.push({
    text: c,
    attributes: r.slice(),
    start: i,
    data: o
  }), d
}

function U(e, t) {
  for (;
    "\n" === e.charAt(t) || " " === e.charAt(t);) t++;
  return t
}

function j(e, t, n, l) {
  for (; n < l;)
    if (g.has(t[n])) n = P(e, t, t[n], n, "syntaxBefore"), n = U(t, n);
    else break;
  return n
}