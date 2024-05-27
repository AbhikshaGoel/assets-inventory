"use client";
import React from "react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BYBZaA3KIDa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import RequestAssetForm from "@/components/assetRequestForm";

export default function Component() {
  return (
    <div className="mt-16 h-auto flex flex-col  md:ml-48">
      <RequestAssetForm />
    </div>
  );
}
