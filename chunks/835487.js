            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("252931"),
                s = n("13162"),
                o = n("166465"),
                c = n("246511"),
                l = n("782340");

            function d(t) {
                let {
                    type: e,
                    packId: n
                } = t, d = (0, i.useStateFromStores)([o.default], () => null !== n && null != o.default.getPackByPackId({
                    packId: n
                })), {
                    viewAndUseEnabled: E
                } = (0, u.useInventoryGuildPacksUserExperiment)({
                    autoTrackExposure: !1
                });
                return E && d && (e === c.PickerContextMenuDataTypes.EMOJI || e === c.PickerContextMenuDataTypes.PACK_ICON) && null !== n ? (0, r.jsx)(a.MenuItem, {
                    id: "uncollect",
                    action: function() {
                        null != n && (0, s.uncollectPack)({
                            packId: n
                        })
                    },
                    label: l.default.Messages.INVENTORY_REMOVE_PACK
                }) : null
            }