"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("37983");
n("884691");
var s = n("151426"),
  i = n("77078"),
  l = n("913144"),
  r = n("316272"),
  o = n("10641"),
  u = n("525065"),
  d = n("305961"),
  c = n("957255"),
  E = n("867965"),
  f = n("49111"),
  _ = n("994428");
let h = e => {
  var t;
  let n = d.default.getGuild(e),
    a = !!(null == n ? void 0 : n.hasFeature(f.GuildFeatures.COMMUNITY)),
    i = c.default.can(f.Permissions.MANAGE_CHANNELS, n),
    l = (0, o.isDismissibleContentDismissed)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL),
    r = null !== (t = u.default.getMemberCount(e)) && void 0 !== t ? t : 0;
  return a && i && !l && r >= 200
};
class C extends r.default {
  _initialize() {
    l.default.subscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  _terminate() {
    l.default.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect)
  }
  handleChannelSelect(e) {
    let {
      guildId: t
    } = e;
    if (null == t) return;
    let l = h(t);
    if (!l) return;
    (0, E.trackForumUpsellModalViewed)(), (0, o.requestMarkDismissibleContentAsShown)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL);
    let r = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.ContentDismissActionType.DISMISS;
      (0, o.markDismissibleContentAsDismissed)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: e
      })
    };
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("135430").then(n.bind(n, "135430"));
      return n => (0, a.jsx)(e, {
        ...n,
        onClose: e => {
          r(e), n.onClose()
        },
        guildId: t,
        shouldUpsellCreation: !0
      })
    }, {
      onCloseCallback: () => (0, o.markDismissibleContentAsDismissed)(s.DismissibleContent.FORUM_CHANNEL_UPSELL_MODAL, {
        dismissAction: _.ContentDismissActionType.DISMISS
      }),
      onCloseRequest: f.NOOP_NULL
    })
  }
}
var T = new C