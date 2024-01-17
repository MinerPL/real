"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007"), n("424973");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  r = n.n(l),
  i = n("866227"),
  o = n.n(i),
  u = n("77078"),
  d = n("414943"),
  c = n("782340"),
  f = n("512427");
let E = o().localeData().months(),
  h = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  _ = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: E[e]
  })),
  m = /[a-zA-Z0-9]/;

function g(e) {
  let {
    options: t,
    selectOption: n,
    children: l
  } = e, [r, i] = a.useState("");
  a.useEffect(() => {
    if ("" !== r) {
      let e = setTimeout(() => i(""), 1e3);
      return () => clearTimeout(e)
    }
  }, [r, i]);
  let o = a.useCallback(e => {
    if (m.test(e.key)) {
      let s = "".concat(r).concat(e.key.toLowerCase()),
        a = t.find(e => e.label.toLowerCase().startsWith(s));
      null != a && n(a.value), i(s)
    }
  }, [n, i, r, t]);
  return (0, s.jsx)("div", {
    onKeyDown: o,
    children: l
  })
}

function p() {
  let e = o().localeData().longDateFormat("L"),
    t = e.indexOf("D"),
    n = e.indexOf("M"),
    s = e.indexOf("Y");
  return (-1 === t || -1 === n || -1 === s) && (t = 0, n = 1, s = 2), [{
    index: t,
    type: "day"
  }, {
    index: n,
    type: "month"
  }, {
    index: s,
    type: "year"
  }].sort((e, t) => e.index < t.index ? -1 : 1)
}
let A = a.forwardRef(function(e, t) {
  let {
    value: n,
    wrapperClassName: l,
    onChange: i,
    onPopulated: E,
    error: m,
    autoFocus: A,
    required: T
  } = e, {
    day: R,
    setDay: I,
    month: N,
    setMonth: S,
    year: C,
    setYear: L
  } = function(e) {
    let t = null,
      n = null,
      s = null;
    null != e && (t = e.date(), n = e.month() + 1, s = e.year());
    let [l, r] = a.useState(t), [i, o] = a.useState(n), [u, d] = a.useState(s);
    return {
      day: l,
      setDay: r,
      month: i,
      setMonth: o,
      year: u,
      setYear: d
    }
  }(n), M = a.useMemo(() => null != R && null != N && null != C ? o("".concat(R, "/").concat(N, "/").concat(C), "DD/MM/YYYY") : null, [R, N, C]);
  a.useEffect(() => {
    i((null == M ? void 0 : M.isValid()) ? M : null)
  }, [M, i]);
  let O = m;
  null != M && !M.isValid() && (O = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
  let x = function() {
      let e = new Date().getFullYear(),
        t = a.useRef(Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        })));
      return a.useEffect(() => {
        t.current = Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        }))
      }, [e]), t.current
    }(),
    [v, D] = a.useState(A ? 0 : -1),
    U = a.useRef(null),
    y = a.useRef(null),
    G = a.useRef(null),
    b = a.useMemo(p, []),
    j = a.useCallback(() => {
      var e, t, n, s;
      switch (null === (e = b[v]) || void 0 === e ? void 0 : e.type) {
        case "day":
          null === (t = U.current) || void 0 === t || t.focus();
          break;
        case "month":
          null === (n = y.current) || void 0 === n || n.focus();
          break;
        case "year":
          null === (s = G.current) || void 0 === s || s.focus()
      }
    }, [v, U, y, G, b]);
  a.useEffect(() => {
    setTimeout(j, 500)
  }, []), a.useEffect(() => {
    if (v >= b.length) {
      null == E || E();
      return
    }
    j()
  }, [v, j]);
  let P = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = b[e];
    switch (t) {
      case "day":
        P.push({
          key: "day",
          input: (0, s.jsx)(g, {
            options: h,
            selectOption: I,
            children: (0, s.jsx)(d.default, {
              ref: U,
              className: f.inputDay,
              "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
              menuPlacement: d.default.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: c.default.Messages.AGE_GATE_DOB_DAY
              }),
              options: h,
              value: R,
              onChange: t => {
                let {
                  value: n
                } = t;
                I(n), D(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "month":
        P.push({
          key: "month",
          input: (0, s.jsx)(g, {
            options: _,
            selectOption: S,
            children: (0, s.jsx)(d.default, {
              ref: y,
              className: f.inputMonth,
              "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
              menuPlacement: d.default.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: c.default.Messages.AGE_GATE_DOB_MONTH
              }),
              options: _,
              value: N,
              onChange: t => {
                let {
                  value: n
                } = t;
                S(n), D(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "year":
        P.push({
          key: "year",
          input: (0, s.jsx)(g, {
            options: x,
            selectOption: L,
            children: (0, s.jsx)(d.default, {
              ref: G,
              className: f.inputYear,
              "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
              menuPlacement: d.default.MenuPlacements.TOP,
              placeholder: (0, s.jsx)("span", {
                "aria-hidden": !0,
                children: c.default.Messages.AGE_GATE_DOB_YEAR
              }),
              options: x,
              value: C,
              onChange: t => {
                let {
                  value: n
                } = t;
                L(n), D(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        })
    }
  }
  return (0, s.jsxs)("fieldset", {
    className: r(f.container, l),
    children: [(0, s.jsx)(u.FormTitle, {
      tag: "legend",
      required: T,
      error: O,
      children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
    }), (0, s.jsx)("div", {
      className: f.inputs,
      children: P.map((e, t) => {
        let {
          key: n,
          input: a
        } = e;
        return (0, s.jsx)("div", {
          tabIndex: t + 1,
          className: f[n],
          children: a
        }, n)
      })
    })]
  })
});
var T = A