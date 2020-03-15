require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remind hole hidden problem bridge giant'; 
let testAccounts = [
"0x9efc3e1e70c68ef542a03b4de4c78861b3d891081d6acfae848b855864122172",
"0x68be88cee336902f9ab7e15a6b49ca00d9c786e2cbd79a3bc3c7f2592640ca05",
"0xa013629b93dba04beff1d94cde07ca0bfdfc80491cf8b3112848de21e1796324",
"0xac00fb1334f274815392ac03e66ed5737db9217ba4a02647d81a12484384b274",
"0x1f9b3bed93d47fb057334f5fb64612cfb2bd162caee856df18251e592612329a",
"0xef644cdb07a63daf2dccbf90334d0f14e124e26fe68b5fdeda02fc53c173166b",
"0xb6c87ad5e3416f46ade8980985e7c6fcfffd7ad70fe3769c621df28de9bcf87c",
"0x517d7f4626cfd053ace055745de1dfae46ec4f7b76415b585175aad023262472",
"0xd779c0a1a6e9e8226b7673c3203ea4ba284f509755b96433256d842cf154457d",
"0xd9abd12d87515d6dcc29b985ebc8ad50db2f310ca51f6f0adffac7d7f6bc775c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
