const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = secp.utils.randomPrivateKey();
const publicKey = secp.getPublicKey(privateKey);

console.log(
  `Private key  is : ${toHex(privateKey)} \n public key is : ${toHex(
    publicKey
  )}`
);

console.log(`public address is : ${toHex(publicKey).slice(1).slice(-20)}`);
