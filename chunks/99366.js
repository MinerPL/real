"use strict";
n.r(t), n.d(t, {
  createThumbnail: function() {
    return a
  },
  createThumbnailFromVideo: function() {
    return l
  }
}), n("70102");
var i = n("80028");
async function a(e) {
  if (null == e) return "";
  let t = new Blob([e], {
      type: "image/jpeg"
    }),
    n = await new Promise(e => {
      let n = new FileReader;
      n.onloadend = () => {
        e(n.result)
      }, n.readAsDataURL(t)
    });
  if ("string" != typeof n) throw Error("Thumbnail creation failed");
  return n
}
async function l(e, t) {
  let n = document.createElement("video");
  n.muted = !0, n.src = e, n.currentTime = t, await n.play(), n.pause();
  let a = i.CLIPS_THUMBNAIL_MAX_WIDTH / n.videoWidth,
    l = i.CLIPS_THUMBNAIL_MAX_HEIGHT / n.videoHeight,
    s = Math.min(a, l),
    u = n.videoWidth * s,
    d = n.videoHeight * s,
    r = document.createElement("canvas");
  r.width = u, r.height = d;
  let o = r.getContext("2d");
  if (null == o) throw Error("Could not create canvas context");
  return o.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, u, d), r.toDataURL("image/jpeg", .9)
}