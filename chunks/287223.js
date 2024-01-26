"use strict";
n.r(t), n.d(t, {
  guessGuildModeWithRemoteData: function() {
    return c
  },
  guessGuildModeWithLocalData: function() {
    return m
  }
}), n("808653");
var i = n("917351"),
  a = n.n(i),
  l = n("233069"),
  s = n("42203"),
  r = n("319781"),
  o = n("525065"),
  u = n("718517"),
  d = n("380353");

function c(e, t, n, i, a) {
  var l, r, u, c;
  let m = s.default.getMutableGuildChannelsForGuild(e.id),
    h = i.filter(e => e.channel_id in m),
    g = null !== (l = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== l ? l : {},
    _ = o.default.getMemberCount(e.id),
    p = f("year", i, h, e => {
      var t;
      return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
    }),
    S = f("one month", i, h, e => {
      var t;
      return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
    }),
    v = f("three month", i, h, e => {
      var t;
      return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
    }),
    T = f("six month", i, h, e => {
      var t;
      return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
    }),
    E = [S, v, T, p],
    N = 0,
    I = 0;
  h.forEach(e => {
    var t;
    N++, I += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
  });
  let y = "\n**Pain**:\n- Everyones: ".concat(d.PainLevel[null !== (r = g.everyones) && void 0 !== r ? r : 0], "\n- Messages: ").concat(d.PainLevel[null !== (u = g.messages) && void 0 !== u ? u : 0], "\n- Size: ").concat(_, "\n**Remote**:\n- Channels: ").concat(N, "\n- AllVisits: ").concat(E.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(E.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(E.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(E.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(I, "\n"),
    O = v.guildOpens >= .02 * v.totalOpensAcrossAllServers,
    C = (null !== (c = p.guildOpens) && void 0 !== c ? c : 0) > 0;
  if (g.messages === d.PainLevel.High) {
    if (!a) return [d.Mode.UseGreyDot, O, "UseGreyDot" + y];
    if (!O && C) return [d.Mode.UseGreyDot, O, "UseGreyDot" + y]
  }
  return [d.Mode.KeepAsIs, O, "KeepAsIs" + y]
}

function f(e, t, n, i) {
  let l = t.reduce((e, t) => e + i(t), 0),
    s = n.reduce((e, t) => e + i(t), 0),
    r = a.sortBy(n, i).reverse()[0],
    o = null == r ? 0 : i(r),
    u = (o / s * 100).toFixed(1);
  return {
    label: e,
    totalOpensAcrossAllServers: l,
    guildOpens: s,
    biggestChannel: o,
    biggestChannelFormatted: u
  }
}

function m(e, t) {
  var n, i;
  let a = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
    s = null !== (i = o.default.getMemberCount(e.id)) && void 0 !== i ? i : 0,
    c = Date.now() - u.default.Millis.DAYS_30,
    f = r.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof l.ChannelRecordBase && t.guild_id === e.id),
    m = f.filter(e => {
      var t, n;
      let i = null !== (n = null === (t = r.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
      return 0 !== i.length && i[i.length - 1] >= c
    }),
    h = m.length >= 5,
    g = f.reduce((e, t) => {
      var n, i;
      return e + (null !== (i = null === (n = r.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== i ? i : 0)
    }, 0),
    _ = "\n- **Local**:\n    - Guild Visits: ".concat(g, "\n    - Channels: ").concat(f.length, "\n    - Recent Channels: ").concat(m.length, "\n");
  return a.messages === d.PainLevel.High || s > 1e3 ? [d.Mode.UseGreyDot, h, "SuggestGreyDot" + _] : [d.Mode.KeepAsIs, h, "KeepAsIs" + _]
}