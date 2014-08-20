exports = module.exports = [


{
    active: true,
    origin: 'feed',
    name: 'www.klanen.no',
    url: 'http://www.klanen.no/blog/tag/tippeligaen/feed/',
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
    name: 'www.klanen.no',
    url: 'http://www.klanen.no/blog/tag/valerenga-fotball/feed/',
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
    name: 'www.klanen.no',
    url: 'http://www.klanen.no/blog/tag/vif-hockey/feed/',
    linkref: 'url',
    category: ['Vålerenga', 'VIF', 'hockey'],
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
            name: 'www.tv2.no',
            url: 'http://sp.enga.cc/all/tv2.php',
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
