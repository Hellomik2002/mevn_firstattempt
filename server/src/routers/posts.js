const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  console.log("kot1");
  res.status(201).send();
});

router.delete('/:id', async(req, res) => {
  console.log("kot");
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
})

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://abc123:abc123@ds119734.mlab.com:19734/first",
    {
      useNewUrlParser: true
    }

  );

  return client.db("first").collection("posts");
}
module.exports = router;