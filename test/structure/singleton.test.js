var fs = require('fs'),
	assert = require('assert');

describe('singleton configuration files', function () {
	it('should have a README.md', function (done) {
		fs.stat('README.md', done);
	});

	it('should have a valid Procfile', function (done) {
		fs.stat('Procfile', done);
	});

	it('should have a valid .bowerrc', function (done) {
		fs.stat('.bowerrc', done);
	});

	it('should have a valid app.js', function (done) {
		fs.stat('app.js', done);
	});

	it('should have a valid .jsdocrc', function (done) {
		fs.stat('.jsdocrc', done);
	});

	it('should have a valid gitignore', function (done) {
		fs.stat('.gitignore', done);
	});

	it('should have a valid .gitattributes', function (done) {
		fs.stat('.gitattributes', done);
	});

	it('should have a valid ESLint config', function (done) {
		fs.stat('.eslintrc', done);
	});

	it('should have a valid ESLint exclusion', function (done) {
		fs.stat('.eslintignore', done);
	});

	it('should have a valid EditorConfig', function (done) {
		fs.stat('.editorconfig', done);
	});

	it('should have a valid CSSLint config', function (done) {
		fs.stat('.csslintrc', done);
	});

	it('should have a valid .github directory', function () {
		assert.deepStrictEqual(fs.readdirSync('.github'), // eslint-disable-line no-sync
			['CODE_OF_CONDUCT.md', 'CONTRIBUTING.md', 'ISSUE_TEMPLATE.md', 'PULL_REQUEST_TEMPLATE.md'],
			'.github files may be out of order');
	});

	it('should have a valid views directory', function (done) {
		fs.stat('views', done);
	});

	it('should have a valid test directory', function (done) {
		fs.stat('test', done);
	});

	it('should have a valid utils directory', function (done) {
		fs.stat('utils', done);
	});

	it('should have a valid scripts directory', function (done) {
		fs.stat('scripts', done);
	});

	it('should have a valid routes directory', function (done) {
		fs.stat('routes', done);
	});

	it('should have a valid public directory', function (done) {
		fs.stat('public', done);
	});

	it('should have a valid node_modules directory', function (done) {
		fs.stat('node_modules', done);
	});

	it('should have a valid bin directory', function (done) {
		fs.stat('bin', done);
	});

	it('should have a valid .git directory', function (done) {
		fs.stat('.git', done);
	});
});
