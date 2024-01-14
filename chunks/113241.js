"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var i = l("37983");
l("884691");
var a = l("414456"),
  n = l.n(a),
  s = l("125352"),
  r = l("77078"),
  c = l("599110"),
  o = l("599994"),
  d = l("682777"),
  u = l("653891"),
  p = l("288914"),
  m = l("412707"),
  _ = l("646186"),
  f = l("417152"),
  h = l("49111"),
  C = l("332119");

function g(e) {
  let {
    collection: t,
    collection: {
      id: l,
      title: a,
      application_directory_collection_items: g
    }
  } = e, I = (0, f.default)({
    collection: t
  }), A = (0, m.useApplicationDirectoryHistory)(e => e.guildId);
  return (0, i.jsxs)("div", {
    ref: I,
    children: [(0, i.jsx)(r.Heading, {
      variant: "heading-lg/semibold",
      className: C.header,
      children: a
    }), (0, i.jsx)("div", {
      className: C.list,
      children: g.map(e => {
        let {
          id: t,
          type: a,
          application: m,
          image_hash: f,
          title: g,
          description: I,
          call_to_action_label: E,
          call_to_action_url: v
        } = e;
        if (null == f) return;
        let x = (0, d.getCollectionItemAssetUrl)({
          itemId: t,
          hash: f
        });
        return a === s.ApplicationDirectoryCollectionItemType.APPLICATION && null != m ? (0, i.jsx)(o.default, {
          href: h.Routes.APPLICATION_DIRECTORY_PROFILE(m.id),
          className: C.item,
          children: (0, i.jsx)(u.default, {
            imageSrc: x,
            application: m,
            onClick: e => {
              let {
                mutualGuilds: t
              } = e;
              c.default.track(h.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: l,
                application_id: m.id,
                guild_id: A,
                shown_mutual_guilds_count: t.length
              }), (0, _.goToApplication)({
                applicationId: m.id
              })
            },
            animatesOnHover: !0
          })
        }, t) : a === s.ApplicationDirectoryCollectionItemType.LINK && null != g ? (0, i.jsxs)(p.default, {
          className: n(C.item, C.linkCard),
          imageSrc: x,
          header: g,
          headerClassName: C.cardHeader,
          children: [(0, i.jsx)(r.Text, {
            variant: "text-sm/normal",
            className: C.linkDescription,
            children: I
          }), (0, i.jsx)(r.Anchor, {
            onClick: () => {
              c.default.track(h.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: l,
                link: v,
                guild_id: A,
                shown_mutual_guilds_count: void 0
              })
            },
            href: v,
            className: n((0, r.getButtonStyle)(), C.linkCta),
            children: E
          })]
        }, t) : void 0
      })
    })]
  })
}