"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("79112"),
  r = n("271938"),
  o = n("945330"),
  u = n("599110"),
  d = n("243632"),
  c = n("180273"),
  f = n("411511"),
  h = n("49111"),
  C = n("782340"),
  p = n("918321");
let m = (e, t, n) => {
  let l = t.assets.tooltipSrc;
  switch (e) {
    case f.TooltipActions.STREAM_CTA:
      return {
        header: C.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: t.messages.enrollmentTooltip(n), imgSrc: l, imgStyle: p.dropImgPreStreamNotice
      };
    case f.TooltipActions.TRACK_PROGRESS:
      return {
        header: C.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: "", imgSrc: l, imgStyle: p.dropImgProgressTracker
      };
    case f.TooltipActions.QUEST_COMPLETION:
      return {
        header: C.default.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER, body: t.messages.completionTooltip(n), imgSrc: l, imgStyle: p.dropImgQuestCompletion
      };
    case f.TooltipActions.LOADING_INITIAL_PROGRESS:
      return {
        header: "", body: "", imgSrc: l, imgStyle: p.dropImgPreStreamNotice
      }
  }
};

function E(e) {
  let {
    streamLengthRequirement: t,
    viewerCountRequirement: n
  } = e, i = (0, a.useStateFromStores)([c.default], () => c.default.currentDropQuestStreamProgress), r = Math.floor(i / 100 * t).toString();
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(s.Text, {
      variant: "text-sm/bold",
      className: p.progressBarCount,
      children: C.default.Messages.DROPS_STREAM_PROGRESS_INDICATOR.format({
        minutesStreamed: r,
        streamLengthRequirement: t
      })
    }), (0, l.jsx)("div", {
      className: p.progressBarContainer,
      children: (0, l.jsx)("div", {
        className: p.progressBarOuter,
        children: (0, l.jsx)("div", {
          className: p.progressBarInner,
          style: {
            width: "".concat(i, "%")
          }
        })
      })
    }), (0, l.jsxs)(s.Text, {
      variant: "text-xs/medium",
      className: p.viewerCount,
      children: ["*", C.default.Messages.DROPS_REQUIRE_NUM_VIEWERS.format({
        numViewers: n
      }), "*"]
    })]
  })
}

function g(e) {
  let {
    onClose: t,
    tooltipAction: n,
    partnerGame: c
  } = e, g = (0, d.useDropsExperiment)(c);
  (0, d.useFetchInitialDropProgress)(c);
  let I = (0, a.useStateFromStores)([r.default], () => r.default.getId());
  if (null == g) return null;
  let {
    streamLengthRequirement: S,
    viewerCountRequirement: _
  } = g.config, N = g.drop, {
    header: T,
    body: A,
    imgSrc: L,
    imgStyle: v
  } = m(n, N, S), x = () => {
    u.default.track(h.AnalyticEvents.DROPS_ACTIVITY_PANEL_POPOVER_CTA_CLICK, {
      user_id: I,
      drops_quest_id: N.dropsQuestId,
      game_id: N.dropsGameId,
      game_name: N.title.toLowerCase(),
      tooltip_action: n
    })
  }, R = () => {
    t()
  };
  return (0, l.jsxs)("div", {
    className: p.container,
    children: [(0, l.jsx)("img", {
      src: L,
      alt: "",
      className: v
    }), (0, l.jsx)(s.Clickable, {
      className: p.buttonClose,
      "aria-label": C.default.Messages.CLOSE,
      onClick: R,
      children: (0, l.jsx)(o.default, {
        width: 16,
        height: 16,
        className: p.closeIcon
      })
    }), n === f.TooltipActions.LOADING_INITIAL_PROGRESS ? (0, l.jsx)(s.Spinner, {
      className: p.spinner
    }) : (0, l.jsx)(s.Heading, {
      className: p.title,
      variant: "heading-md/extrabold",
      children: T
    }), n === f.TooltipActions.TRACK_PROGRESS ? (0, l.jsx)(E, {
      streamLengthRequirement: S,
      viewerCountRequirement: _
    }) : (0, l.jsx)(s.Text, {
      variant: "text-sm/medium",
      className: p.subTitle,
      children: A
    }), n === f.TooltipActions.QUEST_COMPLETION ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(s.Button, {
        look: s.Button.Looks.INVERTED,
        fullWidth: !0,
        onClick: () => {
          t(), i.default.open(h.UserSettingsSections.INVENTORY), x()
        },
        children: C.default.Messages.REDEEM
      }), (0, l.jsx)(s.Button, {
        className: p.linkButtonContainer,
        innerClassName: p.linkButton,
        onClick: R,
        look: s.Button.Looks.LINK,
        fullWidth: !0,
        color: s.Button.Colors.WHITE,
        children: C.default.Messages.NOT_NOW
      })]
    }) : (0, l.jsx)(s.Button, {
      look: s.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(), i.default.open(h.UserSettingsSections.INVENTORY), x()
      },
      children: C.default.Messages.LEARN_MORE
    }), (0, l.jsx)("div", {
      className: p.pointer
    })]
  })
}