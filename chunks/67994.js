"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("446674"),
  s = n("77078"),
  r = n("819689"),
  u = n("81594"),
  o = n("681736"),
  d = n("694187"),
  c = n("42203"),
  f = n("474643"),
  m = n("305961"),
  g = n("377253"),
  h = n("476765"),
  _ = n("254490"),
  p = n("412861"),
  E = n("834021"),
  x = n("867965"),
  M = n("152637"),
  A = n("578198"),
  S = n("49111"),
  T = n("843455"),
  v = n("782340"),
  C = n("79588");

function O(e) {
  var t;
  let {
    threadId: n,
    attachments: O,
    sendMessage: R,
    transitionState: b,
    onClose: I
  } = e, y = (0, h.useUID)(), L = (0, a.useStateFromStores)([c.default], () => c.default.getChannel(n), [n]), F = (0, a.useStateFromStores)([m.default], () => m.default.getGuild(null == L ? void 0 : L.getGuildId()), [L]), N = (0, a.useStateFromStores)([c.default], () => c.default.getChannel(null == L ? void 0 : L.parent_id), [L]), U = null === (t = O[0]) || void 0 === t ? void 0 : t.item, [P, D] = i.useState(null);
  i.useEffect(() => {
    null != U && (0, d.processImage)(U.file, (e, t) => D(e), T.NOOP)
  }, [U]);
  let j = null != U && null != P ? {
      src: P,
      width: M.MAX_THUMBNAIL_WIDTH,
      height: M.MAX_THUMBNAIL_HEIGHT,
      spoiler: O[0].spoiler,
      alt: O[0].description
    } : null,
    [z, w] = i.useState(!1),
    G = i.useCallback(() => {
      (0, x.trackForumAddMediaToOriginalPostClicked)({
        added: !1
      }), R(), I()
    }, [R, I]),
    k = i.useCallback(() => {
      null != L && null != F && ((0, x.trackForumAddMediaToOriginalPostClicked)({
        added: !0
      }), ! function(e) {
        let {
          thread: t,
          attachments: n,
          setIsUploading: l,
          guild: i,
          onClose: a
        } = e, s = new o.default(S.Endpoints.MESSAGE(t.id, t.id), "PATCH");
        s.on("start", () => {
          l(!0)
        }), s.on("progress", e => {
          let r = (0, _.maxFileSize)(i.id);
          e.currentSize > r && (s.cancel(), l(!1), a(), (0, p.showUploadFileSizeExceededError)(t, (0, E.getWebUploadFiles)(n)))
        }), s.on("error", (e, n, i) => {
          l(!1), n === S.AbortCodes.EXPLICIT_CONTENT && (a(), r.default.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments), u.default.clearAll(t.id, f.DraftType.ChannelMessage))
        }), s.on("complete", () => {
          l(!1), a(), u.default.clearAll(t.id, f.DraftType.ChannelMessage)
        });
        let d = g.default.getMessages(t.id).get(t.id),
          c = null != d ? d.attachments : [];
        s.uploadFiles(n, {
          attachments: [...c]
        }, {
          addFilesTo: "attachments"
        })
      }({
        thread: L,
        attachments: O,
        setIsUploading: w,
        guild: F,
        onClose: I
      }))
    }, [L, O, w, F, I]);
  return null == N ? null : (0, l.jsxs)(s.ModalRoot, {
    transitionState: b,
    size: s.ModalSize.SMALL,
    className: C.modalRoot,
    "aria-labelledby": y,
    children: [(0, l.jsxs)(s.ModalContent, {
      className: C.modal,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        className: C.header,
        id: y,
        children: v.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        className: C.body,
        children: v.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: C.forumPost,
        children: (0, l.jsx)(A.ForumPostComposerStoreProvider, {
          createStore: () => (0, A.createForumPostComposerStore)(N),
          children: (0, l.jsx)(M.default, {
            threadId: n,
            goToThread: T.NOOP,
            overrideMedia: j
          })
        })
      })]
    }), (0, l.jsxs)(s.ModalFooter, {
      className: C.modalFooter,
      children: [(0, l.jsx)(s.Button, {
        look: s.Button.Looks.BLANK,
        className: C.cancelButton,
        disabled: z,
        onClick: I,
        children: v.default.Messages.CANCEL
      }), (0, l.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        className: C.dontAddButton,
        disabled: z,
        onClick: G,
        children: v.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
      }), (0, l.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        className: C.button,
        submitting: z,
        onClick: k,
        autoFocus: !0,
        children: v.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
      })]
    })]
  })
}