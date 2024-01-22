"use strict";
n.r(t), n.d(t, {
  MFAModal: function() {
    return R
  },
  MFASlides: function() {
    return O
  },
  openMFAModal: function() {
    return D
  }
}), n("222007"), n("781738"), n("506083"), n("70102");
var i = n("37983"),
  s = n("884691"),
  r = n("376507"),
  a = n("872717"),
  o = n("77078"),
  l = n("145131"),
  u = n("772280"),
  d = n("773336"),
  c = n("286235"),
  f = n("50885"),
  _ = n("695501"),
  h = n("49111"),
  g = n("782340"),
  m = n("992279");

function E(e) {
  let {
    subtitle: t,
    onClose: n
  } = e;
  return (0, i.jsxs)(o.ModalHeader, {
    direction: l.default.Direction.VERTICAL,
    className: m.header,
    separator: !1,
    children: [(0, i.jsx)(o.Heading, {
      variant: "heading-xl/semibold",
      children: g.default.Messages.MFA_V2_HEADER
    }), null != t && (0, i.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: m.subtitle,
      children: t
    }), (0, i.jsx)(o.ModalCloseButton, {
      className: m.closeButton,
      onClick: n
    })]
  })
}

function p(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)(o.ModalContent, {
    className: m.content,
    children: t
  })
}

function v(e) {
  let {
    error: t
  } = e;
  return null == t ? null : (0, i.jsx)(o.Text, {
    className: m.error,
    variant: "text-sm/normal",
    color: "text-danger",
    children: t
  })
}

function S(e) {
  let {
    request: t,
    setSlide: n,
    showConfirm: s = !1,
    ...r
  } = e, a = t.methods.length > 1;
  return a || s ? (0, i.jsxs)(o.ModalFooter, {
    className: m.footer,
    direction: s && !a ? l.default.Direction.HORIZONTAL_REVERSE : l.default.Direction.HORIZONTAL,
    children: [a && (0, i.jsx)(o.Button, {
      look: o.Button.Looks.LINK,
      onClick: () => n("select"),
      color: o.Button.Colors.PRIMARY,
      children: g.default.Messages.MFA_V2_GO_TO_SELECT
    }), s && (0, i.jsx)(o.Button, {
      type: "submit",
      ...r,
      children: g.default.Messages.CONFIRM
    })]
  }) : null
}

function T(e) {
  let {
    request: t,
    setSlide: n,
    onClose: s
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E, {
      subtitle: g.default.Messages.MFA_V2_SELECT_HEADER,
      onClose: s
    }), (0, i.jsx)(p, {
      children: t.methods.map(e => (0, i.jsxs)(o.Clickable, {
        className: m.listItemContainer,
        onClick: () => {
          n(e.type)
        },
        children: [(0, i.jsx)(o.Text, {
          className: m.listItemText,
          variant: "text-md/semibold",
          children: _.SELECT_NAMES[e.type]
        }), (0, i.jsx)(u.default, {
          width: 20,
          height: 20,
          className: m.listItemArrow
        })]
      }, e.type))
    })]
  })
}

function I(e) {
  let {
    request: t,
    finish: n,
    setSlide: a,
    onClose: l
  } = e, [u, _] = s.useState(!1), [m, T] = s.useState(null), {
    challenge: I
  } = t.methods.find(e => "webauthn" === e.type), C = async () => {
    _(!0), T(null);
    let e = d.isPlatformEmbedded && f.default.supportsFeature(h.NativeFeatures.WEBAUTHN) ? f.default.webAuthnAuthenticate(I) : r.get(JSON.parse(I)).then(e => JSON.stringify(e)),
      t = async e => {
        try {
          await n({
            mfaType: "webauthn",
            data: e
          })
        } catch (e) {
          var t;
          T(null !== (t = e.message) && void 0 !== t ? t : g.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
        }
      };
    try {
      let n = await e;
      await t(n)
    } catch (e) {
      c.default.captureException(e), T(g.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
    } finally {
      _(!1)
    }
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E, {
      onClose: l
    }), (0, i.jsxs)(p, {
      children: [(0, i.jsx)(o.Button, {
        submitting: u,
        onClick: C,
        children: g.default.Messages.MFA_V2_WEBAUTHN_CTA
      }), (0, i.jsx)(v, {
        error: m
      })]
    }), (0, i.jsx)(S, {
      request: t,
      setSlide: a
    })]
  })
}

function C(e) {
  let {
    request: t,
    finish: n,
    setSlide: r,
    onClose: a,
    isSlideReady: l
  } = e, [u, d] = s.useState(!1), [c, f] = s.useState(null), [_, h] = s.useState(""), m = s.useRef(null), T = g.default.Messages.TWO_FA_ENTER_BACKUP_LABEL, I = g.default.Messages.TWO_FA_BACKUP_CODE, C = s.useCallback(e => {
    h(e), f(null)
  }, [h, f]);
  return s.useEffect(() => {
    if (l) {
      var e;
      null === (e = m.current) || void 0 === e || e.focus()
    }
  }, [l]), (0, i.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), d(!0), n({
        mfaType: "backup",
        data: _.replace(/-/g, "")
      }).catch(e => {
        var t, n;
        f(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        d(!1)
      })
    },
    children: [(0, i.jsx)(E, {
      onClose: a
    }), (0, i.jsx)(p, {
      children: (0, i.jsxs)(o.FormItem, {
        title: T,
        children: [(0, i.jsx)(o.TextInput, {
          inputRef: m,
          onChange: C,
          placeholder: I,
          maxLength: 9,
          minLength: 8,
          value: _,
          spellCheck: "false",
          disabled: u
        }), (0, i.jsx)(v, {
          error: c
        })]
      })
    }), (0, i.jsx)(S, {
      request: t,
      setSlide: r,
      showConfirm: !0,
      disabled: _.length < 8,
      submitting: u
    })]
  })
}

function A(e) {
  let {
    request: t,
    finish: n,
    setSlide: r,
    onClose: a,
    isSlideReady: l
  } = e, [u, d] = s.useState(!1), [c, f] = s.useState(null), [_, h] = s.useState(""), m = s.useRef(null);
  return s.useEffect(() => {
    if (l) {
      var e;
      null === (e = m.current) || void 0 === e || e.focus()
    }
  }, [l]), (0, i.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), d(!0), n({
        mfaType: "totp",
        data: _
      }).catch(e => {
        var t, n;
        f(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        d(!1)
      })
    },
    children: [(0, i.jsx)(E, {
      onClose: a
    }), (0, i.jsx)(p, {
      children: (0, i.jsxs)(o.FormItem, {
        title: g.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
        children: [(0, i.jsx)(o.TextInput, {
          inputRef: m,
          onChange: h,
          placeholder: g.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
          maxLength: 6,
          minLength: 6,
          value: _,
          autoComplete: "one-time-code",
          spellCheck: "false",
          disabled: u
        }), (0, i.jsx)(v, {
          error: c
        })]
      })
    }), (0, i.jsx)(S, {
      request: t,
      setSlide: r,
      showConfirm: !0,
      disabled: 0 === _.length,
      submitting: u
    })]
  })
}

function y(e) {
  let {
    request: t,
    finish: n,
    setSlide: r,
    onClose: l,
    isSlideReady: u
  } = e, [d, c] = s.useState(!1), [f, _] = s.useState(null), [T, I] = s.useState(!1), [C, A] = s.useState(null), [y, N] = s.useState(""), R = s.useRef(null);
  s.useEffect(() => {
    c(!0), a.default.post({
      url: h.Endpoints.LOGIN_SMS_SEND,
      body: {
        ticket: t.ticket
      },
      oldFormErrors: !0
    }).then(e => {
      _(e.body.phone)
    }).catch(e => {
      var t;
      A(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
    }).finally(() => {
      c(!1)
    })
  }, [t.ticket]), s.useEffect(() => {
    if (u) {
      var e;
      null === (e = R.current) || void 0 === e || e.focus()
    }
  }, [u]);
  let O = null == f ? g.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : g.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
    phoneNumber: f
  });
  return (0, i.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), I(!0), n({
        mfaType: "sms",
        data: y
      }).catch(e => {
        var t, n;
        A(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        I(!1)
      })
    },
    children: [(0, i.jsx)(E, {
      subtitle: O,
      onClose: l
    }), (0, i.jsx)(p, {
      children: (0, i.jsxs)(o.FormItem, {
        title: g.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
        children: [(0, i.jsxs)("div", {
          className: m.smsInputContainer,
          children: [(0, i.jsx)(o.TextInput, {
            className: m.smsInput,
            inputRef: R,
            onChange: N,
            placeholder: g.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
            maxLength: 10,
            value: y,
            autoComplete: "one-time-code",
            spellCheck: "false",
            disabled: T
          }), (0, i.jsx)(o.Button, {
            size: o.Button.Sizes.MEDIUM,
            submitting: d,
            onClick: () => {
              a.default.post({
                url: h.Endpoints.LOGIN_SMS_SEND,
                body: {
                  ticket: t.ticket
                },
                oldFormErrors: !0
              }).then(e => {
                _(e.body.phone)
              }).catch(e => {
                var t;
                A(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
              })
            },
            children: g.default.Messages.MFA_SMS_RESEND
          })]
        }), (0, i.jsx)(v, {
          error: C
        })]
      })
    }), (0, i.jsx)(S, {
      request: t,
      setSlide: r,
      showConfirm: !0,
      disabled: 0 === y.length,
      submitting: T
    })]
  })
}

function N(e) {
  let {
    request: t,
    finish: n,
    setSlide: r,
    onClose: a,
    isSlideReady: l
  } = e, [u, d] = s.useState(!1), [c, f] = s.useState(null), [_, h] = s.useState(""), m = s.useRef(null);
  return s.useEffect(() => {
    if (l) {
      var e;
      null === (e = m.current) || void 0 === e || e.focus()
    }
  }, [l]), (0, i.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), d(!0), n({
        mfaType: "password",
        data: _
      }).catch(e => {
        var t, n;
        f(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message)
      }).finally(() => {
        d(!1)
      })
    },
    children: [(0, i.jsx)(E, {
      onClose: a
    }), (0, i.jsx)(p, {
      children: (0, i.jsxs)(o.FormItem, {
        title: g.default.Messages.FORM_LABEL_PASSWORD,
        children: [(0, i.jsx)(o.TextInput, {
          inputRef: m,
          onChange: h,
          value: _,
          type: "password",
          autoComplete: "password",
          spellCheck: "false",
          disabled: u
        }), (0, i.jsx)(v, {
          error: c
        })]
      })
    }), (0, i.jsx)(S, {
      request: t,
      setSlide: r,
      showConfirm: !0,
      disabled: 0 === _.length,
      submitting: u
    })]
  })
}

function R(e) {
  let {
    transitionState: t,
    request: n,
    finish: s,
    onClose: r
  } = e;
  return (0, i.jsx)(o.ModalRoot, {
    transitionState: t,
    size: o.ModalSize.SMALL,
    "aria-label": g.default.Messages.MFA_V2_HEADER,
    children: (0, i.jsx)(O, {
      request: n,
      mfaFinish: s,
      onClose: r,
      onEarlyClose: r
    })
  })
}

function O(e) {
  var t, n;
  let {
    request: r,
    mfaFinish: a,
    onEarlyClose: l,
    onClose: u,
    width: d = 440
  } = e, [c, f] = s.useState(null !== (n = null === (t = r.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== n ? n : "select"), [_, h] = s.useState(c), g = async e => {
    let {
      mfaType: t,
      data: n
    } = e;
    await a({
      mfaType: t,
      data: n,
      ticket: r.ticket
    }), null != u && u()
  }, m = {
    request: r,
    finish: g,
    setSlide: f,
    onClose: l
  };
  return (0, i.jsxs)(o.Slides, {
    activeSlide: c,
    width: d,
    onSlideReady: h,
    children: [(0, i.jsx)(o.Slide, {
      id: "select",
      children: (0, i.jsx)(T, {
        ...m
      })
    }), (0, i.jsx)(o.Slide, {
      id: "webauthn",
      children: (0, i.jsx)(I, {
        ...m
      })
    }), (0, i.jsx)(o.Slide, {
      id: "totp",
      children: (0, i.jsx)(A, {
        ...m,
        isSlideReady: "totp" === _
      })
    }), (0, i.jsx)(o.Slide, {
      id: "sms",
      children: (0, i.jsx)(y, {
        ...m,
        isSlideReady: "sms" === _
      })
    }), (0, i.jsx)(o.Slide, {
      id: "backup",
      children: (0, i.jsx)(C, {
        ...m,
        isSlideReady: "backup" === _
      })
    }), (0, i.jsx)(o.Slide, {
      id: "password",
      children: (0, i.jsx)(N, {
        ...m,
        isSlideReady: "password" === _
      })
    })]
  })
}

function D(e, t, n) {
  (0, o.openModal)(n => (0, i.jsx)(R, {
    finish: t,
    request: e,
    ...n
  }), {
    onCloseCallback: () => {
      n(Error(g.default.Messages.MFA_V2_CANCELED))
    }
  })
}