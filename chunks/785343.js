            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("549103"),
                r = n("982527"),
                o = n("162771"),
                u = n("665382"),
                d = n("395819"),
                c = n("674644"),
                f = n("512812"),
                h = n("797438"),
                C = n("83751"),
                p = n("782340"),
                m = n("573703");

            function E() {
                let [e, t] = a.useState(!1), n = (0, s.useStateFromStores)([o.default], () => o.default.getGuildId()), E = (0, s.useStateFromStores)([r.default], () => r.default.hasFetchedRequestToJoinGuilds), g = (0, f.default)(), I = a.useMemo(() => {
                    let t = (0, c.createFolderNode)({
                        folderId: d.SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
                        folderName: p.default.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
                        expanded: e,
                        guildIds: []
                    });
                    for (let e of g) t.children.push((0, c.createGuildNode)(e, t.id));
                    return t
                }, [g, e]);
                if (a.useEffect(() => {
                        e && !E && i.default.fetchRequestToJoinGuilds()
                    }, [e, E]), 0 === g.length) return null;
                let S = null != n && g.includes(n);
                return (0, l.jsx)(h.default, {
                    folderNode: I,
                    expanded: e,
                    useCircleMask: !e && !S,
                    selected: S,
                    draggable: !1,
                    sorting: !1,
                    onExpandCollapse: () => t(!e),
                    folderIconContent: (0, l.jsx)("div", {
                        className: m.expandedFolderIconWrapper,
                        children: (0, l.jsx)(u.default, {
                            width: 24,
                            height: 24,
                            className: m.pendingIcon
                        })
                    }),
                    renderChildNode: function(e) {
                        return e.type !== c.GuildsNodeType.GUILD ? null : (0, l.jsx)(C.default, {
                            guildNode: e
                        })
                    }
                })
            }