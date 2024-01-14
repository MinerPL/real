"use strict";
l.r(t), l.d(t, {
  default: function() {
    return V
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
  u = l("845579"),
  f = l("697218"),
  v = l("604525"),
  h = l("811305"),
  m = l("58608"),
  I = l("449008"),
  E = l("387111"),
  x = l("159885"),
  p = l("84460"),
  C = l("549548"),
  T = l("607573"),
  S = l("555584"),
  g = l("817039"),
  A = l("687292"),
  _ = l("141962"),
  N = l("639028"),
  j = l("782340"),
  D = l("277277"),
  M = l("728791");

function y(e) {
  let {
    value: t,
    icon: l
  } = e;
  return (0, i.jsxs)(c.Text, {
    className: D.activityTag,
    color: "interactive-normal",
    variant: "text-xs/semibold",
    children: [(0, I.isNotNullish)(l) ? (0, i.jsx)(l, {
      className: D.icon,
      backgroundColor: "interactive-normal"
    }) : null, t]
  })
}

function L(e) {
  let {
    activity: t,
    application: l,
    channel: a,
    guildId: n,
    large: s = !1
  } = e, d = (0, r.useStateFromStoresArray)([f.default], () => {
    var e;
    return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
      let [t] = e;
      return f.default.getUser(t)
    }).filter(I.isNotNullish)
  }), o = E.default.getName(n, null == a ? void 0 : a.id, null == d ? void 0 : d[0]);
  if (o = (0, x.truncateText)(o, 15), null == t || 0 === d.length) {
    var u, v;
    let e = "".concat((0, C.default)(null !== (u = l.maxParticipants) && void 0 !== u ? u : 0));
    return s && (e = null !== (v = l.description) && void 0 !== v ? v : ""), (0, i.jsx)(c.Text, {
      className: D.activitySubtitleText,
      variant: "text-xs/normal",
      color: "interactive-normal",
      children: e
    })
  }
  return (0, i.jsxs)("div", {
    className: D.activitySubtitleText,
    children: [(0, i.jsx)(c.Text, {
      className: D.usersArePlayingText,
      variant: "text-xs/normal",
      children: d.length > 1 ? j.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: o,
        count: d.length - 1
      }) : j.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: o
      })
    }), (0, i.jsx)(h.default, {
      size: s ? h.Sizes.SIZE_24 : h.Sizes.SIZE_16,
      guildId: n,
      users: d,
      max: 6
    })]
  })
}

function V(e) {
  var t;
  let {
    activityItem: l,
    channel: n,
    guildId: f,
    locationObject: h,
    onActivityItemVisible: I,
    onActivityItemSelected: E,
    large: x = !1
  } = e, {
    imageBackground: V,
    videoUrl: R,
    activityAction: b,
    joinableEmbeddedApp: O,
    onActivityItemSelected: H,
    labelType: B,
    staffReleasePhase: w
  } = (0, T.default)({
    activityItem: l,
    channel: n,
    guildId: f,
    locationObject: h,
    onActivityItemVisible: I,
    onActivityItemSelected: E,
    embeddedActivitiesManager: _.default
  }), F = (0, r.useStateFromStores)([p.default], () => p.default.isApplicationInDevShelf(l.application.id), [l.application.id]), {
    application: k
  } = l, Y = a.useCallback(e => e && (null == I ? void 0 : I({
    applicationId: l.application.id
  })), [l.application.id, I]), P = (0, o.useIsVisible)(Y, .8, !0), [U, G] = a.useState(!1), [Z, W] = a.useState(U);
  a.useEffect(() => {
    U && W(!0)
  }, [U]);
  let z = () => G(!0),
    K = () => G(!1),
    X = u.DeveloperMode.useSetting();
  return (0, i.jsxs)(c.Clickable, {
    onClick: b === T.ActivityAction.START ? H : void 0,
    onContextMenu: X ? e => {
      (0, d.openContextMenu)(e, e => (0, i.jsx)(N.default, {
        application: k,
        ...e
      }))
    } : void 0,
    className: s(D.activityItem, {
      [D.large]: !0 === x,
      [D.disabled]: b !== T.ActivityAction.START
    }),
    children: [(0, i.jsxs)("div", {
      ref: P,
      className: s(D.activityImageContainer, {
        [D.large]: !0 === x
      }),
      onMouseEnter: z,
      onFocus: z,
      onMouseLeave: K,
      onBlur: K,
      children: [(0, i.jsx)(g.default, {
        imageBackground: V,
        applicationName: k.name,
        imageClassName: s(D.activityImage, {
          [D.large]: !0 === x
        }),
        imageNotFoundClassName: D.brokenImageIconWrapper
      }), null != R && Z && b === T.ActivityAction.START ? (0, i.jsx)("div", {
        className: s(D.activityVideo, {
          [D.videoFadeOut]: !U
        }),
        onAnimationEnd: () => U ? null : W(!1),
        children: (0, i.jsx)(m.default, {
          className: D.activityVideo,
          src: R,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, b !== T.ActivityAction.START ? (0, i.jsx)(S.ActivityActionOverlayButton, {
        action: b,
        onClick: H
      }) : null, (0, i.jsx)("div", {
        className: D.overlayBadge,
        children: (0, i.jsx)("div", {
          className: D.badgeContainer,
          children: (0, i.jsx)(A.default, {
            name: k.name,
            labelType: B
          })
        })
      }), F ? (0, i.jsx)(c.Tooltip, {
        text: j.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, i.jsx)("div", {
          className: D.devShelfBadge,
          ...e,
          children: (0, i.jsx)(v.default, {
            className: D.devShelfIcon
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: s(D.activityTextContainer, {
        [D.large]: x
      }),
      children: [x ? (0, i.jsx)(c.Text, {
        className: D.activityMaxParticipantsLarge,
        variant: "text-xs/normal",
        color: "interactive-normal",
        children: (0, C.default)(null !== (t = k.maxParticipants) && void 0 !== t ? t : 0)
      }) : null, (0, i.jsxs)("div", {
        className: D.activityName,
        children: [(0, i.jsx)(c.Heading, {
          className: D.activityTitleText,
          variant: "heading-md/semibold",
          color: "interactive-active",
          children: k.name
        }), null != w ? (0, i.jsx)(c.Tooltip, {
          text: w,
          children: e => (0, i.jsx)("img", {
            className: D.staffBadge,
            alt: w,
            src: M,
            ...e
          })
        }) : null]
      }), (0, i.jsx)(L, {
        activity: null == O ? void 0 : O.embeddedActivity,
        application: k,
        channel: n,
        guildId: f,
        large: x
      }), (0, i.jsx)("div", {
        className: D.activityTagsContainer,
        children: k.tags.slice(0, 3).map(e => (0, i.jsx)(y, {
          value: e
        }, "activity-tag-".concat(k.id, "-").concat(e)))
      })]
    })]
  })
}