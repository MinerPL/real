            "use strict";
            s.r(t), s.d(t, {
                guessGuildModeWithRemoteData: function() {
                    return E
                },
                guessGuildModeWithLocalData: function() {
                    return m
                }
            }), s("222007"), s("808653");
            var a = s("917351"),
                n = s.n(a),
                l = s("233069"),
                i = s("42203"),
                r = s("319781"),
                o = s("525065"),
                d = s("282109"),
                u = s("718517"),
                c = s("380353"),
                S = s("49111");

            function E(e, t, s, a) {
                var n, l, r;
                let u = d.default.isMuted(e.id) && !d.default.isTemporarilyMuted(e.id),
                    E = d.default.getMessageNotifications(e.id),
                    m = E === S.UserNotificationSettings.ALL_MESSAGES,
                    T = i.default.getMutableGuildChannelsForGuild(e.id),
                    _ = a.filter(e => e.channel_id in T),
                    g = null !== (n = s.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
                    h = o.default.getMemberCount(e.id),
                    I = g.everyones === c.PainLevel.High,
                    N = g.messages === c.PainLevel.Low,
                    p = f("year", a, _, e => {
                        var t;
                        return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
                    }),
                    C = f("one month", a, _, e => {
                        var t;
                        return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
                    }),
                    A = f("three month", a, _, e => {
                        var t;
                        return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
                    }),
                    O = f("six month", a, _, e => {
                        var t;
                        return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
                    }),
                    x = [C, A, O, p],
                    M = 0,
                    R = 0;
                _.forEach(e => {
                    var t;
                    M++, R += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
                });
                let v = "\n**Pain**:\n- Everyones: ".concat(c.PainLevel[null !== (l = g.everyones) && void 0 !== l ? l : 0], "\n- Messages: ").concat(c.PainLevel[null !== (r = g.messages) && void 0 !== r ? r : 0], "\n- Size: ").concat(h, "\n**Remote**:\n- Channels: ").concat(M, "\n- AllVisits: ").concat(x.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(x.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(x.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(x.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(R, "\n");
                if (!u && m) return [c.Mode.CareALot, c.Confidence.High, "Guild is All Messages ".concat(v)];
                if (null != h && h < t.smallServerSize && !I) return u ? [c.Mode.CareALittle, c.Confidence.Low, "Small server with no everyone pain, but was muted ".concat(v)] : [c.Mode.CareALot, c.Confidence.High, "Small server with no everyone pain ".concat(v)];
                if (N && !I) return u ? [c.Mode.CareALittle, c.Confidence.Low, "Quiet server with no everyone pain, but was muted ".concat(v)] : [c.Mode.CareALot, c.Confidence.High, "Quiet server with no everyone pain ".concat(v)];
                for (let e of x) {
                    let s = e.totalOpensAcrossAllServers * t.careALot.yearOpenPerc;
                    if (e.guildOpens > s) {
                        if (u) return [c.Mode.CareALittle, c.Confidence.Low, "1% of ".concat(e.label, " channel visits, but server was muted before ").concat(v)];
                        return [c.Mode.CareALot, c.Confidence.High, "1% of ".concat(e.label, " channel visits ").concat(v)]
                    }
                }
                if (null != h && h < t.mediumServerSize && !I) return u ? [c.Mode.CareALittle, c.Confidence.Low, "Medium server with no everyone pain, but was muted ".concat(v)] : [c.Mode.CareALot, c.Confidence.Low, "Medium server with no everyone pain ".concat(v)];
                if (R > t.careALot.sentMessages) return u ? [c.Mode.CareALittle, c.Confidence.Low, "Sent a bunch of messages, but server was muted before ".concat(v)] : [c.Mode.CareALot, c.Confidence.Low, "Sent a bunch of messages ".concat(v)];
                for (let e of x) {
                    let s = Math.max(t.careALittle.minOpens, e.totalOpensAcrossAllServers * t.careALittle.yearOpenPerc);
                    if (e.guildOpens > s && !I) return [c.Mode.CareALittle, c.Confidence.Low, "0.1% of ".concat(e.label, " channel visits ").concat(v)]
                }
                if (R > t.careALittle.sentMessages) return [c.Mode.CareALittle, c.Confidence.Low, "Sent a few messages ".concat(v)];
                if (!u) return [c.Mode.CareALittle, c.Confidence.Low, "Not muted ".concat(v)];
                {
                    let e = I || 0 === x[2].guildOpens ? c.Confidence.High : c.Confidence.Low;
                    return [c.Mode.DontCare, e, "Muted ".concat(v)]
                }
            }

            function f(e, t, s, a) {
                let l = t.reduce((e, t) => e + a(t), 0),
                    i = s.reduce((e, t) => e + a(t), 0),
                    r = n.sortBy(s, a).reverse()[0],
                    o = null == r ? 0 : a(r),
                    d = (o / i * 100).toFixed(1);
                return {
                    label: e,
                    totalOpensAcrossAllServers: l,
                    guildOpens: i,
                    biggestChannel: o,
                    biggestChannelFormatted: d
                }
            }

            function m(e) {
                let t = Date.now() - u.default.Millis.DAYS_30,
                    s = d.default.isMuted(e.id) && !d.default.isTemporarilyMuted(e.id),
                    a = d.default.getMessageNotifications(e.id),
                    n = a === S.UserNotificationSettings.ALL_MESSAGES,
                    i = o.default.getMemberCount(e.id),
                    E = r.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof l.ChannelRecordBase && t.guild_id === e.id),
                    f = E.filter(e => {
                        var s, a;
                        let n = null !== (a = null === (s = r.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === s ? void 0 : s.recentUses) && void 0 !== a ? a : [];
                        return 0 !== n.length && n[n.length - 1] >= t
                    }),
                    m = f.length >= 5,
                    T = f.length > 0,
                    _ = E.length >= 5,
                    g = E.reduce((e, t) => {
                        var s, a;
                        return e + (null !== (a = null === (s = r.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === s ? void 0 : s.totalUses) && void 0 !== a ? a : 0)
                    }, 0),
                    h = "\n- **Local**:\n    - Guild Visits: ".concat(g, "\n    - Channels: ").concat(E.length, "\n    - Recent Channels: ").concat(f.length, "\n");
                if (!s && n) return [c.Mode.CareALot, c.Confidence.High, "Guild is All Messages ".concat(h)];
                if (null != i && i < 50) return s ? [c.Mode.CareALittle, c.Confidence.Low, "Small server with no everyone pain, but was muted ".concat(h)] : [c.Mode.CareALot, c.Confidence.High, "Small server with no everyone pain ".concat(h)];
                if (m) return s ? [c.Mode.CareALittle, c.Confidence.Low, "Visited 5+ channels in the last month, but server was muted ".concat(h)] : [c.Mode.CareALot, c.Confidence.High, "Visited 5+ channels in the last month ".concat(h)];
                return T ? [c.Mode.CareALittle, c.Confidence.Low, "Visisted 1 channel in the last month ".concat(h)] : _ ? [c.Mode.CareALittle, c.Confidence.Low, "Visited 5+ channels ever ".concat(h)] : s ? [c.Mode.DontCare, c.Confidence.High, "Muted ".concat(h)] : [c.Mode.CareALittle, c.Confidence.Low, "Not muted ".concat(h)]
            }