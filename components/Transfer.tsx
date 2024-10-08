"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Address, BaseError, parseEther } from "viem";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { SequentialDotsLoader } from "./Loader";

// Block explorer for RSK Testnet
const EXPLORER_URL = "https://explorer.testnet.rsk.co/tx/";
const tokens = [
  { name: "rBTC", symbol: "rBTC", address: "" }, // Native rBTC doesn't have an address
  {
    name: "RIF",
    symbol: "tRIF",
    address: "0x19F64674D8A5B4E652319F5e239eFd3bc969A1fE",
  },
  {
    name: "Dollar on Chain",
    symbol: "DOC",
    address: "0xCB46c0ddc60D18eFEB0E586C17Af6ea36452Dae0",
  },
];

/**
 * Transfer component allows users to select a token, specify a recipient and amount, and send the token.
 * The component integrates with wagmi's `useSendTransaction` and `useWaitForTransactionReceipt` hooks
 * to handle the transaction process and display its status.
 *
 * Hooks Used:
 * - useSendTransaction: Hook for initiating a blockchain transaction.
 * - useWaitForTransactionReceipt: Hook for waiting for a transaction to be confirmed.
 */

export default function Transfer() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState("");

  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedToken && amount && recipient) {
      try {
        sendTransaction({
          to: recipient as Address,
          value: parseEther(amount),
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Tokens</CardTitle>
        <CardDescription>Transfer tokens to another address</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Send Token Form */}
        <form onSubmit={handleSend} className="space-y-4">
          {/* Select Token for Transfer */}
          <div className="space-y-2">
            <Label htmlFor="token-select">Select Token to Send</Label>
            <Select onValueChange={setSelectedToken}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a token" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tokens</SelectLabel>
                  {tokens.map((token) => (
                    <SelectItem key={token.symbol} value={token.symbol}>
                      {token.name} ({token.symbol})
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Recipient Input */}
          <div className="space-y-2">
            <Label htmlFor="recipient">Recipient Address</Label>
            <Input
              id="recipient"
              placeholder="Enter recipient address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>

          {/* Send Button with padding */}
          <Button
            type="submit"
            disabled={isPending || isConfirming}
            className="w-full py-3 "
          >
            {isPending ? "Sending..." : "Send Tokens"}
          </Button>
        </form>

        {/* Loader and Transaction Status */}
        {isConfirming && <SequentialDotsLoader />}
        {hash && (
          <div>
            Transaction Hash:{" "}
            <a
              href={`${EXPLORER_URL}${hash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              {hash}
            </a>
          </div>
        )}
        {isConfirmed && (
          <div className="text-green-500">Transaction confirmed.</div>
        )}
        {error && <div>Error: {(error as BaseError).message}</div>}
      </CardContent>
    </Card>
  );
}
