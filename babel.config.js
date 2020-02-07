module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
                targets: 'last 2 Chrome versions, not ie <= 11, not node <= 8'
            }
        ]
    ]
};
