exports = module.exports = [
    {
        active: false,
        origin: 'feed',
        name: 'gamereactor 20 siste nyheter',
        url: 'http://www.gamereactor.no/rss/rss.php?texttype=4',
        linkref: 'url',
        category: ['technology', 'games'],
        format: 'desktop',
        body: false,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
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
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'description',
                            scrape: {
                                selector: 'img',
                                attribute: 'src'
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'feed',
        name: 'spill.no',
        url: 'http://www.spill.no/feed.aspx?list=news',
        linkref: 'url',
        category: ['technology', 'games'],
        format: 'desktop',
        body: false,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
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
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'rss:image.#'
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'feed',
        name: 'gamer.no',
        url: 'http://www.gamer.no/feeds/general.xml',
        linkref: 'url',
        category: ['technology', 'games'],
        format: 'desktop',
        body: false,
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
                    fallback: 'http://static.tek.no/images/main/gamer-white.png'
                }
            ]
        }
    },
    {
        active: false,
        origin: 'feed',
        name: 'hackernews',
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
];
