"use strict";
n.r(t), n.d(t, {
  SPOTIFY_APPLICATION_ID: function() {
    return i
  },
  SpotifyApplication: function() {
    return o
  },
  default: function() {
    return s
  }
});
var s, l = n("376556"),
  a = n("653047");
let i = "spotify",
  r = l.default.get(i);
s = class extends a.default {
  getIconURL(e) {
    return r.icon.lightPNG
  }
  constructor() {
    super({}), this.id = i, this.name = r.name
  }
};
let o = new s