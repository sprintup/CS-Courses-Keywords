var hash = (
    function getInstance() {
        var instance;
        function createInstance() {
            var object = {};
            return object;
        }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

module.exports.hash = hash.getInstance();

