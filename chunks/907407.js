"use strict";
let t, o;
E.r(_), E.d(_, {
  FormattedMessage: function() {
    return T
  },
  setUpdateRules: function() {
    return S
  },
  getMessage: function() {
    return N
  }
}), E("222007"), E("781738");
var n = E("860347"),
  r = E.n(n),
  i = E("132710"),
  a = E.n(i),
  I = E("841206"),
  s = E("853812");
class T {
  format(e) {
    if (!this.hasMarkdown) return this.intlMessage.format(e);
    let [_, E] = this.getContext(e);
    return t(this.intlMessage.format(_), _, E)
  }
  astFormat(e) {
    let [_, E] = this.getContext(e);
    return o(this.intlMessage.format(_), _, E)
  }
  plainFormat(e) {
    return this.intlMessage.format(e)
  }
  getContext(e) {
    let _ = s.UNSAFE_RE.test(this.message),
      E = {};
    if (_) {
      let _ = 0;
      for (let [t, o] of Object.entries(e)) this.message.includes("!!{".concat(t, "}!!")) && (E[++_] = o, e[t] = _)
    }
    return [e, E]
  }
  constructor(e, _, E) {
    this.message = E ? e : e.replace(s.UNSAFE_RE_ALL, ""), this.hasMarkdown = E, this.intlMessage = new r(this.message, _)
  }
}

function S(e) {
  t = function(e, _) {
    let E = a.parserFor(_(e)),
      t = a.reactFor(a.ruleOutput(e, "react"));
    return (e, _, o) => {
      let n = !e.includes("\n\n");
      return !n && (e += "\n\n"), t(E(e, {
        inline: n,
        context: _,
        unsafeContext: o
      }))
    }
  }(I.default, e), o = function(e) {
    let _ = a.parserFor(e);
    return (e, E, t) => _(e + "\n\n", {
      inline: !1,
      context: E,
      unsafeContext: t
    })
  }(I.default)
}

function N(e, _) {
  if (null == e) return "";
  null == t && S(E("186372").default), e = e.replace(/^\n+|\n+$/g, "");
  let o = s.FORMAT_RE.test(e),
    n = s.MARKDOWN_RE.test(e);
  return o || n ? new T(e, _, n) : e
}