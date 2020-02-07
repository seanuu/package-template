module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
                targets: '> 1%, last 2 versions, not ie <= 11, node 8'
            }
        ]
    ]
};
