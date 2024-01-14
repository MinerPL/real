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