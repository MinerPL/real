"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("759843"),
  i = n("77078"),
  l = n("79112"),
  r = n("945330"),
  o = n("376152"),
  u = n("243632"),
  d = n("49111"),
  c = n("994428"),
  E = n("782340"),
  f = n("905769");
let _ = (e, t) => ({
  header: E.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
    gameName: e.title
  }),
  body: e.messages.enrollmentTooltip(t),
  imgSrc: e.assets.tooltipSrc,
  imgStyle: f.defaultDropImage
});

function h(e) {
  let {
    markAsDismissed: t,
    partnerGame: n
  } = e;
  (0, u.useTrackDropsImpression)(n, s.ImpressionTypes.POPOUT, s.ImpressionNames.DROPS_QUEST_ENROLLMENT);
  let h = (0, u.useDropsExperiment)(n);
  if (null == h) return null;
  let {
    header: C,
    body: T,
    imgSrc: I,
    imgStyle: S
  } = _(h.drop, h.config.streamLengthRequirement), N = () => {
    t(c.ContentDismissActionType.DISMISS)
  };
  return (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsx)("img", {
      src: I,
      alt: "",
      className: S
    }), (0, a.jsx)(i.Clickable, {
      className: f.buttonClose,
      "aria-label": E.default.Messages.CLOSE,
      onClick: N,
      children: (0, a.jsx)(r.default, {
        width: 16,
        height: 16,
        className: f.closeIcon
      })
    }), (0, a.jsx)(i.Heading, {
      className: f.title,
      variant: "heading-md/extrabold",
      children: C
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      className: f.subTitle,
      children: T
    }), h.config.autoEnrollment ? (0, a.jsx)(i.Button, {
      look: i.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        l.default.open(d.UserSettingsSections.INVENTORY), t(c.ContentDismissActionType.PRIMARY)
      },
      children: E.default.Messages.LEARN_MORE
    }) : (0, a.jsx)(i.Button, {
      innerClassName: f.button,
      look: i.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        (0, o.enrollDropsUser)(h.drop.dropsQuestId), l.default.open(d.UserSettingsSections.INVENTORY), t(c.ContentDismissActionType.PRIMARY)
      },
      children: E.default.Messages.DROPS_ELIGIBILITY_ENROLLMENT_PRIMARY_CTA
    }), (0, a.jsx)(i.Button, {
      className: f.linkButtonContainer,
      innerClassName: f.linkButton,
      onClick: N,
      look: i.Button.Looks.LINK,
      fullWidth: !0,
      color: i.Button.Colors.WHITE,
      children: E.default.Messages.NOT_NOW
    }), (0, a.jsx)("div", {
      className: f.pointer
    })]
  })
}