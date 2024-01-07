            "use strict";
            let s;
            l.r(t), l.d(t, {
                default: function() {
                    return L
                }
            }), l("222007"), l("424973"), l("70102");
            var n = l("446674"),
                a = l("913144"),
                r = l("260365"),
                u = l("123225"),
                o = l("679653"),
                i = l("42203"),
                c = l("305961"),
                d = l("52028"),
                p = l("824563"),
                m = l("27618"),
                A = l("697218"),
                T = l("287850"),
                h = l("49111");
            let f = [u.AutocompleterResultTypes.TEXT_CHANNEL, u.AutocompleterResultTypes.GROUP_DM, u.AutocompleterResultTypes.USER],
                E = null,
                I = null,
                C = [],
                N = [];

            function _(e) {
                C = [...C, e], N = N.map(e => ({
                    ...e,
                    sent: C.includes(e.data.record.id)
                })), g.emitChange()
            }

            function y() {
                E = null, null != s && (s.destroy(), s = null), null != I && I()
            }

            function v() {
                let e = null != E && null != E.application_id ? d.default.getApplicationActivity(E.application_id) : null;
                if (null != E && (null == e || null == e.party || null == e.party.id)) return y()
            }
            class R extends n.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getActivity() {
                    return E
                }
                getQuery() {
                    var e;
                    return null !== (e = null == s ? void 0 : s.query) && void 0 !== e ? e : ""
                }
                getResults() {
                    return N
                }
            }
            R.displayName = "ActivityInviteModalStore";
            let g = new R(a.default, {
                ACTIVITY_INVITE_MODAL_OPEN: function(e) {
                    E = e.activity, I = e.resolve, C = [], null == s && (s = new u.default((e, t) => {
                        var l;
                        return l = e, void(N = ("" === t.trim() ? function() {
                            let e = [];
                            return T.default.getPrivateChannelIds().forEach(t => {
                                let l = i.default.getChannel(t);
                                if (null != l) {
                                    if (l.type === h.ChannelTypes.DM) {
                                        let t = l.getRecipientId(),
                                            s = null != t ? A.default.getUser(t) : null;
                                        null != s && e.push({
                                            type: u.AutocompleterResultTypes.USER,
                                            record: s,
                                            score: 0
                                        })
                                    } else l.isMultiUserDM() && e.push({
                                        type: u.AutocompleterResultTypes.GROUP_DM,
                                        record: l,
                                        score: 0
                                    })
                                }
                            }), e
                        }() : l).map(e => {
                            switch (e.type) {
                                case u.AutocompleterResultTypes.USER: {
                                    let {
                                        record: t
                                    } = e;
                                    return {
                                        type: u.AutocompleterResultTypes.USER,
                                        sent: C.includes(t.id),
                                        status: p.default.getStatus(t.id),
                                        data: e
                                    }
                                }
                                case u.AutocompleterResultTypes.TEXT_CHANNEL: {
                                    let {
                                        record: t
                                    } = e, l = i.default.getChannel(t.parent_id), s = c.default.getGuild(t.guild_id);
                                    return {
                                        type: u.AutocompleterResultTypes.TEXT_CHANNEL,
                                        sent: C.includes(t.id),
                                        categoryName: null != l ? (0, o.computeChannelName)(l, A.default, m.default) : "",
                                        guildName: null != s ? s.toString() : "",
                                        data: e
                                    }
                                }
                                case u.AutocompleterResultTypes.GROUP_DM: {
                                    let {
                                        record: t
                                    } = e;
                                    return {
                                        type: u.AutocompleterResultTypes.GROUP_DM,
                                        sent: C.includes(t.id),
                                        data: e
                                    }
                                }
                                default:
                                    throw Error("Unknown Result Type: ".concat(e.type))
                            }
                        }), g.emitChange())
                    }, f, 100)), s.search("")
                },
                ACTIVITY_INVITE_MODAL_QUERY: function(e) {
                    let {
                        query: t
                    } = e;
                    null != s && s.search(t)
                },
                ACTIVITY_INVITE_MODAL_SEND: function(e) {
                    if (null == E) return;
                    let t = e.channelId,
                        l = e.userId;
                    null != t ? r.default.sendActivityInvite({
                        channelId: t,
                        type: h.ActivityActionTypes.JOIN,
                        activity: E,
                        location: "Channel Text Area - Invite to Join Modal"
                    }).then(() => _(t)) : null != l && r.default.sendActivityInviteUser({
                        userId: l,
                        type: h.ActivityActionTypes.JOIN,
                        activity: E,
                        location: "Channel Text Area - Invite to Join Modal"
                    }).then(() => _(l))
                },
                ACTIVITY_INVITE_MODAL_CLOSE: y,
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    let {
                        locked: t
                    } = e;
                    return !!t && null != E && (y(), !0)
                },
                LOCAL_ACTIVITY_UPDATE: v,
                RPC_APP_DISCONNECTED: v
            });
            var L = g