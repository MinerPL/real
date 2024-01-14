"use strict";
a.r(t), a.d(t, {
  default: function() {
    return L
  }
}), a("222007"), a("781738");
var s = a("37983"),
  l = a("884691"),
  i = a("414456"),
  n = a.n(i),
  r = a("907002"),
  o = a("65597"),
  d = a("77078"),
  u = a("206230"),
  c = a("526887"),
  E = a("289918"),
  f = a("935409"),
  m = a("158998"),
  S = a("415133"),
  _ = a("500645"),
  I = a("925922"),
  h = a("935583"),
  N = a("590456"),
  M = a("782340"),
  T = a("341923"),
  g = a("107681");
let O = l.forwardRef(function(e, t) {
  let {
    style: a,
    value: l,
    placeholder: i,
    maxLength: r,
    onFocus: o,
    onChange: u
  } = e;
  return (0, s.jsx)(d.TextArea, {
    className: n(T.userCardInput, a),
    autosize: !0,
    error: null,
    showCharacterCount: !1,
    spellCheck: !1,
    showRemainingCharacterCount: !1,
    value: l,
    placeholder: i,
    rows: 1,
    maxLength: r,
    onChange: u,
    onFocus: o,
    onKeyDown: e => {
      "Enter" === e.key && e.preventDefault()
    },
    inputRef: t
  })
});
var L = l.forwardRef(function(e, t) {
  let {
    user: a,
    error: i,
    formValues: L,
    displayProfile: x,
    onChangeFormValue: C,
    onFocusDisplayName: P,
    onFocusUsername: p,
    editState: v,
    footerNotice: R,
    usernameSuggestionLoading: A,
    oneClickFlow: j
  } = e, {
    username: y,
    globalName: D
  } = L, U = l.useRef(null), G = l.useRef(null), F = l.useMemo(() => a.merge({
    discriminator: "0000"
  }), [a]), [w, B] = (0, r.useSpring)(() => ({
    opacity: 0,
    y: 5
  }));
  l.useEffect(() => {
    B({
      y: 0,
      opacity: 1,
      from: {
        y: 5,
        opacity: 0
      }
    })
  }, [B, v]), l.useImperativeHandle(t, () => ({
    focusDisplayName: () => {
      var e, t, a;
      null === (t = G.current) || void 0 === t || t.setSelection(0, null === (e = G.current) || void 0 === e ? void 0 : e.value.length), null === (a = G.current) || void 0 === a || a.focus()
    },
    focusUsername: () => {
      var e, t, a;
      null === (t = U.current) || void 0 === t || t.setSelection(0, null === (e = U.current) || void 0 === e ? void 0 : e.value.length), null === (a = U.current) || void 0 === a || a.focus()
    }
  }), []);
  let b = (0, o.default)([u.default], () => u.default.useReducedMotion),
    {
      createMultipleConfettiAt: k
    } = l.useContext(c.ConfettiCannonContext),
    H = null == x ? void 0 : x.getLegacyUsername();
  return l.useEffect(() => {
    if (!b && v === h.EditState.PREVIEW) a.username.includes(h.POMELO_KEYWORD) && (k(window.innerWidth / 2 + 150, 0, {
      velocity: {
        type: "static-random",
        minValue: {
          x: 0,
          y: -180
        },
        maxValue: {
          x: 500,
          y: 180
        }
      }
    }, 15), k(window.innerWidth / 2 - 150, 0, {
      velocity: {
        type: "static-random",
        minValue: {
          x: -500,
          y: -180
        },
        maxValue: {
          x: 0,
          y: 180
        }
      }
    }, 15))
  }, [k, v, a, b]), (0, s.jsxs)("div", {
    className: n(T.userCardContainer, {
      [T.shinyCard]: v === h.EditState.PREVIEW
    }),
    children: [(0, s.jsxs)("div", {
      className: T.profileCard,
      children: [(0, s.jsx)(E.default, {
        displayProfile: x,
        user: F,
        allowEdit: !1,
        guildId: void 0,
        profileType: N.UserProfileTypes.POMELO_POPOUT,
        showPremiumBadgeUpsell: !1
      }), (0, s.jsx)(f.UserPopoutAvatar, {
        user: F,
        displayProfile: x,
        isMobile: !1,
        status: null,
        onClose: void 0,
        disableUserProfileLink: !0,
        hasBanner: !1,
        profileType: N.UserProfileTypes.POMELO_POPOUT,
        animateOnHover: !1
      }), v === h.EditState.PREVIEW && null != H && (0, s.jsx)("div", {
        className: T.legacyUsernameBadgeContainer,
        children: (0, s.jsx)(d.Tooltip, {
          position: "top",
          text: M.default.Messages.ORIGINALLY_KNOWN_AS.format({
            legacyUsername: H
          }),
          spacing: 12,
          children: e => (0, s.jsx)(d.Anchor, {
            ...e,
            onClick: e.onClick,
            children: (0, s.jsx)("img", {
              className: T.legacyUsernameBadge,
              alt: "",
              src: g
            })
          })
        })
      })]
    }), v !== h.EditState.PREVIEW && (0, s.jsxs)(r.animated.div, {
      style: {
        opacity: w.opacity,
        y: w.y
      },
      className: T.inputContainer,
      children: [v === h.EditState.EDIT_DISPLAY_NAME && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.Text, {
          className: T.textPadding,
          color: "text-muted",
          variant: "text-sm/semibold",
          children: M.default.Messages.DISPLAY_NAME
        }), (0, s.jsx)(O, {
          style: n(T.displayNameHeight, T["heading-xl/bold"]),
          value: null != D ? D : "",
          placeholder: m.default.getName(a),
          maxLength: h.MAX_DISPLAY_NAME_LENGTH,
          onChange: e => C({
            globalName: e
          }),
          onFocus: P,
          ref: G
        })]
      }), (v === h.EditState.EDIT_USERNAME || v === h.EditState.SUGGESTION) && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.Text, {
          className: T.textPadding,
          color: "text-muted",
          variant: "text-sm/semibold",
          children: M.default.Messages.USERNAME
        }), (0, s.jsx)(O, {
          style: n(T.userCardHeight, T.lowercaseUsername, T["heading-lg/medium"]),
          value: null != y ? y : "",
          placeholder: a.username,
          maxLength: h.MAX_DISPLAY_NAME_LENGTH,
          onChange: e => C({
            username: e.replace("@", "")
          }),
          onFocus: p,
          ref: U
        })]
      }), (0, s.jsx)("div", {
        className: T.messageContainer,
        children: (() => {
          if (null != i) return (0, s.jsx)(_.default, {
            type: "error",
            children: i
          });
          if (null != R) {
            if (v !== h.EditState.SUGGESTION) return (0, s.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: R
            });
            if (!A) return (0, s.jsx)(_.default, {
              type: "success",
              children: R
            })
          }
          return null == R && null == i && (v === h.EditState.EDIT_USERNAME || v === h.EditState.SUGGESTION) ? (0, s.jsx)(I.default, {
            username: y,
            oneClickFlow: j
          }) : null
        })()
      })]
    }), v === h.EditState.PREVIEW && (0, s.jsxs)("div", {
      className: T.userCard,
      children: [(0, s.jsx)(d.Heading, {
        color: "header-primary",
        variant: "heading-xl/bold",
        children: m.default.getName(a)
      }), (0, s.jsx)(d.Heading, {
        color: "text-normal",
        variant: "heading-lg/medium",
        children: a.username
      }), (0, s.jsx)(d.Text, {
        className: T.memberText,
        color: "text-muted",
        variant: "text-sm/medium",
        children: M.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
          date: (0, S.getMemberSince)(a.id)
        })
      })]
    })]
  })
})