            "use strict";
            n.r(t), n.d(t, {
                getInitialSubscriptionPayload: function() {
                    return d
                }
            });
            var a = n("191225"),
                s = n("499031"),
                i = n("601222"),
                l = n("710768"),
                r = n("65810"),
                o = n("49111"),
                u = n("954016");
            async function d(e, t, n) {
                var d, c;
                switch (t) {
                    case o.RPCEvents.ACTIVITY_PIP_MODE_UPDATE: {
                        let t = null === (d = e.application) || void 0 === d ? void 0 : d.id,
                            n = null != t ? a.default.getLayoutModeForApp(t) : null;
                        return null != n ? {
                            is_pip_mode: n !== u.ActivityLayoutMode.FOCUSED
                        } : null
                    }
                    case o.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE: {
                        let t = null === (c = e.application) || void 0 === c ? void 0 : c.id,
                            n = null != t ? a.default.getLayoutModeForApp(t) : null;
                        return null != n ? {
                            layout_mode: n
                        } : null
                    }
                    case o.RPCEvents.THERMAL_STATE_UPDATE: {
                        let e = await (0, i.default)();
                        if (null == e) return null;
                        let t = (0, s.default)(e);
                        return {
                            thermal_state: t
                        }
                    }
                    case o.RPCEvents.ORIENTATION_UPDATE: {
                        let e = l.default.isScreenLandscape();
                        if (null == e) return null;
                        {
                            let t = e ? u.ActivityScreenOrientation.LANDSCAPE : u.ActivityScreenOrientation.PORTRAIT,
                                n = t === u.ActivityScreenOrientation.PORTRAIT ? "portrait" : "landscape";
                            return {
                                screen_orientation: t,
                                orientation: n
                            }
                        }
                    }
                    case o.RPCEvents.ACTIVITY_INSTANCE_UPDATE: {
                        let e = a.default.getConnectedActivityChannelId();
                        if (null != e) {
                            let t = a.default.getSelfEmbeddedActivityForChannel(e);
                            if (null != t) return Promise.resolve({
                                instance_id: t.instanceId
                            })
                        }
                        return Promise.resolve(null)
                    }
                    case o.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
                        return (0, r.activityInstanceConnectedParticipants)();
                    default:
                        return null
                }
            }