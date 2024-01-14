"use strict";
n.r(t), n.d(t, {
  ClassificationEvidence: function() {
    return U
  }
});
var i = n("37983");
n("884691");
var l = n("917351"),
  r = n("249654"),
  o = n("446674"),
  a = n("77078"),
  s = n("692038"),
  u = n("815297"),
  c = n("933629"),
  d = n("39331"),
  f = n("596368"),
  E = n("227439"),
  _ = n("697218"),
  p = n("170113"),
  h = n("780571"),
  S = n("377502"),
  I = n("103603"),
  T = n("736393"),
  C = n("170213"),
  g = n("49111"),
  m = n("719347"),
  v = n("782340"),
  A = n("161730");
let N = e => {
    let t = e.attachments.map(e => ({
      ...e,
      filename: (0, T.getAttachmentFilename)(e),
      size: 0,
      width: e.width,
      height: e.height,
      proxy_url: e.url
    }));
    return (0, s.createMessageRecord)({
      ...(0, u.default)({
        nonce: e.id,
        content: e.content,
        type: g.MessageTypes.DEFAULT,
        channelId: ""
      }),
      timestamp: new Date(r.default.extractTimestamp(e.id)).toISOString(),
      attachments: t,
      state: g.MessageStates.SENT
    })
  },
  L = e => {
    let {
      message: t
    } = e, {
      attachments: n
    } = t;
    if (0 === n.length) return null;
    let r = (e, t, n) => {
        let r = C.DEFAULT_MEDIA_MAX_WIDTH,
          o = C.DEFAULT_MEDIA_MAX_HEIGHT;
        if (null != t.width && null != t.height) {
          let e = (0, I.getRatio)({
            width: t.width,
            height: t.height,
            maxWidth: C.DEFAULT_MEDIA_MAX_WIDTH,
            maxHeight: C.DEFAULT_MEDIA_MAX_HEIGHT
          });
          r = (0, l.clamp)(Math.round(t.width * e), 0, C.DEFAULT_MEDIA_MAX_WIDTH), o = (0, l.clamp)(Math.round(t.height * e), 0, C.DEFAULT_MEDIA_MAX_HEIGHT)
        }
        return (0, i.jsx)("div", {
          style: {
            width: n ? r : "100%",
            height: n ? o : "100%"
          },
          children: (0, i.jsx)(p.default, {
            className: e.className,
            forceExternal: !1,
            src: t.url,
            width: n ? r : "100%",
            height: n ? o : "100%",
            responsive: !0,
            volume: e.volume,
            autoPlay: !1,
            autoMute: !1,
            type: p.default.Types.VIDEO,
            mediaLayoutType: e.mediaLayoutType,
            fileName: t.filename,
            fileSize: null == t.size ? void 0 : t.size.toString(),
            playable: !0,
            renderLinkComponent: c.renderMaskedLinkComponent,
            onClick: e.onClick,
            onPlay: e.onPlay,
            onEnded: e.onEnded,
            onVolumeChange: e.onVolumeChange,
            onMute: e.onMute,
            downloadable: !1
          })
        })
      },
      o = 1 === n.length;
    return (0, i.jsx)("div", {
      className: A.classificationEvidenceMessageAttachment,
      children: (0, i.jsx)(S.default, {
        attachments: n.map(e => ({
          attachment: e,
          spoiler: !0,
          message: t,
          mediaLayoutType: m.MediaLayoutType.MOSAIC,
          autoPlayGif: !1,
          inlineMedia: !0,
          canRemoveAttachment: !1,
          isSingleMosaicItem: o,
          onRemoveAttachment: l.noop,
          renderVideoComponent: t => r(t, e, o),
          renderImageComponent: e => (0, c.renderImageComponent)({
            hiddenSpoilers: !0,
            shouldHideMediaOptions: !0,
            shouldLink: !1,
            ...e
          }),
          renderAudioComponent: c.renderAudioComponent,
          renderPlaintextFilePreview: c.renderPlaintextFilePreview,
          gifFavoriteButton: () => null
        }))
      })
    })
  },
  U = e => {
    var t;
    let {
      flaggedContent: n
    } = e, l = (0, o.useStateFromStores)([_.default], () => _.default.getCurrentUser()), r = n[0], s = N(r), u = (0, d.default)(s, {
      hideSimpleEmbedContent: !1,
      allowList: !1,
      allowHeading: !1,
      allowLinks: !1,
      previewLinkTarget: !1
    });
    return "" === s.content && 0 === s.attachments.length ? null : (0, i.jsxs)("div", {
      className: A.classificationEvidenceContainer,
      children: [(0, i.jsx)(a.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER
      }), (0, i.jsx)("div", {
        className: A.classificationEvidenceCard,
        children: (0, i.jsx)(h.default, {
          compact: !1,
          childrenHeader: (0, E.default)({
            author: {
              ...l,
              colorString: "",
              nick: null !== (t = null == l ? void 0 : l.username) && void 0 !== t ? t : ""
            },
            message: s,
            channel: void 0,
            guildId: void 0,
            compact: !1,
            animateAvatar: !1,
            isGroupStart: !0,
            roleIcon: void 0,
            hideTimestamp: !1
          }),
          childrenAccessories: (0, i.jsx)(L, {
            message: s
          }),
          childrenMessageContent: (0, f.default)({
            message: s
          }, u.content),
          hasThread: !1,
          hasReply: !1
        })
      })]
    })
  }