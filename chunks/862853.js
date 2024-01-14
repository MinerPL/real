"use strict";
n.r(t), n.d(t, {
  addCandidateContent: function() {
    return T
  },
  removeCandidateContent: function() {
    return g
  },
  isContentShown: function() {
    return I
  },
  useIsContentShown: function() {
    return C
  },
  useIsAnyContentShown: function() {
    return v
  },
  getCurrentlyShownCounts: function() {
    return A
  },
  reset: function() {
    return R
  },
  default: function() {
    return N
  }
}), n("222007"), n("843762");
var i = n("308503"),
  r = n("495226"),
  s = n("543322");
let a = new s.TaskRunner,
  o = () => ({
    candidates: new Map,
    shownFatigableCandidate: null,
    prevFatigableCandidate: null,
    recentlyShown: [],
    currentlyShown: new Set,
    currentlyShownGroup: new Set,
    lastWinnerTime: 0
  }),
  l = (0, i.default)(o),
  u = e => ({
    ...e,
    candidates: new Map(e.candidates),
    currentlyShown: new Set(e.currentlyShown),
    currentlyShownGroup: new Set(e.currentlyShownGroup)
  }),
  c = (e, t) => {
    var n;
    return null == t ? e : (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null === (n = e.shownFatigableCandidate) || void 0 === n ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null), e)
  },
  d = (e, t) => {
    var n, i;
    if (null == t) return e;
    e.currentlyShown.add(t.content);
    let s = e.recentlyShown.filter(e => e !== t.content);
    return s.unshift(t.content), s.splice(5), e.recentlyShown = s, null != t.groupName && e.currentlyShownGroup.add(t.groupName), !r.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(t.content) && (e.shownFatigableCandidate = t, (null === (i = e.prevFatigableCandidate) || void 0 === i ? void 0 : i.content) !== t.content && (e.prevFatigableCandidate = t, e.lastWinnerTime = new Date().getTime())), null === (n = t.onAdded) || void 0 === n || n.call(t), e
  },
  f = (e, t) => (e.candidates.set(t.content, t), e),
  E = (e, t) => (e.candidates.delete(t.content), e),
  h = (e, t) => d(c(e, e.shownFatigableCandidate), t),
  p = e => null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0,
  _ = e => {
    let t = [...e.candidates.keys()];
    return null !== e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && e.candidates.size > 1 && (t = t.filter(t => {
      var n;
      return t !== (null === (n = e.prevFatigableCandidate) || void 0 === n ? void 0 : n.content)
    })), e.candidates.get(t[Math.floor(Math.random() * t.length)])
  },
  S = e => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
  m = e => {
    if (0 === e.candidates.size) return e;
    let t = new Date().getTime() - e.lastWinnerTime > 3e5;
    if (S(e) && !t) return a.unschedule(), h(e, p(e));
    if (null != e.shownFatigableCandidate && !t || a.scheduled()) return e;
    let n = new Date().getTime();
    return null == e.shownFatigableCandidate && n - e.lastWinnerTime < 36e5 ? e : (a.schedule(() => {
      l.setState(e => {
        let t = u(e);
        return h(t, _(t))
      })
    }, 250), e)
  },
  T = e => {
    let t = r.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e.content);
    l.setState(n => {
      let i = u(n);
      return t ? d(i, e) : m(f(i, e))
    })
  },
  g = (e, t) => {
    l.setState(n => {
      let i = u(n);
      return t ? m(c(E(i, e), e)) : c(E(i, e), e)
    })
  },
  I = e => l.getState().currentlyShown.has(e),
  C = e => l(t => t.currentlyShown.has(e)),
  v = e => l(t => e.some(e => t.currentlyShown.has(e))),
  A = () => {
    let e = [...l.getState().currentlyShown].filter(e => !r.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e)).length,
      t = l.getState().currentlyShown.size;
    return [t, e]
  },
  R = () => {
    l.setState(o), a.unschedule()
  };

function N(e) {
  return l(e)
}