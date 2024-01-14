"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var l, a = n("37983"),
  s = n("884691"),
  i = n("254490"),
  r = n("170113");
l = class extends s.PureComponent {
  render() {
    let {
      src: e,
      fileSize: t,
      fileName: n,
      className: l,
      playable: s,
      volume: o,
      renderLinkComponent: u,
      onVolumeChange: d,
      onVolumeShow: c,
      onVolumeHide: m,
      autoMute: f,
      onMute: h,
      mimeType: p,
      onPlay: g
    } = this.props;
    return (0, a.jsx)(r.default, {
      src: e,
      fileName: n,
      fileSize: (0, i.sizeString)(t),
      type: r.default.Types.AUDIO,
      className: l,
      playable: s,
      volume: o,
      onMute: h,
      autoMute: f,
      onVolumeChange: d,
      onVolumeShow: c,
      onVolumeHide: m,
      renderLinkComponent: u,
      mimeType: p,
      onPlay: g
    })
  }
}