"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("95410"),
  d = s("77078"),
  u = s("54239"),
  c = s("452804"),
  S = s("304580"),
  E = s("206230"),
  f = s("489740"),
  T = s("355025"),
  m = s("773336"),
  _ = s("161778"),
  g = s("49111"),
  h = s("782340"),
  I = s("840280");
let N = [{
  label: "Latin alphabet",
  value: "aBcDeFgHiJkLmNoPqRsTuVwXyZ"
}, {
  label: "Latin pangram",
  value: "The quick brown fox jumps over the lazy dog"
}, {
  label: "Greek alphabet",
  value: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΆΈΉΊΌΎΏ"
}, {
  label: "Greek pangram",
  value: "ΤΑΧΊΣΤΗ ΑΛΏΠΗΞ ΒΑΦΉΣ ΨΗΜΈΝΗ ΓΗ, ΔΡΑΣΚΕΛΊΖΕΙ ΥΠΈΡ ΝΩΘΡΟΎ ΚΥΝΌΣ"
}, {
  label: "Cyrillic alphabet",
  value: "АБВГЃҐДЕЀЁЖЗИЙЍКЌЛМНОПРСТУЎФХЧЦШЩЏЬЪЫЉЊЅЄЭІЇЈЋЮЯЂѢѲѴ"
}, {
  label: "Cyrillic pangram",
  value: "В ЧАЩАХ ЮГА ЖИЛ БЫ ЦИТРУС? ДА, НО ФАЛЬШИВЫЙ ЭКЗЕМПЛЯР!"
}, {
  label: "Custom",
  value: "custom"
}];

function p(e, t) {
  let [s, a] = n.useState(() => {
    let s = o.default.get(e);
    return null != s ? s : t
  });
  return n.useEffect(() => {
    o.default.set(e, s)
  }, [e, s]), [s, a]
}

function C() {
  let [e, t] = n.useState(Math.round(window.outerWidth / window.innerWidth * 100)), {
    platformZoom: s,
    theme: l
  } = (0, r.useStateFromStoresObject)([_.default, E.default], () => ({
    theme: _.default.theme,
    platformZoom: E.default.zoom
  })), [o, C] = n.useState(""), A = ["normal", "medium", "semibold", "bold", "extrabold"], O = new Map([
    ["normal", 400],
    ["medium", 500],
    ["semibold", 600],
    ["bold", 700],
    ["extrabold", 800]
  ]);
  n.useEffect(() => {
    !m.isPlatformEmbedded && window.addEventListener("resize", () => {
      t(Math.round(window.outerWidth / window.innerWidth * 100))
    })
  }, []);
  let x = m.isPlatformEmbedded ? s : e,
    R = (0, r.useStateFromStores)([f.default], () => {
      var e, t;
      return (0, T.probablyHasBuildOverride)() ? null === (t = f.default.getCurrentBuildOverride()) || void 0 === t ? void 0 : null === (e = t.overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    [M, v] = p("playground-overrideText", null),
    [D, L] = p("playground-defaultText", N[0].value),
    P = n.useCallback(e => {
      let t = N.find(t => {
        let {
          value: s
        } = t;
        return s === e
      });
      "" === e || null == e ? (L(N[0].value), v(null)) : null != t ? L(t.value) : (L("custom"), v(e))
    }, [v, L]);
  return (0, a.jsx)("div", {
    className: I.fullscreen,
    style: "" !== o ? {
      "--playground-font-family": o
    } : {},
    children: (0, a.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      children: [(0, a.jsxs)("div", {
        className: I.toolbar,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsxs)(d.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block"
            },
            children: ["Zoom: ", x, "%"]
          }), null != R ? (0, a.jsxs)(d.Text, {
            tag: "div",
            variant: "heading-lg/bold",
            style: {
              display: "inline-block",
              marginLeft: "1em"
            },
            color: "header-secondary",
            children: ["(", R.id, ")"]
          }) : null]
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)(d.SingleSelect, {
            className: I.select,
            options: N,
            onChange: e => P(e),
            value: D
          })
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)("div", {
            className: I.input,
            children: (0, a.jsx)(d.TextInput, {
              placeholder: "Enter custom input...",
              value: null != M ? M : "",
              onChange: P
            })
          })
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)("div", {
            className: I.input,
            children: (0, a.jsx)(d.TextInput, {
              placeholder: "Font family...",
              value: o,
              onChange: C
            })
          })
        }), (0, a.jsx)(d.FormItem, {
          children: (0, a.jsx)(d.RadioGroup, {
            withTransparentBackground: !0,
            className: I.theme,
            orientation: "horizontal",
            options: [{
              name: h.default.Messages.THEME_DARK,
              value: g.ThemeTypes.DARK
            }, {
              name: h.default.Messages.THEME_LIGHT,
              value: g.ThemeTypes.LIGHT
            }],
            onChange: e => {
              (0, c.saveClientTheme)({
                theme: e.value
              })
            },
            value: l
          })
        }), (0, a.jsx)(S.default, {
          closeAction: u.popLayer,
          keybind: "ESC"
        })]
      }), (0, a.jsxs)("div", {
        className: I.textGrid,
        children: [(0, a.jsx)("div", {}), A.map(e => (0, a.jsx)("div", {
          className: I.columnHeading,
          children: (0, a.jsx)(d.Heading, {
            variant: "eyebrow",
            children: e
          })
        }, e)), [10, 12, 14, 15, 16, 18, 20, 24].map(e => (0, a.jsxs)(n.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: I.fontSize,
            children: [(0, a.jsxs)(d.Heading, {
              variant: "eyebrow",
              children: [e, "px"]
            }), 100 !== x ? (0, a.jsxs)(d.Heading, {
              variant: "eyebrow",
              color: "text-muted",
              children: ["(", e * x / 100, ")"]
            }) : null]
          }, e), A.map(t => {
            var s;
            let n = null !== (s = "custom" === D ? M : D) && void 0 !== s ? s : "";
            return (0, a.jsx)("div", {
              children: (0, a.jsxs)("div", {
                title: "".concat(e, "px at ").concat(t),
                className: i(I.text, {
                  [I.breakAnywhere]: !n.includes(" ")
                }),
                style: {
                  fontSize: e,
                  fontWeight: O.get(t)
                },
                children: [(0, a.jsx)("p", {
                  children: n
                }), (0, a.jsx)("p", {
                  style: {
                    textTransform: "lowercase"
                  },
                  children: n
                }), (0, a.jsx)("p", {
                  style: {
                    textTransform: "uppercase"
                  },
                  children: n
                })]
              })
            }, "".concat(e, "-").concat(t))
          })]
        }, e))]
      })]
    })
  })
}