"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  r = n("77078"),
  s = n("580906"),
  i = n("926622");
let d = e => {
  let {
    element: t,
    onChange: n,
    initialOption: d
  } = e, [u, o] = l.useState("");
  l.useEffect(() => {
    o(null != d ? d : "")
  }, [d]);
  let c = t.name,
    {
      title: m,
      options: f
    } = t.data,
    _ = l.useCallback(e => {
      null != e && (o(e), n(e))
    }, [n]);
  return (0, a.jsxs)("div", {
    className: i.marginBottom8,
    children: [null != m && (0, a.jsx)("div", {
      className: i.marginBottom8,
      children: (0, a.jsxs)(r.Text, {
        variant: "text-sm/bold",
        children: [m, t.should_submit_data && (0, a.jsx)("span", {
          className: s.required,
          children: "*"
        })]
      })
    }), (0, a.jsx)(r.SingleSelect, {
      value: u,
      onChange: _,
      options: f
    })]
  }, c)
};
var u = e => {
  let {
    elements: t,
    onChange: n,
    state: l
  } = e, r = t.map(e => {
    var t;
    let r = e.name;
    return (0, a.jsx)(d, {
      element: e,
      initialOption: null !== (t = null == l ? void 0 : l[r]) && void 0 !== t ? t : void 0,
      onChange: e => n(r, e)
    }, r)
  });
  return (0, a.jsx)("div", {
    children: r
  })
}