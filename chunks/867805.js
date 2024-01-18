"use strict";
n.r(t), n.d(t, {
  DIVERSITY_SURROGATES: function() {
    return v
  },
  default: function() {
    return P
  }
}), n("70102"), n("222007"), n("781738"), n("424973");
var s = n("917351"),
  i = n.n(s),
  r = n("895547"),
  a = n("402671"),
  o = n("858619");
let d = null,
  u = {},
  l = {},
  f = {},
  _ = {},
  c = [],
  g = 0,
  m = 0,
  h = {
    "1f3fb": 0,
    "1f3fc": 1,
    "1f3fd": 2,
    "1f3fe": 3,
    "1f3ff": 4
  },
  v = ["\uD83C\uDFFB", "\uD83C\uDFFC", "\uD83C\uDFFD", "\uD83C\uDFFE", "\uD83C\uDFFF"],
  E = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  p = n("620501"),
  y = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
  C = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
for (let e = 0; e < v.length; e++) {
  let t = v[e];
  f["skin-tone-".concat(e + 1)] = t, _[t] = "skin-tone-".concat(e + 1)
}
class T {
  get names() {
    return this.emojiObject.names
  }
  get allNamesString() {
    return this.names.length > 1 ? ":".concat(this.names.join(": :"), ":") : ":".concat(this.uniqueName, ":")
  }
  get unicodeVersion() {
    var e;
    return null !== (e = this.emojiObject.unicodeVersion) && void 0 !== e ? e : 0
  }
  get hasDiversity() {
    return this.emojiObject.hasDiversity
  }
  get hasMultiDiversity() {
    return this.emojiObject.hasMultiDiversity
  }
  get hasDiversityParent() {
    return this.emojiObject.hasDiversityParent
  }
  get hasMultiDiversityParent() {
    return this.emojiObject.hasMultiDiversityParent
  }
  get managed() {
    return !0
  }
  get animated() {
    return !1
  }
  get defaultDiversityChild() {
    if (this.hasDiversity && null != d) {
      let e = function(e) {
        let t = r.default.convert.toCodePoint(e);
        return null != t ? t : ""
      }(d);
      return this.diversityChildren[e]
    }
    return null
  }
  get url() {
    let e = this.defaultDiversityChild;
    return null != e ? a.default.getURL(e.surrogates) : a.default.getURL(this.surrogates)
  }
  get name() {
    return this.hasDiversity && null != d ? "".concat(this.uniqueName, "::").concat(_[d]) : this.uniqueName
  }
  get optionallyDiverseSequence() {
    let e = this.defaultDiversityChild;
    return null != e ? e.surrogates : this.surrogates
  }
  forEachDiversity(e) {
    null != this.diversityChildren && i.each(this.diversityChildren, e)
  }
  forEachName(e) {
    i.each(this.names, e)
  }
  setSpriteSheetIndex(e) {
    this.index = e, this.useSpriteSheet = !0
  }
  constructor(e) {
    if (this.emojiObject = e, this.type = o.EmojiTypes.UNICODE, this.uniqueName = e.names[0], this.surrogates = e.surrogates, this.diversityChildren = {}, null != e.diversityChildren) {
      for (let t of e.diversityChildren)
        if (null != t.diversity) {
          let e = t.diversity.join("-");
          this.diversityChildren[e] = new T(t)
        }
    }
  }
}
let S = n("838426");
for (let e in S) {
  let t = S[e],
    n = t.map(e => {
      let t = new T(e),
        n = t.surrogates,
        s = t.uniqueName;
      if (t.setSpriteSheetIndex(t.hasDiversity ? g++ : m++), _[n] = s, 0 > n.indexOf("‍")) {
        let e = n.replace("️", "");
        e !== n && (_[e] = s)
      }
      for (let e of t.names) l[e] = t, f[e] = n;
      let i = t.diversityChildren;
      for (let t in i) {
        let n = i[t],
          s = n.surrogates;
        for (let e of n.names) l[e] = n, f[e] = s;
        if (!e.hasMultiDiversity) {
          let t = n.emojiObject.diversity[0],
            i = h[t];
          for (let t of e.names) {
            let e = "".concat(t, "::skin-tone-").concat(i + 1);
            f[e] = s, l[e] = n
          }
        }
        _[s] = n.uniqueName
      }
      return c.push(t), t
    });
  u[e] = a.default.filterUnsupportedEmojis(n)
}

function I(e) {
  let t = _[e];
  return null != t ? {
    type: "emoji",
    surrogate: e,
    emojiName: ":".concat(t, ":")
  } : {
    type: "text",
    text: e
  }
}
let A = String.fromCodePoint(917631),
  D = String.fromCodePoint(127988),
  N = /^[\u{E0061}-\u{E007A}]$/u;

function O(e, t) {
  var n;
  if (!0 !== t && !y.test(e)) return [{
    type: "text",
    text: e
  }];
  let s = "",
    i = [],
    r = null !== (n = e.match(C)) && void 0 !== n ? n : [];
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if (null != s && "" !== s) {
      if (t === A) t = s + t, s = "";
      else if (N.test(t)) {
        s += t;
        continue
      } else i.push(I(s)), s = ""
    } else if (t === D) {
      s = t;
      continue
    }
    let n = I(t);
    if (i.length > 0) {
      let e = i[i.length - 1];
      if ("text" === n.type && "text" === e.type) {
        e.text += n.text;
        continue
      }
    }
    i.push(n)
  }
  return null != s && "" !== s && i.push(I(s)), i
}

function b(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return Object.prototype.hasOwnProperty.call(f, e) ? f[e] : t
}
var P = {
  getDefaultDiversitySurrogate: function() {
    return d
  },
  setDefaultDiversitySurrogate: function(e) {
    d = null != e && "" !== e ? e : null
  },
  getCategories: function() {
    return Object.keys(u)
  },
  getByName: function(e) {
    return Object.prototype.hasOwnProperty.call(l, e) ? l[e] : null
  },
  getByCategory: function(e) {
    return u[e]
  },
  translateInlineEmojiToSurrogates: function(e) {
    return e.replace(E, (e, t) => b(t, e))
  },
  maybeTranslateSurrogatesToInlineEmoji: function(e) {
    if (!y.test(e)) return null;
    let t = O(e, !0).map(e => "text" === e.type ? e.text : e.emojiName).join("");
    return t === e ? null : t
  },
  findInlineEmojisFromSurrogates: O,
  translateSurrogatesToInlineEmoji: function(e) {
    return O(e).map(e => "text" === e.type ? e.text : e.emojiName).join("")
  },
  convertNameToSurrogate: b,
  convertSurrogateToName: function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      s = n;
    return Object.prototype.hasOwnProperty.call(_, e) && (s = _[e]), t ? ":".concat(s, ":") : s
  },
  convertShortcutToName: function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      s = n;
    return Object.prototype.hasOwnProperty.call(p, e) && (s = p[e]), t ? ":".concat(s, ":") : s
  },
  forEach: e => i.each(c, e),
  all: () => c,
  numDiversitySprites: g,
  numNonDiversitySprites: m,
  EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  EMOJI_NAME_AND_DIVERSITY_RE: E,
  EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
  hasSurrogates: function(e) {
    return i.toArray(e).some(e => null != _[e])
  }
}