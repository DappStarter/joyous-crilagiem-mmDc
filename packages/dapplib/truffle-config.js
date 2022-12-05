require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy random situate collect gesture deputy flock swamp'; 
let testAccounts = [
"0x0ec02047909da3e2f49f5218d099b3460376b06f09cf1b6d783e199f10413b74",
"0x3017d44581f30d475cdb7ebd5ac0a0ac652b1be6e495c60a8c7e80143ce7a5dd",
"0x61b581fc9dee725c01a2a8dbd3949dd12bc256706fae7808fd911a8c459d1e53",
"0x316c6770121f6e5fd6263ac76b9bb14360a2f5abf48a680d4303af7906ef2b4b",
"0x5ce7aa7d5fda674abcb70d11edd590ab512dcc64b08f4e43faabe5b76c697142",
"0x059ce59855adeb554a97e96118152745b4e020f530da58dcafa605339138a302",
"0xbfb6369b5e542bbfcb3323995a81d0b54fa8c6ff84c8fbfc3bfe0c5c1d9f01ac",
"0x203b48610a5a11b1f159dfa33907823c607ba1c14d0f542ab446fecf494548dd",
"0x963a432138455a09b3d021543c4472d1d180ba065ebe8796e437d5336b3d30d9",
"0xb0a716bac23d65dfb91e49c0043835aea92dac4357aa6fc0e96448eb440d2d9c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

