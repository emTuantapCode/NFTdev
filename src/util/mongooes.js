module.exports = {
    multiMongooestoObject: function (mongooeses) {
        return mongooeses.map(mongooes => mongooes.toObject())
    },
    mongooestoObject: function (mongooes) {
        return mongooes ? mongooes.toObject() : mongooes
    }
}