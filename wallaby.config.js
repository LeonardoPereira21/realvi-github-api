module.exports = (wallaby) => {
    return {
        files: [
            'jest.config.js',
            'testSetup/index.js',
            'src/**/*.js',
            '!src/**/__tests__/*.js',
        ],
        tests: [
            'src/**/__tests__/*.js',
        ],
        env: {
            type: 'node',
            runner: 'node',
        },
        compilers: {
            '**/*.js': wallaby.compilers.babel(),
        },
        testFramework: 'jest',
        setup: w => {
            const jestConfig = require('./jest.config');
            jestConfig.globals = {
                __DEV__: true,

            };
            w.testFramework.configure(jestConfig);
            require('./testSetup');
        },
        filesWithNoCoverageCalculated: [
            'src/__tests__/*.js',
            'testSetup/**/*.js',
            '*.js',
        ],
    };
};
