"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  i = l("414456"),
  u = l.n(i),
  s = l("446674"),
  r = l("872717"),
  o = l("77078"),
  d = l("130037"),
  c = l("271938"),
  _ = l("26989"),
  E = l("305961"),
  A = l("957255"),
  N = l("697218"),
  M = l("599110"),
  f = l("158998"),
  v = l("49111"),
  C = l("782340"),
  I = l("244369");

function m(e) {
  let {
    disabled: t = !1,
    user: l,
    setNickname: i,
    nickname: s,
    error: r,
    hasNick: d
  } = e, _ = a.useRef(null), E = a.useCallback(() => {
    var e;
    i(""), null === (e = _.current) || void 0 === e || e.focus()
  }, [i]);
  return (0, n.jsxs)(n.Fragment, {
    children: [t || null == l || l.id === c.default.getId() ? null : (0, n.jsx)(o.Card, {
      type: o.Card.Types.WARNING,
      className: I.card,
      children: (0, n.jsx)(o.Text, {
        className: I.warning,
        variant: "text-md/normal",
        children: C.default.Messages.CHANGE_NICKNAME_WARNING
      })
    }), (0, n.jsx)(o.FormTitle, {
      className: u(I.itemGroup, {
        [I.disabled]: t
      }),
      children: t ? C.default.Messages.CHANGE_IDENTITY_MODAL_CHANGE_NICKNAME_DISABLED : C.default.Messages.NICKNAME
    }), (0, n.jsx)(o.TextInput, {
      disabled: t,
      inputRef: _,
      maxLength: v.USERNAME_MAX_LENGTH,
      value: s,
      placeholder: f.default.getName(l),
      onChange: i,
      autoFocus: !0
    }), null != r ? (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: I.nickError,
      children: r
    }) : null, d && !t ? (0, n.jsx)(o.Button, {
      look: o.Button.Looks.LINK,
      color: o.Button.Colors.LINK,
      size: o.Button.Sizes.NONE,
      onClick: E,
      className: I.reset,
      children: C.default.Messages.RESET_NICKNAME
    }) : null]
  })
}
var g = function(e) {
  var t;
  let {
    transitionState: l,
    user: i,
    guildId: u,
    onClose: c,
    analyticsSource: f,
    analyticsLocations: g
  } = e, T = (0, s.useStateFromStores)([_.default], () => null != u ? _.default.getMember(u, i.id) : null), k = (0, s.useStateFromStores)([A.default, N.default, E.default], () => {
    var e;
    let t = E.default.getGuild(u);
    return null != t && ((null === (e = N.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === i.id ? A.default.can(v.Permissions.CHANGE_NICKNAME, t) || A.default.can(v.Permissions.MANAGE_NICKNAMES, t) : A.default.canManageUser(v.Permissions.MANAGE_NICKNAMES, i.id, t))
  }), [S, R] = a.useState(!1), [D, h] = a.useState(null !== (t = null == T ? void 0 : T.nick) && void 0 !== t ? t : ""), [y, L] = a.useState({});
  a.useEffect(() => {
    M.default.track(v.AnalyticEvents.OPEN_MODAL, {
      type: "Change Server Identity",
      location: v.AnalyticsPages.GUILD_CHANNEL,
      source: f
    })
  }, []);
  let O = (0, d.useTrackModerationAction)(u, {
      location: null == g ? void 0 : g[0],
      targetUserId: i.id
    }),
    b = a.useCallback(async e => {
      var t, l, n, a, s, o, _, E, A;
      e.preventDefault();
      let N = null;
      if (D !== (null !== (t = null == T ? void 0 : T.nick) && void 0 !== t ? t : "") && ((N = null != N ? N : {}).nick = D), null == N) {
        c();
        return
      }
      try {
        R(!0), await r.default.patch({
          url: v.Endpoints.GUILD_MEMBER(u, i.id),
          body: N
        }), O(d.ModerationActionType.CHANGE_NICKNAME), c()
      } catch (i) {
        let e;
        R(!1);
        let t = null !== (n = null === (l = i.body) || void 0 === l ? void 0 : l.errors) && void 0 !== n ? n : null;
        (null == t ? void 0 : t.nick) != null ? e = (null === (o = t.nick) || void 0 === o ? void 0 : null === (s = o._errors) || void 0 === s ? void 0 : null === (a = s[0]) || void 0 === a ? void 0 : a.message) || C.default.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR : (null == t ? void 0 : t.username) != null && (e = (null === (A = t.username) || void 0 === A ? void 0 : null === (E = A._errors) || void 0 === E ? void 0 : null === (_ = E[0]) || void 0 === _ ? void 0 : _.message) || C.default.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR), L({
          nick: e
        })
      }
    }, [u, D, c, i, T, O]);
  return (0, n.jsx)(o.ModalRoot, {
    "aria-label": C.default.Messages.CHANGE_IDENTITY,
    transitionState: l,
    children: (0, n.jsxs)("form", {
      onSubmit: b,
      children: [(0, n.jsx)(o.ModalHeader, {
        separator: !1,
        children: (0, n.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          children: C.default.Messages.CHANGE_NICKNAME
        })
      }), (0, n.jsx)(o.ModalContent, {
        className: I.modalContent,
        children: (0, n.jsx)(m, {
          disabled: !k,
          user: i,
          error: y.nick,
          nickname: D,
          setNickname: h,
          hasNick: (null == T ? void 0 : T.nick) != null
        })
      }), (0, n.jsxs)(o.ModalFooter, {
        children: [(0, n.jsx)(o.Button, {
          type: "submit",
          disabled: S,
          children: C.default.Messages.SAVE
        }), (0, n.jsx)(o.Button, {
          onClick: c,
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          children: C.default.Messages.CANCEL
        })]
      })]
    })
  })
}