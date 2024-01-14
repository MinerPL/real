"use strict";
n.r(t), n.d(t, {
  transformNativeFile: function() {
    return h
  },
  makeFile: function() {
    return p
  },
  classifyFile: function() {
    return S
  },
  classifyFileName: function() {
    return m
  },
  sizeString: function() {
    return T
  },
  maxFileSize: function() {
    return g
  },
  anyFileTooLarge: function() {
    return I
  },
  uploadSumTooLarge: function() {
    return C
  },
  getMaxRequestSize: function() {
    return v
  }
}), n("222007");
var i = n("477850"),
  r = n.n(i),
  s = n("917351"),
  a = n.n(s),
  o = n("143068"),
  l = n("700031"),
  u = n("305961"),
  c = n("697218"),
  d = n("719923"),
  f = n("49111"),
  E = n("646718");

function h(e, t) {
  return e instanceof File ? e : p(e.data, e.filename, t)
}

function p(e, t, i) {
  let r = n("637139");
  if (null == t && (t = "unknown", "type" in e)) {
    let n = r.extension(e.type);
    n && (t += ".".concat(n))
  }
  return null == i && ("type" in e && (i = e.type), i = null != i ? i : r.lookup(t)), new File([e], t, {
    type: i
  })
}
let _ = [{
  reType: /^image\/vnd.adobe.photoshop/,
  klass: "photoshop"
}, {
  reType: /^image\/svg\+xml/,
  klass: "webcode"
}, {
  reType: /^image\//,
  klass: "image"
}, {
  reType: /^video\//,
  klass: "video"
}, {
  reName: /\.pdf$/,
  klass: "acrobat"
}, {
  reName: /\.ae/,
  klass: "ae"
}, {
  reName: /\.sketch$/,
  klass: "sketch"
}, {
  reName: /\.ai$/,
  klass: "ai"
}, {
  reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/,
  klass: "archive"
}, {
  reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
  klass: "code"
}, {
  reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/,
  klass: "document"
}, {
  reName: /\.(?:xls|xlsx|numbers|csv)$/,
  klass: "spreadsheet"
}, {
  reName: /\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/,
  klass: "webcode"
}, {
  reName: /\.(?:mp3|ogg|wav|flac)$/,
  klass: "audio"
}];

function S(e) {
  return m(e.name, e.type)
}

function m(e, t) {
  var n;
  e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : "";
  let i = a.find(_, n => null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e));
  return null != i ? i.klass : "unknown"
}

function T(e) {
  return r.filesize(e)
}

function g(e) {
  let t = c.default.getCurrentUser();
  o.default.trackExposure({
    location: "de18ec_1"
  }), l.default.trackExposure({
    location: "de18ec_2"
  });
  let n = d.default.getUserMaxFileSize(t);
  if (null == e) return n;
  let i = u.default.getGuild(e),
    r = null != i ? E.BoostedGuildFeatures[i.premiumTier].limits.fileSize : f.MAX_ATTACHMENT_SIZE;
  return Math.max(r, n)
}

function I(e, t) {
  let n = g(t);
  return Array.from(e).some(e => e.size > n)
}

function C(e) {
  return function(e) {
    let t = 0;
    for (let n of e) t += n.size;
    return t
  }(e) > v()
}

function v() {
  let e = c.default.getCurrentUser();
  return null != e && e.isStaff() ? 524288e3 : 524288e3
}