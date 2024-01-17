"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("917351"),
  r = l("446674"),
  o = l("750028"),
  i = l("77078"),
  u = l("716241"),
  d = l("355313"),
  c = l("845579"),
  f = l("872173"),
  S = l("305961"),
  h = l("651879"),
  A = l("655518"),
  g = l("882278"),
  E = l("754493"),
  T = l("5920"),
  R = l("835236"),
  _ = l("844153"),
  p = l("49111"),
  v = l("606762"),
  I = l("782340"),
  m = l("147594");

function C(e) {
  let {
    headerText: t = I.default.Messages.BROADCASTING_SETTINGS,
    buttonCTA: l = I.default.Messages.BROADCAST_SETTINGS_SAVE,
    transitionState: C,
    onClose: D,
    onSave: x
  } = e, N = (0, T.useBroadcastingStoredSelectedTags)(), [y, L] = n.useState(N), [b, w] = n.useState(""), M = c.BroadcastAllowFriends.useSetting(), [O, B] = n.useState(null == M || M), U = c.BroadcastAutoBroadcast.useSetting(), [j, G] = n.useState(U), [k, P] = n.useState(!1), [F, K] = n.useState(!1), H = (0, E.useSelfBroadcast)(), V = (0, g.default)(null == H ? void 0 : H.channelId), z = n.useMemo(() => M !== O || !(0, s.isEqual)(N, y) || U !== j, [M, O, N, y, U, j]), W = null != x, Y = n.useMemo(() => O || Object.keys(y[v.RowType.USER]).length > 0 || Object.keys(y[v.RowType.GUILD]).length > 0, [O, y]), X = !Y && null != H || !Y && W || !z && !W, q = n.useMemo(() => "@" === b.trim().charAt(0), [b]), Z = (0, r.useStateFromStoresArray)([S.default], () => S.default.getGuildIds()), Q = (0, T.useFilteredGuilds)(Z), J = n.useMemo(() => Q.map(e => e.id), [Q]), [$, ee] = (0, T.useBroadcastingPrivacyAudience)(q, function(e) {
    var t;
    let l = (t = b.trim(), q ? t.slice(1) : t),
      a = RegExp("".concat(A.default.escape(l)), "i");
    return a.test(e)
  }, O);

  function et() {
    var e;
    null == x || x();
    let [t, l] = es();
    u.default.trackWithMetadata(p.AnalyticEvents.BROADCAST_SETTINGS_UPDATED, {
      auto_broadcast: j,
      broadcast_to_all_friends: O,
      num_allowed_users_in_broadcast: l.length,
      allowed_users: l,
      num_guilds_in_broadcast: t.length,
      guilds: t,
      num_viewers_in_broadcast: V.length,
      current_viewers: null !== (e = V.map(e => e.id)) && void 0 !== e ? e : [],
      started_broadcast: W
    })
  }

  function el(e) {
    w(e)
  }

  function ea(e, t) {
    let l = (0, d.getFullRowId)(t);
    L(a => {
      let n = {
        ...a
      };
      return n[e] = {
        ...n[e]
      }, l in n[e] ? delete n[e][l] : n[e][l] = (0, T.selectedTagFromRowData)(t), n
    })
  }

  function en(e, t) {
    L(l => {
      let a = {
        ...l
      };
      return a[e] = {
        ...a[e]
      }, delete a[e][t], a
    })
  }

  function es() {
    let e = new Set,
      t = new Set;
    Object.values(y[v.RowType.USER]).forEach(e => {
      let {
        row: l
      } = e;
      return t.add(l.id)
    }), Object.values(y[v.RowType.GUILD]).forEach(t => {
      let {
        row: l
      } = t;
      return e.add(l.id)
    });
    let l = (0, T.sanitizeAllowedGuildIds)(Array.from(e)),
      a = (0, T.sanitizeAllowedUserIds)(Array.from(t));
    return [l, a]
  }
  return n.useEffect(() => {
    u.default.trackWithMetadata(p.AnalyticEvents.OPEN_MODAL, {
      type: W ? "Start Broadcast" : "Update Broadcast"
    })
  }, [W]), n.useEffect(() => {
    let e = (0, s.chunk)(J, 100);
    e.forEach(e => {
      h.default.requestMembers(e, b.trim())
    })
  }, [J, b]), (0, a.jsxs)(i.ModalRoot, {
    transitionState: C,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      className: m.header,
      children: t
    }), (0, a.jsx)(i.ModalCloseButton, {
      onClick: D,
      className: m.close
    }), (0, a.jsxs)(i.ModalContent, {
      className: m.content,
      paddingFix: !1,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: m.description,
        children: I.default.Messages.BROADCASTING_DESCRIPTION
      }), (0, a.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H5,
        className: m.title,
        children: I.default.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
      }), (0, a.jsxs)("div", {
        className: m.switch,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          children: I.default.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
        }), (0, a.jsx)(i.Switch, {
          checked: O,
          onChange: e => {
            B(e)
          }
        })]
      }), (0, a.jsx)(R.default, {
        selectedTags: y[v.RowType.USER],
        query: b,
        onQueryChange: el,
        onClickRow: e => ea(v.RowType.USER, e),
        onRemoveTag: e => en(v.RowType.USER, e),
        title: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
        hintText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
          count: _.BROADCASTING_MAX_ALLOWED_USER_IDS
        }),
        placeholderText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
        users: $,
        expanded: k,
        setExpanded: e => {
          el(""), P(e), K(!1)
        },
        maxCount: _.BROADCASTING_MAX_ALLOWED_USER_IDS
      }), (0, a.jsx)(R.default, {
        selectedTags: y[v.RowType.GUILD],
        query: b,
        onQueryChange: el,
        onClickRow: e => ea(v.RowType.GUILD, e),
        onRemoveTag: e => en(v.RowType.GUILD, e),
        title: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
        hintText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
          count: _.BROADCASTING_MAX_ALLOWED_GUILD_IDS
        }),
        placeholderText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
        guilds: ee,
        expanded: F,
        setExpanded: e => {
          el(""), K(e), P(!1)
        },
        maxCount: _.BROADCASTING_MAX_ALLOWED_GUILD_IDS
      }), (0, a.jsx)(i.FormTitle, {
        tag: i.FormTitleTags.H5,
        className: m.title,
        children: I.default.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
      }), (0, a.jsxs)("div", {
        className: m.switch,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          children: I.default.Messages.AUTO_BROADCAST_TOGGLE
        }), (0, a.jsx)(i.Switch, {
          checked: j,
          onChange: G
        })]
      })]
    }), (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsx)(i.Button, {
        disabled: X,
        onClick: function() {
          if (!X) {
            if (z) {
              let [e, t] = es();
              f.PreloadedUserSettingsActionCreators.updateAsync("broadcast", l => {
                l.allowedGuildIds = e, l.allowedUserIds = t, l.allowFriends = o.BoolValue.create({
                  value: O
                }), l.autoBroadcast = o.BoolValue.create({
                  value: j
                }), et(), D()
              }, f.UserSettingsDelay.INFREQUENT_USER_ACTION);
              return
            }
            et(), D()
          }
        },
        children: l
      })
    })]
  })
}