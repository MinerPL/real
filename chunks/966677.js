"use strict";
a.r(e), a.d(e, {
  ConnectedSafetyHubViolationsContainer: function() {
    return R
  }
}), a("222007");
var n = a("37983"),
  i = a("884691"),
  s = a("414456"),
  l = a.n(s),
  r = a("446674"),
  u = a("779807"),
  c = a("77078"),
  o = a("461380"),
  d = a("543289"),
  _ = a("300113"),
  S = a("599110"),
  f = a("299039"),
  E = a("667963"),
  T = a("646356"),
  A = a("736393"),
  I = a("310888"),
  g = a("132206"),
  N = a("698609"),
  C = a("170213"),
  m = a("49111"),
  p = a("782340"),
  x = a("231180");
let h = t => {
    let {
      status: e,
      onClick: a,
      opened: i,
      count: s
    } = t;
    return (0, n.jsxs)(c.Clickable, {
      className: x.header,
      onClick: a,
      children: [(0, n.jsx)("div", {
        className: x.headerIconWrapper,
        children: (0, n.jsx)(u.WarningIcon, {
          color: "active" === e ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_MUTED,
          width: 24,
          height: 24
        })
      }), (0, n.jsxs)("div", {
        className: x.title,
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          color: "text-normal",
          children: "active" === e ? p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE.format({
            count: s.toString()
          }) : p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED.format({
            count: s.toString()
          })
        }), (0, n.jsx)(c.Heading, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "active" === e ? p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE : p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED
        })]
      }), (0, n.jsx)("div", {
        className: x.caret,
        children: (0, n.jsx)(o.default, {
          width: 18,
          height: 18,
          direction: i ? o.default.Directions.UP : o.default.Directions.DOWN
        })
      })]
    })
  },
  U = () => (0, n.jsxs)("div", {
    className: x.emptyState,
    children: [(0, n.jsxs)("div", {
      className: x.iconContainer,
      children: [(0, n.jsx)("div", {
        className: x.iconBackground,
        children: (0, n.jsx)(_.default, {
          className: x.icon
        })
      }), (0, n.jsx)(d.default, {
        className: x.stars
      })]
    }), (0, n.jsx)(c.Heading, {
      variant: "heading-md/bold",
      className: x.emptyStateText,
      children: p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
    }), (0, n.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: x.emptyStateSubtext,
      children: p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
    })]
  }),
  O = () => (0, n.jsx)("div", {
    className: x.emptyState,
    children: (0, n.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: x.emptyStateSubtext,
      children: p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
    })
  }),
  H = t => {
    let {
      timestamp: e
    } = t;
    return (0, n.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: x.timestamp,
      children: (0, A.getClassificationRelativeIncidentTime)(e)
    })
  },
  v = () => (0, n.jsx)(c.Text, {
    variant: "text-xs/bold",
    className: x.newBadge,
    children: p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
  }),
  F = t => {
    var e;
    let {
      classification: i
    } = t, {
      id: s,
      description: r,
      max_expiration_time: u
    } = i, o = f.default.extractTimestamp(s), d = (0, I.useIsNewClassification)(i), _ = (0, E.useIsSafetyHubDisplayGuildViolationsEnabled)("violations_container"), S = new Date(u), T = S.toDateString();
    return (0, n.jsx)(c.Clickable, {
      onClick: () => {
        (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await a.el("825138").then(a.bind(a, "825138"));
          return e => (0, n.jsx)(t, {
            classificationId: s,
            source: C.SafetyHubAnalyticsActionSource.StandingTab,
            ...e
          })
        })
      },
      className: l(x.itemDetail, {
        [x.itemDetailNew]: d
      }),
      children: (0, n.jsxs)("div", {
        className: x.descriptionContainer,
        children: [d ? (0, n.jsx)(v, {}) : (0, n.jsx)(H, {
          timestamp: o
        }), (0, n.jsx)(c.Heading, {
          variant: "heading-lg/normal",
          children: _ && null != i.guild_metadata ? p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
            guildName: null == i ? void 0 : null === (e = i.guild_metadata) || void 0 === e ? void 0 : e.name,
            description: r,
            descriptionHook: t => (0, n.jsx)(c.Text, {
              tag: "span",
              variant: "heading-lg/bold",
              children: t
            })
          }) : p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format({
            description: r,
            descriptionHook: t => (0, n.jsx)(c.Text, {
              tag: "span",
              variant: "heading-lg/bold",
              children: t
            })
          })
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: x.expirationDate,
          children: S > new Date ? p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format({
            expirationDate: T
          }) : p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format({
            expirationDate: T
          })
        })]
      })
    }, s)
  },
  D = t => {
    let {
      status: e,
      classifications: a
    } = t, [s, l] = i.useState(!1), [u, o] = i.useState(3), d = (0, g.useSafetyHubAccountStanding)(), _ = (0, r.useStateFromStores)([T.default], () => T.default.getIsDsaEligible()), f = i.useMemo(() => a.slice(0, u), [a, u]);
    i.useEffect(() => {
      s && S.default.track(m.AnalyticEvents.SAFETY_HUB_ACTION, {
        action: C.SafetyHubAnalyticsActions.ViewViolationsDropdown,
        account_standing: d.state,
        classification_ids: f.map(t => Number(t.id)),
        source: C.SafetyHubAnalyticsActionSource.StandingTab,
        is_violative_content_shown: !1,
        is_dsa_eligible: _
      })
    }, [s, d.state, f, _]);
    let E = a.length - f.length > 3 ? 3 : a.length - f.length;
    return (0, n.jsxs)("div", {
      className: x.dropdown,
      children: [(0, n.jsx)(h, {
        status: e,
        onClick: () => l(t => !t),
        opened: s,
        count: a.length
      }), s && (0, n.jsxs)("div", {
        className: x.items,
        children: [(0, n.jsx)(c.TabBar.Separator, {
          style: {
            height: "1px",
            width: "100%"
          }
        }), f.length > 0 && f.map(t => (0, n.jsx)(F, {
          classification: t
        }, t.id)), f.length < a.length && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(c.TabBar.Separator, {
            style: {
              height: "1px",
              width: "100%"
            }
          }), (0, n.jsx)("button", {
            className: x.paginationButton,
            onClick: () => o(t => t + E),
            children: p.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
              nextPageSize: E
            })
          })]
        }), 0 === f.length && "active" === e && (0, n.jsx)(U, {}), 0 === f.length && "expired" === e && (0, n.jsx)(O, {})]
      })]
    })
  },
  R = () => {
    let t = (0, N.useActiveSafetyHubClassifications)(),
      e = (0, N.useExpiredSafetyHubClassifications)();
    return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(D, {
        status: "active",
        classifications: t
      }), (0, n.jsx)(D, {
        status: "expired",
        classifications: e
      })]
    })
  }