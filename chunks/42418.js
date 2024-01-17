"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
}), a("881410"), a("222007"), a("424973"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var s = a("884691"),
  n = a("65597"),
  l = a("850391"),
  r = a("585722"),
  i = a("856220"),
  o = a("891475");

function d(e, t) {
  var a, d;
  let {
    mediaAttachments: u,
    hasThumbnail: c
  } = function(e) {
    let [t, a] = s.useState(null), o = (0, n.useStateFromStoresArray)([r.default], () => {
      let t = r.default.getUploads(e.id, l.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
        a = t.find(e => e.isThumbnail);
      return null != a ? [a] : t.filter(e => e.isVideo || e.isImage)
    }), d = s.useMemo(() => o.some(e => e.isThumbnail), [o]);
    return s.useEffect(() => {
      let e = [],
        t = o.slice(0, i.MAX_THUMBNAIL_COUNT).flatMap(t => {
          var a;
          let s = null == t ? void 0 : null === (a = t.item) || void 0 === a ? void 0 : a.file;
          if (null == s) return [];
          let n = URL.createObjectURL(s);
          return e.push(n), {
            id: t.id,
            src: n,
            spoiler: t.spoiler,
            alt: t.description,
            isThumbnail: t.isThumbnail,
            upload: !0 === t.isThumbnail ? t : void 0,
            isVideo: t.isVideo
          }
        });
      return a(t), () => {
        a(null), e.forEach(e => URL.revokeObjectURL(e))
      }
    }, [o]), {
      mediaAttachments: t,
      hasThumbnail: d
    }
  }(e), m = Math.max(i.MAX_THUMBNAIL_COUNT - (null !== (a = null == u ? void 0 : u.length) && void 0 !== a ? a : 0), 0), {
    embeds: h
  } = (0, o.useExtractEmbedPreview)(c, m, t), f = s.useMemo(() => null == h ? void 0 : h.flatMap(e => {
    let t = (0, i.getEmbedPreviewImageUrl)(e);
    return null == t ? [] : {
      id: t,
      src: t,
      spoiler: !1,
      alt: e.title
    }
  }), [h]), g = [...null != u ? u : []];
  return !c && m > 0 && g.push(...null !== (d = null == f ? void 0 : f.slice(0, m)) && void 0 !== d ? d : []), g
}