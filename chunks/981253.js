"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("539405"),
  s = n("415518"),
  o = n("910340"),
  r = n("49111"),
  d = n("6791"),
  u = n("782340"),
  c = n("134333");

function f() {
  return (0, i.jsx)("div", {
    className: c.footer,
    children: (0, i.jsx)(a.Button, {
      color: a.Button.Colors.GREEN,
      size: a.Button.Sizes.SMALL,
      className: c.ctaButton,
      children: u.default.Messages.OVERLAY_NEWS_GO_LIVE_CTA
    })
  })
}

function h(e) {
  switch (e.type) {
    case d.OverlayNudgeTypes.GO_LIVE_VOICE: {
      let {
        game: t,
        voiceGuild: c
      } = e, {
        trackView: h,
        trackClick: p
      } = (0, o.makeAnalyticsTrackers)(d.OverlayNotificationType.GoLiveNudge, {
        notif_type: d.OverlayNotificationType.GoLiveNudge
      });
      return {
        colorScheme: s.ColorSchemes.PRIMARY,
        icon: n("484876"),
        title: null,
        body: u.default.Messages.OVERLAY_NEWS_GO_LIVE_BODY.format({
          game: t.name,
          server: c.toString()
        }),
        hint: () => (0, i.jsx)(f, {}),
        renderFooter: () => (0, i.jsx)(f, {}),
        onNotificationShow: () => {
          h()
        },
        onNotificationClick: (e, t) => {
          p("unlock"), l.default.updateNotificationStatus(t), l.default.setInstanceLocked(!1), (0, a.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("451863").then(n.bind(n, "451863"));
            return t => (0, i.jsx)(e, {
              ...t,
              selectSource: !1,
              guildId: c.id,
              analyticsLocation: r.AnalyticsLocations.OVERLAY_NUDGE
            })
          })
        },
        onDismissClick: () => {
          p("dismiss")
        }
      }
    }
    case d.OverlayNudgeTypes.GO_LIVE_NON_VOICE: {
      let {
        game: t
      } = e, {
        trackView: c,
        trackClick: h
      } = (0, o.makeAnalyticsTrackers)(d.OverlayNotificationType.GoLiveNonVoiceNudge, {
        notif_type: d.OverlayNotificationType.GoLiveNonVoiceNudge
      });
      return {
        colorScheme: s.ColorSchemes.PRIMARY,
        icon: n("484876"),
        title: null,
        body: u.default.Messages.OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL.format({
          game: t.name
        }),
        hint: () => (0, i.jsx)(f, {}),
        renderFooter: () => (0, i.jsx)(f, {}),
        onNotificationShow: () => {
          c()
        },
        onNotificationClick: (e, t) => {
          h("unlock"), l.default.updateNotificationStatus(t), l.default.setInstanceLocked(!1), (0, a.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("451863").then(n.bind(n, "451863"));
            return t => (0, i.jsx)(e, {
              ...t,
              selectSource: !1,
              selectGuild: !0,
              analyticsLocation: r.AnalyticsLocations.OVERLAY_NUDGE
            })
          })
        },
        onDismissClick: () => {
          h("dismiss")
        }
      }
    }
  }
}