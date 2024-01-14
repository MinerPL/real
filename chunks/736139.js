"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("222007"), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  i = s("77078"),
  r = s("450911"),
  u = s("685073"),
  d = s("819689"),
  o = s("812204"),
  c = s("843962"),
  f = s("679653"),
  E = s("305961"),
  h = s("705955"),
  m = s("27618"),
  p = s("697218"),
  I = s("646240"),
  A = s("578706"),
  C = s("83900"),
  R = s("599110"),
  _ = s("315102"),
  g = s("306160"),
  N = s("354023"),
  v = s("159885"),
  S = s("158998"),
  T = s("335189"),
  y = s("49111"),
  L = s("782340"),
  x = s("627269");

function F(e) {
  let {
    guildId: t,
    ...s
  } = e, [c, f] = l.useState(""), [E, m] = l.useState([]), [p, A] = l.useState(""), {
    onClose: C
  } = s, _ = "".concat(window.location.origin).concat(y.Endpoints.CLYDE_PROFILES(p)), g = (0, n.useStateFromStoresArray)([h.default], () => h.default.getInviteSuggestionRows());
  l.useEffect(() => {
    (0, u.loadInviteSuggestions)({
      omitUserIds: new Set
    })
  }, []), l.useEffect(() => {
    (0, T.createClydeProfile)(t).then(e => {
      null != e ? A(null == e ? void 0 : e.clyde_profile_id) : ((0, i.showToast)((0, i.createToast)(L.default.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, i.ToastType.FAILURE)), C())
    })
  }, [t, C]), l.useEffect(() => (0, u.searchInviteSuggestions)(c), [c]);
  let v = l.useCallback(async () => {
    let e = 0,
      a = 0,
      l = 0,
      n = h.default.getInviteSuggestionRows().filter(e => E.includes(e.item.id)).map(t => (function(t, s) {
        switch (t.type) {
          case N.RowTypes.DM:
          case N.RowTypes.FRIEND:
            e++;
            break;
          case N.RowTypes.GROUP_DM:
            a++;
            break;
          case N.RowTypes.CHANNEL:
            l++
        }
        return t.type === N.RowTypes.GROUP_DM || t.type === N.RowTypes.CHANNEL ? d.default.sendClydeProfileOverride(t.item.id, s, o.default.CLYDE_PROFILE_SHARE_MODAL, null) : t.type === N.RowTypes.DM || t.type === N.RowTypes.FRIEND ? r.default.ensurePrivateChannel(t.item.id).then(e => d.default.sendClydeProfileOverride(e, _, o.default.CLYDE_PROFILE_SHARE_MODAL, null)) : Promise.resolve()
      })(t, _));
    await n, R.default.track(y.AnalyticEvents.CLYDE_AI_SHARE_LINK_SENT, {
      guild_id: t,
      clyde_profile_id: p,
      num_users: e,
      num_gdms: a,
      num_channels: l
    }), s.onClose()
  }, [E, s, _, t, p]);
  return (0, a.jsxs)(i.ModalRoot, {
    ...s,
    className: x.modalRoot,
    children: [(0, a.jsxs)(i.ModalHeader, {
      className: x.header,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: L.default.Messages.CLYDE_PROFILE_SHARE_HEADER
      }), (0, a.jsx)(i.ModalCloseButton, {
        onClick: s.onClose
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: x.modalContent,
      children: [(0, a.jsx)(I.default, {
        className: x.searchBar,
        placeholder: L.default.Messages.SEARCH,
        label: L.default.Messages.SEARCH,
        searchTerm: c,
        onChange: e => f(e),
        onClear: () => f("")
      }), g.map((e, t) => (0, a.jsxs)(l.Fragment, {
        children: [0 === t ? null : (0, a.jsx)("div", {
          className: x.rowDivider
        }), (0, a.jsx)(D, {
          row: e,
          onClick: () => {
            let t = [...E];
            t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), m(t)
          },
          checked: E.includes(e.item.id)
        })]
      }, e.item.id))]
    }), (0, a.jsxs)(i.ModalFooter, {
      className: x.footer,
      children: [(0, a.jsx)("div", {
        className: x.footerDivider
      }), (0, a.jsxs)("div", {
        className: x.copySendBar,
        children: [(0, a.jsx)(w, {
          link: _,
          clydeProfileId: p,
          guildId: t
        }), (0, a.jsx)(i.Button, {
          onClick: v,
          disabled: E.length <= 0 || "" === p,
          children: L.default.Messages.SEND
        })]
      })]
    })]
  })
}

function D(e) {
  let {
    row: t,
    onClick: s,
    checked: l
  } = e, n = null, r = null, u = null;
  switch (t.type) {
    case N.RowTypes.DM:
    case N.RowTypes.FRIEND:
      n = (0, a.jsx)(i.Avatar, {
        size: i.AvatarSizes.SIZE_40,
        src: t.item.getAvatarURL(null, 128, !1),
        "aria-label": t.item.username
      }), r = S.default.getName(t.item), u = S.default.getUserTag(t.item);
      break;
    case N.RowTypes.GROUP_DM: {
      let e = (0, c.getChannelIconURL)(t.item),
        s = (0, f.computeChannelName)(t.item, p.default, m.default);
      n = (0, a.jsx)(i.Avatar, {
        src: e,
        "aria-label": s,
        size: i.AvatarSizes.SIZE_40
      }), r = (0, f.computeChannelName)(t.item, p.default, m.default);
      break
    }
    case N.RowTypes.CHANNEL: {
      let e = t.item,
        s = E.default.getGuild(e.guild_id);
      if (null == s) return null;
      if (r = "#".concat((0, f.computeChannelName)(e, p.default, m.default)), u = s.name, null != s.icon) {
        let t = _.default.getGuildIconURL({
          id: e.guild_id,
          icon: s.icon,
          size: 40
        });
        n = (0, a.jsx)(i.Avatar, {
          src: t,
          "aria-label": r,
          size: i.AvatarSizes.SIZE_40
        })
      } else {
        let e = (0, v.getAcronym)(s.name);
        n = (0, a.jsx)("div", {
          className: x.acronym,
          "aria-hidden": !0,
          children: e
        })
      }
    }
  }
  return (0, a.jsxs)(i.Clickable, {
    onClick: s,
    className: x.rowContainer,
    children: [(0, a.jsxs)("div", {
      className: x.rowLeft,
      children: [(0, a.jsx)("div", {
        className: x.rowAvatar,
        children: n
      }), (0, a.jsxs)("div", {
        className: x.rowNameContainer,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          className: x.rowName,
          children: r
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          className: x.rowSubName,
          children: u
        })]
      })]
    }), (0, a.jsx)(i.Checkbox, {
      value: l,
      type: i.Checkbox.Types.INVERTED,
      displayOnly: !0,
      className: x.rowRight
    })]
  })
}

function w(e) {
  let {
    link: t,
    guildId: s,
    clydeProfileId: n
  } = e, [r, u] = l.useState(!1);
  return l.useEffect(() => {
    let e;
    return r && (e = setTimeout(() => {
      u(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [r]), (0, a.jsxs)(i.Button, {
    look: i.Button.Looks.LINK,
    color: i.Button.Colors.LINK,
    onClick: function() {
      (0, g.copy)(t), u(!0), R.default.track(y.AnalyticEvents.CLYDE_AI_SHARE_LINK_COPIED, {
        guild_id: s,
        clyde_profile_id: n
      })
    },
    innerClassName: x.copyButton,
    children: [r ? (0, a.jsx)(A.default, {}) : (0, a.jsx)(C.default, {}), r ? L.default.Messages.COPIED : L.default.Messages.COPY_LINK]
  })
}