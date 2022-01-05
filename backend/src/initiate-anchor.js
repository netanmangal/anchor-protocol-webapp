const { AnchorEarn, CHAINS, NETWORKS } = require("@anchor-protocol/anchor-earn");

const anchorEarn = new AnchorEarn({
    chain: CHAINS.TERRA,
    network: NETWORKS.BOMBAY_12,
    mnemonic: 'glory insane swamp acquire cable baby ozone pull tissue awake crystal knee sketch kangaroo mirror tree bamboo invite lab over resource lion deal film',
    address: 'terra1xmqftawktld0k0rvrxyapa4qkh58z790ug65td'
});

module.exports.anchorEarn = anchorEarn;