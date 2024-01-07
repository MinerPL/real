            "use strict";
            n.r(e), n.d(e, {
                getInteractionTimeoutTimestamp: function() {
                    return _
                },
                executeMessageComponentInteraction: function() {
                    return T
                },
                executePrimaryEntryPointInteraction: function() {
                    return C
                },
                handleInteractionResponse: function() {
                    return h
                },
                InteractionStatusViewState: function() {
                    return a
                },
                getInteractionStatusViewState: function() {
                    return N
                },
                canRetryInteractionData: function() {
                    return D
                }
            }), n("222007");
            var a, i, l = n("249654"),
                r = n("872717"),
                u = n("913144"),
                d = n("819689"),
                o = n("798609"),
                c = n("263024"),
                s = n("271938"),
                E = n("274800"),
                p = n("809810"),
                A = n("3765"),
                f = n("606981"),
                I = n("49111");

            function _(t) {
                return null == t || "" === t || Number.isNaN(t) ? Date.now() : l.default.extractTimestamp(t) + 9e5
            }
            let T = async t => {
                let {
                    componentType: e,
                    messageId: n,
                    messageFlags: a,
                    customId: i,
                    indices: u,
                    applicationId: d,
                    channelId: A,
                    guildId: f,
                    localState: _
                } = t, T = l.default.fromTimestamp(Date.now());
                if (!p.default.canQueueInteraction(n, T)) return;
                await c.default.unarchiveThreadIfNecessary(A), (0, E.addQueued)(T, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: i,
                        indices: u
                    },
                    onFailure: (t, e) => y(A, t, e)
                }), null != _ && (0, E.queueInteractionComponentState)(n, T, _, u);
                let C = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: T,
                    guild_id: f,
                    channel_id: A,
                    message_flags: a,
                    message_id: n,
                    application_id: d,
                    session_id: s.default.getSessionId(),
                    data: {
                        component_type: e,
                        custom_id: i,
                        ... function(t) {
                            if (null == t) return null;
                            if (t.type === o.ComponentType.STRING_SELECT || t.type === o.ComponentType.INPUT_TEXT) return t;
                            let e = t.selectedOptions.map(t => t.value);
                            return {
                                type: t.type,
                                values: e
                            }
                        }(_)
                    }
                };
                await r.default.post({
                    url: I.Endpoints.INTERACTIONS,
                    body: C,
                    timeout: 3e3
                }, t => {
                    h(T, A, f, t)
                })
            }, C = async t => {
                let {
                    applicationId: e,
                    channelId: n,
                    guildId: a
                } = t, i = l.default.fromTimestamp(Date.now()), u = {
                    type: o.InteractionTypes.APPLICATION_COMMAND,
                    nonce: i,
                    guild_id: a,
                    channel_id: n,
                    application_id: e,
                    session_id: s.default.getSessionId(),
                    data: {
                        type: o.ApplicationCommandType.PRIMARY_ENTRY_POINT
                    }
                };
                await r.default.post({
                    url: I.Endpoints.INTERACTIONS,
                    body: u,
                    timeout: 3e3
                }, t => {
                    h(i, n, null != a ? a : null, t)
                })
            }, y = (t, e, n) => {
                null == n && null != e && d.default.sendClydeError(t, e)
            }, h = (t, e, n, a) => {
                if (!a.ok) {
                    if (!a.hasErr) {
                        var i;
                        if (a.status >= 400 && a.status < 500 && a.body) {
                            if (a.body.code === I.AbortCodes.INVALID_FORM_BODY && a.body.errors) {
                                let i = (0, f.getFirstSkemaError)(a.body.errors);
                                null != i && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === i.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === i.code) && u.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: e,
                                    guildId: n
                                }), (0, E.setFailed)(t, void 0, null == i ? void 0 : i.message);
                                return
                            }(0, E.setFailed)(t, void 0, a.body.message);
                            return
                        }(0, E.setFailed)(t, null === (i = a.body) || void 0 === i ? void 0 : i.code);
                        return
                    }(0, E.setFailed)(t)
                }
            };
            (i = a || (a = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let N = (t, e) => {
                var n;
                let a = null == e ? void 0 : e.state,
                    i = t.state === I.MessageStates.SENT && _(t.id) < Date.now();
                let r = t.state === I.MessageStates.SEND_FAILED && (null == (n = t.id) || "" === n || Number.isNaN(n) ? Date.now() : l.default.extractTimestamp(n) + 3e3) < Date.now(),
                    u = (null == e ? void 0 : e.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    d = t.isCommandType();
                if (u && a === A.InteractionState.QUEUED || d && t.state === I.MessageStates.SENDING && null != e) return 0;
                if (u && a === A.InteractionState.CREATED || t.hasFlag(I.MessageFlags.LOADING) && !i) return 1;
                if (null != t.interaction && t.hasFlag(I.MessageFlags.LOADING) && i) return 3;
                else if (null != t.interaction && !t.hasFlag(I.MessageFlags.LOADING) && r) return 3;
                else if (d && t.state === I.MessageStates.SEND_FAILED) return 2
            };

            function D(t) {
                let e = t.options;
                for (;
                    (null == e ? void 0 : e.length) === 1 && (e[0].type === o.ApplicationCommandOptionType.SUB_COMMAND_GROUP || e[0].type === o.ApplicationCommandOptionType.SUB_COMMAND);) e = e[0].options;
                for (let t of null != e ? e : [])
                    if (t.type === o.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }