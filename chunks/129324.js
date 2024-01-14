"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
}), a("70102");
var r = a("37983"),
  n = a("884691"),
  i = a("446674"),
  l = a("77078"),
  s = a("26989"),
  o = a("945956"),
  d = a("661919"),
  u = a("697218"),
  c = a("158998"),
  m = a("245622"),
  f = a("782340");
class p extends n.PureComponent {
  render() {
    let {
      streams: e,
      userId: t,
      mediaEngineConnectionId: a,
      videoStreams: n
    } = this.props;
    if (null == t || null == e || 0 === e.length) return (0, r.jsx)(l.Spinner, {
      type: l.Spinner.Type.SPINNING_CIRCLE
    });
    let i = o.default.getGuildId(),
      d = u.default.getUser(t),
      p = s.default.getNick(i, t),
      h = null == d ? f.default.Messages.RTC_DEBUG_RTP_INBOUND : "".concat(f.default.Messages.RTC_DEBUG_RTP_INBOUND, " — ").concat(null != p ? p : c.default.getName(d));
    return (0, r.jsx)(l.FormSection, {
      tag: l.FormTitleTags.H2,
      title: h,
      children: (0, m.renderStreams)(e, a, t, n)
    })
  }
}
var h = i.default.connectStores([d.default], e => {
  let {
    context: t,
    index: a,
    videoStreams: r
  } = e, n = d.default.getAllStats(t)[a], {
    section: i
  } = (0, d.parseSection)(d.default.getSection());
  if (null == i) throw Error("Unrecognized section format");
  let l = null;
  if (null != n && null != n.rtp.inbound) {
    var s;
    l = null !== (s = n.rtp.inbound[i]) && void 0 !== s ? s : []
  }
  return {
    mediaEngineConnectionId: null == n ? void 0 : n.mediaEngineConnectionId,
    userId: i,
    streams: l,
    videoStreams: r
  }
})(p)