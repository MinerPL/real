"use strict";
let s;
l.r(t), l.d(t, {
  default: function() {
    return Y
  }
}), l("424973"), l("222007"), l("843762"), l("808653");
var u = l("917351"),
  i = l.n(u),
  n = l("446674"),
  r = l("95410"),
  a = l("913144"),
  o = l("123225"),
  h = l("681643"),
  d = l("934306"),
  c = l("615387"),
  p = l("401690"),
  _ = l("161778"),
  f = l("271938"),
  R = l("42203"),
  y = l("474643"),
  E = l("923959"),
  C = l("26989"),
  g = l("305961"),
  T = l("957255"),
  m = l("660478"),
  A = l("18494"),
  U = l("162771"),
  I = l("282109"),
  N = l("25292"),
  S = l("449008"),
  v = l("49111"),
  L = l("782340");
let D = "seenQSTutorial",
  M = [o.AutocompleterResultTypes.USER, o.AutocompleterResultTypes.GROUP_DM, o.AutocompleterResultTypes.TEXT_CHANNEL, o.AutocompleterResultTypes.GUILD, o.AutocompleterResultTypes.APPLICATION, o.AutocompleterResultTypes.LINK],
  O = 0,
  b = !1,
  H = !1,
  k = null,
  G = [],
  P = null,
  Q = 0,
  q = [],
  w = [];

function x() {
  H = g.default.getGuildCount() >= 3 || i.size(R.default.getMutablePrivateChannels()) >= 20, q = []
}

function W(e) {
  let t = (0, h.default)(e);
  return null == t || null != k && k !== t.type ? null : t
}

function F(e) {
  var t;
  let {
    query: l,
    queryMode: u
  } = e, i = (0, d.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : null !== (t = U.default.getGuildId()) && void 0 !== t ? t : void 0, n = new Set(["user:".concat(f.default.getId())]);
  null != i && n.add("guild:".concat(i)), s = null != s ? s : new o.default(K, M, null != u ? 100 : 5, {
    frecencyBoosters: !0,
    blacklist: n
  }), P = null, Q = l.length, k = u, s.search(l)
}

function K(e, t) {
  ! function(e, t) {
    if (e.length !== t.length) return !1;
    for (let l = 0; l < e.length; l++) {
      let s = e[l],
        u = t[l];
      if (s.record.id !== u.record.id) return !1
    }
    return !0
  }(e = "" === (t = t.trim()).trim() ? function() {
    var e, t;
    let l = null !== (e = U.default.getGuildId()) && void 0 !== e ? e : void 0,
      s = null !== (t = A.default.getChannelId()) && void 0 !== t ? t : void 0;
    switch (k) {
      case o.AutocompleterResultTypes.USER: {
        let e = f.default.getId();
        return N.default.getRecentlyTalked(s, 100).filter(t => {
          let {
            record: l
          } = t;
          return l.id !== e
        })
      }
      case o.AutocompleterResultTypes.APPLICATION:
        return N.default.queryApplications({
          query: "",
          limit: 100,
          fuzzy: !0
        });
      case o.AutocompleterResultTypes.GUILD:
        return N.default.queryGuilds({
          query: "",
          limit: 100,
          fuzzy: !0
        });
      case o.AutocompleterResultTypes.TEXT_CHANNEL:
        return N.default.queryChannels({
          query: "",
          guildId: U.default.getGuildId(),
          limit: 100,
          fuzzy: !0
        });
      case o.AutocompleterResultTypes.VOICE_CHANNEL:
        return N.default.queryChannels({
          query: "",
          guildId: U.default.getGuildId(),
          limit: 100,
          fuzzy: !0,
          filter: () => !0,
          type: E.GUILD_VOCAL_CHANNELS_KEY
        })
    }
    let u = [],
      n = [];
    for (let e = 1; e < w.length; e += 1) {
      let t = W(w[e]);
      if (null != t)(t.type !== o.AutocompleterResultTypes.TEXT_CHANNEL && t.type !== o.AutocompleterResultTypes.VOICE_CHANNEL || T.default.can(v.Permissions.VIEW_CHANNEL, t.record)) && n.push(t)
    }
    n.length > 0 && u.push((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_LAST_CHANNEL), ...n);
    let r = function(e) {
      let t = [];
      return y.default.getRecentlyEditedDrafts(y.DraftType.ChannelMessage).forEach(l => {
        let {
          channelId: s
        } = l;
        if (e(s)) return;
        let u = W(s);
        null != u && t.push(u)
      }), t
    }(e => e === s || w.includes(e));
    r.length > 0 && u.push((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_DRAFTS), ...r);
    let a = m.default.getMentionChannelIds().filter(e => e !== s && !w.includes(e)).map(e => W(e)).filter(S.isNotNullish).reverse();
    if (a.length > 0 && (u.push((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_MENTIONS)), u = u.concat(a)), null != l) {
      let e = E.default.getSelectableChannelIds(l).filter(e => {
        let t = R.default.getChannel(e);
        return !(null == t || e === s || w.includes(e) || I.default.isChannelMuted(t.guild_id, e) || null != t.parent_id && I.default.isChannelMuted(t.guild_id, t.parent_id)) && (0, c.getHasImportantUnread)(t)
      }).map(e => W(e)).filter(e => e);
      Object.values(p.default.getActiveJoinedUnreadThreadsForGuild(l)).forEach(t => {
        for (let l in t) {
          let t = W(l);
          null != t && e.push(t)
        }
      }), e.length > 0 && (u.push((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), u = u.concat(e))
    }
    return i(u).uniqBy(e => e.record.id).value()
  }() : e, q) && (q = e, ! function(e, t) {
    switch (k) {
      case o.AutocompleterResultTypes.USER: {
        let t = g.default.getGuild(U.default.getGuildId());
        e.unshift((0, o.createHeaderResult)(null != t ? L.default.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
          name: t.name
        }) : L.default.Messages.QUICKSWITCHER_QUERYMODE_USERS)), G = e;
        break
      }
      case o.AutocompleterResultTypes.TEXT_CHANNEL:
        e.unshift((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), G = e;
        break;
      case o.AutocompleterResultTypes.VOICE_CHANNEL:
        e.unshift((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), G = e;
        break;
      case o.AutocompleterResultTypes.GUILD:
        e.unshift((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), G = e;
        break;
      case o.AutocompleterResultTypes.APPLICATION:
        e.unshift((0, o.createHeaderResult)(L.default.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), G = e;
        break;
      default:
        G = e
    }
    if (t !== P) P = t, Q = Math.max(t.length, Q), O = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, -1, G);
    else {
      let e = G[O];
      null != e && e.type === o.AutocompleterResultTypes.HEADER && (O = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, O, G))
    }
    B.emitChange()
  }(e, t))
}

function z() {
  P = null, Q = 0, q = [], null != s && (s.destroy(), s = null)
}
class V extends n.default.PersistedStore {
  initialize(e) {
    var t;
    this.waitFor(C.default, g.default, R.default), this.syncWith([_.default], () => !0), b = r.default.get(D) || !1, w = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
  }
  getState() {
    return {
      channelHistory: w
    }
  }
  isOpen() {
    return null != s
  }
  getResultTotals(e) {
    return null == s ? 0 : null == e ? s.results.reduce((e, t) => t.type !== o.AutocompleterResultTypes.HEADER ? e + 1 : e, 0) : s.results.reduce((t, l) => l.type === e ? t + 1 : t, 0)
  }
  channelNoticePredicate(e, t) {
    let l = Date.now() - t >= v.CHANNEL_NOTICE_SHOW_DELAY;
    return H && l
  }
  getFrequentGuilds() {
    return null != s ? s.queryGuilds("", 100) : null
  }
  getFrequentGuildsLength() {
    return null != s ? s.queryGuilds("", 100).length : 0
  }
  getChannelHistory() {
    return w
  }
  getProps() {
    return {
      theme: _.default.theme,
      query: null != s ? s.query : "",
      queryMode: k,
      results: G,
      selectedIndex: O,
      seenTutorial: b,
      maxQueryLength: Q
    }
  }
}
V.displayName = "QuickSwitcherStore", V.persistKey = "QuickSwitcherStore";
let B = new V(a.default, {
  CONNECTION_OPEN: x,
  CONNECTION_OPEN_SUPPLEMENTAL: x,
  QUICKSWITCHER_SHOW: F,
  SHOW_ACTION_SHEET_QUICK_SWITCHER: F,
  QUICKSWITCHER_HIDE: z,
  OVERLAY_SET_INPUT_LOCKED: z,
  HIDE_ACTION_SHEET_QUICK_SWITCHER: z,
  QUICKSWITCHER_SEARCH: function(e) {
    var t, l;
    let {
      query: u,
      queryMode: i
    } = e;
    if (null == s) return !1;
    let n = null !== (t = U.default.getGuildId()) && void 0 !== t ? t : null;
    if (k !== i) {
      s.setResultTypes(null != i ? [i] : M), s.setLimit(null != i ? 100 : 5);
      let e = null !== (l = U.default.getGuildId()) && void 0 !== l ? l : void 0;
      i === o.AutocompleterResultTypes.USER && null != e ? s.setOptions({
        userFilters: {
          guild: e,
          friends: !0
        }
      }, !0) : i === o.AutocompleterResultTypes.VOICE_CHANNEL ? s.setOptions({
        voiceChannelGuildFilter: null
      }, !0) : s.setOptions({
        userFilters: null,
        voiceChannelGuildFilter: void 0
      }, !0)
    }
    k = i, s.search(u, k === o.AutocompleterResultTypes.USER ? n : void 0)
  },
  QUICKSWITCHER_SELECT: function(e) {
    O = e.selectedIndex
  },
  QUICKSWITCHER_SWITCH_TO: function() {
    if (b) return !1;
    b = !0, r.default.set(D, !0)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) return !1;
    (w = w.filter(e => e !== t)).unshift(t), w.length > 4 && (w.length = 4)
  }
});
var Y = B