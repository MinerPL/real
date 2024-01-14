"use strict";
n.r(t), n.d(t, {
  TutorialType: function() {
    return s
  },
  EmbeddedActivityTutorial: function() {
    return g
  }
});
var a, s, i = n("37983"),
  l = n("884691"),
  r = n("446674"),
  o = n("77078"),
  u = n("545158"),
  d = n("244201"),
  c = n("550766"),
  E = n("478272"),
  f = n("812204"),
  _ = n("685665"),
  h = n("42203"),
  C = n("58608"),
  T = n("599110"),
  I = n("49111"),
  S = n("994428"),
  N = n("782340"),
  A = n("314796");
(a = s || (s = {})).BOOSTING = "BOOSTING", a.NITRO = "NITRO", a.BASH_OUT = "BASH_OUT", a.GARTIC_PHONE = "GARTIC_PHONE", a.GAME_NIGHT = "GAME_NIGHT", a.KRUNKER_STRIKE = "KRUNKER_STRIKE";
let p = "https://cdn.discordapp.com/attachments/860252504826445825/1029516100356018217/Activities_NUX_GL_1.mp4",
  m = "https://cdn.discordapp.com/attachments/887469171804356628/916446867586416660/activities-video-poster-512.png",
  g = e => {
    let {
      channelId: t,
      markAsDismissed: n,
      tutorialType: a
    } = e, {
      analyticsLocation: s,
      analyticsType: g,
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
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_BOOSTING, analyticsType: "embedded_activity_discovery_tutorial", description: N.default.Messages.EMBEDDED_ACTIVITY_NOTICE_WTP_DESCRIPTION, learnMore: !0, title: N.default.Messages.EMBEDDED_ACTIVITY_NOTICE_TITLE, videoPosterUrl: m, videoUrl: p, ctaText: N.default.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: N.default.Messages.DISMISS
          };
        case "NITRO":
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_NITRO, analyticsType: "embedded_activity_nitro_discovery_tutorial", description: N.default.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_DESCRIPTION, learnMore: !0, title: N.default.Messages.EMBEDDED_ACTIVITY_NOTICE_NITRO_TITLE, videoPosterUrl: m, videoUrl: p, ctaText: N.default.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT, dismissText: N.default.Messages.DISMISS
          };
        case "BASH_OUT":
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_BASH_OUT, analyticsType: "embedded_activity_bash_out_tutorial", description: N.default.Messages.EMBEDDED_ACTIVITY_NOTICE_BASH_OUT_DESCRIPTION, learnMore: !1, title: N.default.Messages.EMBEDDED_ACTIVITIES_AVAILABLE_NOW, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037963592227635230/bash_out.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1037967755955146762/bash_out.mp4", ctaText: N.default.Messages.PLAY, dismissText: N.default.Messages.DISMISS
          };
        case "GARTIC_PHONE":
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_GARTIC_PHONE, analyticsType: "embedded_activity_gartic_phone_tutorial", description: N.default.Messages.EMBEDDED_ACTIVITY_GARTIC_PHONE_DESCRIPTION, learnMore: !1, title: N.default.Messages.EMBEDDED_ACTIVITY_GARTIC_PHONE_TITLE, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1083484393609367563/23_023_GarticPhone_Web_Coachmark_English.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1083484048539779173/23_023_GarticPhone_Web_Coachmark_English.mp4", ctaText: N.default.Messages.PLAY_NOW, dismissText: N.default.Messages.MAYBE_LATER
          };
        case "GAME_NIGHT":
          return {
            analyticsLocation: f.default.ACTIVITIES_COACH_MARK_GAME_NIGHT, analyticsType: "embedded_activity_game_night_tutorial", description: N.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_BODY, learnMore: !1, title: N.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT_HEADING, videoPosterUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg", videoUrl: "https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4", ctaText: N.default.Messages.PLAY_NOW, dismissText: N.default.Messages.MAYBE_LATER
          };
        case "KRUNKER_STRIKE":
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_KRUNKER_STRIKE, analyticsType: "embedded_activity_krunker_strike_tutorial", description: N.default.Messages.KRUNKER_STRIKE_COACHMARK_DESCRIPTION, learnMore: !1, title: N.default.Messages.KRUNKER_STRIKE_COACHMARK_TITLE, videoPosterUrl: "https://cdn.discordapp.com/assets/activities/krunker_strike_poster.jpg", videoUrl: "https://cdn.discordapp.com/assets/activities/krunker_strike_coachmark_video.mp4", ctaText: N.default.Messages.KRUNKER_STRIKE_COACHMARK_BUTTON_ACCEPT, dismissText: N.default.Messages.KRUNKER_STRIKE_COACHMARK_BUTTON_CANCEL, ctaOnClick: () => {
              (0, u.default)("https://discord.com/activities/1011683823555199066")
            }
          };
        default:
          return {
            analyticsLocation: f.default.ACTIVITY_COACH_MARK_NITRO, analyticsType: "", description: "", learnMore: !1, title: "", videoPosterUrl: "", videoUrl: "", ctaText: "", dismissText: ""
          }
      }
    }(a), {
      analyticsLocations: x,
      AnalyticsLocationProvider: b
    } = (0, _.default)(s);
    l.useEffect(() => {
      T.default.track(I.AnalyticEvents.TOOLTIP_VIEWED, {
        type: g
      })
    }, [g]);
    let U = (0, d.useAppContext)(),
      G = U === I.AppContext.POPOUT,
      j = (0, r.useStateFromStores)([h.default], () => h.default.getChannel(t), [t]);
    return (0, i.jsx)(b, {
      children: (0, i.jsx)("div", {
        className: A.wrapper,
        children: (0, i.jsx)("div", {
          className: A.container,
          children: (0, i.jsxs)("div", {
            className: A.content,
            children: [(0, i.jsx)(C.default, {
              className: A.video,
              src: D,
              poster: P,
              width: 224,
              height: 126,
              loop: !0,
              muted: !0,
              autoPlay: !0
            }), (0, i.jsx)("div", {
              className: A.header,
              children: (0, i.jsx)(o.Heading, {
                className: A.headerText,
                variant: "text-sm/bold",
                color: "always-white",
                children: M
              })
            }), (0, i.jsxs)(o.Text, {
              className: A.subheaderText,
              variant: "text-xs/normal",
              color: "always-white",
              children: [L, v ? (0, i.jsxs)(i.Fragment, {
                children: [" ", (0, i.jsx)(o.Anchor, {
                  className: A.learnMoreLink,
                  href: "https://support.discord.com/hc/articles/4422142836759",
                  children: N.default.Messages.LEARN_MORE
                })]
              }) : null]
            }), (0, i.jsxs)("div", {
              className: A.ctaActionWrapper,
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
                  n(S.ContentDismissActionType.UNKNOWN), null != j && ((0, E.default)({
                    channel: j.isGuildVoice() ? j : void 0,
                    guildId: j.guild_id,
                    locationObject: {
                      page: I.AnalyticsPages.GUILD_CHANNEL,
                      section: I.AnalyticsSections.GUILD_CHANNEL_LIST,
                      object: I.AnalyticsObjects.ACTIVITIES_COACH_MARK,
                      objectType: I.AnalyticsObjectTypes.ACTIVITY
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