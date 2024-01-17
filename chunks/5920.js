"use strict";
l.r(t), l.d(t, {
  selectedTagFromRowData: function() {
    return v
  },
  useFilteredGuilds: function() {
    return I
  },
  useBroadcastingPrivacyAudience: function() {
    return D
  },
  useBroadcastingStoredSelectedTags: function() {
    return x
  },
  sanitizeAllowedGuildIds: function() {
    return N
  },
  sanitizeAllowedUserIds: function() {
    return y
  }
}), l("424973"), l("222007");
var a = l("884691"),
  n = l("627445"),
  s = l.n(n),
  r = l("249654"),
  o = l("446674"),
  i = l("137223"),
  u = l("355313"),
  d = l("845579"),
  c = l("271938"),
  f = l("42203"),
  S = l("525065"),
  h = l("26989"),
  A = l("305961"),
  g = l("27618"),
  E = l("677099"),
  T = l("697218"),
  R = l("158998"),
  _ = l("844153"),
  p = l("606762");

function v(e) {
  let t;
  return e.rowType === p.RowType.USER ? t = {
    type: i.RichTagTypes.USER,
    label: e.name,
    avatar: e.avatarURL
  } : e.rowType === p.RowType.GUILD && (t = {
    type: i.RichTagTypes.GUILD,
    label: e.name,
    guild: e.guild
  }), s(null != t, "RowData must be a guild or a user"), {
    display: t,
    row: e
  }
}

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    l = (0, o.useStateFromStoresArray)([A.default, S.default], () => {
      let l = [];
      return e.forEach(e => {
        var a;
        let n = A.default.getGuild(e),
          s = null !== (a = S.default.getMemberCount(e)) && void 0 !== a ? a : _.BROADCASTING_GUILDS_MAX_MEMBER_COUNT;
        null != n && s < _.BROADCASTING_GUILDS_MAX_MEMBER_COUNT && (null == t ? void 0 : t(n.name)) && l.push(n)
      }), l
    }, [e, t]);
  return l
}

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    l = I(e, t),
    n = a.useMemo(() => l.map(e => ({
      rowType: p.RowType.GUILD,
      name: e.name,
      id: e.id,
      disabled: !1,
      guild: e,
      key: "".concat(p.RowType.GUILD, ":").concat(e.id)
    })), [l]);
  return n
}

function C(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return e.filter(e => null != e && (null == t ? void 0 : t(e.username))).map(e => ({
    rowType: p.RowType.USER,
    name: R.default.getUserTag(e),
    id: e.id,
    disabled: l && g.default.isFriend(e.id),
    avatarURL: e.getAvatarURL(null, 24),
    key: "".concat(p.RowType.USER, ":").concat(e.id)
  }))
}

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
    l = arguments.length > 2 ? arguments[2] : void 0,
    n = (0, o.useStateFromStores)([E.default], () => E.default.getFlattenedGuildIds()),
    s = m(n, t),
    i = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0,
        t = arguments.length > 1 ? arguments[1] : void 0,
        l = arguments.length > 2 ? arguments[2] : void 0,
        n = (0, o.useStateFromStoresArray)([g.default], () => g.default.getFriendIDs()),
        s = I(t),
        i = (0, o.useStateFromStores)([c.default], () => c.default.getId()),
        u = (0, o.useStateFromStores)([h.default], () => h.default.getMemberVersion()),
        d = a.useMemo(() => {
          let e = new Set(n);
          return s.forEach(t => {
            let l = h.default.getMemberIds(t.id);
            l.forEach(t => {
              !e.has(t) && !g.default.isBlocked(t) && e.add(t)
            })
          }), e
        }, [s, n, u]),
        S = (0, o.useStateFromStoresArray)([T.default], () => [...d].map(e => T.default.getUser(e)), [d]),
        A = S.filter(e => null != e && !e.bot && e.id !== i).sort((e, t) => {
          let l = f.default.getChannel(f.default.getDMFromUserId(null == e ? void 0 : e.id)),
            a = f.default.getChannel(f.default.getDMFromUserId(null == t ? void 0 : t.id));
          return r.default.compare(null == l ? void 0 : l.lastMessageId, null == a ? void 0 : a.lastMessageId) > 0 ? -1 : 1
        });
      return C(A, e, l)
    }(t, n, l);
  return [i, e ? [] : s]
}

function x() {
  let e = d.BroadcastAllowedGuildIds.useSetting(),
    t = d.BroadcastAllowedUserIds.useSetting(),
    l = {},
    a = {};
  if (m(e).forEach(e => {
      let t = (0, u.getFullRowId)(e);
      l[t] = v(e)
    }), t.length > 0) {
    let e = t.map(e => T.default.getUser(e)).filter(e => null != e);
    C(e).map(e => {
      let t = (0, u.getFullRowId)(e);
      a[t] = v(e)
    })
  }
  return {
    [p.RowType.GUILD]: l,
    [p.RowType.USER]: a
  }
}

function N(e) {
  let t = c.default.getId(),
    l = e;
  return l.length > _.BROADCASTING_MAX_ALLOWED_GUILD_IDS && (l = l.slice(0, _.BROADCASTING_MAX_ALLOWED_GUILD_IDS)), l = l.filter(e => {
    var l;
    return h.default.isMember(e, t) && (null !== (l = S.default.getMemberCount(e)) && void 0 !== l ? l : _.BROADCASTING_GUILDS_MAX_MEMBER_COUNT) < _.BROADCASTING_GUILDS_MAX_MEMBER_COUNT
  })
}

function y(e) {
  let t = e;
  return t.length > _.BROADCASTING_MAX_ALLOWED_USER_IDS && (t = t.slice(0, _.BROADCASTING_MAX_ALLOWED_USER_IDS)), t
}