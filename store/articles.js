export const articlesNames = ['aboutProductRole', 'POvsPM'];

export const Articles = {
  aboutProductRole: {
    title: 'Про роль менеджера продукту',
    fileId: 'BQACAgIAAxkBAAIBOGPn1s9fK5V0B4jLhjjbHCczsrFfAAKfJgAC2TiZSu3TgsA6wWEeLgQ'
  },

  POvsPM: {
    title: 'Продакт vs. Проджект',
    fileId: 'BQACAgIAAxkBAAIBOGPn1s9fK5V0B4jLhjjbHCczsrFfAAKfJgAC2TiZSu3TgsA6wWEeLgQ'
  }
}

export const getArticles = (titles) => titles.map((key) => Articles[key]);

export const getArticle = (key) => Articles[key];

export const getArticlePageKey = (key) => `article-${key}`

export const guildJoiningArticles = ['aboutProductRole', 'POvsPM'];