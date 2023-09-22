const express = require("express");

const Score = require("../model/score");

const router = express.Router();

router.post(
  "",
  (req, res, next) => {
    const score = new Score({
      playerName: req.body.playerName,
      time: req.body.time,
      moves: req.body.moves,
      difficulty: req.body.difficulty
    });
    score.save().then((createdScore) => {
      res.status(201).json({
        message: "Score added successfully",
        score: {
          ...createdScore,
          id: createdScore._id,
        },
      });
    });
  }
);

router.get("/", (req, res, next) => {
  Score.find({ difficulty: { $eq: req.query.difficulty}}).sort({time: 'asc'}).limit(10).then((documents) => {
    res.status(200).json({
      message: "Scores fetched successfully!",
      scores: documents,
    });
  });
});

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Score not found!" });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = router;
