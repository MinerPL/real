            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestActions: function() {
                    return E
                }
            }), n("222007");
            var s = n("884691"),
                a = n("767590"),
                l = n.n(a),
                i = n("448993"),
                r = n("377114"),
                o = n("713135"),
                u = n("506885"),
                d = n("845579"),
                c = n("599110"),
                f = n("16108"),
                h = n("997011"),
                C = n("541881"),
                p = n("973199"),
                m = n("49111");

            function E(e) {
                let {
                    user: t,
                    onAcceptSuccess: n,
                    onRejectSuccess: a,
                    onError: E
                } = e, g = (0, C.default)(), [S, _] = s.useState(!1), [A, T] = s.useState(!1), [M, I] = s.useState(!1), [N, L] = s.useState(!1), [v, x] = s.useState(!1), R = S || A || M, y = s.useCallback(async e => {
                    if (!R) {
                        _(!0);
                        try {
                            await (0, f.acceptMessageRequest)(e), L(!0), null == n || n()
                        } catch (t) {
                            let e = new i.APIError(t);
                            null == E || E(e)
                        } finally {
                            _(!1)
                        }
                    }
                }, [R, n, E]), D = s.useCallback(async e => {
                    if (!R) {
                        T(!0);
                        try {
                            await (0, f.rejectMessageRequest)(e), x(!0), null == a || a()
                        } catch (t) {
                            let e = new i.APIError(t);
                            null == E || E(e)
                        } finally {
                            T(!1)
                        }
                    }
                }, [R, a, E]), O = s.useCallback(async e => {
                    if (R) return;
                    T(!0);
                    let t = l(e, p.BATCH_REJECT_LIMIT);
                    try {
                        for (let e of t) await (0, f.rejectMessageRequestBatch)(e);
                        x(!0), null == a || a()
                    } catch (t) {
                        let e = new i.APIError(t);
                        null == E || E(e)
                    } finally {
                        T(!1)
                    }
                }, [R, a, E]), j = s.useCallback(async e => {
                    if (R) return;
                    if (null != t && null == o.default.getMutualGuilds(t.id)) {
                        I(!0);
                        try {
                            await (0, u.default)(t.id, t.getAvatarURL(void 0, 80), {
                                withMutualGuilds: !0,
                                withMutualFriendsCount: !0
                            })
                        } catch (e) {} finally {
                            I(!1)
                        }
                    }
                    let n = async () => {
                        var n;
                        let s = null != t ? null === (n = o.default.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map(e => e.guild.id) : [];
                        c.default.track(m.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                            action: p.MessageRequestAnalyticsAction.ACCEPT_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: null != s ? s : [],
                            other_user_id: null == t ? void 0 : t.id
                        }), await y(e)
                    };
                    (0, h.openAcceptMessageRequestConfirmModal)({
                        channelId: e,
                        onConfirm: n,
                        onCancel: () => {
                            var n;
                            let s = null != t ? null === (n = o.default.getMutualGuilds(t.id)) || void 0 === n ? void 0 : n.map(e => e.guild.id) : [];
                            c.default.track(m.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                                action: p.MessageRequestAnalyticsAction.DISMISS_CONFIRMATION_PROMPT,
                                channel_id: e,
                                mutual_guild_ids: null != s ? s : [],
                                other_user_id: null == t ? void 0 : t.id
                            })
                        }
                    })
                }, [y, R, t]), b = s.useCallback((e, t, n) => {
                    let s = (s, a) => {
                            a && d.NonSpamRetrainingOptIn.updateSetting(s), s && null != t && (0, r.submitHamReportForFirstDM)(t), y(e.id), c.default.track(m.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                                action: p.MessageRequestAnalyticsAction.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: a,
                                non_spam_retraining_opt_in: s
                            }), null != n && n()
                        },
                        a = d.NonSpamRetrainingOptIn.getSetting();
                    null == a ? (0, h.onMarkAsNotSpamConfirmationModal)({
                        channel: e,
                        onConfirm: s,
                        onCancel: () => {
                            c.default.track(m.AnalyticEvents.MESSAGE_REQUEST_ACTION, {
                                action: p.MessageRequestAnalyticsAction.DISMISS_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id
                            })
                        }
                    }) : s(a)
                }, [y]);
                return {
                    acceptMessageRequest: g ? j : y,
                    rejectMessageRequest: D,
                    rejectAll: O,
                    markAsNotSpam: b,
                    isAcceptLoading: S,
                    isRejectLoading: A,
                    isUserProfileLoading: M,
                    isOptimisticAccepted: N,
                    isOptimisticRejected: v
                }
            }