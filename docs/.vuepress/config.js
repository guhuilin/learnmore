const utils = require('./utils')

module.exports = {
  title: 'Learn - More',
  description: '个人站',
  // base: '/awesome-bookmarks/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    '/': {
      label: '简体中文',
      repo: 'guhuilin/study',
      nav: [
        {
          text: '首页',
          link: '/'
        },
        {
          text: '学习链接',
          link: '/repository/'
        },
        {
          text: '笔记整理',
          link: '/website/'
        },
        {
          text: '文章',
          link: '/article/'
        },
        {
          text: 'preview',
          link: '/interview/'
        },
        {
          text: '杂记',
          link: '/blog/'
        }
      ]
    },
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'guhuilin/learnmore',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1',
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
