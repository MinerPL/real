    "use strict";
    t.r(a), t.d(a, {
      getInitialStreamTarget: function() {
        return s
      },
      getStreamTarget: function() {
        return c
      }
    }), t("222007");
    var d = t("449008");

    function s(e, a) {
      let t = e.find(e => e.processId === a);
      return null == t ? null : c(e, t)
    }
    let n = "356869127241072640";

    function c(e, a) {
      var t;
      if (null == a) return null;
      if (a.applicationId === n) return function(e, a) {
        let t = a.processPath.length > 1 ? a.processPath[a.processPath.length - 2] : 0,
          d = e.filter(e => e.applicationId === n && e.processPath.includes(t)),
          s = d.find(e => "league of legends.exe" === e.executableName);
        return void 0 !== s ? s : d.length > 0 ? d[0] : null
      }(e, a);
      let s = new Map(e.map(e => [e.processId, e])),
        c = a.processPath.map(e => s.get(e)).find(e => null != e);
      if (null == c) return null;
      let r = e.map(e => {
        let a = e.processPath.findIndex(e => s.has(e));
        return -1 === a ? null : {
          application: e,
          rootedPath: e.processPath.slice(a)
        }
      }).filter(d.isNotNullish).filter(e => e.rootedPath[0] === c.processId);
      r.sort((e, a) => {
        let t = e.rootedPath.map(e => s.get(e)).filter(e => null != e && null != e.windowHandle),
          d = a.rootedPath.map(e => s.get(e)).filter(e => null != e && null != e.windowHandle),
          n = i(d, t);
        return 0 !== n ? n : i(a.rootedPath, e.rootedPath)
      });
      let o = null !== (t = r.find(e => null != e.application.windowHandle)) && void 0 !== t ? t : r[0];
      return null == o ? null : o.application
    }

    function i(e, a) {
      return e.length - a.length
    }