# Esthanova Creative — Portfolio

## Keep these website files together

The existing code filenames are unchanged:

- `index.html` — website structure and editable content
- `styles.css` — colours, layout, responsive design and animations
- `script.js` — menu, scroll effects, motion and interactive details
- `README.md` — this guide

Open `index.html` in a browser to preview the site. Keep the `images/` and `videos/` folders beside these files.

## Add your About portrait

Place your portrait in the `images` folder with this exact filename:

- `images/esthanovacreative1.jpg`

The About photo now uses its natural image proportions. It is not locked inside a short, cropped frame. The ZIP you supplied did not include the actual portrait image, so you must copy that image into the folder using the filename above.

## Add your carousel and promotional designs

The new Design Gallery section is ready. Add your own exported images to the `images` folder using these exact filenames:

- `images/carousel-01.jpg`
- `images/carousel-02.jpg`
- `images/carousel-03.jpg`
- `images/promo-01.jpg`
- `images/promo-02.jpg`
- `images/promo-03.jpg`

You can use PNG instead, but if you do, update the matching `.jpg` extension in `index.html`. The gallery displays the full graphic without cropping.

## Add your insights screenshots

Keep using these existing filenames:

- `images/insight1.jpg`
- `images/insight2.jpg`
- `images/insight3.jpg`
- `images/insight4.jpg`

These exact paths were already in your code and have not been renamed.

## Add your videos

Keep using the existing video filenames:

- `videos/video1.mp4`
- `videos/video2.mp4`
- `videos/video3.mp4`
- `videos/video4.mp4`

These exact paths were already in your code and have not been renamed.

## Add your Google Drive portfolio link

In `index.html`, search for:

`https://drive.google.com/drive/folders/ADD-YOUR-GOOGLE-DRIVE-FOLDER-ID`

Replace only that placeholder URL with your shareable Google Drive folder link. Set the folder permission to “Anyone with the link can view” if you want prospective clients to open it.

## Case-study preview photos

The small fashion and food preview tiles use remote Unsplash photography, so they load when the website is online. They are visual examples, not claims that those photos are client work. Replace them with approved client visuals if you have them.

## Before publishing

- Confirm your email address and social profile links in `index.html`.
- Replace placeholder gallery images with your own work.
- Only publish analytics, testimonials and client results that are genuine and that you have permission to share.
- The analytics chart is labelled illustrative and should not be presented as actual client performance.
- Test the website on desktop and mobile after adding your files.


## YouTube video showcase

The four portfolio videos in `index.html` are now embedded from YouTube, so you do not need to upload MP4 files to GitHub. The embed links are in the `VIDEO SHOWCASE` section. To replace a video later, change only the video ID in its `youtube.com/embed/VIDEO_ID` URL.

If a video does not play, check that its YouTube visibility and embedding permissions allow it to be viewed on external websites.


YOUTUBE EMBED TROUBLESHOOTING
- The video players use the standard youtube.com embed domain. The page-level referrer policy and each iframe use `strict-origin-when-cross-origin`, so browsers send the website origin when loading YouTube embeds.
- In YouTube Studio, open each video's Details > Show more and make sure embedding is allowed ("Allow embedding").
- Videos marked Private cannot be embedded for public visitors. Use Public or Unlisted.
- If a video still shows an error, open its YouTube watch page while signed out. If it cannot be played there, the website cannot play it either.


IMPORTANT: Test the embedded videos from your published HTTPS GitHub Pages address (for example, `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`), not by opening `index.html` directly as a local file. A local `file://` preview may not send a website referrer, which can trigger YouTube Error 153. If Error 153 remains on the published site, confirm each video is Public or Unlisted and that “Allow embedding” is enabled in YouTube Studio.
