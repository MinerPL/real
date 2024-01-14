"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var s = n("37983"),
  o = n("884691"),
  r = n("446674"),
  l = n("77078"),
  a = n("152584"),
  i = n("790618"),
  u = n("258078"),
  d = n("648661"),
  E = n("782340"),
  _ = n("679012");

function c(e) {
  var t, n;
  let {
    emailToken: c,
    isSlideReady: T,
    onClose: S,
    onBack: N
  } = e, [C, f] = o.useState(""), [A, I] = o.useState(""), [R, h] = o.useState(!1), p = (0, r.useStateFromStores)([i.default], () => i.default.getErrors()), U = o.useRef(null);
  async function O(e) {
    e.preventDefault(), h(!0);
    let t = await (0, a.saveAccountChanges)({
      email: C,
      emailToken: c,
      password: A
    });
    if (h(!1), null == t ? void 0 : t.ok) S();
    else {
      var n, s;
      (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.username) != null ? (0, d.showInvalidUsernameToast)() : (null == t ? void 0 : null === (s = t.body) || void 0 === s ? void 0 : s.email_token) != null && (null == N || N())
    }
  }
  return o.useEffect(() => {
    if (T) {
      var e;
      null === (e = U.current) || void 0 === e || e.focus()
    }
  }, [T]), (0, s.jsxs)("form", {
    onSubmit: O,
    children: [(0, s.jsxs)(l.ModalHeader, {
      separator: !1,
      className: _.header,
      children: [(0, s.jsx)(u.default, {
        color: u.default.Colors.HEADER_PRIMARY,
        size: u.default.Sizes.SIZE_24,
        className: _.title,
        children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: _.subtitle,
        children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: S,
        className: _.modalCloseButton
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      className: _.content,
      children: [(0, s.jsx)(l.FormItem, {
        title: E.default.Messages.EMAIL,
        error: null == p ? void 0 : null === (t = p.email) || void 0 === t ? void 0 : t[0],
        children: (0, s.jsx)(l.TextInput, {
          type: "email",
          value: C,
          onChange: f,
          inputRef: U
        })
      }), (0, s.jsx)(l.FormItem, {
        className: _.password,
        title: E.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
        error: null == p ? void 0 : null === (n = p.password) || void 0 === n ? void 0 : n[0],
        children: (0, s.jsx)(l.TextInput, {
          type: "password",
          value: A,
          onChange: I
        })
      })]
    }), (0, s.jsxs)(l.ModalFooter, {
      children: [(0, s.jsx)(l.Button, {
        type: "submit",
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        submitting: R,
        children: E.default.Messages.DONE
      }), null != N ? (0, s.jsx)(l.Button, {
        className: _.cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: N,
        children: E.default.Messages.BACK
      }) : (0, s.jsx)(l.Button, {
        className: _.cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: S,
        children: E.default.Messages.CANCEL
      })]
    })]
  })
}