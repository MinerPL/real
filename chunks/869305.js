            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return q
                }
            }), n("860677"), n("222007");
            var l = n("917351"),
                u = n.n(l),
                r = n("981980"),
                i = n("151426"),
                a = n("299285"),
                o = n("385976"),
                s = n("789563"),
                d = n("767960"),
                f = n("269596"),
                c = n("288518"),
                E = n("235004"),
                I = n("755624"),
                g = n("800843"),
                S = n("610730"),
                O = n("374363"),
                C = n("116949"),
                T = n("373469"),
                A = n("271938"),
                N = n("950104"),
                _ = n("42203"),
                p = n("86878"),
                v = n("925758"),
                y = n("546463"),
                h = n("341542"),
                L = n("525065"),
                R = n("26989"),
                P = n("305961"),
                m = n("216391"),
                D = n("260320"),
                b = n("169602"),
                V = n("52028"),
                w = n("42887"),
                H = n("824563"),
                U = n("945956"),
                Y = n("660478"),
                B = n("27618"),
                M = n("18494"),
                G = n("282109"),
                F = n("697218"),
                k = n("800762"),
                j = n("357957"),
                J = n("167726"),
                x = n("703370"),
                z = n("953998"),
                W = n("901165"),
                Z = n("819068");
            async function q(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new r.default;
                await new Promise(t => setImmediate(t));
                let l = F.default.getCurrentUser();
                if (null == l) return new Promise(l => {
                    n.fail(() => {
                        l(q(t, e, n))
                    })
                });
                n.succeed();
                let Q = Object.values(F.default.getUsers()),
                    K = Object.values(P.default.getGuilds()),
                    X = u.values(_.default.getInitialOverlayState()),
                    $ = R.default.getMutableAllGuildsAndMembers(),
                    tt = Y.default.getAllReadStates(!0),
                    te = k.default.getAllVoiceStates(),
                    tn = H.default.getState(),
                    tl = h.default.unavailableGuilds,
                    tu = u.mapValues(o.default.getGuilds(), t => t.emojis),
                    tr = G.default.getAllSettings(),
                    ti = N.default.getInternalState(),
                    ta = z.default.getStates(),
                    to = p.default.getAllConnections(),
                    ts = V.default.getApplicationActivities(),
                    td = v.default.getParties(),
                    tf = v.default.getUserParties(),
                    tc = A.default.getSessionId(),
                    tE = A.default.getAnalyticsToken(),
                    tI = x.default.getGameForPID(e),
                    tg = L.default.getMemberCounts(),
                    tS = B.default.getRelationships(),
                    tO = Array.from(c.default.getMessageRequestChannelIds()),
                    tC = M.default.getVoiceChannelId(),
                    tT = W.default.getFocusedPID(),
                    tA = W.default.getSelectedGuildId(),
                    tN = W.default.getSelectedChannelId(),
                    t_ = w.default.getState(),
                    tp = y.default.games,
                    tv = Object.values(j.default.paymentSources).map(t => t.toJS()),
                    ty = j.default.defaultPaymentSourceId,
                    th = j.default.hasFetchedPaymentSources,
                    tL = T.default.getState(),
                    tR = a.default._getAllApplications().map(t => t.toJS()),
                    tP = J.default.testModeApplicationId,
                    tm = {
                        null: {
                            state: U.default.getState(),
                            pings: U.default.getPings(),
                            quality: U.default.getQuality(),
                            hostname: U.default.getHostname(),
                            lossRate: U.default.getOutboundLossRate()
                        }
                    };
                m.default.forEach((t, e) => {
                    tm[e] = {
                        state: t.state,
                        pings: t.getPings(),
                        quality: t.quality,
                        hostname: t.hostname,
                        lossRate: t.getOutboundLossRate()
                    }
                });
                let tD = D.default.getLobbies(),
                    tb = b.default.getAllVoiceStates(),
                    tV = Array.from(f.default.getState().hiddenHotspots),
                    tw = s.default.getSerializedState(),
                    tH = d.default.getState(),
                    tU = I.default.getInitialOverlayState(),
                    tY = g.default.getInitialOverlayState(),
                    tB = S.default.getInitialOverlayState(),
                    tM = (0, C.protoToB64)(i.PreloadedUserSettings, O.default.settings),
                    tG = E.default.getOverlaySerializedState();
                return {
                    type: "OVERLAY_INITIALIZE",
                    version: Z.OVERLAY_VERSION,
                    users: Q,
                    guilds: K,
                    channels: X,
                    guildMembers: $,
                    readStates: tt,
                    voiceStates: te,
                    unavailableGuilds: tl,
                    emojis: tu,
                    allUserGuildSettings: tr,
                    callStoreInternalState: ti,
                    activityLauncherStates: ta,
                    connectedApps: to,
                    localActivities: ts,
                    parties: td,
                    userParties: tf,
                    user: l,
                    messageRequestChannelIds: tO,
                    token: t,
                    sessionId: tc,
                    analyticsToken: tE,
                    presences: tn,
                    currentGame: tI,
                    selectedVoiceChannelId: tC,
                    selectedChannelId: tN,
                    selectedGuildId: tA,
                    guildMemberCounts: tg,
                    relationships: tS,
                    mediaEngineState: t_,
                    rtcConnectionStates: tm,
                    focusedPID: tT,
                    applications: tR,
                    paymentSources: tv,
                    defaultPaymentSourceId: ty,
                    hasFetchedPaymentSources: th,
                    testModeApplicationId: tP,
                    lobbies: tD,
                    lobbyVoiceStates: tb,
                    applicationStreamState: tL,
                    hiddenHotspots: tV,
                    serializedExperimentStore: tw,
                    streamingCapabilitiesStoreState: tH,
                    joinedThreads: tU,
                    threadMembers: tY,
                    threadMessages: tB,
                    userSettingsProto: tM,
                    soundboardStoreState: tG,
                    detectableApplications: tp
                }
            }