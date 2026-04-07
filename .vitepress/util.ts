import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const { resolve } = path
const baseDir = path.dirname(fileURLToPath(import.meta.url))

const getTitleFromFrontmatter = filePath => {
    const content = fs.readFileSync(filePath, 'utf8')
    const frontmatterMatch = content.match(/^---\s*[\r\n]+([\s\S]*?)\n---\s*(?:[\r\n]|$)/)

    if (!frontmatterMatch) {
        return path.parse(filePath).name
    }

    const titleMatch = frontmatterMatch[1].match(/^title:\s*(.+)$/m)

    if (!titleMatch) {
        return path.parse(filePath).name
    }

    return titleMatch[1].trim().replace(/^['"]|['"]$/g, '')
}

export const scanDir = pathName => {
    const dirPath = resolve(baseDir, `../${pathName}`)
    return getMsg(dirPath, pathName)
}

export const getMsg = (dirPath, basePath) => {
    let res = fs.readdirSync(dirPath).filter(item => !(String(item) === '.DS_Store'))
    if (res) {
        let arr = res.map(item => {
            const fullPath = resolve(dirPath, item)
            const isDirectory = fs.statSync(fullPath).isDirectory()

            if (String(item).endsWith('.md')) {
                const fileName = path.parse(item).name
                if (fileName.toLowerCase() === 'index') {
                    return null
                }

                const text = getTitleFromFrontmatter(fullPath)

                // Create the correct link path directly
                return {
                    text,
                    link: `/${basePath}/${fileName}`
                }
            } else if (isDirectory && item !== 'images' && !item.startsWith('.')) {
                // Only process directories that are not named "images"
                const subPathName = basePath ? `${basePath}/${item}` : item
                const subItems = getMsg(fullPath, subPathName)
                
                // Check if there's an Index.md file in the directory
                const hasIndex = fs.existsSync(resolve(fullPath, 'index.md')) || fs.existsSync(resolve(fullPath, 'Index.md'))
                
                return {
                    text: item,
                    link: hasIndex ? `/${subPathName}/Index` : undefined,
                    items: subItems,
                    collapsible: true,
                }
            } else {
                // Skip non-markdown files that aren't directories, or "images" directories
                return null
            }
        }).filter(Boolean) // Remove null items from the array

        return arr
    } else {
        console.warn('No articles found')
        return []
    }
}