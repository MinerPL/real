"use strict";
n.r(t), n.d(t, {
  ObscureReason: function() {
    return l
  },
  getObscureReason: function() {
    return v
  },
  getObscureReasonForEmbed: function() {
    return C
  },
  getForumPostShouldObscure: function() {
    return I
  },
  useShouldObscure: function() {
    return x
  },
  getObscuredAlt: function() {
    return _
  }
}), n("702976"), n("794252");
var l, a, s = n("506838"),
  i = n("65597"),
  r = n("676574"),
  o = n("447435"),
  u = n("963119"),
  d = n("791234"),
  c = n("845579"),
  m = n("377253"),
  f = n("957255"),
  h = n("568734"),
  p = n("70845"),
  g = n("49111"),
  E = n("782340");
(a = l || (l = {})).SPOILER = "spoiler", a.EXPLICIT_CONTENT = "explicit_content", a.POTENTIAL_EXPLICIT_CONTENT = "potential_explicit_content";
let v = (e, t) => {
    let {
      spoiler: n,
      flags: l = 0,
      content_scan_version: a
    } = e;
    return t && (0, o.isPendingScan)(a) ? "potential_explicit_content" : t && ((0, h.hasFlag)(l, g.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA) || r.default.get("obscure_blur_effect_enabled")) ? "explicit_content" : n || (0, h.hasFlag)(l, g.MessageAttachmentFlags.IS_SPOILER) ? "spoiler" : null
  },
  C = (e, t, n, l, a) => {
    let {
      flags: s = 0,
      contentScanVersion: i
    } = e, u = m.default.getMessage(t, n);
    return null == u ? null : a && (0, o.isPendingScan)(i) ? "potential_explicit_content" : a && ((0, h.hasFlag)(s, g.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA) || r.default.get("obscure_blur_effect_enabled")) ? "explicit_content" : l ? "spoiler" : null
  };

function I(e, t, n) {
  if (null == e) return [!1, void 0];
  if (n && (0, o.isPendingScan)(e.contentScanVersion)) return [!0, "potential_explicit_content"];
  let l = function(e) {
    switch (e) {
      case d.ForumPostMediaTypes.EMBED:
        return o.ObscuredMediaTypes.Embed;
      case d.ForumPostMediaTypes.ATTACHMENT:
        return o.ObscuredMediaTypes.Attachment;
      default:
        return
    }
  }(e.type);
  return null != l && (0, o.isMediaObscured)({
    type: l,
    media: e
  }, n) ? [!0, "explicit_content"] : e.spoiler ? [t, "spoiler"] : [!1, void 0]
}

function x(e) {
  let {
    channel: t,
    media: n
  } = e, l = (0, i.default)([f.default], () => null != t && f.default.can(g.Permissions.MANAGE_MESSAGES, t)), a = c.RenderSpoilers.useSetting(), s = (0, u.useShouldRedactExplicitContentForForum)();
  return I(n, !(0, p.default)(a, l), s)
}
let _ = e => (0, s.match)(e).with("explicit_content", () => E.default.Messages.EXPLICIT_CONTENT_ALT).with("spoiler", () => E.default.Messages.SPOILER_HIDDEN_A11Y_LABEL).otherwise(() => void 0)