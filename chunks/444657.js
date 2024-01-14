"use strict";
n.r(t), n.d(t, {
  ActivityEntryPointTile: function() {
    return y
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("151426"),
  o = n("669491"),
  u = n("77078"),
  d = n("997289"),
  c = n("860345"),
  f = n("865821"),
  h = n("441821"),
  p = n("478272"),
  m = n("812204"),
  E = n("685665"),
  C = n("10641"),
  g = n("36562"),
  S = n("945330"),
  _ = n("381546"),
  I = n("564875"),
  T = n("82636"),
  v = n("924506"),
  x = n("599110"),
  N = n("439932"),
  A = n("784981"),
  M = n("49111"),
  R = n("954016"),
  j = n("782340"),
  L = n("38064"),
  O = n("861948");

function y(e) {
  let {
    channel: t,
    guild: n,
    width: l,
    inPopout: s,
    handleClose: i,
    userParticipantCount: r
  } = e, {
    enabled: o
  } = c.PaxVcTileActivitiesExperiment.useExperiment({
    location: "4934f1_1"
  }, {
    autoTrackExposure: !1
  });
  return l < 250 ? (0, a.jsx)(P, {
    channel: t,
    guild: n,
    width: l,
    inPopout: s,
    handleClose: i,
    userParticipantCount: r
  }) : r > 1 || o ? (0, a.jsx)(U, {
    channel: t,
    guild: n,
    width: l,
    inPopout: s,
    handleClose: i,
    userParticipantCount: r
  }) : (0, a.jsx)(b, {
    channel: t,
    guild: n,
    width: l,
    inPopout: s
  })
}

function P(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: l
  } = e, {
    analyticsLocations: s,
    AnalyticsLocationProvider: r
  } = (0, E.default)(m.default.VC_TILE_ACTIVITY_SHELF_BUTTON), c = (0, d.useAnalyticsContext)(), f = (0, u.useToken)(o.default.colors.INTERACTIVE_NORMAL).hex(), h = () => {
    (0, p.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: c.location,
      openInPopout: n,
      analyticsLocations: s
    })
  };
  return (0, a.jsx)(r, {
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.Tooltip, {
        text: j.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, a.jsx)(u.Clickable, {
            ...n,
            className: L.clickableTile,
            onClick: () => {
              null == t || t(), h()
            },
            children: (0, a.jsx)(A.default, {
              className: L.root,
              children: (0, a.jsx)("div", {
                className: L.iconContainer,
                children: (0, a.jsx)(v.default, {
                  width: 40,
                  height: 40
                })
              })
            })
          })
        }
      }), (0, a.jsx)(u.Clickable, {
        onClick: l,
        className: i((0, N.getThemeClass)(M.ThemeTypes.DARK), L.shelfButtonCloseButton),
        children: (0, a.jsx)(_.default, {
          width: 24,
          height: 24,
          className: L.closeButtonIcon,
          backgroundColor: f
        })
      })]
    })
  })
}

function b(e) {
  let {
    channel: t,
    guild: s,
    inPopout: i,
    width: r
  } = e;
  l.useEffect(() => {
    x.default.track(M.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let o = (0, d.useAnalyticsContext)(),
    {
      analyticsLocations: c,
      AnalyticsLocationProvider: f
    } = (0, E.default)(m.default.VC_TILE_ACTIVITY_INVITE);
  return (0, a.jsx)(f, {
    children: (0, a.jsxs)(A.default, {
      className: L.root,
      children: [r > 400 ? (0, a.jsx)("img", {
        src: O,
        className: L.art,
        alt: j.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
      }) : null, (0, a.jsx)(u.Text, {
        className: L.heading,
        variant: "text-md/semibold",
        children: j.default.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_INVITE
      }), (0, a.jsxs)("div", {
        className: L.buttonContainer,
        children: [(0, a.jsxs)(u.Button, {
          size: u.Button.Sizes.LARGE,
          color: u.Button.Colors.PRIMARY,
          className: L.button,
          innerClassName: L.buttonContents,
          onClick: function() {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("310688").then(n.bind(n, "310688"));
              return n => (0, a.jsx)(e, {
                ...n,
                guild: s,
                channel: t,
                source: M.InstantInviteSources.ACTIVITY_ENTRY_POINT_TILE
              })
            }, {
              contextKey: i ? u.POPOUT_MODAL_CONTEXT : u.DEFAULT_MODAL_CONTEXT
            })
          },
          children: [(0, a.jsx)(I.default, {
            width: 16,
            height: 16
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: j.default.Messages.INVITE_FRIENDS
          })]
        }), (0, a.jsxs)(u.Button, {
          size: u.Button.Sizes.LARGE,
          className: L.button,
          innerClassName: L.buttonContents,
          onClick: function() {
            (0, p.default)({
              channel: t,
              guildId: t.guild_id,
              locationObject: o.location,
              openInPopout: i,
              analyticsLocations: c
            })
          },
          children: [(0, a.jsx)(T.default, {
            width: 16,
            height: 16
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: j.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_ENTRY_POINT_TILE_CHOOSE_AN_ACTIVITY
          })]
        })]
      })]
    })
  })
}
let D = e => {
  let {
    userParticipantCount: t,
    guildId: n
  } = e, {
    enabled: a
  } = c.PaxVcTileActivitiesExperiment.useExperiment({
    location: "4934f1_2"
  }, {
    autoTrackExposure: !1
  }), l = (0, f.default)({
    guildId: n
  });
  if (a) {
    let e = new Set([R.PUTT_PARTY_APPLICATION_ID, R.LAND_IO_APPLICATION_ID, R.GARTIC_PHONE_APPLICATION_ID]);
    return l.filter(t => e.has(t.application.id))
  }
  if (2 === t) {
    let e = [],
      t = [(0, R.WATCH_YOUTUBE_PROD_APP_ID), (0, R.PUTT_PARTY_APPLICATION_ID), (0, R.CHESS_IN_THE_PARK_APP_ID)].filter(Boolean).slice(0, 3);
    return l.forEach(n => {
      let a = t.indexOf(n.application.id);
      !(a < 0) && (e[a] = n)
    }), e
  }
  return l.slice(0, 3)
};

function U(e) {
  let {
    channel: t,
    guild: n,
    handleClose: s,
    width: o,
    userParticipantCount: d
  } = e;
  l.useEffect(() => {
    x.default.track(M.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity suggestion",
      n_participants: d
    })
  }, []);
  let c = D({
      userParticipantCount: d,
      guildId: n.id
    }),
    {
      AnalyticsLocationProvider: f
    } = (0, E.default)(m.default.VC_TILE_ACTIVITY_SUGGESTION);
  return (0, a.jsx)(f, {
    children: (0, a.jsxs)(A.default, {
      className: L.root,
      children: [o > 480 ? (0, a.jsx)("img", {
        className: L.art,
        src: O,
        alt: j.default.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
      }) : null, o > 300 ? (0, a.jsx)(u.Text, {
        className: L.heading,
        variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: j.default.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_TITLE
      }) : null, (0, a.jsx)("div", {
        className: i(L.activitiesContainer, {
          [L.activitiesContainerSmol]: o <= 300
        }),
        children: c.map(e => (0, a.jsx)(h.ActivitySuggestion, {
          channel: t,
          activityItem: e,
          aspectRatio: h.ActivitySuggestion.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: L.activitySuggestion
        }, e.application.id))
      }), (0, a.jsxs)(u.Clickable, {
        className: L.checkboxContainer,
        onClick: function() {
          x.default.track(M.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: d
          }), (0, C.markDismissibleContentAsDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: j.default.Messages.DONT_SHOW_AGAIN
        })]
      }), (0, a.jsx)(u.Clickable, {
        className: L.closeButtonContainer,
        onClick: function() {
          x.default.track(M.AnalyticEvents.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: d
          }), s()
        },
        children: (0, a.jsx)(S.default, {
          className: L.closeButton
        })
      })]
    })
  })
}