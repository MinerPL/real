"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  u = n("798609"),
  o = n("307311"),
  i = n("45783");

function r(e) {
  let t;
  let {
    type: n,
    style: r,
    label: d,
    placeholder: c,
    minLength: m,
    maxLength: p,
    required: f,
    value: E,
    indices: C
  } = e, [S, T] = a.useState(null != E ? E : ""), {
    state: N,
    executeStateUpdate: v,
    error: h
  } = (0, o.useComponentState)(e, null != E ? {
    type: n,
    value: E
  } : void 0);
  a.useEffect(() => {
    (null == N ? void 0 : N.type) === n && T(N.value)
  }, [n, N]);
  let _ = {
    name: d,
    value: S,
    placeholder: c,
    minLength: m,
    maxLength: p,
    required: f,
    onChange: e => {
      T(e), v({
        type: n,
        value: e
      })
    },
    autoFocus: 0 === C[0]
  };
  switch (r) {
    case u.TextComponentStyle.SMALL:
      t = (0, l.jsx)(s.TextInput, {
        ..._
      });
      break;
    case u.TextComponentStyle.PARAGRAPH:
      t = (0, l.jsx)(s.TextArea, {
        ..._
      })
  }
  return (0, l.jsx)(s.FormItem, {
    title: d,
    required: f,
    className: i.formItem,
    error: h,
    children: t
  })
}