import {Command, flags} from '@heroku-cli/command'

export default class PGCLI extends Command {
  static description = 'Connect with Heroku posgtresql db using pgcli'

  static examples = [
    '$ heroku pg:pgcli DATABASE_URL --app <app_name>'
  ]

  static args = [
    {name: 'DATABASE_URL', optional: true, description: 'the Heroku postgres DB name to use. Default: DATABASE_URL'}
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    app: flags.string({char: 'a', env: 'HEROKU_APP', required: true, description: 'the Heroku app to use'})
  }

  async run() {
    const {args, flags} = this.parse(PGCLI)
    const name = args.name || 'DATABASE_URL'
    const {body: app} = await this.heroku.get(`/apps/${flags.app}`)

    this.log(app)
    this.log(`Running pgcli on ${name}...`)
  }
}
