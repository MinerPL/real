"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("627445"),
  o = n.n(r),
  u = n("77078"),
  d = n("736964"),
  c = n("476765"),
  f = n("284609"),
  E = n("49111"),
  _ = n("894282"),
  h = n("782340"),
  C = n("636478"),
  I = n("926622");
let T = {
    canSend: !1,
    hint: null,
    success: null,
    error: null
  },
  S = (0, c.uid)(),
  m = "".concat(S, "-decription"),
  p = "".concat(S, "-error");

function A(e, t) {
  switch (t.type) {
    case "RESET":
      return T;
    case "SUCCESS":
      return {
        ...T, success: t.text
      };
    case "HINT":
      return {
        ...T, canSend: !0, hint: t.text
      };
    case "ERROR":
      return {
        ...e, canSend: !0, error: t.text
      }
  }
}

function g() {
  let e = s.createRef(),
    t = s.createRef(),
    [n, i] = s.useReducer(A, T),
    {
      canSend: r,
      hint: c,
      success: g,
      error: N
    } = n;
  return s.useEffect(() => {
    null != g && (o(null != e.current, "Input is submitting when not mounted"), e.current.value = "", e.current.focus())
  }, [g, e]), (0, a.jsxs)("form", {
    onSubmit: t => {
      t.preventDefault(), o(null != e.current, "Input is submitted when not mounted");
      let n = e.current.value.trim();
      !n.includes("#") && n.startsWith("@") && (n = n.substring(1));
      let a = (0, f.validateDiscordTag)(n);
      if (null != a) {
        i({
          type: "ERROR",
          text: a
        });
        return
      }
      d.default.sendRequest({
        discordTag: n,
        context: {
          location: "Add Friend"
        }
      }).then(() => i({
        type: "SUCCESS",
        text: h.default.Messages.ADD_FRIEND_SUCCESS.format({
          discordTag: n
        })
      }), e => {
        var t;
        return i({
          type: "ERROR",
          text: (0, f.humanizeAbortCode)(null === (t = e.body) || void 0 === t ? void 0 : t.code, n)
        })
      })
    },
    autoComplete: "off",
    children: [(0, a.jsx)(u.FormText, {
      id: m,
      type: u.FormText.Types.DESCRIPTION,
      children: h.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION
    }), (0, a.jsx)(u.FocusRing, {
      focusTarget: e,
      ringTarget: t,
      ringClassName: C.ring,
      children: (0, a.jsxs)("div", {
        ref: t,
        className: l(C.addFriendInputWrapper, {
          [C.success]: g,
          [C.error]: N
        }),
        children: [(0, a.jsx)(u.TextInput, {
          id: S,
          inputRef: e,
          className: C.addFriendInput,
          inputClassName: C.input,
          onKeyPress: t => {
            let n = t.currentTarget.value;
            if (t.key !== _.KeyboardEventKey.Enter && n.includes("#")) {
              o(null != e.current, "Input is handling keypress when not mounted");
              let a = n.indexOf("#"),
                s = e.current.selectionStart,
                i = t.key === _.KeyboardEventKey.Backspace || t.key === _.KeyboardEventKey.ArrowRight || t.key === _.KeyboardEventKey.ArrowLeft,
                l = t.which >= 48 && t.which <= 57;
              null != s && s > a && /^(.+?#\d{4})$/.test(n) && !i ? t.preventDefault() : null != s && s > a && !l && !i && t.preventDefault()
            }
          },
          onChange: e => {
            if (e.length <= 0) {
              i({
                type: "RESET"
              });
              return
            }
            let t = "",
              [, n] = e.split("#");
            null != n && (t = e + E.PLACEHOLDER_TAG.slice(null != n ? n.length + 1 : 0)), i({
              type: "HINT",
              text: t
            })
          },
          maxLength: 37,
          autoFocus: !0,
          autoComplete: "off",
          name: "add-friend",
          "data-lpignore": !0,
          placeholder: h.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          "aria-label": h.default.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
          "aria-invalid": null != N || void 0,
          "aria-describedby": null != N ? p : m
        }), null != c && (0, a.jsx)("div", {
          className: C.addFriendHint,
          "aria-hidden": !0,
          children: c
        }), (0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          disabled: !r,
          type: "submit",
          children: h.default.Messages.ADD_FRIEND_BUTTON
        })]
      })
    }), null != N && (0, a.jsx)(u.FormText, {
      role: "alert",
      id: p,
      type: u.FormText.Types.ERROR,
      className: I.marginTop8,
      children: N
    }), null != g && (0, a.jsx)(u.FormText, {
      role: "status",
      type: u.FormText.Types.SUCCESS,
      className: I.marginTop8,
      children: g
    })]
  })
}