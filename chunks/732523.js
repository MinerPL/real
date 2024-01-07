            "use strict";
            n.r(t), n.d(t, {
                useModalState: function() {
                    return g
                },
                useIframeModalState: function() {
                    return O
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var l = n("884691"),
                u = n("627445"),
                a = n.n(u),
                r = n("446674"),
                o = n("872717"),
                i = n("913144"),
                s = n("798609"),
                c = n("763898"),
                d = n("711562"),
                f = n("274800"),
                I = n("271938"),
                E = n("42203"),
                p = n("26989"),
                C = n("162771"),
                _ = n("315102"),
                h = n("299039"),
                M = n("812684"),
                R = n("470055"),
                m = n("524094"),
                T = n("49111"),
                v = n("782340");
            let S = e => {
                let t = !0;
                return e.forEach(e => {
                    !e() && (t = !1)
                }), t
            };

            function N(e) {
                return l.useMemo(() => {
                    let t = C.default.getGuildId(),
                        n = null != t && null != e.bot ? p.default.getMember(t, e.bot.id) : void 0,
                        l = _.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            botIconFirst: !0,
                            bot: null != n ? e.bot : void 0
                        }),
                        u = null != n && null != e.bot ? e.bot.username : e.name,
                        a = (0, d.default)(e.id);
                    return {
                        applicationIconURL: l,
                        applicationName: u,
                        applicationBaseUrl: a
                    }
                }, [e.id, e.icon, e.name, e.bot])
            }

            function g(e, t) {
                var n;
                let {
                    application: u,
                    customId: d,
                    components: p,
                    channelId: C
                } = e, _ = null === (n = E.default.getChannel(C)) || void 0 === n ? void 0 : n.guild_id, m = (0, c.default)(), [g, O] = l.useState(null), [L, x] = l.useState(null), y = (0, r.useStateFromStores)([R.default], () => R.default.getModalState(L), [L]), D = l.useMemo(() => (0, M.createComponents)(p, u.id, _), [p, u.id, _]), U = l.useRef(new Set), w = l.useCallback(() => {
                    O(null), x(null), S(U.current) && x(function(e, t) {
                        let n = h.default.fromTimestamp(Date.now()),
                            l = e.channelId,
                            u = E.default.getChannel(l);
                        a(null != u, "expected channel");
                        let r = A(e.customId, e.components, []);
                        (0, f.addQueued)(n, {
                            data: {
                                interactionType: s.InteractionTypes.MODAL_SUBMIT
                            }
                        });
                        let i = () => {
                            (null == t || !t.aborted) && o.default.post({
                                url: T.Endpoints.INTERACTIONS,
                                body: {
                                    type: s.InteractionTypes.MODAL_SUBMIT,
                                    application_id: e.application.id,
                                    channel_id: u.id,
                                    guild_id: u.guild_id,
                                    data: {
                                        id: e.id,
                                        custom_id: e.customId,
                                        components: r
                                    },
                                    session_id: I.default.getSessionId(),
                                    nonce: n
                                },
                                signal: t
                            }).catch(e => {
                                429 === e.status ? setTimeout(i, 1e3 * e.body.retry_after) : (0, f.setFailed)(n)
                            })
                        };
                        return i(), n
                    }(e, m))
                }, [m, e]);
                l.useEffect(() => {
                    y === R.InteractionModalState.SUCCEEDED && (i.default.dispatch({
                        type: "CLEAR_INTERACTION_MODAL_STATE",
                        id: d
                    }), t()), y === R.InteractionModalState.ERRORED && O(v.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
                }, [L, y, t, d]);
                let {
                    applicationIconURL: b,
                    applicationName: B
                } = N(u);
                return {
                    components: D,
                    applicationIconURL: b,
                    applicationName: B,
                    submissionState: y,
                    error: g,
                    validators: U.current,
                    onSubmit: w
                }
            }

            function O(e) {
                let {
                    application: t,
                    customId: n
                } = e, {
                    applicationIconURL: l,
                    applicationName: u,
                    applicationBaseUrl: r
                } = N(t), o = E.default.getChannel(e.channelId);
                a(null != o, "channel should not be null");
                let i = "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
                    s = {
                        instance_id: i,
                        custom_id: n,
                        channel_id: e.channelId
                    };
                null != o.guild_id && "" !== o.guild_id && (s.guild_id = o.guild_id);
                let c = new URL(null != r ? r : "");
                c.pathname = e.iframePath;
                let d = c.toString();
                return {
                    applicationIconURL: l,
                    applicationName: u,
                    applicationBaseUrl: r,
                    queryParams: s,
                    iframeUrl: d
                }
            }
            let A = (e, t, n) => t.map((t, l) => {
                let u = [...n, l];
                switch (t.type) {
                    case s.ComponentType.ACTION_ROW:
                        var r;
                        return {
                            type: t.type, components: A(e, null !== (r = t.components) && void 0 !== r ? r : [], u)
                        };
                    case s.ComponentType.INPUT_TEXT: {
                        let n = m.default.getInteractionComponentState(e, u);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            value: (null == n ? void 0 : n.type) === t.type ? n.value : null
                        }
                    }
                    case s.ComponentType.STRING_SELECT: {
                        let n = m.default.getInteractionComponentState(e, u);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            values: (null == n ? void 0 : n.type) === t.type ? n.values : null
                        }
                    }
                    default:
                        a(!1, "unreachable")
                }
            })