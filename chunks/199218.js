"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("424973"), n("222007"), n("808653");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("272030"),
  r = n("851387"),
  o = n("393027"),
  u = n("383173"),
  d = n("952451"),
  c = n("305961"),
  f = n("449008"),
  h = n("797438"),
  C = n("653357"),
  p = n("49111"),
  m = a.memo(function(e) {
    let {
      folderNode: t,
      ...m
    } = e, {
      id: E,
      name: g,
      color: I,
      children: S
    } = t, _ = S.map(e => e.id), N = (0, o.default)(e => e.guildId), T = (0, s.useStateFromStores)([u.default], () => u.default.isFolderExpanded(E)), A = function(e) {
      let t = e.children.map(e => {
          let t = e.id,
            n = c.default.getGuild(t);
          return null != n ? n.name : null
        }).filter(f.isNotNullish),
        n = 2 * p.MAX_GUILD_FOLDER_NAME_LENGTH,
        l = [];
      for (let e of t)(e.length < n || 0 === l.length) && (l.push(e), n -= e.length);
      return "".concat(l.join(", ")).concat(l.length < t.length ? ", ..." : "")
    }(t), L = (0, C.default)(t), {
      mentionCount: v,
      unread: x
    } = (0, s.useStateFromStoresObject)([d.default], () => ({
      mentionCount: _.map(e => d.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
      unread: _.some(e => d.default.hasUnread(e))
    })), R = a.useCallback(() => {
      r.default.toggleGuildFolderExpand(E)
    }, [E]), M = a.useCallback(e => {
      (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("896982").then(n.bind(n, "896982"));
        return t => (0, l.jsx)(e, {
          ...t,
          folderId: E,
          folderName: g,
          folderColor: I,
          unread: x || v > 0
        })
      })
    }, [E, g, I, x, v]);
    return (0, l.jsx)(h.default, {
      ...m,
      folderNode: t,
      expanded: T,
      selected: null != N && _.includes(N),
      mentionCount: v,
      unread: x,
      mediaState: L,
      defaultFolderName: A,
      onExpandCollapse: R,
      onContextMenu: M
    })
  })