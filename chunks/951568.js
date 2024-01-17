"use strict";
n.r(t), n.d(t, {
  TutorialType: function() {
    return s
  },
  EmbeddedActivityTutorial: function() {
    return N
  }
});
var a, s, i = n("37983"),
  l = n("884691"),
  r = n("446674"),
  o = n("77078"),
  u = n("545158"),
  d = n("244201"),
  c = n("550766"),
  f = n("478272"),
  E = n("812204"),
  _ = n("685665"),
  h = n("42203"),
  C = n("58608"),
  I = n("599110"),
  T = n("49111"),
  S = n("994428"),
  m = n("782340"),
  p = n("314796");
(a = s || (s = {})).BOOSTING = "BOOSTING", a.NITRO = "NITRO", a.BASH_OUT = "BASH_OUT", a.GARTIC_PHONE = "GARTIC_PHONE", a.GAME_NIGHT = "GAME_NIGHT", a.KRUNKER_STRIKE = "KRUNKER_STRIKE";
let A = "https://cdn.discordapp.com/attachments/860252504826445825/1029516100356018217/Activities_NUX_GL_1.mp4",
  g = "https://cdn.discordapp.com/attachments/887469171804356628/916446867586416660/activities-video-poster-512.png",
  N = e => {
    let {
      channelId: t,
      markAsDismissed: n,
      tutorialType: a
    } = e, {
      analyticsLocation: s,
      analyticsType: N,
      ctaText: R,
      dismissText: O,
      description: L,
      learnMore: v,
      title: M,
      videoPosterUrl: P,
      videoUrl: D,
      ctaOnClick: y
    } = function(e) {
      switch (e) {
        case "BOOSTING":
          return {
            analyticsLocation: E.default.ACTIVITY_COACH_MARK_BOOSTING, analyticsType: "embedded_activity_discovery_tutorial", description: m.default.Messages.EMBEDDED_ACTIVITY_NOTICE_WTP_DESCRIPTION, learnMore: !0, title: m.default.Messages.EMBEDDED_ACTIVITY_NOTICE_TITLE, videoPosterUrl: g, videoUrl: A, ctaText: m.default.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: m.default.Messages.DISMISS
          };
        case "NITRO":
          return {
            analyticsLocation: E.default.ACTIVITY_COACH_MARK_NITRO, analyticsType: "embedded_activity_nitro_discovery_tutorial", description: m.default.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_DESCRIPTION, learnMore: !0, title: m.default.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_TITLE, videoPosterUrl: g, videoUrl: A, ctaText: m.default.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: m.default.Messages.DISMISS
          };
        case "BASH_OUT":
          return {
            analyticsLocation: E.default.ACTIVITY_COACH_MARK_BASH_OUT, analyticsType: "embedded_activity_bash_out_tutorial", description: m.default.Messages.EMBEDDED_ACTIVITY_NOTICE_BASH_OUT_DESCRIPTION, learnMore: !1, title: m.default.Messages.EMBEDDED_ACTIVITIES_AVAILABLE_NOW, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037963592227635230/bash_out.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037967755955146762/bash_out.mp4", ctaText: m.default.Messages.PLAY, dismissText: m.default.Messages.DISMISS
          };
        case "GARTIC_PHONE":
          return {
            analyticsLocation: E.default.ACTIVITY_COACH_MARK_GARTIC_PHONE, analyticsType: "embedded_activity_gartic_phone_tutorial", description: m.default.Messages.EMBEDDED_ACTIVITY_GARTIC_PHONE_DESCRIPTION, learnMore: !1, title: m.default.Messages.EMBEDDED_ACTIVITY_GARTIC_PHONE_TITLE, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1083484393609367563/23_023_GarticPhone_Web_Coachmark_English.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1083484048539779173/23_023_GarticPhone_Web_Coachmark_English.mp4", ctaText: m.default.Messages.PLAY_NOW, dismissText: m.default.Messages.MAYBE_LATER
          };
        case "GAME_NIGHT":
          return {
            analyticsLocation: E.default.ACTIVITIES_COACH_MARK_GAME_NIGHT, analyticsType: "embedded_activity_game_night_tutorial", description: m.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_BODY, learnMore: !1, title: m.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_HEADING, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4", ctaText: m.default.Messages.PLAY_NOW, dismissText: m.default.Messages.MAYBE_LATER
          };
        case "KRUNKER_STRIKE":
          return {
            analyticsLocation: E.default.ACTIVITY_COACH_MARK_KRUNKER_STRIKE, analyticsType: "embedded_activity_krunker_strike_tutorial", description: m.default.Messages.KRUNKER_STRIKE_COACHMARK_DESCRIPTION, learnMore: !1, title: m.default.Messages.KRUNKER_STRIKE_COACHMARK_TITLE, videoPosterUrl: "https://cdn.discordapp.com/assets/activities/krunker_strike_poster.jpg", videoUrl: "https://cdn.discordapp.com/assets/activities/krunker_strike_coachmark_video.mp4", ctaText: m.default.Messages.KRUNKER_STRIKE_COACHMARK_BUTTON_ACCEPT, dismissText: m.default.Messages.KRUNKER_STRIKE_COACHMARK_BUTTON_CANCEL, ctaOnClick: () => {
              (0, u.default)("https://discord.com/activities/1011683823555199066")
            }
          };
        default:
          return {
            analyticsLocation: E.default.ACTIVITY_COACH_MARK_NITRO, analyticsType: "", description: "", learnMore: !1, title: "", videoPosterUrl: "", videoUrl: "", ctaText: "", dismissText: ""
          }
      }
    }(a), {
      analyticsLocations: x,
      AnalyticsLocationProvider: b
    } = (0, _.default)(s);
    l.useEffect(() => {
      I.default.track(T.AnalyticEvents.TOOLTIP_VIEWED, {
        type: N
      })
    }, [N]);
    let U = (0, d.useAppContext)(),
      G = U === T.AppContext.POPOUT,
      j = (0, r.useStateFromStores)([h.default], () => h.default.getChannel(t), [t]);
    return (0, i.jsx)(b, {
      children: (0, i.jsx)("div", {
        className: p.wrapper,
        children: (0, i.jsx)("div", {
          className: p.container,
          children: (0, i.jsxs)("div", {
            className: p.content,
            children: [(0, i.jsx)(C.default, {
              className: p.video,
              src: D,
              poster: P,
              width: 224,
              height: 126,
              loop: !0,
              muted: !0,
              autoPlay: !0
            }), (0, i.jsx)("div", {
              className: p.header,
              children: (0, i.jsx)(o.Heading, {
                className: p.headerText,
                variant: "text-sm/bold",
                color: "always-white",
                children: M
              })
            }), (0, i.jsxs)(o.Text, {
              className: p.subheaderText,
              variant: "text-xs/normal",
              color: "always-white",
              children: [L, v ? (0, i.jsxs)(i.Fragment, {
                children: [" ", (0, i.jsx)(o.Anchor, {
                  className: p.learnMoreLink,
                  href: "https://support.discord.com/hc/articles/4422142836759",
                  children: m.default.Messages.LEARN_MORE
                })]
              }) : null]
            }), (0, i.jsxs)("div", {
              className: p.ctaActionWrapper,
              children: [(0, i.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                onClick: () => {
                  n(S.ContentDismissActionType.UNKNOWN)
                },
                children: O
              }), (0, i.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                look: o.Button.Looks.INVERTED,
                onClick: null != y ? y : () => {
                  n(S.ContentDismissActionType.UNKNOWN), null != j && ((0, f.default)({
                    channel: j.isGuildVoice() ? j : void 0,
                    guildId: j.guild_id,
                    locationObject: {
                      page: T.AnalyticsPages.GUILD_CHANNEL,
                      section: T.AnalyticsSections.GUILD_CHANNEL_LIST,
                      object: T.AnalyticsObjects.ACTIVITIES_COACH_MARK,
                      objectType: T.AnalyticsObjectTypes.ACTIVITY
                    },
                    openInPopout: G,
                    analyticsLocations: x
                  }), (0, c.fetchShelf)({
                    guildId: j.guild_id
                  }))
                },
                children: R
              })]
            })]
          })
        })
      })
    })
  }