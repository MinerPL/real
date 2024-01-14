"use strict";
a.r(e), a.d(e, {
  default: function() {
    return L5
  }
}), a("222007"), a("781738"), a("424973");
var t, C, s, l, i = a("37983"),
  n = a("884691"),
  r = a("414456"),
  H = a.n(r),
  V = a("398179"),
  d = a("90915"),
  c = a("759843"),
  o = a("446674"),
  M = a("769846"),
  u = a("77078"),
  E = a("939488"),
  I = a("731898"),
  _ = a("84339"),
  T = a("572544"),
  Z = a("206230"),
  f = a("812204"),
  m = a("685665"),
  h = a("428958"),
  D = a("121631"),
  N = a("299285"),
  A = a("915639"),
  g = a("161778"),
  p = a("42203"),
  x = a("305961"),
  S = a("677099"),
  v = a("697218"),
  j = a("311450"),
  R = a("461380"),
  b = a("29557"),
  B = a("772280"),
  O = a("664336"),
  w = a("811305"),
  k = a("58608"),
  P = a("599110"),
  y = a("449008"),
  W = a("387111"),
  F = a("159885"),
  G = a("439932"),
  U = a("475216"),
  Y = a("992204"),
  K = a("550766"),
  X = a("191225"),
  J = a("334788"),
  z = a("891654"),
  Q = a("885412"),
  q = a("629388"),
  $ = a("337697"),
  LL = a("602718"),
  Le = a("503525"),
  La = a("865821"),
  Lt = a("525167"),
  LC = a("607573"),
  Ls = a("969380"),
  Ll = a("407420"),
  Li = a("842579"),
  Ln = a("532554"),
  Lr = a("371316"),
  LH = a("141962"),
  LV = a("954016"),
  Ld = a("49111"),
  Lc = a("782340"),
  Lo = a("808516"),
  LM = a("933197"),
  Lu = a("205510"),
  LE = a("298515"),
  LI = a("419991"),
  L_ = a("614196"),
  LT = a("14023"),
  LZ = a("346983"),
  Lf = a("163065"),
  Lm = a("758714"),
  Lh = a("479394"),
  LD = a("50759"),
  LN = a("586226"),
  LA = a("7835"),
  Lg = a("150101"),
  Lp = a("803732"),
  Lx = a("183658"),
  LS = a("10412"),
  Lv = a("932107");
let Lj = "celebrate-with-us",
  LR = "".concat(Ld.Routes.ACTIVITIES, "#").concat(Lj),
  Lb = "https://support.discord.com/hc/en-us/articles/13771635451415-Share-Nitro-Trials-with-a-Friend-FAQ",
  LB = "https://discord.gg/discord-townhall",
  LO = "https://discordmerch.com/dxcprod";

function Lw() {
  var L, e;
  let {
    width: a,
    ref: t
  } = (0, I.default)(), C = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), s = (0, o.useStateFromStores)([Y.default], () => Y.default.isAcknowledged(LV.WhatsNewSection.FREE)), [l, r] = n.useState(!1), [c, M] = n.useState(!1), [_, T] = n.useState(!1), h = (0, d.useHistory)(), D = (0, d.useLocation)(), N = (0, o.useStateFromStores)([g.default], () => g.default.getState().theme), [A] = n.useState((0, Le.getActivitiesWhatsNewCount)(Y.default) > 0), {
    analyticsLocations: p,
    AnalyticsLocationProvider: x
  } = (0, m.default)([...null !== (e = null == D ? void 0 : null === (L = D.state) || void 0 === L ? void 0 : L.analyticsLocations) && void 0 !== e ? e : [], f.default.ACTIVITIES_PAGE]), {
    enabled: S
  } = $.ExperimentBirthdayGoodbye.useExperiment({
    location: "d72ecf_1"
  }, {
    autoTrackExposure: !0
  }), v = n.useRef(new Date);
  return n.useEffect(() => {
    setTimeout(() => {
      !s && U.markSectionAcknowledged(LV.WhatsNewSection.FREE)
    }, 500)
  }, [s]), n.useEffect(() => {
    !s && (setTimeout(() => {
      r(!0)
    }, 1300), setTimeout(() => {
      M(!0)
    }, 1500), setTimeout(() => {
      T(!0)
    }, 1700))
  }, [s]), n.useEffect(() => ((0, E.setHomeLink)(Ld.Routes.ACTIVITIES), A && !p.includes(f.default.ACTIVITIES_PAGE_NOTIFICATION_DOT) && h.replace(Ld.Routes.ACTIVITIES, {
    analyticsLocations: [...p, f.default.ACTIVITIES_PAGE_NOTIFICATION_DOT]
  }), () => {
    let L = v.current,
      e = new Date,
      a = Math.ceil((e.getTime() - L.getTime()) / 1e3);
    P.default.track(Ld.AnalyticEvents.ROUTE_UNMOUNT, {
      route: "/activities",
      page_view_duration_s: a
    })
  }), [p, h, A]), (0, i.jsx)(x, {
    children: (0, i.jsxs)("div", {
      className: Lo.outerContainer,
      children: [(0, i.jsxs)(O.default, {
        children: [(0, i.jsx)(j.default, {
          className: H(Lo.activitiesBirthdayIcon, {
            [Lo.activitiesBirthdayIconLight]: "light" === N
          })
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE
        })]
      }), (0, i.jsx)(u.Scroller, {
        className: Lo.scroller,
        children: (0, i.jsxs)("div", {
          className: Lo.innerContainer,
          children: [S ? (0, i.jsxs)("div", {
            className: Lo.heroFlipper,
            children: [(0, i.jsxs)("div", {
              className: H(Lo.heroFlipperInner, {
                [Lo.heroFlipped]: s || C
              }),
              children: [(0, i.jsx)("img", {
                src: "light" === N ? LM : Lu,
                className: H(Lo.hero),
                alt: Lc.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
              }), (0, i.jsx)("div", {
                className: H(Lo.heroFlipperBack, {
                  [Lo.heroFlipperBackLightMode]: "light" === N
                }),
                children: (0, i.jsx)(Lk, {
                  containerRef: t,
                  width: a
                })
              })]
            }), !C && l ? (0, i.jsx)("div", {
              className: Lo.heroConfetti01Wrapper,
              children: (0, i.jsx)(V.default, {
                colors: LG
              })
            }) : null, !C && c ? (0, i.jsx)("div", {
              className: Lo.heroConfetti02Wrapper,
              children: (0, i.jsx)(V.default, {
                colors: LG
              })
            }) : null, !C && _ ? (0, i.jsx)("div", {
              className: Lo.heroConfetti03Wrapper,
              children: (0, i.jsx)(V.default, {
                colors: LG
              })
            }) : null]
          }) : (0, i.jsx)("div", {
            className: Lo.heroWrapper,
            children: (0, i.jsx)("img", {
              src: "light" === N ? LM : Lu,
              className: Lo.hero,
              alt: Lc.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
            })
          }), null != a && a < 660 ? (0, i.jsx)(k.default, {
            autoPlay: !0,
            muted: !0,
            src: LE,
            loop: !0,
            className: Lo.freeForeverBreakpointVideo,
            controls: C
          }) : null, S ? null : (0, i.jsx)(LP, {}), S ? null : (0, i.jsx)(LU, {}), (0, i.jsx)(Lq, {}), (0, i.jsx)(L6, {
            renderAll: S
          }), S ? null : (0, i.jsx)(L7, {}), (0, i.jsx)(L3, {})]
        })
      })]
    })
  })
}

function Lk(L) {
  let {
    width: e,
    containerRef: a
  } = L, t = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion);
  return (0, i.jsxs)("div", {
    className: Lo.freeForeverContainer,
    ref: a,
    children: [(0, i.jsx)("div", {
      className: Lo.freeForeverLeft,
      children: (0, i.jsxs)("div", {
        className: Lo.freeForeverText,
        children: [(0, i.jsx)(b.default, {
          className: H(Lo.freeForeverLogo, {
            [Lo.freeForeverLogoMedium]: null != e && e < 1e3,
            [Lo.freeForeverLogoSmall]: null != e && e < 480
          })
        }), (0, i.jsx)(u.Heading, {
          variant: null == e || e < 480 ? "heading-sm/bold" : e < 1e3 ? "display-sm" : "display-md",
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_TITLE
        }), (0, i.jsx)(u.Text, {
          variant: null == e || e < 480 ? "text-sm/medium" : e < 1e3 ? "text-md/medium" : "text-lg/medium",
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_DESCRIPTION
        })]
      })
    }), null != e && e > 660 ? (0, i.jsx)("div", {
      className: Lo.freeForeverRight,
      children: (0, i.jsx)(k.default, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        src: LE,
        poster: LI,
        className: Lo.freeForeverVideo,
        controls: t
      })
    }) : null]
  })
}

function LP() {
  return (0, i.jsxs)("div", {
    className: Lo.birthdayExplanationWrapper,
    children: [(0, i.jsx)("div", {
      className: Lo.birthdayBalloonsContainer,
      children: (0, i.jsx)(Ll.Balloons, {
        className: H(Lo.birthdayExplanationBalloonsLeft, Lo.balloon)
      })
    }), (0, i.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: Lo.birthdayExplanationText,
      children: Lc.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_HERO_TEXT_WITH_2_LINKS.format({
        linkToBdayBlogPost: "https://dis.gd/birthday",
        linkToSurprises: L => (0, i.jsxs)(u.Anchor, {
          href: LR,
          children: [L, (0, i.jsx)("img", {
            src: LD,
            className: Lo.birthdayExplanationNitroIcon,
            alt: Lc.default.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
          })]
        })
      })
    }), (0, i.jsx)("div", {
      className: Lo.birthdayBalloonsContainer,
      children: (0, i.jsx)(Ll.Balloons, {
        className: H(Lo.birthdayExplanationBalloonsRight, Lo.balloon),
        flipX: !0
      })
    })]
  })
}
let Ly = "whats-new",
  LW = (0, F.cssValueToNumber)(M.default.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH),
  LF = (0, F.cssValueToNumber)(M.default.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN),
  LG = [u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_BLUE.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_GREEN.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PINK.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PURPLE.css, u.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_YELLOW.css];

function LU() {
  let {
    enabled: L
  } = J.ExperimentBirthdayActivitiesGdmTile.useExperiment({
    location: "d72ecf_2"
  }), {
    enabled: e
  } = z.ExperimentBirthdayActivitiesJamspaceTile.useExperiment({
    location: "d72ecf_3"
  }), {
    enabled: a
  } = q.ExperimentBirthdayActivitiesPuttPartyTile.useExperiment({
    location: "d72ecf_4"
  }), {
    enabled: t
  } = Q.ExperimentBirthdayActivitiesPokerTile.useExperiment({
    location: "d72ecf_5"
  }), C = n.useMemo(() => {
    let C = [];
    return C.push({
      id: LV.WhatsNewSection.DISCORD_TURNS_8,
      title: Lc.default.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Lo.whatsNewDescription,
        children: Lc.default.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_DESCRIPTION
      }),
      imgUrl: Lp,
      imgAlt: Lc.default.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_IMG_ALT,
      link: void 0,
      isAppLink: !1,
      cardImgUrl: L_,
      revealDate: new Date("May 15, 2023 17:00:00"),
      enabled: !0
    }), C.push({
      id: LV.WhatsNewSection.GDM_ACTIVITIES,
      title: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Lo.whatsNewDescription,
        children: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_DESCRIPTION
      }),
      imgUrl: Lg,
      imgAlt: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_IMG_ALT,
      link: "https://support.discord.com/hc/en-us/articles/4422142836759-Activities-on-Discord#h_01GSX5FCYNMF5PCGKNNA6XFW29",
      isAppLink: !1,
      cardImgUrl: LT,
      revealDate: new Date("May 15, 2023 17:00:00"),
      enabled: L
    }), C.push({
      id: LV.WhatsNewSection.PUTT_PARTY,
      title: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Lo.whatsNewDescription,
        children: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_DESCRIPTION
      }),
      imgUrl: Lv,
      imgAlt: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_IMG_ALT,
      link: Ld.Routes.ACTIVITY_DETAILS(LV.PUTT_PARTY_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: LZ,
      revealDate: new Date("May 22, 2023 17:00:00"),
      enabled: a
    }), C.push({
      id: LV.WhatsNewSection.JAMSPACE,
      title: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Lo.whatsNewDescription,
        children: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_DESCRIPTION
      }),
      imgUrl: Lx,
      imgAlt: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_IMG_ALT,
      link: Ld.Routes.ACTIVITY_DETAILS(LV.JAM_SPACE_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: Lf,
      revealDate: new Date("May 30, 2023 17:00:00"),
      enabled: e
    }), C.push({
      id: LV.WhatsNewSection.POKER,
      title: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_TITLE,
      content: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: Lo.whatsNewDescription,
        children: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_DESCRIPTION
      }),
      imgUrl: LS,
      imgAlt: Lc.default.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_IMG_ALT,
      link: Ld.Routes.ACTIVITY_DETAILS(LV.POKER_NIGHT_APPLICATION_ID),
      isAppLink: !0,
      cardImgUrl: Lm,
      revealDate: new Date("June 5, 2023 17:00:00"),
      enabled: t
    }), C
  }, [L, e, t, a]);
  return C.length <= 0 ? null : (0, i.jsx)("div", {
    className: Lo.whatsNew,
    children: (0, i.jsx)(D.default, {
      tileMargin: LF,
      headerId: Ly,
      tileWidth: LW,
      header: Lc.default.Messages.WHATS_NEW,
      headerContainerClassName: Lo.tileScrollerHeader,
      scrollContainerClassName: Lo.tileScrollerContainer,
      children: (0, i.jsx)("ul", {
        "aria-labelledby": Ly,
        className: Lo.whatsNewItemsContainer,
        children: C.map(L => (0, i.jsx)(LY, {
          ...L
        }, L.id))
      })
    })
  })
}

function LY(L) {
  let {
    imgUrl: e,
    imgAlt: a,
    title: t,
    content: C,
    link: s,
    isAppLink: l,
    id: r,
    cardImgUrl: d,
    revealDate: c,
    enabled: M
  } = L, E = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), I = (0, o.useStateFromStores)([A.default], () => A.default.locale), {
    AnalyticsLocationProvider: T
  } = (0, m.default)(f.default.ACTIVITIES_PAGE_WHATS_NEW_TILE), [h, D] = n.useState(!1), N = (0, _.default)(h), g = (0, o.useStateFromStores)([Y.default], () => {
    if (!M) return 0;
    let L = Y.default.isOpened(r);
    return r === LV.WhatsNewSection.JAMSPACE ? L || Y.default.isOpened(LV.WhatsNewSection.JAMSPACE_OLD) ? 2 : 1 : L ? 2 : 1
  }, [M, r]);
  n.useEffect(() => {
    M && U.markSectionAcknowledged(r)
  }, [M, r]);
  let p = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.Text, {
      variant: "text-sm/semibold",
      className: Lo.whatsNewDate,
      children: new Intl.DateTimeFormat(I, {
        dateStyle: "long"
      }).format(c)
    }), (0, i.jsxs)("div", {
      className: Lo.whatsNewImageContainer,
      children: [(0, i.jsx)("img", {
        src: e,
        className: Lo.whatsNewImage,
        alt: a
      }), (0, i.jsx)(u.Text, {
        variant: "eyebrow",
        className: Lo.newTag,
        children: Lc.default.Messages.NEW
      })]
    }), (0, i.jsxs)("div", {
      className: Lo.whatsNewTextArea,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-md/bold",
        className: Lo.whatsNewDetailsHeader,
        children: t
      }), C]
    })]
  });
  return (0, i.jsx)(T, {
    children: (0, i.jsxs)("div", {
      className: Lo.flipCardOuter,
      children: [E || 2 !== g || h || !N ? null : (0, i.jsx)("div", {
        className: Lo.flipCardConfetti,
        children: (0, i.jsx)(V.default, {
          colors: LG
        })
      }), (0, i.jsx)(LK, {
        openState: g,
        link: s,
        isAppLink: l,
        onOpen: () => {
          D(!0), U.markSectionOpened(r), P.default.track(Ld.AnalyticEvents.ACTIVITIES_WHATS_NEW_OPENED, {
            section_id: r
          }), setTimeout(() => {
            D(!1)
          }, 500)
        },
        onCardContentClick: () => {
          P.default.track(Ld.AnalyticEvents.ACTIVITIES_WHATS_NEW_CLICKED, {
            section_id: r
          })
        }
      }), (0, i.jsxs)("div", {
        className: H(Lo.flipCardInner, {
          [Lo.flipCardInnerFlipped]: 2 === g,
          [Lo.flipCardOpening]: h && !E,
          [Lo.flipCardInnerReducedMotion]: E
        }),
        children: [(0, i.jsx)("div", {
          className: Lo.flipCardOpened,
          children: (() => {
            switch (g) {
              case 0:
              case 1:
                return (0, i.jsx)(u.Text, {
                  variant: "text-md/medium",
                  children: "( ͡\xb0 ͜ʖ ͡\xb0) https://discord.com/careers"
                });
              case 2:
                return (0, i.jsx)("div", {
                  className: Lo.whatsNewItemContainer,
                  children: p
                });
              default:
                return null
            }
          })()
        }), (0, i.jsxs)("div", {
          className: Lo.flipCardClosed,
          children: [(0, i.jsx)("img", {
            src: d,
            className: Lo.flipCardClosedImg,
            alt: Lc.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_CARD_ALT
          }), (() => {
            switch (g) {
              case 0:
                return (0, i.jsx)(u.Text, {
                  variant: "text-sm/semibold",
                  className: Lo.flipCardClosedText,
                  children: Lc.default.Messages.EMBEDDED_ACTIVITIES_CLICK_TO_REVEAL_DATE.format({
                    revealDate: new Intl.DateTimeFormat(I).format(c)
                  })
                });
              case 1:
                return (0, i.jsx)(u.Text, {
                  variant: "text-sm/semibold",
                  className: Lo.flipCardText,
                  children: Lc.default.Messages.EMBEDDED_ACTIVITIES_REVEAL_THIS_WEEKS_DROP.format({
                    revealDate: new Intl.DateTimeFormat(I).format(c)
                  })
                });
              default:
                return null
            }
          })()]
        })]
      })]
    })
  })
}

function LK(L) {
  let {
    openState: e,
    link: a,
    isAppLink: t,
    onOpen: C,
    onCardContentClick: s
  } = L, {
    analyticsLocations: l
  } = (0, m.default)(), n = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion);
  switch (e) {
    case 0:
      return (0, i.jsx)("div", {
        className: H(Lo.clickableContainer, Lo.noPointer, {
          [Lo.clickableContainerReducedMotion]: n
        })
      });
    case 1:
      return (0, i.jsx)(u.Clickable, {
        "aria-label": Lc.default.Messages.EMBEDDED_ACTIVITIES_OPEN_BIRTHDAY_SURPRISE,
        className: H(Lo.clickableContainer, {
          [Lo.clickableContainerReducedMotion]: n
        }),
        onClick: C
      });
    case 2:
      if (null == a) return (0, i.jsx)("div", {
        className: H(Lo.clickableContainer, Lo.noPointer, {
          [Lo.clickableContainerReducedMotion]: n
        })
      });
      if (t) return (0, i.jsx)(Lr.ClickableLink, {
        className: H(Lo.clickableContainer, {
          [Lo.clickableContainerReducedMotion]: n
        }),
        onClick: s,
        to: {
          pathname: a,
          state: {
            analyticsLocations: l
          }
        }
      });
      return (0, i.jsx)(u.Clickable, {
        tag: "a",
        href: a,
        target: "_blank",
        className: H(Lo.clickableContainer, {
          [Lo.clickableContainerReducedMotion]: n
        }),
        onClick: s
      });
    default:
      return null
  }
}(s = t || (t = {}))[s.LOCKED = 0] = "LOCKED", s[s.UNLOCKED = 1] = "UNLOCKED", s[s.OPENED = 2] = "OPENED";
let LX = "happening-now",
  LJ = (0, F.cssValueToNumber)(M.default.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH),
  Lz = (0, F.cssValueToNumber)(M.default.ACTIVITIES_HOME_HAPPENING_NOW_GAP);

function LQ(L, e) {
  if (L.length !== e.length) return !1;
  for (let a = 0; a < L.length; a++)
    if (L[a].activityItem.application.id !== e[a].activityItem.application.id || L[a].channel.id !== e[a].channel.id || L[a].users.length !== e[a].users.length) return !1;
  return !0
}

function Lq() {
  let {
    AnalyticsLocationProvider: L
  } = (0, m.default)(f.default.ACTIVITIES_HAPPENING_NOW), e = (0, o.useStateFromStores)([X.default, N.default, p.default, v.default, S.default], () => {
    let L = [],
      e = v.default.getCurrentUser();
    if (null == e) return L;
    let a = X.default.getShelfActivities(null),
      t = a.map(L => N.default.getApplication(L.application_id)).filter(y.isNotNullish);
    return S.default.getFlattenedGuildIds().forEach(C => {
      X.default.getEmbeddedActivitiesForGuild(C).forEach(C => {
        let s = p.default.getChannel(C.channelId);
        if (null == s || C.userIds.has(e.id)) return;
        let l = (0, LL.default)({
            activityConfigs: a,
            applicationId: C.applicationId,
            applications: t
          }),
          i = Array.from(C.userIds).map(L => v.default.getUser(L)).filter(y.isNotNullish);
        null != l && L.push({
          activityItem: l,
          channel: s,
          users: i
        })
      })
    }), L
  }, [], LQ);
  return ((0, h.default)({
    type: c.ImpressionTypes.PANE,
    name: c.ImpressionNames.ACTIVITIES_HAPPENING_NOW,
    properties: {
      n_activities: e.length
    }
  }, {
    trackOnInitialLoad: !0
  }), e.length <= 0) ? null : (0, i.jsx)(L, {
    children: (0, i.jsx)("div", {
      className: Lo.happeningNowContainer,
      children: (0, i.jsx)(D.default, {
        tileMargin: Lz,
        headerId: LX,
        tileWidth: LJ,
        header: Lc.default.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_TITLE,
        subHeader: Lc.default.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_DESCRIPTION,
        headerContainerClassName: Lo.tileScrollerHeader,
        scrollContainerClassName: Lo.tileScrollerContainer,
        children: (0, i.jsx)("ul", {
          "aria-labelledby": LX,
          className: Lo.whatsNewItemsContainer,
          children: e.map(L => {
            let {
              activityItem: e,
              channel: a,
              users: t
            } = L;
            return (0, i.jsx)(L$, {
              activityItem: e,
              channel: a,
              users: t
            }, "".concat(a.id).concat(e.application.id))
          })
        })
      })
    })
  })
}

function L$(L) {
  let {
    activityItem: e,
    channel: a,
    users: t
  } = L, C = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), {
    imageBackground: s,
    onActivityItemSelected: l
  } = (0, LC.default)({
    activityItem: e,
    channel: a,
    guildId: a.guild_id,
    locationObject: {},
    embeddedActivitiesManager: LH.default,
    backgroundResolution: 512
  }), n = W.default.getName(a.guild_id, a.id, null == t ? void 0 : t[0]);
  n = (0, F.truncateText)(n, 25);
  let r = (0, o.useStateFromStores)([x.default], () => {
    var L;
    return null === (L = x.default.getGuild(a.guild_id)) || void 0 === L ? void 0 : L.name
  });
  return (0, i.jsxs)(u.Clickable, {
    onClick: l,
    className: H((0, G.getThemeClass)(Ld.ThemeTypes.DARK), Lo.happeningNowCard, {
      [Lo.happeningNowCardReducedMotion]: C
    }),
    children: [(0, i.jsx)("img", {
      src: s.url,
      alt: e.application.name,
      className: Lo.happeningNowCardImg
    }), (0, i.jsxs)("div", {
      className: Lo.happeningNowCardForeground,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/bold",
        children: e.application.name
      }), (0, i.jsx)(w.default, {
        guildId: a.guild_id,
        users: t,
        max: 4,
        className: Lo.happeningNowAvatars
      }), (0, i.jsx)(u.Text, {
        className: Lo.happeningNowAvatarNames,
        variant: "text-xs/normal",
        children: t.length > 1 ? Lc.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
          username: n,
          count: t.length - 1
        }) : Lc.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
          username: n
        })
      }), (0, i.jsx)(u.Text, {
        variant: "text-md/medium",
        className: H(Lo.happeningNowJoin, {
          [Lo.happeningNowJoinReducedMotion]: C
        }),
        children: Lc.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
      }), null != r ? (0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        className: Lo.happeningNowChannelAndGuildName,
        children: Lc.default.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
          channelName: (0, F.truncateText)(a.name, 25),
          serverName: (0, F.truncateText)(r, 25)
        })
      }) : null]
    })]
  })
}

function L6(L) {
  let {
    renderAll: e
  } = L, [a, t] = n.useState(e), C = (0, La.default)({
    guildId: null
  }), s = a ? C : C.slice(0, 8);
  return n.useEffect(() => {
    (0, K.fetchShelf)({
      guildId: null
    })
  }, []), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: Lo.activityGridHeader,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/medium",
          className: Lo.activityGridSubheader,
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES_SUBHEADER
        })]
      }), e ? null : (0, i.jsxs)(u.Clickable, {
        className: Lo.activityGridToggle,
        onClick: () => t(L => !L),
        children: [(0, i.jsx)(u.Text, {
          variant: "text-sm/medium",
          className: Lo.activityGridToggleText,
          children: a ? Lc.default.Messages.EMBEDDED_ACTIVITIES_SEE_FEWER_ACTIVITIES : Lc.default.Messages.EMBEDDED_ACTIVITIES_SEE_MORE_ACTIVITIES
        }), (0, i.jsx)(R.default, {
          className: H(Lo.activityGridToggleIcon, {
            [Lo.activityGridToggleIconRotated]: !a
          })
        })]
      })]
    }), (0, i.jsx)("div", {
      className: Lo.activityGrid,
      children: s.map(L => (0, i.jsx)(L4, {
        activityItem: L
      }, L.application.id))
    })]
  })
}

function L4(L) {
  var e;
  let {
    activityItem: a
  } = L, {
    analyticsLocations: t
  } = (0, m.default)(), C = (0, Ls.default)({
    applicationId: a.application.id,
    size: 512
  }), s = (0, o.useStateFromStores)([Z.default], () => Z.default.useReducedMotion), l = (null === (e = a.application.embeddedActivityConfig) || void 0 === e ? void 0 : e.activity_preview_video_asset_id) != null ? (0, Lt.default)(a.application.id, a.application.embeddedActivityConfig.activity_preview_video_asset_id) : null, r = (0, o.useStateFromStoresArray)([X.default, v.default], () => X.default.getUsersHavePlayedByApp(a.application.id).filter(L => {
    var e;
    return (null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) !== L
  }).map(L => v.default.getUser(L)).filter(y.isNotNullish), [a.application.id]), V = null != r[0] ? (0, F.truncateText)(W.default.getName(null, null, r[0]), 25) : null, d = null;
  null != V && r.length > 1 ? d = Lc.default.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN_AND_MORE.format({
    username1: V,
    extras: r.length - 1
  }) : null != V && (d = Lc.default.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN.format({
    username1: V
  }));
  let [c, M] = n.useState(!1), [E, I] = n.useState(c);
  n.useEffect(() => {
    c && I(!0)
  }, [c]);
  let _ = () => M(!0),
    T = () => M(!1),
    f = null == a.application.maxParticipants || -1 === a.application.maxParticipants ? Lc.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : Lc.default.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({
      count: a.application.maxParticipants
    });
  return (0, i.jsxs)(Lr.ClickableLink, {
    to: {
      pathname: Ld.Routes.ACTIVITY_DETAILS(a.application.id),
      state: {
        analyticsLocations: t
      }
    },
    className: H(Lo.activityCard, {
      [Lo.activityCardReducedMotion]: s
    }),
    onMouseEnter: _,
    onFocus: _,
    onMouseLeave: T,
    onBlur: T,
    children: [(0, i.jsxs)("div", {
      className: Lo.activityCardImageContainer,
      children: [(0, i.jsx)("img", {
        src: C.url,
        alt: a.application.name,
        className: Lo.activityCardImage
      }), !s && null != l && E ? (0, i.jsx)("div", {
        className: H(Lo.video, {
          [Lo.videoFadeOut]: !c
        }),
        onAnimationEnd: () => c ? null : I(!1),
        children: (0, i.jsx)(k.default, {
          className: Lo.video,
          src: l,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: Lo.activityCardDetails,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-xl/extrabold",
          children: a.application.name
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/semibold",
          className: Lo.activityCardParticipants,
          children: f
        })]
      }), r.length > 0 ? (0, i.jsx)("div", {
        className: Lo.activityCardSocialProofContainer,
        children: (0, i.jsxs)("div", {
          className: Lo.activityCardUsersHavePlayedContainer,
          children: [(0, i.jsx)(w.default, {
            users: r,
            guildId: void 0,
            max: 4
          }), null != d ? (0, i.jsx)(u.Text, {
            variant: "text-sm/medium",
            className: Lo.activityCardUsersHavePlayedText,
            children: d
          }) : null]
        })
      }) : (0, i.jsx)(i.Fragment, {
        children: a.application.tags.length > 0 ? (0, i.jsx)("div", {
          className: Lo.activityCardTagContainer,
          children: a.application.tags.slice(0, 3).map(L => (0, i.jsx)("div", {
            className: Lo.activityCardTag,
            children: (0, i.jsx)(u.Text, {
              variant: "text-xs/semibold",
              children: L
            })
          }, L))
        }) : null
      }), (0, i.jsxs)("div", {
        className: H(Lo.activityCardHoverHint, {
          [Lo.activityCardHoverHintReducedMotion]: s
        }),
        children: [(0, i.jsx)(u.Text, {
          variant: "text-sm/semibold",
          children: Lc.default.Messages.LEARN_MORE
        }), (0, i.jsx)(B.default, {
          width: 16,
          height: 16
        })]
      })]
    })]
  })
}

function L7() {
  return (0, i.jsxs)("div", {
    className: Lo.celebrateContainer,
    id: Lj,
    children: [(0, i.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      children: Lc.default.Messages.EMBEDDED_ACTIVITIES_HOW_YOU_CAN_CELEBRATE_WITH_US
    }), (0, i.jsxs)("div", {
      className: Lo.celebrateCardGrid,
      children: [(0, i.jsxs)(u.Clickable, {
        tag: "a",
        href: Lb,
        target: "_blank",
        className: Lo.celebrateCardContainer,
        onClick: () => P.default.track(Ld.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
          section: "share_nitro"
        }),
        children: [(0, i.jsx)("img", {
          src: LD,
          className: Lo.celebrateNitroIcon,
          alt: Lc.default.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          className: Lo.celebrateCardHeader,
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_SHARE_THE_GIFT_OF_NITRO
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-sm/normal",
          className: Lo.celebrateCardSubheader,
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_SHARE_THREE_TRIALS.format({
            nitroLink: Lb
          })
        }), (0, i.jsx)("div", {
          className: Lo.celebrateCardFiller
        }), (0, i.jsx)("img", {
          className: Lo.celebrateCardImage,
          src: LN,
          alt: Lc.default.Messages.EMBEDDED_ACTIVITIES_SHARE_NITRO_TRIAL_ALT
        })]
      }), (0, i.jsxs)(u.Clickable, {
        tag: "a",
        href: LO,
        target: "_blank",
        className: Lo.celebrateCardContainer,
        onClick: () => {
          P.default.track(Ld.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
            section: "disxcore_merch"
          })
        },
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          className: Lo.celebrateCardHeader,
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_EXCLUSIVE_BIRTHDAY_MERCH
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-sm/normal",
          className: Lo.celebrateCardSubheader,
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_VISIT_OUR_MERCH_STORE.format({
            merchStoreLink: LO
          })
        }), (0, i.jsx)("div", {
          className: Lo.celebrateCardFiller
        }), (0, i.jsx)("img", {
          className: Lo.celebrateCardImage,
          src: Lh,
          alt: Lc.default.Messages.EMBEDDED_ACTIVITIES_MERCH_STORE_ALT
        })]
      }), (0, i.jsxs)(u.Clickable, {
        tag: "a",
        href: LB,
        target: "_blank",
        className: Lo.celebrateCardContainer,
        onClick: L => {
          var e;
          P.default.track(Ld.AnalyticEvents.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, {
            section: "town_hall"
          }), null === (e = (0, T.default)(LB)) || void 0 === e || e(L)
        },
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          className: Lo.celebrateCardHeader,
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_TITLE
        }), (0, i.jsx)(u.Heading, {
          variant: "heading-sm/normal",
          className: Lo.celebrateCardSubheader,
          children: Lc.default.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_DESCRIPTION.format({
            clickHandler: (0, T.default)(LB)
          })
        }), (0, i.jsx)("div", {
          className: Lo.celebrateCardFiller
        }), (0, i.jsx)("img", {
          className: Lo.celebrateCardImage,
          src: LA,
          alt: Lc.default.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_IMG_ALT
        })]
      })]
    })]
  })
}

function L3() {
  return (0, i.jsx)("div", {
    className: Lo.kitBashContainer,
    children: (0, i.jsx)(Ln.BirthdayKitBash, {})
  })
}

function L5() {
  return (0, i.jsx)(Li.BirthdayActivitiesRouteGuard, {
    children: (0, i.jsx)(Lw, {})
  })
}(l = C || (C = {})).SHARE_NITRO = "share_nitro", l.DISXCORE_MERCH = "disxcore_merch", l.TOWN_HALL = "town_hall"