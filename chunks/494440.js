"use strict";
r.r(t), r.d(t, {
  default: function() {
    return g
  }
}), r("222007");
var o = r("37983"),
  a = r("884691"),
  n = r("917351"),
  l = r.n(n),
  s = r("446674"),
  i = r("77078"),
  u = r("351105"),
  d = r("581583"),
  c = r("957255"),
  p = r("414943"),
  h = r("782340"),
  v = r("432948"),
  g = e => {
    let {
      guild: t,
      transitionState: r,
      onClose: n
    } = e, [g, f] = a.useState(7), [m, b] = a.useState(null), [x, E] = a.useState([]), S = a.useCallback(async () => {
      b(null);
      let e = await u.default.updateEstimate(t.id, g, x);
      b(e)
    }, [g, t.id, x]);
    a.useEffect(() => {
      S()
    }, [S]);
    let M = (0, s.useStateFromStoresArray)([c.default], () => {
      let e = c.default.getHighestRole(t);
      return l(t.roles).sortBy(e => e.position).filter(e => e.id !== t.id).filter(r => c.default.isRoleHigher(t, e, r)).value().map(e => {
        let {
          id: t,
          name: r
        } = e;
        return {
          label: r,
          value: t
        }
      })
    }, [t]);
    return (0, o.jsxs)(i.ModalRoot, {
      transitionState: r,
      children: [(0, o.jsx)(i.ModalHeader, {
        separator: !1,
        children: (0, o.jsxs)(i.Heading, {
          variant: "heading-lg/semibold",
          children: [h.default.Messages.PRUNE_MEMBERS, "—", null != t ? t.toString() : ""]
        })
      }), (0, o.jsxs)("div", {
        className: v.content,
        children: [(0, o.jsx)(i.FormItem, {
          title: h.default.Messages.FORM_LABEL_LAST_SEEN,
          children: (0, o.jsx)(i.RadioGroup, {
            value: g,
            options: [{
              name: h.default.Messages.LAST_SEEN.format({
                days: 7
              }),
              value: 7
            }, {
              name: h.default.Messages.LAST_SEEN.format({
                days: 30
              }),
              value: 30
            }],
            onChange: e => {
              let {
                value: t
              } = e;
              f(t)
            },
            className: v.spacing
          })
        }), (0, o.jsx)(i.FormItem, {
          title: h.default.Messages.PRUNE_WITH_ROLES,
          children: (0, o.jsx)(p.default, {
            isMulti: !0,
            options: M,
            onChange: e => {
              E(e.map(e => e.value))
            },
            value: x,
            multiValueRenderer: e => {
              let {
                value: r
              } = e, a = t.getRole(r);
              if (null == a) return null;
              let n = x.indexOf(r);
              return (0, o.jsx)(d.MemberRole, {
                className: v.role,
                role: a,
                canRemove: !0,
                onRemove: () => {
                  E([...x.slice(0, n), ...x.slice(n + 1)])
                },
                onMouseDown: e => {
                  e.stopPropagation(), e.preventDefault()
                },
                guildId: t.id
              })
            },
            maxMenuHeight: 200
          })
        }), (0, o.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: v.spacing,
          children: x.length > 0 ? h.default.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({
            members: m,
            days: g
          }) : h.default.Messages.FORM_HELP_LAST_SEEN_1.format({
            members: m,
            days: g
          })
        })]
      }), (0, o.jsxs)(i.ModalFooter, {
        children: [(0, o.jsx)(i.Button, {
          onClick: () => {
            u.default.prune(t.id, g, x), n()
          },
          children: h.default.Messages.PRUNE
        }), (0, o.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: n,
          children: h.default.Messages.CANCEL
        })]
      })]
    })
  }