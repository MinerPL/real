"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var u = n("37983");
n("884691");
var r = n("77078"),
  a = n("599110"),
  s = n("845579"),
  l = n("49111"),
  i = n("782340");

function o() {
  let e = s.UseLegacyChatInput.useSetting(),
    t = s.UseRichChatInput.useSetting();
  return e ? null : (0, u.jsx)(r.MenuCheckboxItem, {
    id: "preview-markdown-toggle",
    label: i.default.Messages.PREVIEW_MARKDOWN,
    action: () => {
      let e = !t;
      a.default.track(l.AnalyticEvents.PREVIEW_MARKDOWN_TOGGLED, {
        enabled: e,
        location: {
          section: l.AnalyticsSections.SETTINGS_CONTEXT_MENU
        }
      }), s.UseRichChatInput.updateSetting(e)
    },
    checked: t
  })
}