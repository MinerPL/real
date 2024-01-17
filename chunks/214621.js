"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("446674"),
  o = n("77078"),
  u = n("70845"),
  d = n("95045"),
  c = n("845579"),
  f = n("957255"),
  E = n("27618"),
  _ = n("505684"),
  h = n("93427"),
  C = n("389495"),
  I = n("49111"),
  T = n("719347"),
  S = n("782340"),
  m = n("863452"),
  p = n("632215");
let A = s.memo(function(e) {
  let {
    channel: t
  } = e, {
    loaded: n,
    error: i,
    message: A
  } = (0, C.useMessageRequestPreview)(t), g = (0, r.useStateFromStores)([E.default], () => null != A && E.default.isBlocked(A.author.id), [A]), N = (0, r.useStateFromStores)([f.default], () => f.default.can(I.Permissions.MANAGE_MESSAGES, t)), R = c.RenderSpoilers.useSetting(), {
    content: O
  } = s.useMemo(() => (null == A ? void 0 : A.content) != null && "" !== A.content ? (0, d.default)(A, {
    formatInline: !0,
    noStyleAndInteraction: !0
  }) : {
    content: null
  }, [A]), L = null;
  if (i) L = (0, a.jsx)(o.Text, {
    className: m.messageReplacement,
    variant: "text-sm/normal",
    color: "text-muted",
    children: S.default.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
  });
  else if (n) {
    if (null != A && g) L = (0, a.jsx)(o.Text, {
      className: m.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: S.default.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
    });
    else if (null != A) {
      let {
        contentPlaceholder: e,
        renderedContent: t
      } = (0, h.renderSingleLineMessage)(A, O, g, l(m.messageContent, p.inlineFormat, p.smallFontSize), {
        iconClass: m.messageContentIcon,
        iconSize: T.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
      });
      L = null != t ? (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: m.messageContent,
        children: t
      }) : (0, a.jsx)(o.Text, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-muted",
        className: m.messageReplacement,
        children: e
      })
    } else L = (0, a.jsx)(o.Text, {
      className: m.messageReplacement,
      variant: "text-sm/normal",
      color: "text-muted",
      children: S.default.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
    })
  } else L = null;
  return (0, a.jsx)(_.ObscuredDisplayContext.Provider, {
    value: (0, u.default)(R, N),
    children: (0, a.jsx)(o.FocusBlock, {
      className: m.messageFocusBlock,
      children: L
    })
  })
});
var g = A