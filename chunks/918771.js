            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007"), n("834022");
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                u = n("819855"),
                a = n("77078"),
                c = n("272030"),
                d = n("851387"),
                f = n("841098"),
                E = n("376556"),
                _ = n("716241"),
                p = n("766274"),
                I = n("271938"),
                S = n("26989"),
                h = n("305961"),
                T = n("476765"),
                N = n("486952"),
                C = n("811305"),
                v = n("599110"),
                g = n("701909"),
                m = n("339023"),
                A = n("602658"),
                U = n("49111"),
                L = n("782340"),
                R = n("80014"),
                P = n("494101"),
                y = function(e) {
                    let {
                        guildId: t,
                        transitionState: r,
                        onClose: y
                    } = e, D = (0, s.useStateFromStores)([h.default], () => h.default.getGuild(t), [t]), O = (0, s.useStateFromStores)([I.default], () => I.default.getId()), b = (0, s.useStateFromStores)([S.default], () => S.default.getMember(t, O)), [M, w] = l.useState([]), G = (0, f.default)(), x = (0, T.useUID)();
                    if (l.useEffect(() => {
                            0 !== M.length && v.default.track(U.AnalyticEvents.PASSPORT_ENTRY_VIEWED, {
                                role_ids: M.map(e => {
                                    let {
                                        role_id: t
                                    } = e;
                                    return t
                                }),
                                ...(0, _.collectGuildAnalyticsMetadata)(t)
                            })
                        }, [t, M]), l.useEffect(() => {
                            d.default.getGuildRoleConnectionsConfigurations(t).then(e => w(e))
                        }, [t]), null == D || null == b) return null;
                    let F = Object.values(D.roles).filter(e => {
                        var t;
                        return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                    });
                    return (0, i.jsxs)(a.ModalRoot, {
                        transitionState: r,
                        "aria-labelledby": x,
                        className: R.modal,
                        children: [(0, i.jsxs)(a.ModalHeader, {
                            separator: !1,
                            children: [(0, i.jsx)(m.default, {
                                className: R.headerIcon,
                                size: 24
                            }), (0, i.jsx)(a.Heading, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: L.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
                            }), (0, i.jsx)(a.ModalCloseButton, {
                                className: R.modalCloseButton,
                                onClick: y
                            })]
                        }), (0, i.jsxs)(a.ModalContent, {
                            className: R.container,
                            children: [(0, i.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: L.default.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({
                                    helpdeskArticleUrl: g.default.getArticleURL(U.HelpdeskArticles.CONNECTION_DETAILS)
                                })
                            }), (0, i.jsx)("div", {
                                className: R.verifiedRoles,
                                children: F.map(e => {
                                    let r = b.roles.includes(e.id),
                                        s = function(e) {
                                            let n = M.find(t => {
                                                let {
                                                    role_id: n
                                                } = t;
                                                return n === e
                                            });
                                            if (null == n) return [];
                                            let l = {};
                                            for (let e of n.rules.flat()) {
                                                let s;
                                                if (null != e.application_id) {
                                                    var r;
                                                    let l = null === (r = n.applications) || void 0 === r ? void 0 : r[e.application_id];
                                                    s = (null == l ? void 0 : l.bot) != null ? (0, i.jsx)("img", {
                                                        src: new(0, p.default)(l.bot).getAvatarURL(t, 24),
                                                        alt: "",
                                                        className: o(R.botAvatar, P.avatar)
                                                    }) : null
                                                } else {
                                                    let t = E.default.get(e.connection_type);
                                                    s = (0, i.jsx)("img", {
                                                        src: (0, u.isThemeLight)(G) ? t.icon.lightSVG : t.icon.darkSVG,
                                                        alt: "",
                                                        className: P.avatar
                                                    })
                                                }
                                                null != s && (l["".concat(e.connection_type, ":").concat(e.application_id)] = s)
                                            }
                                            return Object.values(l)
                                        }(e.id);
                                    return (0, i.jsxs)(a.Clickable, {
                                        className: o(R.verifiedRole, r ? R.verifiedRoleHasRole : null),
                                        onClick: r ? void 0 : () => {
                                            var l, r;
                                            return l = e, r = t, void(0, a.openModalLazy)(async () => {
                                                let {
                                                    default: e
                                                } = await n.el("572579").then(n.bind(n, "572579"));
                                                return t => (0, i.jsx)(e, {
                                                    role: l,
                                                    guildId: r,
                                                    ...t
                                                })
                                            })
                                        },
                                        onContextMenu: r ? t => {
                                            var l, r, o;
                                            return l = D.id, r = e.id, o = t, void(0, c.openContextMenuLazy)(o, async () => {
                                                let {
                                                    default: e
                                                } = await n.el("232006").then(n.bind(n, "232006"));
                                                return t => (0, i.jsx)(e, {
                                                    ...t,
                                                    roleId: r,
                                                    onLeaveRole: () => d.default.unassignGuildRoleConnection(l, r)
                                                })
                                            })
                                        } : void 0,
                                        children: [r ? (0, i.jsx)("div", {
                                            className: R.roleCheckmark,
                                            children: (0, i.jsx)(N.default, {})
                                        }) : null, (0, i.jsx)(A.default, {
                                            guildId: t,
                                            role: e,
                                            size: 24
                                        }), (0, i.jsxs)("div", {
                                            className: R.verifiedRoleNameDescriptionContainer,
                                            children: [(0, i.jsx)(a.Text, {
                                                variant: "text-md/medium",
                                                color: "header-primary",
                                                className: R.verifiedRoleName,
                                                children: e.name
                                            }), void 0 !== e.description ? (0, i.jsx)(a.Text, {
                                                variant: "text-xs/normal",
                                                color: "header-secondary",
                                                className: R.verifiedRoleDescription,
                                                children: e.description
                                            }) : null]
                                        }), (0, i.jsx)(C.default, {
                                            showUserPopout: !1,
                                            guildId: t,
                                            users: s.map(() => null),
                                            renderUser: (e, t, n) => (0, i.jsx)(l.Fragment, {
                                                children: s[n]
                                            }, n),
                                            max: 3
                                        })]
                                    }, e.id)
                                })
                            })]
                        })]
                    })
                }