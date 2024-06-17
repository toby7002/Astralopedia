---
sidebar_position: 4
---

# Devices

Key component of ME network is devices that are connected to it.

## ME Drive and ME Chest

<img src="https://cdn.jsdelivr.net/gh/Astralopedia/astralopedia-assets@master/images/ae2/me_chest_and_drive.png" />

ME Drive and ME Chest are means of making storage cells available to network;
drive features 10 slots, while chest has built-in interface for interacting with
cell inserted into it.

## Storage bus

<img src="https://cdn.jsdelivr.net/gh/Astralopedia/astralopedia-assets@master/images/ae2/storage_bus.png" />

Similarly to ME Drive and ME Chest, this device's purpose is adding storage;
unlike previously mentioned blocks, this is one of many _panels_ - devices
mounted on cable itself. Storage bus gives access to inventory or fluid storage
it is facing from network.

## Import and Export buses

<img src="" />

These are two devices which you will need a lot of for automation - these allow
automatic input (import) and output (export) of items from/into storage in
network. Import and export buses do not interact with other import/export
buses - use P2P for direct transfer or add inventory to the network as
intermediate step.

## Illuminated panels

<img src="" />

Three of least useful devices, these are simply light sources that glow color of
cable when network is powered. However, they act as crafting element for some
other devices, like terminal.

## Terminals

<img src="" />

Terminals allow players to use network. Crafting terminal allows to craft items
using stuff from network, automatically refilling crafting grid.

## Level emitters

<img src="" />

Level emitter outputs redstone signal when amount of specified item goes above
or below specified number. Energy level emitter emits redstone signal based on
amount of energy stored in energy cells in the network.

## Toggle bus

<img src="" />

Toggle bus separates two networks until redstone signal is given to nearby block
(inverted toggle bus separates networks when signal is on). Toggle buses does
not consume channel on its own. You shouldn't use toggle buses for automations,
as each change to their status triggers network reboot for networks on both
sides of bus.
