"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("794252"), n("222007");
var a = n("37983"),
  s = n("884691"),
  o = n("414456"),
  i = n.n(o),
  l = n("627445"),
  r = n.n(l),
  u = n("483366"),
  d = n.n(u),
  c = n("506838"),
  m = n("446674"),
  h = n("77078"),
  f = n("152584"),
  E = n("644417"),
  p = n("92201"),
  x = n("79345"),
  S = n("447997"),
  g = n("790618"),
  v = n("697218"),
  N = n("258078"),
  _ = n("719923"),
  R = n("49111"),
  M = n("782340"),
  T = n("387280"),
  C = n("905518");
let I = e => {
  let {
    usernameStatus: t,
    showHint: n
  } = e;
  return (0, c.match)(t).with({
    type: E.NameValidationState.ERROR,
    message: c.P.select()
  }, e => (0, a.jsx)(h.Text, {
    variant: "text-sm/normal",
    color: "text-danger",
    children: e
  })).with({
    type: E.NameValidationState.AVAILABLE,
    message: c.P.select()
  }, e => (0, a.jsx)(h.Text, {
    variant: "text-sm/normal",
    color: "text-positive",
    children: e
  })).otherwise(() => n ? (0, a.jsx)(h.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: M.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  }) : null)
};

function A(e) {
  var t;
  let {
    transitionState: n,
    onClose: o
  } = e, l = (0, m.useStateFromStores)([v.default], () => {
    let e = v.default.getCurrentUser();
    return r(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
  }), u = s.useMemo(() => _.default.canEditDiscriminator(l) && !l.isPomelo(), [l]), [c, A] = s.useState(!1), [L, j] = s.useState(l.username), [U, B] = s.useState(l.discriminator), [b, k] = s.useState(""), [P, O] = s.useState(!1), y = (0, m.useStateFromStores)([g.default], () => g.default.getErrors()), w = (0, p.useChangeUsernameLivecheckEnabled)(), D = l.isPomelo() && w, F = (0, x.useUsernameStatus)(L, D, !1, l.username), G = s.useRef(null), H = s.useMemo(() => {
    var e, t, n;
    return null !== (n = null == y ? void 0 : null === (e = y.username) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : null == y ? void 0 : null === (t = y.discriminator) || void 0 === t ? void 0 : t[0]
  }, [y]);
  s.useEffect(() => {
    if (n === h.ModalTransitionState.ENTERED) {
      var e;
      null === (e = G.current) || void 0 === e || e.focus()
    }
  }, [n]);
  let V = U !== l.discriminator;
  async function z(e) {
    e.preventDefault(), O(!0);
    let t = await (0, f.saveAccountChanges)({
      username: L,
      discriminator: u ? U : void 0,
      password: b
    });
    O(!1), (null == t ? void 0 : t.ok) && o()
  }
  let W = s.useMemo(() => d(A, 50), []);
  return (0, a.jsxs)(h.ModalRoot, {
    transitionState: n,
    children: [(0, a.jsxs)(h.ModalHeader, {
      separator: !1,
      className: T.header,
      children: [(0, a.jsx)(N.default, {
        color: N.default.Colors.HEADER_PRIMARY,
        size: N.default.Sizes.SIZE_24,
        className: T.title,
        children: M.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE_DESKTOP
      }), (0, a.jsx)(h.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: T.subtitle,
        children: M.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_PROMPT_DESKTOP
      }), (0, a.jsx)(h.ModalCloseButton, {
        onClick: o,
        className: T.modalCloseButton
      })]
    }), (0, a.jsxs)("form", {
      onSubmit: z,
      children: [(0, a.jsxs)(h.ModalContent, {
        className: T.content,
        children: [(0, a.jsx)(h.FormItem, {
          title: M.default.Messages.FORM_LABEL_USERNAME,
          error: H,
          children: (0, a.jsxs)("div", {
            className: i(C.input, T.multiInput, {
              [C.error]: null != H,
              [C.focused]: c
            }),
            children: [(0, a.jsx)(h.TextInput, {
              name: "username",
              "aria-label": M.default.Messages.USER_SETTINGS_LABEL_USERNAME,
              value: L,
              maxLength: R.USERNAME_MAX_LENGTH,
              onChange: j,
              onFocus: () => W(!0),
              onBlur: () => W(!1),
              inputRef: G,
              className: T.multiInputFirst,
              inputClassName: i(T.multiInputField, {
                [T.lowercase]: l.isPomelo()
              })
            }), !l.isPomelo() && (0, a.jsx)(h.TextInput, {
              name: "discriminator",
              "aria-label": M.default.Messages.USER_SETTINGS_LABEL_DISCRIMINATOR,
              maxLength: 4,
              value: U,
              onChange: B,
              onFocus: () => W(!0),
              onBlur: () => W(!1),
              inputPrefix: "#",
              disabled: !u,
              className: T.multiInputLast,
              inputClassName: T.multiInputField
            })]
          })
        }), V ? (0, a.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: T.discriminatorChangeWarning,
          children: M.default.Messages.PREMIUM_CHANGE_DISCRIMINATOR_WARNING
        }) : null, D ? (0, a.jsx)(S.default, {
          show: (null == F ? void 0 : F.type) === E.NameValidationState.ERROR || c,
          top: 8,
          bottom: 4,
          children: (0, a.jsx)(I, {
            usernameStatus: F,
            showHint: l.isPomelo()
          })
        }) : null, (0, a.jsx)(h.FormItem, {
          className: T.password,
          title: M.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
          error: null == y ? void 0 : null === (t = y.password) || void 0 === t ? void 0 : t[0],
          children: (0, a.jsx)(h.TextInput, {
            type: "password",
            value: b,
            onChange: k
          })
        })]
      }), (0, a.jsxs)(h.ModalFooter, {
        children: [(0, a.jsx)(h.Button, {
          type: "submit",
          color: h.Button.Colors.BRAND,
          size: h.Button.Sizes.MEDIUM,
          submitting: P,
          children: M.default.Messages.DONE
        }), (0, a.jsx)(h.Button, {
          className: T.cancel,
          look: h.Button.Looks.LINK,
          color: h.Button.Colors.PRIMARY,
          onClick: o,
          children: M.default.Messages.CANCEL
        })]
      })]
    })]
  })
}