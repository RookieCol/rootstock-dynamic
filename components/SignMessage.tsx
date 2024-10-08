"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { SpinnerIcon } from "@dynamic-labs/sdk-react-core";
import { useState } from "react";
import { useSignMessage } from "wagmi"; 

/**
 * SignMessage Component
 * 
 * This component allows the user to sign a message with their wallet using wagmi's `useSignMessage` hook.
 * It handles the process of signing the message "Keep building on Rootstock!" and displays the resulting signature hash.
 
 * Hooks Used:
 * - useSignMessage: Hook to trigger signing a message with the user's wallet.
 * 
 */

export default function SignMessage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [signatureHash, setSignatureHash] = useState<string | null>(null);
  const { signMessageAsync } = useSignMessage();

  async function handleVerify() {
    try {
      setLoading(true);

      // Sign the message
      const signature = await signMessageAsync({
        message: "Keep building on Rootstock", // <3
      });

      setSignatureHash(signature);

      toast({
        title: "Success",
        description: "Successfully signed message",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to sign message",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Message</CardTitle>
        <CardDescription>Sign a message with your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleVerify} className="w-full py-3" disabled={loading}>
          Sign Message{" "}
          {loading ? (
            <SpinnerIcon className="size-5 animate-spin ml-2" />
          ) : null}
        </Button>

        {signatureHash && (
          <div className="pt-4">
            Signature Hash:{" "}
            <span className="font-bold">
              {signatureHash.substring(0, 40)}... {/* Truncated for display */}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
