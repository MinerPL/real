"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("222007"), s("506083");
var a = s("37983"),
  n = s("884691"),
  l = s("376507"),
  i = s("446674"),
  r = s("77078"),
  o = s("272030"),
  d = s("803163"),
  u = s("476765"),
  c = s("663745"),
  S = s("11056"),
  E = s("222038"),
  f = s("773336"),
  T = s("286235"),
  m = s("50885"),
  _ = s("425922"),
  g = s("52408"),
  h = s("426353"),
  I = s("49111"),
  N = s("782340"),
  p = s("532921");

function C(e) {
  let {
    transitionState: t,
    onClose: i,
    ticket: o,
    challenge: c
  } = e, S = (0, u.useUID)(), [E, g] = n.useState(""), [C, A] = n.useState(!0), [O, x] = n.useState(h.WebAuthnScreens.INIT), [R, M] = n.useState(""), [v, D] = n.useState(null), L = async () => {
    let e;
    x(h.WebAuthnScreens.REGISTER);
    let t = f.isPlatformEmbedded && m.default.supportsFeature(I.NativeFeatures.WEBAUTHN) ? m.default.webAuthnRegister(c) : l.create(JSON.parse(c)).then(e => JSON.stringify(e));
    try {
      e = await t
    } catch (e) {
      T.default.captureException(e), D(N.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR), x(h.WebAuthnScreens.INIT);
      return
    }
    M(e), x(h.WebAuthnScreens.NAME)
  };
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: t,
    "aria-labelledby": S,
    children: [(0, a.jsxs)(r.ModalHeader, {
      className: p.header,
      separator: !1,
      children: [(0, a.jsxs)(r.Heading, {
        id: S,
        variant: "heading-lg/semibold",
        children: [O === h.WebAuthnScreens.INIT && N.default.Messages.TWO_FA_WEBAUTHN_REGISTER, O === h.WebAuthnScreens.REGISTER && N.default.Messages.TWO_FA_WEBAUTHN_INTERACT, O === h.WebAuthnScreens.NAME && N.default.Messages.TWO_FA_WEBAUTHN_NAME]
      }), (0, a.jsx)(r.ModalCloseButton, {
        onClick: i,
        className: p.modalCloseButton
      })]
    }), (0, a.jsxs)(r.Slides, {
      activeSlide: O,
      width: 440,
      children: [(0, a.jsxs)(r.Slide, {
        id: h.WebAuthnScreens.INIT,
        children: [(0, a.jsxs)(r.ModalContent, {
          className: p.content,
          children: [(0, a.jsx)("div", {
            className: p.icon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: s("473604")
            })
          }), (0, a.jsx)("div", {
            children: null != v && (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "status-danger",
              children: v
            })
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: N.default.Messages.TWO_FA_WEBAUTHN_REGISTER_INSTRUCTIONS
            })
          })]
        }), (0, a.jsx)(r.ModalFooter, {
          children: (0, a.jsx)(r.Button, {
            onClick: L,
            children: N.default.Messages.TWO_FA_WEBAUTHN_REGISTER_CONFIRM
          })
        })]
      }), (0, a.jsxs)(r.Slide, {
        id: h.WebAuthnScreens.REGISTER,
        children: [(0, a.jsxs)(r.ModalContent, {
          className: p.content,
          children: [(0, a.jsx)("div", {
            className: p.icon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: s("473604")
            })
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: N.default.Messages.TWO_FA_WEBAUTHN_INTERACT_INSTRUCTIONS
            })
          })]
        }), (0, a.jsx)(r.ModalFooter, {
          children: (0, a.jsx)(r.Button, {
            submitting: !0
          })
        })]
      }), (0, a.jsx)(r.Slide, {
        id: h.WebAuthnScreens.NAME,
        children: (0, a.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), (0, _.finishRegisterWebAuthnCredential)(E, o, R).then(async () => {
              await (0, d.showMFASuccessModal)(!1)
            }).then(() => i()).catch(() => {
              D(N.default.Messages.ERROR_OCCURRED_TRY_AGAIN), x(h.WebAuthnScreens.INIT)
            })
          },
          children: [(0, a.jsxs)(r.ModalContent, {
            className: p.content,
            children: [(0, a.jsx)("div", {
              className: p.icon,
              children: (0, a.jsx)("img", {
                alt: "",
                src: s("47919")
              })
            }), (0, a.jsxs)("div", {
              children: [(0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                children: N.default.Messages.TWO_FA_WEBAUTHN_NAME_INSTRUCTIONS
              }), (0, a.jsx)(r.TextInput, {
                className: p.input,
                value: E,
                onChange: e => {
                  g(e), A(0 === e.length)
                },
                autoFocus: !0,
                minLength: 1
              })]
            })]
          }), (0, a.jsxs)(r.ModalFooter, {
            className: p.footer,
            children: [(0, a.jsx)(r.Button, {
              type: "submit",
              disabled: C,
              children: N.default.Messages.TWO_FA_WEBAUTHN_REGISTER_FINISH
            }), (0, a.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                x(h.WebAuthnScreens.INIT)
              },
              children: N.default.Messages.BACK
            })]
          })]
        })
      })]
    })]
  })
}

function A(e) {
  let {
    onSelect: t,
    credential: n
  } = e;
  return (0, a.jsxs)(r.Menu, {
    navId: "webauthn-credential-actions",
    onClose: o.closeContextMenu,
    "aria-label": N.default.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
    onSelect: t,
    children: [(0, a.jsx)(r.MenuItem, {
      id: "webauthn-edit-credential-".concat(n.id),
      label: N.default.Messages.EDIT,
      action: () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("629759").then(s.bind(s, "629759"));
          return t => (0, a.jsx)(e, {
            credential: n,
            ...t
          })
        })
      }
    }), (0, a.jsx)(r.MenuItem, {
      id: "webauthn-delete-credential-".concat(n.id),
      label: N.default.Messages.TWO_FA_WEBAUTHN_DELETE_CREDENTIAL,
      color: "danger",
      action: () => {
        (0, _.deleteWebAuthnCredential)(n)
      }
    })]
  })
}

function O() {
  let {
    credentials: e,
    hasFetchedCredentials: t
  } = (0, i.useStateFromStoresObject)([g.default], () => ({
    hasFetchedCredentials: g.default.hasFetchedCredentials(),
    credentials: g.default.getCredentials()
  }));
  n.useEffect(() => {
    !t && (0, _.fetchWebAuthnCredentials)()
  }, [t]);
  let [s, l] = n.useState(!1);
  return (0, a.jsxs)(r.FormSection, {
    title: N.default.Messages.TWO_FA_WEBAUTHN_TITLE,
    className: p.settings,
    children: [(0, a.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      className: p.description,
      children: N.default.Messages.TWO_FA_WEBAUTHN_DESCRIPTION
    }), e.length > 0 && (0, a.jsx)("div", {
      className: p.credentialList,
      children: e.map(e => (0, a.jsx)(S.default, {
        avatar: null,
        name: e.name,
        className: p.credentialItem,
        onContextMenu: t => {
          (0, o.openContextMenu)(t, t => (0, a.jsx)(A, {
            ...t,
            credential: e
          }))
        },
        children: (0, a.jsx)(r.Button, {
          look: r.Button.Looks.BLANK,
          color: r.Button.Colors.TRANSPARENT,
          size: r.Button.Sizes.ICON,
          onClick: t => {
            (0, o.openContextMenu)(t, t => (0, a.jsx)(A, {
              ...t,
              credential: e
            }))
          },
          "aria-label": N.default.Messages.TWO_FA_WEBAUTHN_CREDENTIAL_OPTIONS,
          innerClassName: p.credentialOptions,
          children: (0, a.jsx)(c.default, {
            className: p.overflowIcon,
            foreground: p.overflowIconFg,
            "aria-hidden": !0
          })
        })
      }, e.id))
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(r.Button, {
        onClick: () => {
          l(!0), (0, _.startRegisterWebAuthnCredential)().then(e => {
            let {
              ticket: t,
              challenge: s
            } = e;
            (0, r.openModal)(e => (0, a.jsx)(C, {
              ...e,
              ticket: t,
              challenge: s
            }))
          }).catch(e => {
            e.message !== N.default.Messages.MFA_V2_CANCELED && T.default.captureException(e)
          }).finally(() => {
            l(!1)
          })
        },
        submitting: s,
        disabled: !E.hasWebAuthn,
        size: r.Button.Sizes.SMALL,
        children: N.default.Messages.TWO_FA_WEBAUTHN_REGISTER
      })
    })]
  })
}