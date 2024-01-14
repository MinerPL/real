"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("252931"),
  l = n("5667"),
  r = n("701909"),
  o = n("49111"),
  u = n("994428"),
  d = n("782340"),
  c = n("502081"),
  E = n("173090"),
  f = e => {
    let {
      guild: t,
      markAsDismissed: n
    } = e, {
      getNewSettingsDescriptionLine1: f,
      getNewSettingsDescriptionLine2: _
    } = (0, i.useInventoryGuildSettingsExperiment)({
      guildId: t.id
    }), h = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(s.Text, {
        className: c.description,
        variant: "text-sm/normal",
        color: "always-white",
        children: f()
      }), (0, a.jsx)(s.Text, {
        className: c.description,
        variant: "text-sm/normal",
        color: "always-white",
        children: _()
      })]
    });
    return (0, a.jsx)(l.default, {
      header: d.default.Messages.INVENTORY_CHANGE_IN_SETTINGS,
      content: h,
      buttonCTA: d.default.Messages.GOT_IT,
      asset: (0, a.jsx)("img", {
        alt: "Bird yelling into a bullhorn",
        src: E,
        className: c.tooltipImage
      }),
      onClick: () => n(u.ContentDismissActionType.USER_DISMISS),
      onSecondaryClick: () => {
        n(u.ContentDismissActionType.TAKE_ACTION), window.open(r.default.getArticleURL(o.HelpdeskArticles.INVENTORY_PACKS) + "#h_01H96AKBVM8ZA70KC69DVYESGB")
      },
      secondaryButtonCTA: d.default.Messages.LEARN_MORE,
      markAsDismissed: () => n(u.ContentDismissActionType.DISMISS)
    })
  }