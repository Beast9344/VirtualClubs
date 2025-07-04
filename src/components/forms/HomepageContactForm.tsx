
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { Send } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type HomepageContactFormData = z.infer<typeof formSchema>;

export function HomepageContactForm() {
  const { toast } = useToast();
  const form = useForm<HomepageContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: HomepageContactFormData) {
    console.log("Homepage Contact Form Data:", data); // In a real app, this would send data
    toast({
      title: "Message Sent!",
      description: `Thanks for reaching out, ${data.name}. We'll get back to you at ${data.email} soon.`,
      variant: "default",
      duration: 8000,
    });
    form.reset();
  }

  return (
    <FloatingCard className="p-6 md:p-8 max-w-2xl mx-auto" hoverEffect="subtle">
      <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-6 text-center">
        Get in Touch
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How can we help you today?"
                    className="resize-y min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-neon-primary">
            Send Message <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </Form>
    </FloatingCard>
  );
}
