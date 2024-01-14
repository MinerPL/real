"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
});
var r, u = n("37983"),
  a = n("884691"),
  l = n("414456"),
  o = n.n(l),
  i = n("132710"),
  c = n.n(i),
  s = n("269936"),
  d = n("647374"),
  f = n("47677"),
  p = n("895530"),
  h = n("238165"),
  g = n("862839");
let m = new RegExp("https?://".concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ""));

function v(e) {
  return "string" == typeof e.content ? e.content : R(e.content)
}
let y = {
    ...c.defaultRules,
    heading: {
      ...c.defaultRules.heading,
      react(e, t, n) {
        let r = "h".concat(e.level);
        return (0, u.jsx)(p.default, {
          tag: r,
          children: t(e.content, n)
        }, n.key)
      }
    },
    paragraph: {
      ...c.defaultRules.paragraph,
      react: (e, t, n) => (0, u.jsx)("div", {
        className: h.paragraph,
        children: t(e.content, n)
      }, n.key)
    },
    strong: {
      ...c.defaultRules.strong,
      order: 6
    },
    em: {
      ...c.defaultRules.em,
      order: 6
    },
    u: {
      ...c.defaultRules.u,
      order: 5
    },
    del: {
      ...c.defaultRules.del,
      order: 6
    },
    link: {
      ...d.default,
      ...(0, f.default)({
        enableBuildOverrides: !1
      }),
      order: 6
    },
    blockQuote: {
      ...c.defaultRules.blockQuote,
      react: (e, t, n) => (0, u.jsx)("blockquote", {
        className: h.blockquote,
        children: v(e)
      }, n.key)
    },
    image: {
      ...c.defaultRules.image,
      order: 6,
      match(e, t, n) {
        let r = c.defaultRules.image;
        if (null == r || null == r.match) return !1;
        let u = r.match(e, t, n);
        if (null != u && Array.isArray(u) && u.length >= 3) {
          let e = u[2];
          if ("string" == typeof e) return null != e.match(m) ? u : null
        }
        return !1
      }
    },
    inlineCode: {
      ...c.defaultRules.inlineCode,
      order: 6,
      react: (e, t, n) => (0, u.jsx)("code", {
        className: h.codeInline,
        children: v(e)
      }, n.key)
    },
    codeBlock: {
      ...c.defaultRules.codeBlock,
      react(e, t, r) {
        let a = () => (0, u.jsx)("pre", {
          children: (0, u.jsx)("code", {
            className: o(g.scrollbarGhostHairline, "hljs"),
            children: v(e)
          })
        }, r.key);
        return (0, u.jsx)(s.LazyLibrary, {
          createPromise: () => n.el("86256").then(n.bind(n, "86256")),
          webpackId: "86256",
          renderFallback: a,
          render: t => {
            if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return a();
            {
              let n = t.highlight(e.lang, e.content, !0);
              return null == n ? a() : (0, u.jsx)("pre", {
                children: (0, u.jsx)("code", {
                  className: o(g.scrollbarGhostHairline, "hljs", n.language),
                  dangerouslySetInnerHTML: {
                    __html: n.value
                  }
                })
              }, r.key)
            }
          }
        }, r.key)
      }
    }
  },
  E = c.parserFor(y),
  R = c.reactFor(c.ruleOutput(y, "react"));
class k extends a.PureComponent {
  render() {
    let {
      className: e,
      children: t,
      state: n,
      parser: r,
      output: a
    } = this.props, l = r("".concat(t, "\n\n"), {
      inline: !1,
      ...n
    }), i = a(l);
    return (0, u.jsx)("div", {
      className: o(h.markdown, e),
      children: i
    })
  }
}
k.rules = y, k.defaultProps = {
  parser: E,
  output: R
};
var b = k