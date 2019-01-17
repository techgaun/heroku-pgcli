import {Command, flags} from '@oclif/command'

export default class PGCLI extends Command {
  static description = 'Connect with Heroku posgtresql db using pgcli'

  static examples = [
    '$ heroku pg:pgcli DATABASE_URL --app <app_name>'
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    app: flags.string({char: 'a', env: 'HEROKU_APP', required: true, description: 'the Heroku app to use'}),
    name: flags.string({char: 'n', required: false, description: 'the Heroku postgres DB name to use. Default: DATABASE_URL'})
  }

  async run() {
    const {args, flags} = this.parse(PGCLI)
    const name = flags.name || 'DATABASE_URL'

    this.log(`name: ${name}`)
  }
}
