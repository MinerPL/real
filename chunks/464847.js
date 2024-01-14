"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("222007"), s("808653");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("701909"),
  d = s("995482"),
  u = s("16207"),
  c = s("143460"),
  E = s("49111"),
  _ = s("782340"),
  T = s("493265");
let I = o.default.getArticleURL(E.HelpdeskArticles.GUILD_AUTOMOD_REGEX);

function S(e) {
  let {
    hasErrors: t,
    text: s,
    errorText: n
  } = e;
  return t ? (0, a.jsx)("div", {
    className: i(T.subtext),
    children: (0, a.jsx)(r.Text, {
      className: i(T.errorSpan),
      variant: "text-xs/medium",
      color: "text-danger",
      children: null != n ? n : _.default.Messages.GUILD_AUTOMOD_REGEX_ERROR_HELP.format({
        helpArticle: I
      })
    })
  }) : (0, a.jsx)(r.Text, {
    className: T.subtext,
    variant: "text-xs/medium",
    color: "text-muted",
    children: s
  })
}

function N(e) {
  var t, s;
  let {
    rule: l,
    onChangeText: r,
    className: o
  } = e, {
    patterns: E,
    valueError: N,
    errors: g,
    validatePatternsChanged: f,
    validateEditingValueChanged: A
  } = (0, u.default)(l, r), [L] = n.useState(() => ({
    tags: E,
    value: "",
    selections: [],
    isSelecting: !1
  })), m = n.useMemo(() => g.reduce((e, t) => {
    let {
      pattern: s,
      message: a,
      description: n,
      erroringCharacterLength: l = s.length,
      erroringCharacterOffset: i = 0
    } = t, r = E.find(e => e === s);
    return null == r ? e : (e[s] = {
      value: s,
      message: null != n ? n : a,
      erroringCharacterLength: l,
      erroringCharacterOffset: i
    }, e)
  }, {}), [g, E]), C = n.useCallback(e => {
    f(e, E)
  }, [f, E]), O = n.useCallback(e => {
    A(e)
  }, [A]);
  return (0, a.jsxs)("div", {
    className: i(T.keywordsContainer, o),
    children: [(0, a.jsx)(d.default, {
      placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
      initialValue: L,
      onChangeTags: C,
      onChangeNewTagValue: O,
      tagErrors: m,
      maxTags: c.MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER
    }), (0, a.jsx)(S, {
      text: _.default.Messages.GUILD_AUTOMOD_REGEX_SUBTEXT.format({
        helpArticle: I
      }),
      hasErrors: g.length > 0 || null != N,
      errorText: null !== (s = null === (t = g.find(e => {
        let {
          pattern: t
        } = e;
        return t === u.SCHEMA_ERROR_KEY
      })) || void 0 === t ? void 0 : t.message) && void 0 !== s ? s : null == N ? void 0 : N.message
    })]
  })
}