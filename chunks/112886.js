            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return O
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("446674"),
                r = a("77078"),
                u = a("819689"),
                o = a("791234"),
                c = a("512630"),
                f = a("367376"),
                m = a("651693"),
                h = a("605160"),
                E = a("933629"),
                g = a("393414"),
                I = a("208021"),
                _ = a("845579"),
                x = a("42203"),
                v = a("923959"),
                S = a("377253"),
                C = a("957255"),
                N = a("471671"),
                p = a("315102"),
                T = a("347895"),
                A = a("768945"),
                j = a("99384"),
                M = a("49111"),
                D = a("782340"),
                F = a("100703"),
                L = a("632215"),
                R = a("448738");

            function b(e) {
                let t, a, {
                        firstMedia: n,
                        channelId: s
                    } = e,
                    r = (0, d.useStateFromStores)([x.default], () => x.default.getChannel(s)),
                    [u, o] = (0, h.useShouldObscure)({
                        media: n,
                        channel: r
                    }),
                    f = (0, h.getObscuredAlt)(o),
                    g = (0, d.useStateFromStores)([N.default], () => N.default.isFocused()),
                    I = (0, m.isAnimatedImageUrl)(n.src),
                    v = _.GifAutoPlay.useSetting(),
                    {
                        src: S,
                        width: C,
                        height: p,
                        alt: T
                    } = n;
                return p > C ? a = 72 : t = 72, (0, l.jsxs)("div", {
                    className: F.media,
                    children: [(0, E.renderImageComponent)({
                        src: S,
                        maxHeight: t,
                        maxWidth: a,
                        width: C,
                        height: p,
                        alt: null != T && u && null != f ? f : T,
                        autoPlay: v,
                        animated: I && !u && g,
                        containerClassName: F.thumbnailContainer,
                        imageClassName: i({
                            [F.obscured]: u
                        })
                    }), u && (0, l.jsx)(c.default, {
                        obscureReason: o,
                        iconClassname: F.obscuredTag
                    })]
                })
            }

            function G(e) {
                let {
                    resource: t
                } = e, a = (0, d.useStateFromStores)([x.default], () => x.default.getChannel(t.channelId)), s = (0, d.useStateFromStores)([S.default], () => S.default.getMessages(t.channelId)), c = (0, d.useStateFromStores)([C.default], () => C.default.can(M.Permissions.VIEW_CHANNEL, a)), m = s.first(), h = (0, A.default)(m), E = (0, o.useForumPostMediaProperties)(m, !1), g = (null == E ? void 0 : E.length) > 0 ? E[0] : null, _ = null != a && null == s.first() && !s.loadingMore && !s.ready && !s.hasFetched && c;
                n.useEffect(() => {
                    _ && u.default.fetchMessages({
                        channelId: t.channelId,
                        after: t.channelId,
                        limit: 5
                    })
                }, [t.channelId, _]);
                if (null == a || null == a.guild_id) return null;
                let v = p.default.getResourceChannelIconURL({
                        channelId: a.id,
                        icon: t.icon
                    }),
                    N = null == t.description || 0 === t.description.length;
                return (0, l.jsxs)(r.Clickable, {
                    className: F.row,
                    onClick: e => {
                        null != a && (e.shiftKey ? (0, T.selectHomeResourceChannel)(a.guild_id, a.id) : I.default.openResourceChannelAsSidebar({
                            guildId: a.guild_id,
                            channelId: a.id
                        }))
                    },
                    children: [(0, l.jsxs)("div", {
                        className: F.content,
                        children: [(0, l.jsx)(r.Text, {
                            className: F.title,
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: t.title
                        }), N && null != h && (0, l.jsx)(r.Text, {
                            className: F.messageContent,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            lineClamp: 3,
                            children: f.default.parse(h, !0, {
                                guildId: a.guild_id,
                                channelId: a.id
                            })
                        }), !N && (0, l.jsx)(r.Text, {
                            className: i(F.messageContent, L.markup),
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            lineClamp: 3,
                            children: f.default.parse(t.description, !0, {
                                guildId: a.guild_id,
                                channelId: a.id
                            })
                        })]
                    }), null != t.icon && null != v ? (0, l.jsx)("div", {
                        className: F.media,
                        children: (0, l.jsx)("img", {
                            src: v,
                            className: F.thumbnail,
                            width: 72,
                            height: 72,
                            alt: "",
                            "aria-hidden": !0
                        })
                    }) : null, null == v && null != g ? (0, l.jsx)(b, {
                        firstMedia: g,
                        channelId: t.channelId
                    }) : null]
                })
            }

            function O(e) {
                let {
                    guild: t,
                    isNewMember: a
                } = e, n = (0, j.default)(t.id);
                if (0 === n.length) return a ? null : (0, l.jsxs)("div", {
                    className: F.emptyContainer,
                    children: [(0, l.jsx)(r.Heading, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        children: D.default.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE
                    }), (0, l.jsx)("img", {
                        className: F.emptyStateImage,
                        src: R,
                        alt: ""
                    }), (0, l.jsx)(r.Button, {
                        className: F.emptyStateButton,
                        onClick: () => {
                            let e = v.default.getDefaultChannel(t.id);
                            null != e && (0, g.transitionTo)(M.Routes.CHANNEL(t.id, e.id))
                        },
                        fullWidth: !0,
                        children: D.default.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE_CTA
                    })]
                });
                return (0, l.jsxs)("div", {
                    className: F.container,
                    children: [(0, l.jsx)(r.Heading, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: D.default.Messages.GUILD_HOME_RESOURCES
                    }), n.map(e => (0, l.jsx)(G, {
                        resource: e
                    }, e.channelId))]
                })
            }