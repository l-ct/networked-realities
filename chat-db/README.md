### Chat with DB

A simple chat app written entirely on the client using our [API](https://api.networkedrealiti.es/). Notice how there are three ways we're dealing with websockets:

1. DB is queried on page load using the `'find'` channel and passing the `{app: 'chat'}` object which will restrict returned objects to those that satisfy that criteria.
2. User submits form and broadcasts `input.value` to other users using 'insert' channel which also stores in DB. Incidentally, user's own interface needs updating.
3. User receives data from the other users.
