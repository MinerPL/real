            "use strict";
            n.r(t), n.d(t, {
                getCallscopeState: function() {
                    return E
                },
                shouldShowCallscopeUI: function() {
                    return C
                },
                setCallscopeIssue: function() {
                    return S
                }
            }), n("424973"), n("222007");
            var a = n("811022"),
                l = n("446674"),
                s = n("398183"),
                i = n("913144"),
                r = n("629803"),
                u = n("367632"),
                o = n("147746"),
                d = n("271938"),
                c = n("697218"),
                f = n("773336"),
                h = n("49111");
            class p {
                async getDescription() {
                    let e = {
                            callStartedAt: this.callStartedAt.toISOString(),
                            blindIds: [],
                            issues: []
                        },
                        t = e => "".concat(e.toISOString(), " (").concat(e.getTime() - this.callStartedAt.getTime(), ")");
                    for (let n of this.blindIds) e.blindIds.push({
                        date: t(n.date),
                        ids: await n.ids,
                        context: n.context
                    });
                    for (let n of this.issues) e.issues.push("".concat(t(n.date), ": ").concat(n.description));
                    return e
                }
                shouldShowUI() {
                    return m.isInCallscopeCall
                }
                async submit() {
                    if (!this.hasIssues) return;
                    let e = await this.getDescription(),
                        t = JSON.stringify(e, void 0, 4);
                    console.log("[callscope] Submitting issues...\n".concat(t));
                    try {
                        await (0, o.uploadDebugLogFiles)(h.DebugLogCategory.RTC, e)
                    } catch (e) {
                        console.error("[callscope] Error uploading logs", e)
                    }
                    try {
                        let e = c.default.getCurrentUser();
                        await (0, u.submitReport)({
                            name: "Issue from ".concat(null == e ? void 0 : e.username, "#").concat(null == e ? void 0 : e.discriminator),
                            priority: 2,
                            description: t,
                            feature: {
                                asana_inbox_id: "1204198429044032"
                            },
                            url: ""
                        }, {
                            overridePlatformInformation: !1
                        }, void 0, !1)
                    } catch (e) {
                        console.error("[callscope] Error submitting report", e)
                    }
                }
                constructor() {
                    this.isInCallscopeCall = !1, this.rtcConnections = new Set, this.callStartedAt = new Date, this.blindIds = [], this.hasIssues = !1, this.issues = []
                }
            }
            let m = new p;

            function E() {
                return m
            }

            function C() {
                return m.shouldShowUI()
            }

            function S(e) {
                m.issues.push({
                    date: new Date,
                    description: e
                }), m.hasIssues = !0
            }
            let g = new a.default("CallscopeStore");
            class _ {
                static async shouldUpload() {
                    var e, t;
                    if (!f.isPlatformEmbedded) return !1;
                    let n = await (0, r.fetchConsents)();
                    return null !== (t = null === (e = n[h.Consents.USAGE_STATISTICS]) || void 0 === e ? void 0 : e.consented) && void 0 !== t && t
                }
                static async handleDisconnected(e) {
                    if (e.state !== h.RTCConnectionStates.DISCONNECTED || null == e.channelId || null == e.rtcLogEphemeralKey) return;
                    if (!await _.shouldUpload()) {
                        g.info("CallscopeManager: USAGE_STATISTICS is disabled or is not desktop. Not uploading.");
                        return
                    }
                    g.info("CallscopeManager: Uploading rtc logs in ".concat(1e4, " ms..."));
                    let t = d.default.getId();
                    await (0, s.sleep)(1e4), await (0, o.uploadCallscopeLogs)(e.channelId, t, e.rtcLogEphemeralKey, e.context)
                }
            }
            class I extends l.default.Store {}
            I.displayName = "CallscopeStore", new I(i.default, __OVERLAY__ ? {} : {
                RTC_CONNECTION_STATE: function(e) {
                    var t;
                    let n = (null !== (t = e.channelId) && void 0 !== t ? t : "unknown") + e.context;
                    switch (e.state) {
                        case h.RTCConnectionStates.DISCONNECTED:
                            m.rtcConnections.delete(n), 0 === m.rtcConnections.size ? ((async t => {
                                await _.handleDisconnected(e), await t.submit()
                            })(m), m = new p) : _.handleDisconnected(e);
                            break;
                        case h.RTCConnectionStates.RTC_CONNECTED:
                            if (null != e.rtcLogEphemeralKey) {
                                let t = d.default.getId(),
                                    a = (0, o.getBlindIds)(e.channelId, t, e.rtcLogEphemeralKey);
                                0 === m.rtcConnections.size && (m.callStartedAt = new Date), m.isInCallscopeCall = !0, m.blindIds.push({
                                    date: new Date,
                                    context: e.context,
                                    ids: a
                                }), m.rtcConnections.add(n)
                            }
                    }
                }
            })