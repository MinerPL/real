            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("272030"),
                r = n("430568"),
                u = n("385976"),
                o = n("404607"),
                d = n("680986"),
                c = n("300322"),
                f = n("42203"),
                h = n("953371"),
                p = n("782340"),
                m = n("208701");

            function E(e) {
                let {
                    tag: t
                } = e, {
                    name: n,
                    emojiId: s,
                    emojiName: i
                } = t, o = (0, l.useStateFromStores)([u.default], () => null != s ? u.default.getUsableCustomEmojiById(s) : null);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.default, {
                        className: m.emoji,
                        emojiId: s,
                        emojiName: i,
                        animated: !!(null == o ? void 0 : o.animated)
                    }), n]
                })
            }

            function C(e) {
                let t = (0, l.useStateFromStores)([f.default], () => f.default.getChannel(e), [e]),
                    n = (0, c.useCanManageThread)(t),
                    r = (0, l.useStateFromStores)([f.default], () => f.default.getChannel(null == t ? void 0 : t.parent_id), [t]),
                    u = (0, d.useVisibleForumTags)(r),
                    m = (0, d.useAppliedTags)(t),
                    C = m.length >= h.MAX_FORUM_POST_TAGS,
                    g = (0, c.useIsActiveChannelOrUnarchivableThread)(t);
                if (null == t) return (0, i.closeContextMenu)(), null;
                if (!n || __OVERLAY__ || !t.isForumPost() || (null == u ? void 0 : u.length) === 0 || !g) return null;
                let S = e => {
                        let n = new Set(m);
                        if (n.has(e)) n.delete(e);
                        else {
                            if (C) return;
                            n.add(e)
                        }
                        let a = Array.from(n).map(e => e.id);
                        o.default.updateForumPostTags(t.id, a)
                    },
                    _ = null == u ? void 0 : u.map(e => {
                        let t = m.includes(e);
                        return (0, a.jsx)(s.MenuCheckboxItem, {
                            id: e.id,
                            label: (0, a.jsx)(E, {
                                tag: e
                            }),
                            disabled: C && !t,
                            action: () => S(e),
                            checked: t
                        }, e.id)
                    });
                return (0, a.jsx)(s.MenuItem, {
                    id: "edit-tags",
                    label: p.default.Messages.FORUM_TAG_POST_EDIT,
                    children: _
                })
            }