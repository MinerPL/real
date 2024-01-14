"use strict";
l.r(t), l.d(t, {
  default: function() {
    return Y
  }
});
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("917351"),
  c = l("748820"),
  o = l("394846"),
  d = l("77078"),
  u = l("304580"),
  p = l("493765"),
  m = l("485328"),
  _ = l("545158"),
  f = l("69927"),
  h = l("592407"),
  C = l("393414"),
  g = l("764490"),
  I = l("246053"),
  A = l("599110"),
  E = l("701909"),
  v = l("721698"),
  x = l("599994"),
  R = l("598981"),
  T = l("412707"),
  N = l("646186"),
  P = l("49111"),
  y = l("894282"),
  j = l("782340"),
  O = l("751788");
let S = E.default.getArticleURL(P.HelpdeskArticles.APP_DIRECTORY_HEADER_LEARN_MORE);

function L(e) {
  let {
    onClose: t
  } = e, l = a.useRef(null);
  return (0, i.jsx)("div", {
    ref: l,
    className: O.closeWrapper,
    children: (0, i.jsx)(d.FocusRingScope, {
      containerRef: l,
      children: (0, i.jsx)("div", {
        className: s(O.closeContent, o.isMobile ? O.closeContentMobile : O.closeContentNotMobile),
        children: (0, i.jsx)(u.default, {
          className: s(O.closeIcon, o.isMobile ? O.closeIconMobile : O.closeIconNotMobile),
          closeAction: t,
          keybind: "ESC"
        })
      })
    })
  })
}

function D(e) {
  let {
    onTitleClick: t,
    showsLearnMoreCta: l,
    guildId: n
  } = e, r = (0, i.jsxs)(a.Fragment, {
    children: [(0, i.jsx)(g.default, {
      title: j.default.Messages.APP_DIRECTORY
    }), l && (0, i.jsx)(d.Anchor, {
      onClick: function() {
        A.default.track(P.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
          cta: "directory-help-center",
          current_page: T.ApplicationDirectoryViews.HOME,
          guild_id: n
        }), (0, _.default)(S)
      },
      children: j.default.Messages.LEARN_MORE
    })]
  });
  return (0, i.jsx)("div", {
    className: O.header,
    children: null != t ? (0, i.jsx)(x.default, {
      href: P.Routes.APPLICATION_DIRECTORY,
      children: (0, i.jsx)(d.Clickable, {
        onClick: t,
        className: s(O.titleContainer, O.clickable),
        children: r
      })
    }) : (0, i.jsx)("div", {
      className: O.titleContainer,
      children: r
    })
  })
}

function M(e) {
  let t, {
    view: l,
    onClick: a
  } = e;
  if (null == l) return null;
  switch (l.type) {
    case T.ApplicationDirectoryViews.HOME:
      t = j.default.Messages.HOME;
      break;
    case T.ApplicationDirectoryViews.SEARCH:
      t = j.default.Messages.SEARCH;
      break;
    case T.ApplicationDirectoryViews.APPLICATION:
      var n;
      t = null !== (n = null == l ? void 0 : l.applicationName) && void 0 !== n ? n : j.default.Messages.BACK;
      break;
    default:
      t = j.default.Messages.BACK
  }
  return (0, i.jsxs)(d.Clickable, {
    className: O.back,
    onClick: a,
    children: [(0, i.jsx)(I.default, {
      direction: I.default.Directions.LEFT,
      className: O.backIcon
    }), (0, i.jsx)(d.Heading, {
      className: O.backHeader,
      variant: "heading-sm/semibold",
      children: t
    })]
  })
}
let b = (0, r.debounce)(e => {
  let {
    scrollTop: t,
    scrollOffset: l,
    scrollHeight: i,
    location: a,
    guildId: n,
    sessionId: s
  } = e;
  t > 0 && A.default.track(P.AnalyticEvents.APP_DIRECTORY_PAGE_SCROLLED, {
    scroll_visible_percentile: (t + l) / i,
    guild_id: n,
    location: a,
    directory_session_id: s
  })
}, 200);

function Y(e) {
  let {
    children: t
  } = e, l = a.useRef(null), n = (0, R.default)(), r = (0, T.useApplicationDirectoryHistory)(e => e.guildId), u = (0, T.useApplicationDirectoryHistory)(e => e.entrypoint), _ = (0, T.useApplicationDirectoryHistory)(e => e.trackedOpenedFromExternalEntrypoint), g = (0, T.getCurrentView)(), I = (0, T.getPreviousView)(), E = a.useRef(), x = (null == g ? void 0 : g.type) !== T.ApplicationDirectoryViews.HOME, S = (null == g ? void 0 : g.type) === T.ApplicationDirectoryViews.APPLICATION ? null == g ? void 0 : g.applicationId : void 0;
  (0, f.usePageTitle)({
    location: j.default.Messages.APP_DIRECTORY
  });
  let Y = (null == g ? void 0 : g.type) !== T.ApplicationDirectoryViews.HOME && null != I;
  a.useEffect(() => {
    !_ && null == u && (A.default.track(P.AnalyticEvents.APP_DIRECTORY_OPENED, {
      source: T.ApplicationDirectoryEntrypointNames.EXTERNAL
    }), (0, T.setTrackedOpenedFromExternalEntrypoint)(!0))
  }, [u, _]), a.useEffect(() => {
    if (n) return m.default.setLayout(p.default), m.default.enable(), () => m.default.disable()
  }, [n]), a.useEffect(() => {
    v.getCategories()
  }, []), a.useEffect(() => {
    n && v.fetchIntegrationApplicationIdsForMyGuilds()
  }, [n]), a.useEffect(() => {
    E.current = (0, c.v4)()
  }, [null == g ? void 0 : g.type, S]);
  let k = a.useCallback(() => {
    var e, t;
    (0, C.transitionTo)(null !== (e = null == u ? void 0 : u.pathname) && void 0 !== e ? e : ""), null != u && u.name === T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != r && h.default.open(r, null !== (t = u.guildSettingsSection) && void 0 !== t ? t : void 0)
  }, [u, r]);
  return a.useEffect(() => {
    let e = e => {
      e.key === y.KeyboardKeysUpdated.ESCAPE && (e.stopPropagation(), k())
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [k]), (0, i.jsxs)(i.Fragment, {
    children: [n ? (0, i.jsx)(L, {
      onClose: k
    }) : null, (0, i.jsx)(d.AdvancedScroller, {
      className: s(O.directoryContainer, {
        [O.directoryContainerMobile]: o.isMobile,
        [O.directoryContainerTablet]: o.isTablet
      }),
      ref: l,
      onScroll: () => {
        var e, t, i;
        return b({
          scrollTop: null === (e = l.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
          scrollOffset: null === (t = l.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
          scrollHeight: null === (i = l.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
          location: null == g ? void 0 : g.type,
          guildId: r,
          sessionId: E.current
        })
      },
      children: (0, i.jsxs)("div", {
        className: O.content,
        children: [(0, i.jsx)(D, {
          onTitleClick: x ? N.goHome : void 0,
          showsLearnMoreCta: (null == g ? void 0 : g.type) === T.ApplicationDirectoryViews.HOME,
          guildId: r
        }), Y && (0, i.jsx)(M, {
          view: I,
          onClick: () => {
            (0, C.back)()
          }
        }), t]
      })
    })]
  })
}