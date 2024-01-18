"use strict";
n.r(t), n.d(t, {
  punycodeLink: function() {
    return T
  },
  default: function() {
    return S
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("70102");
var s = n("917351"),
  i = n.n(s),
  r = n("693566"),
  a = n.n(r);
n("125601");
var o = n("132710"),
  d = n.n(o),
  u = n("312016"),
  l = n("449008"),
  f = n("891137"),
  _ = n("76216");
let c = new a({
  max: 50
});

function g(e) {
  let t = c.get(e);
  if (null != t) return t;
  let n = (0, _.sanitizeWhitespace)(e),
    s = (0, _.sanitizeUnicodeConfusables)(n),
    i = {
      whitespaceSanitized: n,
      fullySanitized: s
    };
  return c.set(e, i), i
}
let m = ["http:", "https:", "discord:"],
  h = [f.AST_KEY.TEXT, f.AST_KEY.UNDERLINE, f.AST_KEY.STRONG, f.AST_KEY.ITALICS, f.AST_KEY.STRIKETHROUGH, f.AST_KEY.INLINE_CODE, f.AST_KEY.SPOILER, f.AST_KEY.LINE_BREAK, f.AST_KEY.TIMESTAMP],
  v = [...h, f.AST_KEY.EMOJI, f.AST_KEY.CUSTOM_EMOJI],
  E = [f.AST_KEY.LIST, f.AST_KEY.HEADING, f.AST_KEY.BLOCK_QUOTE],
  p = [f.AST_KEY.TEXT],
  y = [f.AST_KEY.UNDERLINE, f.AST_KEY.STRONG, f.AST_KEY.ITALICS, f.AST_KEY.STRIKETHROUGH, f.AST_KEY.INLINE_CODE, f.AST_KEY.SPOILER, f.AST_KEY.LINE_BREAK, f.AST_KEY.TIMESTAMP, f.AST_KEY.EMOJI, f.AST_KEY.CUSTOM_EMOJI, f.AST_KEY.LIST, f.AST_KEY.HEADING, f.AST_KEY.BLOCK_QUOTE];

function C(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let s of (!Array.isArray(e) && (e = [e]), e)) {
    if (!t.includes(s.type)) return null;
    if (s.type === f.AST_KEY.INLINE_CODE) {
      let e = [...t, ...n];
      if (null == C(s.validationChildContent, e)) return null
    }
    if (Array.isArray(s.content) && null == C(s.content, t)) return null
  }
  return e
}

function T(e) {
  try {
    var t;
    let n = new URL(e),
      s = null !== (t = n.protocol) && void 0 !== t ? t : "";
    if (!m.includes(s.toLowerCase())) throw Error("Provided protocol is not allowed: " + s);
    if (("http:" === s || "https:" === s) && (null == n.hostname || 0 === n.hostname.length)) throw Error("no hostname");
    let i = (0, _.safelyMakeUrlHumanReadable)(n);
    n.username = "", n.password = "";
    let r = (0, _.safelyMakeUrlHumanReadable)(n);
    return {
      target: i,
      displayTarget: r
    }
  } catch (e) {
    return null
  }
}
var S = {
  ...d.defaultRules.link,
  match: (e, t, n) => t.allowLinks ? d.defaultRules.link.match(e, t, n) : null,
  parse(e, t, s) {
    let [r, a, o, _] = e, c = () => ({
      type: f.AST_KEY.TEXT,
      content: r
    }), m = g(o), S = g(a), I = g(null != _ ? _ : ""), A = m.whitespaceSanitized, D = S.fullySanitized, N = I.fullySanitized, O = D.trim(), b = A.trim();
    if (0 === b.length || 0 === O.length) return c();
    let P = d.unescapeUrl(o),
      k = T(P),
      R = (0, u.default)(a).length > 0 || (0, u.default)(_).length > 0;
    if (null == k || R) return c();
    let V = {
        ...s,
        allowEscape: !1,
        parseInlineCodeChildContent: !0
      },
      M = s.allowEmojiLinks ? v : h,
      w = [...M, ...E],
      L = [...p, ...y],
      U = t(D, V),
      G = C(U, w, [f.AST_KEY.EMOJI]),
      F = t(N, V),
      x = C(F, L);
    if (null == G || null == x) return c();
    let B = function e(t) {
        let n = "";
        for (let s of t) switch (s.type) {
          case f.AST_KEY.TEXT:
          case f.AST_KEY.INLINE_CODE:
            n += s.content;
            break;
          case f.AST_KEY.CUSTOM_EMOJI:
            n += s.name;
            break;
          case f.AST_KEY.EMOJI:
            n += s.surrogate;
            break;
          case f.AST_KEY.LINE_BREAK:
            n += "\n";
            break;
          case f.AST_KEY.STRONG:
          case f.AST_KEY.ITALICS:
          case f.AST_KEY.UNDERLINE:
          case f.AST_KEY.STRIKETHROUGH:
          case f.AST_KEY.SPOILER:
            n += e(s.content);
            break;
          case f.AST_KEY.TIMESTAMP:
            n += "<timestamp>";
            break;
          case f.AST_KEY.BLOCK_QUOTE:
          case f.AST_KEY.LIST:
          case f.AST_KEY.HEADING:
            n += "<".concat(s.type, "Content>");
            break;
          default:
            (0, l.assertNever)(s.type)
        }
        return n
      }(G),
      H = 0 === B.trim().length;
    if (H) return c();
    let {
      default: {
        RULES: Y
      }
    } = n("888198"), j = d.parserFor(i.pick(Y, M)), K = j(S.whitespaceSanitized, V), W = I.whitespaceSanitized, {
      target: z
    } = k;
    return {
      content: K,
      target: z,
      title: W
    }
  }
}