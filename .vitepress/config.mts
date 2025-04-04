import { defineConfig } from 'vitepress'

export default defineConfig({

  title: "NavMark",

  cleanUrls:true,
 
  themeConfig: {

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fcbyk/navmark' },
    ],

    darkModeSwitchLabel:"夜间模式",
    returnToTopLabel:"返回顶部",
    outlineTitle:"分类",

  }
})
