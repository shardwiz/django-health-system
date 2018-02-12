<<<<<<< HEAD
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var axisHelper = require('./axisHelper');

    function getName(obj) {
        if (zrUtil.isObject(obj) && obj.value != null) {
            return obj.value;
        }
        else {
            return obj;
        }
    }
    /**
     * Get categories
     */
    function getCategories() {
        return this.get('type') === 'category'
            && zrUtil.map(this.get('data'), getName);
    }

    /**
     * Format labels
     * @return {Array.<string>}
     */
    function getFormattedLabels() {
        return axisHelper.getFormattedLabels(
            this.axis,
            this.get('axisLabel.formatter')
        );
    }

    return {

        getFormattedLabels: getFormattedLabels,

        getCategories: getCategories
    };
=======
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var axisHelper = require('./axisHelper');

    function getName(obj) {
        if (zrUtil.isObject(obj) && obj.value != null) {
            return obj.value;
        }
        else {
            return obj;
        }
    }
    /**
     * Get categories
     */
    function getCategories() {
        return this.get('type') === 'category'
            && zrUtil.map(this.get('data'), getName);
    }

    /**
     * Format labels
     * @return {Array.<string>}
     */
    function getFormattedLabels() {
        return axisHelper.getFormattedLabels(
            this.axis,
            this.get('axisLabel.formatter')
        );
    }

    return {

        getFormattedLabels: getFormattedLabels,

        getCategories: getCategories
    };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});