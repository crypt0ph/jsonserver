const path = require('path');
const fs = require('fs');
const beautify = require("json-beautify");

const notes = {
  "notes": [
    {
      "id": 1,
      "title": "Learn node.js",
      "description": "Learn node.js from https://nodejs.org/en/"
    },
    {
      "id": 2,
      "title": "Buy fruits",
      "description": "Buy fruits from market"
    },
    {
      "id": 3,
      "title": "Do shoping",
      "description": "Do shoping at central mall with family and friends"
    },
    {
      "id": 4,
      "title": "Watch movie",
      "description": "Next Sunday watch movie at Inox"
    },
    {
      "id": 5,
      "title": "Send letters to John",
      "description": "Buy christmas greeting card for John from the corner shop"
    },
    {
      "id": 6,
      "title": "Plan for next trip",
      "description": "Shortlisted places that we can visit for the holidays Vatican, great barrier reef, grand canyon"
    },
    {
      "id": 7,
      "title": "Doctor's note",
      "description": "Eat the blue pill before breakfast and the red pill after dinner"
    },
    {
      "id": 8,
      "title": "Adam's train schedules",
      "description": "Adam's train arrives at 6:00 am, wake up at 5:00 am to get ready with everything"
    },
    {
      "id": 9,
      "title": "Car repairs",
      "description": "Tune the front brakes they are not tight, and have the oil changed"
    },
    {
      "id": 10,
      "title": "Expenses",
      "description": "Deposit $2000 for Randy's tution, and pay the life insurance premium before 21st of each month"
    }
  ]
}

fs.writeFileSync(path.join(__dirname, '../data/notes.json'), beautify(notes, null, 2, 80), 'utf8');