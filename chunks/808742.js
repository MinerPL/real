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
var l = n("49111"),
  a = n("782340"),
  s = n("65833"),
  i = n("270664"),
  r = n("763388"),
  u = n("708206"),
  o = n("787795"),
  c = n("908332"),
  d = n("850390");
let f = () => ({
    [l.HangStatusTypes.CHILLING]: {
      title: a.default.Messages.STATUS_CHILLING,
      icon: i,
      color: "#567C7E"
    },
    [l.HangStatusTypes.GAMING]: {
      title: a.default.Messages.STATUS_GAMING,
      icon: r,
      color: "#685F8C"
    },
    [l.HangStatusTypes.FOCUSING]: {
      title: a.default.Messages.STATUS_FOCUSING,
      icon: o,
      color: "#7F6956"
    },
    [l.HangStatusTypes.BRB]: {
      title: a.default.Messages.STATUS_BRB,
      icon: s,
      color: "#76567E"
    },
    [l.HangStatusTypes.EATING]: {
      title: a.default.Messages.STATUS_EATING,
      icon: u,
      color: "#717B54"
    },
    [l.HangStatusTypes.IN_TRANSIT]: {
      title: a.default.Messages.STATUS_IN_TRANSIT,
      icon: c,
      color: "#56697F"
    },
    [l.HangStatusTypes.WATCHING]: {
      title: a.default.Messages.STATUS_WATCHING,
      icon: d,
      color: "#7C5571"
    }
  }),
  T = e => {
    if ((null == e ? void 0 : e.type) !== l.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
    let t = e.state;
    return t === l.HangStatusTypes.CUSTOM ? null : f()[t]
  },
  E = e => {
    var t;
    let n = (null == e ? void 0 : e.state) != null ? e.state : null;
    return n === l.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = T(e)) || void 0 === t ? void 0 : t.title
  }