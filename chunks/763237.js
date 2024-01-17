"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007"), n("424973");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("669491"),
  o = n("77078"),
  u = n("871388"),
  d = n("676223"),
  c = n("429928"),
  f = n("506885"),
  E = n("766274"),
  _ = n("701909"),
  T = n("474293"),
  I = n("158998"),
  m = n("145131"),
  N = n("963422"),
  p = n("533403"),
  S = n("85175"),
  A = n("49111"),
  C = n("450484"),
  h = n("782340"),
  g = n("639700");
class M extends l.PureComponent {
  render() {
    let {
      member: e,
      className: t,
      guildId: n
    } = this.props;
    return (0, s.jsx)(o.Popout, {
      renderPopout: this.renderUserPopout,
      position: "left",
      preload: () => (0, f.default)(e.user.id, e.user.getAvatarURL(n, 80), {
        guildId: n
      }),
      children: l => {
        var a;
        return (0, s.jsx)(o.Tooltip, {
          text: e.unknownUser ? null : null !== (a = e.nick) && void 0 !== a ? a : I.default.getName(e.user),
          children: a => (0, s.jsx)(o.Clickable, {
            className: e.unknownUser ? g.partyMember : g.partyMemberKnown,
            ...a,
            ...l,
            children: (0, s.jsx)(o.Avatar, {
              src: e.user.getAvatarURL(n, 24),
              size: o.AvatarSizes.SIZE_24,
              className: i(g.partyAvatar, t),
              "aria-label": e.user.username
            })
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), this.renderUserPopout = e => {
      let {
        renderUserPopout: t,
        member: n
      } = this.props;
      return n.unknownUser ? null : t(n.user, e)
    }
  }
}
class O extends l.PureComponent {
  isDeadInvite() {
    let {
      isPreview: e,
      message: t,
      activity: n,
      applicationId: s
    } = this.props;
    return !e && !(null != t && (0, d.default)(n, t, s))
  }
  getPartySize() {
    let {
      activity: e
    } = this.props;
    return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size
  }
  getActionableMode() {
    return [A.ActivityActionTypes.LISTEN, (0, A.ActivityActionTypes)].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? "Actionable" : "NotActionable"
  }
  isInParty() {
    let {
      activity: e,
      myPartyId: t,
      isPreview: n
    } = this.props;
    return !n && null != e && null != e.party && t === e.party.id
  }
  isPartyFull() {
    let [e, t] = this.getPartySize();
    return e > -1 && e >= t
  }
  hasPartySize() {
    let [e, t] = this.getPartySize();
    return e > -1 && t > -1
  }
  isActionType(e) {
    return this.props.activityActionType === e
  }
  canJoin() {
    let {
      activity: e,
      isPreview: t,
      isGameLaunchable: n,
      isInBrowser: s
    } = this.props;
    return !!t || !(this.isDeadInvite() || !this.isActionType(A.ActivityActionTypes.JOIN) || !(0, u.default)(e, A.ActivityFlags.JOIN) || !this.hasPartySize() || this.isPartyFull() || s || !n || this.isInParty()) && !0
  }
  canSendInvite() {
    let {
      activity: e,
      isPreview: t
    } = this.props;
    return !!t || !(this.isDeadInvite() || !this.isActionType(A.ActivityActionTypes.JOIN_REQUEST) || !(0, u.default)(e, A.ActivityFlags.JOIN) || !this.hasPartySize() || this.isPartyFull()) && !0
  }
  canSync() {
    let {
      activity: e,
      isPreview: t,
      isSyncable: n,
      isInBrowser: s
    } = this.props;
    return !!t || !(!this.isActionType(A.ActivityActionTypes.LISTEN) && !this.isActionType(A.ActivityActionTypes.WATCH) || this.isDeadInvite() || !(0, u.default)(e, A.ActivityFlags.SYNC) || s || !n || this.isInParty()) && !0
  }
  getHelpdeskArticleURL() {
    let {
      partyId: e
    } = this.props;
    return null != e && (0, C.isSpotifyParty)(e) ? A.HelpdeskArticles.SPOTIFY_CONNECTION : A.HelpdeskArticles.RICH_PRESENCE_INTRODUCTION
  }
  renderHeaderText() {
    let {
      activityActionType: e,
      name: t
    } = this.props;
    switch (e) {
      case A.ActivityActionTypes.LISTEN:
        return h.default.Messages.INVITE_EMBED_INVITE_TO_LISTEN.format({
          name: t
        });
      case A.ActivityActionTypes.WATCH:
        return h.default.Messages.INVITE_EMBED_INVITE_TO_WATCH.format({
          name: t
        });
      case A.ActivityActionTypes.JOIN:
        return h.default.Messages.INVITE_EMBED_INVITE_TO_JOIN_GROUP;
      case A.ActivityActionTypes.JOIN_REQUEST:
      default:
        return h.default.Messages.INVITE_EMBED_ASK_TO_JOIN
    }
  }
  renderPartyStatus() {
    let {
      activityActionType: e,
      isGameLaunchable: t,
      isSyncable: n,
      isPreview: l,
      isInBrowser: a,
      name: i,
      activity: r
    } = this.props, [u, d] = this.getPartySize();
    if (this.isDeadInvite()) switch (e) {
      case A.ActivityActionTypes.LISTEN:
        return h.default.Messages.INVITE_EMBED_LISTEN_HAS_ENDED;
      case A.ActivityActionTypes.WATCH:
        return h.default.Messages.INVITE_EMBED_WATCH_HAS_ENDED;
      case A.ActivityActionTypes.JOIN:
      case A.ActivityActionTypes.JOIN_REQUEST:
      default:
        return h.default.Messages.INVITE_EMBED_GAME_HAS_ENDED
    }
    if (a && !l && e === A.ActivityActionTypes.JOIN) return h.default.Messages.INVITE_EMBED_JOIN_VIA_DESKTOP_APP;
    if (this.isActionType(A.ActivityActionTypes.LISTEN) || this.isActionType(A.ActivityActionTypes.WATCH)) return null != r && null != r.details && null != r.state && (0, c.default)(r) ? [(0, s.jsx)("div", {
      className: g.details,
      children: (0, s.jsx)(o.Anchor, {
        className: g.textLink,
        onClick: this.handleOpenSpotifyTrack,
        children: r.details
      })
    }, "details"), (0, s.jsx)("div", {
      className: g.state,
      children: h.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
        artists: r.state,
        artistsHook: (e, t) => null != r.state ? (0, s.jsx)(N.default, {
          artists: r.state,
          linkClassName: g.textLink,
          canOpen: null != r.sync_id,
          onOpenSpotifyArtist: this.handleOpenSpotifyArtist
        }, t) : null
      })
    }, "state")] : this.isActionType(A.ActivityActionTypes.LISTEN) ? h.default.Messages.USER_ACTIVITY_LISTEN_ALONG : h.default.Messages.USER_ACTIVITY_WATCH_ALONG;
    return this.isActionType(A.ActivityActionTypes.JOIN_REQUEST) ? this.isPartyFull() ? h.default.Messages.INVITE_EMBED_FULL_GROUP : h.default.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({
      number: d - u
    }) : this.isInParty() ? h.default.Messages.INVITE_EMBED_IN_GROUP : t || n || l ? this.isPartyFull() ? h.default.Messages.INVITE_EMBED_FULL_GROUP : this.hasPartySize() ? h.default.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({
      number: d - u
    }) : h.default.Messages.JOIN : h.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
      name: i
    })
  }
  renderActionButton() {
    let {
      isInBrowser: e,
      isPreview: t,
      isGameLaunchable: n,
      isSender: l,
      partyId: a,
      activity: i,
      message: r,
      renderSpotifyJoinButton: u,
      renderCustomButton: d
    } = this.props, c = {
      className: g.actionButton,
      size: o.Button.Sizes.SMALL
    }, f = null != d ? d(c) : null;
    return null != f ? f : !this.isDeadInvite() && this.isActionType(A.ActivityActionTypes.LISTEN) && null != a && null != r && null != i && (0, C.isSpotifyParty)(a) ? u({
      ...c,
      activity: i,
      user: r.author
    }) : (0, s.jsx)(o.Button, {
      ...c,
      ...(() => {
        if (!t && e && !this.isDeadInvite()) return {
          children: h.default.Messages.USER_ACTIVITY_ACTION_DOWNLOAD_APP,
          onClick: this.handleDownloadApp
        };
        if (this.canJoin()) return {
          children: h.default.Messages.JOIN,
          onClick: this.handleJoin
        };
        if (this.canSync()) return {
          children: h.default.Messages.JOIN,
          onClick: this.handleSync
        };
        if (this.canSendInvite()) return {
          children: h.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
          onClick: this.handleInvite,
          disabled: l
        };
        return {
          children: this.isActionType(A.ActivityActionTypes.JOIN_REQUEST) ? h.default.Messages.INVITE_EMBED_INVITE_TO_JOIN : h.default.Messages.JOIN,
          disabled: !0
        }
      })(),
      color: (e || n) && !this.isDeadInvite() ? o.Button.Colors.GREEN : o.Button.Colors.PRIMARY,
      submitting: this.props.isLoading
    })
  }
  renderMoreUsers(e, t, n) {
    return (0, s.jsx)("div", {
      className: g.moreUsers,
      children: e
    }, n)
  }
  renderParty() {
    let {
      partyId: e,
      partyMembers: t,
      hideParty: n,
      guildId: l
    } = this.props, [a, i] = this.getPartySize(), r = this.hasPartySize() || this.isActionType(A.ActivityActionTypes.LISTEN) || this.isActionType(A.ActivityActionTypes.WATCH);
    if (null == e || this.isDeadInvite() || !r || n) return null;
    let o = [...t],
      u = Math.min(a, 6);
    for (; o.length < u;) o.push({
      user: new E.default({
        discriminator: "0005"
      }),
      unknownUser: !0
    });
    let d = Math.min(i, 106);
    for (; o.length < d;) o.push(null);
    return (0, s.jsx)(p.default, {
      guildId: l,
      className: g.partyMembers,
      users: o,
      max: i > 0 ? Math.min(i, 6) : 6,
      renderUser: this.renderUser,
      renderMoreUsers: this.renderMoreUsers
    })
  }
  render() {
    let {
      className: e,
      coverImage: t,
      name: n,
      activity: l
    } = this.props, a = this.isActionType(A.ActivityActionTypes.JOIN) || this.isActionType(A.ActivityActionTypes.JOIN_REQUEST), u = this.isDeadInvite(), d = null;
    null == t || null == l || a ? !a && u && (d = (0, s.jsx)("div", {
      className: g.artworkSpotifySessionEnded
    })) : d = (0, s.jsx)("img", {
      alt: "",
      src: t,
      className: (0, T.getClass)(g, "artwork", this.getActionableMode())
    });
    let f = null != l && null != d && null != l.assets && null != l.assets.large_text && "" !== l.assets.large_text && !u && (0, c.default)(l) ? l.assets.large_text : null,
      E = null != f ? (0, s.jsx)(o.Tooltip, {
        text: f,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, s.jsx)(o.Anchor, {
            onClick: this.handleOpenSpotifyAlbum,
            onMouseEnter: t,
            onMouseLeave: n,
            children: d
          })
        }
      }) : d;
    return (0, s.jsxs)("div", {
      className: i(g.invite, e),
      children: [(0, s.jsx)("div", {
        className: g.coverImageWrapper,
        children: (0, s.jsx)("div", {
          className: i((0, T.getClass)(g, "coverImage", this.getActionableMode()), null != d ? g.blurred : null),
          style: {
            backgroundImage: null != t ? "url('".concat(t, "')") : void 0
          }
        })
      }), (0, s.jsxs)(m.default, {
        className: g.fullHeight,
        children: [(0, s.jsxs)(m.default, {
          direction: m.default.Direction.VERTICAL,
          children: [(0, s.jsx)("div", {
            className: g.header,
            children: this.renderHeaderText()
          }), (0, s.jsx)(m.default.Child, {
            className: g.partyStatus,
            children: this.renderPartyStatus()
          }), (0, s.jsxs)(m.default, {
            align: m.default.Align.END,
            children: [(0, s.jsxs)(m.default, {
              align: m.default.Align.CENTER,
              className: g.actionAndParty,
              basis: 0,
              style: {
                marginRight: 0
              },
              children: [this.renderActionButton(), this.renderParty()]
            }), null == d && a ? (0, s.jsx)("div", {
              className: g.name,
              children: n
            }) : null]
          })]
        }), E]
      }), (0, s.jsx)(o.Anchor, {
        href: _.default.getArticleURL(this.getHelpdeskArticleURL()),
        className: g.helpIcon,
        children: (0, s.jsx)(S.default, {
          color: r.default.unsafe_rawColors.PRIMARY_300.css,
          width: 12,
          height: 12
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleJoin = () => {
      let {
        onJoin: e
      } = this.props;
      null == e || e()
    }, this.handleInvite = () => {
      let {
        onInvite: e
      } = this.props;
      null == e || e()
    }, this.handleSync = () => {
      let {
        onSync: e
      } = this.props;
      null == e || e()
    }, this.handleDownloadApp = () => {
      let {
        onDownloadApp: e
      } = this.props;
      null == e || e()
    }, this.handleOpenSpotifyTrack = () => {
      let {
        activity: e,
        onOpenSpotifyTrack: t
      } = this.props;
      null != e && (null == t || t(e))
    }, this.handleOpenSpotifyArtist = e => {
      let {
        activity: t,
        onOpenSpotifyArtist: n,
        message: s
      } = this.props;
      null != t && null != s && (null == n || n(t, s.author.id, e))
    }, this.handleOpenSpotifyAlbum = () => {
      let {
        activity: e,
        onOpenSpotifyAlbum: t,
        message: n
      } = this.props;
      null != e && null != n && (null == t || t(e, n.author.id))
    }, this.renderUser = (e, t, n) => {
      let {
        renderUserPopout: l,
        guildId: a
      } = this.props;
      return null != e ? (0, s.jsx)(M, {
        member: e,
        renderUserPopout: l,
        className: t,
        guildId: a
      }, n) : (0, s.jsx)("div", {
        className: i(g.partyMemberEmpty, t)
      }, n)
    }
  }
}
var R = O