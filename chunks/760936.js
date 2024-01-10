            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("77078"),
                u = s("506885"),
                o = s("981601"),
                d = s("280174"),
                c = s("533403"),
                _ = s("158998"),
                E = s("49111"),
                I = s("782340"),
                T = s("997672");
            let f = {
                [E.StoreRecommendationTypes.NOW_PLAYING]: {
                    single: (e, t) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_SINGLE.format({
                        user1: e.username,
                        user1Hook: () => t(e)
                    }),
                    double: (e, t, s) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_DOUBLE.format({
                        user1: e.username,
                        user1Hook: () => s(e),
                        user2: t.username,
                        user2Hook: () => s(t)
                    }),
                    other: e => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_NOW_PLAYING_OTHER.format({
                        count: e
                    })
                },
                [E.StoreRecommendationTypes.RECENTLY_PLAYED]: {
                    single: (e, t) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_SINGLE.format({
                        user1: e.username,
                        user1Hook: () => t(e)
                    }),
                    double: (e, t, s) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_DOUBLE.format({
                        user1: e.username,
                        user1Hook: () => s(e),
                        user2: t.username,
                        user2Hook: () => s(t)
                    }),
                    other: e => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_RECENTLY_PLAYED_OTHER.format({
                        count: e
                    })
                },
                [E.StoreRecommendationTypes.EVER_PLAYED]: {
                    single: (e, t) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_SINGLE.format({
                        user1: e.username,
                        user1Hook: () => t(e)
                    }),
                    double: (e, t, s) => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_DOUBLE.format({
                        user1: e.username,
                        user1Hook: () => s(e),
                        user2: t.username,
                        user2Hook: () => s(t)
                    }),
                    other: e => I.default.Messages.APPLICATION_STORE_RECOMMENDATION_EVER_PLAYED_OTHER.format({
                        count: e
                    })
                }
            };
            class S extends n.PureComponent {
                renderDescription(e, t) {
                    let s = f[e];
                    return 1 === t.length ? s.single(t[0].user, e => this.renderActivityDiscordTag(e)) : 2 === t.length ? s.double(t[0].user, t[1].user, e => this.renderActivityDiscordTag(e)) : s.other(t.length)
                }
                renderActivityDiscordTag(e) {
                    return (0, a.jsx)(i.Popout, {
                        preload: () => (0, u.default)(e.id, e.getAvatarURL(void 0, 80)),
                        renderPopout: t => this.renderUserPopout(e, t),
                        position: "right",
                        children: t => (0, a.jsx)("span", {
                            className: T.username,
                            ...t,
                            children: e.username
                        })
                    }, e.id)
                }
                render() {
                    let {
                        reason: e,
                        className: t
                    } = this.props, {
                        type: s,
                        userInfo: n
                    } = e;
                    return 0 === n.length ? null : (0, a.jsxs)("div", {
                        className: l(T.recommendationActivity, t),
                        children: [(0, a.jsx)(c.default, {
                            className: T.players,
                            users: n.map(e => {
                                let {
                                    user: t
                                } = e;
                                return t
                            }),
                            renderUser: this.renderPlayer,
                            max: 4,
                            renderMoreUsers: this.renderPlayerOverflow
                        }), (0, a.jsx)("div", {
                            className: T.description,
                            children: this.renderDescription(s, n)
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.renderUserPopout = (e, t) => (0, a.jsx)(o.default, {
                        ...t,
                        userId: e.id
                    }), this.renderUserTooltip = (e, t, s) => (0, a.jsxs)("div", {
                        className: T.tooltip,
                        children: [(0, a.jsx)("div", {
                            children: _.default.getUserTag(e)
                        }), (0, a.jsx)(d.default, {
                            className: T.tooltipTimestamp,
                            start: t,
                            end: s,
                            location: d.default.Locations.ACTIVITY_FEED
                        })]
                    }), this.renderPlayer = (e, t, s, n) => {
                        if (null == e) return null;
                        let r = this.props.reason.userInfo.find(t => t.user === e);
                        return null == r ? null : (0, a.jsx)(i.Popout, {
                            preload: () => (0, u.default)(e.id, e.getAvatarURL(void 0, 80)),
                            renderPopout: t => this.renderUserPopout(e, t),
                            position: "right",
                            children: t => (0, a.jsx)(i.Tooltip, {
                                text: this.renderUserTooltip(e, r.startTime, r.endTime),
                                "aria-label": (0, _.getUserTag)(e, {
                                    decoration: "never"
                                }),
                                children: s => (0, a.jsx)(i.Avatar, {
                                    className: l(T.playerAvatar, {
                                        [T.avatarMasked]: !n
                                    }),
                                    src: e.getAvatarURL(void 0, 32),
                                    "aria-label": e.username,
                                    size: i.AvatarSizes.SIZE_32,
                                    ...s,
                                    ...t
                                })
                            })
                        }, e.id)
                    }, this.renderPlayerOverflow = (e, t, s) => (0, a.jsx)("div", {
                        className: T.playerOverflow,
                        children: e
                    }, s)
                }
            }
            var R = S