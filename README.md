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
mv .env.local.example .env.local
```

Add the following content to `.env.local`:

```bash
NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=
```

You can get your environment ID from the [Dynamic dashboard](https://app.dynamic.xyz/dashboard/overview).

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
│   ├── Balances.tsx                  // Component for displaying token balances
│   ├── Transfer.tsx                 // Component for transferring tokens
│   ├── SignMessage.tsx              // Component for signing messages
└── package.json
```

## How to Use

1. **Connect Wallet**: Use the `DynamicWidget` component to connect your wallet via social login or EOA.
2. **Retrieve Balances**: Use the `Balance` component to display balances for rBTC, tRIF, and DOC tokens.
3. **Transfer Tokens**: The `Transfer` component allows you to transfer any of the supported tokens.
4. **Sign Messages**: Use the `SignMessage` component to sign arbitrary messages and verify signatures.

## Contributors

- **rookiecol** ([@rookiecol](https://github.com/rookiecol))
- **flash** ([@flash](https://github.com/chrisarevalo11))

## Troubleshooting

- **Invalid Contract Address**: Ensure the contract addresses are correctly set in the `.env.local` file.
- **RPC Connection Issues**: Verify that the RPC URLs are reachable and correct.
- **Wallet Connection Issues**: Check if MetaMask is installed and the wallet is connected to the Rootstock Testnet.

## Contributing

We welcome contributions from the community. Please fork the repository and submit pull requests with your changes. Ensure your code adheres to the project's main objective.

## Support

For any questions or support, please open an issue on the repository or reach out to the maintainers.

# Disclaimer

The software provided in this GitHub repository is offered “as is,” without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement.

- **Testing:** The software has not undergone testing of any kind, and its functionality, accuracy, reliability, and suitability for any purpose are not guaranteed.
- **Use at Your Own Risk:** The user assumes all risks associated with the use of this software. The author(s) of this software shall not be held liable for any damages, including but not limited to direct, indirect, incidental, special, consequential, or punitive damages arising out of the use of or inability to use this software, even if advised of the possibility of such damages.
- **No Liability:** The author(s) of this software are not liable for any loss or damage, including without limitation, any loss of profits, business interruption, loss of information or data, or other pecuniary loss arising out of the use of or inability to use this software.
- **Sole Responsibility:** The user acknowledges that they are solely responsible for the outcome of the use of this software, including any decisions made or actions taken based on the software’s output or functionality.
- **No Endorsement:** Mention of any specific product, service, or organization does not constitute or imply endorsement by the author(s) of this software.
- **Modification and Distribution:** This software may be modified and distributed under the terms of the license provided with the software. By modifying or distributing this software, you agree to be bound by the terms of the license.
- **Assumption of Risk:** By using this software, the user acknowledges and agrees that they have read, understood, and accepted the terms of this disclaimer and assumes all risks associated with the use of this software.
