const express = require("express");
const router = express.Router();
const Avenger = require("../models/avengers");

router.get("/new", (req, res) => {
    res.render("new.ejs");
});

router.get("/", (req, res) => {
    Avenger.find({}, (err, avengersAssemble) => {
        res.render("index.ejs", {
            avengers: avengersAssemble
        })
    })
})

//show route
router.get("/:id", (req, res) => {
    Avenger.findById(req.params.id, (err, foundAvenger) => {
        if(err){
            res.send(err)
        }else{
            res.render("show.ejs", {
                Avenger: foundAvenger
            })
        }
    })
});

router.get("/:id/edit", (req, res) => {
    Avenger.findById(req.params.id, (err, foundAvenger) => {
        res.render("edit.ejs", {
            avenger:foundAvenger
        })
        
    })
})

//Post Route

router.post("/", (req, res) => {
    Avenger.create(req.body, (err, createdAvenger) => {
        if(err){
            res.send(err)
        }else{
            res.redirect("/avengers")
        };
    });
});

//Delete
router.delete("/:id", (req, res) => {
    Avenger.findByIdAndRemove(req.params.id, (err, Deleted) => {
        if(err){
            res.send(err)
        }else{
            res.redirect("/avengers")
        }
    })
})

router.get("/:id/edit", (req, res) => {
    Avenger.findById(req.params.id, (err, foundAvenger) => {
        if(err){
            res.send(err)
        }else{
            res.redirect("/avengers")
        }
    })
});


router.get("/:id", (req, res) => {
    Avenger.findByIdAndUpdate(req.params.id, (err, updated) => {
        if(err){
            res.send(err)
        }else{
            res.redirect("/avengers")
        }
    })
});


router.delete('/:id', (req, res) => {

    Avenger.findByIdAndRemove(req.params.id, (err, deleted) => {
      if(err){
        res.send(err);
      } else {
        res.redirect('/avengers')
      }
    });
  });
  
  
  
  router.put('/:id', (req, res) => {
    Avenger.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedAvenger) => {
      if(err){
        res.send(err);
      } else{
        res.redirect('/avengers');
      }
    });
  });
  

module.exports = router;