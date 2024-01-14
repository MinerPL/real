"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007"), s("506083");
var n, l, o = s("37983"),
  r = s("884691"),
  a = s("872717"),
  i = s("77078"),
  c = s("920700"),
  u = s("145131"),
  d = s("555158"),
  f = s("306160"),
  h = s("691898"),
  I = s("49111"),
  N = s("782340"),
  m = s("453938");

function x(e) {
  let {
    name: t,
    value: s
  } = e, [n, l] = r.useState(c.CopyInputModes.DEFAULT);
  return (0, o.jsxs)("div", {
    className: m.infoRow,
    children: [(0, o.jsx)(i.FormTitle, {
      className: m.infoTitle,
      children: t
    }), (0, o.jsx)(c.default, {
      value: s,
      mode: n,
      supportsCopy: f.SUPPORTS_COPY,
      onCopy: () => {
        (0, f.copy)(s), l(c.CopyInputModes.SUCCESS)
      }
    })]
  })
}

function C(e) {
  let {
    onClose: t,
    transitionState: s
  } = e, [n, l] = r.useState(""), [c, f] = r.useState(""), [C, p] = r.useState(null), [R, O] = r.useState(!1), [v, M] = r.useState("DOMAIN"), g = () => {
    O(!0), p(null), a.default.post({
      url: I.Endpoints.CONNECTION(I.PlatformTypes.DOMAIN, n),
      body: {}
    }).then(() => {
      t()
    }).catch(e => {
      var t, s, n, l, o, r, a;
      (null === (t = e.body) || void 0 === t ? void 0 : t.proof) && "DOMAIN" === v ? (f(e.body.proof), M("PROOF_DNS")) : p((null === (r = e.body) || void 0 === r ? void 0 : null === (o = r.errors) || void 0 === o ? void 0 : null === (l = o.domain) || void 0 === l ? void 0 : null === (n = l._errors) || void 0 === n ? void 0 : null === (s = n[0]) || void 0 === s ? void 0 : s.message) || (null === (a = e.body) || void 0 === a ? void 0 : a.message) || e.message)
    }).finally(() => {
      O(!1)
    })
  };
  return (0, o.jsxs)(i.ModalRoot, {
    transitionState: s,
    className: m.modal,
    children: [(0, o.jsxs)(i.ModalHeader, {
      direction: u.default.Direction.VERTICAL,
      className: m.header,
      separator: !1,
      children: [(0, o.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        children: N.default.Messages.DOMAIN_VERIFICATION_HEADER
      }), (0, o.jsx)(i.ModalCloseButton, {
        className: m.closeButton,
        onClick: t
      })]
    }), (0, o.jsxs)(i.Slides, {
      activeSlide: v,
      width: 440,
      children: [(0, o.jsx)(i.Slide, {
        id: "DOMAIN",
        children: (0, o.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), g()
          },
          children: [(0, o.jsxs)(i.ModalContent, {
            className: m.content,
            children: [(0, o.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: m.description,
              children: N.default.Messages.DOMAIN_VERIFICATION_DESCRIPTION
            }), (0, o.jsx)(i.FormItem, {
              title: N.default.Messages.DOMAIN_VERIFICATION_LABEL,
              error: C,
              children: (0, o.jsx)(i.TextInput, {
                onChange: l,
                placeholder: h.EXAMPLE_DOMAIN,
                maxLength: 253,
                value: n,
                disabled: R,
                autoFocus: !0
              })
            })]
          }), (0, o.jsxs)(i.ModalFooter, {
            className: m.footer,
            children: [(0, o.jsx)(i.Button, {
              type: "submit",
              submitting: R,
              disabled: "" === n,
              children: N.default.Messages.NEXT
            }), (0, o.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: i.Button.Colors.PRIMARY,
              onClick: t,
              children: N.default.Messages.CANCEL
            })]
          })]
        })
      }), (0, o.jsxs)(i.Slide, {
        id: "PROOF_DNS",
        children: [(0, o.jsxs)(i.ModalContent, {
          className: m.content,
          children: [(0, o.jsxs)("ol", {
            className: m.list,
            children: [(0, o.jsx)("li", {
              children: (0, o.jsx)(i.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: N.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_1
              })
            }), (0, o.jsxs)("li", {
              children: [(0, o.jsx)(i.Text, {
                tag: "span",
                variant: "text-md/normal",
                children: N.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_DNS_2
              }), (0, o.jsxs)("div", {
                className: m.dnsRecordContainer,
                children: [(0, o.jsx)(x, {
                  name: N.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
                  value: (0, h.getDnsName)(n)
                }), (0, o.jsx)(x, {
                  name: N.default.Messages.DOMAIN_VERIFICATION_RECORD_TYPE,
                  value: "TXT"
                }), (0, o.jsx)(x, {
                  name: N.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
                  value: c
                })]
              })]
            })]
          }), (0, o.jsx)(d.default, {
            messageType: d.HelpMessageTypes.INFO,
            className: m.text,
            children: N.default.Messages.DOMAIN_VERIFICATION_DNS_WARNING
          }), null != C && (0, o.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            className: m.text,
            children: C
          })]
        }), (0, o.jsxs)(i.ModalFooter, {
          className: m.footer,
          direction: u.default.Direction.HORIZONTAL,
          children: [(0, o.jsx)(i.Button, {
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.PRIMARY,
            onClick: () => {
              M("DOMAIN"), p(null)
            },
            children: N.default.Messages.BACK
          }), (0, o.jsxs)("div", {
            className: m.footerInner,
            children: [(0, o.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: i.Button.Colors.PRIMARY,
              onClick: () => {
                M("PROOF_HTTP"), p(null)
              },
              className: m.switchButton,
              children: N.default.Messages.DOMAIN_VERIFICATION_USE_HTTP
            }), (0, o.jsx)(i.Button, {
              submitting: R,
              onClick: g,
              children: N.default.Messages.VERIFY
            })]
          })]
        })]
      }), (0, o.jsxs)(i.Slide, {
        id: "PROOF_HTTP",
        children: [(0, o.jsxs)(i.ModalContent, {
          className: m.content,
          children: [(0, o.jsx)(i.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: N.default.Messages.DOMAIN_VERIFICATION_INSTRUCTIONS_HTTP
          }), (0, o.jsxs)("div", {
            className: m.httpFileContainer,
            children: [(0, o.jsx)(x, {
              name: N.default.Messages.DOMAIN_VERIFICATION_RECORD_NAME,
              value: (0, h.getHttpName)(n)
            }), (0, o.jsx)(x, {
              name: N.default.Messages.DOMAIN_VERIFICATION_RECORD_CONTENT,
              value: c
            })]
          }), null != C && (0, o.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            className: m.text,
            children: C
          })]
        }), (0, o.jsxs)(i.ModalFooter, {
          className: m.footer,
          direction: u.default.Direction.HORIZONTAL,
          children: [(0, o.jsx)(i.Button, {
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.PRIMARY,
            onClick: () => {
              M("DOMAIN"), p(null)
            },
            children: N.default.Messages.BACK
          }), (0, o.jsxs)("div", {
            className: m.footerInner,
            children: [(0, o.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: i.Button.Colors.PRIMARY,
              onClick: () => {
                M("PROOF_DNS"), p(null)
              },
              className: m.switchButton,
              children: N.default.Messages.DOMAIN_VERIFICATION_USE_DNS
            }), (0, o.jsx)(i.Button, {
              submitting: R,
              onClick: g,
              children: N.default.Messages.VERIFY
            })]
          })]
        })]
      })]
    })]
  })
}(l = n || (n = {})).DOMAIN = "DOMAIN", l.PROOF_DNS = "PROOF_DNS", l.PROOF_HTTP = "PROOF_HTTP"