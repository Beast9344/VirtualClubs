"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { DISCORD_INVITE_URL } from "@/lib/constants";
import { Send } from "lucide-react";

const formSchema = z.object({
  region: z.string().min(2, { message: "Region must be at least 2 characters." }),
  platform: z.enum(["PC", "PlayStation", "Xbox", "Cross-Platform", "Other"]),
  teamName: z.string().min(2, { message: "Organization/Team Name must be at least 2 characters." }),
  contactEmail: z.string().email({ message: "Please enter a valid email address." }),
  licenseType: z.enum(["League License", "Scouting Partner", "Brand Partnership", "Content Creator", "Other Inquiry"]),
  message: z.string().optional(),
});

type PartnerFormData = z.infer<typeof formSchema>;

export function PartnerInquiryForm() {
  const { toast } = useToast();
  const form = useForm<PartnerFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      region: "",
      platform: undefined,
      teamName: "",
      contactEmail: "",
      licenseType: undefined,
      message: "",
    },
  });

  function onSubmit(data: PartnerFormData) {
    console.log("Partner Inquiry Data:", data); // In a real app, this would send data to a backend
    toast({
      title: "Inquiry Submitted!",
      description: (
        <div>
          <p>Thank you for your interest, {data.teamName}. We've received your inquiry and will be in touch soon via {data.contactEmail}.</p>
          <p className="mt-2">In the meantime, feel free to <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer" className="underline text-primary">join our Discord community</a>!</p>
        </div>
      ),
      variant: "default",
      duration: 10000,
    });
    form.reset();
  }

  return (
    <FloatingCard className="p-6 md:p-8" hoverEffect="subtle">
      <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-6">League & Partner Inquiry</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="teamName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization/Team Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Galactic FC, Esports United" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., North America, Europe, Asia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Platform</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a platform" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="PC">PC</SelectItem>
                      <SelectItem value="PlayStation">PlayStation</SelectItem>
                      <SelectItem value="Xbox">Xbox</SelectItem>
                      <SelectItem value="Cross-Platform">Cross-Platform</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="licenseType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Inquiry / License Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="League License">League License</SelectItem>
                    <SelectItem value="Scouting Partner">Scouting Partner</SelectItem>
                    <SelectItem value="Brand Partnership">Brand Partnership</SelectItem>
                    <SelectItem value="Content Creator">Content Creator Program</SelectItem>
                    <SelectItem value="Other Inquiry">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us more about your organization or inquiry..."
                    className="resize-y min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-neon-primary">
            Submit Inquiry <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </Form>
    </FloatingCard>
  );
}
