# Site images

Drop images in this folder with the exact filenames below and they
appear on the site automatically — no code changes. Any slot without a
file keeps showing its placeholder.

**Upload on GitHub:** open this folder → **Add file → Upload files** →
drag your images in → **Commit changes**. Vercel redeploys in about 30 seconds.

**Before uploading:** save as `.jpg`, around 1600px on the long edge,
ideally under 500 KB. Filenames are case-sensitive — `Portrait.JPG`
won't match `portrait.jpg`. To replace an image, upload a new file with
the same name.

## Homepage

| File | Where it shows | Shape |
|---|---|---|
| `case-1.jpg` | Recent results — "Near 2,000 followers" | wide |
| `case-2.jpg` | Recent results — "400K views" | wide |
| `portrait.jpg` | About section | portrait 4:5 |
| `post-1.jpg` … `post-5.jpg` | Latest posts grid | portrait 4:5 |

## Projects (homepage "Selected work" + /work)

Set in `assets/content.js` under each project's `image` field. All 16:9.

| File | Project |
|---|---|
| `ctrl.jpg` | CTRL — The Way Algorithms Control Our Lives |
| `just-leave.jpg` | 'Just Leave…' |
| `rogue.jpg` | Rogue |
| `rainesfilms.jpg` | RainesFilms |

If a project has a YouTube `video` link and no image file, the YouTube
thumbnail is used automatically.

## Collage page

`collage-1.jpg` … `collage-12.jpg`, in grid order (left to right, top to bottom):

| # | Shape | # | Shape |
|---|---|---|---|
| 1 | tall (spans two rows) | 7 | portrait 4:5 |
| 2 | square | 8 | square |
| 3 | square | 9 | tall (spans two rows) |
| 4 | portrait 4:5 | 10 | portrait 4:5 |
| 5 | portrait 4:5 | 11 | portrait 4:5 |
| 6 | wide 16:9 (spans two columns) | 12 | square |

Images are cropped to fill their slot, so keep the subject near the centre.
