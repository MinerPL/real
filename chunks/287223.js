            "use strict";
            n.r(t), n.d(t, {
                guessGuildModeWithRemoteData: function() {
                    return c
                },
                guessGuildModeWithLocalData: function() {
                    return m
                }
            }), n("808653");
            var a = n("917351"),
                i = n.n(a),
                s = n("233069"),
                l = n("42203"),
                r = n("319781"),
                u = n("525065"),
                o = n("718517"),
                d = n("380353");

            function c(e, t, n, a) {
                var i, s, r;
                let o = l.default.getMutableGuildChannelsForGuild(e.id),
                    c = a.filter(e => e.channel_id in o),
                    m = null !== (i = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== i ? i : {},
                    _ = u.default.getMemberCount(e.id),
                    h = f("year", a, c, e => {
                        var t;
                        return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
                    }),
                    g = f("one month", a, c, e => {
                        var t;
                        return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
                    }),
                    S = f("three month", a, c, e => {
                        var t;
                        return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
                    }),
                    p = f("six month", a, c, e => {
                        var t;
                        return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
                    }),
                    E = [g, S, p, h],
                    T = 0,
                    v = 0;
                c.forEach(e => {
                    var t;
                    T++, v += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
                });
                let N = "\n**Pain**:\n- Everyones: ".concat(d.PainLevel[null !== (s = m.everyones) && void 0 !== s ? s : 0], "\n- Messages: ").concat(d.PainLevel[null !== (r = m.messages) && void 0 !== r ? r : 0], "\n- Size: ").concat(_, "\n**Remote**:\n- Channels: ").concat(T, "\n- AllVisits: ").concat(E.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(E.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(E.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(E.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(v, "\n"),
                    I = S.guildOpens >= .02 * S.totalOpensAcrossAllServers;
                return m.messages !== d.PainLevel.High || I ? [d.Mode.KeepAsIs, I, "KeepAsIs" + N] : [d.Mode.UseGreyDot, I, "UseGreyDot" + N]
            }

            function f(e, t, n, a) {
                let s = t.reduce((e, t) => e + a(t), 0),
                    l = n.reduce((e, t) => e + a(t), 0),
                    r = i.sortBy(n, a).reverse()[0],
                    u = null == r ? 0 : a(r),
                    o = (u / l * 100).toFixed(1);
                return {
                    label: e,
                    totalOpensAcrossAllServers: s,
                    guildOpens: l,
                    biggestChannel: u,
                    biggestChannelFormatted: o
                }
            }

            function m(e, t) {
                var n, a;
                let i = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
                    l = null !== (a = u.default.getMemberCount(e.id)) && void 0 !== a ? a : 0,
                    c = Date.now() - o.default.Millis.DAYS_30,
                    f = r.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof s.ChannelRecordBase && t.guild_id === e.id),
                    m = f.filter(e => {
                        var t, n;
                        let a = null !== (n = null === (t = r.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                        return 0 !== a.length && a[a.length - 1] >= c
                    }),
                    _ = m.length >= 5,
                    h = f.reduce((e, t) => {
                        var n, a;
                        return e + (null !== (a = null === (n = r.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== a ? a : 0)
                    }, 0),
                    g = "\n- **Local**:\n    - Guild Visits: ".concat(h, "\n    - Channels: ").concat(f.length, "\n    - Recent Channels: ").concat(m.length, "\n");
                return i.messages === d.PainLevel.High || l > 1e3 ? [d.Mode.UseGreyDot, _, "SuggestGreyDot" + g] : [d.Mode.KeepAsIs, _, "KeepAsIs" + g]
            }