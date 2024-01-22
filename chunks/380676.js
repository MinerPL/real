"use strict";
n.r(t), n.d(t, {
  ClassificationEvidence: function() {
    return y
  }
}), n("222007"), n("506083");
var i = n("37983"),
  l = n("884691"),
  r = n("917351"),
  a = n("249654"),
  o = n("446674"),
  s = n("77078"),
  u = n("651693"),
  c = n("692038"),
  d = n("815297"),
  f = n("933629"),
  E = n("39331"),
  _ = n("596368"),
  p = n("227439"),
  S = n("697218"),
  I = n("170113"),
  T = n("780571"),
  h = n("377502"),
  C = n("103603"),
  g = n("736393"),
  A = n("170213"),
  v = n("49111"),
  m = n("719347"),
  N = n("782340"),
  L = n("161730");
let U = (e, t) => {
    let n = e.attachments.map(e => {
      var n, i, l, r;
      let a = {
        ...e,
        filename: (0, g.getAttachmentFilename)(e),
        size: 0,
        proxy_url: e.url
      };
      if (!(0, u.isImageFile)(e.filename)) return a;
      return {
        ...a,
        width: null !== (l = null === (n = t[e.id]) || void 0 === n ? void 0 : n.width) && void 0 !== l ? l : A.DEFAULT_MEDIA_MAX_WIDTH,
        height: null !== (r = null === (i = t[e.id]) || void 0 === i ? void 0 : i.height) && void 0 !== r ? r : A.DEFAULT_MEDIA_MAX_HEIGHT
      }
    });
    return (0, c.createMessageRecord)({
      ...(0, d.default)({
        nonce: e.id,
        content: e.content,
        type: v.MessageTypes.DEFAULT,
        channelId: ""
      }),
      timestamp: new Date(a.default.extractTimestamp(e.id)).toISOString(),
      attachments: n,
      state: v.MessageStates.SENT
    })
  },
  R = e => {
    let {
      message: t
    } = e, {
      attachments: n
    } = t;
    if (0 === n.length) return null;
    let l = (e, t, n) => {
        let l = A.DEFAULT_MEDIA_MAX_WIDTH,
          a = A.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, C.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: A.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: A.DEFAULT_MEDIA_MAX_HEIGHT
          });
          l = (0, r.clamp)(Math.round(t.width * e), 0, A.DEFAULT_MEDIA_MAX_WIDTH), a = (0, r.clamp)(Math.round(t.height * e), 0, A.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, i.jsx)("div", {
          style: {
            width: n ? l : "100%",
            height: n ? a : "100%"
          },
          children: (0, i.jsx)(I.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: n ? l : "100%",
            height: n ? a : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: I.default.Types.VIDEO,
            mediaLayoutType: e.mediaLayoutType,
            fileName: t.filename,
            fileSize: null == t.size ? void 0 : t.size.toString(),
            playable: !0,
            renderLinkComponent: f.renderMaskedLinkComponent,
            onClick: e.onClick,
            onPlay: e.onPlay,
            onEnded: e.onEnded,
            onVolumeChange: e.onVolumeChange,
            onMute: e.onMute,
            downloadable: !1
          })
        })
      },
      a = 1 === n.length;
    return (0, i.jsx)("div", {
      className: L.classificationEvidenceMessageAttachment,
      children: (0, i.jsx)(h.default, {
        attachments: n.map(e => ({
          attachment: e,
          spoiler: !0,
          message: t,
          mediaLayoutType: m.MediaLayoutType.MOSAIC,
          autoPlayGif: !1,
          inlineMedia: !0,
          canRemoveAttachment: !1,
          isSingleMosaicItem: a,
          onRemoveAttachment: r.noop,
          renderVideoComponent: t => l(t, e, a),
          renderImageComponent: e => (0, f.renderImageComponent)({
            hiddenSpoilers: !0,
            shouldHideMediaOptions: !0,
            shouldLink: !1,
            ...e
          }),
          renderAudioComponent: f.renderAudioComponent,
          renderPlaintextFilePreview: f.renderPlaintextFilePreview,
          gifFavoriteButton: () => null
        }))
      })
    })
  },
  y = e => {
    var t;
    let {
      flaggedContent: n
    } = e, r = (0, o.useStateFromStores)([S.default], () => S.default.getCurrentUser()), [a, u] = l.useState({}), [c, d] = l.useState(!0), f = n[0], I = U(f, a), h = (0, E.default)(I, {
      hideSimpleEmbedContent: !1,
      allowList: !1,
      allowHeading: !1,
      allowLinks: !1,
      previewLinkTarget: !1
    });
    return (l.useEffect(() => {
      Promise.all(f.attachments.map(e => {
        var t;
        return (t = e, new Promise((e, n) => {
          let i = new Image;
          i.src = t.url, i.onload = () => {
            e(i)
          }, i.onerror = () => {
            n()
          }
        })).then(t => u(n => ({
          ...n,
          [e.id]: t
        })))
      })).finally(() => d(!1))
    }, [f.attachments]), "" === I.content && 0 === I.attachments.length) ? null : (0, i.jsxs)("div", {
      className: L.classificationEvidenceContainer,
      children: [(0, i.jsx)(s.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
      }), c ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsx)("div", {
        className: L.classificationEvidenceCard,
        children: (0, i.jsx)(T.default, {
          compact: !1,
          childrenHeader: (0, p.default)({
            author: {
              ...r,
              colorString: "",
              nick: null !== (t = null == r ? void 0 : r.username) && void 0 !== t ? t : ""
            },
            message: I,
            channel: void 0,
            guildId: void 0,
            compact: !1,
            animateAvatar: !1,
            isGroupStart: !0,
            roleIcon: void 0,
            hideTimestamp: !1
          }),
          childrenAccessories: (0, i.jsx)(R, {
            message: I
          }),
          childrenMessageContent: (0, _.default)({
            message: I
          }, h.content),
          hasThread: !1,
          hasReply: !1
        })
      })]
    })
  }