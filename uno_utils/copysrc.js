import * as fs from 'fs'

fs.cpSync('src', '_src', { recursive: true })
