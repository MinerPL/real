"use strict";
l.r(t), l.d(t, {
  carouselAssetFromImageEmbed: function() {
    return g
  },
  carouselAssetFromAttachment: function() {
    return f
  },
  createMediaOnClickOverrides: function() {
    return b
  }
}), l("511434"), l("313619"), l("654714"), l("287168"), l("956660"), l("222007");
var n = l("37983");
l("884691");
var r = l("118810"),
  i = l("77078"),
  s = l("340616"),
  a = l("447435"),
  o = l("327467"),
  d = l("651693"),
  u = l("924444"),
  c = l("688622"),
  m = l("599110"),
  h = l("49111"),
  p = l("377160");

function g(e) {
  let {
    width: t,
    height: l
  } = e, r = (0, c.getBestEffortSrcUrl)(e);
  return {
    component: (0, n.jsx)(u.ImageModal, {
      width: t,
      height: l,
      original: e.url,
      renderLinkComponent: e => (0, n.jsx)(s.default, {
        ...e
      }),
      src: r
    }),
    width: t,
    height: l,
    src: r
  }
}

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if ((0, d.isImageFile)(e.filename)) {
        var r, i;
        let o = null !== (r = e.width) && void 0 !== r ? r : 0,
          d = null !== (i = e.height) && void 0 !== i ? i : 0,
          m = (0, c.getBestEffortSrcUrl)({
            proxyURL: e.proxy_url,
            url: e.url
          });
        return {
          component: (0, n.jsx)(u.ImageModal, {
            width: o,
            height: d,
            original: e.url,
            renderLinkComponent: e => (0, n.jsx)(s.default, {
              ...e
            }),
            src: m,
            shouldHideMediaOptions: t,
            obscure: (0, a.isMediaObscured)({
              type: a.ObscuredMediaTypes.Attachment,
              media: e
            }, l)
          }),
          width: o,
          height: d,
          src: m
        }
      }
      return null
    }(e, t, l);
  if (null != r) return r;
  let i = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if ((0, d.isVideoFile)(e.filename)) {
      var r, i;
      let o = null !== (r = e.width) && void 0 !== r ? r : 0,
        d = null !== (i = e.height) && void 0 !== i ? i : 0,
        m = (0, c.getBestEffortSrcUrl)({
          proxyURL: e.proxy_url,
          url: e.url
        }),
        h = new URL(e.proxy_url);
      return h.searchParams.append("format", "jpeg"), {
        component: (0, n.jsx)(u.VideoModal, {
          width: o,
          height: d,
          poster: h.toString(),
          naturalWidth: o,
          naturalHeight: d,
          renderLinkComponent: e => (0, n.jsx)(s.default, {
            ...e
          }),
          src: m,
          fileSize: e.size,
          fileName: e.filename,
          shouldHideMediaOptions: t,
          obscure: (0, a.isMediaObscured)({
            type: a.ObscuredMediaTypes.Attachment,
            media: e
          }, l)
        }),
        width: o,
        height: d,
        src: m
      }
    }
    return null
  }(e, t, l);
  return null != i ? i : null
}

function b(e, t) {
  let s = {};
  for (let [a, d] of e.entries()) s[d.src] = s => (function(e, t, s, a) {
    e.preventDefault(), (0, r.isElement)(e.currentTarget) && e.currentTarget.blur(), null != a && (m.default.track(h.AnalyticEvents.OPEN_MODAL, {
      type: h.AnalyticsSections.MEDIA_VIEWER,
      ...a
    }, {
      throttlePercent: .01
    }), (0, o.startMediaViewerSession)(a.guild_id, a.channel_id, a.channel_type, t.length)), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await l.el("100814").then(l.bind(l, "100814"));
      return l => {
        let {
          ...r
        } = l;
        return (0, n.jsx)(e, {
          ...r,
          onIndexChange: null != a ? o.incrementSelectedItemChanges : void 0,
          className: p.zoomedCarouselModalRoot,
          items: t,
          modalCarouselClassName: p.modalCarouselWrapper,
          startingIndex: s
        })
      }
    }, {
      onCloseCallback: null != a ? o.endMediaViewerSession : void 0
    })
  })(s, e, a, t);
  return s
}