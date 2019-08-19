---
path:        "/blog/carson-the-bot-chatbot-perl"
title:       "Carson, the bot: implementing a chat bot"
date:        "2018-02-02"
author:      "Henrique Pacheco"
description: "How we implemented a chat bot to help us on our daily tasks."
category:    "Tech"
featured:    true
image:       "/posts/carson.jpg"
---

Hey :) me and my girlfriend [Mariana Capelo][mary-link] have been attending Natural Language Processing classes at University of Minho, and as a practical project, we decided to implement a simple chat bot.

Our main goal was to make a command line tool that was able to, first of all, **understand natural language** (i.e. sentences written in a command-line tool resembling human language). It was important for it to have a useful application on our daily lives, and at the same time, **extensible**, so that we could iterate incrementing its features. In order to achieve this, we decided to build a tool that would base itself in a script, using it to translate input into commands and properly execute them. Our main inspiration was Mr. Carson, the butler on the TV series [Downtown Abbey][downtown-link], and for that reason, we called the developed Perl module **Carson::Bot**.

## Bot's architecture overview

Skipping ahead the headaches of two rookies trying to create a functional Makefile and a properly-structured Perl module, the architecture of the system can be illustrated as follows:

![Carson Bot architecture][img-carson-architecture]

### Parsing the script

The initial step involves parsing the bot's **script** - an XML file that defines which intents the current bot can understand, as well as how it will answer to them. This enables the possibility of having multiple "personalities" (per se) using the same code basis.

### Decoding the intent

After the first step, the program loops infinitely waiting for user input - for example, let's assume we want to know the weather in Braga. For that purpose, we would write "weather in Braga" and hope that the bot can fullfil our intent.

As soon as the "Enter" key is pressed, our input string is decoded against the script data in order to understand if the bot can fulfill the user's intent. This involves searching for keywords (such as "weather") in the input string.

### Handling the intent

If a valid keyword is found, Carson will use the handler associated with the keyword found to fullfil the request. In the example, this involves calling the **Carson::Handlers::Weather** module, providing the location (Braga).

The handler returns a response with a set of parameters that can be used to build a valid response for the intent - in this case, the response includes the values for the parameters `TEMPERATURE` and `DESCRIPTION`.

### Building and sending the response

The final step is to use, once again, the script file to fetch an appropriate response template:

```bash
Currently in <<LOCATION>>, the weather is <<DESCRIPTION>> with <<TEMPERATURE>>ºC.
```

This template is then interpolated with the parameters provided by the handler to build the response that will be sent to the user.

## Frames and slots

Handlers may require parameters so that they can properly fullfil the user's intent. It is the case of the **Carson::Handlers::Weather** handler, which requires the location so that it can properly provide the weather somewhere.

Thus, enters the concepts of **frames and slots**.

*A frame is a set of slots that a certain handler requires to be set so that it can fullfil the user intent.*

The frame associated with a handler can be defined in the script, and also customized on a "personality" basis. But the really cool part here is that if a given slot is not fulfilled, the handler can require follow up questions to find out the missing values for its slots.

That means that we can configure Carson so that if we request the weather and we don't provide the location ("tell me the weather"), he will ask us where do we want to know the weather. Only after having the value for that slot will the handler be requested to fullfil the intent.

This implementation gives a huge flexibility to set up more complex handlers such as scheduling flights or ask for market stock prices.

![Mr. Carson telling us that it is cold in London][img-carson-working]

## All in all

There are still some improvements to be made, such as including some more powerful ways of processing the user intents (for example, using [Freeling][freeling-link] to interpret the user input), or adding support for timed events. But all in all, for its first version, Carson provides a flexible and scalable structure for a simple chatbot, that can be easily extended.

I hope you have enjoyed this post! You can take a look at the source code of Mr. Carson [here][bitbucket-link]. See you next time!

[freeling-link]: http://nlp.lsi.upc.edu/freeling/node/1
[bitbucket-link]: https://bitbucket.org/marianacapelo/spln/src/3a48aceb6c14fb4559a4f78b7b3b5db904218cae/pl2/?at=master
[downtown-link]: http://www.imdb.com/title/tt1606375/
[mary-link]: http://marianacapelo.com

[img-carson-architecture]: /posts/bot_arch.png
[img-carson-working]: /posts/carson.gif
