"use client";

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

// Simulated token data and functions
const tokens = [
  { name: "Token A", symbol: "TKA" },
  { name: "Token B", symbol: "TKB" },
  { name: "Token C", symbol: "TKC" },
];

const sendToken = (symbol: string, amount: number, recipient: string) => {
  // Simulated token send
  console.log(`Sent ${amount} ${symbol} to ${recipient}`);
  return true;
};

export default function Transfer() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState("");

  const handleSend = () => {
    if (selectedToken && amount && recipient) {
      const success = sendToken(selectedToken, Number(amount), recipient);
      if (success) {
        setRecipient("");
        setAmount("");
        setSelectedToken("");
        alert("Token sent successfully!");
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
        <div className="space-y-2">
          <Label htmlFor="token-select">Select Token</Label>
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
        <div className="space-y-2">
          <Label htmlFor="recipient">Recipient Address</Label>
          <Input
            id="recipient"
            placeholder="Enter recipient address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>
        <Button onClick={handleSend} className="w-full">
          Send Tokens
        </Button>
      </CardContent>
    </Card>
  );
}
