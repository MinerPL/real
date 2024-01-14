"use strict";
s.r(t), s.d(t, {
  ChannelSettingsPermissionsNotice: function() {
    return G
  },
  default: function() {
    return K
  }
}), s("808653"), s("424973"), s("70102");
var l = s("37983"),
  a = s("884691"),
  n = s("917351"),
  i = s.n(n),
  r = s("316693"),
  o = s("446674"),
  d = s("819855"),
  u = s("77078"),
  c = s("404118"),
  h = s("450911"),
  E = s("318738"),
  f = s("881888"),
  m = s("900676"),
  g = s("45299"),
  T = s("798609"),
  S = s("841098"),
  N = s("206230"),
  C = s("923510"),
  _ = s("766274"),
  p = s("901998"),
  M = s("492114"),
  x = s("26989"),
  R = s("305961"),
  I = s("957255"),
  A = s("697218"),
  O = s("669021"),
  L = s("730988"),
  v = s("449008"),
  j = s("651879"),
  D = s("701909"),
  y = s("387111"),
  F = s("465305"),
  b = s("991170"),
  P = s("158998"),
  H = s("51944"),
  w = s("49111"),
  U = s("782340"),
  B = s("896888");
let G = o.default.connectStores([p.default, M.default], () => {
  let e = M.default.getChannel(),
    t = p.default.formState;
  return {
    submitting: t === w.FormStates.SUBMITTING,
    onReset() {
      (0, E.init)()
    },
    onSave() {
      if (null == e) return;
      let t = p.default.editedPermissionIds.reduce((e, t) => {
        let s = p.default.getPermissionOverwrite(t);
        return null != s && e.push(s), e
      }, []);
      (0, E.savePermissionUpdates)(e.id, t)
    }
  }
})(g.default);

function V(e) {
  let {
    overwrite: t
  } = e, s = (0, o.useStateFromStores)([p.default], () => p.default.channel), a = (0, o.useStateFromStores)([R.default], () => null != s ? R.default.getGuild(s.getGuildId()) : null);
  if (null == s || null == a || null == t) return null;
  let {
    guild_id: n,
    id: i
  } = s, {
    id: d
  } = t, f = () => {
    var e;
    let t = R.default.getGuild(n);
    if (null == t) return "";
    let s = t.getRole(d),
      l = A.default.getUser(d),
      a = null !== (e = null == l ? void 0 : l.username) && void 0 !== e ? e : "";
    return null != s ? s.name : a
  }, g = (e, l) => {
    if ("boolean" == typeof l) throw Error("Unexpected boolean action");
    let {
      allow: a,
      deny: n
    } = t;
    switch (n = r.default.remove(n, e), a = r.default.remove(a, e), l) {
      case "ALLOW":
        a = r.default.add(a, e);
        break;
      case "DENY":
        n = r.default.add(n, e)
    }
    if (I.default.can(e, s, {
        [d]: {
          ...t,
          allow: a,
          deny: n
        }
      }))(0, E.updatePermission)(s, d, a, n);
    else {
      let e;
      if (t.type === T.PermissionOverwriteType.MEMBER) {
        let s = A.default.getUser(t.id);
        null != s && (e = P.default.getName(s))
      } else if (t.type === T.PermissionOverwriteType.ROLE) {
        let l = R.default.getGuild(s.getGuildId());
        if (null != l) {
          let s = l.getRole(t.id);
          null != s && (e = s.name)
        }
      }
      H.showPermissionLockoutModal(e)
    }
  }, S = () => {
    let e = f();
    c.default.show({
      title: U.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
      body: U.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
        name: e
      }),
      cancelText: U.default.Messages.CANCEL,
      onConfirm: () => h.default.clearPermissionOverwrite(i, d)
    })
  }, N = e => {
    let t = I.default.can(w.Permissions.ADMINISTRATOR, a) || I.default.can(w.Permissions.MANAGE_ROLES, s, void 0, void 0, !0);
    return s.isGuildStageVoice() && C.STAGE_CHANNEL_DISABLED_PERMISSIONS.has(e) ? U.default.Messages.STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION : !((!r.default.equals(e, w.Permissions.MANAGE_ROLES) || t) && (null == e || I.default.can(e, a) || t)) && U.default.Messages.HELP_MISSING_PERMISSION
  }, _ = d === n, M = s.isForumLikeChannel() && r.default.has(t.deny, w.Permissions.SEND_MESSAGES), x = r.default.has(t.deny, w.Permissions.SEND_MESSAGES), O = r.default.has(t.deny, w.Permissions.READ_MESSAGE_HISTORY), v = F.default.generateChannelPermissionSpec(n, s, _, {
    createPostsDisabled: M,
    sendMessagesDisabled: x,
    readMessageHistoryDisabled: O
  });
  return (0, l.jsxs)(L.default.Content, {
    className: B.layoutStyle,
    children: [v.map((e, s) => (0, l.jsx)(m.default, {
      spec: e,
      allow: t.allow,
      deny: t.deny,
      onChange: g,
      permissionRender: N,
      className: B.permissionsForm
    }, s)), n === d ? null : (0, l.jsx)(u.Button, {
      look: u.Button.Looks.OUTLINED,
      color: u.Button.Colors.RED,
      onClick: S,
      children: U.default.Messages.REMOVE_ROLE_OR_USER.format({
        name: f()
      })
    })]
  })
}

function k(e) {
  let {
    guildId: t,
    channelId: s,
    user: a
  } = e, n = a.getAvatarURL(t, 32), i = y.default.getNickname(t, s, a), r = P.default.useUserTag(a), o = null, d = null;
  return o = null != i ? i : a.hasAvatarForGuild(t) ? a.username : r, (null != i || a.hasAvatarForGuild(t)) && (d = (0, l.jsxs)("div", {
    className: B.userRowSubText,
    children: [a.hasAvatarForGuild(t) ? (0, l.jsx)(u.Avatar, {
      className: B.userRowSubAvatar,
      size: u.AvatarSizes.SIZE_16,
      src: a.getAvatarURL(void 0, 16),
      "aria-label": a.username
    }) : null, (0, l.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: r
    })]
  })), (0, l.jsxs)("div", {
    className: B.inline,
    children: [(0, l.jsx)(u.Avatar, {
      size: u.AvatarSizes.SIZE_32,
      src: n,
      "aria-label": a.username,
      className: B.userRowAvatar
    }), (0, l.jsxs)("div", {
      className: B.userRowText,
      children: [(0, l.jsx)(u.Text, {
        className: B.userRowText,
        variant: "text-md/normal",
        children: o
      }), d]
    })]
  })
}

function W(e) {
  return "object" == typeof e && null != e && "colorString" in e && "name" in e
}

function Y(e) {
  let {
    guild: t,
    channel: s,
    permissionOverwrites: a,
    onClose: n,
    onSelect: r,
    position: d
  } = e, u = (0, o.useStateFromStores)([x.default], () => x.default.getMemberIds(t.id));
  return (0, l.jsx)(O.default, {
    label: U.default.Messages.OVERWRITE_AUTOCOMPLETE_LABEL,
    placeholder: U.default.Messages.OVERWRITE_AUTOCOMPLETE_PLACEHOLDER,
    "aria-label": U.default.Messages.OVERWRITE_AUTOCOMPLETE_A11Y_LABEL,
    sections: [U.default.Messages.ROLES, U.default.Messages.MEMBERS],
    onRenderResult: e => {
      if (W(e)) {
        let t;
        return null != e.colorString && (t = {
          color: e.colorString
        }), (0, l.jsx)("span", {
          style: t,
          children: e.name
        })
      }
      if (e instanceof _.default) return (0, l.jsx)(k, {
        guildId: t.id,
        channelId: s.id,
        user: e
      })
    },
    onFilterResults: (e, s) => 0 === s ? i(t.roles).filter(t => null == a[t.id] && e(t.name)).sortBy(e => -e.position).value() : i(u).map(A.default.getUser).filter(v.isNotNullish).filter(e => !e.isClyde()).filter(t => null == a[t.id] && e(t.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value(),
    onQueryChange: e => {
      j.default.requestMembers(t.id, e, 20)
    },
    onSelect: e => {
      null != e && (W(e) ? r(e.id, T.PermissionOverwriteType.ROLE) : e instanceof _.default && r(e.id, T.PermissionOverwriteType.MEMBER))
    },
    onClose: n,
    position: d
  })
}

function z() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: n
  } = (0, o.useStateFromStoresObject)([p.default], () => p.default), r = (0, o.useStateFromStores)([R.default], () => null != e ? R.default.getGuild(e.getGuildId()) : null), c = (0, S.default)(), m = (0, o.useStateFromStores)([N.default], () => N.default.roleStyle);
  if (null == r || null == e || null == t) return null;
  let g = s => {
      let {
        position: a,
        closePopout: n
      } = s;
      return (0, l.jsx)(Y, {
        guild: r,
        channel: e,
        permissionOverwrites: t,
        position: null != a ? a : "bottom",
        onSelect: C,
        onClose: n
      })
    },
    C = (t, s) => {
      h.default.updatePermissionOverwrite(e.id, {
        id: t,
        type: s,
        allow: b.default.NONE,
        deny: b.default.NONE
      }).then(() => (0, E.selectPermission)(t))
    };
  null != t && null == t[r.id] && (t[r.id] = b.default.makeEveryoneOverwrite(r.id));
  let _ = i(t).filter(e => e.type === T.PermissionOverwriteType.ROLE).map(e => r.getRole(e.id)).filter(v.isNotNullish).sortBy(e => -e.position).map(e => (0, l.jsx)(f.default, {
      theme: c,
      roleStyle: m,
      id: e.id,
      role: e,
      guild: r,
      color: e.colorString,
      "aria-label": e.name,
      children: e.name
    }, "".concat(n, "-").concat(e.id))).value(),
    M = i(t).filter(e => e.type === T.PermissionOverwriteType.MEMBER).map(e => A.default.getUser(e.id)).filter(v.isNotNullish).sortBy(e => e.username.toLowerCase()).map(e => {
      let t = e.getAvatarURL(r.id, 24);
      return (0, l.jsx)(f.default, {
        id: e.id,
        guild: r,
        theme: c,
        roleStyle: m,
        "aria-label": P.default.getUserTag(e, {
          decoration: "never"
        }),
        children: (0, l.jsxs)("div", {
          className: B.inline,
          children: [(0, l.jsx)(u.Avatar, {
            size: u.AvatarSizes.SIZE_20,
            src: t,
            "aria-label": e.username,
            className: B.xsmallAvatar
          }), (0, l.jsx)("span", {
            className: B.username,
            children: P.default.getUserTag(e)
          })]
        })
      }, "".concat(n, "-").concat(e.id))
    }).value();
  return (0, l.jsx)(L.default.Sidebar, {
    className: B.layoutStyle,
    scrollable: !0,
    children: (0, l.jsxs)(u.TabBar, {
      onItemSelect: E.selectPermission,
      selectedItem: n,
      orientation: "vertical",
      children: [(() => {
        let e = (0, d.isThemeDark)(c) ? s("706832") : s("623264");
        return (0, l.jsx)(u.Popout, {
          renderPopout: g,
          position: "bottom",
          autoInvert: !1,
          children: t => (0, l.jsx)(u.TabBar.Header, {
            ...t,
            children: (0, l.jsxs)("div", {
              className: B.sidebarHeaderDefault,
              children: [(0, l.jsxs)("span", {
                children: [U.default.Messages.ROLES, "/", U.default.Messages.MEMBERS]
              }), (0, l.jsx)("img", {
                alt: "",
                className: B.sidebarHeader,
                src: e
              })]
            })
          })
        })
      })(), _, M, (0, l.jsxs)(a.Fragment, {
        children: [(0, l.jsx)(u.TabBar.Separator, {
          style: {
            marginTop: 20,
            marginBottom: 14
          }
        }), (0, l.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          children: (0, l.jsx)(u.Anchor, {
            href: D.default.getArticleURL(w.HelpdeskArticles.PERMISSIONS_TUTORIAL),
            target: "_blank",
            children: U.default.Messages.PERMISSION_HELPDESK
          })
        })]
      })]
    })
  })
}

function K() {
  let {
    channel: e,
    permissionOverwrites: t,
    selectedOverwriteId: s
  } = (0, o.useStateFromStoresObject)([p.default], () => p.default), a = (0, o.useStateFromStores)([R.default], () => null != e ? R.default.getGuild(e.getGuildId()) : null);
  if (null == a || null == e || null == t || null == s) return null;
  let n = t[s];
  return (0, l.jsxs)(L.default, {
    className: B.container,
    children: [(0, l.jsx)(z, {}), (0, l.jsx)(V, {
      overwrite: n
    })]
  })
}