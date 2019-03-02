# slackSheriff

This is a slack bot that takes in a slash command and returns an emoji sheriff.

`/sheriff 🤠`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👇

```
⠀ ⠀ ⠀  🤠
　    🤠🤠🤠
   🤠   🤠　🤠
  👇   🤠🤠 👇
  　  🤠　🤠
　   🤠　 🤠
　  👢     👢
```

## Using slackSheriff

Configure your bot as per [Slack API](https://api.slack.com/slack-apps), specifically setting up a [slash command](https://api.slack.com/slash-commands) e.g. ```/sheriff 👆```.

Then use the slash commands to point to the relative request url.

### Running the slacksheriff

1. Run slacksheriff locally using node.
  Use something like [ngrok](https://ngrok.com/) to expose an external url. Then point your slack bot at your server.

2. Deploy slacksheriff to AWS lambda using something like [Apex's up](https://github.com/apex/up), [Serverless](https://serverless.com/), or AWS dashboard.

Umm that's kinda it.

## Inspiration and thanks goes to:

[Every Sheriff Bot](https://twitter.com/EverySheriff) for inspiration.

[SomeHats](https://twitter.com/SomeHats) for technical support.