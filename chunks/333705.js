"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("424973"), n("222007");
var a = n("37983");
n("884691");
var s = n("987317"),
  i = n("990766"),
  l = n("309570"),
  r = n("152311"),
  o = n("429928"),
  u = n("36539"),
  d = n("502651"),
  c = n("239380"),
  f = n("550368"),
  E = n("67139"),
  _ = n("62659"),
  h = n("636174"),
  C = n("49111");

function I(e) {
  let {
    party: t,
    onChannelContextMenu: n
  } = e, {
    voiceChannels: I,
    currentActivities: T,
    partiedMembers: S,
    applicationStreams: m,
    guildContext: p
  } = t, A = [], g = e => {
    var t, n;
    let {
      length: s
    } = A;
    if (0 === s) {
      A.push(e);
      return
    }
    let i = A[s - 1],
      l = "".concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ""),
      r = "".concat(null !== (n = null == i ? void 0 : i.key) && void 0 !== n ? n : ""),
      o = r.startsWith("game") && l.startsWith("rich-presence");
    A.push((0, a.jsx)(_.default.Separator, {
      inset: o
    }, "sep-".concat(l))), A.push(e)
  };
  for (let {
      activity: e
    }
    of(I.length > 0 && I.forEach(e => {
      let {
        members: t,
        channel: s,
        guild: i
      } = e;
      g((0, a.jsx)(_.default.VoiceSection, {
        guild: i,
        channel: s,
        members: t,
        partySize: function(e, t) {
          let n;
          let a = e.length,
            s = 0;
          if (null != t && null != t.party && null != t.party.size && t.party.size.length >= 2) {
            let a = t.party.size;
            s = Math.max(a[0] - e.length, 0), n = a[1]
          } else n = a + s;
          return {
            knownSize: a,
            unknownSize: s,
            totalSize: n
          }
        }(t),
        onChannelContextMenu: n,
        onGuildClick: () => {
          (0, c.transitionToGuild)(i.id)
        }
      }, "voice-".concat(s.id)))
    }), t.currentActivities))
    if (null != e) {
      let t = E.createBody(e);
      if (null != t) {
        g(t);
        break
      }
    } return m.length > 0 && m.forEach(e => {
    let {
      stream: t,
      streamUser: n,
      activity: l
    } = e;
    g((0, a.jsx)(_.default.ApplicationStreamingSection, {
      guildId: null == p ? void 0 : p.id,
      user: n,
      activity: l,
      applicationStream: t,
      onPreviewClick: () => {
        s.default.selectVoiceChannel(t.channelId), (0, i.watchStreamAndTransitionToStream)(t)
      }
    }, "application-stream-".concat(t.ownerId)))
  }), T.forEach((e, t) => {
    var n, s, i, c, E, m, A, N;
    let {
      activity: R,
      game: O,
      playingMembers: L,
      activityUser: v
    } = e;
    if (null == R || null == R.type) return null;
    if (T.length > 1 && R.type === C.ActivityTypes.PLAYING && !(0, l.default)(R) && null != O) g((0, a.jsx)(_.default.GameSection, {
      icon: O.getIconURL(h.ICON_SIZE),
      name: O.name,
      partySize: {
        knownSize: L.length,
        unknownSize: 0,
        totalSize: L.length
      },
      members: L
    }, "game-".concat(null !== (n = R.session_id) && void 0 !== n ? n : t, "-").concat(null !== (s = R.application_id) && void 0 !== s ? s : t)));
    else if ((0, r.default)(R)) {
      let e = new Set(L.map(e => e.id)),
        t = null === (i = I.find(e => null != e)) || void 0 === i ? void 0 : i.channel;
      null != t && g((0, a.jsx)(_.default.EmbeddedActivitySection, {
        activity: R,
        participants: e,
        channel: t,
        guildId: t.guild_id
      }, "embedded-activity-".concat(R.application_id)))
    } else if ((null != R.assets || (0, l.default)(R)) && R.type === C.ActivityTypes.PLAYING) g((0, a.jsx)(_.default.RichPresenceSection, {
      activity: R,
      getAssetImage: f.getAssetImage
    }, "rich-presence-".concat(null !== (c = R.session_id) && void 0 !== c ? c : t, "-").concat(v.id)));
    else if ((0, d.default)(R)) {
      let e = I.length > 0 && I[0].members.length > 1,
        n = L.length > 1;
      g((0, a.jsx)(_.default.TwitchSection, {
        guildId: null == p ? void 0 : p.id,
        activity: R,
        user: e || n ? v : null,
        getAssetImage: f.getAssetImage
      }, "streaming-".concat(null !== (E = R.session_id) && void 0 !== E ? E : t)))
    } else(0, o.default)(R) ? g((0, a.jsx)(_.default.SpotifySection, {
      activity: R,
      isSolo: 1 === S.length,
      partySize: {
        knownSize: L.length,
        unknownSize: 0,
        totalSize: L.length
      },
      getAssetImage: f.getAssetImage,
      members: L
    }, "spotify-".concat(null !== (m = R.session_id) && void 0 !== m ? m : t, "-").concat(v.id))) : (null != R.assets || (0, l.default)(R)) && R.type === C.ActivityTypes.LISTENING ? g((0, a.jsx)(_.default.RichPresenceSection, {
      activity: R,
      getAssetImage: f.getAssetImage
    }, "rich-presence-".concat(null !== (A = R.session_id) && void 0 !== A ? A : t, "-").concat(v.id))) : (0, u.default)(R) && g((0, a.jsx)(_.default.XboxSection, {
      title: O.name
    }, "xbox-".concat(null !== (N = R.session_id) && void 0 !== N ? N : t)))
  }), A.length > 0 ? (0, a.jsx)(_.default.Body, {
    children: A
  }) : null
}