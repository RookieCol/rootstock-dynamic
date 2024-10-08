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
import { SpinnerIcon, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useState } from "react";

export default function SignMessage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { primaryWallet } = useDynamicContext();

  async function handleVerify() {
    if (!primaryWallet) return;

    try {
      setLoading(true);

      const signature = await primaryWallet.signMessage(
        "You're signing a message on Rootstock!"
      );
      console.log("signature", signature);

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
        <Button onClick={handleVerify} className="w-full" disabled={loading}>
          Sign Message{" "}
          {loading ? (
            <SpinnerIcon className="size-5 animate-spin ml-2" />
          ) : null}
        </Button>
      </CardContent>
    </Card>
  );
}
