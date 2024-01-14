"use strict";
n.r(t), n.d(t, {
  openStageChannelSettings: function() {
    return c
  },
  openEndGuildEventConfirmationModal: function() {
    return g
  },
  openStageChannelAudienceNoticeModal: function() {
    return m
  },
  openStageBlockedUsersSheet: function() {
    return h
  },
  openEndStageModal: function() {
    return v
  },
  shouldShowBlockedUsers: function() {
    return E
  },
  navigateToStage: function() {
    return p
  },
  showChannelChangeConfirmationAlert: function() {
    return y
  }
});
var s = n("37983");
n("884691");
var i = n("551042"),
  r = n("144491"),
  a = n("271938"),
  o = n("325861"),
  d = n("834052"),
  u = n("534471"),
  l = n("151642"),
  f = n("49111"),
  _ = n("625611");

function c(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("435768").then(n.bind(n, "435768"));
    return n => (0, s.jsx)(t, {
      ...n,
      channel: e
    })
  }, {
    contextKey: t === f.AppContext.POPOUT ? _.POPOUT_MODAL_CONTEXT : _.DEFAULT_MODAL_CONTEXT
  })
}

function g(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("312953").then(n.bind(n, "312953"));
    return n => (0, s.jsx)(t, {
      ...n,
      channel: e
    })
  }, {
    contextKey: t === f.AppContext.POPOUT ? _.POPOUT_MODAL_CONTEXT : _.DEFAULT_MODAL_CONTEXT
  })
}

function m(e) {}

function h(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.el("203966").then(n.bind(n, "203966"));
    return n => (0, s.jsx)(i, {
      ...n,
      channel: e,
      onAccept: t
    })
  })
}

function v(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("281645").then(n.bind(n, "281645"));
    return n => (0, s.jsx)(t, {
      ...n,
      channel: e
    })
  }, {
    contextKey: t === f.AppContext.POPOUT ? _.POPOUT_MODAL_CONTEXT : _.DEFAULT_MODAL_CONTEXT
  })
}

function E(e) {
  let t = a.default.getId(),
    n = (0, l.getStageBlockedUsersCount)(e),
    s = o.default.isModerator(t, e);
  return !s && n > 0
}

function p(e, t) {
  var l;
  let f = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  t !== e.id && (0, u.setIsOnStartStageScreen)(!0), l = e, (0, r.transitionToChannel)(l.id), t !== e.id && f && ! function(e) {
    let t = a.default.getId(),
      r = o.default.isModerator(t, e.id),
      u = d.default.isLive(e.id);
    r && !u ? c(e) : r && u && function(e) {
      (0, i.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("337649").then(n.bind(n, "337649"));
        return n => (0, s.jsx)(t, {
          ...n,
          channel: e
        })
      })
    }(e)
  }(e)
}

function y(e, t) {
  return (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.el("371895").then(n.bind(n, "371895"));
    return n => (0, s.jsx)(i, {
      channel: e,
      onConfirm: t,
      ...n
    })
  }), !0
}