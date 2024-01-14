"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("26989"),
  o = n("501536"),
  s = n("25292"),
  a = n("158998"),
  u = n("200294"),
  d = n("851745"),
  c = n("406291"),
  f = n("782340");
let p = {
  sentinel: c.MENTION_SENTINEL,
  stores: [r.default],
  matches: (e, t, n, l, i) => (i.mentions.user !== d.UserMentionMode.DENY || i.mentions.role !== d.RoleMentionMode.DENY || i.mentions.global !== d.GlobalMentionMode.DENY) && !0,
  queryResults(e, t, n, l, i) {
    let r = l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE || l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
      o = l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
      a = l.mentions.user !== d.UserMentionMode.DENY,
      u = l.mentions.role !== d.RoleMentionMode.DENY,
      c = l.mentions.clyde !== d.ClydeMentionMode.DENY,
      f = l.mentions.user === d.UserMentionMode.ALLOW_GUILD,
      p = l.mentions.role === d.RoleMentionMode.ALLOW_ALL,
      m = s.default.queryMentionResults({
        query: n,
        channel: e,
        canMentionEveryone: r,
        canMentionHere: o,
        canMentionUsers: a,
        canMentionRoles: u,
        canMentionClyde: c,
        includeAllGuildUsers: f,
        includeNonMentionableRoles: p,
        request: i
      });
    return {
      results: m
    }
  },
  renderResults(e) {
    let t, n, {
        results: {
          users: r,
          globals: s,
          roles: a
        },
        selectedIndex: p,
        channel: m,
        query: h,
        options: E,
        onHover: S,
        onClick: g
      } = e,
      C = r.map((e, t) => (0, l.jsx)(o.default.User, {
        guildId: m.guild_id,
        onClick: g,
        onHover: S,
        selected: p === t,
        index: t,
        user: e.user,
        nick: e.nick,
        status: e.status,
        hidePersonalInformation: E.hidePersonalInformation
      }, e.user.id)),
      T = s.map((e, t) => (0, l.jsx)(o.default.Generic, {
        onClick: g,
        onHover: S,
        selected: p === t + r.length,
        index: r.length + t,
        text: e.text,
        description: E.hideMentionDescription ? null : e.description,
        "aria-label": e.text
      }, e.text)),
      v = a.map((e, t) => (0, l.jsx)(o.default.Role, {
        onClick: g,
        onHover: S,
        selected: p === t + r.length + s.length,
        index: r.length + s.length + t,
        role: e,
        hideDescription: E.hideMentionDescription
      }, e.id)),
      y = E.mentions.user === d.UserMentionMode.DENY;
    return y ? (t = f.default.Messages.ROLES_MATCHING, n = f.default.Messages.ROLES) : (t = f.default.Messages.MEMBERS_MATCHING, n = f.default.Messages.MEMBERS), (0, l.jsxs)(i.Fragment, {
      children: [(0, u.renderHeader)({
        titleWithQuery: t,
        titleWithoutQuery: n,
        query: h,
        getQuery: e => "".concat(c.MENTION_SENTINEL).concat(e)
      }), C, r.length > 0 && s.length > 0 ? (0, l.jsx)(o.default.Divider, {}) : null, T, r.length > 0 && a.length > 0 || s.length > 0 && a.length > 0 ? (0, l.jsx)(o.default.Divider, {}) : null, v]
    }, "mentions")
  },
  onSelect(e) {
    let {
      results: {
        users: t,
        globals: n,
        roles: l
      },
      index: i,
      options: r,
      channel: o
    } = e, u = t[i], f = n[i - t.length], p = l[i - t.length - n.length];
    return null != u ? r.insertText(function(e, t, n) {
      return s.default.hasSameRoleAsUsername(t, e) ? "".concat(c.MENTION_SENTINEL).concat(e.tag) : "".concat(c.MENTION_SENTINEL).concat(a.default.getUserTag(e, {
        identifiable: n ? "never" : "always"
      }))
    }(u.user, o, r.hidePersonalInformation), function(e) {
      return "<@".concat(e.id, ">")
    }(u.user)) : null != f ? r.insertText(function(e) {
      return e.text
    }(f)) : null != p && r.insertText(function(e) {
      return "".concat(c.MENTION_SENTINEL).concat(e.name)
    }(p), function(e) {
      return "<@&".concat(e.id, ">")
    }(p)), {
      type: d.AutocompleteSelectionTypes.MENTION
    }
  }
};
var m = p