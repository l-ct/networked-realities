[Networked Realities](https://www.networkedrealiti.es/)

## Chat

A simple chat app written entirely on the client using our [API](https://api.networkedrealiti.es/). Notice how there are three ways we're dealing with websockets:

1. DB is queried on page load using the `'find'` channel and passing the `{app: 'chat'}` object which will restrict returned objects to those that satisfy that criteria.
2. User submits form and broadcasts `input.value` to other users using 'insert' channel which also stores in DB. Incidentally, user's own interface needs updating.
3. User receives data from the other users.

## Draw

This is a visual variation on chat. Users send normalized x and y coordinates from 0 to 1 to each other. Just as above, these are stored using the `'insert'` websocket channel on our server. Once more, there are three main parts:

1. Initial retrieval from DB.
2. User saves coordinates to server, which in turn  them to DB and broadcasts them to other connected users.
3. User receives information from server (i.e. other users).
