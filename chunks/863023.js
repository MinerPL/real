            "use strict";
            n.r(t), n.d(t, {
                UserLinkAcceptedRequestRow: function() {
                    return C
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("627445"),
                l = n.n(i),
                r = n("65597"),
                o = n("77078"),
                u = n("697218"),
                d = n("945330"),
                c = n("768815"),
                E = n("176661"),
                f = n("922832"),
                _ = n("782340"),
                h = n("850832");

            function C(e) {
                let {
                    user: t
                } = e, i = (0, r.default)([u.default], () => u.default.getCurrentUser()), C = s.useCallback(() => {
                    l(void 0 !== i, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("127563").then(n.bind(n, "127563"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            currentUser: i,
                            otherUser: t
                        })
                    })
                }, [i, t]);
                return (0, a.jsxs)("div", {
                    className: h.container,
                    children: [(0, a.jsx)("div", {
                        className: h.details,
                        children: (0, a.jsx)(E.default, {
                            otherUser: t,
                            status: f.UserLinkStatus.ACTIVE
                        })
                    }), (0, a.jsx)("div", {
                        className: h.actions,
                        children: (0, a.jsx)(c.default, {
                            icon: d.default,
                            className: h.actionDeny,
                            tooltip: _.default.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
                            onClick: C
                        })
                    })]
                })
            }