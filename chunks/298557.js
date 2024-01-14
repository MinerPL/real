"use strict";
l.r(t), l.d(t, {
  default: function() {
    return ev
  }
}), l("313619"), l("654714"), l("287168"), l("956660"), l("222007"), l("511434"), l("702976"), l("424973");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("597755"),
  c = l.n(r),
  o = l("132710"),
  d = l.n(o),
  u = l("394846"),
  p = l("316693"),
  m = l("617258"),
  _ = l("446674"),
  f = l("669491"),
  h = l("769846"),
  C = l("77078"),
  g = l("549825"),
  I = l("590177"),
  A = l("180612"),
  E = l("798609"),
  v = l("612039"),
  x = l("545158"),
  R = l("389153"),
  T = l("650509"),
  N = l("913678"),
  P = l("462274"),
  y = l("69927"),
  j = l("861370"),
  O = l("978970"),
  S = l("393414"),
  L = l("485422"),
  D = l("915639"),
  M = l("271938"),
  b = l("471671"),
  Y = l("9074"),
  k = l("837899"),
  H = l("425190"),
  G = l("433487"),
  F = l("599110"),
  w = l("315102"),
  U = l("306160"),
  B = l("449008"),
  V = l("794818"),
  W = l("721698"),
  K = l("349503"),
  z = l("388647"),
  Z = l("598981"),
  q = l("136110"),
  X = l("146691"),
  J = l("682777"),
  Q = l("726902"),
  $ = l("998944"),
  ee = l("915267"),
  et = l("331793"),
  el = l("412707"),
  ei = l("646186"),
  ea = l("721908"),
  en = l("178350"),
  es = l("608129"),
  er = l("149462"),
  ec = l("370570"),
  eo = l("137246"),
  ed = l("750947"),
  eu = l("49111"),
  ep = l("782340"),
  em = l("746974"),
  e_ = l("103104");
let ef = d.parserFor(er.default),
  eh = d.reactFor(d.ruleOutput(er.default, "react")),
  eC = (0, m.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
  eg = "redirect_to_support_server",
  eI = "start_application_install",
  eA = e => "".concat(location.protocol, "//").concat(location.host).concat(eu.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
  eE = e => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null
  };

function ev(e) {
  var t, n, r, o;
  let d, {
      applicationId: m,
      initialSection: h
    } = e,
    E = (0, el.useApplicationDirectoryHistory)(e => e.guildId),
    k = (0, Z.default)(),
    H = a.useRef(m),
    er = a.useRef(!1),
    eE = (0, _.useStateFromStores)([z.default], () => z.default.getFetchState({
      applicationId: m,
      guildId: E
    }) === z.FetchState.FETCHING),
    ev = a.useRef({
      applicationId: void 0,
      guildId: void 0
    }),
    {
      similarApplications: eT,
      similarLoadId: eN
    } = (0, _.useStateFromStoresObject)([z.default], () => {
      let e = {
          applicationId: m,
          guildId: E
        },
        t = z.default.getSimilarApplications(e);
      return null == t ? t = z.default.getSimilarApplications(ev.current) : ev.current = e, {
        similarApplications: null == t ? void 0 : t.applications,
        similarLoadId: null == t ? void 0 : t.loadId
      }
    }),
    eP = a.useMemo(() => null == eT ? void 0 : eT.slice(0, 3), [eT]),
    ey = (0, _.useStateFromStores)([K.default], () => K.default.getApplicationFetchState(m)),
    [ej, eO] = a.useState(void 0),
    [eS, eL] = a.useState(null != h ? h : ed.ApplicationDirectoryProfileSections.GENERAL),
    eD = (0, _.useStateFromStores)([b.default], () => b.default.isFocused()),
    eM = (0, _.useStateFromStores)([D.default], () => D.default.locale),
    eb = a.useRef(m),
    eY = (0, _.useStateFromStores)([K.default], () => {
      let e = K.default.getApplication(m);
      return null == e ? e = K.default.getApplication(eb.current) : eb.current = m, e
    }),
    ek = (0, ea.default)({
      application: eY
    }),
    eH = (0, _.useStateFromStores)([M.default], () => M.default.getSessionId());
  (0, y.usePageTitle)({
    location: null == eY ? void 0 : eY.name
  });
  let eG = a.useCallback(async () => {
    try {
      var e;
      let t = null == eY ? void 0 : null === (e = eY.guild) || void 0 === e ? void 0 : e.id;
      if (null != t) {
        (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
          application_id: eY.id,
          guild_id: t
        });
        let e = {
          page: eu.AnalyticsPages.APPLICATION_DIRECTORY
        };
        await (0, V.startLurking)(t, e, {
          setsHistorySnapshot: !1
        })
      }
    } catch {}
  }, [eY]);
  a.useEffect(() => {
    if (null == eY) return;
    let e = new URL(location.href);
    if (k && null != eH && "true" === e.searchParams.get(eg)) {
      e.searchParams.delete(eg);
      let t = e.pathname + e.search;
      (0, S.replaceWith)(t), eG()
    }
  }, [k, eG, eH, eY]);
  let eF = a.useCallback(() => {
    var e;
    let t = null == eY ? void 0 : null === (e = eY.guild) || void 0 === e ? void 0 : e.id;
    null != t && (k ? eG() : (0, J.redirectToLogin)({
      [eg]: "true"
    }))
  }, [eY, k, eG]);
  a.useEffect(() => {
    null != m && (eS === ed.ApplicationDirectoryProfileSections.GENERAL ? (0, ei.replaceAppDirectoryURLWith)("".concat(eu.Routes.APPLICATION_DIRECTORY_PROFILE(m)).concat(location.search)) : (0, ei.replaceAppDirectoryURLWith)("".concat(eu.Routes.APPLICATION_DIRECTORY_PROFILE(m, eS.toLowerCase())).concat(location.search)))
  }, [m, eS]), a.useEffect(() => {
    null != m && W.getApplication(m)
  }, [m]), a.useEffect(() => {
    if ((null == eY ? void 0 : eY.directory_entry) != null) {
      let e = eY.directory_entry,
        t = null == e ? void 0 : e.popular_application_commands;
      if (null != t) {
        let e = t.map(e => (0, R.buildCommand)({
          rootCommand: e,
          command: e,
          applicationId: e.application_id
        }));
        eO(e)
      } else eO(void 0)
    }
  }, [eY]), a.useEffect(() => {
    null != m && H.current !== m && (eL(ed.ApplicationDirectoryProfileSections.GENERAL), H.current = void 0)
  }, [m]);
  let ew = w.default.getApplicationIconURL({
      id: null !== (r = null == eY ? void 0 : eY.id) && void 0 !== r ? r : "-1",
      icon: null == eY ? void 0 : eY.icon,
      size: eC
    }),
    eU = (0, P.default)(ew, f.default.unsafe_rawColors.PRIMARY_800.css),
    eB = (0, j.default)({
      id: null !== (o = null == eY ? void 0 : eY.id) && void 0 !== o ? o : "",
      label: ep.default.Messages.COPY_ID_APPLICATION
    }),
    {
      canInstall: eV,
      install: eW
    } = (0, X.useInstallApplication)(eY, E),
    eK = null === (t = (0, el.getPreviousView)()) || void 0 === t ? void 0 : t.type;
  a.useEffect(() => {
    (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: "product",
      previous_page: eK,
      application_id: eY.id,
      guild_id: E,
      shown_mutual_guilds_count: ek.length
    })
  }, [null == eY ? void 0 : eY.id, E, ek]);
  let ez = a.useMemo(() => {
      var e;
      let t = null == eY ? void 0 : null === (e = eY.install_params) || void 0 === e ? void 0 : e.permissions;
      if (null != t) return O.OrderedPermissions.filter(e => p.default.has(p.default.deserialize(t), e))
    }, [null == eY ? void 0 : null === (n = eY.install_params) || void 0 === n ? void 0 : n.permissions]),
    eZ = a.useCallback(e => {
      eL(e), er.current = !0, (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
        application_id: eY.id,
        guild_id: E,
        tab_name: e
      })
    }, [null == eY ? void 0 : eY.id, E]),
    eq = a.useMemo(() => {
      var e, t, l;
      return null !== (l = (null !== (t = null == eY ? void 0 : null === (e = eY.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(ex).filter(B.isNotNullish)) && void 0 !== l ? l : []
    }, [eY]),
    eX = a.useCallback((e, t) => {
      if (e.type === eu.CarouselMediaTypes.IMG) {
        let t = eq.filter(e => e.type === eu.CarouselMediaTypes.IMG),
          a = t.findIndex(t => t === e);
        if (a < 0) return;
        let n = t.map(e => ({
          src: (0, I.transformAssetURL)(e.src),
          width: e.width,
          height: e.height
        }));
        (0, C.openModalLazy)(async () => {
          let {
            default: e
          } = await l.el("100814").then(l.bind(l, "100814"));
          return t => {
            let {
              ...l
            } = t;
            return (0, i.jsx)(e, {
              ...l,
              items: n,
              startingIndex: a,
              modalCarouselItemClassName: em.appSlide
            })
          }
        })
      }
    }, [eq]),
    eJ = a.useCallback(e => {
      (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
        current_page: "product",
        category: e.name,
        category_id: e.id,
        application_id: eY.id,
        guild_id: E
      }), (0, ei.goToCategory)({
        categoryId: e.id
      })
    }, [eY, E]);
  a.useEffect(() => {
    null != m && W.getSimilarApplications({
      applicationId: m,
      guildId: E
    })
  }, [m, E]);
  let eQ = a.useCallback(e => {
      let {
        application: t,
        mutualGuilds: l
      } = e;
      (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
        current_page: "product",
        application_id: eY.id,
        suggested_application_id: t.id,
        load_id: eN,
        guild_id: E,
        shown_mutual_guilds_count: l.length
      }), (0, ei.goToApplication)({
        applicationId: t.id
      })
    }, [null == eY ? void 0 : eY.id, eN, E]),
    e$ = a.useCallback(() => {
      null != eY && (0, x.default)(function(e, t) {
        let l = "https://".concat(eu.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
          i = new URLSearchParams;
        return i.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), i.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), i.append("tf_12094971213335", t.id), i.append("ticket_form_id", "12275528604823"), i.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(l, "?").concat(i.toString())
      }(eM, eY))
    }, [eM, eY]),
    e0 = a.useCallback(e => (0, i.jsxs)(C.Menu, {
      navId: "application-directory-profile",
      "aria-label": ep.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
      onClose: e,
      onSelect: void 0,
      children: [(0, i.jsx)(C.MenuGroup, {
        children: (0, i.jsx)(C.MenuItem, {
          id: "report",
          label: ep.default.Messages.REPORT_APP,
          color: "danger",
          action: e$
        })
      }), null != eB ? (0, i.jsx)(C.MenuGroup, {
        children: eB
      }) : null]
    }), [eB, e$]),
    [e1, e7] = (0, v.default)(!1, 1e3),
    e4 = a.useCallback(() => {
      null != eY && (F.default.track(eu.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
        source: "product_page",
        application_id: eY.id,
        guild_id: E
      }), (0, U.copy)(eA(eY.id)), e7(!0))
    }, [eY, e7, E]);
  a.useEffect(() => {
    let e = new URL(location.href);
    if (k && "true" === e.searchParams.get(eI)) {
      e.searchParams.delete(eI);
      let t = e.pathname + e.search;
      (0, S.replaceWith)(t), eW("product_page")
    }
  }, [k, eW]);
  let e8 = a.useCallback(() => {
      null != eY && (k ? eW("product_page") : (F.default.track(eu.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
        application_id: m,
        guild_id: E,
        auth_type: null != eY.custom_install_url ? "custom_url" : "in_app",
        source: "product_page",
        device_platform: u.isMobile ? "mobile_web" : "desktop_web"
      }), (0, J.redirectToLogin)({
        [eI]: "true"
      })))
    }, [eY, k, eW, m, E]),
    {
      applicationSubscriptionListingsShown: e9
    } = (0, T.default)({
      applicationId: null == eY ? void 0 : eY.id,
      groupListingId: null == eY ? void 0 : eY.primary_sku_id,
      guildId: E
    }),
    e3 = (null == eY ? void 0 : eY.id) === "936929561302675456",
    [e6, e2] = a.useState(!1),
    [e5, te] = a.useState(!1),
    [tt, tl] = a.useState(!0),
    ti = e => {
      null != e && e2(e.scrollHeight > e.clientHeight)
    },
    ta = null != ez && ez.length > 0,
    tn = (null == eY ? void 0 : eY.flags) != null,
    ts = a.useMemo(() => {
      let e = [],
        t = !0;
      switch (eS) {
        case ed.ApplicationDirectoryProfileSections.GENERAL: {
          var l, a;
          let n = null == eY ? void 0 : null === (l = eY.directory_entry) || void 0 === l ? void 0 : l.detailed_description;
          null != n && n.length > 0 ? (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: em.sectionHeader,
              variant: "heading-md/semibold",
              children: ep.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("div", {
              ref: ti,
              className: s({
                [em.descriptionClamp]: !e5,
                [em.descriptionClampSafari]: !e5 && "Safari" === c.name
              }),
              children: (0, i.jsx)(Y.default, {
                className: em.detailedDescription,
                parser: ef,
                output: eh,
                children: n
              })
            }), (e6 || e5) && (0, i.jsx)(eR, {
              isViewAll: e5,
              onToggle: () => {
                te(e => !e)
              }
            })]
          })), t = !1) : (null == eY ? void 0 : null === (a = eY.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0 ? e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: em.sectionHeader,
              variant: "heading-md/semibold",
              children: ep.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
            }), (0, i.jsx)("span", {
              children: eY.directory_entry.short_description
            })]
          })) : (null == eY ? void 0 : eY.description) != null && e.push((0, i.jsx)(L.default, {
            className: em.description,
            userBio: eY.description
          })), null != ej && ej.length > 0 && (e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: em.sectionHeader,
              variant: "heading-md/semibold",
              children: ep.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
            }), (0, i.jsx)(en.default, {
              className: em.commandList,
              commands: ej
            })]
          })), t = !0);
          break
        }
        case ed.ApplicationDirectoryProfileSections.IMAGES: {
          let t = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              className: em.errorImage,
              src: e_,
              "aria-hidden": !0,
              alt: ""
            }), (0, i.jsx)(C.Heading, {
              variant: "heading-xl/semibold",
              children: ep.default.Messages.ERRORS_IMAGE_NOT_FOUND
            })]
          });
          eq.forEach((e, t) => {
            null != eY ? e.alt = ep.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
              index: t + 1,
              totalImages: eq.length,
              name: eY.name
            }) : e.alt = ep.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
          }), e.push((0, i.jsx)(A.default, {
            className: em.carousel,
            themedPagination: !0,
            items: eq,
            autoplayInterval: 8e3,
            paused: !eD,
            videoAutoPlay: !0,
            onCurrentItemClick: eX,
            errorComponent: t,
            onImageLoad: e => {
              let {
                src: t,
                loadTimeMs: l
              } = e;
              null != l && null != eY && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                application_id: eY.id,
                load_time_ms: l,
                src: t
              })
            }
          }));
          break
        }
        case ed.ApplicationDirectoryProfileSections.PREMIUM:
          e9 && (null == eY ? void 0 : eY.primary_sku_id) != null && e.push((0, i.jsx)(N.default, {
            applicationId: eY.id,
            applicationPrimarySkuId: null == eY ? void 0 : eY.primary_sku_id,
            analyticsLocation: eu.AnalyticsLocations.APP_DIRECTORY_PROFILE,
            forcesTransitionToGuild: !0
          }));
          break;
        case ed.ApplicationDirectoryProfileSections.PRIVACY:
          ta && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: em.sectionHeader,
              variant: "heading-md/semibold",
              children: ep.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
            }), (0, i.jsx)(g.default, {
              className: em.commandList,
              grantedPermissions: ez,
              grantedPermissionsHeader: ep.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
            })]
          })), tn && e.push((0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(C.Heading, {
              className: em.sectionHeader,
              variant: "heading-md/semibold",
              children: ep.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
            }), (0, i.jsx)(es.default, {
              application: eY
            })]
          }))
      }
      return tl(t), e.map((e, t) => (0, i.jsx)("div", {
        className: em.section,
        children: e
      }, t))
    }, [eY, e9, eq, ej, ez, eX, eD, eS, e5, e6, ta, tn]),
    tr = a.useMemo(() => {
      let e = H.current === m,
        t = e && !er.current,
        l = [{
          sectionName: ed.ApplicationDirectoryProfileSections.GENERAL,
          sectionText: ep.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
        }];
      return eq.length > 0 && (l.push({
        sectionName: ed.ApplicationDirectoryProfileSections.IMAGES,
        sectionText: ep.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
      }), t && h === ed.ApplicationDirectoryProfileSections.IMAGES && eL(h)), e9 && (l.push({
        sectionName: ed.ApplicationDirectoryProfileSections.PREMIUM,
        sectionText: ep.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
      }), t && h === ed.ApplicationDirectoryProfileSections.PREMIUM && eL(h)), (ta || tn) && (l.push({
        sectionName: ed.ApplicationDirectoryProfileSections.PRIVACY,
        sectionText: ep.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
      }), t && h === ed.ApplicationDirectoryProfileSections.PRIVACY && eL(h)), l
    }, [eq.length, e9, ta, tn, h, m]);
  return d = null == eY ? null == ey || ey === K.FetchState.FETCHING ? (0, i.jsx)(ee.default, {
    loading: ey === K.FetchState.FETCHING
  }) : (0, i.jsx)("div", {
    className: em.page,
    children: (0, i.jsxs)("div", {
      className: em.emptyContainer,
      children: [(0, i.jsx)("img", {
        className: em.emptyImage,
        src: e_,
        alt: ""
      }), (0, i.jsx)(C.Heading, {
        variant: "heading-xl/semibold",
        children: ep.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
      })]
    })
  }) : (0, i.jsxs)(ee.default, {
    loading: ey === K.FetchState.FETCHING,
    children: [(0, i.jsx)("div", {
      style: {
        backgroundColor: eU
      },
      className: em.headerBanner
    }), (0, i.jsxs)("div", {
      className: em.page,
      children: [(0, i.jsxs)("div", {
        className: em.header,
        children: [(0, i.jsxs)("div", {
          className: em.headerSidebar,
          children: [(0, i.jsx)("img", {
            className: em.headerIcon,
            alt: "",
            "aria-hidden": !0,
            src: ew,
            width: eC,
            height: eC
          }), (0, i.jsx)($.default, {
            application: eY,
            mutualGuilds: ek,
            mutualGuildShownMax: 3,
            compact: !0
          })]
        }), (0, i.jsxs)("div", {
          className: em.headerContent,
          children: [(0, i.jsxs)("div", {
            className: em.headerNameAndButtons,
            children: [(0, i.jsxs)("div", {
              className: em.headerNameAndIcon,
              children: [(0, i.jsx)(C.Heading, {
                className: em.name,
                variant: "heading-xxl/semibold",
                children: eY.name
              }), e9 && (0, i.jsx)(C.Tooltip, {
                tooltipClassName: em.premiumIconTooltip,
                text: ep.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                children: e => (0, i.jsx)("img", {
                  ...e,
                  alt: ep.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                  className: em.premiumIcon,
                  src: l("92640")
                })
              }), e3 && (0, i.jsx)(et.default, {
                className: em.partnerBadge
              })]
            }), (0, i.jsxs)("div", {
              className: s(em.buttons),
              children: [(0, i.jsx)(C.Button, {
                onClick: e4,
                color: C.Button.Colors.PRIMARY,
                children: e1 ? ep.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : ep.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
              }), (0, i.jsx)(C.Button, {
                color: C.Button.Colors.BRAND,
                onClick: e8,
                disabled: !eV,
                children: ep.default.Messages.APP_DIRECTORY_PROFILE_ADD_BUTTON
              }), (0, i.jsx)(C.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: t
                  } = e;
                  return e0(t)
                },
                position: "left",
                align: "top",
                animation: C.Popout.Animation.NONE,
                children: e => (0, i.jsx)(C.Clickable, {
                  className: em.overflow,
                  ...e,
                  children: (0, i.jsx)(G.default, {
                    width: 20,
                    height: 20,
                    className: em.iconInteractive
                  })
                })
              })]
            })]
          }), (0, i.jsx)(eo.default, {
            activeSection: eS,
            setSection: eZ,
            shownSections: tr
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: em.contentContainer,
        children: [(0, i.jsxs)("div", {
          className: em.content,
          children: [ts, null != eP && eP.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [tt && (0, i.jsx)("div", {
              className: em.separator
            }), (0, i.jsxs)("div", {
              className: em.section,
              children: [(0, i.jsx)(C.Heading, {
                className: em.relatedHeader,
                variant: "eyebrow",
                children: ep.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
              }), (0, i.jsx)(ee.default, {
                loading: eE,
                children: (0, i.jsx)(Q.default, {
                  applications: eP,
                  onViewOne: eQ
                })
              })]
            })]
          }) : null]
        }), (0, i.jsx)(ec.default, {
          className: em.sidebar,
          application: eY,
          guildId: E,
          onViewCategory: eJ,
          onClickGuildWidget: eF
        })]
      })]
    })]
  }), (0, i.jsx)(q.default, {
    children: d
  })
}

function ex(e) {
  switch (e.type) {
    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
      var t;
      let l = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
      return {
        type: eu.CarouselMediaTypes.IMG, width: 0, height: 0, src: l
      };
    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
      let i = eE(e.url);
      if (null != i) return {
        type: eu.CarouselMediaTypes.YOUTUBE_VIDEO,
        youtubeVideoId: i
      }
  }
  return console.warn("Unsupported carousel item", e), null
}
let eR = e => {
    let t, {
      onToggle: l,
      isViewAll: a
    } = e;
    return t = a ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.Text, {
        className: em.showMoreButtonText,
        variant: "eyebrow",
        children: ep.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
      }), (0, i.jsx)(H.default, {
        className: em.showMoreButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.Text, {
        className: em.showMoreButtonText,
        variant: "eyebrow",
        children: ep.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
      }), (0, i.jsx)(k.default, {
        className: em.showMoreButtonIcon
      })]
    }), (0, i.jsx)(eT, {
      children: (0, i.jsx)(C.Button, {
        look: C.Button.Looks.BLANK,
        color: C.Button.Colors.TRANSPARENT,
        size: C.Button.Sizes.NONE,
        className: em.showMoreButton,
        innerClassName: em.showMoreButtonInner,
        onClick: l,
        children: t
      })
    })
  },
  eT = e => {
    let {
      className: t,
      contentClassName: l,
      children: a
    } = e;
    return (0, i.jsxs)("div", {
      className: s([em.dividerContainer, t]),
      children: [(0, i.jsx)("div", {
        className: em.divider
      }), null != a ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s(em.contentDivider, l),
          children: a
        }), (0, i.jsx)("div", {
          className: em.divider
        })]
      }) : null]
    })
  }