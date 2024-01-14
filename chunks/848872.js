"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007"), n("70102"), n("424973"), n("462568");
var s = n("714617"),
  i = n.n(s),
  r = n("446674"),
  a = n("872717"),
  o = n("913144"),
  d = n("619340"),
  u = n("376556"),
  l = n("550368"),
  f = n("47319"),
  _ = n("102985"),
  c = n("49111");
let g = e => "https://youtube.com/watch?v=".concat(e),
  m = /live_user_(.*)-\{width\}/,
  h = null,
  v = 0,
  E = null,
  p = new Set,
  y = {};

function T(e, t, n) {
  return a.default.get({
    url: "".concat("https://api.twitch.tv/helix").concat(e),
    query: t,
    headers: {
      "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s",
      Authorization: "Bearer ".concat(n)
    }
  })
}
async function C(e, t) {
  let n = y[e];
  if (null != n) return n;
  let {
    body: {
      data: s
    }
  } = await T("/games", {
    id: e
  }, t), i = s[0].name;
  return y[e] = i, i
}
let S = new class e {
  start() {
    !this._started && (this._started = !0, f.default.isFetching() ? d.default.fetch() : this._check())
  }
  stop() {
    this._started = !1, E = null, v = 0, null != this._nextCheck && clearTimeout(this._nextCheck), o.default.dispatch({
      type: "STREAMING_UPDATE",
      stream: null
    })
  }
  async _checkTwitch(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
    try {
      var n, s, i, r, a;
      let {
        body: {
          data: o
        }
      } = await T("/streams", {
        user_id: e.id,
        first: 1
      }, t), d = o[0];
      if (null == d || "live" !== d.type) throw Error("no stream");
      let {
        thumbnail_url: f,
        game_id: _,
        title: g
      } = d, h = {
        large_image: null != f && null !== (s = (0, l.getAssetFromImageURL)(c.PlatformTypes.TWITCH, f)) && void 0 !== s ? s : void 0
      }, v = await C(_, t), E = u.default.get(c.PlatformTypes.TWITCH);
      let p = null !== (r = f, i = null === (a = m.exec(r)) || void 0 === a ? void 0 : a[1]) && void 0 !== i ? i : e.name;
      return {
        url: null === (n = E.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(E, {
          id: e.id,
          name: p
        }),
        name: E.name,
        assets: h,
        details: g,
        state: v
      }
    } catch (n) {
      if (401 === n.status && null == t) return d.default.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
      return null
    }
  }
  async _checkYouTube(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (E = null, e.revoked || p.has(e.id)) return null;
    try {
      var n;
      let {
        body: {
          items: s
        }
      } = await a.default.get({
        url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
        query: {
          part: "id,snippet",
          broadcastStatus: "active",
          broadcastType: "all"
        },
        headers: {
          Authorization: "Bearer ".concat(null != t ? t : e.accessToken)
        },
        oldFormErrors: !0
      });
      if (s.length < 1) throw Error("no stream");
      let {
        id: i,
        snippet: {
          title: r,
          thumbnails: o
        }
      } = s[0], d = {
        large_image: null !== (n = (0, l.getAssetFromImageURL)(c.PlatformTypes.YOUTUBE, o.high.url)) && void 0 !== n ? n : void 0
      };
      return E = {
        url: g(i),
        name: u.default.get(c.PlatformTypes.YOUTUBE).name,
        details: r,
        assets: d
      }
    } catch (n) {
      if (401 === n.status && null == t) return d.default.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
      return 403 === n.status && p.add(e.id), null
    }
  }
  _check() {
    if (!this._started) return;
    let e = f.default.getAccounts();
    if (null == e) return;
    null != this._nextCheck && clearTimeout(this._nextCheck);
    let t = [c.PlatformTypes.TWITCH],
      n = Date.now();
    v <= n && (t.push(c.PlatformTypes.YOUTUBE), v = n + 3e5);
    let s = e.filter(e => t.includes(e.type)).map(e => e.type === c.PlatformTypes.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e));
    Promise.allSettled(s).then(e => {
      if (this._started) {
        var t;
        let n = null === (t = e.find(e => "fulfilled" === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
        null == n && null != E && (n = E), o.default.dispatch({
          type: "STREAMING_UPDATE",
          stream: n
        })
      }
      this._scheduleCheck()
    })
  }
  _scheduleCheck() {
    this._started && (this._nextCheck = setTimeout(() => this._check(), 6e4))
  }
  constructor() {
    this._started = !1
  }
};

function I() {
  _.default.enabled ? S.start() : S.stop()
}
class A extends r.default.Store {
  initialize() {
    I(), this.waitFor(f.default), this.syncWith([_.default], I)
  }
  getStream() {
    return h
  }
}
A.displayName = "ExternalStreamingStore";
var D = new A(o.default, {
  STREAMING_UPDATE: function(e) {
    var t;
    if (i(e.stream, h)) return !1;
    h = null !== (t = e.stream) && void 0 !== t ? t : null
  },
  USER_CONNECTIONS_UPDATE: () => S._check()
})