            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007"), n("702976"), n("70102");
            var a = n("917351"),
                s = n.n(a),
                i = n("913144"),
                l = n("599110"),
                r = n("550368"),
                o = n("861309"),
                u = n("578287"),
                d = n("716724"),
                c = n("492249"),
                E = n("49111");
            let f = ["349134787773988865"];
            var _ = {
                [E.RPCCommands.SET_ACTIVITY]: {
                    scope: {
                        [c.RPC_SCOPE_CONFIG.ANY]: [E.OAuth2Scopes.RPC, E.OAuth2Scopes.RPC_ACTIVITIES_WRITE, c.RPC_LOCAL_SCOPE]
                    },
                    validation: e => (0, d.default)(e).required().keys({
                        pid: e.number().min(0),
                        activity: e.object().keys({
                            state: e.string().min(2).max(128),
                            details: e.string().min(2).max(128),
                            timestamps: (0, d.default)(e).keys({
                                start: e.number().min(1),
                                end: e.number().min(1)
                            }),
                            assets: (0, d.default)(e).keys({
                                large_image: e.string().min(1).max(256),
                                large_text: e.string().min(2).max(128),
                                small_image: e.string().min(1).max(256),
                                small_text: e.string().min(2).max(128)
                            }),
                            party: (0, d.default)(e).keys({
                                id: e.string().min(2).max(128),
                                size: e.array().items(e.number().min(1)).length(2),
                                privacy: e.number().default(E.ActivityPartyPrivacy.PRIVATE).valid([E.ActivityPartyPrivacy.PRIVATE, E.ActivityPartyPrivacy.PUBLIC])
                            }),
                            secrets: (0, d.default)(e).keys({
                                match: e.string().min(2).max(128),
                                join: e.string().min(2).max(128),
                                spectate: e.string().min(2).max(128)
                            }),
                            buttons: e.array().items((0, d.default)(e).keys({
                                label: e.string().min(1).max(32).required(),
                                url: e.string().uri().min(1).max(512).required()
                            })).min(1).max(2),
                            instance: e.boolean(),
                            supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
                            type: e.number().default(E.ActivityTypes.PLAYING).valid(E.ActivityTypes.PLAYING, E.ActivityTypes.LISTENING, E.ActivityTypes.WATCHING)
                        }).allow(null)
                    }),
                    handler(e) {
                        var t;
                        let n, {
                            socket: a,
                            args: {
                                pid: d,
                                activity: _
                            },
                            isSocketConnected: h
                        } = e;
                        if (![c.TransportTypes.IPC, c.TransportTypes.WEBSOCKET, c.TransportTypes.POST_MESSAGE].includes(a.transport)) throw new o.default(c.RPCErrors.INVALID_COMMAND, 'command not available from "'.concat(a.transport, '" transport'));
                        if (null == d && c.TransportTypes.IPC === a.transport) throw new o.default(c.RPCErrors.INVALID_COMMAND, "nonzero pid required");
                        if (null == _) return i.default.dispatch({
                            type: "LOCAL_ACTIVITY_UPDATE",
                            socketId: a.id,
                            pid: d,
                            activity: _
                        }), Promise.resolve(_);
                        _.name = a.application.name, _.application_id = a.application.id;
                        let C = a.transport === c.TransportTypes.POST_MESSAGE,
                            T = (0, u.computeActivityFlags)(_, C);
                        T > 0 && (_.flags = T), delete _.instance, null === (t = _.party) || void 0 === t || delete t.privacy;
                        let {
                            assets: I,
                            party: S,
                            secrets: N,
                            timestamps: A,
                            buttons: m,
                            type: p
                        } = _;
                        if ((null == p || p !== E.ActivityTypes.PLAYING && !C) && (_.type = E.ActivityTypes.PLAYING), null != N) {
                            let e = s.values(N).filter(e => !!e);
                            if (null != S && s.intersection(e, [S.id]).length > 0 && !f.includes(a.application.id)) throw new o.default(c.RPCErrors.INVALID_ACTIVITY_SECRET, "secrets cannot match the party id");
                            if (s.uniq(e).length < e.length) throw new o.default(c.RPCErrors.INVALID_ACTIVITY_SECRET, "secrets must be unique");
                            if (null != m) throw new o.default(c.RPCErrors.INVALID_ACTIVITY_SECRET, "secrets cannot currently be sent with buttons")
                        }
                        if (null != m && (_.metadata = {
                                button_urls: m.map(e => e.url)
                            }, _.buttons = m.map(e => e.label)), null != A)
                            for (let e of Object.keys(A)) Date.now().toString().length - A[e].toString().length > 2 && (A[e] = Math.floor(1e3 * A[e]));
                        if (null == I) n = Promise.resolve([]);
                        else {
                            if (null == a.application || null == a.application.id) throw Error();
                            n = (0, r.fetchAssetIds)(a.application.id, [I.large_image, I.small_image])
                        }
                        return n.then(e => {
                            let [t, n] = e;
                            if (null != I && (null != t ? I.large_image = t : delete I.large_image, null != n ? I.small_image = n : delete I.small_image), !h()) return;
                            i.default.dispatch({
                                type: "LOCAL_ACTIVITY_UPDATE",
                                socketId: a.id,
                                pid: d,
                                activity: _
                            });
                            let {
                                secrets: s,
                                party: r
                            } = _, o = {
                                application_id: a.application.id,
                                type: _.type
                            };
                            return null != s && (o.has_match_secret = !!s.match, o.has_join_secret = !!s.join), null != I && (o.has_images = !!(I.large_image || I.small_image)), null != r && (o.party_max = null != r.size ? r.size[1] : void 0, o.party_id = r.id), l.default.track(E.AnalyticEvents.ACTIVITY_UPDATED, o), _
                        })
                    }
                }
            }