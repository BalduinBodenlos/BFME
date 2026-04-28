# app-concept.md

## JavaScript Extension Concept

The JavaScript extension will add a keyword search to the `maps.html` page.

The goal is to make the map archive easier to explore once more maps are added. Users should be able to search for any word that appears in the map information, not only the map name.

## What the application does

The application allows users to search the visible map list by keyword.

The search should check all relevant text inside each map entry, including:

- map name
- player count
- neutral buildings
- creeps
- size
- description
- creator
- year

For example, a user could search for:

- `dragon`
- `inn`
- `outpost`
- `Harad`
- `troll`

The page should then only show map entries where the searched word appears somewhere in the map information.

## How users interact with it

The `maps.html` page will include:

- one search input field
- one reset button

The interaction should be simple:

1. The user types a word into the search field.
2. The map list updates automatically.
3. Maps that contain the search word remain visible.
4. Maps that do not contain the search word are hidden.
5. The user can press reset to clear the search and show all maps again.

## Where it fits into the website

The feature belongs on the `maps.html` page, above the map list.

It supports the main purpose of the website: browsing and downloading custom maps.

The JavaScript file will be named `app.js` and will be connected to `maps.html`.

## Planned technical approach

The implementation should use vanilla JavaScript only.

The script will:

- select the search input
- select the reset button
- select all map entries
- listen for user input in the search field
- read the full visible text of each map entry
- compare that text with the search term
- hide entries that do not match
- show entries that match
- clear the search when the reset button is clicked

The code should stay small and understandable, around 40–80 lines.

## Why this is a suitable extension

This feature is useful for the actual project because players may search for specific map features such as dragons, inns, trolls, outposts, or specific regions.

It is more meaningful than a simple button interaction, but still small enough to fully understand and explain.

It gives a clear reason to use JavaScript: the visible map list changes dynamically without opening a new page.

## Optional future extension: Website sound system

A second possible JavaScript extension for later versions is a website sound system.

This would include:

- menu click sounds when users press navigation buttons
- click sounds when users press download buttons
- optional background menu music on the homepage
- a small sound on/off button in the top-left corner

This would help the website feel closer to the original RotWK main menu and improve the overall user experience.

However, this is planned only as an optional extra feature later.