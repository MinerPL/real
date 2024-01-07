            "use strict";
            n.r(t), n.d(t, {
                MessageDataType: function() {
                    return a
                },
                isMessageDataEdit: function() {
                    return O
                },
                getFailedMessageId: function() {
                    return R
                },
                default: function() {
                    return M
                }
            }), n("222007");
            var i, a, l, s, r = n("627445"),
                u = n.n(r),
                o = n("981980"),
                d = n("872717"),
                c = n("798609"),
                _ = n("716241"),
                E = n("605250"),
                f = n("676574"),
                h = n("618421"),
                p = n("271938"),
                T = n("985365"),
                C = n("254490"),
                m = n("231987"),
                S = n("980134"),
                I = n("282928"),
                g = n("49111");
            let A = null;
            __OVERLAY__ && (A = n("901165").default), (l = i || (i = {})).OVERLAY_UNLOCKED = "overlay_unlocked", l.OVERLAY_UNLOCKED_PINNED = "overlay_unlocked_pinned", l.OVERLAY_LOCKED_ACTIVATED = "overlay_locked_activated", (s = a || (a = {}))[s.SEND = 0] = "SEND", s[s.EDIT = 1] = "EDIT", s[s.COMMAND = 2] = "COMMAND";
            let N = e => 0 === e.type,
                O = e => 1 === e.type,
                R = e => N(e) ? e.message.nonce : O(e) ? e.message.messageId : e.message.data.id,
                y = [6e4, 3e5];
            class v extends m.default {
                isFull() {
                    return this.queue.length >= this.maxSize
                }
                drain(e, t) {
                    switch (this.logger.log("Draining Message Queue with: ", e.type), e.type) {
                        case 0:
                            this.handleSend(e.message, t);
                            break;
                        case 1:
                            this.handleEdit(e.message, t);
                            break;
                        case 2:
                            this.handleCommand(e.message, t)
                    }
                }
                cancelRequest(e) {
                    var t;
                    null === (t = this.requests.get(e)) || void 0 === t || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e)
                }
                startQueueMetricTimers(e) {
                    let t = y.map(e => setTimeout(() => {
                        (0, _.trackWithMetadata)(g.AnalyticEvents.SEND_MESSAGE_QUEUED, {
                            queued_duration_ms: e
                        })
                    }, e));
                    this.analyticsTimeouts.set(e, t)
                }
                cancelQueueMetricTimers(e) {
                    var t;
                    null === (t = this.analyticsTimeouts.get(e)) || void 0 === t || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e)
                }
                createResponseHandler(e, t) {
                    return n => {
                        if (null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr) return t(null, n);
                        null != n.body && (n.body.code === g.AbortCodes.SLOWMODE_RATE_LIMITED || n.body.code === g.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) ? t(null, n) : 429 === n.status ? t({
                            retryAfter: 1e3 * n.body.retry_after
                        }) : t(null, n)
                    }
                }
                handleSend(e, t) {
                    let n;
                    let {
                        channelId: i,
                        file: a,
                        filename: l,
                        ...s
                    } = e, r = (0, h.getSignalStrength)(), u = {
                        mobile_network_type: T.default.getType(),
                        ...s,
                        ...null != r && {
                            signal_strength: r
                        }
                    };
                    if (f.default.get("send_fail_100")) {
                        this.logger.log("Skipping message sened because send_fail_100 is enabled"), t(null, {
                            ok: !1,
                            hasErr: !1,
                            status: 500,
                            headers: {},
                            body: "{}",
                            text: "Simulated failure"
                        });
                        return
                    }
                    null != A && (A.isInstanceUILocked() ? n = {
                        location: "overlay_locked_activated"
                    } : !A.isInstanceUILocked() && (n = A.isPinned(g.OverlayWidgets.TEXT) ? {
                        location: "overlay_unlocked_pinned"
                    } : {
                        location: "overlay_unlocked"
                    }));
                    let c = this.createResponseHandler(e.nonce, t),
                        _ = new AbortController;
                    if (this.startQueueMetricTimers(e.nonce), null != a && null != l && "" !== l) d.default.post({
                        url: g.Endpoints.MESSAGES(i),
                        fields: Object.entries(u).map(e => {
                            let [t, n] = e;
                            return {
                                name: t,
                                value: n
                            }
                        }),
                        attachments: [{
                            name: "file",
                            file: a,
                            filename: l
                        }],
                        context: n,
                        oldFormErrors: !0,
                        signal: _.signal,
                        onRequestCreated: () => {
                            null != e.nonce && this.requests.set(e.nonce, _)
                        }
                    }, c);
                    else {
                        let t = {
                            timeout: 6e4,
                            retries: 3,
                            backoff: new o.default
                        };
                        d.default.post({
                            url: g.Endpoints.MESSAGES(i),
                            body: u,
                            context: n,
                            oldFormErrors: !0,
                            ...t,
                            signal: _.signal,
                            onRequestCreated: () => {
                                null != e.nonce && this.requests.set(e.nonce, _)
                            }
                        }, c)
                    }
                }
                handleEdit(e, t) {
                    let {
                        channelId: n,
                        messageId: i,
                        ...a
                    } = e, l = new AbortController;
                    d.default.patch({
                        url: g.Endpoints.MESSAGE(n, i),
                        body: a,
                        retries: 1,
                        oldFormErrors: !0,
                        signal: l.signal,
                        onRequestCreated: () => {
                            this.requests.set(i, l)
                        }
                    }, this.createResponseHandler(i, t))
                }
                handleCommand(e, t) {
                    let n, {
                            applicationId: i,
                            guildId: a,
                            channelId: l,
                            data: s,
                            nonce: r,
                            attachments: o,
                            maxSizeCallback: _,
                            analytics_location: E
                        } = e,
                        f = {
                            type: c.InteractionTypes.APPLICATION_COMMAND,
                            application_id: i,
                            guild_id: a,
                            channel_id: l,
                            session_id: p.default.getSessionId(),
                            data: s,
                            nonce: r,
                            analytics_location: E
                        };
                    if (null != o) {
                        f.data.attachments = [], n = [];
                        f.data.attachments = o.map((e, t) => (u(e.status === I.CloudUploadStatus.COMPLETED, "Uploads must be staged before trying to send a message"), (0, S.getAttachmentPayload)(e, t)))
                    }
                    let h = new AbortController;
                    d.default.post({
                        url: g.Endpoints.INTERACTIONS,
                        fields: [{
                            name: "payload_json",
                            value: JSON.stringify(f)
                        }],
                        attachments: n,
                        signal: h.signal,
                        onRequestCreated: e => {
                            this.requests.set(r, h), e.on("progress", e => {
                                let {
                                    total: t
                                } = e, n = (0, C.maxFileSize)(a);
                                null != t && t > n && (this.cancelRequest(r), null == _ || _(n))
                            })
                        }
                    }, this.createResponseHandler(r, t))
                }
                constructor(e = 5) {
                    super(new E.default("MessageQueue")), this.maxSize = e, this.requests = new Map, this.analyticsTimeouts = new Map
                }
            }
            var M = new v