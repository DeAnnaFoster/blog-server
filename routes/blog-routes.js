var express = require('express')
var router = express.Router()
var blogs = require('../models/blog')
var blogposts = require('../models/blogpost')
// var threads = require('../models/thread')
// var comments = require('../models/comment')

//Standard routes get/push/put/delete 
//For Thread Use
router
  .get('/', (req, res, next) => {
    blogs.find({})
      .then(blogs => {
        res.send(blogs)
      })
      .catch(next)
  })

  // CUSTOM ROUTES
  //for Blogs by ID
  .get('/:id', (req, res, next) => {
    blogs.findById(req.params.id)
      .then(blogs => {
        res.send(blogs)
      }).catch(next)
  })

  //Routes for blogposts
  .get('/:id/blogposts', (req, res, next) => {
    blogs.find({ blogId: req.params.id })
      .then(blogposts => {
        res.send(blogposts)
      }).catch(next)
  })


//   .put('/:id/comments', (req, res, next) => {
//     var id = req.params.id
//     //console.log('this is the req: ' + req)
//     threads.findByIdAndUpdate(id, req.body)
//       .then(thread => {
//         res.send({ message: 'Successfully Updated' })
//       }).catch(next)
//   })

router
  .post('/', (req, res, next) => {
    blogs.create(req.body)
      .then(blog => {
        //if (req.session.uid) {
          console.log(blog)
          res.send(blog)
        //}
      }).catch(next)
  })
//   .put('/:id', (req, res, next) => {
//     var id = req.params.id
//     blogs.findByIdAndUpdate(id, req.body)
//       .then(blogs => {
//         if (req.session.uid) {
//           res.send({ message: 'Successfully Updated' })
//         }
//       }).catch(next)
//   })
  .delete('/:id', (req, res, next) => {
    blogs.findByIdAndRemove(req.params.id)
      .then(blogs => {
        //if (req.session.uid) {
          res.send({ message: 'Successfully Removed' })
        //}
      }).catch(next)
  })

  .post('/:id/blogposts', (req, res, next) => {
    blog.create(req.body)
      .then(blogpost => {
        //if (req.session.uid) {
          res.send(blogpost)
        //}
      }).catch(next)
  })

//   .delete('/:id/comments/:commentId', (req, res, next) => {
//     comments.findByIdAndRemove(req.params.commentId)
//       .then(comment => {
//         if (req.session.uid) {
//           res.send({ message: 'Successfully Removed' })
//         }
//       }).catch(next)
//   })

// ERROR HANDLER
router.use('/', (err, req, res, next) => {
  if (err) {
    res.send(418, {
      success: false,
      error: err.message
    })
  } else {
    res.send(400, {
      success: false,
      error: 'Something failed please try again later'
    })
  }
})

module.exports = router
