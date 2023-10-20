This is a Discord bot that I created to manage my private Minecraft server for me and my friends.

Originally the server had a plugin that would automatically launch the Minecraft server if someone tried to join but I've since lost it.

The bot was created to notify my discord that someone had launched the MC server as well as periodically request the following:
1). IP address of the MC server
2). Port # 
3). Current Online/Offline/Idle status
4). Current Player Count
5). Time elapsed since last player left

In the event that enough time had elapsed since the last player had left the Discord bot would execute a kill.bat file.
The kill.bat file would force close the MC servers port forcing it to soft close.
The reason for this is if the process were instead terminated, the script that automatically launched the server would also close.
This is because the autolaunch plugin created a foax server that someone could "join", when a player joined it closed the foax server and launched the real server.
