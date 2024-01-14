"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
}), a("222007"), a("424973");
var n = a("37983"),
  l = a("884691"),
  r = a("414456"),
  o = a.n(r),
  s = a("866227"),
  i = a.n(s),
  u = a("77078"),
  c = a("414943"),
  d = a("782340"),
  f = a("512427");
let E = i().localeData().months(),
  A = Array.from(Array(31).keys()).map(e => ({
    value: e + 1,
    label: "".concat(e + 1)
  })),
  h = Array.from(Array(12).keys()).map(e => ({
    value: e + 1,
    label: E[e]
  })),
  p = /[a-zA-Z0-9]/;

function _(e) {
  let {
    options: t,
    selectOption: a,
    children: r
  } = e, [o, s] = l.useState("");
  l.useEffect(() => {
    if ("" !== o) {
      let e = setTimeout(() => s(""), 1e3);
      return () => clearTimeout(e)
    }
  }, [o, s]);
  let i = l.useCallback(e => {
    if (p.test(e.key)) {
      let n = "".concat(o).concat(e.key.toLowerCase()),
        l = t.find(e => e.label.toLowerCase().startsWith(n));
      null != l && a(l.value), s(n)
    }
  }, [a, s, o, t]);
  return (0, n.jsx)("div", {
    onKeyDown: i,
    children: r
  })
}

function m() {
  let e = i().localeData().longDateFormat("L"),
    t = e.indexOf("D"),
    a = e.indexOf("M"),
    n = e.indexOf("Y");
  return (-1 === t || -1 === a || -1 === n) && (t = 0, a = 1, n = 2), [{
    index: t,
    type: "day"
  }, {
    index: a,
    type: "month"
  }, {
    index: n,
    type: "year"
  }].sort((e, t) => e.index < t.index ? -1 : 1)
}
let g = l.forwardRef(function(e, t) {
  let {
    value: a,
    wrapperClassName: r,
    onChange: s,
    onPopulated: E,
    error: p,
    autoFocus: g,
    required: v
  } = e, {
    day: G,
    setDay: T,
    month: b,
    setMonth: y,
    year: M,
    setYear: x
  } = function(e) {
    let t = null,
      a = null,
      n = null;
    null != e && (t = e.date(), a = e.month() + 1, n = e.year());
    let [r, o] = l.useState(t), [s, i] = l.useState(a), [u, c] = l.useState(n);
    return {
      day: r,
      setDay: o,
      month: s,
      setMonth: i,
      year: u,
      setYear: c
    }
  }(a), R = l.useMemo(() => null != G && null != b && null != M ? i("".concat(G, "/").concat(b, "/").concat(M), "DD/MM/YYYY") : null, [G, b, M]);
  l.useEffect(() => {
    s((null == R ? void 0 : R.isValid()) ? R : null)
  }, [R, s]);
  let C = p;
  null != R && !R.isValid() && (C = d.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
  let O = function() {
      let e = new Date().getFullYear(),
        t = l.useRef(Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        })));
      return l.useEffect(() => {
        t.current = Array.from(Array(150).keys()).map(t => ({
          value: e - t - 3,
          label: "".concat(e - t - 3)
        }))
      }, [e]), t.current
    }(),
    [S, N] = l.useState(g ? 0 : -1),
    k = l.useRef(null),
    D = l.useRef(null),
    I = l.useRef(null),
    B = l.useMemo(m, []),
    j = l.useCallback(() => {
      var e, t, a, n;
      switch (null === (e = B[S]) || void 0 === e ? void 0 : e.type) {
        case "day":
          null === (t = k.current) || void 0 === t || t.focus();
          break;
        case "month":
          null === (a = D.current) || void 0 === a || a.focus();
          break;
        case "year":
          null === (n = I.current) || void 0 === n || n.focus()
      }
    }, [S, k, D, I, B]);
  l.useEffect(() => {
    setTimeout(j, 500)
  }, []), l.useEffect(() => {
    if (S >= B.length) {
      null == E || E();
      return
    }
    j()
  }, [S, j]);
  let F = [];
  for (let e = 0; e < 3; e++) {
    let {
      type: t
    } = B[e];
    switch (t) {
      case "day":
        F.push({
          key: "day",
          input: (0, n.jsx)(_, {
            options: A,
            selectOption: T,
            children: (0, n.jsx)(c.default, {
              ref: k,
              className: f.inputDay,
              "aria-label": d.default.Messages.AGE_GATE_DOB_DAY,
              menuPlacement: c.default.MenuPlacements.TOP,
              placeholder: (0, n.jsx)("span", {
                "aria-hidden": !0,
                children: d.default.Messages.AGE_GATE_DOB_DAY
              }),
              options: A,
              value: G,
              onChange: t => {
                let {
                  value: a
                } = t;
                T(a), N(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "month":
        F.push({
          key: "month",
          input: (0, n.jsx)(_, {
            options: h,
            selectOption: y,
            children: (0, n.jsx)(c.default, {
              ref: D,
              className: f.inputMonth,
              "aria-label": d.default.Messages.AGE_GATE_DOB_MONTH,
              menuPlacement: c.default.MenuPlacements.TOP,
              placeholder: (0, n.jsx)("span", {
                "aria-hidden": !0,
                children: d.default.Messages.AGE_GATE_DOB_MONTH
              }),
              options: h,
              value: b,
              onChange: t => {
                let {
                  value: a
                } = t;
                y(a), N(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        });
        break;
      case "year":
        F.push({
          key: "year",
          input: (0, n.jsx)(_, {
            options: O,
            selectOption: x,
            children: (0, n.jsx)(c.default, {
              ref: I,
              className: f.inputYear,
              "aria-label": d.default.Messages.AGE_GATE_DOB_YEAR,
              menuPlacement: c.default.MenuPlacements.TOP,
              placeholder: (0, n.jsx)("span", {
                "aria-hidden": !0,
                children: d.default.Messages.AGE_GATE_DOB_YEAR
              }),
              options: O,
              value: M,
              onChange: t => {
                let {
                  value: a
                } = t;
                x(a), N(e + 1)
              },
              maxMenuHeight: 215
            })
          })
        })
    }
  }
  return (0, n.jsxs)("fieldset", {
    className: o(f.container, r),
    children: [(0, n.jsx)(u.FormTitle, {
      tag: "legend",
      required: v,
      error: C,
      children: d.default.Messages.AGE_GATE_DATE_OF_BIRTH
    }), (0, n.jsx)("div", {
      className: f.inputs,
      children: F.map((e, t) => {
        let {
          key: a,
          input: l
        } = e;
        return (0, n.jsx)("div", {
          tabIndex: t + 1,
          className: f[a],
          children: l
        }, a)
      })
    })]
  })
});
var v = g