// Tab S7+ (gts7xlwifi / Halium): Firefox has no GPU/VAAPI video decode here, so all
// video is CPU software-decoded. AV1 and VP9 are by far the heaviest codecs; force
// YouTube (and other MSE sites) onto H.264, which is ~4-6x cheaper to software-decode,
// to stop playback lag. Also cap compositing to 60fps to ease fullscreen load on the
// 120Hz panel. These are DEFAULT prefs (overridable in about:config if ever needed).
pref("media.av1.enabled", false);
pref("media.mediasource.vp9.enabled", false);
pref("media.webm.enabled", false);
pref("layout.frame_rate", 60);
