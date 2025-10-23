import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://scuanliecyepuhic.github.io/SegFault/',  //你网站的URL
  favicon: "/SegFault/images/favicon.png",	// 网页图标链接
  lang: 'zh-CN',  //默认语言
  title: "ᖰ⌯'▾'⌯ᖳ~~♥",  //网站标题
  subtitle: 'Try to be better.',//网站副标题
  author: {
    name: '咲之花',//博主名称
    avatar: "/SegFault/images/avatar.png",	//头像链接
    status: {
      emoji: '😉'	// 头像旁边的emoji
    },
  },
  description: '梦想成为pwn糕手的半二次元人 .',  //简介
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/ScuanliecyEpuhic',  //GitHub地址
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/22189728',  //BiliBili地址
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
  ],

  search: {
    enable: true,
  },
    comment: {
      enable: true
    },
    statistics: {
      enable: true,
      readTime: {
        /**
         * 阅读速度
         */
        speed: {
          cn: 300,
          en: 200,
        },
      },
    },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: '', //这里填写你的支付宝收款码图片链接
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信支付',
        url: '',//这里填写你的微信收款码图片链接
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})