"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("913144"),
  l = n("316272"),
  r = n("42203"),
  o = n("18494"),
  u = n("162771"),
  d = n("697218"),
  c = n("669499"),
  E = n("37016"),
  f = n("58069"),
  _ = n("586391"),
  h = n("49111");

function C(e, t) {
  var n;
  if (null == e) return;
  let a = d.default.getCurrentUser(),
    s = null === (n = r.default.getChannel(t)) || void 0 === n ? void 0 : n.isNSFW();
  s && null != a && null == a.nsfwAllowed && (0, c.openAgeGateModal)(_.AgeGateSource.NSFW_CHANNEL)
}
class T extends l.default {
  _initialize() {
    i.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), i.default.subscribe("CHANNEL_SELECT", this.handleChannelSelect), i.default.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), i.default.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), i.default.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), i.default.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure)
  }
  _terminate() {
    i.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), i.default.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect), i.default.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), i.default.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), i.default.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), i.default.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure)
  }
  handleChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    C(t, n)
  }
  handleConnectionOpen() {
    let e = u.default.getGuildId(),
      t = o.default.getChannelId();
    C(e, t)
  }
  handleAgeGateModalOpen(e) {
    let {
      source: t
    } = e;
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("673187").then(n.bind(n, "673187"));
      return n => (0, a.jsx)(e, {
        source: t,
        ...n
      })
    }, {
      modalKey: _.EXISTING_USER_AGE_GATE_MODAL_KEY,
      onCloseRequest: h.NOOP
    })
  }
  handleAgeGateSuccess() {
    (0, s.updateModal)(_.EXISTING_USER_AGE_GATE_MODAL_KEY, e => (0, a.jsx)(f.default, {
      ...e
    }))
  }
  handleAgeGateFailure(e) {
    let {
      underageMessage: t
    } = e;
    (0, s.updateModal)(_.EXISTING_USER_AGE_GATE_MODAL_KEY, e => (0, a.jsx)(E.default, {
      underageMessage: t,
      ...e
    }))
  }
  handleAgeGateModalClose() {
    (0, s.closeModal)(_.EXISTING_USER_AGE_GATE_MODAL_KEY)
  }
}
var I = new T