            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("866227"),
                d = l.n(o),
                r = l("65597"),
                u = l("77078"),
                C = l("812204"),
                c = l("781896"),
                f = l("493910"),
                m = l("466818"),
                E = l("178406"),
                M = l("645266"),
                T = l("782340"),
                h = l("236807"),
                x = l("821118");

            function _(e) {
                let {
                    guild: t,
                    onSubmit: s
                } = e, o = (0, r.default)([E.default], () => E.default.getMembersCountByGuildId(t.id, f.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER), [t.id]), _ = (0, r.default)([E.default], () => {
                    let e = E.default.getNewMemberTimestamp(t.id);
                    return d(e).format("h:mm A")
                }, [t.id]), H = (0, r.default)([E.default], () => E.default.hasDefaultSearchStateByGuildId(t.id), [t.id]), A = n.useCallback(() => {
                    (0, M.refreshMemberSafetyTimestamp)(t.id), null == s || s()
                }, [t.id, s]), N = n.useCallback(() => {
                    H ? A() : (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("756912").then(l.bind(l, "756912"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            onConfirm: A
                        })
                    })
                }, [A, H]), p = new Intl.NumberFormat(T.default.getLocale()).format(o), g = (0, m.useCanAccessInviteCodeFeature)(t.id), S = (0, m.useCanAccessBulkBanningFeature)(t.id, C.default.MEMBER_SAFETY_PAGE), L = n.useMemo(() => 1 + (g ? 1 : 0) + (S ? 1 : 0), [g, S]);
                return 0 === o ? null : (0, a.jsxs)("tr", {
                    className: i(x.newMembersNotice),
                    onClick: N,
                    children: [(0, a.jsx)("td", {
                        colSpan: 3,
                        children: (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: T.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_LABEL.format({
                                count: p,
                                date: _
                            })
                        })
                    }), (0, a.jsx)("td", {
                        colSpan: L
                    }), (0, a.jsx)("td", {
                        colSpan: 2,
                        children: (0, a.jsx)("div", {
                            className: i(h.actionCell),
                            children: (0, a.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.TRANSPARENT,
                                look: u.Button.Looks.LINK,
                                className: i(x.memberNoticeActionButton),
                                children: (0, a.jsxs)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    className: i(x.memberNoticeAction),
                                    children: [(0, a.jsx)("div", {
                                        children: T.default.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_ACTION
                                    }), (0, a.jsx)(c.default, {
                                        width: 20,
                                        height: 20,
                                        className: i(x.memberNoticeActionIcon)
                                    })]
                                })
                            })
                        })
                    })]
                })
            }