# renobit.io

The renobit.io website.


## usage

To build a copy of this site, run the following command:

```bash
gulp prod
```

When the task finishes, you just need to copy all files in the ```prod``` directory into your public facing directory. E.g.:

```bash
cp -R ./prod/* /path/to/public/dir/
```


## development

To work on this site, run the following command:

```bash
gulp serve
```

This will watch the filesystem and any changes you make will automatically be updated accordingly. Currently, this will watch for changes to ```less``` and ```coffeescript``` files.
