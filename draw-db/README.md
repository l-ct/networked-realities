### Draw With DB

This is a visual variation on chat. Users send normalized x and y coordinates from 0 to 1 to each other. These are stored using the `'insert'` websocket channel on our server. Once more, there are three main parts:

1. Initial retrieval from DB.
2. User saves coordinates to server, which in turn  them to DB and broadcasts them to other connected users.
3. User receives information from server (i.e. other users).