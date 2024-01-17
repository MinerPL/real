"use strict";
n.r(t), n.d(t, {
  default: function() {
    return el
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("974667"),
  o = n("432710"),
  u = n("446674"),
  d = n("151426"),
  c = n("77078"),
  f = n("939488"),
  E = n("737960"),
  _ = n("74456"),
  h = n("206230"),
  C = n("302437"),
  I = n("665182"),
  T = n("442174"),
  S = n("69927"),
  m = n("10641"),
  p = n("384997"),
  A = n("539938"),
  g = n("155084"),
  N = n("393414"),
  R = n("582713"),
  O = n("970366"),
  L = n("5667"),
  v = n("161778"),
  M = n("982108"),
  P = n("42203"),
  D = n("778588"),
  y = n("556081"),
  x = n("826684"),
  b = n("599110"),
  U = n("439932"),
  G = n("288518"),
  j = n("486503"),
  w = n("916650"),
  k = n("803524"),
  F = n("7643"),
  H = n("785770"),
  B = n("260488"),
  V = n("500526"),
  Y = n("452229"),
  W = n("196986"),
  K = n("410560"),
  z = n("433591"),
  q = n("973199"),
  Q = n("49111"),
  Z = n("994428"),
  X = n("782340"),
  J = n("618223"),
  $ = n("305794");

function ee() {
  let e = s.useRef(null),
    t = (0, B.useMessageRequestsCount)(),
    n = (0, V.default)(),
    i = (0, k.useListHasSingleMessageRequest)(),
    u = (0, _.useIsRejectAllMessageRequestsEnabled)(),
    d = s.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(X.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: f
    } = (0, F.useMessageRequestActions)({
      onError: d
    }),
    E = (0, C.default)("message-requests-list"),
    {
      channelId: h
    } = (0, H.useMessageRequestSidebarState)(),
    I = s.useCallback(() => {
      let e = n.map(e => e.channel.id);
      f(e)
    }, [n, f]),
    T = s.useCallback(e => {
      var t, s;
      let {
        row: r
      } = e, o = n[r], u = null === (s = n[r + 1]) || void 0 === s ? void 0 : null === (t = s.channel) || void 0 === t ? void 0 : t.id, d = o.channel.id;
      return (0, a.jsx)(K.default, {
        index: r,
        className: l({
          [J.selected]: null != h && h === d,
          [J.siblingSelected]: null != h && h === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: i
      }, d)
    }, [i, n, h]),
    S = s.useCallback(() => (0, a.jsxs)(x.default, {
      className: J.sectionTitle,
      children: [t > 0 ? X.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({
        count: t
      }) : X.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE, u && t > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.Text, {
          className: J.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, a.jsx)(c.Button, {
          onClick: I,
          look: c.ButtonLooks.LINK,
          color: c.ButtonColors.LINK,
          size: c.ButtonSizes.SMALL,
          className: J.clearAllButton,
          "aria-label": X.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: X.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "title"), [t, I, u]);
  return (n.length !== t && g.default.increment({
    name: o.MetricEvents.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === n.length) ? (0, a.jsx)(W.default, {
    section: q.MessageRequestSections.REQUESTS
  }) : (0, a.jsx)(r.ListNavigatorProvider, {
    navigator: E,
    children: (0, a.jsx)(r.ListNavigatorContainer, {
      children: t => {
        let {
          ref: s,
          role: i,
          ...l
        } = t;
        return (0, a.jsx)(c.List, {
          className: J.list,
          innerRole: i,
          innerAriaLabel: X.default.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: q.LIST_SECTION_HEIGHT,
          rowHeight: q.LIST_ROW_HEIGHT,
          renderSection: S,
          renderRow: T,
          sections: [n.length],
          chunkSize: 30,
          fade: !0,
          ...l
        }, "message-requests-list")
      }
    })
  })
}

function et(e) {
  let {
    pageWidth: t,
    onSidebarResize: n
  } = e, s = (0, u.useStateFromStores)([M.default], () => M.default.getSidebarState(M.MESSAGE_REQUESTS_BASE_CHANNEL_ID)), i = (0, u.useStateFromStores)([P.default], () => P.default.getChannel(null == s ? void 0 : s.channelId));
  if (null == s || s.type !== R.SidebarType.VIEW_MESSAGE_REQUEST || null == i || !i.isPrivate()) return null;
  let l = t - Q.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
  return (0, a.jsx)(I.default, {
    sidebarType: I.ChatSidebarType.MessageRequestSidebar,
    maxWidth: l,
    onWidthChange: n,
    children: (0, a.jsx)(T.default, {
      channel: i,
      baseChannelId: M.MESSAGE_REQUESTS_BASE_CHANNEL_ID
    })
  })
}
let en = function(e) {
    let {
      markAsDismissed: t
    } = e;
    return (0, a.jsx)(L.default, {
      header: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
      content: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
      buttonCTA: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
      className: J.messageRequestCoachmark,
      onClick: () => t(Z.ContentDismissActionType.UNKNOWN),
      markAsDismissed: t,
      caretPosition: L.CaretPosition.TOP_CENTER,
      headerClassName: J.header
    })
  },
  ea = e => {
    let t = (0, w.default)(),
      n = () => D.default.hasLayers() || (0, c.hasAnyModalOpen)(),
      i = (0, u.useStateFromStores)([h.default], () => h.default.useReducedMotion);
    return s.useEffect(() => {
      (0, m.requestMarkDismissibleContentAsShown)(d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
    }, []), (0, a.jsx)(p.default, {
      contentTypes: [d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
      children: s => {
        let {
          visibleContent: l,
          markAsDismissed: r
        } = s;
        if (l === d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK) return (0, a.jsx)(c.Popout, {
          renderPopout: () => t ? (0, a.jsx)(en, {
            markAsDismissed: r
          }) : (0, a.jsx)(L.default, {
            header: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
            buttonCTA: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
            secondaryButtonCTA: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: J.messageRequestCoachmark,
            onClick: e => {
              e.stopPropagation(), (0, N.transitionTo)(Q.Routes.SETTINGS("privacy-and-safety"))
            },
            markAsDismissed: r,
            caretPosition: L.CaretPosition.TOP_CENTER,
            headerClassName: J.header
          }),
          position: "bottom",
          align: "center",
          animation: i ? c.Popout.Animation.NONE : c.Popout.Animation.TRANSLATE,
          shouldShow: !n(),
          spacing: 16,
          children: () => e.children
        });
        return e.children
      }
    })
  };

function es(e) {
  let {
    section: t
  } = e;
  return t === q.MessageRequestSections.SPAM ? (0, a.jsx)(z.default, {}) : (0, a.jsx)(ee, {})
}
let ei = (0, E.default)(function(e) {
  let {
    width: t
  } = e, n = (0, B.useMessageRequestsCount)();
  s.useEffect(() => {
    f.setHomeLink(Q.Routes.MESSAGE_REQUESTS), (0, O.trackAppUIViewed)("message-requests"), b.default.track(Q.AnalyticEvents.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), g.default.increment({
      name: o.MetricEvents.MESSAGE_REQUEST_VIEW
    })
  }, []);
  let i = (0, u.useStateFromStores)([v.default], () => v.default.theme),
    r = (0, Y.useSpamMessageRequestCount)(),
    [d, E] = s.useState(!1),
    _ = (0, u.useStateFromStores)([M.default, G.default, j.default], () => {
      let e = M.default.getSidebarState(M.MESSAGE_REQUESTS_BASE_CHANNEL_ID);
      return null != e && e.type === R.SidebarType.VIEW_MESSAGE_REQUEST && (G.default.isMessageRequest(e.channelId) || j.default.isSpam(e.channelId))
    }),
    [h, C] = s.useState(q.MessageRequestSections.REQUESTS);
  return (0, S.usePageTitle)({
    location: X.default.Messages.MESSAGE_REQUESTS
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: l($.chat, J.container, {
        [$.threadSidebarOpen]: _,
        [$.threadSidebarFloating]: _ && d
      }),
      children: [(0, a.jsxs)(A.default, {
        className: (0, U.getThemeClass)(i),
        toolbar: !0,
        children: [(0, a.jsx)(A.default.Icon, {
          icon: y.default,
          "aria-hidden": !0
        }), (0, a.jsx)(ea, {
          children: (0, a.jsx)(A.default.Title, {
            children: X.default.Messages.MESSAGE_REQUESTS
          })
        }), (0, a.jsx)(A.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
          "aria-label": X.default.Messages.MESSAGE_REQUESTS,
          selectedItem: h,
          type: "top-pill",
          onItemSelect: e => {
            C(e)
          },
          className: J.tabBar,
          children: [(0, a.jsx)(c.TabBar.Item, {
            id: q.MessageRequestSections.REQUESTS,
            className: J.item,
            children: X.default.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
          }), (0, a.jsx)(c.TabBar.Item, {
            id: q.MessageRequestSections.SPAM,
            className: J.item,
            children: 0 === r ? X.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : X.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({
              count: r
            })
          })]
        })]
      }), (0, a.jsx)("div", {
        className: $.content,
        children: (0, a.jsx)(es, {
          section: h
        })
      })]
    }), _ && (0, a.jsx)(et, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        E(t)
      }
    })]
  })
});
var el = ei