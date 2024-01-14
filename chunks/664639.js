"use strict";
t.r(a), t.d(a, {
  default: function() {
    return m
  }
});
var s = t("37983"),
  n = t("884691"),
  l = t("432710"),
  d = t("65597"),
  i = t("77078"),
  o = t("519705"),
  c = t("155084"),
  r = t("282109"),
  u = t("945330"),
  E = t("898260"),
  N = t("34676"),
  R = t("844911"),
  T = t("327944"),
  _ = t("964974"),
  A = t("49111"),
  f = t("782340"),
  x = t("572266");

function m(e) {
  let {
    transitionState: a,
    onClose: t,
    handleBlock: m,
    channelId: h,
    warningId: M,
    senderId: S
  } = e, v = () => {
    t()
  }, C = (0, _.getSafetyTips)();
  n.useEffect(() => {
    (0, R.trackViewedEvent)(A.AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, {
      channelId: h,
      warningId: M,
      senderId: S
    }), c.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_MODAL_VIEW
    })
  }, [h, M, S]);
  let g = (0, d.default)([r.default], () => r.default.isChannelMuted(null, h));
  return (0, s.jsx)(i.ModalRoot, {
    transitionState: a,
    children: (0, s.jsxs)(i.Scroller, {
      style: {
        overflow: "hidden auto"
      },
      children: [(0, s.jsxs)(i.ModalHeader, {
        className: x.modalHeader,
        children: [(0, s.jsxs)("div", {
          className: x.modalHeaderText,
          children: [(0, s.jsx)(i.Text, {
            variant: "eyebrow",
            color: "status-positive-text",
            children: f.default.Messages.STRANGER_DANGER_TIPS_HEADER
          }), (0, s.jsx)(i.Heading, {
            variant: "heading-xl/bold",
            color: "status-positive-text",
            children: f.default.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
          })]
        }), (0, s.jsx)(i.Button, {
          "aria-label": f.default.Messages.CLOSE,
          look: i.Button.Looks.BLANK,
          size: i.Button.Sizes.NONE,
          onClick: t,
          innerClassName: x.closeButtonInner,
          className: x.closeButton,
          children: (0, s.jsx)(u.default, {
            width: 18,
            height: 18,
            className: x.closeIcon
          })
        })]
      }), (0, s.jsxs)(i.ModalContent, {
        className: x.modalContent,
        children: [(0, s.jsx)("div", {
          className: x.tipsSection,
          children: C.map((e, a) => (0, s.jsxs)("div", {
            className: x.tipRow,
            children: [(0, s.jsx)(i.Heading, {
              variant: "heading-md/semibold",
              color: "text-brand",
              className: x.tipNumber,
              children: a + 1
            }), (0, s.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: e
            })]
          }, a))
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsx)(i.Text, {
            className: x.moreHeading,
            variant: "eyebrow",
            color: "header-secondary",
            children: f.default.Messages.STRANGER_DANGER_MORE_HEADER
          }), (0, s.jsxs)("div", {
            className: x.tipsSection,
            children: [(0, s.jsxs)("div", {
              className: x.safetyAction,
              children: [(0, s.jsxs)("div", {
                className: x.safetyActionText,
                children: [(0, s.jsx)(i.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: f.default.Messages.STRANGER_DANGER_MORE_MUTE
                }), (0, s.jsx)(i.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: f.default.Messages.STRANGER_DANGER_MORE_MUTE_DESCRIPTION
                })]
              }), (0, s.jsx)(i.Button, {
                size: i.Button.Sizes.SMALL,
                color: i.Button.Colors.PRIMARY,
                "aria-label": f.default.Messages.STRANGER_DANGER_MORE_MUTE,
                onClick: g ? () => {
                  o.default.updateChannelOverrideSettings(null, h, {
                    muted: !1
                  }, N.NotificationLabels.Unmuted), (0, i.showToast)((0, i.createToast)(f.default.Messages.STRANGER_DANGER_UNMUTE_CONFIRM, i.ToastType.SUCCESS)), (0, R.trackCtaEvent)({
                    channelId: h,
                    warningId: M,
                    senderId: S,
                    cta: R.CtaEventTypes.USER_MODAL_UNMUTE
                  })
                } : () => {
                  o.default.updateChannelOverrideSettings(null, h, {
                    muted: !0
                  }, N.NotificationLabels.Muted), (0, i.showToast)((0, i.createToast)(f.default.Messages.STRANGER_DANGER_MUTE_CONFIRM, i.ToastType.SUCCESS)), (0, R.trackCtaEvent)({
                    channelId: h,
                    warningId: M,
                    senderId: S,
                    cta: R.CtaEventTypes.USER_MODAL_MUTE
                  })
                },
                children: g ? f.default.Messages.STRANGER_DANGER_MORE_UNMUTE : f.default.Messages.STRANGER_DANGER_MORE_MUTE
              })]
            }), (0, s.jsx)(E.default, {}), (0, s.jsxs)("div", {
              className: x.safetyAction,
              children: [(0, s.jsxs)("div", {
                className: x.safetyActionText,
                children: [(0, s.jsx)(i.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: f.default.Messages.STRANGER_DANGER_MORE_BLOCK
                }), (0, s.jsx)(i.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  children: f.default.Messages.STRANGER_DANGER_MORE_BLOCK_DESCRIPTION
                })]
              }), (0, s.jsx)(i.Button, {
                size: i.Button.Sizes.SMALL,
                color: i.Button.Colors.RED,
                "aria-label": f.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
                onClick: () => {
                  v(), m()
                },
                children: f.default.Messages.STRANGER_DANGER_BANNER_BLOCK
              })]
            })]
          })]
        }), (0, s.jsx)(T.default, {
          channelId: h,
          warningId: M,
          senderId: S
        })]
      })]
    })
  })
}