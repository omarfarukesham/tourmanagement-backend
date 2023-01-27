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

exports.postTourService = async (data) => {
    const tours = new Tours(data)
    // console.log(tours)
    const result = await tours.save()
    return result
}

