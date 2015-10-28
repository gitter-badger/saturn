{
    "files": [
        "dist/src/**/*.js",
        "dist/src/**/*.js"
    ],
    "src": "dist/src/**/*.js",
    "mock":"dist/tests/**/*mock.js",
    "deps":"dist/tests/**/*deps.js",
    "test":"dist/tests/**/*test.js",
    "output": "test-results",
    "nwpath": "dist/node-webkit/nw",
    "ext": "spec",
    "covReport": ['cobertura', 'html' ],
    "doNotRunCoverage": true
}
