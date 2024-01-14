"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
}), l("222007");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("646240"),
  c = l("49111"),
  o = l("782340"),
  d = l("335839"),
  u = a.forwardRef(function(e, t) {
    let {
      query: l,
      canShowCta: n = !1,
      onChange: u,
      onSubmit: p,
      className: m
    } = e, [_, f] = a.useState(!1);
    return (0, i.jsx)(r.default, {
      ref: t,
      className: s(d.search, m),
      label: o.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
      placeholder: o.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
      searchTerm: l,
      cta: n && _ && l.length > 0 ? o.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null,
      onChange: u,
      onClear: () => u(""),
      onFocus: () => f(!0),
      onBlur: () => f(!1),
      onKeyPress: e => {
        e.charCode === c.KeyboardKeys.ENTER && (null == p || p())
      },
      autoFocus: !0
    })
  })