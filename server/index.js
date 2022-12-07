const express = require("express");
const app = express();
const cors = require("cors");

const secp = require("ethereum-cryptography/secp256k1");
const utf8ToBytes = require("ethereum-cryptography/utils");
const keccak = require("ethereum-cryptography/keccak");
const getRandomBytes = require("ethereum-cryptography/random");

const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "04047801c523448679b0d935da0ffddee24b9d2b48d0a4c99d3518687dcf69996751ceb6d1e6add25bf40501dd62080c1de0d28406de46370cf43090950ed90858": 100,
  "042e033fe11eb0798093cb967a4b144f9c6d591b1a69c0053efe98be8170f0c610dde4f2ecd287d0cd32a3cde1e90d4c22bf1aae2c6a4691166c2db57547781ce3": 50,
  "04b1996d6a2d24d842b33e63ebb3856c43462283c4d94173e3b4f1b48a4add2dde445da100b5a734864d6cb3ae46b1d589c6afa7574ad18d24340e79addf4f14f3": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

function generatePrivateKey() {
  let bytes = keccak(getRandomBytes());
}

function hashMessage(message) {
  return keccak(utf8ToBytes(message));
}

function RecoverPublicKey(message, signature, recoverBit) {
  let messageHash = hashMessage(message);
  return secp.recoverPublicKey(messageHash, signature, recoverBit);
}

function signMessage(message) {
  let messageHash = hashMessage(message);
  return secp.sign(messageHash, PRIVATE_KEY, { recoverBit: true });
}
