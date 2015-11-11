var filterGradient = require('../');
var expect = require('chai').expect;
require('mocha');

function test(input, output, done) {
    var actual = filterGradient.apply(null, input)
    expect(actual).to.eql(output);
    done();
}

function getExpected(start, end, type) {
    return 'progid:DXImageTransform.Microsoft.Gradient(' +
            'GradientType=' + type +
            ', StartColorStr="' + start +
            '", EndColorStr="' + end + '")';
}

describe('filter-gradient', function () {
    describe('Test module api', function () {
        describe('#filterGradient(startColor)', function () {
            it('should return the filter string for one color', function (done) {
                var expected = getExpected('#FF7ABCFF', '#FF7ABCFF', 0);
                test(['#7abcff'], expected, done);
            });
        });

        describe('#filterGradient(startColor, endColor)', function () {
            it('should return the filter string for two colors', function (done) {
                var expected = getExpected('#FF7ABCFF', '#FF4096EE', 0);
                test(['#7abcff', '#4096ee'], expected, done);
            });
        });

        describe('#filterGradient(startColor, endColor, gradientType)', function () {
            it('should return the filter string based on the gradient type', function (done) {
                var expected = getExpected('#FF7ABCFF', '#FF4096EE', 1);
                test(['#7ABCFF', '#4096EE', 1], expected, done);
            });
        });
    });

    describe('Test supported color format', function () {
        it('should support rgba() format', function (done) {
            var expected = getExpected('#CC1E5799', '#1A7DB9E8', 0);
            test(['rgba(30,87,153,0.8)', 'rgba(125,185,232,0.1)'], expected, done);
        });

        it('should support color name', function (done) {
            var expected = getExpected('#FF0000FF', '#FF008000', 0);
            test(['blue', 'green'], expected, done);
        });
    });
});
