heroku-pgcli
============

pgcli plugin for Heroku CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/heroku-pgcli.svg)](https://npmjs.org/package/heroku-pgcli)
[![Downloads/week](https://img.shields.io/npm/dw/heroku-pgcli.svg)](https://npmjs.org/package/heroku-pgcli)
[![License](https://img.shields.io/npm/l/heroku-pgcli.svg)](https://github.com/techgaun/heroku-pgcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Development](#development)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ heroku plugins:install heroku-pgcli # install

$ heroku pgcli -a core-stage # by default, uses DATABASE_URL
Running pgcli on DATABASE_URL...
Server: PostgreSQL 10.6
Version: 2.0.2
Chat: https://gitter.im/dbcli/pgcli
Mail: https://groups.google.com/forum/#!forum/pgcli
Home: http://pgcli.com
random>

$ heroku pgcli POSTGRESQL_ORANGE_URL -a core-stage # custom name for postgresql
Running pgcli on DATABASE_URL...
Server: PostgreSQL 10.6
Version: 2.0.2
Chat: https://gitter.im/dbcli/pgcli
Mail: https://groups.google.com/forum/#!forum/pgcli
Home: http://pgcli.com
random>
...
```
<!-- usagestop -->

# Development

- `heroku plugins:link`
- `heroku pgcli`
- `HEROKU_DEBUG=1` to print debugging statements
- `HEROKU_DEBUG_HEADERS=1` to also get the headers
- `DEBUG=*`` to get lots of internal debug output
