import {Command, flags, vars} from '@heroku-cli/command'
import * as cp from 'child_process'

export default class PGCLI extends Command {
  static description = 'Connect with Heroku posgtresql db using pgcli'

  static examples = [
    '$ heroku pg:pgcli DATABASE_URL --app <app_name>'
  ]

  static args = [
    {name: 'name', optional: true, description: 'the Heroku postgres DB name to use. Default: DATABASE_URL'}
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    app: flags.string({char: 'a', env: 'HEROKU_APP', required: true, description: 'the Heroku app to use'})
  }

  spawn(args: string[]) {
    return new Promise((resolve, reject) => {
      let s = cp.spawn('pgcli', args, {stdio: [0, 1, 2]})
      s.on('error', (err: Error & {code?: string}) => {
        if (err.code === 'ENOENT') {
          this.error('pgcli must be installed.')
        } else reject(err)
      })

      s.on('close', resolve)
    })
  }

  async run() {
    const {args, flags} = this.parse(PGCLI)
    const name = args.name || 'DATABASE_URL'
    const {body: configs} = await this.heroku.get(`/apps/${flags.app}/config-vars`)
    const value = configs[name]

    if (value == null) {
      this.error(`Config var for ${name} not found`)
    }

    this.log(`Running pgcli on ${name}...`)
    await this.spawn([value])
  }
}
