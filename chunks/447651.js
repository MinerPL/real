"use strict";
n.r(e), n.d(e, {
  default: function() {
    return I
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var r = n("37983");
n("884691");
var i = n("77078"),
  u = n("404118"),
  o = n("689226"),
  a = n("467475"),
  l = n("599110"),
  s = n("773336"),
  c = n("286235"),
  d = n("50885"),
  f = n("146574"),
  h = n("49111"),
  p = n("782340");
let v = "https://media.discordapp.net",
  g = /^.*\.discordapp\.net$/,
  m = "https://cdn.discordapp.com",
  w = "".concat(v, "/stickers"),
  E = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
  _ = new Set(["jpg", "jpeg", "png"]),
  M = t => {
    var e;
    return null === (e = new URL(t).pathname.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase()
  };

function b(t, e) {
  u.default.show({
    title: p.default.Messages.ERROR,
    body: t
  }), c.default.captureException(e)
}

function I(t, e, n) {
  let u = (0, a.default)(null == e ? void 0 : e.getChannelId());
  if (u || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !s.isPlatformEmbedded || null == t || ! function(t) {
      let e = new URL(t),
        n = M(t);
      return (g.test(e.hostname) || e.origin === m) && !t.startsWith(w) && !(0, o.isRoleIconAssetUrl)(t) && null != n && E.has(n)
    }(t)) return null;
  let c = function(t) {
      let e = new URL(t);
      return e.origin === m ? t : e.origin === v ? m + e.pathname : (e.searchParams.delete("width"), e.searchParams.delete("height"), e.searchParams.set("quality", "lossless"), e.toString())
    }(t),
    I = async () => {
      try {
        await d.default.saveImage(c), l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        })
      } catch (t) {
        l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        }), b(p.default.Messages.ERROR_SAVING_IMAGE, t)
      }
    }, C = async () => {
      try {
        await d.default.copyImage(c), l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        })
      } catch (t) {
        b(p.default.Messages.ERROR_COPYING_IMAGE, t), l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        })
      }
    };
  return [d.default.canCopyImage() && function(t) {
    let e = M(t);
    return null != e && _.has(e)
  }(t) ? (0, r.jsx)(i.MenuItem, {
    id: "copy-image",
    label: p.default.Messages.COPY_IMAGE_MENU_ITEM,
    action: C
  }, "copy-image") : null, (0, r.jsx)(i.MenuItem, {
    id: "save-image",
    label: p.default.Messages.SAVE_IMAGE_MENU_ITEM,
    action: I
  }, "save-image")]
}