            "use strict";
            let l, u, a, r, o;
            n.r(t), n.d(t, {
                InteractionModalState: function() {
                    return s
                },
                default: function() {
                    return h
                }
            });
            var i, s, c = n("627445"),
                d = n.n(c),
                f = n("446674"),
                I = n("913144"),
                E = n("819689"),
                p = n("798609"),
                C = n("274800");
            (i = s || (s = {}))[i.IN_FLIGHT = 0] = "IN_FLIGHT", i[i.ERRORED = 1] = "ERRORED", i[i.SUCCEEDED = 2] = "SUCCEEDED";
            class _ extends f.default.Store {
                getModalState(e) {
                    return e !== l ? null : u
                }
            }
            _.displayName = "InteractionModalStore";
            var h = new _(I.default, {
                LOGOUT: function() {
                    return l = null, u = null, a = null, r = null, o = null, !0
                },
                INTERACTION_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === o && (E.default.deleteMessage(r, a, !0), a = null, r = null, o = null), !1
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === o && (E.default.deleteMessage(r, a, !0), a = null, r = null, o = null), !1
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        messageId: t,
                        nonce: n,
                        data: i
                    } = e;
                    switch (i.interactionType) {
                        case p.InteractionTypes.APPLICATION_COMMAND:
                            return a = t, r = i.channelId, o = n, !1;
                        case p.InteractionTypes.MODAL_SUBMIT:
                            return d(null == l || 1 === u || 2 === u, "cannot submit multiple modals at once"), l = n, u = 0, setTimeout(() => {
                                l === n && 0 === u && (0, C.setFailed)(n)
                            }, 1e4), !0;
                        default:
                            return !1
                    }
                },
                INTERACTION_SUCCESS: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (u = 2, !0)
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (u = 1, !0)
                }
            })