"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("759843"),
  i = n("65597"),
  r = n("77078"),
  o = n("428958"),
  u = n("18494"),
  d = n("79798"),
  c = n("174622"),
  f = n("335189"),
  E = n("473591"),
  _ = n("371348"),
  T = n("857697"),
  I = n("988268"),
  m = n("782340"),
  N = n("786860");

function p(e) {
  let {
    code: t
  } = e, {
    clydeProfile: n,
    isFetching: p
  } = (0, i.useStateFromStoresObject)([E.default], () => ({
    clydeProfile: E.default.getProfile(t),
    isFetching: E.default.isFetchingProfile(t)
  })), S = (0, i.default)([u.default], u.default.getCurrentlySelectedChannelId);
  if (l.useEffect(() => {
      (0, f.fetchClydeProfile)(t)
    }, [t]), (0, o.default)({
      type: a.ImpressionTypes.VIEW,
      name: a.ImpressionNames.CLYDE_AI_PROFILE_EMBED_VIEWED,
      properties: {
        clyde_profile_id: null == n ? void 0 : n.clyde_profile_id,
        channel_id: S
      }
    }, {
      disableTrack: null == n || null == S
    }), p) return (0, s.jsxs)(c.default, {
    children: [(0, s.jsx)(c.default.Header, {
      text: m.default.Messages.CLYDE_PROFILE_EMBED_RESOLVING_HEADER
    }), (0, s.jsx)(c.default.Body, {
      resolving: !0
    })]
  });
  if (null == n) return (0, s.jsxs)(c.default, {
    children: [(0, s.jsx)(c.default.Header, {
      text: m.default.Messages.CLYDE_PROFILE_EMBED_INVALID_HEADER
    }), (0, s.jsx)(c.default.Body, {
      children: (0, s.jsxs)("div", {
        className: N.invalidBody,
        children: [(0, s.jsx)(c.default.Icon, {
          expired: !0
        }), (0, s.jsx)(c.default.Info, {
          expired: !0,
          title: m.default.Messages.CLYDE_PROFILE_EMBED_INVALID_INFO_TITLE,
          children: m.default.Messages.CLYDE_PROFILE_EMBED_INVALID_INFO_BODY
        })]
      })
    })]
  });
  let A = (0, _.default)(n, !1, 56);
  return (0, s.jsxs)(c.default, {
    children: [(0, s.jsx)(c.default.Header, {
      text: m.default.Messages.CLYDE_PROFILE_EMBED_HEADER
    }), (0, s.jsxs)(c.default.Body, {
      children: [(0, s.jsxs)(r.Clickable, {
        className: N.profileInfoContainer,
        onClick: () => (0, T.default)(n),
        children: [(0, s.jsx)(r.Avatar, {
          src: A,
          size: r.AvatarSizes.SIZE_56,
          "aria-hidden": !0
        }), (0, s.jsxs)("div", {
          className: N.profileNameContainer,
          children: [(0, s.jsx)(c.default.Info, {
            title: n.name
          }), (0, s.jsx)(d.default, {
            type: I.BotTagTypes.AI
          })]
        })]
      }), (0, s.jsx)(c.default.Button, {
        className: N.applyButton,
        onClick: () => {
          (0, T.default)(n)
        },
        color: c.default.Button.Colors.BRAND,
        children: m.default.Messages.CLYDE_PROFILE_APPLY
      })]
    })]
  })
}