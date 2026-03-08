// Jest setup file to patch Expo 55 winter runtime module compatibility issues.
// The installGlobal function in Expo 55 installs lazy getters that call require()
// inside a getter function, which Jest's runtime does not support.
// We pre-install __ExpoImportMetaRegistry as a plain value to avoid the lazy getter issue.
const importMetaRegistryMock = {
  get url() {
    return null;
  },
};

Object.defineProperty(global, '__ExpoImportMetaRegistry', {
  value: importMetaRegistryMock,
  configurable: true,
  enumerable: false,
  writable: true,
});
