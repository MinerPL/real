"use strict";
a.r(t), a.d(t, {
  default: function() {
    return O
  }
});
var s = a("37983"),
  l = a("884691"),
  i = a("414456"),
  n = a.n(i),
  o = a("246111"),
  d = a("77078"),
  r = a("772017"),
  c = a("651693"),
  u = a("476765"),
  E = a("58608"),
  _ = a("457971"),
  M = a("447435"),
  T = a("908480"),
  I = a("39393"),
  C = a("612920"),
  R = a("782340"),
  A = a("629325");
let f = e => {
    let {
      attachment: t
    } = e, {
      url: a,
      description: l
    } = t;
    return null == a ? null : (0, s.jsx)(S, {
      url: a,
      description: l
    })
  },
  N = e => {
    var t, a, l;
    let {
      embed: i
    } = e;
    if (!C.SUPPORTED_EMBED_TYPES.has(i.type)) return null;
    let n = void 0 !== i.video && i.type !== o.MessageEmbedTypes.GIFV ? i.video.url : null !== (l = null === (t = i.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== l ? l : null === (a = i.image) || void 0 === a ? void 0 : a.url;
    return null == n ? null : (0, s.jsx)(S, {
      url: n
    })
  },
  S = e => {
    let {
      url: t,
      description: a
    } = e, l = (0, c.isVideoUrl)(t);
    return (0, s.jsx)("div", {
      className: A.mediaContainer,
      children: l ? (0, s.jsx)(E.default, {
        className: n(A.video, A.media),
        controls: !0,
        src: t
      }) : (0, s.jsx)("img", {
        className: n(A.image, A.media),
        src: t,
        alt: a
      })
    })
  };

function O(e) {
  let {
    channelId: t,
    messageId: a,
    attachmentId: i,
    embedId: n,
    transitionState: o,
    onClose: c
  } = e, E = (0, u.useUID)(), C = (0, _.useIsEligibleForExplicitMediaRedaction)(), S = (0, I.useExplicitMediaAttachmentsForMessage)(t, a, i), O = (0, I.useExplicitMediaEmbedsForMessage)(t, a, n), m = l.useCallback(() => {
    r.default.pop(), (0, d.showToast)((0, d.createToast)(R.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, d.ToastType.CUSTOM)), c()
  }, [c]), {
    reportFalsePositive: h,
    isReportFalsePositiveLoading: g
  } = (0, T.useExplicitMediaActions)({
    onSuccess: m,
    onError: () => {
      (0, d.showToast)((0, d.createToast)(R.default.Messages.ERROR_GENERIC_TITLE, d.ToastType.FAILURE))
    }
  }), p = () => {
    (0, M.trackMediaRedactionAction)({
      action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: a
    }), c()
  }, L = C && (S.length > 0 || O.length > 0);
  return l.useEffect(() => {
    L && (0, M.trackMediaRedactionAction)({
      action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: a
    })
  }, [t, a, L]), !L && p(), (0, s.jsxs)(d.ModalRoot, {
    transitionState: o,
    "aria-labelledby": E,
    size: d.ModalSize.SMALL,
    children: [(0, s.jsxs)(d.ModalContent, {
      children: [(0, s.jsx)(d.ModalCloseButton, {
        onClick: p,
        className: A.closeButton
      }), (0, s.jsx)(d.Heading, {
        id: E,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: A.header,
        children: R.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
      }), (0, s.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: A.subheader,
        children: R.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
      }), 1 === S.length && 0 === O.length ? (0, s.jsx)(f, {
        attachment: S[0]
      }) : null, 1 === O.length && 0 === S.length ? (0, s.jsx)(N, {
        embed: O[0]
      }) : null]
    }), (0, s.jsxs)(d.ModalFooter, {
      children: [(0, s.jsx)(d.Button, {
        className: A.button,
        disabled: g,
        submitting: g,
        size: d.Button.Sizes.MEDIUM,
        color: d.Button.Colors.BRAND,
        onClick: () => {
          h(t, a, S.map(e => e.id), O.map(e => e.id)), (0, M.trackMediaRedactionAction)({
            action: M.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
            channelId: t,
            messageId: a
          })
        },
        children: R.default.Messages.CONFIRM
      }), (0, s.jsx)(d.Button, {
        className: A.button,
        disabled: g,
        color: d.Button.Colors.TRANSPARENT,
        size: d.Button.Sizes.MEDIUM,
        onClick: p,
        children: R.default.Messages.CANCEL
      })]
    })]
  })
}