const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    city: String, //<-----I need to reference this in a follow up.
    title: String,
    description: String,
    imageUrl: String,
    completed: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Post', PostSchema)

//Created a model for the CityPost