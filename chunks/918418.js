"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  r = n("77078"),
  s = n("367376"),
  i = n("442791"),
  d = n("782340"),
  u = n("45853"),
  o = n("926622");
let c = e => {
  let {
    data: {
      title: t,
      subtitle: n,
      placeholder: c,
      rows: m,
      character_limit: f,
      pattern: _
    },
    onChange: h,
    initialText: E,
    isRequired: v
  } = e, R = l.useRef(s.default.reactParserFor({
    ...s.default.defaultRules,
    link: i.LinkMarkupRule
  })), [x, p] = l.useState(""), [g, N] = l.useState("");
  l.useEffect(() => {
    p(null != E ? E : "")
  }, [E]);
  let T = l.useCallback(e => {
    let t = null != _ ? new RegExp(_) : null;
    null != t && null == t.exec(e) ? (N(d.default.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR), p(""), h("")) : null != e && (N(""), p(e), h(e))
  }, [h, _]);
  return (0, a.jsxs)("div", {
    className: o.marginBottom8,
    children: [null != t && (0, a.jsx)("div", {
      className: o.marginBottom8,
      children: (0, a.jsxs)(r.Text, {
        variant: "text-sm/bold",
        children: [t, v && (0, a.jsx)("span", {
          className: u.required,
          children: "*"
        })]
      })
    }), (0, a.jsx)(r.TextArea, {
      maxLength: f,
      onChange: T,
      value: x,
      error: g,
      rows: m,
      placeholder: c,
      autoFocus: !0
    }), null != n && (0, a.jsx)("div", {
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: R.current(n)
      })
    })]
  })
};
var m = e => {
  let {
    elements: t,
    onChange: n,
    state: l
  } = e, r = t.map(e => {
    var t;
    let r = e.name;
    return (0, a.jsx)(c, {
      data: e.data,
      onChange: e => n(r, e),
      initialText: null !== (t = null == l ? void 0 : l[r]) && void 0 !== t ? t : void 0,
      isRequired: e.should_submit_data
    }, r)
  });
  return (0, a.jsx)("div", {
    children: r
  })
}