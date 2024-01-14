"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
  }
}), l("222007"), l("424973");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("759843"),
  c = l("446674"),
  d = l("769846"),
  o = l("77078"),
  u = l("84339"),
  f = l("244201"),
  v = l("716241"),
  h = l("939011"),
  m = l("685665"),
  I = l("442939"),
  E = l("944654"),
  x = l("42203"),
  p = l("471671"),
  C = l("145131"),
  T = l("980428"),
  S = l("599110"),
  g = l("659500"),
  A = l("159885"),
  _ = l("84460"),
  N = l("550766"),
  j = l("686569"),
  D = l("623611"),
  M = l("293564"),
  y = l("218274"),
  L = l("891209"),
  V = l("954016"),
  R = l("49111"),
  b = l("782340"),
  O = l("203509"),
  H = l("851815"),
  B = l("255293");
let w = (0, A.cssValueToNumber)(d.default.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
  F = (0, A.cssValueToNumber)(d.default.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
  k = (0, A.cssValueToNumber)(d.default.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH),
  Y = (0, A.cssValueToNumber)(d.default.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH),
  P = (0, A.cssValueToNumber)(d.default.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + w + (0, A.cssValueToNumber)(d.default.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);

function U(e) {
  let {
    channel: t,
    guildId: l,
    locationObject: n,
    onClose: d,
    initialSelectedApplicationId: f,
    initialSlide: p = V.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: A,
    analyticsLocations: P,
    ...U
  } = e, {
    enableBigShelf: Z
  } = j.ExperimentShelfToDetailPage.useExperiment({
    location: "0d4108_1"
  }, {
    autoTrackExposure: !0
  }), {
    width: W
  } = (0, E.useScreenDimensions)(), z = a.useMemo(() => Z ? Math.max(k, Math.min(W - 2 * w, Y)) : F, [W, Z]), K = (0, c.useStateFromStores)([_.default], () => _.default.getIsEnabled(), []), {
    AnalyticsLocationProvider: X
  } = (0, m.default)(P), [q, J] = a.useState(p), Q = (0, u.default)(q), [$, ee] = a.useState(null), [et, el] = a.useState(f), [ei, ea] = a.useState(void 0), [en] = (0, I.default)(null == et ? [] : [et]), es = a.useRef(null), er = a.useMemo(() => ({
    application_id: et,
    source_section: n.section,
    impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
  }), [n.section, et]);
  a.useEffect(() => {
    if (q === V.ActivityShelfSlides.DIRECTORY && null != Q && Q !== V.ActivityShelfSlides.DIRECTORY && null != $) {
      var e;
      null === (e = es.current) || void 0 === e || e.scrollTo({
        top: $
      })
    }
  }, [$, Q, q]);
  let ec = a.useCallback(e => {
      var t;
      let {
        applicationId: l
      } = e, i = null === (t = es.current) || void 0 === t ? void 0 : t.scrollTop;
      null != i && ee(i), el(l), J(V.ActivityShelfSlides.SELECT_CHANNEL)
    }, []),
    ed = a.useCallback(e => {
      let {
        applicationId: t
      } = e;
      el(t), J(V.ActivityShelfSlides.DETAIL_PAGE)
    }, []);
  a.useEffect(() => {
    S.default.track(R.AnalyticEvents.OPEN_MODAL, {
      type: "Activity Shelf",
      channel_id: null == t ? void 0 : t.id,
      guild_id: l
    })
  }, [t, l]), a.useEffect(() => (g.ComponentDispatch.subscribe(R.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ec), () => {
    g.ComponentDispatch.unsubscribe(R.ComponentActions.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ec)
  }), [ec]), a.useEffect(() => (g.ComponentDispatch.subscribe(R.ComponentActions.SHOW_ACTIVITY_DETAILS, ed), () => {
    g.ComponentDispatch.unsubscribe(R.ComponentActions.SHOW_ACTIVITY_DETAILS, ed)
  }), [ed]), a.useEffect(() => {
    N.dismissNewActivityIndicator()
  }, []);
  let eo = () => {
      J(V.ActivityShelfSlides.DIRECTORY)
    },
    eu = a.useRef(Date.now()),
    ef = a.useRef(!1),
    ev = a.useRef([]),
    eh = a.useCallback(e => {
      null == ev.current.find(t => t === e.applicationId) && ev.current.push(e.applicationId)
    }, []);
  return a.useEffect(() => {
    let e = es.current;
    if (null != e) {
      let t = () => ef.current = !0;
      return null != e && e.addEventListener("scroll", t), () => {
        null != e && e.removeEventListener("scroll", t)
      }
    }
  }, []), a.useEffect(() => () => {
    let e = {
        activity_tiles_viewed: ev.current,
        duration_ms: Date.now() - eu.current,
        scrolled: ef.current
      },
      i = {
        channel_id: null == t ? void 0 : t.id,
        guild_id: l,
        location: (0, h.getLocation)(),
        ...(0, v.collectGuildAnalyticsMetadata)(l),
        ...(0, v.collectChannelAnalyticsMetadata)(x.default.getChannel(null == t ? void 0 : t.id)),
        ...er,
        ...e
      };
    S.default.track(R.AnalyticEvents.ACTIVITY_SHELF_CLOSE, i)
  }, [null == t ? void 0 : t.id, er, l]), (0, i.jsx)(X, {
    children: (0, i.jsxs)(o.ModalRoot, {
      className: s(O.root, {
        [O.rootBigShelf]: Z
      }),
      "aria-label": b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
      ...U,
      children: [(0, i.jsx)("img", {
        alt: b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: H,
        className: O.shelfTopBackground
      }), (0, i.jsx)("img", {
        alt: b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
        src: B,
        className: O.shelfTopForeground
      }), (0, i.jsxs)(o.ModalHeader, {
        separator: !1,
        justify: C.default.Justify.BETWEEN,
        className: s(O.modalHeader, {
          [O.modalHeaderBigShelf]: Z
        }),
        children: [(0, i.jsxs)("div", {
          className: O.headerTextContainer,
          children: [(() => {
            if (q === V.ActivityShelfSlides.DETAIL_PAGE) return null == en ? null : (0, i.jsxs)("div", {
              className: O.activityShelfTitle,
              children: [(0, i.jsx)(o.Heading, {
                variant: "heading-xl/extrabold",
                children: en.name
              }), (0, i.jsxs)(o.Clickable, {
                className: O.headerBackButton,
                onClick: eo,
                children: [(0, i.jsx)(T.default, {}), (0, i.jsx)(o.Text, {
                  variant: "text-sm/semibold",
                  children: b.default.Messages.BACK
                })]
              })]
            });
            return (0, i.jsx)("div", {
              className: O.activityShelfTitle,
              children: (0, i.jsx)(o.Heading, {
                variant: "heading-xl/extrabold",
                children: b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
              })
            })
          })(), (() => {
            if (q === V.ActivityShelfSlides.DIRECTORY) return (0, i.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: K ? b.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : b.default.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
            });
            return null
          })()]
        }), (0, i.jsx)(o.ModalCloseButton, {
          className: O.modalCloseButton,
          onClick: d
        })]
      }), q === V.ActivityShelfSlides.DIRECTORY && K ? (0, i.jsx)(L.DeveloperShelfControls, {}) : null, (0, i.jsx)("div", {
        className: O.modalDivider
      }), (0, i.jsxs)(o.Slides, {
        activeSlide: q,
        centered: !1,
        width: z,
        children: [(0, i.jsx)(o.Slide, {
          id: V.ActivityShelfSlides.DIRECTORY,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF,
          impressionProperties: {
            source_section: n.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
          },
          children: (0, i.jsx)(G, {
            slide: q,
            children: (0, i.jsx)(M.default, {
              scrollerRef: es,
              channel: t,
              guildId: l,
              locationObject: n,
              onActivityItemVisible: eh,
              onClose: d
            })
          })
        }), (0, i.jsx)(o.Slide, {
          id: V.ActivityShelfSlides.SELECT_CHANNEL,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
          impressionProperties: {
            source_section: n.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            application_id: et
          },
          children: (0, i.jsx)(G, {
            slide: q,
            children: (0, i.jsx)(y.default, {
              applicationId: et,
              selectedChannelId: ei,
              setSelectedChannelId: ea,
              guildId: l,
              enableSelectedTextChannelInvite: A
            })
          })
        }), (0, i.jsx)(o.Slide, {
          id: V.ActivityShelfSlides.DETAIL_PAGE,
          impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
          impressionProperties: er,
          children: (0, i.jsx)(G, {
            slide: q,
            children: null == et ? null : (0, i.jsx)(D.default, {
              applicationId: et,
              channelId: null == t ? void 0 : t.id,
              guildId: l,
              onActivityLaunch: d
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: O.modalDivider
      }), (0, i.jsx)(o.ModalFooter, {
        separator: !1,
        className: O.footer,
        children: (() => {
          switch (q) {
            case V.ActivityShelfSlides.DIRECTORY:
              return (0, i.jsx)(M.ActivityDirectoryFooter, {});
            case V.ActivityShelfSlides.SELECT_CHANNEL:
              return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: O.modalDivider
                }), (0, i.jsx)(o.ModalFooter, {
                  separator: !1,
                  className: O.footer,
                  children: (0, i.jsx)(y.ChannelSelectorFooter, {
                    onBack: eo,
                    onClose: d,
                    guildId: l,
                    applicationId: et,
                    locationObject: n,
                    selectedChannelId: ei,
                    enableSelectedTextChannelInvite: A
                  })
                })]
              });
            case V.ActivityShelfSlides.DETAIL_PAGE:
            case V.ActivityShelfSlides.DIRECTORY:
            default:
              return null
          }
        })()
      })]
    })
  })
}
let G = e => {
  let {
    children: t,
    slide: l
  } = e, n = (0, c.useStateFromStores)([_.default], () => _.default.getIsEnabled(), []), r = a.useContext(f.default), d = (0, c.useStateFromStores)([p.default], () => p.default.windowSize(r.windowId).height, [r.windowId]);
  return (0, i.jsx)("div", {
    className: s(O.slideContentOuterContainerSquished, {
      [O.slideContentOuterContainerSquishedWithDev]: l === V.ActivityShelfSlides.DIRECTORY && n,
      [O.slideContentOuterContainerTall]: l === V.ActivityShelfSlides.DIRECTORY && d > P,
      [O.slideContentOuterContainerTallWithDev]: l === V.ActivityShelfSlides.DIRECTORY && d > P && n,
      [O.slideContentOuterContainerNoMetaTextSquished]: l === V.ActivityShelfSlides.SELECT_CHANNEL,
      [O.slideContentOuterContainerNoMetaTextTall]: l === V.ActivityShelfSlides.SELECT_CHANNEL && d > P,
      [O.slideContentOuterContainerNoMetaTextNoFooterSquished]: l === V.ActivityShelfSlides.DETAIL_PAGE,
      [O.slideContentOuterContainerNoMetaTextNoFooterTall]: l === V.ActivityShelfSlides.DETAIL_PAGE && d > P
    }),
    children: t
  })
}