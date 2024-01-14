"use strict";
n.r(t), n.d(t, {
  getHangStatusOptions: function() {
    return f
  },
  getHangStatusDetails: function() {
    return T
  },
  getHangStatusText: function() {
    return E
  }
});
var a = n("49111"),
  l = n("782340"),
  s = n("185769"),
  i = n("156589"),
  r = n("608249"),
  u = n("500246"),
  o = n("445449"),
  c = n("52880"),
  d = n("978173");
let f = () => ({
    [a.HangStatusTypes.CHILLING]: {
      title: l.default.Messages.STATUS_CHILLING,
      icon: i,
      color: "#567C7E"
    },
    [a.HangStatusTypes.GAMING]: {
      title: l.default.Messages.STATUS_GAMING,
      icon: r,
      color: "#685F8C"
    },
    [a.HangStatusTypes.FOCUSING]: {
      title: l.default.Messages.STATUS_FOCUSING,
      icon: o,
      color: "#7F6956"
    },
    [a.HangStatusTypes.BRB]: {
      title: l.default.Messages.STATUS_BRB,
      icon: s,
      color: "#76567E"
    },
    [a.HangStatusTypes.EATING]: {
      title: l.default.Messages.STATUS_EATING,
      icon: u,
      color: "#717B54"
    },
    [a.HangStatusTypes.IN_TRANSIT]: {
      title: l.default.Messages.STATUS_IN_TRANSIT,
      icon: c,
      color: "#56697F"
    },
    [a.HangStatusTypes.WATCHING]: {
      title: l.default.Messages.STATUS_WATCHING,
      icon: d,
      color: "#7C5571"
    }
  }),
  T = e => {
    if ((null == e ? void 0 : e.type) !== a.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
    let t = e.state;
    return t === a.HangStatusTypes.CUSTOM ? null : f()[t]
  };

function E(e) {
  var t;
  let n = (null == e ? void 0 : e.state) != null ? e.state : null;
  return n === a.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = T(e)) || void 0 === t ? void 0 : t.title
}