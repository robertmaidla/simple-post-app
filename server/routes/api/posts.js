const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add Posts

// Delete Posts

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://abc123:asD1234@vueexpress-shard-00-00-beax7.mongodb.net:27017,vueexpress-shard-00-01-beax7.mongodb.net:27017,vueexpress-shard-00-02-beax7.mongodb.net:27017/test?ssl=true&replicaSet=VueExpress-shard-0&authSource=admin&retryWrites=true', {
        useNewUrlParser: true
    });

    return client.db('vueexpress').collection('posts');
}


module.exports = router;
