#! /bin/sh

id=$(node index.js | fzf -d'\t' --with-nth 1..1 | awk -F'\t' '{print $2}')

echo "$id"

chrome-remote-interface activate $id
