    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return f
      }
    });
    var d = t("37983");
    t("884691");
    var s = t("414456"),
      n = t.n(s),
      c = t("77078"),
      i = t("216422"),
      r = t("782340"),
      o = t("881609");

    function f(e) {
      let {
        text: a = r.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        className: t
      } = e;
      return (0, d.jsx)(c.Tooltip, {
        text: a,
        children: e => (0, d.jsx)(c.Clickable, {
          ...e,
          children: (0, d.jsx)(i.default, {
            className: n(o.nitroWheel, t)
          })
        })
      })
    }