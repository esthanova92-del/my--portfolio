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


## Editorial redesign notes
- The site now uses a warm ivory, forest green, terracotta and charcoal palette.
- Selected work shows the first three design-gallery items initially. Use “View All Projects” to reveal the remaining items.
- Sample package prices are editable in `index.html` inside the `#packages` section.
- Replace the two sample Calendly URLs in the `#contact` section with your real 15-minute and 20-minute booking links. The WhatsApp button uses +2349136414877.
- Existing image and video filenames/paths have been preserved.


## Footer portrait

Add your portrait to the existing `images` folder using this exact filename:

- `images/esthanovacreative.jpg`

The footer references it with the relative path `./images/esthanovacreative.jpg`, which works on a GitHub Pages project site when the image is committed inside the repository. Keep the filename and letter casing exactly the same.

## Footer booking links

In `index.html`, replace the two sample Calendly links with your own:
- 15-minute discovery call
- 20-minute creative consultation

The footer's **BOOK A CALL** button reveals both choices when clicked. Your WhatsApp contact button uses the number already provided.


## Latest visual update

The existing project filenames are unchanged: `index.html`, `styles.css`, `script.js`, and `README.md`.

### Add the footer portrait
Create/use the existing `images` folder and add your portrait with this exact filename:

- `images/footer-photo.jpg`

The footer has a graceful coloured placeholder area until you add the picture. You can replace the image filename in the footer `<img>` tag if you prefer another name.

### Footer social links
Instagram and TikTok point to the supplied Esthanova Creative profiles. The other recognizable SVG social icons currently link to the platforms' homepages because no personal profile URLs for those networks were supplied. Replace those `href` values in the footer if you want to link your own profiles.

### Booking links
The 15-minute and 20-minute call options remain hidden until a visitor clicks **Book a Call**. Replace the two sample Calendly URLs in `index.html` with your real booking URLs.

### Colour palette
The current site palette is warm ivory, forest green, muted sage and terracotta. There are no purple/pink accent colours in the updated styles.


## Footer text
The short introduction beside the footer portrait can be edited in `index.html` by searching for `footer-note`.
