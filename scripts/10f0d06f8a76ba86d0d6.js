(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31016"], {
        672409: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("272030"),
                c = n("835487"),
                l = n("782340");

            function s(e) {
                let {
                    target: t,
                    onSelect: n
                } = e, s = (0, c.default)({
                    type: t.getAttribute("data-type"),
                    packId: t.getAttribute("data-pack-id")
                });
                return (0, u.jsx)(a.Menu, {
                    navId: "expression-picker",
                    onClose: r.closeContextMenu,
                    "aria-label": l.default.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    className: "context-menu",
                    children: (0, u.jsx)(a.MenuGroup, {
                        children: s
                    })
                })
            }
        },
        835487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                c = n("252931"),
                l = n("13162"),
                s = n("166465"),
                i = n("246511"),
                o = n("782340");

            function d(e) {
                let {
                    type: t,
                    packId: n
                } = e, d = (0, a.useStateFromStores)([s.default], () => null !== n && null != s.default.getPackByPackId({
                    packId: n
                })), {
                    viewAndUseEnabled: p
                } = (0, c.useInventoryGuildPacksUserExperiment)({
                    autoTrackExposure: !1
                });
                return p && d && (t === i.PickerContextMenuDataTypes.EMOJI || t === i.PickerContextMenuDataTypes.PACK_ICON) && null !== n ? (0, u.jsx)(r.MenuItem, {
                    id: "uncollect",
                    action: function() {
                        null != n && (0, l.uncollectPack)({
                            packId: n
                        })
                    },
                    label: o.default.Messages.INVENTORY_REMOVE_PACK
                }) : null
            }
        }
    }
]);