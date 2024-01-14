    "use strict";
    i.r(t), i("222007"), i("854508");
    var n = i("62981"),
      r = i("551750");
    let s = new Map,
      a = e => {
        let {
          canvas: t,
          canvasId: i,
          animationId: a,
          assetUrl: o,
          assetData: l,
          isVisible: u,
          shouldAnimate: h
        } = e, c = new n.default({
          canvas: t,
          id: a,
          assetUrl: o,
          assetData: l,
          isVisible: u,
          shouldAnimate: h,
          onInitialDraw: () => {
            self.postMessage({
              type: r.MessageTypes.FIRST_DRAW,
              canvasId: i
            })
          },
          onError: () => {
            self.postMessage({
              type: r.MessageTypes.ERROR,
              canvasId: i
            })
          }
        });
        s.set(i, c)
      },
      o = e => {
        var t;
        let {
          canvasId: i
        } = e;
        null === (t = s.get(i)) || void 0 === t || t.drop(), s.delete(i)
      },
      l = e => {
        var t;
        let {
          canvasId: i,
          isVisible: n
        } = e;
        null === (t = s.get(i)) || void 0 === t || t.setVisibility(n)
      },
      u = e => {
        var t;
        let {
          canvasId: i,
          shouldAnimate: n,
          nextFrame: r
        } = e;
        null === (t = s.get(i)) || void 0 === t || t.setState(n, r)
      };
    self.addEventListener("message", e => {
      let {
        data: t
      } = e;
      switch (t.type) {
        case r.MessageTypes.INITIALIZE:
          a(t);
          break;
        case r.MessageTypes.DROP:
          o(t);
          break;
        case r.MessageTypes.VISIBILITY_CHANGE:
          l(t);
          break;
        case r.MessageTypes.STATE_CHANGE:
          u(t)
      }
    })