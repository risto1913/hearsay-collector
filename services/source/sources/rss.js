exports = module.exports = [
    {
        active: true,
        origin: 'feed',
        name: 'Hacker News',
        url: 'https://news.ycombinator.com/rss',
        linkref: 'url',
        category: ['technology', 'hackernews'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'TheAtlantic - Technology',
        url: 'http://feeds.feedburner.com/atlanticscienceandtechnology',
        linkref: 'url',
        category: ['technology', 'theatlantic'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://cdn.theatlantic.com/static/front/images/logo/213x70.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'The Muse - Career',
        url: 'https://www.themuse.com/feeds/rss',
        linkref: 'url',
        category: ['career', 'themuse'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'https://tm-prod.global.ssl.fastly.net/images/the-muse.png?v=03e99f6'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Wired.com',
        url: 'http://feeds.wired.com/wired/index',
        linkref: 'url',
        category: ['technology', 'wired'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://www.wired.com/wp-content/themes/wired/assets/images/post_wired_logo_150x60.gif'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Inc.com',
        url: 'http://feeds.inc.com/home/updates',
        linkref: 'url',
        category: ['career', 'inc'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://images.inc.com/topnav/inc-logo.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Ars Technica',
        url: 'http://feeds.arstechnica.com/arstechnica/technology-lab',
        linkref: 'url',
        category: ['technology', 'arstechnica'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://cdn.arstechnica.net/wp-content/themes/arstechnica/assets/images/logo.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Entrepreneur.com',
        url: 'http://feeds.feedburner.com/entrepreneur/latest',
        linkref: 'url',
        category: ['career', 'entrepreneur'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://www.entrepreneur.com/assets/img/ent-logo-high.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Coding Horror (Jeff Atwood)',
        url: 'http://feeds.feedburner.com/codinghorror',
        linkref: 'url',
        category: ['blogs', 'codinghorror'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://blog.codinghorror.com/assets/images/codinghorror-app-icon.png?v=0d085690dd'
                }
            ]
        }
    },
    {
        active: false,
        origin: 'feed',
        name: 'Chris Dixon',
        url: 'http://cdixon.org/feed/',
        linkref: 'url',
        category: ['blogs', 'chrisdixon'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'TechCrunch',
        url: 'http://feeds.feedburner.com/TechCrunch/',
        linkref: 'url',
        category: ['technology', 'techcrunch'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/logo.svg'
                }
            ]
        }
    },
        {
            active: true,
            origin: 'feed',
            name: 'www.nrk.no',
            url: 'http://www.nrk.no/liste.rss?contentId=1.1145348',
            linkref: 'url',
            category: ['Vålerenga', 'VIF', 'fotball'],
            format: 'desktop',
            body: true,
            template: {
                elements: [
                    {
                        name: 'guid',
                        type: 'url',
                        required: true,
                        items: [
                            {
                                selector: 'link'
                            }
                        ]
                    },
                    {
                        name: 'title',
                        required: true,
                        items: [
                            {
                                selector: 'title'
                            }
                        ]
                    },
                    {
                        name: 'url',
                        type: 'url',
                        required: true,
                        items: [
                            {
                                selector: 'link'
                            }
                        ]
                    },
                    {
                        name: 'description',
                        items: [
                            {
                                selector: 'description',
								decode: true
                            }
                        ]
                    },
                    {
                        name: 'image',
                        type: 'url',
                        items: [
                            {
                                selector: 'enclosures[0].url'
                            }
                        ]
                    }
                ]
            }
        },
        {
            active: true,
            origin: 'feed',
            name: 'www.vg.no',
            url: 'http://www.vg.no/rss/create.php?categories=&keywords=97&limit=40',
            linkref: 'url',
            category: ['Vålerenga', 'VIF', 'fotball'],
            format: 'desktop',
            body: true,
            template: {
                elements: [
                    {
                        name: 'guid',
                        type: 'url',
                        required: true,
                        items: [
                            {
                                selector: 'guid'
                            },
                            {
                                selector: 'link'
                            }
                        ]
                    },
                    {
                        name: 'title',
                        required: true,
                        items: [
                            {
                                selector: 'title'
                            }
                        ]
                    },
                    {
                        name: 'url',
                        type: 'url',
                        required: true,
                        items: [
                            {
                                selector: 'link'
                            }
                        ]
                    },
                    {
                        name: 'description',
                        items: [
                            {
                                selector: 'description',
								decode: true
                            }
                        ]
                    },
                    {
                        name: 'image',
                        type: 'url',
                        items: [
                            {
                                selector: 'enclosures[0].url'
                            }
                        ]
                    }
                ]
            }
        }
    }
];
