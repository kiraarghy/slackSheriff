const bodyParser = require("body-parser");
const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

const emojisheriff = (req, res) => {
  // Text field coming from slack
  const text = req.body.text;

  // Use RegEx to get the first slack emoji code
  const firstSlackEmojiCode = text.match(/\:[^:]+\:(\:skin\-tone\-\d\:)?/);

  // This monstrosity is the template literal for the emoji sheriff
  const sheriffEmojiTemplate = `               :sheriff: \n         *** \n     *    *     * \n:point_down:     **      :point_down: \n        *          * \n       *           * \n       :boot:            :boot:`;

  // Replace all '*' with slack emoji code
  // If we are supplying a skin colour, it appends it to :point_down:
  const sheriffEmoji = !!firstSlackEmojiCode[1]
    ? sheriffEmojiTemplate
        .replace(/\:point_down:/g, `:point_down:${firstSlackEmojiCode[1]}`)
        .replace(/\*/g, firstSlackEmojiCode[0])
    : sheriffEmojiTemplate.replace(/\*/g, firstSlackEmojiCode[0]);

  // Empty response to the channel to satisfy slack's API
  res.end();

  // Post response to slack response url with emoji sheriff so
  // you don't get the /sheriff :boop: record printed in slack
  axios
    .post(`${req.body.response_url}`, {
      response_type: "in_channel",
      text: `Howdy, I'm the sheriff of ${firstSlackEmojiCode[0]}\n\n${sheriffEmoji}`
    })
    // Not interested in handling response but am in error logging
    .catch(function(error) {
      console.log(error);
    });
};

app.use(bodyParser.urlencoded());

app.post("/", (req, res) => emojisheriff(req, res));

app.listen(port, () => console.log(`Howdy I'm listening on port ${port}!`));
