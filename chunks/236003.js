"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var s = a("37983");
a("884691");
var n = a("65597"),
  l = a("77078"),
  r = a("850391"),
  i = a("271972"),
  o = a("761354"),
  d = a("1999"),
  u = a("585722"),
  c = a("782340"),
  m = a("909067");

function h(e) {
  let {
    parentChannel: t
  } = e, a = (0, n.useStateFromStoresArray)([u.default], () => {
    let e = u.default.getUploads(t.id, r.ChatInputTypes.CREATE_FORUM_POST.drafts.type);
    return null == e ? void 0 : e.filter(e => !0 !== e.isThumbnail)
  });
  return (0, s.jsxs)("div", {
    className: m.container,
    children: [(0, s.jsx)(l.Text, {
      variant: "text-md/semibold",
      color: "text-muted",
      children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_TITLE
    }), (0, s.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: c.default.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_DESCRIPTION
    }), (0, s.jsx)("div", {
      children: (0, s.jsx)(l.ScrollerThin, {
        className: m.uploadsContainer,
        orientation: "horizontal",
        paddingFix: !1,
        fade: !0,
        children: (0, s.jsxs)("div", {
          className: m.uploads,
          children: [a.map(e => (0, s.jsx)(o.default, {
            channelId: t.id,
            draftType: r.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
            upload: e,
            keyboardModeEnabled: !0,
            hideFileName: !0,
            size: i.AttachmentListItemSizes.SMALL
          }, e.id)), (0, s.jsx)(d.ComposerUploadButton, {
            channelId: t.id
          })]
        })
      })
    })]
  })
}