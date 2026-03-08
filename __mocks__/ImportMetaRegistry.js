// Mock for expo/src/winter/ImportMetaRegistry to prevent Jest scope errors
module.exports = {
  ImportMetaRegistry: {
    get url() {
      return null;
    },
  },
};
