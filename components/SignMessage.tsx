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

const verifyMessage = (message: string, signature: string) => {
  // Simulated message verification
  return message.length > 0 && signature.length > 0;
};

export default function SignMessage() {
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [verificationResult, setVerificationResult] = useState<boolean | null>(
    null
  );

  const handleVerify = () => {
    const result = verifyMessage(message, signature);
    setVerificationResult(result);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify Message</CardTitle>
        <CardDescription>Verify a signed message</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signature">Signature</Label>
          <Input
            id="signature"
            placeholder="Enter signature"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
          />
        </div>
        <Button onClick={handleVerify} className="w-full">
          Verify Message
        </Button>
        {verificationResult !== null && (
          <div
            className={`text-center ${
              verificationResult ? "text-green-600" : "text-red-600"
            }`}
          >
            {verificationResult
              ? "Message verified successfully!"
              : "Message verification failed."}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
