exports = module.exports = [


{
    active: true,
    origin: 'site',
    name: 'www.dittoslo.no',
    url: 'http://www.dittoslo.no/sport/vålerenga-fotball',
    linkref: 'url',
    category: ['Vålerenga', 'VIF'],
    format: 'desktop',
    body: false,
    template: {
        containers: [
            {
                selector: 'article',
                elements: [
                    {
                        name: 'guid',
                        type: 'url',
                        items: [
                            {
                                selector: '.np-image a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'url',
                        type: 'url',
                        items: [
                            {
                                selector: '.np-image a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'title',
                        required: true,
                        items: [
                            {
                                selector: 'h2 a'
                            }
                        ]
                    },
                    {
                        name: 'description',
                        items: [
                            {
                                selector: 'h3',
                                delimiter: '\n'
                            }
                        ]
                    },
                    {
                        name: 'image',
                        type: 'url',
                        fallback: null,
                        items: [
                            {
                                selector: '.np-image a img',
                                attribute: 'src'
                            }
                        ]
                    }
                ]
            }
        ]
    }
},
{
    active: true,
    origin: 'site',
    name: 'www.vif-fotball.no',
    url: 'http://www.vif-fotball.no/news',
    linkref: 'url',
    category: ['Vålerenga', 'VIF', 'fotball'],
    format: 'desktop',
    body: false,
    template: {
        containers: [
            {
                selector: '.article-item',
                elements: [
                    {
                        name: 'guid',
                        type: 'url',
                        items: [
                            {
                                selector: 'h3 a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'url',
                        type: 'url',
                        items: [
                            {
                                selector: 'h3 a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'title',
                        required: true,
                        items: [
                            {
                                selector: 'h3 a'
                            }
                        ]
                    },
                    {
                        name: 'description',
                        items: [
                            {
                                selector: 'p',
                                delimiter: '\n'
                            }
                        ]
                    },
                    {
                        name: 'image',
                        type: 'url',
                        fallback: null,
                        items: [
                            {
                                selector: '.article-image a img',
                                attribute: 'src'
                            }
                        ]
                    }
                ]
            }
        ]
    }
},


{
    active: true,
    origin: 'site',
    name: 'www.aftenposten.no',
    url: 'http://www.aftenposten.no/100Sport/fotball/team/category/sport%3Afootball%3Ateam%3AV%C3%A5lerenga_Fotball?teamId=118',
    linkref: 'url',
    category: ['Vålerenga', 'VIF'],
    format: 'desktop',
    body: false,
    template: {
        containers: [
            {
                selector: 'article',
                elements: [
                    {
                        name: 'guid',
                        type: 'url',
                        items: [
                            {
                                selector: 'h2 a ',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'url',
                        type: 'url',
                        items: [
                            {
                                selector: 'h2 a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'title',
                        required: true,
                        items: [
                            {
                                selector: 'h2 a'
                            }
                        ]
                    },
                    {
                        name: 'description',
                        items: [
                            {
                                selector: 'p.teaserText',
                                delimiter: '\n'
                            }
                        ]
                    },
                    {
                        name: 'image',
                        type: 'url',
                        fallback: null,
                        items: [
                            {
                                selector: 'img',
                                attribute: 'src'
                            }
                        ]
                    }
                ]
            }
        ]
    }
},



{
    active: true,
    origin: 'site',
    name: 'grydis.no',
    url: 'http://www.grydis.no',
    linkref: 'url',
    category: ['Vålerenga', 'VIF'],
    format: 'desktop',
    body: false,
    template: {
        containers: [
            {
                selector: 'div .post',
                elements: [
                    {
                        name: 'guid',
                        type: 'url',
                        items: [
                            {
                                selector: 'h3 a ',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'url',
                        type: 'url',
                        items: [
                            {
                                selector: 'h3 a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'title',
                        required: true,
                        items: [
                            {
                                selector: 'h2 a'
                            }
                        ]
                    },
                    {
                        name: 'description',
                        items: [
                            {
                                selector: '.post_entry p',
                                delimiter: '\n'
                            }
                        ]
                    },
                    {
                        name: 'image',
                        type: 'url',
                        fallback: null,
                        items: [
                            {
                                selector: '.thumb a img',
                                attribute: 'src'
                            }
                        ]
                    }
                ]
            }
        ]
    }
},
{
    active: true,
    origin: 'site',
    name: 'vpn.no',
    url: 'http://www.vif-hockey.no/',
    linkref: 'url',
    category: ['Vålerenga', 'VIF', 'hockey'],
    format: 'desktop',
    body: false,
    template: {
        containers: [
            {
                selector: 'div .home-story-cat',
                elements: [
                    {
                        name: 'guid',
                        type: 'url',
                        items: [
                            {
                                selector: 'div.img-contain a ',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'url',
                        type: 'url',
                        items: [
                            {
                                selector: 'div.img-contain a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'title',
                        required: true,
                        items: [
                            {
                                selector: '.story-text h2 a'
                            }
                        ]
                    },
                    {
                        name: 'description',
                        items: [
                            {
                                selector: '.story-text p',
                                delimiter: '\n'
                            }
                        ]
                    },
                    {
                        name: 'image',
                        type: 'url',
                        fallback: null,
                        items: [
                            {
                                selector: '.img-contain a img',
                                attribute: 'src'
                            }
                        ]
                    }
                ]
            }
        ]
    }
},



{
    active: true,
    origin: 'site',
    name: 'vpn.no',
    url: 'http://www.vpn.no',
    linkref: 'url',
    category: ['Vålerenga', 'VIF'],
    format: 'desktop',
    body: false,
    template: {
        containers: [
            {
                selector: 'article',
                elements: [
                    {
                        name: 'guid',
                        type: 'url',
                        items: [
                            {
                                selector: 'h2 a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'url',
                        type: 'url',
                        items: [
                            {
                                selector: 'h2 a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'title',
                        required: true,
                        items: [
                            {
                                selector: 'h2 a'
                            }
                        ]
                    },
                    {
                        name: 'description',
                        items: [
                            {
                                selector: '.entry-content p',
                                delimiter: '\n'
                            }
                        ]
                    },
                    {
                        name: 'image',
                        type: 'url',
                        fallback: null,
                        items: [
                            {
                                selector: '.entry-details a img',
                                attribute: 'src'
                            }
                        ]
                    }
                ]
            }
        ]
    }
},
{
    active: true,
    origin: 'site',
    name: 'vpn.no',
    url: 'http://www.klanen.no',
    linkref: 'url',
    category: ['Vålerenga', 'VIF'],
    format: 'desktop',
    body: false,
    template: {
        containers: [
            {
                selector: 'article',
                elements: [
                    {
                        name: 'guid',
                        type: 'url',
                        items: [
                            {
                                selector: 'h3 a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'url',
                        type: 'url',
                        items: [
                            {
                                selector: 'h3 a',
                                attribute: 'href'
                            },
                            {
                                selector: 'h2 a',
                                attribute: 'href'
                            }
                        ]
                    },
                    {
                        name: 'title',
                        required: true,
                        items: [
                            {
                                selector: 'h3 a'
                            }
                        ]
                    },
                    {
                        name: 'description',
                        items: [
                            {
                                selector: '.entry p',
                                delimiter: '\n'
                            }
                        ]
                    },
                    {
                        name: 'image',
                        type: 'url',
                        fallback: null,
                        items: [
                            {
                                selector: '.featured-img a img',
                                attribute: 'src'
                            }
                        ]
                    }
                ]
            }
        ]
    }
}


/*



    {
        active: true,
        origin: 'site',
        name: 'Gamer.no',
        url: 'http://www.gamer.no',
        linkref: 'url',
        category: ['gaming', 'technology'],
        format: 'desktop',
        body: false,
        template: {
            containers: [
                {
                    selector: 'article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'p',
                                    delimiter: '\n'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://img.gfx.no/1428/1428622/gamer_logo_169.300x169mc.jpg',
                            items: [
                                {
                                    selector: 'figure a img',
                                    attribute: 'src'
                                },
                                {
                                    selector: 'figure a div.delay-image-load',
                                    attribute: 'data-src-normal'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'IGN Norge',
        url: 'http://no.ign.com',
        linkref: 'url',
        category: ['gaming', 'technology'],
        format: 'desktop',
        body: false,
        template: {
            containers: [
                {
                    selector: 'div.headlines',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://someimageurl.com/image.png',
                            items: [
                                {
                                    selector: 'div.img-thumb a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'Pressfire.no',
        url: 'http://www.pressfire.no/',
        linkref: 'url',
        category: ['gaming', 'technology'],
        format: 'desktop',
        body: false,
        template: {
            containers: [
                {
                    selector: '#top-article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.top-article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.top-article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.top-article-meta h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.pressfire.no/gfx/pressfire-logo.png',
                            items: [
                                {
                                    selector: 'div.image-article-meta a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                },
                {
                    selector: 'div.large-article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.large-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.large-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.large-meta h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.pressfire.no/gfx/pressfire-logo.png',
                            items: [
                                {
                                    selector: 'div.image-article-meta a img',
                                    attribute: 'src'
                                },
                                {
                                    selector: 'div.article-image-container a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                },
                {
                    selector: 'div.small-article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.article-meta h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.pressfire.no/gfx/pressfire-logo.png',
                            items: [
                                {
                                    selector: 'div.article-image-container a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'Spillfreak.no',
        url: 'http://www.spillfreak.no',
        linkref: 'url',
        category: ['gaming', 'technology'],
        format: 'desktop',
        body: false,
        template: {
            containers: [
                {
                    selector: 'div.blog-item',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.archive-text h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.archive-text h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.archive-text h2 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'div.archive-text p',
                                    delimiter: ' ... Read More'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://someimageurl.comm/1.png',
                            items: [
                                {
                                    selector: 'div.item-image a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'Tv2 Nettavisen',
        url: 'http://www.nettavisen.no/',
        linkref: 'url',
        category: ['nyheter', 'innenriks'],
        format: 'desktop',
        body: false,
        template: {
            containers: [
                {
                    selector: '.article-content',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a'
                                },
                                {
                                    selector: 'h4 a'
                                },
                                {
                                    selector: 'h3 a'
                                },
                                {
                                    selector: 'h2 a'
                                },
                                {
                                    selector: 'h1 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'alt'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://someimageurl.comm/1.png',
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'sol.no',
        url: 'http://www.sol.no/',
        linkref: 'url',
        category: ['nyheter', 'innenriks'],
        format: 'desktop',
        body: false,
        template: {
            containers: [
                {
                    selector: '.article-content',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },{
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },{
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a'
                                },
                                {
                                    selector: 'h4 a'
                                },
                                {
                                    selector: 'h3 a'
                                },
                                {
                                    selector: 'h2 a'
                                },
                                {
                                    selector: 'h1 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'alt'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: null,
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'data-echo'
                                },
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'data-src'
                                },
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
    */
];