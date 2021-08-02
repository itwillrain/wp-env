# Develop wordpress

wp-env + gts

## Usage

### Starting WordPress Container

```bash
#install node_modules
$ yarn 
# start wordpress
$ yarn wp-env:start
```

### WP-CLI

```bash
yarn wp-env:cli {command}
# example
yarn wp-env:cli --info
yarn wp-env:cli user list
```

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)