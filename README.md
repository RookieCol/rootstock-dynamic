# Embedded Wallet in Rootstock using Dynamic

> "Building the future of finance, one line of code at a time."

**⚠️ Warning: This is a starter kit designed for hackathons and rapid prototyping. It is intended for educational and experimental purposes only. Use it at your own risk, and ensure thorough testing before deploying in production environments.**

This project leverages **wagmi** hooks for seamless wallet connection, balance retrieval, token transfers, and message signing, making it easy to integrate Web3 functionality into your Next.js applications. The **wagmi** library provides essential hooks for interacting with wallets like MetaMask and WalletConnect, allowing developers to focus on building their dApps rather than managing low-level blockchain interactions.

For more details on **Embedded Wallets**, explore the official [Dynamic Embedded Wallets Documentation](https://www.dynamic.xyz/features/embedded-wallets), which offers further insights into wallet management and features.

To get started, you’ll need to create an environment ID for your Dynamic integration. Follow the guide on [Setting up Dynamic](https://www.dynamic.xyz/get-started) to configure your environment and begin building with **wagmi** and **Dynamic**.
## Features

- **Wallet Connection**: Easily connect wallets such as MetaMask and WalletConnect.
- **Balances**: Retrieve balances for rBTC, tRIF, and DOC tokens on the Rootstock Testnet.
- **Transfers**: Transfer rBTC, tRIF, and DOC tokens between addresses.
- **Sign Messages**: Sign and verify messages using the connected wallet.
- **Rootstock Testnet**: Preconfigured for the Rootstock Testnet.

## Prerequisites

Ensure that you have the following tools installed:

- **Node.js** (v19.x or later)
- **Bun** (v1.1.x or later) or **Yarn** (recommended for Next.js project)

### Dependencies

The project uses the following packages:

- **Next.js**: Server-rendered React framework.
- **wagmi**: React hooks for Web3 interactions.
- **viem**: For interacting with contracts on the Rootstock blockchain.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/RookieCol/rootstock-dynamic
cd rootstock-dynamic
```

### 2. Install Dependencies

You can choose either Bun or Yarn to install the required packages:

Using **Bun**:

```bash
bun install
```

Or with **Yarn**:

```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project to define environment variables:

```bash
mv .env.local .env.local
```

Add the following content to `.env.local`:

```bash
NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=
```

### 4. Run the Development Server

Start the development server using Bun or Yarn:

Using **Bun**:

```bash
bun dev
```

Or with **Yarn**:

```bash
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the project in your browser.

## Project Structure

The folder structure of the project is as follows:

```
dynamic-web3-tool/
├── components/
│   ├── WalletConnectButton.tsx      // Wallet connection button
│   ├── Balances.tsx                  // Component for displaying token balances
│   ├── Transfer.tsx                 // Component for transferring tokens
│   ├── SignMessage.tsx              // Component for signing messages
└── package.json
```

## How to Use

1. **Connect Wallet**: Use the `WalletConnectButton` component to connect your wallet.
2. **Retrieve Balances**: Use the `Balance` component to display balances for rBTC, tRIF, and DOC tokens.
3. **Transfer Tokens**: The `Transfer` component allows you to transfer any of the supported tokens.
4. **Sign Messages**: Use the `SignMessage` component to sign arbitrary messages and verify signatures.



## Contributors

- **rookiecol** ([@rookiecol](https://github.com/rookiecol))
- **flash**([@flash](https://github.com/chrisarevalo11))

## Troubleshooting

- **Invalid Contract Address**: Ensure the contract addresses are correctly set in the `.env.local` file.
- **RPC Connection Issues**: Verify that the RPC URLs are reachable and correct.
- **Wallet Connection Issues**: Check if MetaMask is installed and the wallet is connected to the Rootstock Testnet.



