"use strict";
t.r(s), t.d(s, {
  default: function() {
    return _
  }
});
var a = t("37983"),
  r = t("884691"),
  l = t("446674"),
  d = t("77078"),
  n = t("671278"),
  i = t("420145"),
  o = t("701909"),
  c = t("76393"),
  u = t("176488"),
  f = t("780338"),
  m = t("171644"),
  x = t("49111"),
  h = t("782340"),
  N = t("637103");

function p(e) {
  let {
    step: s,
    instructions: t
  } = e;
  return (0, a.jsxs)("div", {
    className: N.cardRow,
    children: [(0, a.jsx)("div", {
      className: N.stepNumberContainer,
      children: (0, a.jsx)(d.Text, {
        variant: "text-sm/semibold",
        className: N.stepNumber,
        children: s
      })
    }), (0, a.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "header-primary",
      className: N.instructions,
      children: t
    })]
  })
}

function _(e) {
  let {
    channel: s,
    transitionState: t,
    onClose: _
  } = e, g = (0, l.useStateFromStores)([c.default], () => null != c.default.getRemoteSessionId()), C = (0, u.default)(s, {
    forQRCode: !0
  });
  return r.useEffect(() => {
    g && _()
  }, [g, _]), r.useEffect(() => {
    (0, f.default)(s.id, m.GameConsoleTypes.XBOX)
  }, [s.id]), (0, a.jsxs)(d.ModalRoot, {
    size: d.ModalSize.DYNAMIC,
    className: N.modalRoot,
    transitionState: t,
    children: [(0, a.jsxs)(d.ModalHeader, {
      separator: !1,
      className: N.modalHeaderContainer,
      children: [(0, a.jsx)(d.Heading, {
        className: N.modalHeader,
        variant: "heading-xl/extrabold",
        children: h.default.Messages.TRANSFER_VOICE_TO_XBOX
      }), (0, a.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: h.default.Messages.XBOX_APP_REQUIRED_SUBHEADER
      })]
    }), (0, a.jsx)(d.ModalContent, {
      className: N.content,
      children: (0, a.jsxs)("div", {
        className: N.card,
        children: [(0, a.jsxs)("div", {
          className: N.cardText,
          children: [(0, a.jsxs)(d.Text, {
            variant: "text-lg/semibold",
            color: "header-primary",
            className: N.cardRow,
            children: [(0, a.jsx)(i.default, {
              className: N.cardHeaderIcon
            }), h.default.Messages.XBOX_APP_FOR_MOBILE]
          }), (0, a.jsx)(p, {
            step: 1,
            instructions: h.default.Messages.XBOX_APP_STEP_ONE
          }), (0, a.jsx)(p, {
            step: 2,
            instructions: h.default.Messages.XBOX_APP_STEP_TWO
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: (0, a.jsx)(d.Anchor, {
              className: N.learnMore,
              href: o.default.getArticleURL(x.HelpdeskArticles.XBOX_CONNECTION),
              children: h.default.Messages.LEARN_MORE
            })
          })]
        }), (0, a.jsx)(n.default, {
          className: N.qrCode,
          size: 120,
          text: C
        })]
      })
    }), (0, a.jsx)(d.ModalCloseButton, {
      className: N.closeButton,
      onClick: _
    })]
  })
}