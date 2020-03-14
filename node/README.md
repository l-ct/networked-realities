Node.JS Workshop

# Node.JS

First, download and install [Node.JS](https://nodejs.org/). That will also install npm, Node's Package Manager to which handles dependencies.

### Important Node.JS Modules / Concepts

- `require()` method loads modules
- `module.export` packages modules
- `__dirname` variable
- [FS](https://nodejs.org/api/fs.html) accesses the machine's File System to read, write and look for files.
- [Buffer](https://nodejs.org/api/buffer.html)
- [Path](https://nodejs.org/api/path.html) is not important, per se, just often used.

### Http Frameworks

- [Express](https://expressjs.com/en/api.html) relies on older callback functions
- [Fastify](https://www.fastify.io/) uses newer async await syntax

### Templating Engines

- [EJS](https://ejs.co/)
- [Pug](https://pugjs.org/) (formerally known as Jade), my fav makes whitespace significant (like Python)
- [Handlebars](https://handlebarsjs.com/)

### Hosts

- [Heroku](https://www.heroku.com/) is expensive, but well documented.
- [Up](https://apex.sh/docs/up/) is cheaper, but more niche.
- [AWS's](https://aws.amazon.com) [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/).
- [Digital Ocean](https://www.digitalocean.com) allows you to install whatever app on a full Linux instance.

### Useful Tips

- Install [Nodemon](https://nodemon.io/) globally so Node can restart automatically after file changes.


