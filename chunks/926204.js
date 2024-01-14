r("70102");
var a = r("72112"),
  n = {};
for (var s in a) a.hasOwnProperty(s) && (n[a[s]] = s);
var o = e.exports = {
  rgb: {
    channels: 3,
    labels: "rgb"
  },
  hsl: {
    channels: 3,
    labels: "hsl"
  },
  hsv: {
    channels: 3,
    labels: "hsv"
  },
  hwb: {
    channels: 3,
    labels: "hwb"
  },
  cmyk: {
    channels: 4,
    labels: "cmyk"
  },
  xyz: {
    channels: 3,
    labels: "xyz"
  },
  lab: {
    channels: 3,
    labels: "lab"
  },
  lch: {
    channels: 3,
    labels: "lch"
  },
  hex: {
    channels: 1,
    labels: ["hex"]
  },
  keyword: {
    channels: 1,
    labels: ["keyword"]
  },
  ansi16: {
    channels: 1,
    labels: ["ansi16"]
  },
  ansi256: {
    channels: 1,
    labels: ["ansi256"]
  },
  hcg: {
    channels: 3,
    labels: ["h", "c", "g"]
  },
  apple: {
    channels: 3,
    labels: ["r16", "g16", "b16"]
  },
  gray: {
    channels: 1,
    labels: ["gray"]
  }
};
for (var i in o)
  if (o.hasOwnProperty(i)) {
    if (!("channels" in o[i])) throw Error("missing channels property: " + i);
    if (!("labels" in o[i])) throw Error("missing channel labels property: " + i);
    if (o[i].labels.length !== o[i].channels) throw Error("channel and label counts mismatch: " + i);
    var u = o[i].channels,
      c = o[i].labels;
    delete o[i].channels, delete o[i].labels, Object.defineProperty(o[i], "channels", {
      value: u
    }), Object.defineProperty(o[i], "labels", {
      value: c
    })
  } o.rgb.hsl = function(e) {
  var t, r, a, n = e[0] / 255,
    s = e[1] / 255,
    o = e[2] / 255,
    i = Math.min(n, s, o),
    u = Math.max(n, s, o),
    c = u - i;
  return u === i ? t = 0 : n === u ? t = (s - o) / c : s === u ? t = 2 + (o - n) / c : o === u && (t = 4 + (n - s) / c), (t = Math.min(60 * t, 360)) < 0 && (t += 360), a = (i + u) / 2, [t, 100 * (r = u === i ? 0 : a <= .5 ? c / (u + i) : c / (2 - u - i)), 100 * a]
}, o.rgb.hsv = function(e) {
  var t, r, a, n, s, o = e[0] / 255,
    i = e[1] / 255,
    u = e[2] / 255,
    c = Math.max(o, i, u),
    l = c - Math.min(o, i, u),
    f = function(e) {
      return (c - e) / 6 / l + .5
    };
  return 0 === l ? n = s = 0 : (s = l / c, t = f(o), r = f(i), a = f(u), o === c ? n = a - r : i === c ? n = 1 / 3 + t - a : u === c && (n = 2 / 3 + r - t), n < 0 ? n += 1 : n > 1 && (n -= 1)), [360 * n, 100 * s, 100 * c]
}, o.rgb.hwb = function(e) {
  var t = e[0],
    r = e[1],
    a = e[2],
    n = o.rgb.hsl(e)[0];
  return [n, 100 * (1 / 255 * Math.min(t, Math.min(r, a))), 100 * (a = 1 - 1 / 255 * Math.max(t, Math.max(r, a)))]
}, o.rgb.cmyk = function(e) {
  var t, r = e[0] / 255,
    a = e[1] / 255,
    n = e[2] / 255;
  return t = Math.min(1 - r, 1 - a, 1 - n), [100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - a - t) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * t]
};
o.rgb.keyword = function(e) {
  var t, r = n[e];
  if (r) return r;
  var s = 1 / 0;
  for (var o in a)
    if (a.hasOwnProperty(o)) {
      var i, u, c = a[o];
      var l = (i = e, u = c, Math.pow(i[0] - u[0], 2) + Math.pow(i[1] - u[1], 2) + Math.pow(i[2] - u[2], 2));
      l < s && (s = l, t = o)
    } return t
}, o.keyword.rgb = function(e) {
  return a[e]
}, o.rgb.xyz = function(e) {
  var t = e[0] / 255,
    r = e[1] / 255,
    a = e[2] / 255;
  return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92) + .1805 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92)), 100 * (.2126 * t + .7152 * r + .0722 * a), 100 * (.0193 * t + .1192 * r + .9505 * a)]
}, o.rgb.lab = function(e) {
  var t = o.rgb.xyz(e),
    r = t[0],
    a = t[1],
    n = t[2];
  return r /= 95.047, a /= 100, n /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, [116 * (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (r - a), 200 * (a - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
}, o.hsl.rgb = function(e) {
  var t, r, a, n, s, o = e[0] / 360,
    i = e[1] / 100,
    u = e[2] / 100;
  if (0 === i) return [s = 255 * u, s, s];
  r = u < .5 ? u * (1 + i) : u + i - u * i, t = 2 * u - r, n = [0, 0, 0];
  for (var c = 0; c < 3; c++)(a = o + -(1 / 3 * (c - 1))) < 0 && a++, a > 1 && a--, s = 6 * a < 1 ? t + (r - t) * 6 * a : 2 * a < 1 ? r : 3 * a < 2 ? t + (r - t) * (2 / 3 - a) * 6 : t, n[c] = 255 * s;
  return n
}, o.hsl.hsv = function(e) {
  var t, r = e[0],
    a = e[1] / 100,
    n = e[2] / 100,
    s = a,
    o = Math.max(n, .01);
  return n *= 2, a *= n <= 1 ? n : 2 - n, s *= o <= 1 ? o : 2 - o, t = (n + a) / 2, [r, 100 * (0 === n ? 2 * s / (o + s) : 2 * a / (n + a)), 100 * t]
}, o.hsv.rgb = function(e) {
  var t = e[0] / 60,
    r = e[1] / 100,
    a = e[2] / 100,
    n = t - Math.floor(t),
    s = 255 * a * (1 - r),
    o = 255 * a * (1 - r * n),
    i = 255 * a * (1 - r * (1 - n));
  switch (a *= 255, Math.floor(t) % 6) {
    case 0:
      return [a, i, s];
    case 1:
      return [o, a, s];
    case 2:
      return [s, a, i];
    case 3:
      return [s, o, a];
    case 4:
      return [i, s, a];
    case 5:
      return [a, s, o]
  }
}, o.hsv.hsl = function(e) {
  var t, r, a, n = e[0],
    s = e[1] / 100,
    o = e[2] / 100,
    i = Math.max(o, .01);
  return a = (2 - s) * o, t = (2 - s) * i, r = (r = s * i / (t <= 1 ? t : 2 - t)) || 0, [n, 100 * r, 100 * (a /= 2)]
}, o.hwb.rgb = function(e) {
  var t, r, a, n, s, o, i, u = e[0] / 360,
    c = e[1] / 100,
    l = e[2] / 100,
    f = c + l;
  switch (f > 1 && (c /= f, l /= f), t = Math.floor(6 * u), r = 1 - l, a = 6 * u - t, (1 & t) != 0 && (a = 1 - a), n = c + a * (r - c), t) {
    default:
    case 6:
    case 0:
      s = r, o = n, i = c;
      break;
    case 1:
      s = n, o = r, i = c;
      break;
    case 2:
      s = c, o = r, i = n;
      break;
    case 3:
      s = c, o = n, i = r;
      break;
    case 4:
      s = n, o = c, i = r;
      break;
    case 5:
      s = r, o = c, i = n
  }
  return [255 * s, 255 * o, 255 * i]
}, o.cmyk.rgb = function(e) {
  var t = e[0] / 100,
    r = e[1] / 100,
    a = e[2] / 100,
    n = e[3] / 100;
  return [255 * (1 - Math.min(1, t * (1 - n) + n)), 255 * (1 - Math.min(1, r * (1 - n) + n)), 255 * (1 - Math.min(1, a * (1 - n) + n))]
}, o.xyz.rgb = function(e) {
  var t, r, a, n = e[0] / 100,
    s = e[1] / 100,
    o = e[2] / 100;
  return t = 3.2406 * n + -1.5372 * s + -.4986 * o, r = -.9689 * n + 1.8758 * s + .0415 * o, a = .0557 * n + -.204 * s + 1.057 * o, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (r = Math.min(Math.max(0, r), 1)), 255 * (a = Math.min(Math.max(0, a), 1))]
}, o.xyz.lab = function(e) {
  var t = e[0],
    r = e[1],
    a = e[2];
  return t /= 95.047, r /= 100, a /= 108.883, t = t > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (t - r), 200 * (r - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
}, o.lab.xyz = function(e) {
  var t, r, a, n = e[0],
    s = e[1],
    o = e[2];
  t = s / 500 + (r = (n + 16) / 116), a = r - o / 200;
  var i = Math.pow(r, 3),
    u = Math.pow(t, 3),
    c = Math.pow(a, 3);
  return r = (i > .008856 ? i : (r - 16 / 116) / 7.787) * 100, [t = (u > .008856 ? u : (t - 16 / 116) / 7.787) * 95.047, r, a = (c > .008856 ? c : (a - 16 / 116) / 7.787) * 108.883]
}, o.lab.lch = function(e) {
  var t, r = e[0],
    a = e[1],
    n = e[2];
  return (t = 360 * Math.atan2(n, a) / 2 / Math.PI) < 0 && (t += 360), [r, Math.sqrt(a * a + n * n), t]
}, o.lch.lab = function(e) {
  var t, r = e[0],
    a = e[1];
  return t = e[2] / 360 * 2 * Math.PI, [r, a * Math.cos(t), a * Math.sin(t)]
}, o.rgb.ansi16 = function(e) {
  var t = e[0],
    r = e[1],
    a = e[2],
    n = 1 in arguments ? arguments[1] : o.rgb.hsv(e)[2];
  if (0 === (n = Math.round(n / 50))) return 30;
  var s = 30 + (Math.round(a / 255) << 2 | Math.round(r / 255) << 1 | Math.round(t / 255));
  return 2 === n && (s += 60), s
}, o.hsv.ansi16 = function(e) {
  return o.rgb.ansi16(o.hsv.rgb(e), e[2])
}, o.rgb.ansi256 = function(e) {
  var t = e[0],
    r = e[1],
    a = e[2];
  if (t === r && r === a) return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232;
  return 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(r / 255 * 5) + Math.round(a / 255 * 5)
}, o.ansi16.rgb = function(e) {
  var t = e % 10;
  if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];
  var r = (~~(e > 50) + 1) * .5;
  return [(1 & t) * r * 255, (t >> 1 & 1) * r * 255, (t >> 2 & 1) * r * 255]
}, o.ansi256.rgb = function(e) {
  if (e >= 232) {
    var t, r = (e - 232) * 10 + 8;
    return [r, r, r]
  }
  var a = Math.floor((e -= 16) / 36) / 5 * 255,
    n = Math.floor((t = e % 36) / 6) / 5 * 255;
  return [a, n, t % 6 / 5 * 255]
}, o.rgb.hex = function(e) {
  var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
  return "000000".substring(t.length) + t
}, o.hex.rgb = function(e) {
  var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t) return [0, 0, 0];
  var r = t[0];
  3 === t[0].length && (r = r.split("").map(function(e) {
    return e + e
  }).join(""));
  var a = parseInt(r, 16);
  return [a >> 16 & 255, a >> 8 & 255, 255 & a]
}, o.rgb.hcg = function(e) {
  var t, r, a = e[0] / 255,
    n = e[1] / 255,
    s = e[2] / 255,
    o = Math.max(Math.max(a, n), s),
    i = Math.min(Math.min(a, n), s),
    u = o - i;
  return t = u < 1 ? i / (1 - u) : 0, [360 * (r = (u <= 0 ? 0 : o === a ? (n - s) / u % 6 : o === n ? 2 + (s - a) / u : 4 + (a - n) / u + 4) / 6 % 1), 100 * u, 100 * t]
}, o.hsl.hcg = function(e) {
  var t = e[1] / 100,
    r = e[2] / 100,
    a = 1,
    n = 0;
  return (a = r < .5 ? 2 * t * r : 2 * t * (1 - r)) < 1 && (n = (r - .5 * a) / (1 - a)), [e[0], 100 * a, 100 * n]
}, o.hsv.hcg = function(e) {
  var t = e[1] / 100,
    r = e[2] / 100,
    a = t * r,
    n = 0;
  return a < 1 && (n = (r - a) / (1 - a)), [e[0], 100 * a, 100 * n]
}, o.hcg.rgb = function(e) {
  var t = e[0] / 360,
    r = e[1] / 100,
    a = e[2] / 100;
  if (0 === r) return [255 * a, 255 * a, 255 * a];
  var n = [0, 0, 0],
    s = t % 1 * 6,
    o = s % 1,
    i = 1 - o,
    u = 0;
  switch (Math.floor(s)) {
    case 0:
      n[0] = 1, n[1] = o, n[2] = 0;
      break;
    case 1:
      n[0] = i, n[1] = 1, n[2] = 0;
      break;
    case 2:
      n[0] = 0, n[1] = 1, n[2] = o;
      break;
    case 3:
      n[0] = 0, n[1] = i, n[2] = 1;
      break;
    case 4:
      n[0] = o, n[1] = 0, n[2] = 1;
      break;
    default:
      n[0] = 1, n[1] = 0, n[2] = i
  }
  return u = (1 - r) * a, [(r * n[0] + u) * 255, (r * n[1] + u) * 255, (r * n[2] + u) * 255]
}, o.hcg.hsv = function(e) {
  var t = e[1] / 100,
    r = t + e[2] / 100 * (1 - t),
    a = 0;
  return r > 0 && (a = t / r), [e[0], 100 * a, 100 * r]
}, o.hcg.hsl = function(e) {
  var t = e[1] / 100,
    r = e[2] / 100 * (1 - t) + .5 * t,
    a = 0;
  return r > 0 && r < .5 ? a = t / (2 * r) : r >= .5 && r < 1 && (a = t / (2 * (1 - r))), [e[0], 100 * a, 100 * r]
}, o.hcg.hwb = function(e) {
  var t = e[1] / 100,
    r = t + e[2] / 100 * (1 - t);
  return [e[0], (r - t) * 100, (1 - r) * 100]
}, o.hwb.hcg = function(e) {
  var t = e[1] / 100,
    r = 1 - e[2] / 100,
    a = r - t,
    n = 0;
  return a < 1 && (n = (r - a) / (1 - a)), [e[0], 100 * a, 100 * n]
}, o.apple.rgb = function(e) {
  return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
}, o.rgb.apple = function(e) {
  return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
}, o.gray.rgb = function(e) {
  return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
}, o.gray.hsl = o.gray.hsv = function(e) {
  return [0, 0, e[0]]
}, o.gray.hwb = function(e) {
  return [0, 100, e[0]]
}, o.gray.cmyk = function(e) {
  return [0, 0, 0, e[0]]
}, o.gray.lab = function(e) {
  return [e[0], 0, 0]
}, o.gray.hex = function(e) {
  var t = 255 & Math.round(e[0] / 100 * 255),
    r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(r.length) + r
}, o.rgb.gray = function(e) {
  return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
}