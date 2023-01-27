const { getTourService, postTourService, getDetailsService } = require("../BusinessLogic/tourServices");

const getTour = async (req, res) => {
    try {
        const queries = {}
        if (req.query.fields) {
            const sortBy = req.query.fields.split(',').join(' ')
            queries.sortBy = sortBy
        }
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy
        }
        if (req.query.page) {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const skips = (page - 1) * limit;
            queries.skipBy = skips
            queries.limitBy = limit
        }
        if (req.params.id) {
            console.log(req.params.id);
        }

        const result = await getTourService(queries)
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "FAILED"
        })
    }

}
const getDetailsTour = async (req, res) => {
    try {
        const getId = req.params.id
        // console.log("controller" + getId)
        const result = await getDetailsService(getId)
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status:'Failed',
        })
    }
}

const createTour = async (req, res) => {
    try {
        const dataRequest = req.body
        // console.log(dataRequest)
        const result = await postTourService(dataRequest)
        res.status(200).json({
            status: 'success',
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failed'
        })
    }

}

const updateTour = (req, res) => {
    res.send(`I am delete route.......${req.params.id}`)
}
const deleteTour = (req, res) => {
    res.send(`I am delete route.......${req.params.id}`)
}

module.exports = { getTour, createTour, updateTour, deleteTour, getDetailsTour }