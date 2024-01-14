"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var a = l("884691"),
  n = l("685665"),
  i = l("6468"),
  s = l("16002"),
  r = e => {
    let {
      channelId: t,
      setExporting: l
    } = e, {
      analyticsLocations: r
    } = (0, n.default)(), o = a.useCallback(async e => {
      let {
        clip: a,
        cropData: n,
        applicationAudioEnabled: o,
        voiceAudioEnabled: d,
        onShareComplete: u
      } = e;
      l(a.id);
      try {
        var c, f, p, m, h, E, v, _, C, g;
        let e = (0, i.canAttachClipsToChannel)(t);
        await (0, s.shareClip)(a, {
          channelId: e ? t : void 0,
          analyticsLocations: r,
          editMetadata: {
            start: null !== (E = null !== (h = null == n ? void 0 : n.start) && void 0 !== h ? h : null === (c = a.editMetadata) || void 0 === c ? void 0 : c.start) && void 0 !== E ? E : 0,
            end: null !== (_ = null !== (v = null == n ? void 0 : n.end) && void 0 !== v ? v : null === (f = a.editMetadata) || void 0 === f ? void 0 : f.end) && void 0 !== _ ? _ : a.length / 1e3,
            applicationAudio: null === (C = null != o ? o : null === (p = a.editMetadata) || void 0 === p ? void 0 : p.applicationAudio) || void 0 === C || C,
            voiceAudio: null === (g = null != d ? d : null === (m = a.editMetadata) || void 0 === m ? void 0 : m.voiceAudio) || void 0 === g || g
          }
        })
      } catch (e) {} finally {
        null == u || u(), l(null)
      }
    }, [t, r, l]);
    return {
      onShareClick: o
    }
  }