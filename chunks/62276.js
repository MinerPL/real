"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("222007");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("446674"),
  c = l("77078"),
  d = l("272030"),
  o = l("811425"),
  u = l("206230"),
  f = l("697218"),
  v = l("155207"),
  h = l("772280"),
  m = l("811305"),
  I = l("58608"),
  E = l("659500"),
  x = l("449008"),
  p = l("387111"),
  C = l("159885"),
  T = l("191225"),
  S = l("686569"),
  g = l("607573"),
  A = l("555584"),
  _ = l("817039"),
  N = l("687292"),
  j = l("141962"),
  D = l("905647"),
  M = l("49111"),
  y = l("782340"),
  L = l("753587"),
  V = l("728791");

function R(e) {
  let {
    activityItem: t,
    channel: n,
    guildId: R,
    locationObject: b,
    onActivityItemVisible: O,
    onActivityItemSelected: H
  } = e, {
    imageBackground: B,
    videoUrl: w,
    activityAction: F,
    staffReleasePhase: k,
    onActivityItemSelected: Y,
    labelType: P
  } = (0, g.default)({
    activityItem: t,
    channel: n,
    guildId: R,
    locationObject: b,
    onActivityItemVisible: O,
    onActivityItemSelected: H,
    embeddedActivitiesManager: j.default
  }), {
    enableShelfToDetailPage: U,
    enableMinimalActivityDetails: G
  } = S.ExperimentShelfToDetailPage.useExperiment({
    location: "05846b_1"
  }), Z = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), W = (0, r.useStateFromStoresArray)([T.default, f.default], () => T.default.getUsersHavePlayedByApp(t.application.id).filter(e => {
    var t;
    return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) !== e
  }).map(e => f.default.getUser(e)).filter(x.isNotNullish), [t.application.id]), z = null != W[0] ? (0, C.truncateText)(p.default.getName(null, null, W[0]), 25) : null, K = null;
  null != z && W.length > 1 ? K = y.default.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN_AND_MORE.format({
    username1: z,
    extras: W.length - 1
  }) : null != z && (K = y.default.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN.format({
    username1: z
  }));
  let X = a.useCallback(e => e && (null == O ? void 0 : O({
      applicationId: t.application.id
    })), [t.application.id, O]),
    q = (0, o.useIsVisible)(X, .8, !0),
    [J, Q] = a.useState(!1),
    [$, ee] = a.useState(J);
  a.useEffect(() => {
    J && ee(!0)
  }, [J]);
  let et = () => Q(!0),
    el = () => Q(!1),
    ei = null == t.application.maxParticipants || -1 === t.application.maxParticipants ? y.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : y.default.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({
      count: t.application.maxParticipants
    }),
    ea = a.useCallback(() => {
      U ? E.ComponentDispatch.dispatch(M.ComponentActions.SHOW_ACTIVITY_DETAILS, {
        applicationId: t.application.id
      }) : F === g.ActivityAction.START && Y()
    }, [F, t, U, Y]),
    en = D.ACTIVITIES_EXTRA_DETAILS[t.application.id],
    es = (null == en ? void 0 : en.playersSuggestionMin) != null && (null == en ? void 0 : en.playersSuggestionMax) != null ? "".concat(en.playersSuggestionMin, " - ").concat(en.playersSuggestionMax) : void 0;
  return (0, i.jsxs)(c.Clickable, {
    className: s(L.activityCard, {
      [L.activityCardReducedMotion]: Z,
      [L.activityCardWithoutDetailPageRoute]: !U
    }),
    onClick: ea,
    onContextMenu: e => {
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await l.el("639028").then(l.bind(l, "639028"));
        return l => (0, i.jsx)(e, {
          application: t.application,
          ...l
        })
      })
    },
    onMouseEnter: et,
    onFocus: et,
    onMouseLeave: el,
    onBlur: el,
    children: [(0, i.jsxs)("div", {
      ref: q,
      className: L.activityCardImageContainer,
      children: [(0, i.jsx)(_.default, {
        imageBackground: B,
        applicationName: t.application.name,
        imageClassName: L.activityImage,
        imageNotFoundClassName: L.brokenImageIconWrapper
      }), !Z && null != w && $ ? (0, i.jsx)("div", {
        className: s(L.video, {
          [L.videoFadeOut]: !J
        }),
        onAnimationEnd: () => J ? null : ee(!1),
        children: (0, i.jsx)(I.default, {
          className: L.video,
          src: w,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, F !== g.ActivityAction.START ? (0, i.jsx)(A.ActivityActionOverlayButton, {
        action: F,
        onClick: Y
      }) : null, G && null != es ? (0, i.jsx)("div", {
        className: L.minimalDetailsContainer,
        children: (0, i.jsxs)("div", {
          className: L.minimalDetails,
          children: [(0, i.jsx)(v.default, {
            width: 16,
            height: 16
          }), (0, i.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: es
          })]
        })
      }) : null, (0, i.jsx)("div", {
        className: L.overlayBadge,
        children: (0, i.jsxs)("div", {
          className: L.badgeContainer,
          children: [(0, i.jsx)(N.default, {
            name: t.application.name,
            labelType: P
          }), null != k ? (0, i.jsx)(c.Tooltip, {
            text: k,
            children: e => (0, i.jsx)("img", {
              className: L.staffBadge,
              alt: k,
              src: V,
              ...e
            })
          }) : null]
        })
      })]
    }), G ? null : (0, i.jsxs)("div", {
      className: L.activityCardDetails,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(c.Heading, {
          variant: "heading-xl/extrabold",
          children: t.application.name
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/semibold",
          className: L.activityCardParticipants,
          children: ei
        })]
      }), W.length > 0 ? (0, i.jsx)("div", {
        className: L.activityCardSocialProofContainer,
        children: (0, i.jsxs)("div", {
          className: L.activityCardUsersHavePlayedContainer,
          children: [(0, i.jsx)(m.default, {
            users: W,
            guildId: void 0,
            max: 4
          }), null != K ? (0, i.jsx)(c.Text, {
            variant: "text-sm/medium",
            className: L.activityCardUsersHavePlayedText,
            children: K
          }) : null]
        })
      }) : (0, i.jsx)(i.Fragment, {
        children: t.application.tags.length > 0 ? (0, i.jsx)("div", {
          className: L.activityCardTagContainer,
          children: t.application.tags.slice(0, 3).map(e => (0, i.jsx)("div", {
            className: L.activityCardTag,
            children: (0, i.jsx)(c.Text, {
              variant: "text-xs/semibold",
              children: e
            })
          }, e))
        }) : null
      }), U ? (0, i.jsxs)("div", {
        className: s(L.activityCardHoverHint, {
          [L.activityCardHoverHintReducedMotion]: Z
        }),
        children: [(0, i.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: y.default.Messages.LEARN_MORE
        }), (0, i.jsx)(h.default, {
          width: 16,
          height: 16
        })]
      }) : null]
    })]
  })
}