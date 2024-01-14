"use strict";
n.r(t), n.d(t, {
  HAS_NO_COUNT: function() {
    return c
  },
  useServerActivityForUser: function() {
    return E
  }
}), n("222007");
var a, l, s = n("884691"),
  i = n("308503"),
  r = n("16470"),
  o = n("84339"),
  u = n("390933"),
  d = n("49111");
let c = -1;
(l = a || (a = {})).MENTIONS = "mentions", l.MESSAGES = "messages";
let f = {
    searchFetcher: null,
    result: null,
    messageCount: c,
    lastMessage: null
  },
  h = (0, i.default)(() => new Map),
  p = (e, t) => {
    h.setState(n => {
      let a = n.get(e);
      return null == a ? n.set(e, {
        ...f,
        ...t
      }) : n.set(e, {
        ...a,
        ...t
      }), n
    })
  },
  m = e => h(t => t.get(e), r.default);

function E(e, t, n) {
  let a = function(e, t, n, a) {
    let l = s.useMemo(() => (function(e, t, n) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          l = JSON.stringify(a);
        return "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(l)
      })(e, t, n, a), [e, t, n, a]),
      i = m(l),
      r = (0, o.default)(l),
      [h, E] = s.useState({});
    return s.useEffect(() => {
      if (r !== l) {
        let s = function(e, t, n) {
            let a = null != n ? n : {};
            switch (t) {
              case "mentions":
                return {
                  ...a, mentions: e
                };
              case "messages":
                return {
                  ...a, author_id: e
                }
            }
          }(e, n, a),
          i = new u.default(t, d.SearchTypes.GUILD, s);
        p(l, {
          searchFetcher: i,
          messageCount: c,
          lastMessage: null
        }), setTimeout(() => {
          i.fetch(e => {
            let t = e.body.messages[0];
            p(l, {
              searchFetcher: i,
              result: e.body,
              messageCount: e.body.total_results,
              lastMessage: t
            }), E({})
          }, e => {}, e => {
            p(l, {
              messageCount: 0,
              lastMessage: null
            }), E({})
          })
        })
      }
      return () => {}
    }, [e, t, i, l, n, a]), null != i ? i : f
  }(e, t, "messages", n);
  return {
    messageHistoryState: a
  }
}