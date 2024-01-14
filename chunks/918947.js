"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("851387"),
  d = s("810567"),
  u = s("701909"),
  c = s("126383"),
  E = s("316497"),
  _ = s("49111"),
  T = s("782340"),
  I = s("273899");

function S(e) {
  let {
    guild: t,
    everyoneRole: s,
    filteredRoles: l,
    setEditRoleId: i,
    query: o,
    setQuery: d,
    setHeaderHeight: u
  } = e, c = n.useRef(null);
  n.useEffect(() => {
    var e, t;
    u(null !== (t = null === (e = c.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : E.DEFAULT_HEADER_HEIGHT_PX)
  }, [u]);
  let _ = n.useCallback(() => {
    i(s.id)
  }, [i, s.id]);
  return (0, a.jsxs)("div", {
    ref: c,
    children: [(0, a.jsx)(r.FormTitle, {
      tag: r.FormTitleTags.H1,
      children: T.default.Messages.ROLES
    }), (0, a.jsx)(r.Text, {
      className: I.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: T.default.Messages.ROLE_OVERVIEW_DESCRIPTION
    }), (0, a.jsx)(N, {
      guild: t,
      everyoneRole: s,
      filteredRoles: l,
      query: o,
      setQuery: d,
      onEveryoneRoleClick: _
    })]
  })
}

function N(e) {
  let {
    guild: t,
    everyoneRole: s,
    filteredRoles: n,
    query: l,
    setQuery: o,
    onEveryoneRoleClick: d
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.default, {
      role: s,
      onClick: d
    }), (0, a.jsx)(g, {
      guild: t,
      query: l,
      setQuery: o
    }), (0, a.jsx)(r.Text, {
      className: I.helpText,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: T.default.Messages.ROLE_LIST_BODY_WITH_HELP.format({
        articleURL: u.default.getArticleURL(_.HelpdeskArticles.PERMISSIONS_TUTORIAL)
      })
    }), (0, a.jsx)("div", {
      className: I.rolesTable,
      children: (0, a.jsxs)("div", {
        className: I.tableHeader,
        children: [(0, a.jsx)("div", {
          className: I.dragSpacing
        }), (0, a.jsx)(r.Text, {
          className: i(I.tableTitle, I.roleNameSpacing),
          variant: "text-sm/normal",
          children: T.default.Messages.ROLE_LIST_HEADER.format({
            numRoles: String(n.length)
          })
        }), (0, a.jsx)(r.Text, {
          className: i(I.tableTitle, I.memberSpacing),
          variant: "text-sm/normal",
          children: T.default.Messages.MEMBERS
        }), (0, a.jsx)("div", {
          className: I.buttonsSpacing
        })]
      })
    })]
  })
}

function g(e) {
  let {
    guild: t,
    query: s,
    setQuery: l
  } = e, [i, u] = n.useState(!1), c = n.useCallback(e => {
    l(e)
  }, [l]), E = n.useCallback(() => {
    l("")
  }, [l]), _ = async () => {
    u(!0), await o.default.createRole(t.id), u(!1)
  };
  return (0, a.jsx)("div", {
    className: I.rolesList,
    children: (0, a.jsxs)("div", {
      className: I.searchContainer,
      children: [(0, a.jsx)(d.default, {
        size: d.default.Sizes.MEDIUM,
        query: s,
        onChange: c,
        onClear: E,
        placeholder: T.default.Messages.SEARCH_ROLES,
        "aria-label": T.default.Messages.SEARCH_ROLES
      }), (0, a.jsx)(r.Button, {
        className: I.createButton,
        size: r.Button.Sizes.SMALL,
        onClick: _,
        submitting: i,
        children: T.default.Messages.ROLE_CREATE_CTA
      })]
    })
  })
}