---
path: "/blog/dev-work-environment"
title:  "My Dev Work Environment"
date:   "2018-01-23"
author: "Henrique Pacheco"
description: "The power of a Unix terminal is still unreachable!"
category: Tech
image: assets/img/posts/devenv.jpg
thumb: assets/img/posts/thumbs/devenv.jpg
---

Hey :)

For a while I've been wanting to write about my dev work environment at work, not only because I feel it has been boosting my productivity, but also because I would love to have some feedback on how to improve it even more. I use an ASUS i7 with 16 GB of RAM, setup with Microsoft Windows 7 by default, which I later upgraded to Windows 10.

For about 3 years, I used Windows as my developer environment. Windows is not a bad OS, and the Office suite is a blessing if one often works with documents. But other than that, when compared to a Unix system (mainly from the point of view of a developer), it lacks a certain degree of control over the machine itself.

As I didn't want to shatter my access to the Office suite, the first thing I did was to install a Unix distro (namely Ubuntu 16.04 LTS) in dual boot. This way, I can access Windows any time I need by rebooting (after almost two months using Unix, I haven't had the need to access Windows one single time). I followed the instructions [here][dual-boot-link], and successfully setup Ubuntu on my work machine.

After installing Ubuntu and some required software, I was able to pretty much emulate the same environment I had on Windows. The stack I currently use is based on:

* **[MySQL Workbench][workbench-link]** for database access and management - though I'm thinking about trying [DBeaver][dbeaver-link], since it seems a good open-source alternative and Workbench has some irritating bugs in the Ubuntu version.

* **[Visual Studio Code][vscode-link]** as my preferred text editor - I've been practicing Vim at home, but I'm not proficient enough so that it would be productive to use it (_yet_).

* **[Guake Terminal][guake-link]** as terminal emulator, flavoured with [Oh-My-Zsh][ohmyzsh-link]. Guake is a nice terminal emulator for Ubuntu that does not appear as a normal application when `Alt+Tab`ing, but it pops up at the pressing of a keystroke, which is very useful.

Oh-My-Zsh is also fantastic due to the amount of features, shortcuts and customizations it provides - I just love the Git shortcuts such as `ga` instead of `git add`, `gst` instead of `git status` or `gc` instead of `git commit`.

* **[Google Chrome][chrome-link]** as web browser. Despite the recent improvements in the latest Firefox version, Chrome is still king when it comes to browsing the web or providing excellent development tools.

I also use occasionally **[Postman][postman-link]** for testing or interacting with REST APIs and **[Kitematic][kitematic-link]** for Docker container management and access - though I'm looking for an alternative since Kitematic is still a Beta and the Ubuntu version lacks some "fancy" features (such as starting the app other than from the command line, for instance).

I'm very happy with the changes I made to my setup. I tried some alternatives, such as running an Unix distro as a virtual machine on Windows, or the Windows Linux Subsystem, but the truth is that there is still _nothing_ that matches the power of the Unix terminal.

I'll keep improving my tech stack, but in the mean time, any feedback is appreciated. Next week, I'll share my input on the latest book I read.

Stay tuned and see you next time!


[dual-boot-link]: https://www.tecmint.com/install-ubuntu-16-04-alongside-with-windows-10-or-8-in-dual-boot/
[dbeaver-link]: https://dbeaver.jkiss.org/
[ohmyzsh-link]: https://github.com/robbyrussell/oh-my-zsh
[postman-link]: https://www.getpostman.com/
[kitematic-link]: https://kitematic.com/
[guake-link]: http://guake.org/
[vscode-link]: https://code.visualstudio.com/
[workbench-link]: https://www.mysql.com/products/workbench/
[chrome-link]: https://www.google.ca/chrome/browser/desktop/index.html