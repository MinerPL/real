(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5744"], {
        639028: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("272030"),
                o = n("861370"),
                c = n("782340");

            function r(e) {
                let {
                    application: t,
                    onSelect: n
                } = e, r = (0, o.default)({
                    id: t.id,
                    label: c.default.Messages.COPY_ID
                });
                return (0, u.jsx)(i.Menu, {
                    navId: "activity-shelf-item-context",
                    onClose: l.closeContextMenu,
                    "aria-label": c.default.Messages.ACTIVITY_SHELF_ITEM_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: (0, u.jsx)(i.MenuGroup, {
                        children: r
                    }, "developer-actions")
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("845579"),
                o = n("662255"),
                c = n("306160");

            function r(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: r,
                    shiftId: a,
                    showIconFirst: s
                } = e, d = l.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !c.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, u.jsx)(i.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != a && e.shiftKey ? a : t;
                        (0, c.copy)(n), null == r || r()
                    },
                    icon: o.default,
                    showIconFirst: s
                }, f)
            }
        }
    }
]);