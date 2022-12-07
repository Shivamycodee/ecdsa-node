## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions

For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4

### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder
2. Run `npm install` to install all the depedencies
3. Run `node index` to start the server

The application should connect to the default server port (3042) automatically!

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

Private key is : 37f231f734b5910745738c0b8053c52428909781b50f6eb7d3d574310ca0a47c
public key is : 04047801c523448679b0d935da0ffddee24b9d2b48d0a4c99d3518687dcf69996751ceb6d1e6add25bf40501dd62080c1de0d28406de46370cf43090950ed90858
public address is : 370cf43090950ed90858

Private key is : 9011ddd875778190f7f7624baf914b4f6d665d96bf3e1072dd5ea0bea7d700dd
public key is : 042e033fe11eb0798093cb967a4b144f9c6d591b1a69c0053efe98be8170f0c610dde4f2ecd287d0cd32a3cde1e90d4c22bf1aae2c6a4691166c2db57547781ce3
public address is : 91166c2db57547781ce3

Private key is : 77a18b929f4d54c3fc06914575c0bf1cedf6acc7f54ffdc8a2de6a99aa266ba7
public key is : 04b1996d6a2d24d842b33e63ebb3856c43462283c4d94173e3b4f1b48a4add2dde445da100b5a734864d6cb3ae46b1d589c6afa7574ad18d24340e79addf4f14f3
public address is : 8d24340e79addf4f14f3
