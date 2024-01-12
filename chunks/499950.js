            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                r = l("9294"),
                i = l("512027"),
                u = l("52393"),
                d = l("652453"),
                o = l("119184"),
                c = l("923959"),
                E = l("305961"),
                f = l("330154"),
                _ = l("943232"),
                I = l("945330"),
                T = l("599110"),
                N = l("306160"),
                h = l("354023"),
                v = l("841363"),
                m = l("49111"),
                S = l("782340"),
                g = l("131439");
            let {
                INVITE_OPTIONS_7_DAYS: C,
                INVITE_OPTIONS_UNLIMITED: x
            } = h.default;

            function p(e) {
                var t, l, p;
                let {
                    onClose: A,
                    event: O
                } = e, R = null == O ? void 0 : O.guild_id, M = (0, a.useStateFromStores)([c.default], () => {
                    var e;
                    return null != R ? null === (e = c.default.getDefaultChannel(R)) || void 0 === e ? void 0 : e.id : null
                }, [R]), L = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(R), [R]), D = (null == L ? void 0 : L.vanityURLCode) != null && (null == L ? void 0 : L.vanityURLCode.length) > 0, {
                    enabled: y
                } = i.default.useExperiment({
                    guildId: null != R ? R : "",
                    location: "bd50e8_1"
                }, {
                    autoTrackExposure: D
                }), {
                    channel_id: j,
                    id: V
                } = null != O ? O : {}, U = (0, a.useStateFromStores)([f.default], () => {
                    let e = null != j ? j : M;
                    return null == e ? null : f.default.getInvite(e)
                }, [j, M]);
                if (null == O) return A(), null;
                let G = y && null !== (t = null == L ? void 0 : L.vanityURLCode) && void 0 !== t ? t : null == U ? void 0 : U.code,
                    P = null != G ? (0, r.generateInviteKeyFromExtraData)({
                        baseCode: G,
                        guildScheduledEventId: V
                    }) : null,
                    H = null == P || null == U,
                    B = (0, u.default)(null != P ? P : ""),
                    b = null !== (l = null == U ? void 0 : U.maxAge) && void 0 !== l ? l : C.value,
                    F = null !== (p = null == U ? void 0 : U.maxUses) && void 0 !== p ? p : x.value;
                return (0, n.jsxs)("div", {
                    className: g.container,
                    children: [(0, n.jsx)(s.Clickable, {
                        onClick: A,
                        className: g.close,
                        "aria-label": S.default.Messages.CLOSE,
                        children: (0, n.jsx)(I.default, {})
                    }), (0, n.jsx)(o.default, {
                        children: (0, n.jsx)("div", {
                            className: g.iconContainer,
                            children: (0, n.jsx)(_.default, {
                                height: 30,
                                width: 30,
                                className: g.icon
                            })
                        })
                    }), (0, n.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        className: g.header,
                        children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: g.body,
                        children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, n.jsxs)("div", {
                        className: g.invite,
                        children: [(0, n.jsx)(d.RawInviteCopyInputConnected, {
                            value: B,
                            autoFocus: !1,
                            onCopy: e => {
                                if (H) return;
                                (0, N.copy)(e);
                                let t = (0, v.getChannelTypeFromEntity)(O.entity_type);
                                T.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
                                    server: O.guild_id,
                                    channel: j,
                                    channel_type: t,
                                    location: m.InstantInviteSources.GUILD_EVENTS,
                                    code: U.code,
                                    guild_scheduled_event_id: null == O ? void 0 : O.id
                                })
                            }
                        }), (null == L ? void 0 : L.vanityURLCode) == null && (0, n.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: g.inviteDetail,
                            children: (0, h.maxAgeString)(b, F)
                        })]
                    })]
                })
            }