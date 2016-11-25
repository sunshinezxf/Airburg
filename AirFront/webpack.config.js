module.exports = function (webpackConfig) {
    webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(['import',
        [
            {
                libraryName: "antd-mobile",
                style: 'css'
            },
            {
                libraryName: 'antd',
                style: 'css'
            }
        ]
    ]);

    return webpackConfig;
};
