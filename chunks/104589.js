            "use strict";
            l.r(e), l.d(e, {
                show: function() {
                    return O
                },
                hide: function() {
                    return D
                },
                search: function() {
                    return U
                },
                selectResult: function() {
                    return P
                },
                switchToResult: function() {
                    return b
                }
            }), l("781738"), l("222007");
            var n = l("913144"),
                a = l("450911"),
                i = l("255397"),
                s = l("406189"),
                o = l("987317"),
                u = l("123225"),
                c = l("537325"),
                r = l("144491"),
                d = l("239380"),
                p = l("233069"),
                f = l("42203"),
                C = l("686470"),
                h = l("18494"),
                A = l("162771"),
                _ = l("599110"),
                y = l("340454"),
                T = l("116460"),
                E = l("49111"),
                S = l("724210");
            let I = () => Promise.resolve();
            {
                let t = l("780009");
                I = t.playApplication
            }
            let N = Object.freeze({
                    [u.AutocompleterQuerySymbols.USER]: u.AutocompleterResultTypes.USER,
                    [u.AutocompleterQuerySymbols.TEXT_CHANNEL]: u.AutocompleterResultTypes.TEXT_CHANNEL,
                    [u.AutocompleterQuerySymbols.VOICE_CHANNEL]: u.AutocompleterResultTypes.VOICE_CHANNEL,
                    [u.AutocompleterQuerySymbols.GUILD]: u.AutocompleterResultTypes.GUILD,
                    [u.AutocompleterQuerySymbols.APPLICATION]: u.AutocompleterResultTypes.APPLICATION
                }),
                m = new RegExp("^".concat(u.AutocompleterQuerySymbols.USER, "|").concat(u.AutocompleterQuerySymbols.TEXT_CHANNEL, "|").concat(u.AutocompleterQuerySymbols.VOICE_CHANNEL, "|\\").concat(u.AutocompleterQuerySymbols.GUILD, "|\\").concat(u.AutocompleterQuerySymbols.APPLICATION));

            function L(t) {
                let [e, l] = function(t) {
                    var e;
                    let l = t.charAt(0),
                        n = null !== (e = N[l]) && void 0 !== e ? e : null;
                    return [t.replace(m, ""), n]
                }(t);
                return {
                    query: e,
                    queryMode: l
                }
            }

            function R(t, e) {
                let {
                    results: l,
                    queryMode: n,
                    query: a,
                    maxQueryLength: i
                } = T.default.getProps(), s = A.default.getGuildId(), o = h.default.getChannelId(s), c = l[(0, u.findNextSelectedResult)(u.FindResultDirections.DOWN, -1, l)], r = y.default.isEmail(a), d = y.default.isPhoneNumber(a), C = y.default.isUserTagLike(a), E = null != o && (0, S.isStaticChannelRoute)(o), I = {
                    current_channel_id: E ? void 0 : o,
                    current_channel_static_route: E ? o : void 0,
                    current_guild_id: s,
                    query_mode: null != n ? n : "GENERAL",
                    query_length: a.length,
                    max_query_length: i,
                    is_email_like: r,
                    is_phone_like: d,
                    is_username_like: C,
                    query: r || d || C ? null : a,
                    top_result_type: null != c ? c.type : null,
                    top_result_score: null != c ? c.score : null,
                    num_results_total: T.default.getResultTotals(),
                    num_results_users: T.default.getResultTotals(u.AutocompleterResultTypes.USER),
                    num_results_text_channels: T.default.getResultTotals(u.AutocompleterResultTypes.TEXT_CHANNEL),
                    num_results_voice_channels: T.default.getResultTotals(u.AutocompleterResultTypes.VOICE_CHANNEL),
                    num_results_guilds: T.default.getResultTotals(u.AutocompleterResultTypes.GUILD),
                    num_results_group_dms: T.default.getResultTotals(u.AutocompleterResultTypes.GROUP_DM)
                };
                if (null != o) {
                    let t = f.default.getChannel(o);
                    I.current_channel_type = null != t ? t.type : null
                }
                if (null != e) {
                    let {
                        type: t,
                        score: n,
                        record: a
                    } = e;
                    switch (I.selected_type = t, I.selected_score = n, I.selected_index = l.indexOf(e), t) {
                        case u.AutocompleterResultTypes.GUILD:
                            I.selected_guild_id = a.id;
                            break;
                        case u.AutocompleterResultTypes.TEXT_CHANNEL:
                        case u.AutocompleterResultTypes.VOICE_CHANNEL:
                            a instanceof p.ChannelRecordBase && (I.selected_guild_id = null != a.guild_id ? a.guild_id : null), I.selected_channel_id = a.id;
                            break;
                        case u.AutocompleterResultTypes.GROUP_DM:
                            I.selected_channel_id = a.id;
                            break;
                        case u.AutocompleterResultTypes.USER:
                            I.selected_user_id = a.id
                    }
                }
                _.default.track(t, I)
            }

            function g() {
                n.default.dispatch({
                    type: "QUICKSWITCHER_HIDE"
                })
            }

            function O() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                ! function(t) {
                    let e;
                    if (T.default.isOpen()) return;
                    let l = A.default.getGuildId(),
                        n = h.default.getChannelId(l);
                    if (null != n) {
                        let t = f.default.getChannel(n);
                        e = null != t ? t.type : null
                    }
                    _.default.track(E.AnalyticEvents.QUICKSWITCHER_OPENED, {
                        source: t,
                        current_guild_id: l,
                        current_channel_id: n,
                        current_channel_type: e
                    })
                }(t), n.default.dispatch({
                    type: "QUICKSWITCHER_SHOW",
                    ...L(e)
                })
            }

            function D() {
                R(E.AnalyticEvents.QUICKSWITCHER_CLOSED), g()
            }

            function U(t) {
                n.default.dispatch({
                    type: "QUICKSWITCHER_SEARCH",
                    ...L(t)
                })
            }

            function P(t) {
                n.default.dispatch({
                    type: "QUICKSWITCHER_SELECT",
                    selectedIndex: t
                })
            }

            function b(t) {
                let e, l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                g(), R(E.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, t);
                let {
                    type: p,
                    record: h
                } = t, A = {
                    page: E.AnalyticsPages.QUICK_SWITCHER
                };
                switch (p) {
                    case u.AutocompleterResultTypes.GUILD:
                        (0, d.transitionToGuild)(h.id, {
                            navigationReplace: !0
                        });
                        break;
                    case u.AutocompleterResultTypes.TEXT_CHANNEL:
                        null != (e = f.default.getChannel(h.id)) && (0, r.transitionToChannel)(e.id, {
                            state: {
                                analyticsSource: A
                            },
                            navigationReplace: !0
                        });
                        break;
                    case u.AutocompleterResultTypes.VOICE_CHANNEL:
                        null != (e = f.default.getChannel(h.id)) && (l ? i.default.updateChatOpen(h.id, !0) : o.default.selectVoiceChannel(h.id), (0, r.transitionToChannel)(e.id, {
                            state: {
                                analyticsSource: A
                            },
                            navigationReplace: !0
                        }));
                        break;
                    case u.AutocompleterResultTypes.USER:
                        a.default.openPrivateChannel([h.id], !1, !1, "Quickswitcher"), s.default.channelListScrollTo(E.ME, h.id);
                        break;
                    case u.AutocompleterResultTypes.GROUP_DM:
                        (0, r.transitionToChannel)(h.id, {
                            navigationReplace: !0
                        }), s.default.channelListScrollTo(E.ME, h.id);
                        break;
                    case u.AutocompleterResultTypes.APPLICATION:
                        let _ = C.default.getActiveLibraryApplication(h.id);
                        I(h.id, _, {
                            analyticsParams: {
                                source: E.AnalyticsLocations.QUICK_SWITCHER,
                                location: E.AnalyticsLocations.QUICK_SWITCHER
                            }
                        });
                        break;
                    case u.AutocompleterResultTypes.LINK:
                        (0, c.default)(h.path, {
                            navigationReplace: !0
                        })
                }
                n.default.dispatch({
                    type: "QUICKSWITCHER_SWITCH_TO",
                    result: t
                })
            }