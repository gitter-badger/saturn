{
    "files": [
        "src/app/angular.js",
        "src/app/angular-mocks.js"
    ],
    "src": "src/**/*.js",
    "mock":"tests/**/*mock.js",
    "deps":"tests/**/*deps.js",
    "test":"tests/**/*test.js",
    "output": "test-results",
    "nwpath": "node-webkit/nw",
    "ext": "spec",
    "covReport": ['cobertura', 'html' ],
    "doNotRunCoverage": true
}
