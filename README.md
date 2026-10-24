# The Listening Shelf

A reconstructed, dependency-free home vinyl catalog for GitHub Pages. Includes all ten albums recovered from the original ChatGPT conversation, mobile layouts, artist/album/song search, genre filtering, and expandable tracklists.

## Open locally

Open `index.html` in a browser. All assets are local; no installation, API key, build, fonts, or network requests are required.

## Publish on GitHub Pages

1. Extract this ZIP. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the root of your GitHub repository.
2. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, and save.
3. Wait for GitHub Pages to finish deploying. Use the published URL shown in Settings → Pages (usually `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`).
4. Create your guest QR code using that final published URL. Scan it on a phone to verify the destination before printing.

Relative asset paths support both project Pages and a custom domain. No server configuration is needed.

## Update the collection

Edit the `albums` array in `script.js`. Each entry has artist, title, original release year, genre, a sleeve color, and a track array. Optional `format` and `note` fields describe an edition. Genres and the collection count update automatically.

## Reconstruction notes

The original `/mnt/data/vinyl-record-store` and `/mnt/data/listening-shelf-github-pages.zip` were unavailable in this Windows session. This is a newly reconstructed export, not a byte-for-byte copy of the previous website. The original conversation supplied the ten album titles but did not expose the prior generated files or design. Sleeve graphics are original typographic designs, not album cover scans. Artist spelling is normalized to Billy Joel and Masayoshi Takanaka.

Tracklists use standard album sequences, without bonus tracks. The Eagles entry assumes the 19-track 2024 **2LP** edition, not the 51-track 6LP set. Exact pressing and side breaks are not verified; compare with your physical sleeves.

Edition references consulted during reconstruction:
- Eagles 2LP tracklist: https://towerrecords.ie/collections/music-vinyl/products/the-eagles-to-the-limit-the-essential-collection
- The Rainbow Goblins vinyl tracklist: https://whitenoiserecords.org/products/高中正義-masayoshi-takanaka-虹伝説-the-rainbow-goblins-1

## Verification

The export was checked for the four required root files, relative local asset references, JavaScript syntax, ten album records with nonempty tracklists, and ZIP integrity with byte-for-byte comparison to the source. Browser visual testing was not performed.
