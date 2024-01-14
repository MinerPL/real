    r("854508"), self.addEventListener("message", async e => {
      let {
        data: {
          url: t
        }
      } = e, r = !1;
      try {
        await fetch(t)
      } catch (e) {
        r = !0
      }
      self.postMessage({
        url: t,
        error: r
      })
    })