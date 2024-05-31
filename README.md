## Angular + UnoCSS 🎉

This is an example on how to get an Angular app working with UnoCSS (**including transformers!**) via Unos CLI

### How it works:

A custom watcher is keeping a copy (_src) of the src folder in sync and uses Unos CLI to extract and transform all matchers. The copy is used for both serve and build steps.

This way i.e. variant groups will still be preserved in your source code but are transformed for the dev-server and build.

### How to use:

For the dev-server to work properly the aforementioned watcher has to be running alongside it.

To make this easier I added a start script:

On UNIX

```npm run start```

On Windows

```npm run start-win```
