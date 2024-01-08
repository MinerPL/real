            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("446674"),
                u = n("77078"),
                r = n("788506"),
                d = n("252931"),
                o = n("166257"),
                c = n("432173"),
                f = n("300322"),
                E = n("845579"),
                M = n("957255"),
                m = n("315102"),
                g = n("402671"),
                I = n("49111"),
                S = n("958706"),
                p = n("782340"),
                _ = n("791507");
            let A = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

            function v(e) {
                var t;
                let {
                    emoji: n,
                    isFocused: i
                } = e, {
                    animated: s,
                    src: r,
                    surrogates: d
                } = n;
                return null == r && null != n.id ? r = m.default.getEmojiURL({
                    id: n.id,
                    animated: !!s,
                    size: 20
                }) : null == r && (r = g.default.getURL(d)), (0, a.jsx)(u.Tooltip, {
                    text: n.allNamesString,
                    hideOnClick: !0,
                    spacing: 16,
                    forceOpen: i,
                    children: e => (0, a.jsx)("div", {
                        "aria-label": p.default.Messages.ADD_REACTION_NAMED.format({
                            emojiName: n.name
                        }),
                        className: l(_.button, {
                            [_.focused]: i
                        }),
                        ...e,
                        children: null == r || "" === r.trim() ? (0, a.jsx)("span", {
                            className: l("emoji", "emoji-text", _.icon),
                            ...e,
                            children: d
                        }) : (0, a.jsx)("img", {
                            className: _.icon,
                            src: r,
                            alt: ""
                        })
                    })
                }, null !== (t = n.id) && void 0 !== t ? t : n.name)
            }

            function T(e, t) {
                let n = (0, r.useEmojiInPriorityOrder)(t.guild_id),
                    {
                        viewAndUseEnabled: i
                    } = (0, d.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }),
                    l = n.filter(e => {
                        var n;
                        return !(e.useSpriteSheet && A.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : "") >= 0) && !g.default.isEmojiPremiumLocked({
                            emoji: e,
                            channel: t,
                            intention: S.EmojiIntention.REACTION,
                            canViewAndUsePackEmoji: i
                        })
                    });
                l.length > 4 && (l.length = 4);
                let m = E.RenderReactions.useSetting(),
                    p = (0, f.useIsActiveChannelOrUnarchivableThread)(t),
                    T = (0, s.useStateFromStores)([M.default], () => m && p && (t.isPrivate() || M.default.can(I.Permissions.ADD_REACTIONS, t)), [t, p, m]),
                    h = n => {
                        (0, o.addReaction)(t.id, e.id, (0, c.toReactionEmoji)(n), void 0)
                    };
                return T && l.length > 0 ? (0, a.jsx)(u.MenuGroup, {
                    className: _.wrapper,
                    children: l.map((e, t) => {
                        var n;
                        return (0, a.jsx)(u.MenuItem, {
                            id: "quickreact-".concat(null !== (n = e.id) && void 0 !== n ? n : t),
                            render: t => {
                                let {
                                    isFocused: n
                                } = t;
                                return (0, a.jsx)(v, {
                                    emoji: e,
                                    isFocused: n
                                })
                            },
                            action: () => h(e),
                            dontCloseOnActionIfHoldingShiftKey: !0
                        }, t)
                    })
                }) : null
            }