heroku-pgcli
============

pgcli plugin for Heroku CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/heroku-pgcli.svg)](https://npmjs.org/package/heroku-pgcli)
[![Downloads/week](https://img.shields.io/npm/dw/heroku-pgcli.svg)](https://npmjs.org/package/heroku-pgcli)
[![License](https://img.shields.io/npm/l/heroku-pgcli.svg)](https://github.com/techgaun/heroku-pgcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g heroku-pgcli
$ heroku pgcli DATABASE_URL --app some-good-app
Running pgcli on DATABASE_URL...
$ heroku pgcli --help
Connect with Heroku posgtresql db using pgcli

USAGE
  $ heroku pgcli

OPTIONS
  -a, --app=app    (required) the Heroku app to use
  -h, --help       show CLI help
  -n, --name=name  the Heroku postgres DB name to use. Default: DATABASE_URL

EXAMPLE
  $ heroku pg:pgcli DATABASE_URL --app <app_name>
...
```
<!-- usagestop -->

# Development

- `heroku plugins:link`
- `heroku pgcli`
- `HEROKU_DEBUG=1` to print debugging statements
- `HEROKU_DEBUG_HEADERS=1` to also get the headers
- `DEBUG=*`` to get lots of internal debug output
