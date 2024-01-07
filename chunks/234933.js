            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var a = n("697218"),
                s = n("315102"),
                i = n("103603"),
                l = n("861309"),
                r = n("716724"),
                o = n("492249"),
                u = {
                    [n("49111").RPCCommands.GET_IMAGE]: {
                        scope: o.RPC_LOCAL_SCOPE,
                        validation: e => (0, r.default)(e).required().keys({
                            type: e.string().required().valid(["user"]),
                            id: e.string().required(),
                            format: e.string().required().valid(["png", "webp", "jpg"]),
                            size: e.number().required().valid([16, 32, 64, 128, 256, 512, 1024])
                        }),
                        handler(e) {
                            let t, {
                                args: {
                                    type: n,
                                    id: r,
                                    format: u = "png",
                                    size: d = 128
                                }
                            } = e;
                            if ("user" === n) {
                                let e = a.default.getUser(r);
                                if (null != e) {
                                    t = s.default.getUserAvatarURL(e, !1, d, u);
                                    let n = window.GLOBAL_ENV.CDN_HOST;
                                    null != n && -1 !== t.indexOf(n) && (t += "&_=")
                                } else throw new l.default(o.RPCErrors.INVALID_USER, "Invalid user id: ".concat(r))
                            }
                            if (null == t) throw new l.default(o.RPCErrors.INVALID_COMMAND, "No valid type.");
                            return fetch(t).then(e => e.blob()).then(e => (0, i.readFileAsBase64)(e)).then(e => ({
                                data_url: e
                            }))
                        }
                    }
                }