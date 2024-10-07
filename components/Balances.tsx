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

const tokens = [
  { name: "Token A", symbol: "TKA" },
  { name: "Token B", symbol: "TKB" },
  { name: "Token C", symbol: "TKC" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getBalance = (symbol: string) => {
  // TODO: fetch balance
  return Math.floor(Math.random() * 1000);
};

export default function Balances() {
  const [balances, setBalances] = useState<Record<string, number>>({});

  const checkBalance = (symbol: string) => {
    const balance = getBalance(symbol);
    setBalances((prev) => ({ ...prev, [symbol]: balance }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Check Token Balances</CardTitle>
        <CardDescription>
          View your balance for three different tokens
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {tokens.map((token) => (
          <div key={token.symbol} className="flex items-center justify-between">
            <span>
              {token.name} ({token.symbol})
            </span>
            <div>
              <span className="mr-2">
                Balance:{" "}
                {balances[token.symbol] !== undefined
                  ? balances[token.symbol]
                  : "---"}
              </span>
              <Button onClick={() => checkBalance(token.symbol)}>Check</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
