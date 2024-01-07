            "use strict";
            n.r(t), n.d(t, {
                useShouldShowPTONotice: function() {
                    return S
                },
                StaffPTOBar: function() {
                    return g
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                o = n("913144"),
                s = n("42203"),
                a = n("26989"),
                u = n("18494"),
                d = n("697218"),
                c = n("381546"),
                f = n("782340"),
                p = n("387213");
            let m = new Set;
            class h extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (m = new Set(e))
                }
                hasId(e) {
                    return m.has(e)
                }
                getState() {
                    return [...m]
                }
            }
            h.displayName = "PTOStore", h.persistKey = "PTOStore";
            let E = new h(o.default, {}),
                S = e => (0, i.useStateFromStores)([a.default, d.default, E], () => {
                    let t = d.default.getCurrentUser();
                    if (null == t || !t.isStaff() || !e.isDM()) return !1;
                    let n = d.default.getUser(e.getRecipientId());
                    if (!(null == n ? void 0 : n.isStaff())) return !1;
                    let l = a.default.getNicknames(n.id).some(e => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                    return l ? !E.hasId(n.id) && l : (m.delete(n.id) && E.emitChange(), !1)
                }),
                g = () => (0, l.jsxs)("div", {
                    className: p.bar,
                    children: [f.default.Messages.STAFF_PTO_NOTICE, (0, l.jsx)(r.Clickable, {
                        className: p.closeButton,
                        onClick: () => {
                            let e = u.default.getChannelId();
                            if (null == e) return;
                            let t = s.default.getChannel(e);
                            null != t && t.isPrivate() && !m.has(t.getRecipientId()) && (m.add(t.getRecipientId()), E.emitChange())
                        },
                        children: (0, l.jsx)(c.default, {
                            className: p.closeIcon
                        })
                    })]
                })