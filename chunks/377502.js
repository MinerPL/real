"use strict";
a.r(t), a.d(t, {
  default: function() {
    return w
  }
}), a("222007"), a("702976");
var n = a("37983"),
  l = a("884691"),
  s = a("414456"),
  i = a.n(s),
  r = a("627445"),
  o = a.n(r),
  u = a("917351"),
  d = a.n(u),
  c = a("446674"),
  m = a("411723"),
  h = a("42203"),
  g = a("328620"),
  f = a("568734"),
  A = a("994402"),
  _ = a("719347"),
  x = a("49111"),
  p = a("655793");
let I = Math.round((_.MEDIA_MOSAIC_MAX_WIDTH - 8) / 3),
  M = Math.round((_.MEDIA_MOSAIC_MAX_WIDTH - 4) / 2),
  E = Math.round((_.MEDIA_MOSAIC_MAX_HEIGHT - 4) / 2),
  v = Math.round(2 * (_.MEDIA_MOSAIC_MAX_WIDTH - 4) / 3),
  C = v / 2,
  N = e => {
    let {
      mediaAttachments: t,
      getAttachmentKind: a,
      footer: l
    } = e;
    null != l && o(1 === t.length, "footer only gets applied to single attachments");
    let s = t.length;
    if (1 === s) return (0, n.jsx)(T, {
      attachmentsForLayout: t,
      getAttachmentKind: a,
      isSingleImage: !0,
      footer: l
    });
    if (2 === s) return (0, n.jsx)(y, {
      attachmentsForLayout: t,
      getAttachmentKind: a
    });
    if (3 === s) return (0, n.jsx)(S, {
      attachmentsForLayout: t,
      getAttachmentKind: a
    });
    if (4 === s) return (0, n.jsx)(j, {
      attachmentsForLayout: t,
      getAttachmentKind: a
    });
    let i = s % 3;
    return (0, n.jsxs)(n.Fragment, {
      children: [1 === i && (0, n.jsx)(T, {
        attachmentsForLayout: t.slice(0, i),
        getAttachmentKind: a
      }), 2 === i && (0, n.jsx)(y, {
        attachmentsForLayout: t.slice(0, i),
        getAttachmentKind: a
      }), 0 === i ? (0, n.jsx)(O, {
        attachmentsForLayout: t,
        getAttachmentKind: a
      }) : (0, n.jsx)(O, {
        attachmentsForLayout: t.slice(i),
        getAttachmentKind: a
      })]
    })
  },
  T = e => {
    let {
      attachmentsForLayout: t,
      getAttachmentKind: a,
      isSingleImage: l,
      footer: s
    } = e, r = t[0];
    return (0, n.jsx)("div", {
      className: i(p.oneByOneGrid, {
        [p.oneByOneGridSingle]: l,
        [p.oneByOneGridMosaic]: !l,
        [p.hasFooter]: null != s
      }),
      children: (0, n.jsx)(D, {
        props: r,
        attachmentKind: a(r.attachment.id),
        useFullWidth: !l,
        isSingleItem: !0,
        footer: s
      })
    })
  },
  y = e => {
    let {
      attachmentsForLayout: t,
      getAttachmentKind: a
    } = e;
    return (0, n.jsx)("div", {
      className: p.oneByTwoGrid,
      children: t.map(e => (0, n.jsx)("div", {
        className: p.oneByTwoGridItem,
        children: (0, n.jsx)(D, {
          props: e,
          attachmentKind: a(e.attachment.id),
          maxWidth: M,
          maxHeight: M
        })
      }, e.attachment.id))
    })
  },
  S = e => {
    let {
      attachmentsForLayout: t,
      getAttachmentKind: a
    } = e;
    return (0, n.jsxs)("div", {
      className: i(p.oneByTwoGrid, p.oneByTwoLayoutThreeGrid),
      children: [(0, n.jsx)("div", {
        className: p.oneByTwoSoloItem,
        children: (0, n.jsx)(D, {
          props: t[0],
          attachmentKind: a(t[0].attachment.id),
          maxWidth: v
        })
      }), (0, n.jsx)("div", {
        className: p.oneByTwoDuoItem,
        children: (0, n.jsx)("div", {
          className: p.twoByOneGrid,
          children: t.splice(1).map(e => (0, n.jsx)("div", {
            className: p.twoByOneGridItem,
            children: (0, n.jsx)(D, {
              props: e,
              attachmentKind: a(e.attachment.id),
              maxWidth: C,
              maxHeight: E
            })
          }, e.attachment.id))
        })
      })]
    })
  },
  j = e => {
    let {
      attachmentsForLayout: t,
      getAttachmentKind: a
    } = e;
    return (0, n.jsx)("div", {
      className: p.twoByTwoGrid,
      children: t.map(e => (0, n.jsx)(D, {
        props: e,
        attachmentKind: a(e.attachment.id),
        maxWidth: M,
        maxHeight: E
      }, e.attachment.id))
    })
  },
  O = e => {
    let {
      attachmentsForLayout: t,
      getAttachmentKind: a
    } = e;
    return (0, n.jsx)("div", {
      className: p.threeByThreeGrid,
      children: t.map(e => (0, n.jsx)(D, {
        props: e,
        attachmentKind: a(e.attachment.id),
        maxWidth: I,
        maxHeight: I
      }, e.attachment.id))
    })
  },
  b = e => ({
    className: i(e, p.attachmentContentContainer),
    imgContainerClassName: p.lazyImgContainer,
    imgClassName: p.lazyImg
  }),
  L = e => ({
    className: i(e, p.lazyImg)
  }),
  D = e => {
    let {
      props: t,
      attachmentKind: a,
      maxWidth: l = _.MEDIA_MOSAIC_MAX_WIDTH,
      maxHeight: s = _.MEDIA_MOSAIC_MAX_HEIGHT,
      useFullWidth: i = !0,
      isSingleItem: r = !1,
      footer: o
    } = e, u = {
      ...t,
      ..."IMAGE" === a && b(t.className),
      ..."VIDEO" === a && L(t.className),
      mediaLayoutType: _.MediaLayoutType.MOSAIC,
      maxWidth: l,
      maxHeight: s,
      useFullWidth: i,
      isSingleMosaicItem: r
    };
    return (0, n.jsx)(g.GIFAccessoryContext.Provider, {
      value: t.gifFavoriteButton,
      children: (0, n.jsx)(A.default, {
        ...u,
        footer: o
      })
    })
  };
var w = e => {
  let {
    attachments: t
  } = e, a = t[0].message.channel_id, s = (0, c.useStateFromStores)([h.default], () => {
    var e;
    return null === (e = h.default.getBasicChannel(a)) || void 0 === e ? void 0 : e.guild_id
  }), i = l.useMemo(() => new Map(t.map(e => [e.attachment.id, (0, A.getAttachmentKind)(e.attachment, e.inlineMedia)])), [t]), r = l.useCallback(e => {
    var t;
    return null !== (t = i.get(e)) && void 0 !== t ? t : "INVALID"
  }, [i]), [o, u] = l.useMemo(() => d.partition(t, e => {
    var t;
    return (0, f.hasFlag)(null !== (t = e.attachment.flags) && void 0 !== t ? t : 0, x.MessageAttachmentFlags.IS_CLIP)
  }), [t]), [g, _] = l.useMemo(() => d.partition(u, e => (0, A.isMediaAttachment)(r(e.attachment.id))), [u, r]);
  return (0, n.jsxs)(n.Fragment, {
    children: [g.length > 0 && (0, n.jsx)("div", {
      className: p.mediaAttachmentsContainer,
      children: (0, n.jsx)(N, {
        mediaAttachments: g,
        getAttachmentKind: r
      })
    }), _.length > 0 && (0, n.jsx)("div", {
      className: p.nonMediaAttachmentsContainer,
      children: _.map(e => (0, n.jsx)("div", {
        className: p.nonMediaAttachmentItem,
        children: (0, n.jsx)(D, {
          props: e,
          attachmentKind: r(e.attachment.id)
        })
      }, e.attachment.id))
    }), o.length > 0 && o.map(e => (0, n.jsx)("div", {
      className: p.mediaAttachmentsContainer,
      children: (0, n.jsx)(N, {
        mediaAttachments: [e],
        getAttachmentKind: r,
        footer: (0, n.jsx)(m.default, {
          attachment: e.attachment,
          guildId: s
        })
      })
    }, e.attachment.id))]
  })
}