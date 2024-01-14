"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("872717"),
  s = n("755624"),
  l = n("263024"),
  i = n("42203"),
  r = n("377253"),
  o = n("660478"),
  u = n("697218"),
  d = n("299039"),
  c = n("49111");
async function f(e, t) {
  let n = u.default.getCurrentUser();
  if (null == n) return;
  let f = r.default.getMessages(e),
    m = f.toArray().filter(e => 0 > d.default.compare(e.id, t)).sort((e, t) => d.default.compare(e.id, t.id)).reverse()[0],
    E = null == m ? d.default.atPreviousMillisecond(t) : m.id,
    _ = 0;
  f.forAll(e => {
    d.default.compare(e.id, E) > 0 && (0, o.shouldBadgeMessage)(e, n) && _++
  });
  let h = i.default.getChannel(e);
  null != h && h.isThread() && (h.isArchivedThread() && await l.default.unarchiveThread(h, !1), !s.default.hasJoined(e) && await l.default.joinThread(h, "Mark Unread")), a.default.post({
    url: c.Endpoints.MESSAGE_ACK(e, E),
    body: {
      manual: !0,
      mention_count: _
    },
    oldFormErrors: !0
  })
}