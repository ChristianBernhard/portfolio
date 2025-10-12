// External articles and media mentions about Christian Bernhard

export const externalArticles = [
  {
    id: 'unser-wuermtal-krailling',
    title: 'KI und ChatGPT – Vortrag in Krailling',
    url: 'https://www.unser-wuermtal.de/nachrichten/artikel/ki-und-chatgpt-vortrag-in-krailling.html',
    source: 'Unser Würmtal',
    date: '2024-07-03',
    type: 'news'
  },
  {
    id: 'merkur-chatgpt-gemeinden',
    title: 'Künstliche Intelligenz am Limit: ChatGPT erfindet neue Gemeinden',
    url: 'https://www.merkur.de/lokales/wolfratshausen/wolfratshausen-ort29708/kuenstliche-intelligenz-am-limit-chatgpt-erfindet-neue-gemeinden-93917670.html',
    source: 'Münchner Merkur',
    date: '2025-09-05',
    type: 'news'
  },
  {
    id: 'hm-applying-science',
    title: 'HM Applying Science Magazin: Beitrag im Hochschulmagazin der Hochschule München (Seite 42)',
    url: 'https://mediapool.hm.edu/media/dachmarke/dm_lokal/presse/applying_science/HM_Applying_Science_Magazin_1-2023.pdf#page=42',
    source: 'HM Applying Science',
    date: '2023-01-01',
    type: 'interview'
  },
  {
    id: 'instagram-hm-talk',
    title: 'HM Applying Science – Vortrag zu KI & ChatGPT',
    url: 'https://www.instagram.com/p/CLHBnrthdzQ/?img_index=1',
    source: 'Instagram',
    date: '2021-02-15',
    type: 'social'
  }
]

export function getAllExternalArticles() {
  return externalArticles.sort((a, b) => new Date(b.date) - new Date(a.date))
}

