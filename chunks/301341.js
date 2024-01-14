"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("201074"),
  d = s("782340"),
  u = s("581796");

function c(e) {
  let {
    onChangeText: t,
    maxWordCount: s,
    className: l,
    textAreaClassName: c,
    subtitleText: E,
    initialValue: _
  } = e, T = n.useMemo(() => null != _ ? _ : [], [_]), {
    value: I,
    onChange: S,
    errorMessage: N
  } = (0, o.default)(t, _, s);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i(u.keywordsContainer, l),
      children: [(0, a.jsx)(r.TextAreaAutosize, {
        className: i(u.keywordsTextArea, c),
        value: I,
        onChange: S,
        placeholder: d.default.Messages.GUILD_AUTOMOD_KEYWORDS_PLACEHOLDER
      }), (0, a.jsx)(r.Text, {
        className: u.keywordsCounter,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(T.length, " / ").concat(s)
      })]
    }), null != N ? (0, a.jsx)(r.Text, {
      className: u.paddingTop,
      variant: "text-xs/medium",
      color: "text-danger",
      children: N
    }) : (0, a.jsx)(r.Text, {
      className: u.paddingTop,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: null != E ? E : d.default.Messages.GUILD_AUTOMOD_KEYWORD_ENTRY_HINT
    })]
  })
}