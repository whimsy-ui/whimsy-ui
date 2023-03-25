#!/bin/sh

set -e

pnpm build

cd dist/whimsy-ui
npm publish
cd -

echo "✅ Publish completed"
