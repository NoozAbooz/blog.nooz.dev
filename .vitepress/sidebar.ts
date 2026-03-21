import { scanDir } from './util.ts'

export default {
	'/projects/': scanDir('projects'),
	'/guides/': scanDir('guides'),
	'/study/': scanDir('study'),
	'/blog/': scanDir('blog'),
}