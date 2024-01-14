"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("627445"),
  r = s.n(n),
  o = s("446674"),
  i = s("669491"),
  c = s("77078"),
  u = s("731109"),
  d = s("208266"),
  f = s("697218"),
  E = s("153769"),
  p = s("701909"),
  h = s("49111"),
  m = s("586391"),
  N = s("782340"),
  _ = s("456652");

function T(e) {
  let {
    onComplete: t,
    onClose: s
  } = e, [n, T] = l.useState(null), [A, v] = l.useState(null), [S, x] = l.useState(!1), I = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser()), g = l.createRef();
  async function C(e) {
    e.preventDefault(), r(null != n, "Cannot submit null birthday."), x(!0);
    try {
      await u.submitDateOfBirth(n, m.AgeGateSource.NEW_USER_FLOW), t()
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth) u.preventUnderageRegistration(m.AgeGateSource.NEW_USER_FLOW), u.logoutUnderageNewUser(m.AgeGateSource.NEW_USER_FLOW), s();
      else {
        var a;
        (null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.username) != null ? v(N.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : v(null == e ? void 0 : e.body.message)
      }
    }
    x(!1)
  }
  l.useEffect(() => {
    null != I && null != I.nsfwAllowed && t()
  }, [I, t]);
  let O = l.useCallback(e => {
      T(e)
    }, [T]),
    b = l.useCallback(() => {
      var e;
      null === (e = g.current) || void 0 === e || e.focus()
    }, [g]);
  return null == I ? null : (0, a.jsxs)("form", {
    className: _.content,
    onSubmit: C,
    children: [(0, a.jsx)(E.default, {
      width: 56,
      height: 40,
      className: _.logo,
      color: i.default.unsafe_rawColors.BRAND_500.css
    }), (0, a.jsx)(c.Heading, {
      className: _.title,
      variant: "heading-xl/semibold",
      children: N.default.Messages.NUF_JOIN_SERVER_TITLE_2
    }), (0, a.jsx)(c.Text, {
      color: "text-normal",
      className: _.description,
      variant: "text-md/normal",
      children: N.default.Messages.NUF_AGE_GATE_BODY.format({
        helpURL: p.default.getArticleURL(h.HelpdeskArticles.AGE_GATE)
      })
    }), (0, a.jsx)(c.ThemeContextProvider, {
      theme: h.ThemeTypes.LIGHT,
      children: (0, a.jsx)(d.default, {
        required: !0,
        autoFocus: !0,
        wrapperClassName: _.formItem,
        label: N.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
        name: "birthday",
        onChange: O,
        onPopulated: b,
        error: A,
        value: n
      })
    }), (0, a.jsx)("div", {
      className: _.footer,
      children: (0, a.jsx)("div", {
        className: _.buttonWrapper,
        children: (0, a.jsx)(c.Button, {
          buttonRef: g,
          type: "submit",
          size: c.Button.Sizes.LARGE,
          submitting: S,
          disabled: null == n,
          fullWidth: !0,
          children: N.default.Messages.NEXT
        })
      })
    })]
  })
}