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



=======
    {
        active: false,
        origin: 'site',
        name: 'Wired Science',
        url: 'http://www.wired.com/science',
        linkref: 'url',
        category: ['technology', 'science'],
        format: 'desktop',
        body: true,
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
                                    selector: 'div.excertp p',
                                    delimiter: '\n'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.wired.com/wp-content/themes/wired/assets/images/post_wired_logo_150x60.gif',
                            items: [
                                {
                                    selector: 'div.thumbnail a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];
