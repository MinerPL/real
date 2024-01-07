            "use strict";
            n.r(t), n.d(t, {
                UsernameDecorationTypes: function() {
                    return i
                },
                default: function() {
                    return T
                }
            });
            var a, i, s = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                u = n("394846"),
                c = n("446674"),
                d = n("77078"),
                m = n("206230"),
                f = n("390236"),
                g = n("500858"),
                p = n("238956"),
                E = n("506885"),
                A = n("79798"),
                S = n("315102"),
                h = n("741566");

            function I(e) {
                let {
                    compact: t
                } = e;
                return (0, s.jsx)(A.default, {
                    className: t ? h.botTagCompact : h.botTagCozy,
                    type: A.default.Types.REMIX,
                    useRemSizes: !0
                })
            }

            function T(e) {
                let t, {
                        author: n,
                        message: a,
                        userOverride: i,
                        compact: l = !1,
                        withMentionPrefix: A = !1,
                        showPopout: T = !1,
                        className: y,
                        onClick: M,
                        onContextMenu: v,
                        onPopoutRequestClose: _,
                        renderPopout: x,
                        renderRemixTag: N = !1,
                        decorations: L
                    } = e,
                    b = r.useContext(f.default),
                    {
                        nick: R,
                        colorString: C,
                        colorRoleName: k
                    } = n,
                    j = null != a.messageReference && null != a.webhookId,
                    D = (0, c.useStateFromStores)([m.default], () => m.default.roleStyle),
                    w = (0, p.useCanSeeRemixBadge)(),
                    P = {
                        className: h.username,
                        style: "username" === D && null != C ? {
                            color: C
                        } : void 0,
                        onClick: M,
                        onContextMenu: v,
                        children: (A ? "@" : "") + R
                    };
                t = null != x && null != T ? (0, s.jsx)(d.Popout, {
                    preload: j ? void 0 : function() {
                        let e = null != i ? i : a.author;
                        return (0, E.default)(e.id, null != n.guildMemberAvatar && null != b ? (0, S.getGuildMemberAvatarURLSimple)({
                            guildId: b,
                            userId: e.id,
                            avatar: n.guildMemberAvatar,
                            size: 80
                        }) : e.getAvatarURL(b, 80), {
                            guildId: b,
                            channelId: a.channel_id
                        })
                    },
                    renderPopout: x,
                    shouldShow: T,
                    position: u.isMobile ? "window_center" : "right",
                    onRequestClose: _,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, s.jsx)(d.Clickable, {
                            tag: "span",
                            ...n,
                            ...P,
                            className: o(P.className, h.clickable, y)
                        })
                    }
                }) : (0, s.jsx)(d.Clickable, {
                    ...P,
                    className: o(P.className, y)
                });
                let F = null != L ? L[0] : null,
                    B = null != L ? L[1] : null;
                return (0, s.jsxs)(s.Fragment, {
                    children: [null != F && l ? (0, s.jsxs)(s.Fragment, {
                        children: [" ", F, " "]
                    }) : null, "dot" === D ? (0, s.jsx)(d.RoleDot, {
                        color: C,
                        name: k,
                        className: h.roleDot
                    }) : null, t, null != B ? (0, s.jsx)(s.Fragment, {
                        children: B
                    }) : null, null == F || l ? null : F, null != a && (0, g.default)(a) && w && N ? (0, s.jsx)(I, {}) : null]
                })
            }(a = i || (i = {}))[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES"