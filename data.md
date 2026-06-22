# data.md

## Downloadable Data

### Maps

The main part of the project consists of custom maps for *The Battle for Middle-earth II* and *The Rise of the Witch-king*.

The original map files usually come as folders or archives containing the map file, minimap data, and possible extra files.

These files usually contain at least:

- one `.map` file (the actual map)
- one `.tga` file (the minimap preview image)

Some maps may also contain:

- additional screenshots
- potential extra files required by that specific map

For website downloads, each map should be provided as a `.zip` file containing all required files.

### Other

The `Other` section contains files that are not maps.

Including:

- RotWK Trainer (`.rar` archive)
- external link to older Edain Mod versions

---

## Website Data

### Metadata

Each map needs metadata for the website.

The current implementation keeps this metadata directly inside the map entries in `maps.html`.

As a possible future extension, the project may migrate to one central `maps.json` file so map metadata only has to be maintained once.

### Minimap Images

The minimap preview images from the original `.tga` files are needed for the website.

For browser display, they should be converted to `.png`.

The original `.tga` files remain the source files.

### Screenshot Images

Additional screenshots of the maps are used for visual preview on the website.

These are shown separately from the minimap inside each map entry.

### Homepage Assets

The homepage needs additional assets for the portal and RotWK-style start page:

- Doors of Durin portal image
- fullscreen homepage background image
- menu sound file

Optional later:

- additional button graphics
- decorative UI elements inspired by the original game menu
