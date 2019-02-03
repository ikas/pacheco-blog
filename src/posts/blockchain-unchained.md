---
path:        "/blog/blockchain-unchained"
title:       "Blockhcain unchained"
date:        "2018-03-03"
author:      "Henrique Pacheco"
description: "An introduction to blockchain, cryptocurrencies and how they can change our lives."
category:    "Tech"
featured:    true
---

I'm a bit skeptical when it comes to revolutionary products or services - more often than not, it's just someone wanting to take advantage of people's lack of knowledge (or naiveness) to make money out of it. But, although I believe that there is still some lack of knowledge about **blockchain**, it does seem to be a technology that is here to stay and revolutionize the world as we know it.

# Concept overflow

[Blockchain][blockchain-link] as a technology rose in 2008, supporting the first implementation of [Bitcoin][bitcoin-link] by [Satoshi Nakamoto][satoshi-link] (the name used for the unknown person who invented it). Bitcoin is a cryptocurrency which enables payments without middle man entities (such as banks or administrators), and this concept is already revolutionary by itslef. **The idea of people taking control of their money as a community (making entities such as banks *useless*) is so radical that even its inventor felt the need to hide his/her identitiy.**

Blockchains are lists of **blocks**, where each block contains the information about a single transaction, the timestamp of when it occurred, and a link to the previous block. This assumes the existance of an original (aka *genesis*) block, which represents the first transaction of a blockchain system.

{% include image.html url="/assets/img/posts/blockchain-example.png" description="An example of a blockchain." width="500" %}

# Why you can't cheat a blockchain

Blockchains are **open**, meaning that anyone can see or hold a copy of every transaction that ever occurred in the system, and **decentralized**, i.e. the risk of data being hold centrally by a single entity is eliminated by storing the blockchain across the network of its users. **These two principles take charge for the resistance to modification by design of blockchains.**

Once a block is added to the blockchain, it is extremely hard to modify it, which makes blockchain an extremely good basis for systems that require transaction recording between different entities efficiently, in a verifiable and permanent way. The first use case of blockchain was Bitcoin (i.e. coin or payment systems), but it can also be disruptive in a handful of areas.

## Blockchains for data storage

Distributed cloud data storage using blockchains is right ahead, as the TV series [Silicon Valley][silicon-valley-link] shows. There are already a number of startups exploring decentralized control of data, when opposed to the current solutions of centralized cloud data solutions ([Storj][storj-link] for instance).

## Blockchains for voting

The elections that took Donald Trump to be elected US president in 2016 were accused of having been rigged. But this was not the first time that democracy has undergone a period of uncertainty, vote miscount, fraudulent entities manipulating election results or voting systems being hacked.

Blockchain can also be useful for voting systems that are free from manipulation, cohersion or corruption. [FollowMyVote][fmv-link] is already working on a solution in that area, which will allow voters to vote anywhere, for their vote to be 100% secure and prevent the results from being manipulated.

## Blockchains for charity / non-profit organisations

There are lots of cases of corruption and inefficiency in NPO's around the world, and blockchains may also have a saying in this area. [BitGive][bitgive-link], for instance, is providing real time transparent donations for multiple areas around the world.

# Conclusions

**Blockchains are much more that just Bitcoin.** This concept has opened the gates for bringing corruptible systems to an end, but there is still a long way to go. The promise of revolution comes hand in hand with desrupting existing chains of control and industries, taking power from elites that solely monopolize fully functional industries. It will be interesting to see how this area will evolve in the next years.

If you are interested in this subject, there are **a ton of resources** that you can explore - I'll add the ones that I find best to the list below:

* [Shai Rubin, CTO of Citi Innovation Lab, explaining blockchain concepts][shai-rubin-link]
* [Build An Ethereum Hello World Blockchain Application In A Private Network][ethereum-app-link]

I hope this post has raised your interest on finding out more about blockchains. See you next time!

[satoshi-link]: https://en.wikipedia.org/wiki/Satoshi_Nakamoto
[bitcoin-link]: https://en.wikipedia.org/wiki/Bitcoin
[blockchain-link]: https://en.wikipedia.org/wiki/Blockchain
[silicon-valley-link]: http://www.imdb.com/title/tt2575988/
[storj-link]: https://storj.io/
[fmv-link]: https://followmyvote.com/
[bitgive-link]: https://www.bitgivefoundation.org/

[shai-rubin-link]: https://www.youtube.com/watch?v=93E_GzvpMA0
[ethereum-app-link]: https://www.youtube.com/watch?v=T3X7hfltr8c