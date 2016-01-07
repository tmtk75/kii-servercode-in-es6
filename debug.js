import launcher from "./launcher.js"
import * as main from "./src/main.js"

window.Launcher = launcher;
window.EntryNames = main;

/*
 * You can write a code here to be invoked immediatedly when reload.
 * It's helpful for development & debug.
 */
//launcher.invoke(main.example_1, {hello: 1234});
