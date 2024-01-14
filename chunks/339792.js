"use strict";
s.r(t), s.d(t, {
  useForumChannelStore: function() {
    return g
  },
  useForumChannelStoreApi: function() {
    return p
  }
}), s("222007");
var n = s("627445"),
  a = s.n(n),
  l = s("308503"),
  i = s("482402"),
  r = s("335710"),
  o = s("446674"),
  u = s("42203"),
  d = s("446480");
let c = new Set,
  h = {
    layoutType: i.ForumLayout.LIST,
    sortOrder: r.ThreadSortOrder.CREATION_DATE,
    tagFilter: c,
    scrollPosition: 0
  };
class f {
  constructor(e, t) {
    this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
      let s = this.get(),
        n = this.getChannelState(e),
        a = {
          ...s.channelStates
        };
      a[e] = {
        ...n,
        ...t
      }, this.set({
        channelStates: a
      })
    }, this.getChannelState = e => {
      if (null == e) return h;
      let {
        channelStates: t
      } = this.get(), s = t[e];
      if (null == s) {
        let t = u.default.getChannel(e);
        a(null != t, "[Forum Channel Store] The channel should not be missing."), s = {
          layoutType: t.getDefaultLayout(),
          sortOrder: t.getDefaultSortOrder(),
          tagFilter: c,
          scrollPosition: 0
        }
      }
      return s
    }, this.toggleTagFilter = (e, t) => {
      let s = this.getChannelState(e),
        n = new Set(s.tagFilter);
      n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n)
    }, this.setTagFilter = (e, t) => {
      this.setChannelState(e, {
        tagFilter: t
      }), d.default.setFilterTagIds(t)
    }, this.setSortOrder = (e, t) => {
      this.setChannelState(e, {
        sortOrder: t
      }), d.default.setSortOrder(t)
    }, this.setLayoutType = (e, t) => {
      this.setChannelState(e, {
        layoutType: t
      }), d.default.setLayout(t)
    }, this.setScrollPosition = (e, t) => {
      this.setChannelState(e, {
        scrollPosition: t
      })
    }
  }
}
let m = (0, l.default)((e, t) => new f(e, t)),
  g = e => {
    let t = m(),
      s = (0, o.useStateFromStores)([u.default], () => u.default.getChannel(e));
    return null == s ? h : t.getChannelState(e)
  },
  p = () => m