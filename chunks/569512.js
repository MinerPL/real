"use strict";
n.r(t), n.d(t, {
  getBurstAnimation: function() {
    return r
  }
});
var a = n("103475");
let l = [{
    load: () => n.el("448779").then(n.t.bind(n, "448779", 19))
  }, {
    load: () => n.el("734436").then(n.t.bind(n, "734436", 19))
  }, {
    load: () => n.el("494925").then(n.t.bind(n, "494925", 19))
  }, {
    load: () => n.el("199777").then(n.t.bind(n, "199777", 19))
  }, {
    load: () => n.el("942466").then(n.t.bind(n, "942466", 19))
  }, {
    load: () => n.el("56957").then(n.t.bind(n, "56957", 19))
  }, {
    load: () => n.el("547173").then(n.t.bind(n, "547173", 19))
  }, {
    load: () => n.el("485996").then(n.t.bind(n, "485996", 19))
  }, {
    load: () => n.el("871996").then(n.t.bind(n, "871996", 19))
  }, {
    load: () => n.el("584037").then(n.t.bind(n, "584037", 19))
  }, {
    load: () => n.el("320512").then(n.t.bind(n, "320512", 19))
  }, {
    load: () => n.el("925536").then(n.t.bind(n, "925536", 19))
  }, {
    load: () => n.el("522373").then(n.t.bind(n, "522373", 19))
  }, {
    load: () => n.el("837366").then(n.t.bind(n, "837366", 19))
  }, {
    load: () => n.el("42949").then(n.t.bind(n, "42949", 19))
  }, {
    load: () => n.el("294705").then(n.t.bind(n, "294705", 19))
  }, {
    load: () => n.el("454599").then(n.t.bind(n, "454599", 19))
  }, {
    load: () => n.el("814738").then(n.t.bind(n, "814738", 19))
  }],
  r = async function(e, t, n) {
    arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    let r = (0, a.getBurstAnimationHash)("".concat(e).concat(t).concat(n)),
      i = l[r % l.length];
    return await i.load()
  }