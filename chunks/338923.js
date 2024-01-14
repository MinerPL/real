"use strict";
var r, o;
Object.defineProperty(t, "__esModule", {
  value: !0
}), (o = t.Key || (t.Key = {})).Unidentified = "Unidentified", o.Alt = "Alt", o.AltGraph = "AltGraph", o.CapsLock = "CapsLock", o.Control = "Control", o.Fn = "Fn", o.FnLock = "FnLock", o.Hyper = "Hyper", o.Meta = "Meta", o.NumLock = "NumLock", o.ScrollLock = "ScrollLock", o.Shift = "Shift", o.Super = "Super", o.Symbol = "Symbol", o.SymbolLock = "SymbolLock", o.Enter = "Enter", o.Tab = "Tab", o.ArrowDown = "ArrowDown", o.ArrowLeft = "ArrowLeft", o.ArrowRight = "ArrowRight", o.ArrowUp = "ArrowUp", o.End = "End", o.Home = "Home", o.PageDown = "PageDown", o.PageUp = "PageUp", o.Backspace = "Backspace", o.Clear = "Clear", o.Copy = "Copy", o.CrSel = "CrSel", o.Cut = "Cut", o.Delete = "Delete", o.EraseEof = "EraseEof", o.ExSel = "ExSel", o.Insert = "Insert", o.Paste = "Paste", o.Redo = "Redo", o.Undo = "Undo", o.Accept = "Accept", o.Again = "Again", o.Attn = "Attn", o.Cancel = "Cancel", o.ContextMenu = "ContextMenu", o.Escape = "Escape", o.Execute = "Execute", o.Find = "Find", o.Finish = "Finish", o.Help = "Help", o.Pause = "Pause", o.Play = "Play", o.Props = "Props", o.Select = "Select", o.ZoomIn = "ZoomIn", o.ZoomOut = "ZoomOut", o.BrightnessDown = "BrightnessDown", o.BrightnessUp = "BrightnessUp", o.Eject = "Eject", o.LogOff = "LogOff", o.Power = "Power", o.PowerOff = "PowerOff", o.PrintScreen = "PrintScreen", o.Hibernate = "Hibernate", o.Standby = "Standby", o.WakeUp = "WakeUp", o.AllCandidates = "AllCandidates", o.Alphanumeric = "Alphanumeric", o.CodeInput = "CodeInput", o.Compose = "Compose", o.Convert = "Convert", o.Dead = "Dead", o.FinalMode = "FinalMode", o.GroupFirst = "GroupFirst", o.GroupLast = "GroupLast", o.GroupNext = "GroupNext", o.GroupPrevious = "GroupPrevious", o.ModeChange = "ModeChange", o.NextCandidate = "NextCandidate", o.NonConvert = "NonConvert", o.PreviousCandidate = "PreviousCandidate", o.Process = "Process", o.SingleCandidate = "SingleCandidate", o.HangulMode = "HangulMode", o.HanjaMode = "HanjaMode", o.JunjaMode = "JunjaMode", o.Eisu = "Eisu", o.Hankaku = "Hankaku", o.Hiragana = "Hiragana", o.HiraganaKatakana = "HiraganaKatakana", o.KanaMode = "KanaMode", o.KanjiMode = "KanjiMode", o.Katakana = "Katakana", o.Romaji = "Romaji", o.Zenkaku = "Zenkaku", o.ZenkakuHanaku = "ZenkakuHanaku", o.F1 = "F1", o.F2 = "F2", o.F3 = "F3", o.F4 = "F4", o.F5 = "F5", o.F6 = "F6", o.F7 = "F7", o.F8 = "F8", o.F9 = "F9", o.F10 = "F10", o.F11 = "F11", o.F12 = "F12", o.F13 = "F13", o.F14 = "F14", o.F15 = "F15", o.F16 = "F16", o.F17 = "F17", o.F18 = "F18", o.F19 = "F19", o.F20 = "F20", o.Soft1 = "Soft1", o.Soft2 = "Soft2", o.Soft3 = "Soft3", o.Soft4 = "Soft4", o.AppSwitch = "AppSwitch", o.Call = "Call", o.Camera = "Camera", o.CameraFocus = "CameraFocus", o.EndCall = "EndCall", o.GoBack = "GoBack", o.GoHome = "GoHome", o.HeadsetHook = "HeadsetHook", o.LastNumberRedial = "LastNumberRedial", o.Notification = "Notification", o.MannerMode = "MannerMode", o.VoiceDial = "VoiceDial", o.ChannelDown = "ChannelDown", o.ChannelUp = "ChannelUp", o.MediaFastForward = "MediaFastForward", o.MediaPause = "MediaPause", o.MediaPlay = "MediaPlay", o.MediaPlayPause = "MediaPlayPause", o.MediaRecord = "MediaRecord", o.MediaRewind = "MediaRewind", o.MediaStop = "MediaStop", o.MediaTrackNext = "MediaTrackNext", o.MediaTrackPrevious = "MediaTrackPrevious", o.AudioBalanceLeft = "AudioBalanceLeft", o.AudioBalanceRight = "AudioBalanceRight", o.AudioBassDown = "AudioBassDown", o.AudioBassBoostDown = "AudioBassBoostDown", o.AudioBassBoostToggle = "AudioBassBoostToggle", o.AudioBassBoostUp = "AudioBassBoostUp", o.AudioBassUp = "AudioBassUp", o.AudioFaderFront = "AudioFaderFront", o.AudioFaderRear = "AudioFaderRear", o.AudioSurroundModeNext = "AudioSurroundModeNext", o.AudioTrebleDown = "AudioTrebleDown", o.AudioTrebleUp = "AudioTrebleUp", o.AudioVolumeDown = "AudioVolumeDown", o.AudioVolumeMute = "AudioVolumeMute", o.AudioVolumeUp = "AudioVolumeUp", o.MicrophoneToggle = "MicrophoneToggle", o.MicrophoneVolumeDown = "MicrophoneVolumeDown", o.MicrophoneVolumeMute = "MicrophoneVolumeMute", o.MicrophoneVolumeUp = "MicrophoneVolumeUp", o.TV = "TV", o.TV3DMode = "TV3DMode", o.TVAntennaCable = "TVAntennaCable", o.TVAudioDescription = "TVAudioDescription", o.TVAudioDescriptionMixDown = "TVAudioDescriptionMixDown", o.TVAudioDescriptionMixUp = "TVAudioDescriptionMixUp", o.TVContentsMenu = "TVContentsMenu", o.TVDataService = "TVDataService", o.TVInput = "TVInput", o.TVInputComponent1 = "TVInputComponent1", o.TVInputComponent2 = "TVInputComponent2", o.TVInputComposite1 = "TVInputComposite1", o.TVInputComposite2 = "TVInputComposite2", o.TVInputHDMI1 = "TVInputHDMI1", o.TVInputHDMI2 = "TVInputHDMI2", o.TVInputHDMI3 = "TVInputHDMI3", o.TVInputHDMI4 = "TVInputHDMI4", o.TVInputVGA1 = "TVInputVGA1", o.TVMediaContext = "TVMediaContext", o.TVNetwork = "TVNetwork", o.TVNumberEntry = "TVNumberEntry", o.TVPower = "TVPower", o.TVRadioService = "TVRadioService", o.TVSatellite = "TVSatellite", o.TVSatelliteBS = "TVSatelliteBS", o.TVSatelliteCS = "TVSatelliteCS", o.TVSatelliteToggle = "TVSatelliteToggle", o.TVTerrestrialAnalog = "TVTerrestrialAnalog", o.TVTerrestrialDigital = "TVTerrestrialDigital", o.TVTimer = "TVTimer", o.AVRInput = "AVRInput", o.AVRPower = "AVRPower", o.ColorF0Red = "ColorF0Red", o.ColorF1Green = "ColorF1Green", o.ColorF2Yellow = "ColorF2Yellow", o.ColorF3Blue = "ColorF3Blue", o.ColorF4Grey = "ColorF4Grey", o.ColorF5Brown = "ColorF5Brown", o.ClosedCaptionToggle = "ClosedCaptionToggle", o.Dimmer = "Dimmer", o.DisplaySwap = "DisplaySwap", o.DVR = "DVR", o.Exit = "Exit", o.FavoriteClear0 = "FavoriteClear0", o.FavoriteClear1 = "FavoriteClear1", o.FavoriteClear2 = "FavoriteClear2", o.FavoriteClear3 = "FavoriteClear3", o.FavoriteRecall0 = "FavoriteRecall0", o.FavoriteRecall1 = "FavoriteRecall1", o.FavoriteRecall2 = "FavoriteRecall2", o.FavoriteRecall3 = "FavoriteRecall3", o.FavoriteStore0 = "FavoriteStore0", o.FavoriteStore1 = "FavoriteStore1", o.FavoriteStore2 = "FavoriteStore2", o.FavoriteStore3 = "FavoriteStore3", o.Guide = "Guide", o.GuideNextDay = "GuideNextDay", o.GuidePreviousDay = "GuidePreviousDay", o.Info = "Info", o.InstantReplay = "InstantReplay", o.Link = "Link", o.ListProgram = "ListProgram", o.LiveContent = "LiveContent", o.Lock = "Lock", o.MediaApps = "MediaApps", o.MediaAudioTrack = "MediaAudioTrack", o.MediaLast = "MediaLast", o.MediaSkipBackward = "MediaSkipBackward", o.MediaSkipForward = "MediaSkipForward", o.MediaStepBackward = "MediaStepBackward", o.MediaStepForward = "MediaStepForward", o.MediaTopMenu = "MediaTopMenu", o.NavigateIn = "NavigateIn", o.NavigateNext = "NavigateNext", o.NavigateOut = "NavigateOut", o.NavigatePrevious = "NavigatePrevious", o.NextFavoriteChannel = "NextFavoriteChannel", o.NextUserProfile = "NextUserProfile", o.OnDemand = "OnDemand", o.Pairing = "Pairing", o.PinPDown = "PinPDown", o.PinPMove = "PinPMove", o.PinPToggle = "PinPToggle", o.PinPUp = "PinPUp", o.PlaySpeedDown = "PlaySpeedDown", o.PlaySpeedReset = "PlaySpeedReset", o.PlaySpeedUp = "PlaySpeedUp", o.RandomToggle = "RandomToggle", o.RcLowBattery = "RcLowBattery", o.RecordSpeedNext = "RecordSpeedNext", o.RfBypass = "RfBypass", o.ScanChannelsToggle = "ScanChannelsToggle", o.ScreenModeNext = "ScreenModeNext", o.Settings = "Settings", o.SplitScreenToggle = "SplitScreenToggle", o.STBInput = "STBInput", o.STBPower = "STBPower", o.Subtitle = "Subtitle", o.Teletext = "Teletext", o.VideoModeNext = "VideoModeNext", o.Wink = "Wink", o.ZoomToggle = "ZoomToggle", o.SpeechCorrectionList = "SpeechCorrectionList", o.SpeechInputToggle = "SpeechInputToggle", o.Close = "Close", o.New = "New", o.Open = "Open", o.Print = "Print", o.Save = "Save", o.SpellCheck = "SpellCheck", o.MailForward = "MailForward", o.MailReply = "MailReply", o.MailSend = "MailSend", o.LaunchCalculator = "LaunchCalculator", o.LaunchCalendar = "LaunchCalendar", o.LaunchContacts = "LaunchContacts", o.LaunchMail = "LaunchMail", o.LaunchMediaPlayer = "LaunchMediaPlayer", o.LaunchMusicPlayer = "LaunchMusicPlayer", o.LaunchMyComputer = "LaunchMyComputer", o.LaunchPhone = "LaunchPhone", o.LaunchScreenSaver = "LaunchScreenSaver", o.LaunchSpreadsheet = "LaunchSpreadsheet", o.LaunchWebBrowser = "LaunchWebBrowser", o.LaunchWebCam = "LaunchWebCam", o.LaunchWordProcessor = "LaunchWordProcessor", o.LaunchApplication1 = "LaunchApplication1", o.LaunchApplication2 = "LaunchApplication2", o.LaunchApplication3 = "LaunchApplication3", o.LaunchApplication4 = "LaunchApplication4", o.LaunchApplication5 = "LaunchApplication5", o.LaunchApplication6 = "LaunchApplication6", o.LaunchApplication7 = "LaunchApplication7", o.LaunchApplication8 = "LaunchApplication8", o.LaunchApplication9 = "LaunchApplication9", o.LaunchApplication10 = "LaunchApplication10", o.LaunchApplication11 = "LaunchApplication11", o.LaunchApplication12 = "LaunchApplication12", o.LaunchApplication13 = "LaunchApplication13", o.LaunchApplication14 = "LaunchApplication14", o.LaunchApplication15 = "LaunchApplication15", o.LaunchApplication16 = "LaunchApplication16", o.BrowserBack = "BrowserBack", o.BrowserFavorites = "BrowserFavorites", o.BrowserForward = "BrowserForward", o.BrowserHome = "BrowserHome", o.BrowserRefresh = "BrowserRefresh", o.BrowserSearch = "BrowserSearch", o.BrowserStop = "BrowserStop", o.Decimal = "Decimal", o.Key11 = "Key11", o.Key12 = "Key12", o.Multiply = "Multiply", o.Add = "Add", o.Divide = "Divide", o.Subtract = "Subtract", o.Separator = "Separator"