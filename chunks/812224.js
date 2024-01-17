"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  a = n("77078"),
  i = n("174622"),
  r = n("478895"),
  o = n("569808"),
  u = n("579033"),
  d = n("782340"),
  c = n("349934"),
  f = n("18978");

function E(e) {
  var t;
  let {
    code: E
  } = e, _ = (0, l.useStateFromStores)([o.default], () => o.default.getGuildTemplate(E));
  if (null == _ || _.state === u.GuildTemplateStates.RESOLVING) return (0, s.jsxs)(i.default, {
    children: [(0, s.jsx)(i.default.Header, {
      text: d.default.Messages.GUILD_TEMPLATE_RESOLVING_TITLE
    }), (0, s.jsx)(i.default.Body, {
      resolving: !0
    })]
  });
  if (_.state === u.GuildTemplateStates.EXPIRED) return (0, s.jsxs)(i.default, {
    children: [(0, s.jsx)(i.default.Header, {
      text: d.default.Messages.GUILD_TEMPLATE_INVALID_TITLE
    }), (0, s.jsxs)(i.default.Body, {
      children: [(0, s.jsx)(i.default.Icon, {
        expired: !0
      }), (0, s.jsx)(i.default.Info, {
        expired: !0,
        title: d.default.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
      })]
    })]
  });
  let T = __OVERLAY__ ? (0, s.jsx)(i.default.Button, {
    isDisabled: !0,
    color: i.default.Button.Colors.PRIMARY,
    children: d.default.Messages.GUILD_TEMPLATE_EMBED_VIEW_IN_APP
  }) : (0, s.jsx)(i.default.Button, {
    onClick: () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("843456").then(n.bind(n, "843456"));
        return t => (0, s.jsx)(e, {
          ...t,
          guildTemplate: _
        })
      })
    },
    submitting: _.state === u.GuildTemplateStates.ACCEPTING,
    color: i.default.Button.Colors.GREEN,
    children: d.default.Messages.GUILD_TEMPLATE_OPEN
  });
  return (0, s.jsxs)(i.default, {
    children: [(0, s.jsx)(i.default.Header, {
      text: d.default.Messages.GUILD_TEMPLATE_RESOLVED_EMBED_TITLE
    }), (0, s.jsxs)(i.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: f.headerLine,
        children: [(0, s.jsx)(r.default, {
          className: c.icon
        }), (0, s.jsx)(i.default.Info, {
          title: _.name,
          children: d.default.Messages.GUILD_TEMPLATE_USAGES.format({
            usageCount: String(null !== (t = _.usageCount) && void 0 !== t ? t : 0)
          })
        })]
      }), T]
    })]
  })
}