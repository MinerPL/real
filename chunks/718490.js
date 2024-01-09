            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("917351"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("906932"),
                d = n("401642"),
                c = n("26989"),
                f = n("305961"),
                h = n("697218"),
                C = n("98292"),
                p = n("351825"),
                m = n("956089"),
                E = n("664336"),
                g = n("811305"),
                S = n("117362"),
                _ = n("449008"),
                A = n("49111"),
                T = n("590456"),
                M = n("782340"),
                I = n("961282");
            class N {
                updateData(e, t) {
                    this.userId = e, this.user = t
                }
                getNicknameGuildPairs() {
                    return this.generateNicknameGuildPairs(this.user)
                }
                renderNicknamePairs() {
                    return this.getNicknameGuildPairs().map((e, t) => {
                        let [n, l] = e, i = (0, s.jsx)(o.Clickable, {
                            tag: "span",
                            onClick: this.handleClick,
                            children: n
                        });
                        return l.length > 0 && (i = (0, s.jsx)(o.TooltipContainer, {
                            className: I.tooltip,
                            text: l.join(", "),
                            position: "bottom",
                            children: i
                        })), (0, s.jsxs)(a.Fragment, {
                            children: [0 !== t ? ", " : null, i]
                        }, t)
                    })
                }
                constructor(e, t) {
                    this.generateNicknameGuildPairs = (0, S.cachedFunction)(e => {
                        var t;
                        let n = i(c.default.getNicknameGuildsMapping(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : this.userId)).toPairs().map(e => {
                            let [t, n] = e;
                            return [t, n.map(e => {
                                var t;
                                return null === (t = f.default.getGuild(e)) || void 0 === t ? void 0 : t.name
                            }).filter(_.isNotNullish)]
                        }).value();
                        return n
                    }), this.renderMoreAvatars = () => (0, s.jsx)(o.TooltipContainer, {
                        text: M.default.Messages.AKA_MORE_AVATARS_OVERFLOW,
                        position: "bottom",
                        children: (0, s.jsx)(o.Clickable, {
                            className: I.moreAvatars,
                            onClick: this.handleClick,
                            children: (0, s.jsx)(p.default, {
                                className: I.plusIcon
                            })
                        })
                    }, "more-avatars"), this.handleClick = () => {
                        (0, d.openUserProfileModal)({
                            userId: this.userId,
                            section: T.UserProfileSections.MUTUAL_GUILDS,
                            analyticsLocation: {
                                section: A.AnalyticsSections.CHANNEL_HEADER
                            }
                        })
                    }, this.userId = e, this.user = t
                }
            }

            function v(e) {
                let {
                    channel: t
                } = e, n = t.getRecipientId(), l = (0, u.useAvatarsWithGuilds)(n), i = Array(l.length).fill(null), d = function(e) {
                    let t = (0, r.useStateFromStores)([h.default], () => h.default.getUser(e), [e]),
                        [n] = a.useState(() => new N(e, null != t ? t : void 0));
                    return n.updateData(e, null != t ? t : void 0), n
                }(n);
                return 0 === d.getNicknameGuildPairs().length && 0 === l.length ? (0, s.jsx)("div", {
                    className: I.spacer
                }) : (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(E.Divider, {}), (0, s.jsx)(m.TextBadge, {
                        text: M.default.Messages.AKA,
                        disableColor: !0,
                        className: I.akaBadge
                    }), l.length > 0 ? (0, s.jsx)(g.default, {
                        size: 16,
                        users: i,
                        showUserPopout: !1,
                        renderUser: (e, t, n) => {
                            var a;
                            let i = d.user,
                                r = l[n];
                            return null == r || null == i ? null : (0, s.jsx)(o.TooltipContainer, {
                                text: null === (a = f.default.getGuild(r)) || void 0 === a ? void 0 : a.name,
                                position: "bottom",
                                children: (0, s.jsx)("img", {
                                    alt: "",
                                    className: I.avatar,
                                    onClick: d.handleClick,
                                    src: i.getAvatarURL(r, 16),
                                    "aria-hidden": !0
                                })
                            }, r[1])
                        },
                        renderMoreUsers: d.renderMoreAvatars,
                        guildId: void 0,
                        max: 3,
                        className: I.avatars
                    }) : null, d.getNicknameGuildPairs().length > 0 ? (0, s.jsx)(C.default, {
                        position: "bottom",
                        className: I.nicknames,
                        children: d.renderNicknamePairs()
                    }) : null]
                })
            }