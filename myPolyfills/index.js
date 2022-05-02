module.exports = function () {
    if (!Array.prototype.myMap) {
        Array.prototype.myMap = function (callback) {
            if (!(this instanceof Array || this instanceof String)) {
                throw new TypeError(`TypeError`)
            }

            if (typeof callback !== 'function') {
                throw new TypeError (`Callback is not a function`)
            }

            const newArray = [];
            for (let i = 0; i < this.length; i++){
                newArray.push(callback(this[i], i, this))
            }

            return newArray
        }
    }
    
}