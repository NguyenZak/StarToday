var googletag = window.googletag || {},
    pbjs = window.pbjs || {},
    Criteo = window.Criteo || {};
googletag.cmd = googletag.cmd || [];
pbjs.que = pbjs.que || [];
Criteo.events = Criteo.events || [];
var googTagCode = window.googTagCode || { display: [], config: null, tag: {} };
try {
    var prebidConfig = {
        "Vnexpress/Desktop/Large1": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973483 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x600" },
                },
            },
        },
        "Vnexpress/Desktop/Large2": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973483 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "Vnexpress/Desktop/Large3": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973483 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x600" },
                },
            },
        },
        "Vnexpress/Desktop/Large4": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973483 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x600" },
                },
            },
        },
        "Vnexpress/Desktop/Large5": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973483 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x600" },
                },
            },
        },
        "Vnexpress/Mobile/Inread": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    vidazoo: {
                        cId: "604f2b5742dff1001798c713",
                        pId: "59ac17c192832d0011283fe3",
                    },
                },
            },
        },
        "Vnexpress/Mobile/Large1": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973499 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "Vnexpress/Mobile/Large2": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973499 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "Vnexpress/Mobile/Large3": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973499 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "Vnexpress/Mobile/Large4": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973499 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "Vnexpress/Mobile/Large5": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973499 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "Vnexpress/Desktop/Breakpage3": {
            prebid: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973483 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn728x90" },
                },
            },
        },
        "OV.iOne/Mobile/Inread": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                    [320, 480],
                    [320, 640],
                ],
                bidder: {
                    adpone: { placementId: 120118123148324 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973649 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x600" },
                    vidazoo: {
                        cId: "604f2b5742dff1001798c713",
                        pId: "59ac17c192832d0011283fe3",
                    },
                },
            },
        },
        "OV.iOne/Mobile/Article": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118123148324 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973649 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x250" },
                },
            },
        },
        "OV.iOne/Mobile/Large1": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118123148324 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973649 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x250" },
                },
            },
        },
        "OV.iOne/Mobile/Large2": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118123148324 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973649 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x250" },
                },
            },
        },
        "OV.Ngoisao/Mobile/Masthead": {
            prebid: {
                sizes: [
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [320, 200],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973628 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "OV.Ngoisao/Mobile/Sticky": {
            prebid: {
                sizes: [
                    [320, 50]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973642 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "OV.Ngoisao/Mobile/Inread": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                    [320, 480],
                    [320, 640],
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973637 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x600" },
                    vidazoo: {
                        cId: "604f2b5742dff1001798c713",
                        pId: "59ac17c192832d0011283fe3",
                    },
                },
            },
        },
        "OV.Ngoisao/Mobile/Article": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973635 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x600" },
                },
            },
        },
        "OV.Ngoisao/Mobile/Bottom": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973631 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "OV.Ngoisao/Mobile/Large1": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973624 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "OV.Ngoisao/Mobile/Large2": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973624 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "OV.Ngoisao/Mobile/Large3": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973624 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Masthead": {
            prebid: {
                sizes: [
                    [336, 280],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [320, 200],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973569 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "OV.Vnexpress/Mobile/Article": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973579 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Desktop/Masthead": {
            prebid: {
                sizes: [
                    [1920, 270],
                    [970, 250],
                ],
                bidder: {
                    adpone: { placementId: 1201181228390 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973540 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn970x250" },
                },
            },
        },
        "OV.Vnexpress/Desktop/Floatingleft": {
            prebid: {
                sizes: [
                    [160, 600],
                    [120, 600],
                    [120, 240],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973541 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "OV.Vnexpress/Desktop/Sticky": {
            prebid: {
                sizes: [
                    [970, 250],
                    [970, 90],
                    [728, 90],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973544 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn970x250" },
                },
            },
        },
        "OV.Vnexpress/Desktop/Large1": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 540],
                    [300, 500],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973546 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x600" },
                },
            },
        },
        "OV.Vnexpress/Desktop/Breakpage1": {
            prebid: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973547 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn970x250" },
                },
            },
        },
        "OV.Vnexpress/Desktop/Breakpage2": {
            prebid: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973547 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn970x250" },
                },
            },
        },
        "OV.Vnexpress/Desktop/Large3": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 540],
                    [300, 500],
                    [300, 300],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973546 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Desktop/Breakpage3": {
            prebid: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973547 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn970x250" },
                },
            },
        },
        "OV.Vnexpress/Desktop/Large4": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 540],
                    [300, 500],
                    [300, 300],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973546 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Desktop/Breakpage4": {
            prebid: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973547 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn970x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large1": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large2": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large3": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large4": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large5": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large6": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large7": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large8": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large9": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large10": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Large11": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Bottom": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Infeed1": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Mobile/Infeed2": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973500 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "Oversea.e.vnexpress.net/Dekstop/Masthead": {
            prebid: {
                sizes: [
                    [1920, 270],
                    [970, 250],
                ],
                bidder: {
                    adpone: { placementId: 1201181228390 },
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973691 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "Oversea.e.vnexpress.net/Dekstop/Halfpage": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973692 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "Oversea.e.vnexpress.net/Dekstop/Article": {
            prebid: {
                sizes: [
                    [480, 270]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973695 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "Oversea.e.vnexpress.net/Dekstop/Medium": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973686 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "Oversea.e.vnexpress.net/Dekstop/Medium2": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973686 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "OV.iOne/Desktop/Masthead": {
            prebid: {
                sizes: [
                    [1920, 270],
                    [970, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118123023242 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973644 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet970x250" },
                },
            },
        },
        "OV.iOne/Desktop/Large1": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118123148324 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973645 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x600" },
                },
            },
        },
        "OV.iOne/Desktop/Large2": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118123148324 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973645 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x250" },
                },
            },
        },
        "OV.iOne/Desktop/Large3": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118123148324 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973645 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x250" },
                },
            },
        },
        "OV.Ngoisao/Mobile/Breakpage": {
            prebid: {
                sizes: [
                    [970, 250],
                    [970, 90],
                    [728, 90],
                ],
                bidder: {
                    adpone: { placementId: 120118123410991 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973598 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet970x250" },
                },
            },
        },
        "OV.Ngoisao/Desktop/Verticle1": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973599 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "OV.Ngoisao/Desktop/Large1": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973600 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "OV.Ngoisao/Desktop/Large2": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973599 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "OV.Ngoisao/Desktop/Large3": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973599 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "OV.Ngoisao/Desktop/Large4": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973599 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "OV.Ngoisao/Desktop/Bottom": {
            prebid: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118123410991 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973598 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet970x250" },
                },
            },
        },
        "OV.Ngoisao/Desktop/Breakpage1": {
            prebid: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                bidder: {
                    adpone: { placementId: 1201181228390 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973540 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet970x250" },
                },
            },
        },
        "OV.Vnexpress/Desktop/Large2": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 540],
                    [300, 500],
                    [300, 300],
                    [300, 250],
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973543 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "OV.Vnexpress/Desktop/FloatingLeft": {
            prebid: {
                sizes: [
                    [120, 240],
                    [120, 600],
                    [160, 600],
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973534 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "iOne/Mobile/Masthead": {
            prebid: {
                sizes: [
                    [300, 50],
                    [320, 50],
                    [300, 100],
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973671 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "iOne/Mobile/Article": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973677 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x250" },
                },
            },
        },
        "iOne/Mobile/Inread": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                    [320, 480],
                    [320, 640],
                ],
                bidder: {
                    adpone: { placementId: 120118123148324 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973675 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x600" },
                    vidazoo: {
                        cId: "604f2b5742dff1001798c713",
                        pId: "59ac17c192832d0011283fe3",
                    },
                },
            },
        },
        "kinhtedem/Mobile/Top": {
            prebid: {
                sizes: [
                    [728, 90]
                ],
                bidder: {
                    adpone: { placementId: 1201181228390 },
                    appnexus: { placementId: 16973540 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "kinhtedem/Mobile/Footerbanner": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    appnexus: { placementId: 16973541 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "kinhtedem/Mobile/inread": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                    [320, 480],
                    [320, 640],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    appnexus: { placementId: 16973544 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x600" },
                },
            },
        },
        "kinhtedem/Mobile/Article": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    appnexus: { placementId: 16973545 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "kinhtedem/Mobile/Large1": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    appnexus: { placementId: 16973536 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "kinhtedem/Mobile/Large2": {
            prebid: {
                sizes: [
                    [120, 240],
                    [120, 600],
                ],
                bidder: {
                    appnexus: { placementId: 16973534 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1259, keyId: "vnexpressvn300x250" },
                },
            },
        },
        "Ngoisao/Mobile/Masthead": {
            prebid: {
                sizes: [
                    [414, 207],
                    [375, 187],
                    [360, 180],
                    [320, 160],
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973628 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "Ngoisao/Mobile/Article": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973635 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "Ngoisao/Mobile/Large1": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973636 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "Ngoisao/Mobile/Bottom": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973631 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x250" },
                },
            },
        },
        "Ngoisao/Mobile/Inread": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                    [320, 480],
                    [320, 640],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973637 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x600" },
                    vidazoo: {
                        cId: "604f2b5742dff1001798c713",
                        pId: "59ac17c192832d0011283fe3",
                    },
                },
            },
        },
        "e.vnexpress.net/Display/Desktop/detail.masthead.e.vnexpress.net": {
            prebid: {
                sizes: [
                    [970, 90],
                    [728, 90],
                ],
                bidder: {
                    adpone: { placementId: 1201181228390 },
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973691 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "e.vnexpress.net/Display/Desktop/detail.article.e.vnexpress.net": {
            prebid: {
                sizes: [
                    [640, 480],
                    [480, 270],
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973695 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "e.vnexpress.net/Display/Desktop/detail.halfpage1.e.vnexpress.net": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973692 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "e.vnexpress.net/Display/Desktop/folder.masthead.e.vnexpress.net": {
            prebid: {
                sizes: [
                    [970, 90],
                    [728, 90],
                ],
                bidder: {
                    adpone: { placementId: 1201181228390 },
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973688 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "e.vnexpress.net/Display/Desktop/folder.halfpage.e.vnexpress.net": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973689 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "e.vnexpress.net/Display/Desktop/folder.halfpage2.e.vnexpress.net": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118122658647 },
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973690 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "e.vnexpress.net/Display/Desktop/home.masthead.e.vnexpress.net": {
            prebid: {
                sizes: [
                    [970, 90],
                    [728, 90],
                ],
                bidder: {
                    adpone: { placementId: 1201181228390 },
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973685 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "e.vnexpress.net/Display/Desktop/home.medium.e.vnexpress.net": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973686 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "e.vnexpress.net/Display/Desktop/home.medium2.e.vnexpress.net": {
            prebid: {
                sizes: [
                    [300, 250]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "e_vnexpress_web" },
                    appnexus: { placementId: 16973687 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "iOne/Desktop/Masthead": {
            prebid: {
                sizes: [
                    [970, 250],
                    [970, 90],
                    [728, 90],
                    [1920, 270],
                ],
                bidder: {
                    adpone: { placementId: 120118123023242 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973652 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet970x250" },
                },
            },
        },
        "iOne/Desktop/Large1": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118123148324 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973653 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x600" },
                },
            },
        },
        "iOne/Desktop/Large2": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118123148324 },
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973653 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1260, keyId: "ionenet300x250" },
                },
            },
        },
        "iOne/Desktop/InArticle": {
            prebid: {
                sizes: [
                    [480, 270]
                ],
                bidder: {
                    pubmatic: { publisherId: "158804", adSlot: "ione_vnexpress_web" },
                    appnexus: { placementId: 16973656 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183413", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
        "Ngoisao/Desktop/Masthead": {
            prebid: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                    [1920, 270],
                ],
                bidder: {
                    adpone: { placementId: 120118123410991 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973479 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet970x250" },
                },
            },
        },
        "Ngoisao/Desktop/Bottom": {
            prebid: {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118123410991 },
                    pubmatic: { publisherId: "158804", adSlot: "ngoisao_web" },
                    appnexus: { placementId: 16973479 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet970x250" },
                },
            },
        },
        "Ngoisao/Dekstop/Large1": {
            prebid: {
                sizes: [
                    [300, 250],
                    [300, 600],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x600" },
                },
            },
        },
        "Ngoisao/Dekstop/Medium1": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x600" },
                },
            },
        },
        "Ngoisao/Dekstop/Medium2": {
            prebid: {
                sizes: [
                    [300, 600],
                    [300, 250],
                ],
                bidder: {
                    adpone: { placementId: 120118123313938 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183414", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                    luponmedia: { siteId: 1261, keyId: "ngoisaonet300x600" },
                },
            },
        },
        "Vnexpress/Mobile/Masthead": {
            prebid: {
                sizes: [
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [320, 200],
                ],
                bidder: {
                    adpone: { placementId: 1201181228390 },
                    pubmatic: { publisherId: "158804", adSlot: "vnexpress_web" },
                    appnexus: { placementId: 16973479 },
                    rtbhouse: {
                        region: "prebid-asia",
                        publisherId: "dd60832fcee6fff5002w",
                    },
                    openx: { unit: "541183412", delDomain: "ureka-d.openx.net" },
                    criteo: { networkId: 3095 },
                },
            },
        },
    };
    googTagCode["tag"] = {
        sis_boxraovat: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Boxraovat/Home",
                sizes: [
                    [1, 1], "fluid"
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_large2: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Large2/Home",
                sizes: [
                    [300, 250], "fluid"
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_instreampreroll: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "video/video.preroll",
                sizes: [
                    [640, 360]
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_boxthamdo: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Boxthamdo/Home",
                sizes: [
                    [1, 1],
                    [300, 250], "fluid"
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_masthead: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Masthead/Home",
                sizes: [
                    [1, 1],
                    [970, 250],
                    [1920, 270],
                    [3, 3], "fluid"
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_large1: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Large1/Home",
                sizes: [
                    [1, 1],
                    [300, 500], "fluid"
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_footershop: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Footershop/Home",
                sizes: [
                    [1, 1], "fluid"
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_breakpage1: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Breakpage1/Home",
                sizes: ["fluid", [728, 90],
                    [970, 90],
                    [970, 250]
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_breakpage2: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Breakpage2/Home",
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_breakpage3: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Breakpage3/Home",
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_breakpage4: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Breakpage4/Home",
                sizes: [
                    [728, 90],
                    [970, 90],
                    [970, 250],
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_nativeshop: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Nativeshop/Home",
                sizes: [
                    [1, 1],
                    [300, 250],
                    [300, 600], "fluid"
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
        sis_richmedia: {
            slot: null,
            view: 0,
            type: "banner",
            gtag: {
                code: "/27973503/Vnexpress/Desktop/Richmedia/Home",
                sizes: [
                    [1, 1], "fluid"
                ],
                safe: 0,
                companion: 0,
            },
            sticky: "",
            lazy: 0,
            prebid: { sizes: [] },
        },
    };
    for (var f in googTagCode.tag) {
        var b = googTagCode.tag[f];
        if (b.gtag && b.gtag.hasOwnProperty("code")) {
            var tagCode = b.gtag.code;
            for (var pb in prebidConfig)
                if (
                    tagCode.indexOf(pb) > -1 &&
                    prebidConfig[pb].hasOwnProperty("prebid")
                ) {
                    googTagCode.tag[f].prebid = prebidConfig[pb].prebid;
                    break;
                }
        }
    }
} catch (Ex) {
    googTagCode["tag"] = {};
}
(function() {
    function y(a, c, d, h) {
        a.removeEventListener ?
            a.removeEventListener(c, d, !1) :
            a.detachEvent && a.detachEvent("on" + c, d);
    }

    function f(a, c, d) {
        a.addEventListener ?
            a.addEventListener(c, d, !1) :
            a.attachEvent && a.attachEvent("on" + c, d);
    }

    function A(a) {
        a = ("; " + document.cookie).split("; " + a + "=");
        return 2 === a.length ? a.pop().split(";").shift() : "";
    }

    function P(a, c, d) {
        var h = document.domain.split(".");
        if (1 < h.length && c)
            for (var b = "." + h[h.length - 1], f = h.length - 2; 0 <= f; f--) {
                var b = "." + h[f] + b,
                    e = a,
                    k = c,
                    g = d,
                    q = b,
                    m = void 0;
                g && ((m = new Date()), m.setTime(m.getTime() + 1e3 * g));
                document.cookie =
                    e +
                    "=" +
                    K(k) +
                    (g ? ";expires=" + m.toGMTString() : "") +
                    ";path=/" +
                    (q ? ";domain=" + q : "") +
                    "";
                if (A(a) === c) break;
            }
    }

    function da(a) {
        if (!W) return !1;
        var c;
        a = window.localStorage.getItem(a);
        try {
            c =
                "function" == typeof decodeURIComponent ?
                decodeURIComponent(a) :
                unescape(a);
        } catch (d) {
            c = a;
        }
        c = ("" + c).split(";ex=");
        return 2 == c.length ?
            0 < c[1] ?
            ((a = new Date()), (a = a.valueOf()), a <= c[1] ? c[0] : "") :
            c[0] :
            "null" != c[0] ?
            c[0] :
            "";
    }

    function la(a, c, d) {
        if (!W) return !1;
        var h = ["fosp_aid", "orig_aid", "myvne_user_id"].indexOf(a);
        d = parseInt(d);
        0 < d &&
            0 > h &&
            ((h = 0),
                (h = new Date()),
                h.setTime(h.getTime() + 1e3 * d),
                (h = h.valueOf()),
                (c = c + ";ex=" + h));
        window.localStorage.setItem(a, l(c));
    }

    function va(a, c) {
        var d = document.createElement("script"),
            h = !1;
        d.src = a;
        d.async = !0;
        d.onload = d.onreadystatechange = function() {
            h ||
                (this.readyState &&
                    "loaded" !== this.readyState &&
                    "complete" !== this.readyState) ||
                ((h = !0),
                    (d.onload = d.onreadystatechange = null),
                    d && d.parentNode && d.parentNode.removeChild(d));
        };
        document.getElementsByTagName("head")[0].appendChild(d);
    }

    function wa(a) {
        if ("https://s.eclick.vn" === a.origin) {
            var c = {};
            try {
                (c = JSON.parse(a.data)),
                "elookup" === c.id &&
                    "eadpre" === c.type &&
                    "object" === typeof c.values &&
                    (W ?
                        la("foret", JSON.stringify(c.values), 604800) :
                        P("foret", JSON.stringify(c.values), 604800));
            } catch (d) {}
        }
    }

    function ba(a, c) {
        if (c && c.postMessage) {
            var d = A("orig_aid"),
                h = A("fosp_aid");
            if (9 < d.length && 40 > d.length) {
                f(window, "message", wa);
                try {
                    var b = JSON.stringify({
                        id: "elookup",
                        type: "sync_user",
                        values: { fosp_aid: h, orig_aid: d },
                    });
                    c.postMessage(b, "*");
                } catch (e) {}
            }
        }
    }

    function xa(a, c) {
        var d = document.getElementById(c),
            h;
        h =
            "#" === a.substring(0, 1) ?
            document.getElementById(a.replace("#", "")) :
            (a = document.getElementsByClassName(a.replace(".", ""))) && a[0];
        h && d && ((d = M(d, h)), d(), f(window, "scroll", d));
    }

    function ia() {
        var a = !1,
            c;
        for (c in w.tag) {
            var d = w.tag[c];
            if (d.hasOwnProperty("lazy") && 1 === d.lazy && 0 === d.view) {
                var a = !0,
                    h = document.getElementById(c);
                h &&
                    2.5 * Ha >= h.getBoundingClientRect().top &&
                    ((d.lazy = 0), ya(c, 1));
            }
        }
        a || y(document, "scroll", ia);
    }

    function za() {
        var a = parseInt(A("display_cpd")),
            a = 0 <= a ? 1 + a : Math.floor(10 * Math.random()),
            a = 15 <= a ? 0 : a;
        P("display_cpd", "" + a, N / 1e3);
        return a;
    }

    function F() {
        G.setConfig({
            userSync: {
                auctionDelay: 50,
                userIds: [],
                filterSettings: {
                    iframe: { bidders: "*", filter: "include" },
                    image: { bidders: "*", filter: "include" },
                },
            },
        });
    }
    var X = window.dataLayer || [],
        L =
        new Date().setHours(6, 0, 0, 0).valueOf() + 864e5 - new Date().valueOf(),
        N =
        new Date().setHours(0, 0, 0, 0).valueOf() + 864e5 - new Date().valueOf(),
        W =
        window.localStorage && "function" === typeof window.localStorage.setItem ?
        1 :
        0,
        ja = "",
        K = window.encodeURIComponent;
    var B = window.navigator,
        ja = B && (B = B.userAgent) ? B : "";
    var R = function(a) {
            return -1 !== ja.toLowerCase().indexOf(a.toLowerCase());
        },
        u = function() {
            return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(
                ja
            );
        },
        t = Math.max(window.screen.height, window.screen.width),
        C = Math.min(window.screen.height, window.screen.width),
        v = {},
        S = !1,
        J = !1,
        T = (function() {
            for (
                var a = {},
                    c = document.getElementsByTagName("meta"),
                    d = 0,
                    h = c.length,
                    b = c[d]; d < h; b = c[++d]
            ) {
                var f = b.getAttribute("name"),
                    b = b.getAttribute("content");
                null != f && (a[f] = b);
            }
            return a;
        })(),
        ga = window.domContentDetail || "block_ads_connect",
        ca = !1,
        e = [],
        b = T.tt_category_id,
        x = u() ? "Mobile" : "Desktop";
    X.push({
        event: "adsrequest",
        ads_process: "Step1",
        page_cate: b,
        device_ads: x,
    });
    var l = function(a) {
        try {
            return "function" == typeof encodeURIComponent ?
                encodeURIComponent(a) :
                escape(a);
        } catch (c) {
            return a;
        }
    };
    try {
        var p = function(a) {
                for (var c = "", d = 0; d < a.length; d++) 0 !== d % 14 && (c += a[d]);
                return JSON.parse(unescape(c));
            },
            n = W ? da("f_opt") : A("f_opt"),
            m = { age: 0, gender: 0, ret: "", segment: [], utime: 0 };
        if ("" != n) m = p(n);
        else {
            L = Math.round(L / 1e3);
            window.ufo8 = function(a) {
                L += 86400;
                W ? la("f_opt", a, L) : P("f_opt", a, L);
                m = p(a);
            };
            var ma = A("fosp_aid");
            if (10 > ma.length || 40 < ma.length) ma = A("orig_aid");
            va("https://adp.vnecdn.net/fopt.js?aid=" + ma);
        }
        m.ret = "";
        var g = W ? da("foret") : A("foret");
        if ("" !== g) {
            var q = JSON.parse(g),
                B = [],
                r = Math.round(Date.now() / 1e3),
                s;
            for (s in q) {
                var U = q[s];
                U && (0 === U.exp || parseInt(U.exp) >= r) && B.push(U.id);
            }
            0 < B.length && (m.ret = B.join(","));
        }
    } catch (Ka) {}
    var ea = null,
        z,
        Aa = function(a) {
            Aa[" "](a);
            return a;
        };
    Aa[" "] = function() {};
    q = function(a) {
        try {
            var c;
            if ((c = !!a && null != a.location.href))
                a: {
                    try {
                        Aa(a.foo);
                        c = !0;
                        break a;
                    } catch (d) {}
                    c = !1;
                }
            return c;
        } catch (h) {
            return !1;
        }
    };
    if (!ea)
        a: {
            r = [window.top];
            s = [];
            for (B = 0;
                (U = r[B++]);)
                try {
                    if ((!q(U) || s.push(U), U.frames))
                        for (var H = U.frames.length, n = 0; n < H && 1024 > r.length; ++n)
                            r.push(U.frames[n]);
                } catch (La) {}
            for (H = 0; H < s.length; H++)
                try {
                    if ((z = s[H].frames.sync_retar)) {
                        ea = z;
                        break a;
                    }
                } catch (E) {}
            ea = null;
        }
    if (ea) ba(window, ea);
    else {
        z = document.createElement("iframe");
        z.src = "https://s.eclick.vn/delivery/sync_retar.html";
        z.id = "sync_retar";
        z.name = "sync_retar";
        z.width = 0;
        z.height = 0;
        z.style.display = "none";
        0 < document.getElementsByTagName("body").length &&
            document.getElementsByTagName("body")[0].appendChild(z);
        z.onload = function() {
            ba(window, ea);
        };
        try {
            ea = z.contentWindow;
        } catch (Ma) {}
    }
    var M = function(a, c) {
            var d,
                h = a.getBoundingClientRect().height,
                b = document.documentElement.clientHeight || window.screen.height;
            return h > b ?

                function() {} :
                function() {
                    a.getBoundingClientRect();
                    var f = c.getBoundingClientRect(),
                        f = b - (f.bottom + h);
                    20 > f ?
                        ((d = 1), (a.style.bottom = f - 20 + "px")) :
                        2 !== d && ((d = 2), (a.style.bottom = "0px"));
                };
        },
        Ha =
        window.innerHeight || document.body.clientHeight || window.screen.height,
        na = window.innerWidth || document.body.clientWidth || window.screen.width;
    z = 1;
    window.articleAds && 1 === window.articleAds && (z = 0);
    var k = window.googletag || { cmd: [] },
        G = window.pbjs || { que: [] },
        I = window.Criteo || { events: [] },
        w = window.googTagCode || { display: [] },
        D = function(a) {
            return a instanceof Element || a instanceof HTMLDocument;
        };
    "function" === typeof G.setConfig ?
        F() :
        setTimeout(function() {
            F();
        }, 1e3);
    var Y = function(a, c) {
        var d = document.getElementById(a);
        null != d &&
            (null != c ?
                ((d = d.getElementsByClassName(c)),
                    0 < d.length && D(d[0]) && ((d = d[0]), (d.style.display = "none"))) :
                (d.style.display = "none"));
    };
    1 === window.articleAds &&
        (console &&
            console.log(
                "Trang n\u00e0y b\u00ean n\u1ed9i dung kh\u00f4ng cho qu\u1ea3ng c\u00e1o"
            ),
            Y("supper_masthead", null),
            Y("ads_large_detail", null),
            Y("banner_top", null),
            setTimeout(function() {
                Y("same_category", "banner_mobile_300x250");
            }, 3e3));
    if (z && w.tag) {
        var ka = !1,
            oa = za(),
            Ba = parseInt(A("myvne_user_id")),
            Da = "";
        f_opt = {};
        page_folder = parseInt(window.PAGE_FOLDER) || 0;
        var Ea = function(a) {
                !ca &&
                    (e.push(a),
                        "prebid" === a ?
                        k.cmd.push(function() {
                            G.que.push(function() {
                                G.setTargetingForGPTAsync();
                            });
                        }) :
                        "criteo" === a &&
                        k.cmd.push(function() {
                            I.SetDFPKeyValueTargeting();
                        }),
                        2 <= e.length || "timeout" === a) &&
                    ((ca = !0),
                        k.cmd.push(function() {
                            var a = w.brandSafe || "none";
                            k.pubads().setTargeting("bsf", "" + a);
                            var a = [],
                                d;
                            for (d in w.tag) {
                                var h = w.tag[d];
                                if (
                                    h.gtag.hasOwnProperty("companion") &&
                                    1 === h.gtag.companion
                                ) {
                                    var b = document.getElementById(d);
                                    b && (b.style.textAlign = "center");
                                    a.push(h.slot);
                                    h.view = 1;
                                }
                            }
                            0 < a.length && k.pubads().refresh(a);
                            var f;
                            if ((f = w.display) && f.shift)
                                for (a = 20;
                                    (d = f.shift()) && 0 < a--;)
                                    try {
                                        ya(d, 0);
                                    } catch (e) {}
                            w.display.push = ya;
                        }));
            },
            ya = (window.googleDisplay = function(a, c) {
                k.cmd.push(function() {
                    if (/_BG_1x1/.test(a) || /sis_bgu/.test(a)) {
                        var d = a.replace("_BG_1x1", "_MH_970x250");
                        w.tag[d] || (d = "sis_masthead");
                        a = d;
                        if (w.tag[d] && ((d = document.getElementById(a)), !d)) {
                            d = document.createElement("div");
                            d.setAttribute("id", a);
                            var h = document.getElementById("supper_masthead");
                            h && h.appendChild(d);
                        }
                    }
                    d = w.tag[a] || null;
                    h = document.getElementById(a);
                    if (ca && d && h) {
                        if (
                            "inpage_folder" === d.type &&
                            1 !== parseInt(window.PAGE_DETAIL, 10)
                        ) {
                            var b = [
                                '<div id="admbackground" style="position: relative; width: 100%;"><div id="inread_',
                                a,
                                '" style="width:100%;float:left;text-align:center;position: relative !important;" class="inpage_article"><div id="inpage_article_rect"><div id="inpage_article_cont"><div id="inpage_article_wrap"><div id="',
                                a,
                                '" style="position:relative;margin:0 auto;display:block;" class="inpage_article_wrap_ads"></div></div></div></div></div></div>',
                            ].join("");
                            h.parentNode.innerHTML = b;
                            h = document.getElementById(a);
                        }
                        var b = d.lazy || 0,
                            f = d.view || 0;
                        1 === c ? (b = 0) : 2 === c && (f = b = 0);
                        0 === b &&
                            ((h.style.textAlign = "center"),
                                (d.view = 1),
                                1 === f ? k.display(a) : k.pubads().refresh([d.slot]),
                                d.hasOwnProperty("sticky") &&
                                "" !== d.sticky &&
                                "done" !== d.sticky &&
                                ((h.parentNode.style.position = "relative"),
                                    (b =
                                        "#" === d.sticky.substring(0, 1) ?
                                        document.getElementById(d.sticky.replace("#", "")) :
                                        (b = document.getElementsByClassName(
                                            d.sticky.replace(".", "")
                                        )) && b[0]),
                                    h &&
                                    b &&
                                    ((b = b.getBoundingClientRect()),
                                        (f = h.parentNode.getBoundingClientRect()),
                                        b.top > f.bottom + 50 &&
                                        (h.parentNode.style.position = "relative"),
                                        (d.sticky = "done"))));
                    }
                });
            }),
            Ia = function(a) {
                var c = a.slot && a.slot.getSlotElementId(),
                    d = w.tag[c];
                console &&
                    console.log(a.slot.getAdUnitPath(), " is Empty: ", a.isEmpty);
                (/_MH_414x207/.test(c) ||
                    /_MH_970x250/.test(c) ||
                    /sis_masthead/.test(c)) &&
                X.push({
                    event: "adsrequest",
                    ads_process: "Step2",
                    page_cate: b,
                    device_ads: x,
                });
                if (/MH_970x250/.test(c) || /sis_masthead/.test(c)) {
                    var h = a.size || [],
                        e = document.getElementById("supper_masthead");
                    2 === h.length && 3 === h[0] && 3 === h[1] ?
                        null != e &&
                        ((e.style.position = "fixed"),
                            (e.style.top = "3px"),
                            (e.style.width = "3px"),
                            (e.style.height = "20px!important;"),
                            (e.style.minHeight = "20px!important;"),
                            (e.style.overflow = "hidden")) :
                        null != e &&
                        ((e.style.minHeight = "0px"),
                            (e.style.width = "100%"),
                            (e.style.display = "flex"),
                            (e.style.justifyContent = "center"),
                            (e.style.transition = "none"),
                            (e.style.overflow = "hidden"),
                            1920 > h[0] && (e.style.padding = "10px 10px"));
                    h =
                        document.getElementById("sis_masthead") ||
                        document.getElementById("VN_PC_Vne_MH_970x250");
                    null != h &&
                        ((h.style.minHeight = "0px"),
                            (h.style.width = "100%"),
                            (h.style.display = "flex"),
                            (h.style.justifyContent = "center"),
                            (h.style.transition = "none"));
                }
                if (a.isEmpty) {
                    "sis_masthead" === c
                        ?
                        Y("supper_masthead", null) :
                        "sis_outstream" === c ?
                        Y("video_outstream", null) :
                        "sis_inpage" === c &&
                        (Y("admbackground", null), (Da = "admbackground"));
                    if (S)
                        for (var k in v)
                            c === v[k] &&
                            (a = document.getElementById("inread_" + c)) &&
                            (a.style.display = "none");
                    a = document.getElementById(c);
                    if (D(a))
                        try {
                            if (((a = a.parentNode), a.getAttributeNode("data-display"))) {
                                var g = ("" + a.getAttributeNode("data-display").value).split(
                                    ":"
                                );
                                if (2 === g.length) {
                                    var q =
                                        "#" === g[0].substring(0, 1) ?
                                        document.getElementById(g[0].replace("#", "")) :
                                        document.getElementsByClassName(
                                            g[0].replace(".", "")
                                        )[0];
                                    if (D(q))
                                        for (var m = q.childNodes, r = m.length, q = 0; q < r; q++)
                                            if (
                                                D(m[q]) &&
                                                null == m[q].getAttributeNode("data-display") &&
                                                g[1] === m[q].nodeName.toLowerCase() &&
                                                "none" === window.getComputedStyle(m[q]).display
                                            ) {
                                                a.style.display = "none";
                                                m[q].style.display = "inline-block";
                                                break;
                                            }
                                }
                            }
                        } catch (l) {}
                } else if (d)
                    if (
                        /FL_120x240|FL_160x600|FR_120x240|FR_160x600/.test(c) ||
                        "sis_floatingleft" === c
                    )
                        xa("#wrap-main-nav", c);
                    else if (
                    "stickyads" === ("" + d.type).toLowerCase() ||
                    "sis_sticky" === c
                )
                    (a = document.getElementById("closeButtonSticky")),
                    null != a && (a.style.display = "block");
                else if (
                    "sis_breakpage1" === c ||
                    "sis_breakpage2" === c ||
                    "sis_breakpage3" === c ||
                    "sis_breakpage4" === c ||
                    "sis_large1" === c ||
                    "sis_large2" === c ||
                    "sis_large3" === c ||
                    "sis_large4" === c ||
                    "sis_large5" === c ||
                    "sis_large6" === c ||
                    "sis_large7" === c ||
                    "sis_large8" === c ||
                    "sis_large9" === c ||
                    "sis_large10" === c ||
                    "sis_article" === c
                ) {
                    var p = document.getElementById(c);
                    D(p) &&
                        setTimeout(function() {
                            p.style.cssText =
                                "text-align:center;min-height:0px;display:flex;justify-content:center;transition:none;width:100%;position:relative;margin-left:0px !important;";
                        }, 2e3);
                } else if ("sis_inread" === c) {
                    var n = document.getElementById("inread_sis_inread");
                    null !== n &&
                        ((n.style.width = "100%"),
                            (n.style.justifyContent = "center"),
                            (n.style.transition = "none"),
                            (a = function() {
                                setTimeout(function() {
                                    n.style.display =
                                        window.innerWidth > window.innerHeight ? "flex" : "block";
                                }, 1e3);
                            }),
                            a(),
                            f(window, "orientationchange", a));
                }
            };
        k.cmd.push(function() {
            for (var a in w.tag) {
                var c = w.tag[a];
                if (c.hasOwnProperty("gtag")) {
                    var d = c.type || "",
                        h = c.gtag.code || "";
                    if (
                        1 !== parseInt(window.ZONE_ADS) ||
                        !/sis_outstream/.test(a) ||
                        (5 !== parseInt(window.articleType) &&
                            4 !== parseInt(window.articleType) &&
                            3 !== parseInt(window.articleType))
                    ) {
                        if (!1 === u()) {
                            if ("sis_masthead" === a || "sis_large1" === a)
                                (c.gtag.companion = 1), (w.tag[a].gtag.companion = 1);
                        } else if (
                            R("iPad") ||
                            (R("Android") && !R("Mobile")) ||
                            R("Silk")
                        ) {
                            if ("slider" === d) continue;
                            if (/sis_floatingleft/.test(a)) continue;
                        } else if (/sis_floatingleft/.test(a) && 1264 > na) continue;
                        if (
                            "inpage" === d ||
                            "inpage2" === d ||
                            "inread1" === d ||
                            "inread2" === d ||
                            "popup" === d
                        )
                            c.lazy = 0;
                        if ("inpage" === d || "inpage2" === d) {
                            var d = !1,
                                f;
                            for (f in c.gtag.sizes)
                                if (
                                    ((h = c.gtag.sizes[f]),
                                        "object" === typeof h &&
                                        2 === h.length &&
                                        480 === h[0] &&
                                        960 === h[1])
                                ) {
                                    d = !0;
                                    break;
                                }
                            d &&
                                (c.gtag.sizes = ["fluid", [300, 250],
                                    [300, 600],
                                    [320, 480]
                                ]);
                        } else if ("popup" === d) {
                            var e = document.createElement("div");
                            e.innerHTML = '<div id="' + a + '"></div>';
                            try {
                                document.body ?
                                    document.body.appendChild(e) :
                                    window.setTimeout(function() {
                                        document.body && document.body.appendChild(e);
                                    }, 1e3);
                            } catch (q) {}
                            v[d] = a;
                            w.display.push(a);
                        } else if (
                            "https://e.vnexpress.net" === window.base_url &&
                            /Ureka_Supply_ov/.test(h)
                        ) {
                            var g = document.createElement("div");
                            g.innerHTML = '<div id="' + a + '"></div>';
                            try {
                                document.body ?
                                    document.body.appendChild(g) :
                                    window.setTimeout(function() {
                                        document.body && document.body.appendChild(g);
                                    }, 1e3);
                            } catch (r) {}
                            w.display.push(a);
                        }
                        "sis_inarticle" === a &&
                            "vnexpress.net" === location.host &&
                            1 === parseInt(window.ZONE_ADS) &&
                            "1004528" === b &&
                            (w.tag[a].gtag.sizes = c.gtag.sizes = [
                                "fluid", [1, 1],
                                [300, 250],
                                [336, 280],
                                [480, 270],
                                [480, 290],
                            ]);
                        h = (c.gtag.hasOwnProperty("safe") && c.gtag.safe) || 0;
                        if (
                            "inimage" === d &&
                            0 === parseInt(window.ZONE_ADS) &&
                            1 === parseInt(window.PAGE_DETAIL)
                        ) {
                            var n = {
                                "/Vnexpress/Desktop/Inimage/Kinhdoanh": 1,
                                "/Vnexpress/Desktop/Inimage/Sohoa": 1,
                                "/Vnexpress/Desktop/Inimage/Xe": 1,
                                "/Vnexpress/Desktop/Inimage/Thethao": 1,
                                "/Vnexpress/Desktop/Inimage/Thegioi": 1,
                                "/LDPVnexpress/Desktop/Inimage/Worldcup2022": 1,
                                "/Vnexpress/Desktop/Inimage/Giaitri": 1,
                                "/Vnexpress/Desktop/Inimage/Giaoduc": 1,
                                "/Vnexpress/Desktop/Inimage/Suckhoe": 1,
                                "/Vnexpress/Desktop/Inimage/Doisong": 1,
                                "/Vnexpress/Desktop/Inimage/Dulich": 1,
                                "/Vnexpress/Desktop/Inimage/Khoahoc": 1,
                                "/Vnexpress/Desktop/Inimage/Ykien": 1,
                                "/Vnexpress/Desktop/Inimage/Tamsu": 1,
                                "/Vnexpress/Desktop/Inimage/Hai": 1,
                                "/LDPVnexpress/Desktop/Inimage/Debate": 1,
                                "/Vnexpress/Mobile/Inimage/Kinhdoanh": 1,
                                "/Vnexpress/Mobile/Inimage/sohoa": 1,
                                "/Vnexpress/Mobile/Inimage/xe": 1,
                                "/Vnexpress/Mobile/Inimage/Thethao": 1,
                                "/Vnexpress/Mobile/Inimage/Thegioi": 1,
                                "/LDPVnexpress/Mobile/Inimage/Worldcup2022": 1,
                                "/Vnexpress/Mobile/Inimage/Giaitri": 1,
                                "/Vnexpress/Mobile/Inimage/giaoduc": 1,
                                "/Vnexpress/Mobile/Inimage/suckhoe": 1,
                                "/Vnexpress/Mobile/Inimage/doisong": 1,
                                "/Vnexpress/Mobile/Inimage/Dulich": 1,
                                "/Vnexpress/Mobile/Inimage/Khoahoc": 1,
                                "/Vnexpress/Mobile/Inimage/ykien": 1,
                                "/Vnexpress/Mobile/Inimage/tamsu": 1,
                                "/Vnexpress/Mobile/Inimage/Hai": 1,
                                "/LDPVnexpress/Mobile/Inimage/Debate": 1,
                                "/Ngoisao/Desktop/Inimage/Hautruong": 1,
                                "/Ngoisao/Desktop/Inimage/Thethao": 1,
                                "/Ngoisao/Desktop/Inimage/Thoicuoc": 1,
                                "/Ngoisao/Desktop/Inimage/Giadinh": 1,
                                "/Ngoisao/Desktop/Inimage/Thuongtruong": 1,
                                "/Ngoisao/Desktop/Inimage/Thoitrang": 1,
                                "/Ngoisao/Desktop/Inimage/Lamdep": 1,
                                "/Ngoisao/Desktop/Inimage/Tracnghiem": 1,
                                "/Ngoisao/Desktop/Inimage/Anchoi": 1,
                                "/Ngoisao/Desktop/Inimage/Buonchuyen": 1,
                                "/LDPNgoisao/Desktop/Inimage/Beauty": 1,
                                "/Ngoisao/Mobile/Inimage/Hautruong": 1,
                                "/Ngoisao/Mobile/Inimage/Thethao": 1,
                                "/Ngoisao/Mobile/Inimage/Thoicuoc": 1,
                                "/Ngoisao/Mobile/Inimage/Giadinh": 1,
                                "/Ngoisao/Mobile/Inimage/Thuongtruong": 1,
                                "/Ngoisao/Mobile/Inimage/Thoitrang": 1,
                                "/Ngoisao/Mobile/Inimage/Lamdep": 1,
                                "/Ngoisao/Mobile/Inimage/Tracnghiem": 1,
                                "/Ngoisao/Mobile/Inimage/Anchoi": 1,
                                "/Ngoisao/Mobile/Inimage/Buonchuyen": 1,
                                "/LDPNgoisao/Mobile/Inimage/Beauty": 1,
                                "/iOne/Desktop/InImage/Funland": 1,
                                "/iOne/Desktop/InImage/Girlsboys": 1,
                                "/iOne/Desktop/InImage/Horoscopes": 1,
                                "/iOne/Desktop/InImage/Moviesmuzik": 1,
                                "/iOne/Desktop/InImage/Photo": 1,
                                "/iOne/Desktop/InImage/Star": 1,
                                "/iOne/Desktop/InImage/Style": 1,
                                "/iOne/Desktop/InImage/Tintuc": 1,
                                "/iOne/Mobile/Inimage/Funland": 1,
                                "/iOne/Mobile/Inimage/Girlsboys": 1,
                                "/iOne/Mobile/Inimage/Horoscopes": 1,
                                "/iOne/Mobile/Inimage/Moviesmuzik": 1,
                                "/iOne/Mobile/Inimage/Photo": 1,
                                "/iOne/Mobile/Inimage/Star": 1,
                                "/iOne/Mobile/InImage/Style": 1,
                                "/iOne/Mobile/Inimage/Tintuc": 1,
                            };
                            if (c.gtag && c.gtag.hasOwnProperty("code")) {
                                var l = c.gtag.code,
                                    h = 0,
                                    p;
                                for (p in n)
                                    if (-1 < l.indexOf(p)) {
                                        h = 2;
                                        break;
                                    }
                                w.tag[a].gtag.safe = h;
                            }
                        }
                        2 === h ?
                            (c.slot = k
                                .defineOutOfPageSlot(c.gtag.code, a)
                                .addService(k.pubads())) :
                            1 === h && u() ?
                            (c.slot = k
                                .defineSlot(c.gtag.code, c.gtag.sizes, a)
                                .setForceSafeFrame(!0)
                                .addService(k.pubads())) :
                            /sis_outstream/.test(a) ?
                            (c.slot = k
                                .defineSlot(c.gtag.code, c.gtag.sizes, a)
                                .addService(k.pubads())
                                .setCollapseEmptyDiv(!1)) :
                            c.gtag.hasOwnProperty("companion") && 1 === c.gtag.companion ?
                            (c.slot = k
                                .defineSlot(c.gtag.code, c.gtag.sizes, a)
                                .addService(k.companionAds())
                                .addService(k.pubads())) :
                            (c.slot = k
                                .defineSlot(c.gtag.code, c.gtag.sizes, a)
                                .addService(k.pubads()));
                        "inimage" === d &&
                            ((h = function() {
                                    if (
                                        1 === parseInt(window.articleType) ||
                                        (1 === parseInt(window.ZONE_ADS) &&
                                            5 === parseInt(window.articleType)) ||
                                        "https://e.vnexpress.net" === window.base_url
                                    ) {
                                        var a = window.top.document.querySelector(
                                                ".fck_detail .tplCaption img,.fck_detail .block_thumb_slide_show img.lazy,.fck_detail .fig-picture img.lazy,.fck_detail .item_slide_show *:not(.box_img_video) > img.lazyLoaded,.main_content_detail .item_slide_show div:not(.box_img_video) > img.lazyLoaded,.main_content_detail table.tplCaption img.lazyLoaded,#article_content .block_thumb_slide_show > img.lazyloaded.main_fck_detail .thumb_detail_top img"
                                            ),
                                            d = document.getElementsByName("its_type")[0];
                                        if (!a ||
                                            window.top.location.pathname.startsWith("/infographics") ||
                                            (d && "photo" === d.content)
                                        )
                                            return (
                                                console.log("Inimage not validate infographics or photo"),
                                                ""
                                            );
                                        if (!0 === u()) {
                                            if (300 > a.offsetWidth || 200 > a.offsetHeight)
                                                return (
                                                    console.log("Inimage not validate width and height"), ""
                                                );
                                        } else if (550 > a.offsetWidth || 350 > a.offsetHeight)
                                            return (
                                                console.log("Inimage not validate width and height"), ""
                                            );
                                        return a;
                                    }
                                    console.log("Inimage not validate articleType");
                                    return "";
                                }),
                                (f = !1),
                                1 !== parseInt(window.PAGE_DETAIL) ||
                                (1 !== parseInt(ZONE_ADS) && 0 !== parseInt(T.tt_page_special)) ?
                                console.log("Inimage not validate tt_page_special") :
                                (f = !0), !f ||
                                (!(d = document.getElementById(a)) && D(d)) ||
                                ((d = h() || "") &&
                                    D(d) &&
                                    "done" !== d.parentNode.getAttribute("data-inimage") &&
                                    (!0 === u() ?
                                        d.parentNode.insertAdjacentHTML(
                                            "beforeend",
                                            '<div class="embed-container" style="display:block;position:relative;width:100vw;height:70px;padding-bottom:0px !important;margin-bottom:0px !important;margin-top:-70px;"><style>#' +
                                            a +
                                            '{position:relative;width:100%;height:100%;}</style><div id="' +
                                            a +
                                            '"></div></div>'
                                        ) :
                                        d.parentNode.insertAdjacentHTML(
                                            "beforeend",
                                            "e.vnexpress.net" !== location.host ?
                                            '<div class="embed-container-ads" style="display:block;position:absolute;width:100%;height:100px;padding-bottom:0px !important;margin-bottom:0px !important;bottom:-1px;"><style>#' +
                                            a +
                                            '{position:relative;width:100%;height:100%;}</style><div id="' +
                                            a +
                                            '"></div></div>' :
                                            '<div class="embed-container-ads" style="display:block;position:relative;width:100%;height:100px;padding-bottom:0px !important;margin-top:-100px !important;"><style>#' +
                                            a +
                                            '{position:relative;width:100%;height:100%;}</style><div id="' +
                                            a +
                                            '"></div></div>'
                                        ),
                                        d.parentNode.setAttribute("data-inimage", "done"),
                                        w.display.push(a))));
                        "sis_interstitial" === a &&
                            u() &&
                            1 === parseInt(window.ZONE_ADS) &&
                            ((d = document.getElementById(a)),
                                d ||
                                ((d = document.createElement("div")),
                                    (d.id = a),
                                    document.body.appendChild(d)),
                                (c.slot = k
                                    .defineOutOfPageSlot(
                                        c.gtag.code,
                                        k.enums.OutOfPageFormat.INTERSTITIAL
                                    )
                                    .addService(k.pubads())),
                                w.display.push(a));
                        if (
                            "sis_anchor" === a &&
                            u() &&
                            ("vrace.vnexpress.net" === location.host ||
                                "ione.net" === location.host ||
                                "ione.vnexpress.net" === location.host)
                        ) {
                            d = document.getElementById(a);
                            d ||
                                ((d = document.createElement("div")),
                                    (d.id = a),
                                    document.body.appendChild(d));
                            if ("vrace.vnexpress.net" === location.host)
                                c.slot = k
                                .defineOutOfPageSlot(
                                    c.gtag.code,
                                    k.enums.OutOfPageFormat.TOP_ANCHOR
                                )
                                .addService(k.pubads());
                            else if (
                                "ione.net" !== location.host ||
                                "ione.vnexpress.net" !== location.host
                            )
                                c.slot = k
                                .defineOutOfPageSlot(
                                    c.gtag.code,
                                    k.enums.OutOfPageFormat.BOTTOM_ANCHOR
                                )
                                .addService(k.pubads());
                            w.display.push(a);
                        }
                    }
                }
            }
            "vnexpress.net" === location.host &&
                (new Image().src =
                    "https://sync.search.spotxchange.com/partner?source=307342&sync_limit=5");
            a = T.its_tag || "";
            "" !== a &&
                1 === parseInt(window.PAGE_DETAIL, 10) &&
                ((a = a.toLowerCase().split(",")),
                    (a = a.map(Function.prototype.call, String.prototype.trim)),
                    k.pubads().setTargeting("tags", a));
            a = T.liston_category || "";
            "" !== a &&
                1 === parseInt(window.PAGE_DETAIL, 10) &&
                ((a = a.toLowerCase().split(",")),
                    (a = a.map(Function.prototype.call, String.prototype.trim)),
                    k.pubads().setTargeting("liston", a));
            a = 1e5 < Ba ? Ba : 1e5 < m.my ? m.my : 0;
            c = 0 < m.age ? m.age : 0;
            f = 0 < m.gender ? m.gender : 0;
            p = m.segment && Array.isArray(m.segment) ? m.segment.join(",") : "";
            var d = "undefined" !== m.top_site ? m.top_site : "",
                h = "undefined" !== m.top_ver ? m.top_ver : "",
                n = "undefined" !== m.ret ? m.ret : "",
                l = window.screen.height,
                x = window.screen.width;
            window.optTarget = m;
            u() &&
                window.screen.height < window.screen.width &&
                ((l = window.screen.width), (x = window.screen.height));
            var s = parseInt(window.article_type) || 1;
            1 > s && (s = 1);
            k.pubads().setTargeting("article_type", "" + s || "");
            k.pubads().setTargeting("article", T.tt_article_id || "");
            k.pubads().setTargeting("category", T.tt_category_id || "");
            k.pubads().setTargeting("cpd", "" + oa);
            k.pubads().setTargeting("bf", "0");
            k.pubads().setTargeting("islogin", "" + (1e5 < Ba ? 1 : 0));
            k.pubads().setTargeting("myvneid", "" + a);
            k.pubads().setTargeting("ismy", "" + (1e5 < a ? 1 : 0));
            k.pubads().setTargeting("myage", "" + c);
            k.pubads().setTargeting("mygender", "" + f);
            k.pubads().setTargeting("mysegment", "" + p);
            k.pubads().setTargeting("mytop_folders", "" + d);
            k.pubads().setTargeting("mytop_ver", "" + h);
            k.pubads().setTargeting("myretar", "" + n);
            k.pubads().setTargeting("screen_width", "" + x);
            k.pubads().setTargeting("screen_height", "" + l);
            k.pubads().enableSingleRequest();
            k.pubads().collapseEmptyDivs();
            k.companionAds().setRefreshUnfilledSlots(!1);
            k.pubads().disableInitialLoad();
            k.pubads().addEventListener("slotRenderEnded", Ia);
            k.enableServices();
        });
        var O = [],
            Ca;
        for (Ca in w.tag)
            if (
                ((z = w.tag[Ca]),
                    z.hasOwnProperty("prebid") &&
                    ((H = z.gtag.code || Ca), 0 < z.prebid.sizes.length))
            ) {
                var H = {
                        code: H,
                        mediaTypes: { banner: { sizes: z.prebid.sizes } },
                        bids: [],
                    },
                    fa;
                for (fa in z.prebid.bidder)
                    H.bids.push({ bidder: fa, params: z.prebid.bidder[fa] });
                O.push(H);
            }
        0 < O.length &&
            G.que.push(function() {
                G.addAdUnits(O);
                G.requestBids({
                    bidsBackHandler: function() {
                        Ea("prebid");
                    },
                    timeout: 1e3,
                });
            });
        window.setTimeout(function() {
            Ea("timeout");
        }, 500);
        var Fa = function() {
                setTimeout(function() {
                    var a = document.getElementById("admbackground"),
                        c = a.parentNode.parentNode.parentNode.parentNode;
                    window.innerWidth > window.innerHeight ?
                        ((a.style.display = "none"),
                            0 === parseInt(window.PAGE_DETAIL) && (c.style.display = "none")) :
                        ((a.style.display = "block"),
                            0 === parseInt(window.PAGE_DETAIL) &&
                            (c.style.display = "block"));
                }, 1e3);
            },
            ha = function() {
                setTimeout(function() {
                    document.getElementById("inpage_article2").style.display =
                        window.innerWidth > window.innerHeight ? "none" : "block";
                }, 1e3);
            },
            $ = function(a, c) {
                if (Da !== a) {
                    var d = document.getElementById("divend"),
                        b = document.getElementById("divfirst"),
                        e = document.getElementById(a);
                    "admbackground" === a
                        ?
                        (Fa(), f(window, "orientationchange", Fa)) :
                        (ha(), f(window, "orientationchange", ha));
                    var g = document.getElementById(c);
                    if (g && D(g)) {
                        var q = g.parentNode,
                            k = q.parentNode,
                            m = k.parentNode,
                            l = "",
                            p = "";
                        null != b ?
                            (window.innerHeight > window.innerWidth ?
                                (l = "margin:0 -" + (C - b.offsetWidth) / 2 + "px;") :
                                (p = "margin:0 -" + (t - b.offsetWidth) / 2 + "px;"),
                                (d.style.cssText =
                                    "position:relative;z-index:200;background-color:rgb(255, 255, 255, 0);"),
                                (b.style.cssText =
                                    "position:relative;z-index:200;background-color:rgb(255, 255, 255);")) :
                            window.innerHeight > window.innerWidth ?
                            (l = "margin:0 -" + (C - e.offsetWidth) / 2 + "px;") :
                            (p = "margin:0 -" + (t - e.offsetWidth) / 2 + "px;");
                        var d = c + "_iframe",
                            b = c + "_ads",
                            e = "admbackground" === a ? "inpage_article" : "inpage2_article",
                            n = g.querySelector("iframe");
                        null != n &&
                            ((n.style.border = "0px"),
                                (n.style.verticalAlign = "bottom"),
                                (n.style.minWidth = "0px"),
                                0 === n.offsetWidth && (n.style.width = "100vw"),
                                (n.style.height = "calc(100vh - 44px)"),
                                (n.style.marginTop = "40px"),
                                (n.style.maxWidth = "590px"),
                                n.setAttribute("class", d),
                                (n.parentNode.style.maxWidth = "100%"));
                        m.style.cssText =
                            "overflow:hidden;display:block;background:rgb(255, 255, 255);width:100%;margin-bottom:20px;position:relative !important;justify-content:center;transition:none;margin-left:0px !important;text-align: center;";
                        k.style.cssText =
                            "position:absolute;top:0px;left:0px;width:100%;height:100%;margin:0px;padding:0px;overflow:hidden;clip:rect(0px auto auto 0px);";
                        q.style.cssText =
                            "position:fixed;top:auto;left:0px;width:100%;height:100%;margin:0px;padding:0px;bottom:0px;transform:translateZ(0px);";
                        g.style.cssText =
                            "overflow:hidden;display:block;position:absolute;left:0px;right:auto;top:auto;bottom:0px;";
                        m = [
                            "@media screen and (orientation:portrait) {#" +
                            a +
                            "{height:100%;position:relative;width:",
                            C + "px !important;",
                            l,
                            "}." + e + ",#" + c + ",." + d + ",." + b + " {height:",
                            t,
                            "px !important;} #" + c + "{width:",
                            C,
                            "px;}}@media screen and (orientation:landscape) {#" +
                            a +
                            "{height:",
                            "100%;width:",
                            t,
                            "px !important;",
                            p,
                            "}." + e + ",#" + c + ",." + d + ",." + b + " {height:",
                            C,
                            "px;} #" + c + "{width:",
                            t,
                            "px;}} .inner_ads{width:100% !important;}",
                        ].join("");
                        g = document.createElement("style");
                        g.setAttribute("type", "text/css");
                        g.styleSheet && !g.sheet ?
                            (g.styleSheet.cssText = m) :
                            g.appendChild(document.createTextNode(m));
                        document.body.appendChild(g);
                    }
                }
            };
        f(window, "message", function(a) {
            if (-1 < a.origin.indexOf("googlesyndication.com") ||
                -1 < a.origin.indexOf("eclick.vn") ||
                -1 < a.origin.indexOf("polyad.net") ||
                -1 < a.origin.indexOf("vnexpress.net") ||
                -1 < a.origin.indexOf("ngoisao.net") ||
                -1 < a.origin.indexOf("ione.net")
            ) {
                var c = a.data,
                    d = "string" == typeof c && 0 == c.indexOf("dfp_func::");
                if (d) {
                    if (
                        ((d = c.split("::")),
                            (a = d[1]),
                            "" != a &&
                            window.hasOwnProperty(a) &&
                            "function" === typeof window[a])
                    ) {
                        a = window[a];
                        var b = [];
                        2 < d.length && (b = d[2].split(";"));
                        try {
                            a.apply(window, b);
                        } catch (e) {}
                    }
                } else if ("inpage_google_iframe" === a.data)
                    $("admbackground", "inpage_article_wrap"),
                    a.source.postMessage("setheight:" + t + ":" + C, a.origin);
                else if ("inpage2_google_iframe" === a.data)
                    (d = document.getElementById("inpage2_article_wrap")) ?
                    $("inpage_article2", "inpage2_article_wrap") :
                    $("admbackground", "inpage_article_wrap"),
                    a.source.postMessage("setheight:" + t + ":" + C, a.origin);
                else if ("closeUnderTVC" === a.data)
                    (a = document.getElementById("sis_inimage")),
                    null != a && (a.style.display = "none"),
                    (a = document.getElementById("iFrameUnderImageContainer")),
                    null != a && (a.style.display = "none");
                else if ("inpage_google_iframe_children" === a.data)
                    console && console.log("inpage_google_iframe_children_message");
                else if ("none_inpage_google_iframe" === a.data)
                    (d = document.getElementById("inpage_article_wrap")),
                    (b = (b = d.getElementsByTagName("iframe")) && b[0]),
                    b.setAttribute("class", "iframe_inpage"),
                    (d = [
                        "@media screen and (orientation:portrait) {#admbackground,.inpage_article{height:",
                        t + 60,
                        "px;}#inpage_article_wrap,.iframe_inpage {height:",
                        t,
                        "px;} #inpage_article_wrap{width:100%;}}@media screen and (orientation:landscape) {#admbackground{height:",
                        C + 60,
                        "px;}.inpage_article,#inpage_article_wrap,.iframe_inpage {height:",
                        C,
                        "px;} #inpage_article_wrap{width:",
                        t,
                        "px;}}",
                    ].join("")),
                    (b = document.createElement("style")),
                    b.setAttribute("type", "text/css"),
                    b.styleSheet && !b.sheet ?
                    (b.styleSheet.cssText = d) :
                    b.appendChild(document.createTextNode(d)),
                    document.body.appendChild(b),
                    a.source.postMessage("setheight:" + t + ":" + C, a.origin);
                else if ("popup_google_iframe" === a.data) {
                    var g = v.popup && document.getElementById(v.popup);
                    g &&
                        D(g) &&
                        ((d = g.getElementsByTagName("iframe")),
                            0 < d.length &&
                            ((d = d[0]),
                                d.setAttribute("class", "iframe_dfp_popup"),
                                g.setAttribute("class", "div_dfp_popup"),
                                (document.body.style.overflow = "hidden"),
                                (g.style.cssText =
                                    "display:block;border:none;height:100%;margin:0px auto;padding:0px;position:fixed;visibility:visible;width:100%;background-color:transparent;z-index:9999900;left:0px;top:0px;"),
                                setTimeout(function() {
                                    var a = document.createElement("div");
                                    a.style.cssText =
                                        "position:absolute;right:0;top:30px;width:90px;text-align:center;vertical-align:middle;background-color:#000;background-color:rgba(0,0,0,0.3);color:#fff;text-decoration:none;border:1px solid #222;height:34px;line-height:34px;padding:0px;font-family:arial,helvetica,sans-serif;font-size:13px;font-weight:700;display:block;float:left;z-index:9999999;";
                                    a.innerHTML =
                                        '<span style="width:90px;height:34px">Skip Ad &gt;&gt;<span>';
                                    g.appendChild(a);
                                    f(a, "click", function() {
                                        g.style.display = "none";
                                        g.innerHTML = "";
                                        document.body.style.overflow = "";
                                    });
                                }, 1500),
                                (d = document.createElement("style")),
                                d.setAttribute("type", "text/css"),
                                d.styleSheet && !eStypePopupb.sheet ?
                                (d.styleSheet.cssText =
                                    ".div_dfp_popup, .iframe_dfp_popup{width: 100vw !important;height: 100vh !important;}") :
                                d.appendChild(
                                    document.createTextNode(
                                        ".div_dfp_popup, .iframe_dfp_popup{width: 100vw !important;height: 100vh !important;}"
                                    )
                                ),
                                g.appendChild(d),
                                a.source.postMessage("setheight:" + t + ":" + C, a.origin)));
                } else
                    "close_popup_google_iframe" === a.data &&
                    (a = v.popup && document.getElementById(v.popup)) &&
                    D(a) &&
                    ((a.style.display = "none"),
                        (a.innerHTML = ""),
                        (document.body.style.overflow = ""));
            }
        });
        (function(a) {
            var c;
            document.addEventListener ?
                f(
                    document,
                    "DOMContentLoaded",
                    function h() {
                        y(document, "DOMContentLoaded", h, !1);
                        a();
                    }, !1
                ) :
                document.attachEvent &&
                (f(
                        document,
                        "onreadystatechange",
                        function ra() {
                            "complete" === document.readyState &&
                                (y(document, "onreadystatechange", ra, !1), a());
                        }, !1
                    ),
                    document.documentElement.doScroll &&
                    window === window.top &&
                    (function sa() {
                        if (!ka) {
                            try {
                                document.documentElement.doScroll("left");
                            } catch (c) {
                                setTimeout(sa, 0);
                                return;
                            }
                            a();
                        }
                    })());
            /WebKit/.test(window.navigator.userAgent) &&
                (c = setInterval(function() {
                    /loaded|complete/.test(document.readyState) &&
                        (clearInterval(c), a());
                }, 100));
            f(window, "load", a, !1);
        })(function() {
            if (!ka) {
                ka = !0;
                for (var a in w.tag) {
                    var c = w.tag[a],
                        d = ("" + c.type).toLowerCase();
                    if (a.match(/OV_PC_(.*)_SB_1x1/gi)) {
                        if (!document.getElementById(a)) {
                            var b = document.createElement("div");
                            b.setAttribute("id", a);
                            document.body.appendChild(b);
                        }
                        w.display.push(a);
                    }
                    if ("stickyads" === d) {
                        b = document.createElement("style");
                        b.setAttribute("type", "text/css");
                        b.styleSheet && !b.sheet ?
                            (b.styleSheet.cssText =
                                ".bannerSticky{display: block;background:#E9E9E9;}#frameBannerSticky{display:block;width:auto;height:auto;position:fixed;bottom:0;left: 50%;transform: translateX(-50%);z-index:999}#closeButtonSticky{width:30px;height:30px;background:#333;border-radius: 50%;position:absolute;right:-20px;top:-20px;padding:5px;display:none;}#closeButtonSticky:hover{opacity:0.6;transform:rotate(90deg);transition:0.5s ease;}#closeButtonSticky:before,#closeButtonSticky:after{position:absolute;left:14px;content:' ';height:20px;width:2px;background-color:#FFFFFF;}#closeButtonSticky:before{transform:rotate(45deg);}#closeButtonSticky:after{transform: rotate(-45deg);}") :
                            b.appendChild(
                                document.createTextNode(
                                    ".bannerSticky{display: block;background:#E9E9E9;}#frameBannerSticky{display:block;width:auto;height:auto;position:fixed;bottom:0;left: 50%;transform: translateX(-50%);z-index:999}#closeButtonSticky{width:30px;height:30px;background:#333;border-radius: 50%;position:absolute;right:-20px;top:-20px;padding:5px;display:none;}#closeButtonSticky:hover{opacity:0.6;transform:rotate(90deg);transition:0.5s ease;}#closeButtonSticky:before,#closeButtonSticky:after{position:absolute;left:14px;content:' ';height:20px;width:2px;background-color:#FFFFFF;}#closeButtonSticky:before{transform:rotate(45deg);}#closeButtonSticky:after{transform: rotate(-45deg);}"
                                )
                            );
                        document.body.appendChild(b);
                        var b = document.createElement("div"),
                            e = document.createElement("div"),
                            g = document.createElement("div"),
                            q = document.createElement("div");
                        b.setAttribute("id", "frameBannerSticky");
                        e.setAttribute("class", "bannerSticky");
                        q.setAttribute("id", a);
                        g.setAttribute("id", "closeButtonSticky");
                        g.setAttribute("onclick", "onCloseSticky()");
                        document.body.appendChild(b);
                        b.appendChild(e);
                        b.appendChild(g);
                        e.appendChild(q);
                        e = document.createElement("script");
                        e.text =
                            'function onCloseSticky(){var __frameBannerSticky = document.getElementById("frameBannerSticky");__frameBannerSticky.style.display = "none";}';
                        b.appendChild(e);
                        w.display.push(a);
                    } else if (
                        ("sis_outstream" === a &&
                            0 === parseInt(window.ZONE_ADS) &&
                            1 === parseInt(window.PAGE_DETAIL) &&
                            !u() &&
                            1 === parseInt(window.articleType)) ||
                        ("sis_outstream" === a &&
                            1 === parseInt(window.ZONE_ADS) &&
                            1 === parseInt(window.PAGE_DETAIL) &&
                            !u() &&
                            1 === parseInt(window.articleType) &&
                            "https://vnexpress.net" !== window.base_url)
                    ) {
                        var e = [],
                            d = document.getElementsByClassName("fck_detail"),
                            k,
                            g = (window.location.href || "").indexOf("debug_outstream=1");
                        if (0 < d.length && D(d[0]))
                            if (
                                ((d = d[0]),
                                    d.offsetHeight <
                                    1.5 *
                                    (document.documentElement.clientHeight ||
                                        window.innerHeight ||
                                        window.screen.height))
                            )
                                e.push("M\u00e0n h\u00ecnh chia oustream ng\u1eafn");
                            else if (
                            ((k = d.childNodes),
                                (q = k.length),
                                (b = Math.round(q / 3)),
                                2 < q)
                        ) {
                            for (var m = [], c = 0; c < q; c++)
                                k[c] && 1 === k[c].nodeType && m.push(k[c]);
                            q = m.length;
                            if (
                                (b = Math.round(q / 3)) &&
                                "p" === m[b].tagName.toLowerCase()
                            ) {
                                var n = document.createElement("div"),
                                    l = document.createElement("div"),
                                    p = document.createElement("div");
                                n.setAttribute("id", "divfirst");
                                p.setAttribute("id", "admbackground");
                                p.setAttribute("data-set", "dfp");
                                l.setAttribute("id", "divend");
                                for (c = 0; c < q; c++)
                                    (k = m[c]), c <= b ? n.appendChild(k) : l.appendChild(k);
                                d.innerHTML = "";
                                d.appendChild(n);
                                d.appendChild(p);
                                d.appendChild(l);
                                document.getElementById("admbackground").innerHTML =
                                    '<div id="video_outstream"><style>.txt_ads:before{content: "";width: 100%;height: 1px;position: absolute;margin-top: 7.5px;left: 0;background: #e7e7e7;}</style><div class="txt_ads" style="text-align: center;margin-bottom: 10px;position: relative;line-height: 1.313;color: #333;font: 400 .875rem arial;margin: 10px auto;width: 95%;"><span style="background: #fff;padding: 0 5px;display: inline-block;position: relative;z-index: 1;font: 400 14px arial !important;color: #999!important;">Qu\u1ea3ng c\u00e1o</span></div><div id="sis_outstream" style="margin-bottom: 10px;"></div></div>';
                                w.display.push(a);
                            } else
                                e.push(
                                    "Kh\u00f4ng \u0111\u1ee7 th\u1ebb {p} \u0111\u1ec3 chia Outstream"
                                );
                        } else e.push("childNodes < 2 elment");
                        else
                            e.push(
                                "Kh\u00f4ng x\u00e1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c n\u1ed9i dung \u0111\u1ec3 chia Outstream"
                            );
                        0 < g && 0 < e.length && ((b = e.join(" - ")), console.log(b));
                    }
                    a.match(/O_PC_Detail_(.*)_SR1_160x600/gi) &&
                        (c.sticky = ".bottom_detail");
                    if (
                        "inpage" === d ||
                        "inpage2" === d ||
                        "inread1" === d ||
                        "inread2" === d
                    )
                        (v[d] = a), (S = !0);
                }!v.inpage && v.inpage2 && ((v.inpage = v.inpage2), (v.inpage2 = ""));
                if (1 === parseInt(window.PAGE_DETAIL, 10) && S) {
                    var l = document.getElementById("divend"),
                        n = document.getElementById("divfirst"),
                        p = document.getElementById("admbackground"),
                        r = function() {
                            var a,
                                d,
                                b =
                                document.documentElement.clientHeight ||
                                window.innerHeight ||
                                window.screen.height;
                            J = D(n) && n.offsetHeight > b && l && l.offsetHeight > b;
                            if (D(p)) {
                                var c = document.createElement("style");
                                c.setAttribute("type", "text/css");
                                c.styleSheet && !c.sheet ?
                                    (c.styleSheet.cssText =
                                        '.txt_adbyeclick{text-align:center;margin-bottom:10px;position:relative}.txt_adbyeclick span{background:#fff;padding:0 5px;display:inline-block;position:relative;z-index:1;font:400 14px arial!important;color:#999!important}.txt_adbyeclick:before{content:"";width:100%;height:1px;position:absolute;top:50%;margin-top:-.5px;left:0;background:#e7e7e7}.ad_by_eclick{display:block;width:100%;height:20px;line-height:20px;font-size:11px;text-align:center; background:url("https://s.vnecdn.net/vnexpress/restruct/c/v154/v2/mobile_redesign/images/graphics/Advertising.svg") no-repeat 39% 50%;margin-bottom:5px;border-bottom:1px solid #F4F5F6}') :
                                    c.appendChild(
                                        document.createTextNode(
                                            '.txt_adbyeclick{text-align:center;margin-bottom:10px;position:relative}.txt_adbyeclick span{background:#fff;padding:0 5px;display:inline-block;position:relative;z-index:1;font:400 14px arial!important;color:#999!important}.txt_adbyeclick:before{content:"";width:100%;height:1px;position:absolute;top:50%;margin-top:-.5px;left:0;background:#e7e7e7}.ad_by_eclick{display:block;width:100%;height:20px;line-height:20px;font-size:11px;text-align:center; background:url("https://s.vnecdn.net/vnexpress/restruct/c/v154/v2/mobile_redesign/images/graphics/Advertising.svg") no-repeat 39% 50%;margin-bottom:5px;border-bottom:1px solid #F4F5F6}'
                                        )
                                    );
                                document.body.appendChild(c);
                                d = function(a, d, c) {
                                    v[c] &&
                                        ((d = ""),
                                            (d =
                                                "inpage" === c ?
                                                [
                                                    '<div class="ad_by_eclick">Qu\u1ea3ng c\u00e1o</div><div id="inread_',
                                                    v[c],
                                                    '" style="width:100%;float:left;text-align:center;position: relative !important;" class="inpage_article"><div id="inpage_article_rect"><div id="inpage_article_cont"><div id="inpage_article_wrap"><div id="',
                                                    v[c],
                                                    '" style="position:relative;margin:0 auto;display:block;" class="inpage_article_wrap_ads"></div></div></div></div></div>',
                                                ].join("") :
                                                "inpage2" === c ?
                                                [
                                                    '<div class="ad_by_eclick">Qu\u1ea3ng c\u00e1o</div><div id="inread_',
                                                    v[c],
                                                    '" style="width:100%;float:left;text-align:center;position: relative !important; margin-bottom: 20px;" class="inpage2_article"><div id="inpage2_article_rect"><div id="inpage2_article_cont"><div id="inpage2_article_wrap"><div id="',
                                                    v[c],
                                                    '" style="position:relative;margin:0 auto;display:block;" class="inpage2_article_wrap_ads"></div></div></div></div></div>',
                                                ].join("") :
                                                [
                                                    '<div id="inread_',
                                                    v[c],
                                                    '" style="width:100%;float:left;text-align:center;"><div class="txt_adbyeclick"><span>Qu\u1ea3ng c\u00e1o</span></div><div id="',
                                                    v[c],
                                                    '" style="position:relative;margin:0 auto;display:block;font-size:0;"></div><div class="txt_adbyeclick" style="float:left;width:100%;margin-top:10px;padding-bottom:18px;"></div></div>',
                                                ].join("")),
                                            (a.innerHTML = d),
                                            w.display.push(v[c]),
                                            "inpage" === c &&
                                            0 === parseInt(window.ZONE_ADS) &&
                                            setTimeout(function() {
                                                window.top.postMessage("inpage_google_iframe", "*");
                                            }, 3e3));
                                };
                                var e = !0;
                                J
                                    ?
                                    d(p, "inpage_article", "inpage") :
                                    ((e = !1), d(p, "inread_article_2", "inread2"));
                                c = l.childNodes || [];
                                e &&
                                    3 < c.length &&
                                    l.offsetHeight > 1.5 * b &&
                                    ((b = c.length - Math.ceil(c.length / 2)),
                                        (a = b - 1) &&
                                        c[a] &&
                                        1 === c[a].nodeType &&
                                        "table" === c[a].tagName.toLowerCase() &&
                                        (b = a),
                                        v.inpage2 ?
                                        ((a = document.createElement("div")),
                                            a.setAttribute("id", "inpage_article2"),
                                            a.setAttribute(
                                                "style",
                                                "position: relative; width: 100%;"
                                            ),
                                            l.insertBefore(a, c[b]),
                                            d(a, "inread_article_3", "inpage2"),
                                            (d = document.createElement("div")),
                                            d.setAttribute("class", "clear"),
                                            l.insertBefore(d, c[b])) :
                                        v.inread2 &&
                                        ((a = document.createElement("div")),
                                            a.setAttribute("style", "width:100%;float:left;"),
                                            l.insertBefore(a, c[b]),
                                            d(a, "inread_article_2", "inread2"),
                                            (d = document.createElement("div")),
                                            d.setAttribute("class", "clear"),
                                            l.insertBefore(d, c[b])));
                            }
                        };
                    a = function() {
                        var a = document.getElementById("divend"),
                            d = document.getElementById("divfirst"),
                            c = document.getElementById("admbackground");
                        if (c && D(c)) window.setTimeout(r, 0);
                        else {
                            var b = (window.location.href || "").indexOf("debug_inpage=1"),
                                e = [],
                                f = document.getElementsByClassName(ga);
                            if (
                                0 < f.length &&
                                D(f[0]) &&
                                ((f = f[0]), "short" !== f.getAttribute("data-inpage"))
                            ) {
                                if (
                                    f.offsetHeight <
                                    1.5 *
                                    (document.documentElement.clientHeight ||
                                        window.innerHeight ||
                                        window.screen.height)
                                )
                                    f.setAttribute("data-inpage", "short"),
                                    e.push(
                                        "b\u00e0i ng\u1eafn kh\u00f4ng chia \u0111\u01b0\u1ee3c inpage inread"
                                    );
                                else {
                                    var a = f.childNodes,
                                        g = a.length,
                                        h = Math.round(g / 3);
                                    if (2 < g) {
                                        for (var q = [], h = 0; h < g; h++)
                                            a[h] && 1 === a[h].nodeType && q.push(a[h]);
                                        g = q.length;
                                        h = Math.round(g / 3);
                                        if (!h || "p" !== q[h].tagName.toLowerCase()) {
                                            e.push("inpage next elment is not {p}");
                                            return;
                                        }
                                        d = document.createElement("div");
                                        a = document.createElement("div");
                                        c = document.createElement("div");
                                        d.setAttribute("id", "divfirst");
                                        c.setAttribute("id", "admbackground");
                                        c.setAttribute("data-set", "dfp");
                                        a.setAttribute("id", "divend");
                                        for (var k = 0; k < g; k++) {
                                            var n = q[k];
                                            k <= h ? d.appendChild(n) : a.appendChild(n);
                                        }
                                        f.innerHTML = "";
                                        f.appendChild(d);
                                        f.appendChild(c);
                                        f.appendChild(a);
                                        r();
                                    } else e.push("childNodes < 2 elment");
                                }
                                0 < b &&
                                    0 < e.length &&
                                    ((b = document.createElement("div")),
                                        (e = e.join(" - ")),
                                        (b.innerHTML = e),
                                        f.appendChild(b),
                                        console.log(e));
                            }
                        }
                    };
                    p ? window.setTimeout(r, 0) : window.setTimeout(a, 1e3);
                }
                ia();
                f(window, "scroll", ia);
            }
        });
    }
})();
(function(y, f, A) {
    function P(e) {
        if (!(-1 < A.host.indexOf("ione.net")))
            if ("vm.vnexpress.net" === A.host)
                try {
                    var b = f.getElementById("VM2020_SM_1920x270");
                    if (null !== b) {
                        b.style.width = "100%";
                        b.style.display = "flex";
                        b.style.justifyContent = "center";
                        var x = b.querySelector("iframe");
                        null !== x &&
                            ((x.querySelector("iframe").style.position = "relative"),
                                (x.querySelector("iframe").style.left = "50%"),
                                (x.querySelector("iframe").style.transform = "translateX(-50%)"),
                                (x.querySelector("iframe").style.maxWidth = "unset"));
                    }
                } catch (l) {}
            else if (-1 < A.host.indexOf("ngoisao.net")) {
            if (!0 !== L)
                try {
                    setTimeout(function() {
                        var b = document.getElementById("sis_footershop");
                        null !== b && (b.style.position = "relative");
                    }, 3e3);
                } catch (p) {}
        } else if (-1 < A.host.indexOf("vnexpress.net"))
            if (!0 === L)
                try {
                    var n = f.querySelectorAll(".banner_mobile_300x250");
                    null !== n &&
                        n.forEach(function(b) {
                            b = b.querySelector(".inner_ads");
                            null !== b &&
                                ((b.style.width = "100%"),
                                    (b.style.display = "flex"),
                                    (b.style.flexDirection = "column"),
                                    (b.style.justifyContent = "center"),
                                    (b.style.alignItems = "center"));
                        });
                    var m = f.querySelectorAll(".article_ads");
                    null !== m &&
                        m.forEach(function(b) {
                            0 < b.querySelectorAll(".banner_mobile_300x250").length &&
                                ((b.style.paddingLeft = "0"), (b.style.paddingRight = "0"));
                        });
                } catch (u) {}
            else
                try {
                    setTimeout(function() {
                        var b = document.querySelector("sis_inimage");
                        null !== b &&
                            ((b = b.querySelector("iframe")),
                                null !== b && (b.style.position = "relative"));
                    }, 2e3);
                } catch (g) {}
    }

    function da(e) {
        var b = null;
        try {
            b = e.data.cmd;
        } catch (x) {}
        if (
            e.origin === A.origin ||
            -1 < e.origin.indexOf("googlesyndication.com") ||
            "https://ds.polyad.net" === e.origin ||
            "http://ds.polyad.net" === e.origin ||
            "http://static.eclick.vn" === e.origin ||
            "https://static.eclick.vn" === e.origin ||
            "dfpSetStyle" !== b ||
            "object" !== typeof e.data ||
            "string" !== typeof e.data.type ||
            "string" !== typeof e.data.size ||
            "string" !== typeof e.data.query ||
            "object" !== typeof e.data.params
        )
            try {
                var l = e.data.id,
                    p = e.data.type,
                    n = e.data.size;
                if ("dfp-rmd" === p) wa(e);
                else if ("dfp-large-rmd" === p) {
                    var m = e.data || {};
                    if (e.source && m.params && m.params.action) {
                        var u = f.getElementById("sis_large1"),
                            g = u.getElementsByTagName("iframe"),
                            g = g && g[0],
                            q = g.parentNode,
                            r = document.getElementsByClassName("col-right-top"),
                            r = r && r[0];
                        u.style.width = m.params.width + "px";
                        "dfp_initialize" === m.params.action ?
                            ((ga = m.params.width - m.params.maxWidth),
                                (g.style.width = m.params.maxWidth + "px"),
                                (g.style.height = m.params.height + "px"),
                                (u.style.height = m.params.height + "px"),
                                (u.style.zIndex = 5e6),
                                (q.style.width = ""),
                                (q.style.marginLeft = ga + "px")) :
                            "dfp_expand" === m.params.action ?
                            (console.log("dfp_expand"),
                                console.log(r),
                                (r.style.width = m.params.width + 20 + "px"),
                                (r.style.marginLeft = ga + "px"),
                                (q.style.marginLeft = "")) :
                            "dfp_collapse" === m.params.action &&
                            (console.log("dfp_collapse"),
                                (q.style.marginLeft = ga + "px"),
                                (r.style.marginLeft = ""),
                                (r.style.width = ""));
                    }
                } else if ("InimageWithBottomMedia" === p) {
                    var s = e.data || {},
                        t =
                        document.querySelector('div[id*="_II1_1x1"]') ||
                        document.getElementById("sis_inimage"),
                        v = t.parentNode,
                        B = t.querySelector("iframe");
                    if (!0 !== L)
                        "dfp_collap" === s.params.action ?
                        ((v.style.height = s.params.height + "px"),
                            (B.style.height = T + "px"),
                            (B.style.marginTop = "-" + (T - 100) + "px")) :
                        ((J = s.params.height),
                            isNaN(J) || (J += "px"),
                            (v.style.height = J),
                            (B.style.height = J),
                            (T = v.offsetHeight));
                    else {
                        var z = v.parentNode
                            .querySelector("img")
                            .getBoundingClientRect().height;
                        "dfp_initialize" === s.params.action ?
                            ((J = s.params.height),
                                isNaN(J) && (J = z),
                                (v.style.height = J + "px"),
                                (v.style.marginTop = -J + "px"),
                                (v.style.overflow = "hidden")) :
                            "dfp_collapse" === s.params.action &&
                            ((v.style.height = s.params.height + "px"),
                                (v.style.marginTop = -s.params.height + "px"),
                                (B.style.height = s.params.height + "px"));
                    }
                } else if ("dfp-under-inimage" === p) {
                    var C;
                    if (
                        1 === parseInt(window.articleType) ||
                        (1 === parseInt(window.ZONE_ADS) &&
                            5 === parseInt(window.articleType)) ||
                        "https://e.vnexpress.net" === window.base_url
                    ) {
                        var H = window.top.document.querySelector(
                                ".fck_detail .tplCaption img,.fck_detail .block_thumb_slide_show img.lazy,.fck_detail .fig-picture img.lazy,.fck_detail .item_slide_show *:not(.box_img_video) > img.lazyLoaded,.main_content_detail .item_slide_show div:not(.box_img_video) > img.lazyLoaded,.main_content_detail table.tplCaption img.lazyLoaded,#article_content .block_thumb_slide_show > img.lazyloaded.main_fck_detail .thumb_detail_top img"
                            ),
                            N = document.getElementsByName("its_type")[0];
                        C = !H ||
                            window.top.location.pathname.startsWith("/infographics") ||
                            (N && "photo" === N.content) ?
                            "" :
                            H;
                    } else C = "";
                    var E = C || "";
                    if ("" !== E) {
                        var P =
                            '<div class="embed-container" id="iFrameUnderImageContainer" style="padding-bottom:20%;margin-top:15px;margin-bottom:8px;"><iframe id="iFrameUnderImage" src="' +
                            e.data.ifrUnderImage +
                            '" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" vspace="0" hspace="0" style="z-index:0;text-align:center;min-height:0px;width:100%;display:flex;justify-content:center;transition:none 0s ease 0s;"></iframe></div>';
                        E.closest(".tplCaption")
                            .getElementsByClassName("Image")[0]
                            .insertAdjacentHTML("afterend", P);
                    }
                } else if ("dfp-scroll-bgu" === p) xa(e);
                else if ("dfp-background-sync-u" === p) za(n, e.data.trackingCode);
                else if ("add-dfp-background" === p) {
                    var M = e.data || {};
                    if (null !== M) {
                        var R =
                            '<div class="bg-video-dfp" id="bg-video-dfp" style="width:100%;height:100vh"><img src="' +
                            M.thirdpartyimpressiontracker +
                            '" style="display:none"><iframe id="iframeSource" src="' +
                            M.iframe +
                            '" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" vspace="0" hspace="0" style="width:100%;height:100%;min-height:320px;"></iframe></div>',
                            na = document.getElementById("sync_bgu_and_masthead");
                        null !== na &&
                            (null === document.getElementById("supper_masthead") &&
                                document.getElementById("sis_masthead").remove(),
                                na.insertAdjacentHTML("beforeend", R),
                                window.top.postMessage({
                                        cmd: "dfpSetStyle",
                                        id: "background_sync_u",
                                        type: "dfp-background-sync-u",
                                        size: M.size,
                                        query: "iframe",
                                        params: { display: "block" },
                                    },
                                    "*"
                                ));
                    }
                } else if ("dfp-background-float" === p) ia(e);
                else if ("dfp-masthead-mobile" === p) {
                    var k = n,
                        G = l;
                    void 0 === k && (k = null);
                    void 0 === G && (G = null);
                    E = f.getElementById(W);
                    if (null !== E && !1 !== L) {
                        var I = E.querySelector("iframe"),
                            w = [],
                            D = f.getElementById("banner_top");
                        null === D && (D = E);
                        if (y.innerWidth > y.innerHeight) D.style.display = "none";
                        else {
                            D.style.display = "block";
                            E.style.overflow = "hidden";
                            null !== k &&
                                ("414x207" === k ?
                                    (k = "480x240") :
                                    "414x100" === k && (k = "480x116"),
                                    (w = k.split("x")));
                            var Y = w[0],
                                ka = w[1],
                                oa = 0 === screen.width % 2 ? screen.width : screen.width + 1;
                            I.style.width = oa + "px";
                            var K = Math.round((ka * oa) / Y);
                            I.style.height = (0 === K % 2 ? K : K + 1) + "px";
                            if ("yomedia" === G)
                                try {
                                    var F = E.querySelector("div"),
                                        F = I.parentNode;
                                    F.style.width = "100vw";
                                    F.style.height = "auto";
                                } catch (da) {}
                        }
                    }
                } else if ("dfp-breakspage-mobile" === p) {
                    I = E = 0;
                    if ("414x345" === n)(E = 480), (I = 400);
                    else if ("414x207" === n)(E = 480), (I = 240);
                    else
                        var X = n.split("x"),
                            E = X[0],
                            I = X[1];
                    var S =
                        f.getElementById(ja) ||
                        f.querySelector('div[id*="BP_414x345"]') ||
                        f.getElementById("sis_breakpage");
                    if (null !== S) {
                        var k = S.offsetWidth,
                            G = S.querySelector("iframe"),
                            w = screen.width >= E ? E : screen.width,
                            D = 0 === w % 2 ? w : w + 1,
                            O = Math.round((w * I) / E),
                            O = 0 === O % 2 ? O : O + 1,
                            O = O > I ? I : O,
                            ca = Math.round((k - D) / 2);
                        G.setAttribute(
                            "style",
                            "width: " +
                            D +
                            "px;height: " +
                            O +
                            "px; margin-left: " +
                            ca +
                            "px"
                        );
                    }
                } else if ("OverlayCards" === p) {
                    var fa = e.data || {};
                    if (fa.params) {
                        var ba = 480 <= window.innerWidth ? 480 : window.innerWidth,
                            ha = Math.ceil((ba * fa.params.height) / fa.params.width),
                            $ = document.getElementById("sis_popup");
                        if (null !== $) {
                            var a = $.querySelector("iframe");
                            if (null !== a) {
                                a.setAttribute("class", "iframe_dfp_popup");
                                $.setAttribute("class", "div_dfp_popup");
                                $.style.cssText =
                                    "display:block;border:none;height:" +
                                    ha +
                                    "px;position:fixed;visibility:visible;width:" +
                                    ba +
                                    "px;background-color:transparent;z-index:9999900;left:50%;transform:translateX(-50%);bottom:0px;";
                                var c = [
                                        "@media screen and (orientation:portrait){.div_dfp_popup, .iframe_dfp_popup{width:100vw !important;height:",
                                        ha,
                                        "px !important;}}@media screen and (orientation:landscape){.div_dfp_popup, .iframe_dfp_popup{width:100%;height:",
                                        ha,
                                        "px !important;}}",
                                    ].join(""),
                                    d = document.createElement("style");
                                d.setAttribute("type", "text/css");
                                d.styleSheet && !eStypePopupb.sheet ?
                                    (d.styleSheet.cssText = c) :
                                    d.appendChild(document.createTextNode(c));
                                $.appendChild(d);
                            }
                        }
                    }
                } else if ("setStyleUnderImage" === p) {
                    var h = e.data || {};
                    if (h && h.params) {
                        var ra = isNaN(h.params.width) ?
                            h.params.width :
                            h.params.width + "px",
                            sa = isNaN(h.params.height) ?
                            h.params.height :
                            h.params.height + "px",
                            ta = f.getElementById("iFrameUnderImageContainer");
                        null !== ta && ((ta.style.width = ra), (ta.style.height = sa));
                    }
                } else if ("dfp-overscreen-mobile" === p) va(e);
                else if ("dfp-pushdown-rmd" === p) {
                    var Q = e.data || {},
                        Ga = Q.id || null;
                    if (e.source && Q.params && Q.params.action) {
                        var ua = f.getElementById(Ga);
                        if (null !== ua) {
                            var aa = ua.querySelector("div");
                            if (null !== aa) {
                                var pa = aa.querySelector("iframe");
                                if (null !== pa) {
                                    var Z = Q.params.maxWidth,
                                        Ja = Q.params.maxHeight,
                                        qa = Q.params.width,
                                        V = Q.params.height;
                                    if (
                                        L ||
                                        (isNaN(Z) && void 0 !== Z) ||
                                        (isNaN(qa) && void 0 !== qa)
                                    )
                                        (Z = 480 < window.innerWidth ? 480 : window.innerWidth),
                                        (Z = qa = 0 === Z % 2 ? Z : Z + 1),
                                        (V = (Z * V) / 414),
                                        (V = 0 === V % 2 ? V : Math.ceil(V)),
                                        (aa.style.overflow = "hidden");
                                    "dfp_initialize" === Q.params.action ?
                                        ((ua.parentNode.style.padding = 0),
                                            (aa.style.width = qa + "px"),
                                            (aa.style.height = V + "px"),
                                            (pa.style.width = Z + "px"),
                                            (pa.style.height = Ja + "px")) :
                                        "dfp_expand" === Q.params.action ?
                                        ((aa.style.transition = "height 1s ease"),
                                            (aa.style.height = V + "px"),
                                            (pa.style.height = V + "px")) :
                                        "dfp_collapse" === Q.params.action &&
                                        (aa.style.height = V + "px");
                                }
                            }
                        }
                    }
                } else "dfp-scroll-billboard-changeBg" === p && la(e);
            } catch (Na) {}
    }

    function la(e) {
        var b = e.data || {},
            x = e.source || null;
        if (x && b.params && b.params.action) {
            var l = document.getElementById("sis_breakpage1"),
                p = 0,
                n = function() {
                    var b = l.getBoundingClientRect();
                    0 <= b.top &&
                        0 <= b.left &&
                        b.bottom <=
                        (window.innerHeight || document.documentElement.clientHeight) &&
                        b.right <=
                        (window.innerWidth || document.documentElement.clientWidth) &&
                        0 === p ?
                        (x.postMessage("dfp_billboardIn", "*"), (p = 1)) :
                        l.getBoundingClientRect().top > window.innerHeight &&
                        1 === p &&
                        (x.postMessage("dfp_billboardOut", "*"), (p = 0));
                };
            N(f, "scroll", function() {
                n();
            });
            var m = 2;
            N(y, "message", function(b) {
                b = b.data;
                "object" != typeof b ||
                    "ready" != b.params.action ||
                    ("dfp-scroll-billboard-changeBg" != b.type &&
                        "dfp-scroll-bgu" != b.type) ||
                    (console.log(b.type + " ready"), m--, n());
            });
        }
    }

    function va(e) {
        try {
            var b = e.data || {};
            if (b.params) {
                window.top.postMessage("close_popup_google_iframe", "*");
                var f = b.params.src,
                    l = isNaN(b.params.width) ? b.params.width : b.params.width + "px",
                    p = isNaN(b.params.height) ? b.params.height : b.params.height + "px",
                    n = document.createElement("iframe");
                n.id = "OverScreenMobile_iframe";
                n.src = f;
                n.frameBorder = 0;
                n.style.cssText =
                    "display:block; position: fixed; width: " +
                    l +
                    "; height: " +
                    p +
                    "; bottom:0; z-index: 99990;";
                var m = document.createElement("div");
                m.id = "closeOverBtn";
                m.innerHTML = "\u0110\u00f3ng QC";
                m.style.cssText =
                    "display:block; position: fixed; width: 100px; height: 34px; top:60px; right: 0; z-index: 99999; cursor: pointer; text-align: center; background-color: rgba(0, 0, 0, 0.3); color: rgb(255, 255, 255); text-decoration: none; border: 1px solid rgb(34, 34, 34); line-height: 34px; padding: 0px; font-family: Arial, helvetica, sans-serif; font-size: 13px; font-weight: 700;";
                N(m, "click", function() {
                    n && n.parentNode.removeChild(n);
                    m && m.parentNode.removeChild(m);
                });
                document.body.appendChild(n);
                document.body.appendChild(m);
            }
        } catch (u) {}
    }

    function wa(e) {
        var b = e.data || {};
        if (e.source && b.params && b.params.action)
            if (
                ((u = f.getElementById("rich-media-banner-ads")),
                    (v = f.getElementById("OverLapHiden")),
                    "dfp_initialize" === b.params.action)
            ) {
                if (!R && u)
                    switch (
                        ((R = !0),
                            (t = (t = u.getElementsByTagName("iframe")) && t[0]),
                            (ca = b.params.maxWidth || 0),
                            (K = b.params.width || b.params.maxWidth),
                            (B = b.params.height || b.params.maxHeight),
                            (C = b.params.align),
                            (t.style.width = K + "px"),
                            (t.style.height = B + "px"),
                            (t.style.position = "absolute"),
                            (t.style.pointer = "auto"),
                            (u.style.width = b.params.width + "px"),
                            (u.style.height = b.params.height + "px"),
                            (u.style.position = "fixed"),
                            (u.style.display = "block"),
                            (u.style.pointer = "none"),
                            (u.style.overflow = "hidden"),
                            C)
                    ) {
                        case "BOTTOM_CENTER":
                            u.style.left = "50%";
                            u.style.bottom = 0;
                            u.style.zIndex = 9999;
                            u.style.transform = "translateX(-50%)";
                            t.style.top = "50%";
                            t.style.left = "50%";
                            t.style.transform = "translate(-50%, -50%)";
                            break;
                        case "BOTTOM_RIGHT":
                            u.style.right = 0;
                            u.style.bottom = 0;
                            u.style.zIndex = 9999;
                            t.style.top = b.params.height - B + "px";
                            t.style.left = b.params.width - K + "px";
                            break;
                        case "TOP_RIGHT":
                            (u.style.right = 0),
                            (u.style.top = 0),
                            (u.style.zIndex = 9999),
                            (t.style.top = b.params.height - B + "px"),
                            (t.style.left = b.params.width - b.params.maxWidth + "px"),
                            (t.style.width = b.params.maxWidth + "px");
                    }
            } else if (
            R ||
            "dfp_popup" === b.params.action ||
            "dfp_closePopup" === b.params.action ||
            "dfp_close" === b.params.action
        )
            if ("sync_bgu_and_masthead" === b.params.id)
                "dfp_popup" === b.params.action ?
                ((e =
                        "<iframe id='floatExpand' src='" +
                        b.params.url +
                        "' frameborder='0' scrolling='no' marginwidth='0' marginheight='0' vspace='0' hspace='0' style='width:100%;height:100%;left:50%;position:absolute;transform:translate(-50%, -50%);z-index:1;margin-top:385px;'></iframe>"),
                    f
                    .getElementById("sync_bgu_and_masthead")
                    .insertAdjacentHTML("beforeend", e),
                    (f.getElementById("floatExpand").onload = function() {
                        ba();
                    }),
                    (f.getElementById("iframeFloat").style.display = "none")) :
                (f.getElementById("floatExpand").remove(),
                    (f.getElementById("iframeFloat").style.display = "block"));
            else if ("dfp_popup" === b.params.action)
            u.insertAdjacentHTML(
                "afterend",
                "<iframe id='iframePopup' class='subpixel-fix' src=" +
                b.params.url +
                " frameborder='0' scrolling='no' marginwidth='0' marginheight='0' vspace='0' hspace='0' style='width:100%;height:100%;top:50%;left:50%;position:fixed;transform:translate(-50%, -50%);z-index:5000002;'></iframe>"
            ),
            (v.style.display = "block"),
            (f.getElementById("iframePopup").onload = function() {
                ba();
            });
        else if ("dfp_closePopup" === b.params.action)
            (e = f.getElementById("iframePopup")),
            null !== e && (e.style.display = "none"),
            (v.style.display = "none");
        else if ("dfp_close" === b.params.action)
            (e = f.getElementById("rich-media-banner-ads")),
            null !== e && (e.style.display = "none");
        else
            switch (
                ((u.style.width = b.params.width + "px"),
                    (u.style.height = b.params.height + "px"),
                    B >= b.params.height && (t.style.top = b.params.height - B + "px"),
                    K >= b.params.width && (t.style.left = b.params.width - K + "px"),
                    C)
            ) {
                case "BOTTOM_CENTER":
                    "dfp_expand" === b.params.action ?
                        ((u.style.bottom = 0),
                            (t.style.transform = "translate(-50%, -50%)"),
                            (t.style.top = "50%"),
                            (t.style.left = "50%")) :
                        "dfp_collapse" === b.params.action &&
                        ((u.style.bottom = 0), (t.style.transform = "none"));
                    break;
                case "TOP_RIGHT":
                    t.style.left =
                        "dfp_collapse" === b.params.action ?
                        b.params.width - ca + "px" :
                        "0px";
            }
    }

    function ba() {
        document.querySelectorAll(".subpixel-fix").forEach(function(e) {
            var b = window.getComputedStyle(e),
                f;
            "undefined" !== typeof DOMMatrix
                ?
                (f = new DOMMatrix(b.transform)) :
                "undefined" !== typeof CSSMatrix ?
                (f = new CSSMatrix(b.transform)) :
                "undefined" !== typeof MSCSSMatrix ?
                (f = new MSCSSMatrix(b.transform)) :
                "undefined" !== typeof WebKitCSSMatrix &&
                (f = new WebKitCSSMatrix(b.webkitTransform));
            b = f.m41;
            f = f.m42;
            if (b % 2 || f % 2)
                e.style.transform =
                "translate(" + b.toFixed(0) + "px," + f.toFixed(0) + "px)";
        });
    }

    function xa(e) {
        var b = e.data || {},
            x = e.source || null;
        if (x && b.params && b.params.action && "ready" === b.params.action) {
            var l = "";
            b.params && b.params.id ?
                (l = f.getElementById(b.params.id)) :
                null !== f.getElementById("wrap-main-nav") ?
                (l = f.getElementById("wrap-main-nav")) :
                null !== f.getElementById("bgWhite") &&
                (l = f.getElementById("bgWhite"));
            if (l) {
                var p = 0;
                e = function() {
                    var b = l.getBoundingClientRect();
                    2 !== p && 50 >= b.top ?
                        ((p = 2), x.postMessage("dfp_showFloatBanner,0,0", "*")) :
                        1 !== p &&
                        50 < b.top &&
                        ((p = 1), x.postMessage("dfp_hideFloatBanner,0,0", "*"));
                };
                N(y, "scroll", e, !1);
                e();
            }
        }
    }

    function ia(e) {
        var b = f.getElementById("supper_masthead");
        b.style.padding = "0px";
        var b = b.getElementsByTagName("iframe")[0],
            x = 1920,
            l = 270;
        e.data.params.width &&
            e.data.params.height &&
            ((x = e.data.params.width), (l = e.data.params.height));
        b.style.width = x + "px";
        b.style.height = l + "px";
        b = f.getElementById("sync_bgu_and_masthead");
        b.insertAdjacentHTML(
            "beforeend",
            '<iframe id="iframeFloat" src="' +
            e.data.backgroundFloat +
            '" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" vspace="0" hspace="0" style="width:100%;height:100%;z-index:0;margin-top: 20px;"></iframe>'
        );
        e = b.querySelectorAll("iframe")[0];
        b.style.display = "block";
        e.style.position = "absolute";
        e.style.left = "50%";
        e.style.width = "100vw";
        e.style.transform = "translateX(-50%)";
        f.querySelector("body").style.backgroundColor = "#ffffff";
        var p = f.getElementById("iframeFloat");
        null === f.getElementById("bgWhite") &&
            b
            .querySelector("div")
            .insertAdjacentHTML(
                "beforeend",
                '<div id="bgWhite" style="width:100vw;height:100vh;max-width:1020px;z-index:-1;position:fixed;top:0px;left:50%;transform:translateX(-50%);background-color:#fff"></div>'
            );
        e = function() {
            var b = f.getElementById("bgWhite"),
                e = f.getElementById("wrap-main-nav").getBoundingClientRect(),
                l = f.querySelectorAll(".clickTracking");
            if (null !== l)
                for (var g = 0; g < l.length; g++) {
                    var q = l[g];
                    q.style.position = "fixed";
                    q.style.top = "0";
                    q.style.zIndex = "0";
                }
            f.body.scrollTop < e.top || f.documentElement.scrollTop < e.top ?
                ((p.style.position = "absolute"),
                    (p.style.bottom = null),
                    (p.style.zIndex = "0"),
                    (b.style.position = "absolute"),
                    (b.style.zIndex = "-1")) :
                ((p.style.position = "fixed"),
                    (p.style.top = null),
                    (p.style.bottom = "-40px"),
                    (p.style.zIndex = "0"),
                    (b.style.zIndex = "-1"),
                    (b.style.position = "fixed"));
        };
        N(y, "scroll", e, !1);
        e();
    }

    function za(e, b) {
        var x = f.getElementById("background_left_right"),
            l = f.getElementById("bgWhite");
        if (null !== x) {
            var x = 1e3,
                p = f
                .getElementById("background_left_right")
                .querySelectorAll("iframe")[0];
            try {
                var n = f.getElementsByClassName("container");
                if (0 < n.length)
                    var m = n[0].getBoundingClientRect(),
                        x = Math.max(x, parseInt(m.width));
                p.style.position = "fixed";
                p.style.top = "0";
                p.style.left = "0";
                p.style.width = "100%";
                p.style.height = "100%";
                p.style.zIndex = "-1";
            } catch (u) {}
            l ||
                ((l = f.createElement("div")),
                    l.setAttribute("id", "bgWhite"),
                    l.setAttribute("class", "bgWhite"),
                    l.setAttribute(
                        "style",
                        "width:100vw;height:100vh;max-width:1020px;z-index:-1;position:fixed;top:0px;left:50%;transform:translateX(-50%);background-color:#fff"
                    ),
                    p.parentNode.parentNode.appendChild(l));
        } else if (
            ((x =
                    f.getElementById("sync_bgu_and_masthead") ||
                    f.getElementById("background_sync_u")),
                null !== x)
        ) {
            var g = x.querySelectorAll("iframe")[0],
                n = f.querySelector('meta[name="tt_category_id"]'),
                q = "";
            n && (q = n.content);
            n = A.pathname.replace("/", "").replace("/", "");
            m = "vaccine" === n ? 1 : -1;
            if (-1 !== ("world-cup-2022" === n ? 1 : -1) ||
                -1 !== ("sea-games-2019" === n ? 1 : -1) ||
                (-1 !== ("u23-chau-a-2020" === n ? 1 : -1)) |
                (-1 !== ("dich-viem-phoi-corona" === n ? 1 : -1))
            ) {
                if (-1 !== A.pathname.indexOf("infographics")) {
                    console.log("infographics sea-games-2019");
                    return;
                }
                f.getElementById("wrapper_footer").style.position = "relative";
                f.getElementById("wrapper_footer").style.top = "82px";
            }
            var r = e || "0px",
                s = 0;
            if (
                "ione.net" === A.host ||
                "ione.vnexpress.net" === A.host ||
                "demo.ione.net" === A.host
            )
                try {
                    s = 237;
                    "250px" === r
                        ?
                        ((r = 247), (s = 367)) :
                        "220px" === r ?
                        ((r = 217), (s = 337)) :
                        (r = 117);
                    g.style.position = "absolute";
                    g.style.left = "50%";
                    g.style.width = "100vw";
                    g.style.height = "calc(100vh + " + r + "px)";
                    g.style.transform = "translateX(-50%)";
                    x.style.height = r + "px";
                    x.style.display = "block";
                    l ||
                        ((l = f.createElement("div")),
                            l.setAttribute("id", "bgWhite"),
                            l.setAttribute("class", "bgWhite"),
                            l.setAttribute(
                                "style",
                                "width:100vw;height:100vh;pointer-events:none;max-width:1130px;z-index:0;position:absolute;top:" +
                                s +
                                "px;left:50%;transform:translateX(-50%);background-color:#fff"
                            ),
                            g.parentNode.parentNode.appendChild(l));
                    y.onscroll = function() {
                        var b = f.getElementById("bgWhite");
                        f.body.scrollTop > r || f.documentElement.scrollTop > r ?
                            ((g.style.position = "fixed"),
                                (g.style.top = null),
                                (g.style.bottom = "-100px"),
                                (g.style.zIndex = "0"),
                                (b.style.zIndex = "0")) :
                            ((g.style.position = "absolute"),
                                (g.style.bottom = null),
                                (g.style.zIndex = "0"));
                        f.body.scrollTop > s || f.documentElement.scrollTop > s ?
                            ((b.style.position = "fixed"), (b.style.top = "0")) :
                            ((b.style.position = "absolute"), (b.style.top = s + "px"));
                        b.style.zIndex = "0";
                    };
                    var t = f.querySelector("footer");
                    null !== t && (t.style.position = "relative");
                    var v = document.getElementById("VN_PC_ione_Home_FB_970x250");
                    null !== v && (v.style.position = "relative");
                } catch (B) {}
            else if ("ngoisao.net" === A.host || "demo.ngoisao.net" === A.host)
                try {
                    s = 237;
                    "250px" === r
                        ?
                        ((r = 247), (s = 367)) :
                        "220px" === r ?
                        ((r = 217), (s = 337)) :
                        (r = 117);
                    var z = f.getElementById("bg-video-dfp");
                    null !== z && (z.style.height = r + "px");
                    g.style.position = "absolute";
                    g.style.top = "117px";
                    g.style.left = "50%";
                    g.style.width = "100vw";
                    g.style.height = "calc(100vh + " + r + "px)";
                    g.style.transform = "translateX(-50%)";
                    f.getElementById("breadcrumb") || (x.style.height = r + "px");
                    x.style.display = "block";
                    f.querySelector("body").style.backgroundColor = "#ffffff";
                    var C = f.querySelector("footer");
                    null !== C &&
                        ((C.style.maxWidth = "1100px"), (C.style.margin = "0 auto"));
                    l ||
                        ((l = f.createElement("div")),
                            l.setAttribute("id", "bgWhite"),
                            l.setAttribute("class", "bgWhite"),
                            l.setAttribute(
                                "style",
                                "width:100vw;height:100vh;pointer-events:none;max-width:1130px;z-index:0;position:absolute;top:" +
                                s +
                                "px;left:50%;transform:translateX(-50%);background-color:#fff"
                            ),
                            g.parentNode.parentNode.appendChild(l));
                    var H = f.getElementById("pagination");
                    null !== H && (H.style.position = "relative");
                    y.onscroll = function() {
                        var b = f.getElementById("bgWhite");
                        f.body.scrollTop > r || f.documentElement.scrollTop > r ?
                            ((g.style.position = "fixed"),
                                (g.style.top = null),
                                (g.style.bottom = "-117px"),
                                (g.style.zIndex = "0"),
                                (b.style.zIndex = "0")) :
                            ((g.style.position = "absolute"),
                                (g.style.top = "117px"),
                                (g.style.bottom = null),
                                (g.style.zIndex = "0"));
                        f.body.scrollTop > s || f.documentElement.scrollTop > s ?
                            ((b.style.position = "fixed"), (b.style.top = "0")) :
                            ((b.style.position = "absolute"), (b.style.top = s + "px"));
                        b.style.zIndex = "0";
                    };
                } catch (J) {}
            else if ("vhome.vnexpress.net" === A.host)
                try {
                    s = 237;
                    "250px" === r
                        ?
                        ((r = 247), (s = 367)) :
                        "220px" === r ?
                        ((r = 217), (s = 337)) :
                        (r = 117);
                    g.style.position = "absolute";
                    g.style.top = "70px";
                    g.style.left = "50%";
                    g.style.width = "100vw";
                    g.style.height = "calc(100vh + " + r + "px)";
                    g.style.transform = "translateX(-50%)";
                    x.style.height = r + "px";
                    x.style.display = "block";
                    var E = f.querySelector("footer");
                    null !== E && (E.style.position = "relative");
                    l ||
                        ((l = f.createElement("div")),
                            l.setAttribute("id", "bgWhite"),
                            l.setAttribute("class", "bgWhite"),
                            l.setAttribute(
                                "style",
                                "width:100vw;height:100vh;pointer-events:none;max-width:1130px;z-index:0;position:absolute;top:" +
                                s +
                                "px;left:50%;transform:translateX(-50%);background-color:#fff"
                            ),
                            g.parentNode.parentNode.appendChild(l));
                    y.onscroll = function() {
                        var b = f
                            .getElementById("sync_bgu_and_masthead")
                            .querySelectorAll("iframe")[0],
                            e = f.getElementById("bgWhite");
                        f.body.scrollTop > r || f.documentElement.scrollTop > r ?
                            ((b.style.position = "fixed"),
                                (b.style.top = null),
                                (b.style.bottom = "-100px"),
                                (b.style.zIndex = "0"),
                                (e.style.zIndex = "0")) :
                            ((b.style.position = "absolute"),
                                (b.style.top = "70px"),
                                (b.style.bottom = null),
                                (b.style.zIndex = "0"));
                        f.body.scrollTop > s || f.documentElement.scrollTop > s ?
                            ((e.style.position = "fixed"), (e.style.top = "0")) :
                            ((e.style.position = "absolute"), (e.style.top = s + "px"));
                        e.style.zIndex = "0";
                    };
                } catch (L) {}
            else if (-1 < A.host.indexOf("vnexpress.net") ||
                "wcoin.fpt.com.vn" === A.host ||
                "demo.eclick.vn" === A.host
            )
                try {
                    s = 237;
                    switch (r) {
                        case "250px":
                            r = 247;
                            s = 350;
                            break;
                        case "220px":
                            r = 217;
                            s = 345;
                            break;
                        case "200px":
                            r = 198;
                            s = 300;
                            break;
                        case "0px":
                            s = r = 0;
                            break;
                        default:
                            r = 117;
                    }
                    t = !1;
                    if (
                        "1004554" === q ||
                        "1004555" === q ||
                        "1004556" === q ||
                        "1004557" === q ||
                        "1004558" === q ||
                        "1004540" === q ||
                        "1004541" === q ||
                        "1004542" === q ||
                        "1004543" === q ||
                        "1004538" === q ||
                        "1004532" === q ||
                        "1004530" === q ||
                        "1004530" === q ||
                        "1004531" === q ||
                        "1004692" === q ||
                        "1004693" === q ||
                        "1004694" === q ||
                        "1004695" === q ||
                        "1004696" === q ||
                        "1004697" === q ||
                        "1004553" === q
                    )
                        t = !0;
                    1 === parseInt(window.PAGE_DETAIL) &&
                        ((p = f.querySelector('meta[name="liston_category"]')),
                            (v = ""),
                            p &&
                            ((v = p.content), !1 === t && -1 < v.indexOf("1004692") && (t = !0)));
                    g.style.position = "absolute";
                    g.style.left = "50%";
                    g.style.width = "100vw";
                    g.style.height = "calc(100vh + " + r + "px)";
                    g.style.transform = "translateX(-50%)";
                    x.style.display = "block";
                    x.style.height = r + "px";
                    f.querySelector("body").style.backgroundColor = "#ffffff";
                    var M = f.querySelector("footer");
                    if (-1 !== m || !0 === t) {
                        null !== M && (M.style.maxWidth = "1140px");
                        var K = f.getElementById("wrapper_footer");
                        null !== K && (K.style.zIndex = "1");
                    } else
                        null !== M &&
                        ((M.style.maxWidth = "1130px"), (M.style.margin = "0 auto"));
                    l
                        ?
                        (l.style.top = s + "px") :
                        ((l = f.createElement("div")),
                            l.setAttribute("id", "bgWhite"),
                            l.setAttribute("class", "bgWhite"),
                            l.setAttribute(
                                "style",
                                "width:100vw;pointer-events:none;height:100vh;max-width:1130px;z-index:0;position:absolute;top:" +
                                s +
                                "px;left:50%;transform:translateX(-50%);background-color:#fff"
                            ),
                            g.parentNode.parentNode.appendChild(l));
                    N(
                        y,
                        "scroll",
                        function() {
                            var b = f.getElementById("bgWhite");
                            f.body.scrollTop > r || f.documentElement.scrollTop > r ?
                                ((g.style.position = "fixed"),
                                    (g.style.top = null),
                                    (g.style.bottom =
                                        "1004565" === q || "1004571" === q ? "-50px" : "-101px"),
                                    (g.style.zIndex = "0"),
                                    (b.style.zIndex = "0")) :
                                ((g.style.position = "absolute"),
                                    (g.style.bottom = null),
                                    (g.style.zIndex = "0"));
                            var e = f.querySelectorAll(".clickTracking");
                            if (null !== e)
                                for (var k = 0; k < e.length; k++) {
                                    var l = e[k];
                                    l.style.position = "fixed";
                                    l.style.top = "0";
                                    l.style.zIndex = "0";
                                }
                            f.body.scrollTop > s || f.documentElement.scrollTop > s ?
                                ((b.style.position = "fixed"), (b.style.top = "0")) :
                                ((b.style.position = "absolute"), (b.style.top = s + "px"));
                            b.style.zIndex = "0";
                        }, !1
                    );
                    var F = f.getElementsByClassName("top-detail");
                    F &&
                        F[0] &&
                        ((F = F[0]),
                            (F.style.backgroundColor = "transparent"),
                            (F.style.border = "none"));
                    if (-1 !== n.indexOf("tam-su")) {
                        var k = f.getElementsByClassName("section_folder_tamsu");
                        k && k[0] && (k[0].style.backgroundColor = "transparent");
                        var G = f.getElementsByClassName("pt0");
                        G && G[0] && (G[0].style.backgroundColor = "transparent");
                    }
                    var I = f.getElementsByClassName("section_topstory");
                    I && I[0] && (I[0].children[0].style.backgroundColor = "#fff");
                } catch (w) {}
        }
    }

    function F() {
        if (!0 === L) {
            var e = f.getElementById("banner_top");
            null === e && (e = f.getElementById(W));
            e.style.display = y.innerWidth > y.innerHeight ? "none" : "block";
            e = document.getElementById("sis_popup");
            null !== e &&
                null !== e.querySelector("iframe") &&
                (e.style.display =
                    window.innerWidth > window.innerHeight ? "none" : "block");
        }
    }

    function X() {
        setTimeout(function() {
            F();
        }, 1e3);
    }
    y.mobilecheck = function() {
        var e = !1,
            b = navigator.userAgent || navigator.vendor || y.opera;
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                b
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                b.substr(0, 4)
            )
        )
            e = !0;
        return e;
    };
    var L = y.mobilecheck();
    P();
    var N = function(e, b, f, l) {
            e.addEventListener ?
                e.addEventListener(b, f, !!l) :
                e.attachEvent ?
                e.attachEvent("on" + b, f) :
                (e["on" + b] = f);
        },
        W = "sis_masthead",
        ja = "breakspage_mobile",
        K = 0,
        B = 0,
        R = !1,
        u = null,
        t = null,
        C = null,
        v = null,
        S = {};
    N(y, "message", function(e) {
        var b = e.data;
        "object" == typeof b &&
            "dfp-rmd" == b.type &&
            "dfp_localConnection" == b.params.action &&
            (b.params.message ?
                S[b.params.id].postMessage(b.params.message, "*") :
                (S[b.params.id] = e.source));
    });
    var J = 0,
        T = 0,
        ga = 0,
        ca = 0;
    y.addEventListener ?
        (addEventListener("message", da, !1),
            addEventListener("resize", F, !1),
            addEventListener("orientationchange", X, !1)) :
        y.attachEvent ?
        (attachEvent("onmessage", da),
            attachEvent("onresize", F),
            attachEvent("onorientationchange", X)) :
        ((y.onmessage = da), (y.onresize = F), (y.onorientationchange = X));
    "complete" === f.readyState ?
        P() :
        y.addEventListener ?
        y.addEventListener("load", P, !1) :
        y.attachEvent("onload", P);
})(window, document, window.location);