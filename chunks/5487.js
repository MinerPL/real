"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("579033"),
  n = s("782340");

function l(e) {
  switch (e) {
    case a.InternalTemplateCodes.CLASSROOM:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CLASSROOM, description: n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CLASSROOM, nameLabel: n.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CLASSROOM, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CLASSROOM, author: n.default.Messages.DISCORD_NAME
      };
    case a.InternalTemplateCodes.LOCAL_COMMUNITIES:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LOCAL_COMMUNITIES, description: n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LOCAL_COMMUNITIES, nameLabel: n.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_LOCAL_COMMUNITIES, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_LOCAL_COMMUNITIES, author: n.default.Messages.DISCORD_NAME
      };
    case a.InternalTemplateCodes.CREATORS_HOBBIES:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATORS_HOBBIES, description: n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATORS_HOBBIES, nameLabel: n.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATORS_HOBBIES, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATORS_HOBBIES, author: n.default.Messages.DISCORD_NAME
      };
    case a.InternalTemplateCodes.GLOBAL_COMMUNITIES:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GLOBAL_COMMUNITIES, description: n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GLOBAL_COMMUNITIES, nameLabel: n.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_GLOBAL_COMMUNITIES, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_GLOBAL_COMMUNITIES, author: n.default.Messages.DISCORD_NAME
      };
    case a.InternalTemplateCodes.FRIENDS_FAMILY:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_FRIENDS_FAMILY, description: n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_FRIENDS_FAMILY, nameLabel: n.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_FRIENDS_FAMILY, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_FRIENDS_FAMILY, author: n.default.Messages.DISCORD_NAME
      };
    case a.InternalTemplateCodes.STUDY_GROUPS:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_STUDY_GROUPS, description: n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_STUDY_GROUPS, nameLabel: n.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_STUDY_GROUPS, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_STUDY_GROUPS, author: n.default.Messages.DISCORD_NAME
      };
    case a.InternalTemplateCodes.CREATE_FROM_SCRATCH:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATE_FROM_SCRATCH, description: n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATE_FROM_SCRATCH, nameLabel: n.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATE_FROM_SCRATCH, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATE_FROM_SCRATCH, author: n.default.Messages.DISCORD_NAME
      };
    case a.InternalTemplateCodes.CAMPUS_CLUBS:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CAMPUS_CLUBS, description: n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CAMPUS_CLUBS, nameLabel: n.default.Messages.FORM_LABEL_SERVER_NAME, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CAMPUS_CLUBS, author: n.default.Messages.DISCORD_NAME
      };
    case a.InternalTemplateCodes.LEAGUE_CLUBS:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LEAGUE_CLUBS, description: n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LEAGUE_CLUBS, nameLabel: n.default.Messages.FORM_LABEL_SERVER_NAME, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT, author: n.default.Messages.DISCORD_NAME
      };
    case a.InternalTemplateCodes.GITHUB_HACKATHON:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GITHUB_HACKATHON, description: n.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GITHUB_HACKATHON, nameLabel: n.default.Messages.FORM_LABEL_SERVER_NAME, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT, author: "GitHub Education"
      };
    default:
      return {
        header: n.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD, nameLabel: n.default.Messages.FORM_LABEL_SERVER_NAME, terms: n.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: n.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT
      }
  }
}