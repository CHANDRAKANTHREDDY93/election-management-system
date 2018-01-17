const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const mongojs1 = require('mongojs');
const db = mongojs('mongodb://chandu93:Rajitha10@ds247587.mlab.com:47587/tasklist', ['tasks']);
const DB = mongojs1('mongodb://chandu93:Rajitha10@ds157097.mlab.com:57097/voterlist', ['votes']);
router.get('/tasks', function(req, res, next)
{
	db.tasks.find(function(err, tasks)
	{
		if(err)
		{

			res.send(err);
		}
		res.json(tasks);
	});
});

//get single task

router.get('/task/:id', function(req, res, next)
{
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task)
	{
		if(err)
		{
			res.send(err);
		}
		res.json(task);
	});
});

//save task

router.post('/task', function(req, res, next)
{
	var task = req.body;
	console.log(task);
	if(!task.myVote && !task.ssn && !task.isDone)
	{
		 res.status(400);
		 res.json({
		 "error" : "Invalid data"
	});
  }
	else
	{
		db.tasks.save(task, function(err, task)
		{
			if(err)
			{
				res.send(err);
			}
			res.json(task);
		});
	}

});

router.get('/votes', function(req, res, next)
{
	DB.votes.find(function(err, votes)
	{
		if(err)
		{

			res.send(err);
		}
		res.json(votes);
	});
});

//get single task

router.get('/vote/:id', function(req, res, next)
{
	DB.votes.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, vote)
	{
		if(err)
		{
			res.send(err);
		}
		res.json(vote);
	});
});

//save task

router.post('/vote', function(req, res, next)
{
	var vote = req.body;
	console.log(vote);
	if(!vote.voteId && !vote.ssn && !vote.name && !vote.age && !vote.address && !vote.phone && !vote.email)
	{
		 res.status(400);
		 res.json({
		 "error" : "Invalid data"
	});
  }
	else
	{
		DB.votes.save(vote, function(err, task)
		{
			if(err)
			{
				res.send(err);
			}
			res.json(task);
		});
	}

});



module.exports = router;