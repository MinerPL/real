"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("702976");
var a = n("568734"),
  i = n("49111"),
  s = e => null != e && null != e.attachments && !(e.attachments.length < 1) && e.attachments.some(e => null != e.flags && (0, a.hasFlag)(e.flags, i.MessageAttachmentFlags.IS_REMIX))