"use strict";
n.r(t), n.d(t, {
  FriendsSearchStatus: function() {
    return a
  },
  default: function() {
    return T
  }
}), n("70102"), n("222007");
var a, s = n("37983"),
  i = n("884691"),
  l = n("458960"),
  r = n("446674"),
  o = n("77078"),
  u = n("161778"),
  d = n("941886"),
  c = n("49111"),
  E = n("782340"),
  f = n("401060");
(a || (a = {})).SECTION_NO_RESULTS = "SECTION_NO_RESULTS";
let _ = Object.freeze({
    SECTION_ALL: {
      lightSrc: n("1547"),
      darkSrc: n("197040"),
      width: 376,
      height: 162,
      renderContent: e => (0, s.jsxs)(i.Fragment, {
        children: [(0, s.jsx)(d.default.Text, {
          note: E.default.Messages.FRIENDS_EMPTY_STATE_ALL
        }), (0, s.jsx)(o.Button, {
          className: f.button,
          onClick: e,
          children: E.default.Messages.ADD_FRIEND
        })]
      })
    },
    SECTION_ONLINE: {
      lightSrc: n("681224"),
      darkSrc: n("819444"),
      width: 421,
      height: 218,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: E.default.Messages.FRIENDS_EMPTY_STATE_ONLINE
      })
    },
    SECTION_BLOCKED: {
      lightSrc: n("289309"),
      darkSrc: n("829361"),
      width: 433,
      height: 232,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: E.default.Messages.FRIENDS_EMPTY_STATE_BLOCKED
      })
    },
    SECTION_PENDING: {
      lightSrc: n("934516"),
      darkSrc: n("855143"),
      width: 415,
      height: 200,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: E.default.Messages.FRIENDS_EMPTY_STATE_PENDING
      })
    },
    SECTION_SUGGESTIONS: {
      lightSrc: n("934516"),
      darkSrc: n("855143"),
      width: 415,
      height: 200,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: E.default.Messages.FRIENDS_EMPTY_STATE_SUGGESTIONS
      })
    },
    SECTION_NO_RESULTS: {
      lightSrc: n("681224"),
      darkSrc: n("819444"),
      width: 421,
      height: 218,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: E.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
      })
    }
  }),
  h = e => {
    let {
      theme: t
    } = e, n = E.default.Messages.FRIENDS_EMPTY_STATE_ALL, a = _.SECTION_ALL;
    return (0, s.jsx)(i.Fragment, {
      children: (0, s.jsxs)(d.default, {
        theme: t,
        children: [(0, s.jsx)(d.default.Image, {
          width: a.width,
          height: a.height,
          lightSrc: a.lightSrc,
          darkSrc: a.darkSrc
        }), (0, s.jsx)(d.default.Text, {
          note: n
        })]
      })
    })
  };
class C extends i.PureComponent {
  render() {
    let {
      type: e,
      onClick: t,
      theme: n
    } = this.props, a = {
      opacity: this.state.opacity
    }, i = function(e) {
      switch (e) {
        case c.FriendsSections.ADD_FRIEND:
        case c.FriendsSections.ALL:
          return _.SECTION_ALL;
        case c.FriendsSections.ONLINE:
          return _.SECTION_ONLINE;
        case c.FriendsSections.PENDING:
          return _.SECTION_PENDING;
        case c.FriendsSections.SUGGESTIONS:
          return _.SECTION_SUGGESTIONS;
        case c.FriendsSections.BLOCKED:
          return _.SECTION_BLOCKED;
        case "SECTION_NO_RESULTS":
          return _.SECTION_NO_RESULTS;
        default:
          throw Error("FriendsEmptyState: Invalid empty state")
      }
    }(e);
    return e === c.FriendsSections.ADD_FRIEND ? (0, s.jsx)(l.default.div, {
      className: f.friendsEmpty,
      style: a,
      children: (0, s.jsx)(h, {
        theme: n
      })
    }) : (0, s.jsx)(l.default.div, {
      className: f.friendsEmpty,
      style: a,
      children: (0, s.jsxs)(d.default, {
        theme: n,
        children: [(0, s.jsx)(d.default.Image, {
          width: i.width,
          height: i.height,
          lightSrc: i.lightSrc,
          darkSrc: i.darkSrc
        }), i.renderContent(t)]
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      opacity: new l.default.Value(1)
    }, this.componentWillEnter = e => {
      this.state.opacity.setValue(0), l.default.timing(this.state.opacity, {
        toValue: 1,
        duration: 250
      }).start(e)
    }, this.componentWillLeave = e => {
      l.default.timing(this.state.opacity, {
        toValue: 0,
        duration: 250
      }).start(e)
    }
  }
}
var T = r.default.connectStores([u.default], () => ({
  theme: u.default.theme
}), {
  forwardRef: !0
})(C)