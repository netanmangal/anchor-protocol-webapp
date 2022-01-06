const { AnchorEarn, CHAINS, NETWORKS } = require("@anchor-protocol/anchor-earn");
const { mnemonic } = require("../config.json");

const anchorEarn = new AnchorEarn({
    chain: CHAINS.TERRA,
    network: NETWORKS.BOMBAY_12,
    mnemonic: mnemonic,
    address: 'terra1xmqftawktld0k0rvrxyapa4qkh58z790ug65td'
});

module.exports.anchorEarn = anchorEarn;