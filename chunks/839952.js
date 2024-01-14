"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("868233"),
  o = n("77078"),
  u = n("903962"),
  d = n("993105"),
  c = n("410889"),
  m = n("461380"),
  f = n("195812"),
  h = n("967685"),
  p = n("204591"),
  g = n("782340"),
  E = n("219127"),
  v = n("862839");

function C(e) {
  let {
    text: t,
    language: a
  } = e, s = () => (0, l.jsx)("pre", {
    children: (0, l.jsx)("code", {
      className: i(v.scrollbarGhostHairline, E.codeView, "hljs"),
      children: t
    })
  });
  return (0, l.jsx)(r.LazyLibrary, {
    createPromise: () => n.el("86256").then(n.bind(n, "86256")),
    webpackId: "86256",
    render: e => {
      if (!e.hasLanguage(a)) return s();
      let n = e.highlight(a, t, !0);
      return null == n ? s() : (0, l.jsx)("pre", {
        children: (0, l.jsx)("code", {
          className: i(v.scrollbarGhostHairline, E.codeView, "hljs", n.language),
          dangerouslySetInnerHTML: {
            __html: n.value
          }
        })
      })
    },
    renderFallback: () => s()
  })
}

function I(e) {
  let {
    expanded: t,
    setExpanded: n,
    isWholeFile: a,
    numLines: s
  } = e, i = (a ? g.default.Messages.PREVIEW_NUM_LINES : g.default.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
    lines: s
  });
  return (0, l.jsx)(o.Tooltip, {
    text: "".concat(t ? g.default.Messages.COLLAPSE : g.default.Messages.EXPAND, " (").concat(i, ")"),
    children: e => (0, l.jsxs)(o.Clickable, {
      ...e,
      className: E.toggleExpandSection,
      onClick: () => {
        n(!t)
      },
      children: [(0, l.jsx)(m.default, {
        direction: t ? m.default.Directions.UP : m.default.Directions.DOWN
      }), t ? g.default.Messages.COLLAPSE : g.default.Messages.EXPAND]
    })
  })
}

function x(e) {
  let {
    attachment: t
  } = e, n = "".concat(t.filename, " (").concat((0, d.formatKbSize)(t.size), ")");
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Tooltip, {
      text: n,
      children: e => (0, l.jsx)("span", {
        ...e,
        className: i(E.downloadSection, E.attachmentName),
        children: t.filename
      })
    }), (0, l.jsx)(o.Tooltip, {
      text: n,
      children: e => (0, l.jsx)("span", {
        ...e,
        className: i(E.downloadSection, E.formattedSize),
        children: (0, d.formatKbSize)(t.size)
      })
    }), (0, l.jsx)(o.Tooltip, {
      text: "".concat(g.default.Messages.DOWNLOAD, " ").concat(n),
      children: e => (0, l.jsx)(o.Anchor, {
        ...e,
        className: E.downloadSection,
        href: t.url,
        target: "_blank",
        rel: "noreferrer noopener",
        children: (0, l.jsx)(f.default, {
          className: E.downloadButton,
          width: 24,
          height: 24
        })
      })
    })]
  })
}

function _(e) {
  let {
    language: t,
    setLanguage: n
  } = e;
  return (0, l.jsx)(o.Popout, {
    position: "left",
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, l.jsx)(o.Dialog, {
        "aria-label": g.default.Messages.PREVIEW_CHANGE_LANGUAGE,
        children: (0, l.jsx)(o.Combobox, {
          className: E.languageSelector,
          multiSelect: !1,
          placeholder: g.default.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
          value: new Set([t]),
          autoFocus: !0,
          onChange: e => {
            n(e), a()
          },
          children: e => Array.from(u.PLAINTEXT_FILE_EXTENSIONS).filter(t => t.toLowerCase().includes(e.toLowerCase())).map(e => (0, l.jsx)(o.ComboboxItem, {
            value: e,
            children: (0, l.jsx)(o.ComboboxItem.Label, {
              children: e
            })
          }, e))
        })
      })
    },
    children: e => (0, l.jsx)(o.Tooltip, {
      text: g.default.Messages.PREVIEW_CHANGE_LANGUAGE,
      children: t => (0, l.jsx)(p.default, {
        width: 24,
        height: 24,
        ...t,
        ...e,
        className: E.codeIcon
      })
    })
  })
}

function S(e) {
  return (0, l.jsx)(o.Tooltip, {
    text: g.default.Messages.PREVIEW_WHOLE_FILE,
    children: t => (0, l.jsx)(o.Clickable, {
      ...t,
      className: E.openFullPreviewSection,
      onClick: () => {
        (0, o.openModal)(t => (0, l.jsx)(M, {
          ...e,
          ...t
        }))
      },
      children: (0, l.jsx)(h.default, {})
    })
  })
}

function N(e) {
  var t;
  let {
    attachment: n,
    fileContents: a,
    expanded: s,
    setExpanded: r,
    language: u,
    setLanguage: c,
    bytesLeft: m,
    className: f
  } = e, h = null == a ? void 0 : a.split("\n"), p = null !== (t = null == h ? void 0 : h.length) && void 0 !== t ? t : 0, v = s ? 100 : 6, N = 0 === m, M = "";
  N && s && p > v ? M = "\n..." : !N && (M = "..."), "" !== M && (N ? M += " " + g.default.Messages.PREVIEW_LINES_LEFT.format({
    lines: p - v
  }) : M += " " + g.default.Messages.PREVIEW_BYTES_LEFT.format({
    formattedBytes: (0, d.formatKbSize)(m)
  }));
  let T = (null == h ? void 0 : h.slice(0, v).join("\n")) + M,
    A = s || v < p;
  return (0, l.jsxs)("div", {
    className: i(f, E.container),
    children: [(0, l.jsx)("div", {
      className: i(E.textContainer, {
        [E.expanded]: s
      }),
      children: null == a ? (0, l.jsx)(o.Spinner, {
        className: E.spinner
      }) : (0, l.jsx)(C, {
        text: T,
        language: u
      })
    }), (0, l.jsxs)(o.Text, {
      color: "header-secondary",
      className: E.footer,
      variant: "text-sm/normal",
      children: [A ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(I, {
          expanded: s,
          setExpanded: r,
          isWholeFile: N,
          numLines: p
        }), (0, l.jsx)(S, {
          language: u,
          fileContents: a,
          bytesLeft: m,
          attachment: n
        })]
      }) : null, (0, l.jsx)("div", {
        className: E.footerGap
      }), (0, l.jsx)(x, {
        attachment: n
      }), (0, l.jsx)(_, {
        language: u,
        setLanguage: c
      })]
    })]
  })
}

function M(e) {
  let {
    transitionState: t,
    language: n,
    fileContents: s,
    bytesLeft: i,
    attachment: r
  } = e, [u, c] = a.useState(n), m = null != s ? s : "";
  return 0 !== i && (m += "... ".concat(g.default.Messages.PREVIEW_BYTES_LEFT.format({
    formattedBytes: (0, d.formatKbSize)(i)
  }))), (0, l.jsx)(o.ModalRoot, {
    transitionState: t,
    "aria-label": g.default.Messages.PREVIEW_MODAL_LABEL,
    size: o.ModalSize.LARGE,
    className: E.modalRoot,
    children: (0, l.jsxs)("div", {
      className: E.modalContent,
      children: [(0, l.jsx)(o.ScrollerThin, {
        className: E.modalTextContainer,
        children: null == s ? (0, l.jsx)(o.Spinner, {
          className: E.spinner
        }) : (0, l.jsx)(C, {
          text: m,
          language: u
        })
      }), (0, l.jsxs)(o.Text, {
        color: "header-secondary",
        className: E.footer,
        variant: "text-sm/normal",
        children: [(0, l.jsx)("div", {
          className: E.footerGap
        }), (0, l.jsx)(x, {
          attachment: r
        }), (0, l.jsx)(_, {
          language: u,
          setLanguage: c
        })]
      })]
    })
  })
}
var T = a.memo(function(e) {
  let {
    attachment: t,
    className: n,
    onClick: s,
    onContextMenu: r
  } = e, [o, u] = a.useState(!1), [d, m] = a.useState(t.filename.split(".").slice(-1)[0]), {
    fileContents: f,
    bytesLeft: h,
    hadError: p
  } = function(e, t) {
    let [n, l] = a.useState(!1), [s, i] = a.useState(null), [r, o] = a.useState(1);
    return a.useEffect(() => {
      (async function n() {
        try {
          var n, a;
          let s = await fetch(e, {
              headers: {
                Range: "bytes=0-".concat(5e4),
                Accept: "text/plain"
              }
            }),
            r = function(e) {
              var t;
              let n = "utf-8",
                l = null !== (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) && void 0 !== t ? t : n;
              try {
                return new TextDecoder(l)
              } catch (t) {
                if ((null == e ? void 0 : e.startsWith("text")) || l.toLowerCase().includes("utf")) return new TextDecoder(n);
                throw t
              }
            }(t),
            u = r.decode(await s.arrayBuffer()),
            d = null !== (n = s.headers.get("content-range")) && void 0 !== n ? n : "0",
            c = null !== (a = s.headers.get("content-length")) && void 0 !== a ? a : "1",
            m = parseInt(d.split("/")[1]),
            f = m - parseInt(c);
          i(0 === f ? u : u.slice(0, -1)), o(f), l(!1)
        } catch (e) {
          o(0), l(!0)
        }
      })()
    }, [e, t]), {
      fileContents: s,
      bytesLeft: r,
      hadError: n
    }
  }(t.url, t.content_type);
  return p ? (0, l.jsx)(c.default, {
    url: t.url,
    filename: t.filename,
    size: t.size,
    onClick: s,
    onContextMenu: r,
    className: n
  }) : (0, l.jsx)(N, {
    attachment: t,
    fileContents: f,
    bytesLeft: h,
    expanded: o,
    setExpanded: u,
    language: d,
    setLanguage: m,
    className: i(E.newMosaicStyle, n)
  })
}, (e, t) => e.attachment.id === t.attachment.id && e.className === t.className)