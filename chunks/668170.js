"use strict";
t.r(s), t.d(s, {
  default: function() {
    return g
  }
}), t("222007");
var r = t("37983"),
  o = t("884691"),
  a = t("414456"),
  l = t.n(a),
  n = t("627445"),
  i = t.n(n),
  d = t("77078"),
  c = t("671278"),
  u = t("266926"),
  C = t("489622"),
  _ = t("599110"),
  f = t("648750"),
  E = t("775032"),
  m = t("25132"),
  R = t("922832"),
  h = t("49111"),
  N = t("782340"),
  O = t("338020"),
  x = t("926622"),
  g = e => {
    let {
      transitionState: s,
      onClose: t
    } = e, a = (0, E.default)(), [n, g] = o.useState(!1), {
      getLinkCode: M,
      isGetLinkCodeLoading: p
    } = (0, f.useFamilyCenterActions)({}), I = (0, m.useUserQRLinkUrl)(), A = (0, m.usePendingRequestCount)(), v = o.useRef(A);
    i(!a, "FamilyCenterQRCodeModal should only be rendered for teens.");
    let T = () => {
      g(e => (_.default.track(h.AnalyticEvents.FAMILY_CENTER_ACTION, {
        action: n ? R.FamilyCenterAction.HideQRCode : R.FamilyCenterAction.RevealQRCode
      }), !e)), !n && setTimeout(() => {
        t()
      }, R.QR_CODE_AUTO_HIDE_TIMEOUT)
    };
    o.useEffect(() => {
      M()
    }, []), o.useEffect(() => {
      A > v.current && t()
    }, [v, A, t]);
    let j = n && !p && null != I;
    return (0, r.jsxs)(d.ModalRoot, {
      className: O.modalRoot,
      transitionState: s,
      children: [(0, r.jsxs)(C.default, {
        className: O.notice,
        color: C.NoticeColors.WARNING,
        children: [(0, r.jsx)(u.default, {
          className: O.infoIcon,
          width: 18,
          height: 18
        }), N.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_NOTICE]
      }), (0, r.jsxs)(d.ModalContent, {
        className: O.content,
        children: [(0, r.jsx)(d.Text, {
          className: x.marginBottom8,
          variant: "text-lg/bold",
          color: "header-primary",
          children: N.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_HEADER
        }), (0, r.jsx)(d.Text, {
          className: x.marginBottom20,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: N.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_DESCRIPTION.format({
            link: "https://support.discord.com/hc/articles/14155060633623"
          })
        }), (0, r.jsx)("div", {
          className: O.qrCode,
          children: (0, r.jsx)(d.Clickable, {
            className: l(O.qrCodeObscure, {
              [O.visible]: j
            }),
            onClick: T,
            children: (0, r.jsx)(c.QRCodeWithOverlay, {
              size: 272,
              text: j ? I : R.PLACEHOLDER_QR_CODE_URL,
              overlaySize: c.QRCodeOverlaySizes.SIZE_60
            })
          })
        }), (0, r.jsx)(d.Text, {
          className: O.reminder,
          variant: "text-xs/semibold",
          color: "header-secondary",
          children: N.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_REMINDER
        }), (0, r.jsxs)("div", {
          className: l(O.buttonContainer, x.marginTop20),
          children: [(0, r.jsx)(d.Button, {
            className: x.marginBottom8,
            grow: !0,
            size: d.Button.Sizes.LARGE,
            onClick: T,
            submitting: n && p,
            children: n ? N.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_HIDE : N.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_SHOW
          }), (0, r.jsx)(d.Button, {
            grow: !0,
            color: d.Button.Colors.PRIMARY,
            onClick: t,
            children: N.default.Messages.CLOSE
          })]
        })]
      })]
    })
  }