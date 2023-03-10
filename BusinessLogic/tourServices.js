const Tours = require('../models/tourManageModel')


exports.getTourService = async (queries) => {
    // console.log('Blogic'+ typeof(queries.sortBy));
    console.log(queries.limitBy)
    const result = await Tours.find({}).skip(queries.skipBy).limit(queries.limitBy).sort(queries.sortBy)
    return result
}

exports.getDetailsService = async (id) => {
    // console.log(id)
    const result = await Tours.findByIdAndUpdate({ _id: id }, { $inc: { viewCount: 1 } }, { new: true });
    return result
}

// exports.patchTourServices = async (tourId, bodyData) => {
//     const result = await Tours.findByIdAndUpdate(tourId, bodyData, { new: true })
//     return result
// }

exports.patchTourServices = async (tourId, bodyData) => {
    const product = await Tours.findById(tourId)
    const result = await product.set(bodyData).save()
    return result
}


exports.postTourService = async (data) => {
    const tours = new Tours(data)
    // console.log(tours)
    const result = await tours.save()
    return result
}

exports.deleteTourService = async (id) => {
    const result = await Tours.deleteOne({ _id: id })
    return result
}

exports.trendingService = async () => {
    const result = await Tours.find({}).sort({ viewCount: -1 }).limit(3);
    return result
}

exports.cheapestService = async () => {
    const result = await Tours.find({}).sort({ price: 1 }).limit(3)
    return result
}