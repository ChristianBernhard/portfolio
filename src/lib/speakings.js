import glob from 'fast-glob'

async function importSpeaking(speakingFilename) {
  let { speakingEvent } = await import(`../app/speaking/${speakingFilename}`)

  return {
    slug: speakingFilename.replace(/(\/page)?\.mdx$/, ''),
    ...speakingEvent,
  }
}

export async function getAllSpeakings() {
  let speakingFilenames = await glob('*/page.mdx', {
    cwd: './src/app/speaking',
  })

  let speakings = await Promise.all(speakingFilenames.map(importSpeaking))

  return speakings.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
