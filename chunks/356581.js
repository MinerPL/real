"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var l = a("884691"),
  n = a("446674"),
  s = a("474643"),
  r = a("585722"),
  i = a("172402");

function o(e) {
  var t, a;
  let {
    channelId: o,
    localCreationAnswerId: u,
    image: c
  } = e, d = null == c ? void 0 : c.emoji, E = (null == c ? void 0 : null === (t = c.mediaAttachmentState) || void 0 === t ? void 0 : t.status) === i.PollMediaUploadAttachmentStatus.PREPARING, _ = (0, n.useStateFromStores)([r.default], () => r.default.getUpload(o, u, s.DraftType.Poll)), [A, m] = l.useState(), [f, L] = l.useState("");
  return l.useEffect(() => {
    var e;
    if ((null == _ ? void 0 : null === (e = _.item) || void 0 === e ? void 0 : e.file) == null) return;
    let t = URL.createObjectURL(_.item.file);
    return m(t), L(_.item.file.name), () => {
      URL.revokeObjectURL(t)
    }
  }, [null == _ ? void 0 : null === (a = _.item) || void 0 === a ? void 0 : a.file]), {
    emoji: d,
    isLoadingMedia: E,
    hasUpload: null != _,
    mediaUrl: A,
    mediaFilename: f
  }
}