"use strict";
l.r(t), l.d(t, {
  default: function() {
    return G
  },
  ActivityDirectoryFooter: function() {
    return Z
  }
}), l("222007"), l("808653");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("90915"),
  c = l("617258"),
  d = l("446674"),
  o = l("769846"),
  u = l("77078"),
  f = l("206230"),
  v = l("812204"),
  h = l("685665"),
  m = l("161778"),
  I = l("305961"),
  E = l("697218"),
  x = l("58608"),
  p = l("614175"),
  C = l("903178"),
  T = l("955153"),
  S = l("84460"),
  g = l("550766"),
  A = l("337697"),
  _ = l("686569"),
  N = l("91761"),
  j = l("607384"),
  D = l("702173"),
  M = l("490080"),
  y = l("62276"),
  L = l("954016"),
  V = l("49111"),
  R = l("782340"),
  b = l("145468"),
  O = l("661825"),
  H = l("846175"),
  B = l("888181"),
  w = l("924306"),
  F = l("252262");
let k = (0, c.cssValueToNumber)(o.default.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
  Y = (0, c.cssValueToNumber)(o.default.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
  P = (0, c.cssValueToNumber)(o.default.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT),
  U = {
    [L.ActivityAccessStatus.NEEDS_NITRO]: 70,
    [L.ActivityAccessStatus.UNLOCKED]: 0
  };

function G(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: c,
    onActivityItemVisible: o,
    scrollerRef: G
  } = e, [Z, W] = a.useState(0), z = (0, d.useStateFromStores)([m.default], () => m.default.getState().theme), K = (0, d.useStateFromStores)([f.default], () => f.default.useReducedMotion), {
    enabled: X
  } = A.ExperimentBirthdayGoodbye.useExperiment({
    location: "a48d9e_1"
  }), {
    enabled: q
  } = p.ActivitiesGameNightExperiment.useExperiment({
    location: "a48d9e_2"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: J
  } = T.BirthdayActivitiesExperiment.useExperiment({
    location: "a48d9e_4"
  }), Q = (0, C.useIsWatchTogetherPromoEnabled)(), $ = (0, N.default)({
    guildId: l,
    isWatchTogetherPromoEnabled: Q
  }), ee = (0, d.useStateFromStores)([E.default], () => E.default.getCurrentUser()), et = (0, d.useStateFromStores)([I.default], () => I.default.getGuild(l), [l]), {
    AnalyticsLocationProvider: el
  } = (0, h.default)(v.default.ACTIVITY_DIRECTORY), ei = (0, D.default)(null == t ? void 0 : t.id), {
    isDeveloperActivityShelfEnabled: ea,
    filter: en
  } = (0, d.useStateFromStoresObject)([S.default], () => ({
    filter: S.default.getFilter(),
    isDeveloperActivityShelfEnabled: S.default.getIsEnabled()
  }));
  a.useEffect(() => {
    let e = G.current;
    if (null != e) return e.addEventListener("scroll", t, !1), () => {
      null != e && e.removeEventListener("scroll", t, !1)
    };

    function t() {
      var e, t;
      W(null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
    }
  }, [G]);
  let {
    enableBigShelf: es,
    enableSocialProofActivityDetails: er,
    enableMinimalActivityDetails: ec
  } = _.ExperimentShelfToDetailPage.useExperiment({
    location: "a48d9e_5"
  }, {
    autoTrackExposure: !0
  });
  if (a.useEffect(() => {
      (ei || null != l) && (0, g.fetchShelf)({
        guildId: l,
        force: !0
      })
    }, [l, ei]), (0, j.useFetchDeveloperActivityShelfItems)(), null == et && !ei || null == ee) return null;
  let ed = $.reduce((e, t) => {
      let [l, i] = t;
      return e = e || i.length > 0
    }, !1),
    eo = (e, t, l, i, a) => {
      let n = U[t] + k;
      i ? n += 290.75 : a && (n += 200);
      let s = t === L.ActivityAccessStatus.UNLOCKED && 1 === e.length,
        r = Math.ceil(e.length / 2) * ((s ? P : Y) + (l ? k : 0));
      return n + r
    },
    eu = (() => {
      if (q) return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(x.default, {
          autoPlay: !K,
          src: "https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4",
          poster: "https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg",
          className: b.poster,
          loop: !0
        }), (0, i.jsx)("div", {
          className: b.posterDivider
        })]
      });
      if (X) return es ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          src: F,
          alt: R.default.Messages.EMBEDDED_ACTIVITIES_STAYING_FREE_POSTER_ALT,
          className: b.poster
        }), (0, i.jsx)("div", {
          className: b.posterDivider
        })]
      });
      if (J) return K ? (0, i.jsxs)(r.Link, {
        to: V.Routes.ACTIVITIES,
        onClick: c,
        children: [(0, i.jsx)("img", {
          src: "light" === z ? O : H,
          className: b.poster,
          alt: R.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
        }), (0, i.jsx)("div", {
          className: b.posterDivider
        })]
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.Link, {
          to: V.Routes.ACTIVITIES,
          onClick: c,
          children: (0, i.jsx)(x.default, {
            autoPlay: !0,
            src: B,
            poster: w,
            className: b.poster,
            loop: !0,
            muted: !0
          })
        }), (0, i.jsx)("div", {
          className: b.posterDivider
        })]
      });
      return null
    })();
  return (0, i.jsx)(el, {
    children: (0, i.jsxs)("div", {
      className: b.scrollContainer,
      children: [ed && !es ? (0, i.jsx)("div", {
        className: b.scrollBackgroundContainer,
        style: {
          top: -Z
        },
        children: $.map((e, t, l) => {
          let [a, n] = e, r = t + 1 < l.length && a !== l[t + 1][0];
          return (0, i.jsx)("div", {
            className: s(b.scrollTierBackground),
            style: {
              height: eo(n, a, r, q, J)
            }
          }, "activity-shelf-".concat(a, "-").concat(t))
        })
      }) : null, (0, i.jsxs)(u.Scroller, {
        ref: G,
        className: b.scroller,
        children: [eu, function() {
          let e = es || er || ec ? y.default : M.default;
          return ed ? (0, i.jsx)(i.Fragment, {
            children: $.map((a, r) => {
              let [d, u] = a;
              return (0, i.jsx)("div", {
                className: b.scrollSection,
                children: (0, i.jsx)("div", {
                  className: s(b.shelf, {
                    [b.shelfBigGrid]: es
                  }),
                  children: u.map(a => (0, i.jsx)(e, {
                    large: d === L.ActivityAccessStatus.UNLOCKED && 1 === u.length,
                    activityItem: a,
                    channel: t,
                    guildId: l,
                    locationObject: n,
                    onActivityItemVisible: o,
                    onActivityItemSelected: () => {
                      var e;
                      e = a.application.id, c()
                    }
                  }, "activity-shelf-item-".concat(a.application.id)))
                })
              }, "activity-shelf-status-".concat(d, "-").concat(r))
            })
          }) : ea && en.length > 0 ? (0, i.jsx)("div", {
            className: b.filterError,
            children: R.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
              filter: en
            })
          }) : (0, i.jsx)("div", {
            className: b.spinnerContainer,
            children: (0, i.jsx)(u.Spinner, {})
          })
        }()]
      })]
    })
  })
}

function Z() {
  return (0, i.jsx)(u.Text, {
    variant: "text-sm/normal",
    children: R.default.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({
      surveyURL: L.EMBEDDED_ACTIVITY_SURVEY_URL
    })
  })
}