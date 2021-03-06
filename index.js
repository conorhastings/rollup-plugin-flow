var flowRemoveTypes = require('flow-remove-types');
var createFilter = require('rollup-pluginutils').createFilter;

module.exports = function(options) {
  options = options || {};
  var filter = createFilter(options.include, options.exclude);

  return {
    name: 'flow-remove-types',
    transform(code, id) {
      if (filter(id)) {
        return {
          code: flowRemoveTypes(code),
          map: { mappings: '' }
        };
      }
    }
  };
}
