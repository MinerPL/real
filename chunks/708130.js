"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
}), E("222007");
var t = E("446674"),
  o = E("913144"),
  n = E("689988"),
  r = E("404607"),
  i = E("271938"),
  a = E("42203");
class I extends n.default {
  handleChannelDelete(e) {
    let {
      channel: _
    } = e;
    if (null != _.guild_id) {
      let e = a.default.getAllThreadsForParent(_.id);
      e.length > 0 && t.default.Emitter.batched(() => {
        for (let _ of e) o.default.dispatch({
          type: "THREAD_DELETE",
          channel: _
        })
      })
    }
  }
  handleMessageCreate(e) {
    var _, E, t;
    let {
      channelId: o,
      message: n
    } = e, I = a.default.getChannel(o);
    if ((null === (_ = n.author) || void 0 === _ ? void 0 : _.id) !== i.default.getId() || !(null == I ? void 0 : I.isActiveThread())) return;
    let s = new Date(null !== (t = null === (E = I.threadMetadata) || void 0 === E ? void 0 : E.archiveTimestamp) && void 0 !== t ? t : 0).getTime(),
      T = Date.now() - s;
    T < 5e3 && r.default.resort(I.parent_id)
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_DELETE: this.handleChannelDelete,
      MESSAGE_CREATE: this.handleMessageCreate
    }
  }
}
var s = new I