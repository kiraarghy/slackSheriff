require("http")
  .createServer((req, res) => {
    // Get the header string
    const reqHeader = req.headers.header;

    // Use RegEx to get the first slack emoji code
    // toDo: pull skin colour modifiers if included
    const firstSlackEmojiCode = reqHeader.match(/\:([^:]+)\:/g);

    // This monstrosity is the template literal for the emoji sheriff
    const sheriffEmojiTemplate = `               :sheriff: \n         *** \n     *    *     * \n:point_down:       **    :point_down: \n        *          * \n       *           * \n       :boot:            :boot:`;

    // Replace all '*' with slack emoji code
    const sheriffEmoji = sheriffEmojiTemplate.replace(
      /\*/g,
      firstSlackEmojiCode[0]
    );

    // Response
    res.end(`I'm the Sheriff of ${firstSlackEmojiCode}\n\n${sheriffEmoji}`);
  })
  .listen(process.env.PORT || 3000);