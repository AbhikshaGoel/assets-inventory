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
import { Card, CardContent } from "./ui/card";

export default function AddAssetForm() {
  return (
    <div className="px-2 space-y-6">
      
        <div className=" ">
      <div className="flex flex-col items-center justify-center space-y-6">
       
        <Card className="w-full space-y-4 gap-y-4">
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="asset-type">Asset Type</Label>
                <Select defaultValue="pc">
                  <SelectTrigger>
                    <SelectValue placeholder="Select asset type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pc">PC</SelectItem>
                    <SelectItem value="printer">Printer</SelectItem>
                    <SelectItem value="monitor">Monitor</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="serial-number">Serial Number</Label>
                <Input id="serial-number" type="text" placeholder="Enter serial number" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user-name">User Name</Label>
                <Input id="user-name" type="text" placeholder="Enter user name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-email">User Email</Label>
                <Input id="user-email" type="email" placeholder="Enter user email" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user-name">User Name</Label>
                <Input id="user-name" type="text" placeholder="Enter user name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-email">User Email</Label>
                <Input id="user-email" type="email" placeholder="Enter user email" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user-name">User Name</Label>
                <Input id="user-name" type="text" placeholder="Enter user name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-email">User Email</Label>
                <Input id="user-email" type="email" placeholder="Enter user email" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user-name">User Name</Label>
                <Input id="user-name" type="text" placeholder="Enter user name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-email">User Email</Label>
                <Input id="user-email" type="email" placeholder="Enter user email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" rows={3} placeholder="Enter a description" />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Save Asset</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    
    </div>
  );
}
