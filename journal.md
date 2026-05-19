# journal.md

## 2026-04-23

Started the project idea: a small website for *The Battle for Middle-earth II* / *The Rise of the Witch-king* files, mainly focused on custom maps.

## 2026-04-23

Collected and discussed the available materials: map folders with `.map` and `.tga` files, possible screenshots or extra files, and the RotWK Trainer as a non-map download.

## 2026-04-23

Decided that maps are the main purpose of the website. Other files will be grouped separately on an `Other` page.

## 2026-04-23

Discussed the technical direction. The website should preferably stay static and be hostable through GitHub Pages or another free static hosting service.

## 2026-04-23

Decided to use one central `maps.json` file for map metadata instead of one JSON file per map.

## 2026-04-23

Decided that each map should be provided as a ZIP download containing all required files.

## 2026-04-23

Clarified that the website will not have a real download counter because there is no backend.

## 2026-04-27

Defined the main page structure: Home, Maps, Other, About, and Imprint.

## 2026-04-27

Developed the Maps page layout: an oldschool table-like list with minimap, hard facts, description, screenshots, and download area.

## 2026-04-27

Developed the Home page layout: a fullscreen RotWK-style main menu with four large buttons at the bottom.

## 2026-04-28

Created the first GitHub repository and made the first project documentation commit.

## 2026-04-28

Created basic HTML structure for all main pages.

## 2026-04-28

Made clear that the css for the Homepage is different to the rest of the pages

## 2026-04-28

Created all CSS-Sheets and the Tutorial

## 2026-04-28

Created JavaScript Concept

## 2026-05-19

Implemented the entrance portal for the homepage. The website now first shows a Doors of Durin themed portal screen before the actual homepage becomes visible.

## 2026-05-19

Added the interactive “friend” word to the portal sentence. Clicking it hides the portal and opens the actual homepage.

## 2026-05-19

Added homepage menu music. The music starts after the user clicks “friend”, because browsers usually block audio that starts without user interaction.

## 2026-05-19

Updated the homepage structure so that the portal screen and the actual RotWK-style homepage are both contained in `index.html`.

## 2026-05-19

Updated the homepage styling. The homepage now uses a separate background image and ice-blue menu buttons inspired by the Witch-king expansion.

## 2026-05-19

Decided to keep the first map implementation without `maps.json`. The map entries are written directly inside `maps.html`, and JavaScript works with the existing HTML articles.

## 2026-05-19

Added three real map entries to the Maps page: Rhun III, Mountains of Angmar, and Chetwood Hills.

## 2026-05-19

Added JavaScript controls to the Maps page: fulltext search, sorting dropdown, creep filter, reset button, and a result counter.

## 2026-05-19

Implemented fulltext search for map entries. The search checks visible map information such as name, player count, neutral buildings, creeps, size, description, creator, and year.

## 2026-05-19

Implemented sorting for maps by player count, map name, and year. Player sorting uses the map name as a secondary sorting rule.

## 2026-05-19

Implemented creep filtering for Goblins, Spiders, Wargs, Trolls, Barrow wights, and Dragons.

## 2026-05-19

Updated the map image handling plan. Original `.tga` minimap files remain source files, but browser-visible minimaps are converted to `.png`.

## 2026-05-19

Reviewed and commented the JavaScript code so it can be explained more clearly during the seminar presentation.