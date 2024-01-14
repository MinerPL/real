"use strict";
l.r(t), l.d(t, {
  default: function() {
    return D
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("917351"),
  r = l("446674"),
  i = l("750028"),
  o = l("77078"),
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
  _ = l("835236"),
  R = l("844153"),
  p = l("49111"),
  I = l("606762"),
  v = l("782340"),
  m = l("147594");

function D(e) {
  let {
    headerText: t = v.default.Messages.BROADCASTING_SETTINGS,
    buttonCTA: l = v.default.Messages.BROADCAST_SETTINGS_SAVE,
    transitionState: D,
    onClose: C,
    onSave: N
  } = e, y = (0, T.useBroadcastingStoredSelectedTags)(), [x, O] = n.useState(y), [L, b] = n.useState(""), M = c.BroadcastAllowFriends.useSetting(), [w, B] = n.useState(null == M || M), U = c.BroadcastAutoBroadcast.useSetting(), [G, j] = n.useState(U), [P, k] = n.useState(!1), [F, K] = n.useState(!1), H = (0, E.useSelfBroadcast)(), V = (0, g.default)(null == H ? void 0 : H.channelId), z = n.useMemo(() => M !== w || !(0, s.isEqual)(y, x) || U !== G, [M, w, y, x, U, G]), W = null != N, Y = n.useMemo(() => w || Object.keys(x[I.RowType.USER]).length > 0 || Object.keys(x[I.RowType.GUILD]).length > 0, [w, x]), X = !Y && null != H || !Y && W || !z && !W, q = n.useMemo(() => "@" === L.trim().charAt(0), [L]), Z = (0, r.useStateFromStoresArray)([S.default], () => S.default.getGuildIds()), Q = (0, T.useFilteredGuilds)(Z), J = n.useMemo(() => Q.map(e => e.id), [Q]), [$, ee] = (0, T.useBroadcastingPrivacyAudience)(q, function(e) {
    var t;
    let l = (t = L.trim(), q ? t.slice(1) : t),
      a = RegExp("".concat(A.default.escape(l)), "i");
    return a.test(e)
  }, w);

  function et() {
    var e;
    null == N || N();
    let [t, l] = es();
    u.default.trackWithMetadata(p.AnalyticEvents.BROADCAST_SETTINGS_UPDATED, {
      auto_broadcast: G,
      broadcast_to_all_friends: w,
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
    b(e)
  }

  function ea(e, t) {
    let l = (0, d.getFullRowId)(t);
    O(a => {
      let n = {
        ...a
      };
      return n[e] = {
        ...n[e]
      }, l in n[e] ? delete n[e][l] : n[e][l] = (0, T.selectedTagFromRowData)(t), n
    })
  }

  function en(e, t) {
    O(l => {
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
    Object.values(x[I.RowType.USER]).forEach(e => {
      let {
        row: l
      } = e;
      return t.add(l.id)
    }), Object.values(x[I.RowType.GUILD]).forEach(t => {
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
      h.default.requestMembers(e, L.trim())
    })
  }, [J, L]), (0, a.jsxs)(o.ModalRoot, {
    transitionState: D,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xl/semibold",
      className: m.header,
      children: t
    }), (0, a.jsx)(o.ModalCloseButton, {
      onClick: C,
      className: m.close
    }), (0, a.jsxs)(o.ModalContent, {
      className: m.content,
      paddingFix: !1,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: m.description,
        children: v.default.Messages.BROADCASTING_DESCRIPTION
      }), (0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: m.title,
        children: v.default.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
      }), (0, a.jsxs)("div", {
        className: m.switch,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: v.default.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
        }), (0, a.jsx)(o.Switch, {
          checked: w,
          onChange: e => {
            B(e)
          }
        })]
      }), (0, a.jsx)(_.default, {
        selectedTags: x[I.RowType.USER],
        query: L,
        onQueryChange: el,
        onClickRow: e => ea(I.RowType.USER, e),
        onRemoveTag: e => en(I.RowType.USER, e),
        title: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
        hintText: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
          count: R.BROADCASTING_MAX_ALLOWED_USER_IDS
        }),
        placeholderText: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
        users: $,
        expanded: P,
        setExpanded: e => {
          el(""), k(e), K(!1)
        },
        maxCount: R.BROADCASTING_MAX_ALLOWED_USER_IDS
      }), (0, a.jsx)(_.default, {
        selectedTags: x[I.RowType.GUILD],
        query: L,
        onQueryChange: el,
        onClickRow: e => ea(I.RowType.GUILD, e),
        onRemoveTag: e => en(I.RowType.GUILD, e),
        title: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
        hintText: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
          count: R.BROADCASTING_MAX_ALLOWED_GUILD_IDS
        }),
        placeholderText: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
        guilds: ee,
        expanded: F,
        setExpanded: e => {
          el(""), K(e), k(!1)
        },
        maxCount: R.BROADCASTING_MAX_ALLOWED_GUILD_IDS
      }), (0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: m.title,
        children: v.default.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
      }), (0, a.jsxs)("div", {
        className: m.switch,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: v.default.Messages.AUTO_BROADCAST_TOGGLE
        }), (0, a.jsx)(o.Switch, {
          checked: G,
          onChange: j
        })]
      })]
    }), (0, a.jsx)(o.ModalFooter, {
      children: (0, a.jsx)(o.Button, {
        disabled: X,
        onClick: function() {
          if (!X) {
            if (z) {
              let [e, t] = es();
              f.PreloadedUserSettingsActionCreators.updateAsync("broadcast", l => {
                l.allowedGuildIds = e, l.allowedUserIds = t, l.allowFriends = i.BoolValue.create({
                  value: w
                }), l.autoBroadcast = i.BoolValue.create({
                  value: G
                }), et(), C()
              }, f.UserSettingsDelay.INFREQUENT_USER_ACTION);
              return
            }
            et(), C()
          }
        },
        children: l
      })
    })]
  })
}