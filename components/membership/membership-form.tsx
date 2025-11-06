"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const membershipSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  country: z.string().min(1, "Please select your country"),
  city: z.string().min(2, "City must be at least 2 characters"),
  membershipType: z.enum(["student", "professional", "lifetime"]),
  currentPosition: z.string().min(2, "Please enter your current position"),
  institution: z.string().min(2, "Please enter your institution/organization"),
  yearsOfExperience: z.string().min(1, "Please select years of experience"),
  areasOfInterest: z.string().min(10, "Please describe your areas of interest (minimum 10 characters)"),
  workingGroups: z.string().optional(),
  howDidYouHear: z.string().min(1, "Please tell us how you heard about EPPAD"),
});

type MembershipFormData = z.infer<typeof membershipSchema>;

export default function MembershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<MembershipFormData>({
    resolver: zodResolver(membershipSchema),
  });

  // 🔹 Submit handler (sends data to API and redirects)
  const onSubmit = async (data: MembershipFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Failed to submit");

      console.log("Membership saved:", result);

      // Redirect to payment page with membershipId
      window.location.href = `/payment-checkout?membershipId=${result.id}`;
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error submitting application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">
            Application Submitted!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thank you for applying. You’ll be redirected to payment shortly.
          </p>
          <Button onClick={() => setSubmitSuccess(false)} variant="outline">
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* PERSONAL INFORMATION */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Personal Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" {...register("firstName")} />
                {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" {...register("lastName")} />
                {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" {...register("phone")} />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input id="country" {...register("country")} />
                {errors.country && <p className="text-sm text-destructive">{errors.country.message}</p>}
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input id="city" {...register("city")} />
                {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
              </div>
            </div>
          </div>

          {/* MEMBERSHIP TYPE */}
          <div className="space-y-2">
            <Label htmlFor="membershipType">Membership Type *</Label>
            <Select onValueChange={(v) => setValue("membershipType", v as any)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose membership type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student - $25/year</SelectItem>
                <SelectItem value="professional">Professional - $75/year</SelectItem>
                <SelectItem value="lifetime">Lifetime - $500 one-time</SelectItem>
              </SelectContent>
            </Select>
            {errors.membershipType && <p className="text-sm text-destructive">{errors.membershipType.message}</p>}
          </div>

          {/* PROFESSIONAL INFO */}
          <div className="space-y-2">
            <Label htmlFor="currentPosition">Current Position *</Label>
            <Input id="currentPosition" {...register("currentPosition")} />
            {errors.currentPosition && <p className="text-sm text-destructive">{errors.currentPosition.message}</p>}

            <Label htmlFor="institution">Institution *</Label>
            <Input id="institution" {...register("institution")} />
            {errors.institution && <p className="text-sm text-destructive">{errors.institution.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
            <Select onValueChange={(v) => setValue("yearsOfExperience", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-2">0-2 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="6-10">6-10 years</SelectItem>
                <SelectItem value="11-15">11-15 years</SelectItem>
                <SelectItem value="16+">16+ years</SelectItem>
              </SelectContent>
            </Select>
            {errors.yearsOfExperience && <p className="text-sm text-destructive">{errors.yearsOfExperience.message}</p>}
          </div>

          {/* AREAS OF INTEREST */}
          <div className="space-y-2">
            <Label htmlFor="areasOfInterest">Areas of Interest *</Label>
            <Textarea id="areasOfInterest" {...register("areasOfInterest")} rows={4} />
            {errors.areasOfInterest && <p className="text-sm text-destructive">{errors.areasOfInterest.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="workingGroups">Working Groups (Optional)</Label>
            <Textarea id="workingGroups" {...register("workingGroups")} rows={3} />
          </div>

          {/* HOW DID YOU HEAR */}
          <div className="space-y-2">
            <Label htmlFor="howDidYouHear">How did you hear about EPPAD? *</Label>
            <Input id="howDidYouHear" {...register("howDidYouHear")} />
            {errors.howDidYouHear && <p className="text-sm text-destructive">{errors.howDidYouHear.message}</p>}
          </div>

          <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting Application...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
