# requirements.md

## Must-have (actual requirements)

- Users can open a fullscreen start page (`index.html`).
- The start page first shows an entrance portal before the actual homepage is visible.
- The entrance portal shows an image of the Doors of Durin from Moria.
- The entrance portal displays the sentence “Click friend and enter!”.
- The word “friend” inside the sentence is clickable.
- The word “friend” should not be visually highlighted as a button or link.
- The word “friend” should visually blend into the sentence, so users have to understand the hint themselves.
- When users click the word “friend”, the portal disappears and the actual homepage becomes visible.
- When users click the word “friend”, the homepage music starts playing.
- The homepage music loops after it has started.
- The actual homepage uses a fullscreen RotWK-style background image.
- Users can navigate from the homepage to:
  - Maps
  - Other
  - About
  - Imprint
- Users can open a `maps.html` page that shows all available maps in one scrollable list.
- The map list uses one continuous scrollable page and does not use separate detail pages for every map.
- Users can see one entry per map.
- The current implementation uses three manually written map entries directly inside `maps.html`.
- The current implementation does not use a `maps.json` file.
- Search, filtering, and sorting work directly on the existing HTML map entries.
- Every map entry must include the following fields:
  - Map name
  - Minimap image
  - Player count
  - Neutral Buildings
  - Creeps
  - Size
  - Description
  - Creator
  - Year
  - Screenshots
- If specific information is missing for a map, the field must still be shown and display a placeholder such as “Unknown” or “Not available”.
- Users can download every map as a ZIP file.
- Users can search maps with a fulltext search field.
- The fulltext search checks the visible map information, including name, player count, neutral buildings, creeps, size, description, creator, and year.
- Users can sort maps by:
  - Players, low to high
  - Players, high to low
  - Name, A to Z
  - Name, Z to A
  - Year, old to new
  - Year, new to old
- Player sorting first sorts by player count and then alphabetically by map name.
- Year sorting places maps with unknown years at the end.
- Users can filter maps by creep type.
- The creep filter supports:
  - Goblins
  - Spiders
  - Wargs
  - Trolls
  - Barrow wights
  - Dragons
- Users can reset search, sorting, and creep filtering with a reset button.
- Users can open an `other.html` page for downloads that are not maps.
- The RotWK Trainer must be available on the `Other` page.
- Edain Mod 3.8.1 may also be added to the `Other` page later if the Modding Union allows redistribution.
- Users can open an `about.html` page with information about the project.
- Users can open an `imprint.html` page.
- The website should preferably work as a static website without backend and should ideally be hostable via GitHub Pages or another free static hosting service.
- JavaScript should use vanilla JavaScript only.

## Nice-to-have (not actual requirements, but maybe potential ones in the future)

- Users can use an optional German version of the website.
- Users can hear additional menu sound effects on the homepage.
- The project may later migrate to a central `maps.json` system, so map metadata only has to be maintained once and the map list can scale more easily.

## Open questions

- Final styling of the entrance portal.
- Final homepage background image.
- Final fonts.
- Whether additional decorative UI elements should be used.
