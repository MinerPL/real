function r(e) {
  if (e && "object" == typeof e) {
    var t = e.which || e.keyCode || e.charCode;
    t && (e = t)
  }
  if ("number" == typeof e) return s[e];
  var n = String(e),
    r = o[n.toLowerCase()];
  if (r) return r;
  var r = a[n.toLowerCase()];
  return r ? r : 1 === n.length ? n.charCodeAt(0) : void 0
}
r.isEventKey = function(e, t) {
  if (e && "object" == typeof e) {
    var n = e.which || e.keyCode || e.charCode;
    if (null == n) return !1;
    if ("string" == typeof t) {
      var r = o[t.toLowerCase()];
      if (r) return r === n;
      var r = a[t.toLowerCase()];
      if (r) return r === n
    } else if ("number" == typeof t) return t === n;
    return !1
  }
};
var o = (t = e.exports = r).code = t.codes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    "pause/break": 19,
    "caps lock": 20,
    esc: 27,
    space: 32,
    "page up": 33,
    "page down": 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    delete: 46,
    command: 91,
    "left command": 91,
    "right command": 93,
    "numpad *": 106,
    "numpad +": 107,
    "numpad -": 109,
    "numpad .": 110,
    "numpad /": 111,
    "num lock": 144,
    "scroll lock": 145,
    "my computer": 182,
    "my calculator": 183,
    ";": 186,
    "=": 187,
    ",": 188,
    "-": 189,
    ".": 190,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222
  },
  a = t.aliases = {
    windows: 91,
    "⇧": 16,
    "⌥": 18,
    "⌃": 17,
    "⌘": 91,
    ctl: 17,
    control: 17,
    option: 18,
    pause: 19,
    break: 19,
    caps: 20,
    return: 13,
    escape: 27,
    spc: 32,
    spacebar: 32,
    pgup: 33,
    pgdn: 34,
    ins: 45,
    del: 46,
    cmd: 91
  };
for (i = 97; i < 123; i++) o[String.fromCharCode(i)] = i - 32;
for (var i = 48; i < 58; i++) o[i - 48] = i;
for (i = 1; i < 13; i++) o["f" + i] = i + 111;
for (i = 0; i < 10; i++) o["numpad " + i] = i + 96;
var s = t.names = t.title = {};
for (i in o) s[o[i]] = i;
for (var c in a) o[c] = a[c]