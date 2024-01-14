"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("506083"), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("866227"),
  a = n.n(s),
  u = n("442761"),
  d = n("77078"),
  c = n("54239"),
  f = n("812204"),
  p = n("685665"),
  m = n("599110"),
  h = n("888400"),
  E = n("701909"),
  S = n("179935"),
  g = n("166960"),
  C = n("646718"),
  T = n("49111"),
  v = n("782340"),
  y = n("503330"),
  x = n("278410"),
  I = n("410957"),
  N = n("730708"),
  _ = n("754702");
let A = async (e, t, n) => {
  n(!0), await (0, S.createReferralTrial)(e).then(() => {
    t(), (0, c.popAllLayers)()
  }).finally(() => {
    n(!1)
  })
}, R = e => {
  let {
    onClose: t,
    referralsRemaining: n,
    recipient: r,
    analyticsLocations: s,
    shouldShowBirthdayUX: a
  } = e, [u, c] = i.useState(!1), f = n - 1;
  return (0, l.jsxs)("div", {
    className: y.confirmationContainer,
    children: [(0, l.jsxs)("div", {
      className: o({
        [y.confirmationBody]: !a,
        [y.confirmationBirthdayBody]: a
      }),
      children: [(0, l.jsx)(d.ModalCloseButton, {
        onClick: t,
        className: y.closeButton
      }), (0, l.jsx)("img", {
        alt: "",
        src: a ? I : N,
        className: y.confirmationImage
      }), (0, l.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        color: "interactive-active",
        className: y.confirmationHeading,
        children: v.default.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER
      }), (0, l.jsx)(d.Text, {
        className: y.confirmationBodyCopy,
        variant: "text-md/medium",
        color: "header-primary",
        children: f > 0 ? v.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({
          count: f
        }) : v.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL
      }), (0, l.jsx)("hr", {
        className: y.confirmationBodySeparator
      })]
    }), (0, l.jsxs)("div", {
      className: y.confirmationButtonContainer,
      children: [(0, l.jsx)(d.Button, {
        className: y.confirmationShareButton,
        submitting: u,
        onClick: () => {
          A(r, t, c), m.default.track(T.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
            location_stack: s,
            step: C.ReferralTrialsAnalyticSteps.FLOW_COMPLETED,
            other_user_id: Number(r)
          })
        },
        children: v.default.Messages.SHAER_NITRO_CONFIRMATION_BUTTON_TEXT
      }), (0, l.jsx)("div", {
        className: y.confirmationCancelButtonContainer,
        children: (0, l.jsx)(d.Clickable, {
          onClick: t,
          children: (0, l.jsx)(d.Text, {
            variant: "text-sm/medium",
            className: y.confirmationCancelCopy,
            children: v.default.Messages.CANCEL
          })
        })
      })]
    })]
  })
};

function O(e) {
  let {
    referralsRemaining: t,
    channel: n,
    onClose: r,
    isResending: s
  } = e, [u, c] = i.useState(!1), [S, N] = i.useState(!1), O = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null, {
    analyticsLocations: M
  } = (0, p.default)(f.default.REFERRAL_TRIALS_POPOUT), {
    enabled: k
  } = g.default.useExperiment({
    location: "200c24_1"
  }, {
    autoTrackExposure: !0
  }), b = new Date("2023-06-15T08:00:00-08:00");
  return null == O ? null : u ? (0, l.jsx)(R, {
    onClose: r,
    referralsRemaining: t,
    recipient: O,
    analyticsLocations: M,
    shouldShowBirthdayUX: k
  }) : (0, l.jsxs)("div", {
    className: y.generalContainer,
    children: [(0, l.jsxs)("div", {
      className: y.generalBodyContainer,
      children: [(0, l.jsx)("img", {
        alt: "",
        src: k ? I : _,
        className: y.generalBodyImage
      }), (0, l.jsxs)("div", {
        className: y.innerContent,
        children: [(0, l.jsx)(d.ModalCloseButton, {
          onClick: r,
          className: y.closeButton
        }), (0, l.jsx)(d.Heading, {
          className: y.generalHeading,
          variant: "heading-xl/bold",
          children: s ? v.default.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : v.default.Messages.SHARE_NITRO_MODAL_HEADER
        }), (0, l.jsxs)(d.Text, {
          className: y.generalBodyCopy,
          variant: "text-md/normal",
          children: [(0, l.jsx)(d.Anchor, {
            className: o(y.learnMore, {
              [y.learnMoreResendUnderlinedText]: s
            }),
            href: E.default.getArticleURL(T.HelpdeskArticles.SHARE_NITRO_FAQ),
            children: s ? v.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : v.default.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({
              count: t
            })
          }), s ? (0, l.jsx)("div", {
            className: y.shareNitroResendCopySuffix,
            children: v.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2
          }) : (0, l.jsx)("div", {
            children: v.default.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({
              date: (0, h.dateFormat)(a(b), "LL")
            })
          })]
        })]
      }), k && (0, l.jsx)("img", {
        alt: "",
        src: x,
        className: y.birthdayBackgroundImage
      })]
    }), (0, l.jsx)("div", {
      className: y.generalButtonContainer,
      children: (0, l.jsx)(d.Button, {
        className: y.generalShareButton,
        submitting: S,
        onClick: () => {
          s ? A(O, r, N) : (c(!0), m.default.track(T.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
            location_stack: M,
            step: C.ReferralTrialsAnalyticSteps.FLOW_STARTED,
            other_user_id: Number(O)
          }))
        },
        children: s ? v.default.Messages.SHARE_NITRO_RESEND_BUTTON_TEXT : v.default.Messages.SHARE_NITRO_BUTTON_TEXT
      })
    })]
  })
}

function M(e) {
  let {
    shouldShowPopout: t,
    referralsRemaining: n,
    channel: i,
    onClose: r,
    isResending: o
  } = e;
  return t ? (0, l.jsx)("div", {
    onMouseDown: e => e.stopPropagation(),
    children: (0, l.jsx)(u.Popout, {
      shouldShow: !0,
      position: "top",
      align: "center",
      renderPopout: e => (0, l.jsx)(O, {
        ...e,
        referralsRemaining: n,
        channel: i,
        onClose: r,
        isResending: o
      }),
      onRequestClose: () => void 0,
      closeOnScroll: !1,
      ignoreModalClicks: !0,
      children: () => (0, l.jsx)("div", {
        className: y.popoutTarget
      })
    })
  }) : null
}