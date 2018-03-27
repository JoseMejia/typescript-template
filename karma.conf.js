module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts",
            "specs/**/*.ts"
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript" 
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["Chrome"],
        coverageReporter: {
            instrumenterOptions: {
                istanbul: { noCompact: true }
            }
        }
    });
};