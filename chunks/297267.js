"use strict";
n.r(t), n.d(t, {
  openCreateGuildModal: function() {
    return f
  },
  updateCreateGuildModal: function() {
    return h
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  l = n("42963"),
  o = n("599110"),
  u = n("169626"),
  a = n("243338"),
  s = n("49111"),
  c = n("149806");

function d(e, t, n, i) {
  return (0, r.jsx)(u.default, {
    onSuccess: t => {
      l.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.SUCCESS), e.onClose(), null == i || i(t)
    },
    onSlideChange: e => (function(e, t) {
      switch (e) {
        case a.CreateGuildSlideTypes.GUILD_TEMPLATES:
          l.default.flowStepOrStart(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.GUILD_TEMPLATES), o.default.track(s.AnalyticEvents.OPEN_MODAL, {
            type: "Create Guild Templates",
            location: t
          });
          break;
        case a.CreateGuildSlideTypes.CUSTOMIZE_GUILD:
          l.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.GUILD_CREATE), o.default.track(s.AnalyticEvents.OPEN_MODAL, {
            type: "Create Guild Step 2",
            location: t
          });
          break;
        case a.CreateGuildSlideTypes.CREATION_INTENT:
          o.default.track(s.AnalyticEvents.OPEN_MODAL, {
            type: "Server Intent Discovery",
            location: t
          });
          break;
        case a.CreateGuildSlideTypes.JOIN_GUILD:
          l.default.flowStep(c.FlowType.CREATE_GUILD, c.CreateGuildSteps.JOIN_GUILD), o.default.track(s.AnalyticEvents.OPEN_MODAL, {
            type: "Join Guild",
            location: t
          })
      }
    })(e, n),
    initialSlide: t,
    hasJoinButton: !0,
    ...e
  })
}
let f = e => {
    let {
      initialSlide: t,
      location: n,
      onSuccess: r
    } = e;
    (0, i.openModal)(e => d(e, t, n, r), {
      modalKey: a.CREATE_GUILD_MODAL_KEY
    })
  },
  h = e => {
    let {
      slide: t,
      location: n
    } = e;
    (0, i.updateModal)(a.CREATE_GUILD_MODAL_KEY, e => d(e, t, n))
  }