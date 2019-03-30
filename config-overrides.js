const { override, fixBabelImports,addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
      javascriptEnabled: true,
      modifyVars: { 
        // '@primary-color': '#1DA57A' 
        '@brand-primary': '#1cae82',
        '@brand-primary-tap': '#1DA57A',
      },
    }),
);