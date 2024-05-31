import Watcher from 'watcher'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

let count = 0

setInterval(() => {
    if (count > 0) {
        execSync(
            'unocss "_src/**/*.{html,js,ts,jsx,tsx}" -o _src/uno.css --write-transformed',
            { stdio: 'inherit' }
        )
        count = 0
    }
}, 1000)

new Watcher(
    './src',
    { recursive: true },
    (event, targetPath) => {
        switch (event) {
            case 'unlink':
            case 'unlinkDir':
                fs.rm(targetPath, () => {})
                break
            default:
                copy(targetPath)
        }

        function copy (filePath) {
            const relativePath = path.relative('.', filePath)
            fs.cpSync(relativePath, `_src/${relativePath.slice(4)}`, {
                recursive: true
            })
            console.log(
                `${path.basename(targetPath)} copied to _src/${relativePath.slice(4)}`
            )
        }

        count++
    }
)
