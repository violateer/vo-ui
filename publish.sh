npm config set registry https://registry.npmjs.org/
npm config get registry
npm publish &&
echo "success"
npm config set registry https://registry.npm.taobao.org/
npm config get registry