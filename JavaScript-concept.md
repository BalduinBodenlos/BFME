# JavaScript Concept

## Purpose

The JavaScript adds the parts of the website that need to react to user input without loading a new page.

It is used for two main areas: the entrance interaction on the homepage and the controls for the map archive.

## Homepage Interaction

The start page first shows a Doors of Durin entrance screen.

When the user clicks the word "friend", JavaScript hides the entrance screen and shows the main homepage menu.

The same interaction also starts the menu music. The music is connected to the user click so the browser can allow playback instead of blocking it as autoplay.

If the music cannot be loaded or played, JavaScript shows a visible message on the page.

## Map Archive Controls

The map archive uses JavaScript so users can change the visible map list directly on the page.

The controls include:

- fulltext search
- sorting
- creep filtering
- reset button
- visible result counter

These controls work on the map entries that are already visible in the page content.

## Search

The search checks the visible text of each map entry.

This means users can search not only for map names, but also for information such as player count, creeps, buildings, regions, creators, or years.

Example searches include:

- `dragon`
- `inn`
- `outpost`
- `Harad`
- `troll`

Only maps whose visible information matches the search stay visible.

## Sorting

The map list can be sorted by player count, map name, and year.

Player sorting uses the map name as a secondary rule so maps with the same player count still appear in a stable alphabetical order.

Year sorting keeps maps with unknown years at the end instead of mixing them into the dated entries.

## Filtering

The creep filter lets users show maps that contain a selected creep type.

This makes it easier to find maps with specific gameplay elements such as dragons, trolls, spiders, goblins, wargs, or barrow wights.

## Reset and Result Counter

The reset button clears the current search, sorting, and creep filter state.

The result counter updates after each change so users can see how many maps are currently visible.

## Why JavaScript Is Used

JavaScript is useful here because the page content changes in response to user input.

Without JavaScript, users could still read the map list, but they could not search, sort, filter, or enter the homepage through the thematic "friend" interaction without loading separate pages or duplicating content.

## Possible Future Improvement

A small future improvement could be to show short quotes from the game when users download a file.
