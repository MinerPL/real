"use strict";
r.r(t), r.d(t, {
  default: function() {
    return P
  }
});
var a = r("926607");
r("222007"), r("808653"), r("781738"), r("881410"), r("424973");
var n = r("37983"),
  i = r("884691"),
  l = r("10371"),
  o = r.n(l),
  s = r("675576"),
  c = r.n(s),
  d = r("917351"),
  u = r.n(d),
  h = r("703809"),
  p = r("95410"),
  f = r("497991"),
  m = r("928114"),
  g = r("111940"),
  y = r("133198"),
  b = r("77078"),
  x = r("841098"),
  k = r("810567"),
  v = r("945330"),
  C = r("811199"),
  S = r("694735");

function j() {
  let e = (0, a._)(["\n    import {defineColorTokens, themedToken} from '../tools/define';\n\n    const semanticTokenValues = {\n      ", "\n    };\n\n    export const semanticTokens = defineColorTokens(() => semanticTokenValues);\n    export type SemanticTokenValue = typeof semanticTokenValues;\n  "]);
  return j = function() {
    return e
  }, e
}

function T() {
  let e = (0, a._)(["\n      export const rawPalette = {\n        ", "\n      } as const;\n    "]);
  return T = function() {
    return e
  }, e
}
let w = {
    ...y.semanticColorTokens,
    ...f.componentColorTokens,
    ...m.gradients
  },
  N = {
    ...A(y.semanticColorTokens),
    ...A(f.componentColorTokens)
  },
  E = ["100", "130", "160", "200", "230", "260", "300", "330", "345", "360", "400", "430", "460", "500", "530", "560", "600", "630", "645", "660", "700", "730", "760", "800", "830", "860", "900"];

function L(e) {
  var t;
  let r = "string" == typeof e ? 1 : null !== (t = e.opacity) && void 0 !== t ? t : 1,
    a = "string" == typeof e ? e : e.color;
  return {
    color: a,
    opacity: r
  }
}

function _(e) {
  return "name" in e
}

function A(e) {
  let t = {};
  return Object.keys(e).forEach(r => {
    let a = e[r];
    if ("name" in a) a = function e(t) {
      let r = w[t.name];
      return "name" in r ? e(r) : r
    }(a);
    t[r] = {
      light: L(a.light),
      dark: L(a.dark),
      darker: L(null != a.darker ? a.darker : a.dark),
      midnight: L(null != a.midnight ? a.midnight : a.dark)
    }
  }), t
}

function R(e, t) {
  let [r, a] = i.useState(() => {
    let r = p.default.get(e);
    return null != r ? r : t
  });
  return i.useEffect(() => {
    p.default.set(e, r)
  }, [e, r]), [r, a]
}

function P() {
  let e = (0, x.useTheme)(),
    [{
      rawPalette: t,
      semanticTokens: r
    }, a, l, s, d, p] = function(e, t) {
      let [r, a] = R("".concat(e, "-states"), [t]), [n, l] = R("".concat(e, "-index"), 0), o = r[n], s = i.useCallback(e => {
        let t = [e, ...r].slice(0, 20);
        a(t), l(0)
      }, [l, a, r]), c = i.useCallback(() => {
        l(Math.min(r.length - 1, n + 1))
      }, [n, l, r.length]), d = i.useCallback(() => {
        l(Math.max(0, n - 1))
      }, [n, l]), u = n < r.length - 1, h = n > 0;
      return [o, s, c, d, u, h]
    }("color-override-03-03-23", {
      rawPalette: g.rawPalette,
      semanticTokens: N
    }),
    [f, m] = i.useState(""),
    [y, w] = i.useState({}),
    [L, _] = i.useState({}),
    A = i.useMemo(() => {
      let e = Object.keys(t);
      return e.reduce((e, t) => [...e, {
        value: t,
        label: t
      }], [])
    }, [t]),
    P = i.useCallback((e, n, i, l) => {
      let o = u.cloneDeep(r);
      o[e][n] = {
        color: i,
        opacity: l
      }, a({
        rawPalette: t,
        semanticTokens: o
      })
    }, [r, t, a]),
    O = i.useMemo(() => {
      let a = Object.keys(r).map(t => {
          let a = r[t],
            {
              color: n,
              opacity: i
            } = a[e];
          return "--".concat(t, ": hsl(var(--").concat(n.replace(".", "-"), "-hsl) / ").concat(i, ");")
        }),
        n = Object.keys(t).flatMap(e => {
          let {
            hex: r
          } = t[e], {
            h: a,
            s: n,
            l: i
          } = function(e) {
            let [t, r, a] = "transparent" === e ? [0, 0, 0] : o(e).hsl(), n = isNaN(t) ? 0 : u.round(t, 1), i = u.round(100 * a, 1), l = u.round(100 * r, 1);
            return {
              h: n,
              s: l,
              l: i
            }
          }(r), l = u.kebabCase(e);
          return ["--".concat(l, "-hsl: ").concat(a, " calc(var(--saturation-factor, 1) * ").concat(n, "%) ").concat(i, "% !important;"), "--".concat(l, ": hsl(var(--").concat(l, "-hsl)) !important;")]
        });
      return "\n      .theme-".concat(e, " {\n        ").concat(a.join("\n"), "\n\n        ").concat(Object.keys(y).filter(e => y[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n\n        ").concat(Object.keys(L).filter(e => L[e]).map(e => "--".concat(e, ": magenta !important;")).join("\n"), "\n      }\n\n      html {\n        ").concat(n.join("\n"), "\n      }\n    ")
    }, [e, r, t, y, L]),
    I = i.useCallback(e => {
      let t = "",
        r = "",
        a = !1;
      return c(j(), Object.keys(e).map(n => {
        (r = n.split("-")[0]) !== t ? (t = r, a = !0) : a = !1;
        let i = e[n],
          l = i.light,
          o = i.dark,
          s = i.midnight,
          c = [
            ["dark", o],
            ["light", l]
          ];
        (s.opacity !== o.opacity || s.color !== o.color) && c.push(["midnight", s]);
        let d = c.map(e => {
            let [t, {
              color: r,
              opacity: a
            }] = e;
            return 1 === a ? "".concat(t, ': "').concat(r, '"') : "".concat(t, ': { color: "').concat(r, '", opacity: ').concat(a, " }")
          }).join(",\n"),
          u = '"'.concat(n, '": themedToken({ ').concat(d, " })");
        return "".concat(a ? "\n" : "").concat(u)
      }).join(",\n"))
    }, []),
    M = i.useCallback(e => c(T(), Object.keys(e).map(t => '"'.concat(t, '": {hex: "').concat(e[t].hex, '"}'))), []),
    B = i.useCallback(e => {
      let t = {};
      Object.keys(e).forEach(r => {
        Object.keys(e[r]).map(a => {
          let n = [...E];
          "primary" !== r && (n = n.filter(e => "645" !== e)), t["".concat(r, ".").concat(n[+a])] = {
            hex: e[r][a]
          }
        })
      }), a({
        rawPalette: t,
        semanticTokens: r
      })
    }, [r, a]);
  return (0, n.jsxs)("div", {
    className: S.panel,
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [(0, n.jsxs)("div", {
      className: S.toolbar,
      style: {
        flex: "0 0 34px",
        padding: "0 4px"
      },
      children: [(0, n.jsxs)("div", {
        className: S.toolbarGroup,
        children: [(0, n.jsx)(b.Button, {
          onClick: l,
          disabled: !d,
          size: b.Button.Sizes.MIN,
          children: "Undo"
        }), (0, n.jsx)(b.Button, {
          onClick: s,
          disabled: !p,
          size: b.Button.Sizes.MIN,
          children: "Redo"
        })]
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsxs)("div", {
        className: S.toolbarGroup,
        children: [(0, n.jsx)("span", {
          className: S.toolbarGroupLabel,
          children: "Raw"
        }), (0, n.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.readText().then(e => {
              B(JSON.parse(e))
            })
          },
          children: "Import"
        }), (0, n.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(M(t))
          },
          children: "Export"
        })]
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsxs)("div", {
        className: S.toolbarGroup,
        children: [(0, n.jsx)("span", {
          className: S.toolbarGroupLabel,
          children: "Semantic"
        }), (0, n.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          onClick: () => {
            navigator.clipboard.writeText(I(r))
          },
          children: "Export"
        })]
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsx)("div", {
        className: S.toolbarGroup,
        children: (0, n.jsx)(b.Button, {
          size: b.Button.Sizes.MIN,
          type: "reset",
          color: b.Button.Colors.RED,
          onClick: () => {
            a({
              rawPalette: g.rawPalette,
              semanticTokens: N
            })
          },
          children: "Reset all"
        })
      }), (0, n.jsx)("div", {
        className: S.toolbarDivider
      }), (0, n.jsxs)("div", {
        className: S.toolbarGroup,
        style: {
          flexGrow: 1
        },
        children: [(0, n.jsx)(k.default, {
          size: k.default.Sizes.SMALL,
          query: f,
          onChange: m,
          onClear: () => m(""),
          placeholder: "Search tokens",
          "aria-label": "Search tokens"
        }), " "]
      })]
    }), (0, n.jsx)(b.ScrollerThin, {
      children: (0, n.jsx)("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "min-content 1fr 1fr min-content min-content",
          gap: 8,
          margin: 8,
          alignItems: "center"
        },
        children: Object.keys(N).filter(e => "" === f || e.toLowerCase().includes(f)).map(t => {
          var a;
          let l = N[t][e],
            o = null == r[t] ? {
              ...l
            } : r[t][e],
            s = o.color !== l.color || o.opacity !== l.opacity;
          return (0, n.jsxs)(i.Fragment, {
            children: [(0, n.jsx)("div", {
              onMouseEnter: () => {
                _(e => ({
                  ...e,
                  [t]: !0
                }))
              },
              onMouseLeave: () => {
                _(e => ({
                  ...e,
                  [t]: !1
                }))
              },
              children: (0, n.jsx)(b.Checkbox, {
                value: y[t],
                onChange: () => {
                  w(e => ({
                    ...e,
                    [t]: !e[t]
                  }))
                }
              })
            }), (0, n.jsx)("span", {
              children: t
            }), (0, n.jsx)(b.SearchableSelect, {
              value: o.color,
              options: A,
              onChange: r => {
                P(t, e, r, o.opacity)
              },
              renderOptionPrefix: t => null == t ? null : (0, n.jsx)("div", {
                style: {
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "var(--".concat(t.value.replace(".", "-"), ")"),
                  border: "1px solid ".concat("dark" === e ? "white" : "black")
                }
              }),
              popoutLayerContext: C.devToolsLayerContext
            }), (0, n.jsx)(b.TextInput, {
              type: "number",
              style: {
                width: "4em"
              },
              value: null === (a = o.opacity) || void 0 === a ? void 0 : a.toString(),
              onChange: r => {
                "" !== r && P(t, e, o.color, parseFloat(r))
              }
            }), (0, n.jsx)(b.Clickable, {
              style: s ? {} : {
                opacity: 0,
                pointerEvents: "none"
              },
              onClick: () => {
                var r;
                s && P(t, e, l.color, null !== (r = l.opacity) && void 0 !== r ? r : 1)
              },
              children: (0, n.jsx)(v.default, {
                width: 16,
                height: 16
              })
            })]
          }, t)
        })
      })
    }), (0, n.jsx)(h.Helmet, {
      children: (0, n.jsx)("style", {
        id: "devtools-color-overrides",
        children: O
      })
    })]
  })
}