"use strict";
a.r(e), a.d(e, {
  ConnectedSafetyHubViolationsContainer: function() {
    return F
  }
}), a("222007");
var n = a("37983"),
  i = a("884691"),
  s = a("414456"),
  l = a.n(s),
  r = a("779807"),
  u = a("77078"),
  c = a("461380"),
  o = a("543289"),
  d = a("300113"),
  _ = a("599110"),
  S = a("299039"),
  f = a("667963"),
  T = a("736393"),
  E = a("310888"),
  A = a("132206"),
  I = a("698609"),
  g = a("170213"),
  N = a("49111"),
  C = a("782340"),
  m = a("231180");
let x = t => {
    let {
      status: e,
      onClick: a,
      opened: i,
      count: s
    } = t;
    return (0, n.jsxs)(u.Clickable, {
      className: m.header,
      onClick: a,
      children: [(0, n.jsx)("div", {
        className: m.headerIconWrapper,
        children: (0, n.jsx)(r.WarningIcon, {
          color: "active" === e ? u.tokens.colors.INTERACTIVE_ACTIVE : u.tokens.colors.INTERACTIVE_MUTED,
          width: 24,
          height: 24
        })
      }), (0, n.jsxs)("div", {
        className: m.title,
        children: [(0, n.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          color: "text-normal",
          children: "active" === e ? C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE.format({
            count: s.toString()
          }) : C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED.format({
            count: s.toString()
          })
        }), (0, n.jsx)(u.Heading, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "active" === e ? C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE : C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED
        })]
      }), (0, n.jsx)("div", {
        className: m.caret,
        children: (0, n.jsx)(c.default, {
          width: 18,
          height: 18,
          direction: i ? c.default.Directions.UP : c.default.Directions.DOWN
        })
      })]
    })
  },
  h = () => (0, n.jsxs)("div", {
    className: m.emptyState,
    children: [(0, n.jsxs)("div", {
      className: m.iconContainer,
      children: [(0, n.jsx)("div", {
        className: m.iconBackground,
        children: (0, n.jsx)(d.default, {
          className: m.icon
        })
      }), (0, n.jsx)(o.default, {
        className: m.stars
      })]
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/bold",
      className: m.emptyStateText,
      children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
    }), (0, n.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: m.emptyStateSubtext,
      children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
    })]
  }),
  p = () => (0, n.jsx)("div", {
    className: m.emptyState,
    children: (0, n.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: m.emptyStateSubtext,
      children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
    })
  }),
  O = t => {
    let {
      timestamp: e
    } = t;
    return (0, n.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: m.timestamp,
      children: (0, T.getClassificationRelativeIncidentTime)(e)
    })
  },
  H = () => (0, n.jsx)(u.Text, {
    variant: "text-xs/bold",
    className: m.newBadge,
    children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
  }),
  U = t => {
    var e;
    let {
      classification: i
    } = t, {
      id: s,
      description: r,
      max_expiration_time: c
    } = i, o = S.default.extractTimestamp(s), d = (0, E.useIsNewClassification)(i), _ = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("violations_container"), T = new Date(c), A = T.toDateString();
    return (0, n.jsx)(u.Clickable, {
      onClick: () => {
        (0, u.openModalLazy)(async () => {
          let {
            default: t
          } = await a.el("825138").then(a.bind(a, "825138"));
          return e => (0, n.jsx)(t, {
            classificationId: s,
            source: g.SafetyHubAnalyticsActionSource.StandingTab,
            ...e
          })
        })
      },
      className: l(m.itemDetail, {
        [m.itemDetailNew]: d
      }),
      children: (0, n.jsxs)("div", {
        className: m.descriptionContainer,
        children: [d ? (0, n.jsx)(H, {}) : (0, n.jsx)(O, {
          timestamp: o
        }), (0, n.jsx)(u.Heading, {
          variant: "heading-lg/normal",
          children: _ && null != i.guild_metadata ? C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
            guildName: null == i ? void 0 : null === (e = i.guild_metadata) || void 0 === e ? void 0 : e.guild_name,
            description: r,
            descriptionHook: t => (0, n.jsx)(u.Text, {
              tag: "span",
              variant: "heading-lg/bold",
              children: t
            })
          }) : C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format({
            description: r,
            descriptionHook: t => (0, n.jsx)(u.Text, {
              tag: "span",
              variant: "heading-lg/bold",
              children: t
            })
          })
        }), (0, n.jsx)(u.Text, {
          variant: "text-sm/normal",
          className: m.expirationDate,
          children: T > new Date ? C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format({
            expirationDate: A
          }) : C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format({
            expirationDate: A
          })
        })]
      })
    }, s)
  },
  v = t => {
    let {
      status: e,
      classifications: a
    } = t, [s, l] = i.useState(!1), [r, c] = i.useState(3), o = (0, A.useSafetyHubAccountStanding)(), d = i.useMemo(() => a.slice(0, r), [a, r]);
    i.useEffect(() => {
      s && _.default.track(N.AnalyticEvents.SAFETY_HUB_ACTION, {
        action: g.SafetyHubAnalyticsActions.ViewViolationsDropdown,
        account_standing: o.state,
        classification_ids: d.map(t => Number(t.id)),
        source: g.SafetyHubAnalyticsActionSource.StandingTab,
        is_violative_content_shown: !1
      })
    }, [s, o.state, d]);
    let S = a.length - d.length > 3 ? 3 : a.length - d.length;
    return (0, n.jsxs)("div", {
      className: m.dropdown,
      children: [(0, n.jsx)(x, {
        status: e,
        onClick: () => l(t => !t),
        opened: s,
        count: a.length
      }), s && (0, n.jsxs)("div", {
        className: m.items,
        children: [(0, n.jsx)(u.TabBar.Separator, {
          style: {
            height: "1px",
            width: "100%"
          }
        }), d.length > 0 && d.map(t => (0, n.jsx)(U, {
          classification: t
        }, t.id)), d.length < a.length && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(u.TabBar.Separator, {
            style: {
              height: "1px",
              width: "100%"
            }
          }), (0, n.jsx)("button", {
            className: m.paginationButton,
            onClick: () => c(t => t + S),
            children: C.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
              nextPageSize: S
            })
          })]
        }), 0 === d.length && "active" === e && (0, n.jsx)(h, {}), 0 === d.length && "expired" === e && (0, n.jsx)(p, {})]
      })]
    })
  },
  F = () => {
    let t = (0, I.useActiveSafetyHubClassifications)(),
      e = (0, I.useExpiredSafetyHubClassifications)();
    return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(v, {
        status: "active",
        classifications: t
      }), (0, n.jsx)(v, {
        status: "expired",
        classifications: e
      })]
    })
  }