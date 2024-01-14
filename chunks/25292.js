"use strict";
let n;
l.r(t), l.d(t, {
  COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
    return et
  },
  default: function() {
    return eu
  }
}), l("424973"), l("843762"), l("781738"), l("222007");
var a = l("448105"),
  r = l.n(a),
  i = l("917351"),
  u = l.n(i),
  o = l("195547"),
  s = l("679653"),
  c = l("966506"),
  d = l("605250"),
  f = l("385976"),
  p = l("677315"),
  h = l("361776"),
  E = l("290886"),
  g = l("866353"),
  m = l("865372"),
  A = l("364685"),
  L = l("161585"),
  y = l("401690"),
  C = l("872173"),
  S = l("233069"),
  N = l("766274"),
  _ = l("42203"),
  T = l("923959"),
  I = l("26989"),
  R = l("305961"),
  v = l("377253"),
  b = l("957255"),
  U = l("824563"),
  M = l("27618"),
  O = l("18494"),
  G = l("162771"),
  D = l("697218"),
  w = l("552712"),
  P = l("449008"),
  x = l("651879"),
  k = l("991170"),
  F = l("655518"),
  H = l("159885"),
  q = l("158998"),
  B = l("49111"),
  V = l("375822"),
  K = l("724210"),
  Y = l("782340");
let j = new d.default("AutocompleteUtils"),
  Q = () => !0,
  W = /(\t|\s)/,
  X = [];
n = l("905571").default;
let z = n.MENTION_EVERYONE,
  J = n.MENTION_HERE,
  $ = n.MENTION_CLYDE,
  Z = n.LAUNCHABLE_APPLICATIONS;

function ee() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 ? arguments[1] : void 0;
  return 1e3 * e * (null != t ? t : 1)
}
let et = [T.GUILD_SELECTABLE_CHANNELS_KEY, T.GUILD_VOCAL_CHANNELS_KEY, B.ChannelTypes.GUILD_CATEGORY];

function el(e, t) {
  let {
    exactQuery: l,
    containQuery: n,
    queryLower: a
  } = t, i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  try {
    if (l.test(e)) {
      if (e.toLocaleLowerCase() === a) return 10;
      return 7
    }
    if (n.test(e)) return 5;
    if (function(e, t) {
        let l = e.split(/(?:,| )+/);
        return l.every(e => {
          let l = RegExp(F.default.escape(e), "i");
          return l.test(t)
        })
      }(a, e)) return 3;
    if (i && r(a, e)) return 1
  } catch (e) {
    j.error(e)
  }
  return 0
}

function en(e) {
  return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
}

function ea(e) {
  let {
    query: t,
    members: l,
    limit: n,
    filter: a,
    allowSnowflake: i
  } = e, u = D.default.getUsers(), s = G.default.getGuildId(), c = t.toLocaleLowerCase(), d = (0, H.normalize)(c), f = [], p = [], h = l.length, E = 0, g = 0;
  for (; E < h;) {
    var m, A, L, y, C, S, _, T, R;
    let e, n;
    let o = l[E];
    o instanceof N.default ? (n = o, e = null === (A = I.default.getNick(s, n.id)) || void 0 === A ? void 0 : A.toLocaleLowerCase()) : (e = null === (L = o.nick) || void 0 === L ? void 0 : L.toLocaleLowerCase(), n = u[o.userId]);
    let h = null === (m = q.default.getGlobalName(n)) || void 0 === m ? void 0 : m.toLocaleLowerCase();
    if (null == a || a(n)) {
      let l = n.username.toLocaleLowerCase(),
        a = (0, H.stripDiacritics)(l),
        u = (0, H.normalize)(a),
        o = null != e ? (0, H.stripDiacritics)(e) : null,
        s = null != o ? (0, H.normalize)(o) : null,
        E = null != h ? (0, H.stripDiacritics)(h) : null,
        m = null != E ? (0, H.normalize)(E) : null;
      i && t === n.id || l.substring(0, c.length) === c || a.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == o ? void 0 : o.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c || (null == E ? void 0 : E.substring(0, c.length)) === c ? f.push({
        type: V.AutocompleterResultTypes.USER,
        record: n,
        score: 10,
        comparator: null !== (y = null != h ? h : e) && void 0 !== y ? y : l,
        sortable: null !== (C = null != E ? E : o) && void 0 !== C ? C : a
      }) : u.substring(0, d.length) === d || (null == s ? void 0 : s.substring(0, d.length)) === d || (null == m ? void 0 : m.substring(0, d.length)) === d ? f.push({
        type: V.AutocompleterResultTypes.USER,
        record: n,
        score: 1,
        comparator: null !== (S = null != h ? h : e) && void 0 !== S ? S : l,
        sortable: null !== (_ = null != E ? E : o) && void 0 !== _ ? _ : a
      }) : g < 50 && (r(c, a) || r(d, u) || null != o && r(c, o) || null != s && r(d, s) || null != E && r(c, E) || null != m && r(d, m)) && (p.push({
        type: V.AutocompleterResultTypes.USER,
        record: n,
        score: 1,
        comparator: null !== (T = null != h ? h : e) && void 0 !== T ? T : l,
        sortable: null !== (R = null != E ? E : o) && void 0 !== R ? R : a
      }), g += 1)
    }
    E += 1
  }
  return f.sort(o.default), f.length < n && (p.sort(o.default), f = f.concat(p.slice(0, Math.max(0, n - f.length)))), f.length > n && (f.length = n), f
}

function er(e, t, l) {
  let n = 0,
    a = null;
  for (let r of t) {
    let t = el(e, r, l);
    t > n && (n = t, a = r)
  }
  return null != a && (a.isFullMatch ? t.length = 0 : t.splice(t.indexOf(a), 1)), n
}

function ei(e, t) {
  let l = _.default.getChannel(e);
  return null == e || null == l ? [] : u(v.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => D.default.getUser(e.author.id)).filter(e => {
    if (null == e || e.isNonUserBot() && !e.isClyde()) return !1;
    let t = l.getGuildId();
    if (null == t) return !0;
    let n = I.default.getMember(t, e.id);
    return en(n)
  }).map(e => {
    var t;
    let n = l.getGuildId(),
      a = null != n ? I.default.getMember(n, e.id) : null;
    return {
      type: V.AutocompleterResultTypes.USER,
      record: e,
      score: 0,
      comparator: null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : q.default.getName(e)
    }
  }).take(t).value()
}
var eu = {
  queryFriends(e) {
    let {
      query: t,
      limit: l = 10,
      _fuzzy: n = !0,
      filter: a
    } = e;
    return ea({
      query: t,
      members: M.default.getFriendIDs().map(e => D.default.getUser(e)).filter(P.isNotNullish),
      limit: l,
      filter: a
    })
  },
  queryDMUsers(e) {
    let {
      query: t,
      limit: l = 10,
      filter: n
    } = e;
    return ea({
      query: t,
      members: _.default.getDMUserIds().map(e => D.default.getUser(e)).filter(P.isNotNullish),
      limit: l,
      filter: n
    })
  },
  queryChannelUsers(e) {
    let t, {
        channelId: l,
        query: n,
        limit: a = 10,
        request: r = !0,
        checkRecentlyTalkedOnEmptyQuery: i = !0,
        allowSnowflake: u = !1
      } = e,
      o = _.default.getChannel(l);
    if (null == o) return [];
    let s = o.isThread() ? _.default.getChannel(o.parent_id) : null,
      c = null != s ? s : o;
    if (null == c) return [];
    if (c.isPrivate()) {
      t = c.recipients.map(e => {
        var t;
        return {
          userId: e,
          nick: null !== (t = M.default.getNickname(e)) && void 0 !== t ? t : null
        }
      });
      let e = D.default.getCurrentUser();
      null != e && t.push({
        userId: e.id,
        nick: null
      })
    } else {
      if (0 === n.length && i) {
        let e = ei(o.id, a);
        if (e.length > 0) return e
      }
      t = I.default.getMembers(c.guild_id).filter(en), r && x.default.requestMembers(c.guild_id, n, a)
    }
    return ea({
      query: n,
      members: t,
      limit: a,
      filter: e => c.isPrivate() || k.default.can({
        permission: B.Permissions.VIEW_CHANNEL,
        user: e,
        context: c
      }),
      allowSnowflake: u
    })
  },
  queryGuildUsers(e) {
    let {
      guildId: t,
      query: l,
      limit: n = 10,
      request: a = !0,
      checkRecentlyTalkedOnEmptyQuery: r = !0,
      filter: i,
      allowSnowflake: u
    } = e;
    if (null == R.default.getGuild(t)) return [];
    if (0 === l.length && r) {
      let e = ei(O.default.getChannelId(t), n);
      if (e.length > 0) return e
    }
    let o = I.default.getMembers(t).filter(en);
    return a && l.length > 0 && x.default.requestMembers(t, l, n), ea({
      query: l,
      members: o,
      limit: n,
      filter: i,
      allowSnowflake: u
    })
  },
  queryUsers(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
      l = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
      n = arguments.length > 4 ? arguments[4] : void 0;
    return l && e.length > 0 && x.default.requestMembers(null, e, t), ea({
      query: e,
      members: u(D.default.getUsers()).values().value(),
      limit: t,
      filter: n
    })
  },
  queryChannels(e) {
    let t, {
        query: l,
        guildId: n,
        limit: a = B.MAX_AUTOCOMPLETE_RESULTS,
        fuzzy: r = !0,
        filter: i = Q,
        type: c = T.GUILD_SELECTABLE_CHANNELS_KEY,
        allowEmptyQueries: d = !1,
        requireVocalConnectAccess: f = !0,
        boosters: p = {},
        allowSnowflake: h
      } = e,
      E = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          l = e.split(" ").filter(e => "" !== e || t).map(e => {
            let t = e.toLocaleLowerCase();
            return {
              queryLower: t,
              exactQuery: RegExp("^".concat(F.default.escape(t)), "i"),
              containQuery: RegExp(F.default.escape(t), "i"),
              isFullMatch: !1
            }
          });
        if (e.includes(" ")) {
          let t = e.toLocaleLowerCase();
          l.unshift({
            queryLower: t,
            exactQuery: RegExp("^".concat(F.default.escape(t).replace(" ", "( |-)")), "i"),
            containQuery: RegExp(F.default.escape(t).replace(" ", "( |-)"), "i"),
            isFullMatch: !0
          })
        }
        return l
      }(l, d);
    t = null != n ? u(T.default.getChannels(n)[c]).map(e => e.channel).concat(y.default.computeAllActiveJoinedThreads(n)).value() : u(_.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(y.default.computeAllActiveJoinedThreads()).value();
    let g = {},
      m = [];
    for (let e of t) {
      var A, L, C, N, I;
      if (A = c, L = e.type, C = null != n, !(A === L || (C || (0, S.isGuildChannelType)(L)) && (A === T.GUILD_SELECTABLE_CHANNELS_KEY ? (0, S.isGuildSelectableChannelType)(L) || (0, S.isGuildVocalChannelType)(L) : A === T.GUILD_VOCAL_CHANNELS_KEY && (0, S.isGuildVocalChannelType)(L))) || (0, S.isGuildChannelType)(e.type) && !b.default.can(f ? e.accessPermissions : B.Permissions.VIEW_CHANNEL, e) || !i(e)) continue;
      let t = [...E],
        a = e.name.toLocaleLowerCase(),
        u = h && l === e.id,
        o = u ? 10 : er(a, t, r);
      if (0 !== o) {
        if (t.length > 0) {
          for (let l of [function(e, t) {
              if (null == e.guild_id) return;
              let l = t[e.guild_id];
              if (null == l) {
                var n;
                l = t[e.guild_id] = null === (n = R.default.getGuild(e.guild_id)) || void 0 === n ? void 0 : n.toString().toLocaleLowerCase()
              }
              return l
            }(e, g), function(e, t) {
              if (null == e.parent_id) return;
              let l = t[e.parent_id];
              if (null == l) {
                var n;
                l = t[e.parent_id] = null === (n = _.default.getChannel(e.parent_id)) || void 0 === n ? void 0 : n.name.toLocaleLowerCase()
              }
              return l
            }(e, g)]) {
            if (null == l || "" === l) continue;
            let e = er(l, t, !1);
            0 !== e && (o += .5 * e)
          }
          o = Math.min(9, o)
        }
        if (0 !== o && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || u)) {
          ;
          if (N = c, I = e.type, N === T.GUILD_SELECTABLE_CHANNELS_KEY && (0, S.isGuildVocalChannelType)(I)) o = Math.max(o - 1, .5);
          m.push({
            type: (0, S.isGuildVocalChannelType)(e.type) ? V.AutocompleterResultTypes.VOICE_CHANNEL : V.AutocompleterResultTypes.TEXT_CHANNEL,
            record: e,
            score: ee(o, p[e.id]),
            comparator: (0, s.computeChannelName)(e, D.default, M.default),
            sortable: a
          })
        }
      }
    }
    return m.sort(o.default), null != a && m.length > a && (m.length = a), m
  },
  queryGuilds(e) {
    let {
      query: t,
      limit: l = 10,
      fuzzy: n = !0,
      filter: a = Q,
      boosters: r = {}
    } = e, i = "" === t ? "" : t.toLocaleLowerCase(), s = {
      exactQuery: RegExp("^".concat(F.default.escape(i)), "i"),
      containQuery: RegExp(F.default.escape(i), "i"),
      queryLower: i
    }, c = [], d = u(R.default.getGuilds()).values().value();
    for (let e of d) {
      if (!a(e)) continue;
      let t = e.name.toLocaleLowerCase(),
        l = el(t, s, n);
      l > 0 && c.push({
        type: V.AutocompleterResultTypes.GUILD,
        record: e,
        score: ee(l, r[e.id]),
        comparator: e.toString(),
        sortable: t
      })
    }
    return c.sort(o.default), c.length > l && (c.length = l), c
  },
  queryGroupDMs(e) {
    let {
      query: t,
      limit: l = 10,
      fuzzy: n = !0,
      filter: a = Q,
      boosters: r = {}
    } = e, i = (0, H.stripDiacritics)((0, H.normalize)(t.toLocaleLowerCase())), c = {
      exactQuery: RegExp("^".concat(F.default.escape(i)), "i"),
      containQuery: RegExp(F.default.escape(i), "i"),
      queryLower: i
    }, d = u(_.default.getMutablePrivateChannels()).values().value(), f = [];
    for (let e of d) {
      if (!e.isMultiUserDM() || !a(e)) continue;
      let t = (0, s.computeChannelName)(e, D.default, M.default).toLocaleLowerCase(),
        l = (0, H.stripDiacritics)(t),
        i = el(l, c, n);
      i > 0 && f.push({
        type: V.AutocompleterResultTypes.GROUP_DM,
        record: e,
        score: ee(i, r[e.id]),
        comparator: (0, s.computeChannelName)(e, D.default, M.default),
        sortable: l
      })
    }
    return f.sort(o.default), f.length > l && (f.length = l), f
  },
  queryApplications(e) {
    let {
      query: t,
      limit: l = 10,
      fuzzy: n = !0,
      filter: a = Q
    } = e, r = t.toLocaleLowerCase(), i = {
      exactQuery: RegExp("^".concat(F.default.escape(r)), "i"),
      containQuery: RegExp(F.default.escape(r), "i"),
      queryLower: r
    }, u = Z(), s = [];
    for (let {
        application: e
      }
      of u) {
      if (!a(e)) continue;
      let t = e.name.toLocaleLowerCase(),
        l = el(t, i, n);
      l > 0 && s.push({
        type: V.AutocompleterResultTypes.APPLICATION,
        record: e,
        score: l,
        comparator: e.name,
        sortable: t
      })
    }
    return s.sort(o.default), s.length > l && (s.length = l), s
  },
  querySKUs(e) {
    let {
      query: t,
      limit: l = 10,
      fuzzy: n = !0,
      filter: a = Q
    } = e, r = t.toLocaleLowerCase(), i = {
      exactQuery: RegExp("^".concat(F.default.escape(r)), "i"),
      containQuery: RegExp(F.default.escape(r), "i"),
      queryLower: r
    }, s = u(w.default.getSKUs()).values().value(), c = [];
    for (let e of s)
      if (e.type === B.SKUTypes.DURABLE_PRIMARY && a(e)) {
        let t = e.name.toLocaleLowerCase(),
          l = el(t, i, n);
        l > 0 && c.push({
          type: V.AutocompleterResultTypes.SKU,
          record: e,
          score: l,
          comparator: e.name,
          sortable: t
        })
      } return c.sort(o.default), c.length > l && (c.length = l), c
  },
  getRecentlyTalked: ei,
  queryMentionResults(e) {
    let {
      query: t,
      channel: l,
      canMentionEveryone: n = !1,
      canMentionHere: a = !0,
      canMentionUsers: i = !0,
      canMentionRoles: o = !0,
      canMentionClyde: s = !1,
      includeAllGuildUsers: c = !1,
      includeNonMentionableRoles: d = !1,
      checkRecentlyTalkedOnEmptyQuery: f = !0,
      limit: p = B.MAX_AUTOCOMPLETE_RESULTS,
      request: h,
      allowSnowflake: E = !1
    } = e, g = i ? (c && null != l.guild_id ? this.queryGuildUsers({
      guildId: l.guild_id,
      query: t,
      limit: p,
      checkRecentlyTalkedOnEmptyQuery: f,
      request: h,
      allowSnowflake: E
    }) : this.queryChannelUsers({
      channelId: l.id,
      query: t,
      limit: p,
      checkRecentlyTalkedOnEmptyQuery: f,
      allowSnowflake: E
    })).map(e => {
      let {
        record: t,
        score: n,
        comparator: a
      } = e;
      return {
        user: t,
        score: n,
        comparator: a,
        nick: I.default.getNick(l.guild_id, t.id),
        status: U.default.getStatus(t.id)
      }
    }) : [], m = g.length, A = t.toLowerCase(), L = [];
    if (m < p && o) {
      let e = l.getGuildId(),
        t = R.default.getGuild(e);
      null != t && (u(t.roles).filter(t => {
        let {
          mentionable: l,
          name: a,
          id: i
        } = t;
        return (l || n || d) && (r(A, a.toLowerCase()) || E && A === i) && i !== e
      }).take(p - m).forEach(e => {
        L.push(e)
      }), m += L.length)
    }
    let y = [];
    return !l.isPrivate() && n && o && (m < p && r(A, z().test) && (y.push(z()), m += 1), a && m < p && r(A, J().test) && y.push(J())), s && r(A, $().test) && y.push($()), {
      users: g,
      globals: y,
      roles: L
    }
  },
  queryGuildMentionResults(e) {
    let {
      query: t,
      guildId: l,
      canMentionEveryone: n = !1,
      canMentionUsers: a = !0,
      canMentionRoles: i = !0,
      canMentionNonMentionableRoles: o = !1
    } = e, s = a ? this.queryGuildUsers({
      guildId: l,
      query: t
    }).map(e => ({
      ...e,
      status: U.default.getStatus(e.record.id)
    })) : [], c = s.length, d = t.toLowerCase(), f = [];
    if (c < B.MAX_AUTOCOMPLETE_RESULTS && i) {
      let e = R.default.getGuild(l);
      null != e && (u(e.roles).filter(e => {
        let {
          mentionable: t,
          name: a,
          id: i
        } = e;
        return (t || n || o) && r(d, a.toLowerCase()) && i !== l
      }).take(B.MAX_AUTOCOMPLETE_RESULTS - c).forEach(e => {
        f.push(e)
      }), c += f.length)
    }
    let p = [];
    return n && i && (c < B.MAX_AUTOCOMPLETE_RESULTS && r(d, z().test) && (p.push(z()), c += 1), c < B.MAX_AUTOCOMPLETE_RESULTS && r(d, J().test) && p.push(J()), p.push($())), {
      users: s,
      globals: p,
      roles: f
    }
  },
  queryChoice(e) {
    let {
      query: t,
      choices: l,
      limit: n = 10,
      fuzzy: a = !0
    } = e, r = t.toLocaleLowerCase(), i = RegExp("^".concat(F.default.escape(r)), "i"), o = RegExp(F.default.escape(r), "i"), s = u(l).map((e, t) => {
      let l = el(e.displayName.toLocaleLowerCase(), {
        exactQuery: i,
        containQuery: o,
        queryLower: r
      }, a);
      return l > 0 ? {
        choice: e,
        score: l,
        originalIndex: t
      } : null
    }).filter(P.isNotNullish).sortBy(e => -1 * e.score);
    return null !== n && (s = s.take(n)), s.value()
  },
  queryStaticRouteChannels(e) {
    let {
      query: t,
      guild: l
    } = e, n = t.toLocaleLowerCase(), a = {
      exactQuery: RegExp("^".concat(F.default.escape(n)), "i"),
      containQuery: RegExp(F.default.escape(n), "i"),
      queryLower: n
    }, r = ((0, p.canSeeGuildHome)(l.id) || (0, E.canSeeOnboardingHome)(l.id)) && !l.hasFeature(B.GuildFeatures.HUB), i = l.hasFeature(B.GuildFeatures.COMMUNITY), u = (0, h.isGuildOnboardingAvailable)(l) && l.hasFeature(B.GuildFeatures.COMMUNITY), o = [{
      id: K.StaticChannelId.SERVER_GUIDE,
      name: Y.default.Messages.SERVER_GUIDE
    }, {
      id: K.StaticChannelId.CHANNEL_BROWSER,
      name: Y.default.Messages.CHANNEL_BROWSER_TITLE
    }, {
      id: K.StaticChannelId.CUSTOMIZE_COMMUNITY,
      name: Y.default.Messages.CHANNELS_AND_ROLES
    }], s = [];
    for (let e of o) {
      if (e.id === K.StaticChannelId.SERVER_GUIDE && !r || e.id === K.StaticChannelId.CHANNEL_BROWSER && !i || e.id === K.StaticChannelId.CUSTOMIZE_COMMUNITY && !u) continue;
      let t = e.name.toLocaleLowerCase(),
        n = el(t, a, !1);
      n > 0 && s.push(new S.UnknownChannelRecord({
        id: e.id,
        name: e.name,
        type: B.ChannelTypes.UNKNOWN,
        guild_id: l.id
      }))
    }
    return s
  },
  queryChannelResults(e) {
    let {
      query: t,
      channel: l,
      type: n = T.GUILD_SELECTABLE_CHANNELS_KEY,
      channelTypes: a
    } = e, r = this.queryChannels({
      query: t,
      guildId: l.getGuildId(),
      limit: void 0,
      fuzzy: void 0,
      filter: e => null == a || a.includes(e.type),
      type: n,
      allowEmptyQueries: !0
    }).map(e => e.record);
    return {
      channels: r
    }
  },
  queryApplicationCommandChannelResults(e) {
    let {
      query: t,
      channel: l,
      channelTypes: n,
      limit: a = B.MAX_AUTOCOMPLETE_RESULTS,
      allowSnowflake: r
    } = e;
    if (null == l.guild_id) {
      let e = [];
      return (null == n || n.includes(l.type)) && e.push(l), {
        channels: e
      }
    }
    let i = [];
    for (let e of et) i = i.concat(this.queryChannels({
      query: t,
      guildId: l.guild_id,
      limit: a,
      fuzzy: !0,
      filter: e => null == n || n.includes(e.type),
      type: e,
      allowEmptyQueries: !0,
      requireVocalConnectAccess: !1,
      allowSnowflake: r
    }));
    return i = i.filter(e => {
      let {
        record: t
      } = e;
      return "null" !== t.id
    }).sort(c.default), null != a && i.length > a && (i = i.slice(0, a)), {
      channels: i.map(e => e.record)
    }
  },
  queryChoiceResults(e) {
    let {
      query: t,
      choices: l
    } = e, n = this.queryChoice({
      query: t,
      choices: l,
      limit: null
    }).map(e => e.choice);
    return {
      choices: n
    }
  },
  queryEmojiResults(e) {
    let {
      query: t,
      channel: l,
      intention: n,
      canViewAndUsePackEmoji: a,
      maxCount: r = B.MAX_AUTOCOMPLETE_RESULTS,
      matchComparator: i
    } = e;
    C.FrecencyUserSettingsActionCreators.loadIfNecessary();
    let u = f.default.searchWithoutFetchingLatest({
      channel: l,
      query: t,
      count: r,
      intention: n,
      canViewAndUsePackEmoji: a,
      matchComparator: i
    });
    return {
      emojis: u
    }
  },
  queryStickers(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      [l, n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, Q],
      {
        stickerMetadata: a
      } = A.default,
      r = D.default.getCurrentUser(),
      i = new Set,
      o = [];
    for (let u of (C.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
      if ("" === u) continue;
      let e = u.toLocaleLowerCase(),
        s = (0, H.stripDiacritics)(e),
        c = RegExp("^".concat(F.default.escape(s)), "i"),
        d = RegExp("".concat(F.default.escape(s)), "i");
      a.forEach((a, u) => {
        let s = 0,
          f = null,
          p = A.default.getStickerById(u);
        if (null == p || !n(p, (0, g.getStickerSendability)(p, r, l))) return;
        for (let l of a) {
          let {
            type: n,
            value: a
          } = l, r = function(e) {
            switch (e) {
              case L.StickerMetadataTypes.STICKER_NAME:
                return 11;
              case L.StickerMetadataTypes.CORRELATED_EMOJI:
                return 6;
              case L.StickerMetadataTypes.TAG:
                return 1;
              case L.StickerMetadataTypes.GUILD_NAME:
              case L.StickerMetadataTypes.PACK_NAME:
                return 8;
              default:
                return 1
            }
          }(n), i = 0;
          t ? a === e ? i = 10 * r : c.test(a) ? i = 7 * r : (n === L.StickerMetadataTypes.GUILD_NAME || n === L.StickerMetadataTypes.PACK_NAME || n === L.StickerMetadataTypes.STICKER_NAME) && d.test(a) && (i = 5 * r) : a === e && (i = 10 * r, f = a), i > s && (s = i, f = a)
        }
        let h = m.default.stickerFrecencyWithoutFetchingLatest.getScore(u);
        null != h && (s *= h / 100), s > 0 && null != f && !i.has(p.id) && (i.add(p.id), o.push({
          sticker: p,
          comparator: f,
          score: s
        }))
      })
    }
    return 0 === (o = u(o).sortBy(e => -1 * e.score).value()).length && (o = X), o
  },
  matchSentinel(e, t, l) {
    let n = W.test(t);
    return !n && e === l
  },
  hasSameRoleAsUsername(e, t) {
    var l;
    if (!t.isPomelo()) return !1;
    let n = R.default.getGuild(e.getGuildId()),
      a = null !== (l = null == n ? void 0 : n.roles) && void 0 !== l ? l : {};
    for (let {
        name: e
      }
      of Object.values(a))
      if (t.username.startsWith(e.toLowerCase())) return !0;
    return !1
  }
}