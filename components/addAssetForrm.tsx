"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
//import { useSearchParams } from "next/navigation";
import axios from 'axios';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";

import { useTransition, useState } from "react";

import Link from "next/link";
import FormError from "./form-error";
const LoginForm = () => {
  //const urlParams = useSearchParams();
  // const callBackUrl = urlParams.get("callbackUrl");
  // const errorUrlParam =
  //   urlParams.get("error") === "OAuthAccountNotLinked"
  //     ? "This account is already linked to a user. Please sign in with a different account."
  //     : ``;

  const [isPending, startTransition] = useTransition();
  const [isTwoFactor, setTwoFactor] = useState(false); // TODO: ADD 2FA
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // function onSubmit() {
  //   console.log("login");
  // }
  // function onSubmit(values: z.infer<typeof LoginSchema>) {
  //   setError("");
  //   //setSuccess("");
  //   startTransition(() => {
  //     login(values, callBackUrl)
  //       .then((data) => {
  //         if (data?.error) {
  //           form.reset();
  //           setError(data.error);
  //         }
  //         // if (data?.success) {
  //         //   // TODO: ADD 2FA
  //         //   form.reset();
  //         //   setSuccess(data?.success);
  //         // }
  //       })
  //       .catch((err) => {
  //         setError("Something went wrong.");
  //       });
  //   });
  // }
  

function onSubmit(values: z.infer<typeof LoginSchema>) {
  setError("");
  //setSuccess("");
  // startTransition(() => {
  //   axios.post('/api/login', values)
  //     .then((response:any) => {
  //       const data = response.data;
  //       if (data?.error) {
  //         form.reset(); // Reset form on error
  //         setError(data.error);
  //       } else {
  //         // Handle successful login
  //         // Uncomment this section and implement the logic as needed
  //         // form.reset(); // Optionally reset the form
  //         // setSuccess("Login successful");
  //         // Redirect user, update UI, etc.
  //       }
  //     })
  //     .catch((err:any) => {
  //       // Handle other errors (e.g., network errors)
  //       setError("Something went wrong.");
  //     });
  // });
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        
          <div className="grid grid-cols-2 space-x-4">
            <div className="space-y-2">
              <Label htmlFor="asset-type">Asset Type</Label>
              <Select defaultValue="other">
                <SelectTrigger>
                  <SelectValue placeholder="Select asset type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="laptop">Laptop</SelectItem>
                  <SelectItem value="printer">Printer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asset Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Asset Name"
                      {...field}
                      type="string"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 space-x-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asset Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Asset Name"
                      {...field}
                      type="string"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="******"
                      {...field}
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 space-x-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asset Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Asset Name"
                      {...field}
                      type="string"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="******"
                      {...field}
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 space-x-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asset Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Asset Name"
                      {...field}
                      type="string"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="******"
                      {...field}
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
        
        
        
        <Button type="submit" className="w-full" disabled={isPending}>
          Add Asset
        </Button>
      </form>
    </Form>
  );
};
export default LoginForm;