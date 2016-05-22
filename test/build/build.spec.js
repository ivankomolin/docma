(function () {

    // dep modules
    var fs = require('fs-extra'),
        path = require('path');

    // own modules
    var Docma = require('../../index');

    describe('build', function () {
        var doc,
            config = {
                template: {
                    path: 'default',
                    document: {
                        title: 'My Lib API Documantation'
                    },
                    options: {
                        title: 'My Lib',
                        sidebar: true,
                        collapsed: false,
                        badges: true,
                        search: true,
                        navbar: true,
                        navItems: [
                            {
                                iconClass: 'ico-book',
                                label: 'Documentation',
                                href: ''
                            },
                            {
                                iconClass: 'ico-mouse-pointer',
                                label: 'Demos &amp; Examples',
                                href: 'index.html'
                            },
                            {
                                iconClass: 'ico-md ico-download',
                                label: 'Download',
                                items: [
                                    { label: 'First', href: 'index.html' },
                                    { label: 'Second', href: 'index.html' },
                                    { separator: true },
                                    { label: 'Third', href: 'index.html' }
                                ]
                            },
                            {
                                iconClass: 'ico-md ico-github',
                                label: 'GitHub',
                                href: 'https://github.com/onury/docma',
                                target: "_blank"
                            }
                        ]
                    }
                },
                jsdoc: {
                    encoding: 'utf8',
                    recurse: false,
                    pedantic: false,
                    access: null, // ['private'],
                    package: null,
                    module: true,
                    undocumented: false,
                    undescribed: false,
                    hierarchy: true,
                    sort: "grouped",
                    relativePath: path.join(__dirname, '/code'),
                    filter: null
                },
                // create an extra json file
                // boolean or name of the json file
                dump: true,
                src: [
                    './test/code/**/*.js'
                ],
                dest: './test/doc'
            };

        // beforeAll(function () {});

        it('should have created directory', function (done) {
            Docma.create(config)
                .build()
                .then(function (success) {
                    expect(success).toEqual(true);
                })
                .catch(function (err) {
                    expect(Boolean(err)).toEqual(false);
                    console.log(err.stack || err);
                })
                .finally(done);
        });

    });

})();
