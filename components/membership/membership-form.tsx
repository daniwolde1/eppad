"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

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
})

type MembershipFormData = z.infer<typeof membershipSchema>

export function MembershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<MembershipFormData>({
    resolver: zodResolver(membershipSchema),
  })

  const membershipType = watch("membershipType")

  const onSubmit = async (data: MembershipFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Membership application:", data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
  }

  if (submitSuccess) {
    return (
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="text-center">
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
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Application Submitted!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for applying to join EPPAD. We will review your application and contact you within 3-5 business
              days with next steps.
            </p>
            <Button onClick={() => setSubmitSuccess(false)} variant="outline">
              Submit Another Application
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Personal Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" {...register("firstName")} placeholder="John" />
                {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" {...register("lastName")} placeholder="Doe" />
                {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" {...register("email")} placeholder="john.doe@example.com" />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" {...register("phone")} placeholder="+1 (555) 123-4567" />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input id="country" {...register("country")} placeholder="United States" />
                {errors.country && <p className="text-sm text-destructive">{errors.country.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input id="city" {...register("city")} placeholder="Washington" />
                {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
              </div>
            </div>
          </div>

          {/* Membership Type */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Membership Type</h3>
            <div className="space-y-2">
              <Label htmlFor="membershipType">Select Membership Level *</Label>
              <Select onValueChange={(value) => setValue("membershipType", value as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose membership type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student Member - $25/year</SelectItem>
                  <SelectItem value="professional">Professional Member - $75/year</SelectItem>
                  <SelectItem value="lifetime">Lifetime Member - $500 one-time</SelectItem>
                </SelectContent>
              </Select>
              {errors.membershipType && <p className="text-sm text-destructive">{errors.membershipType.message}</p>}
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Professional Information</h3>
            <div className="space-y-2">
              <Label htmlFor="currentPosition">Current Position/Title *</Label>
              <Input id="currentPosition" {...register("currentPosition")} placeholder="Clinical Pharmacist" />
              {errors.currentPosition && <p className="text-sm text-destructive">{errors.currentPosition.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution">Institution/Organization *</Label>
              <Input id="institution" {...register("institution")} placeholder="University Hospital" />
              {errors.institution && <p className="text-sm text-destructive">{errors.institution.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
              <Select onValueChange={(value) => setValue("yearsOfExperience", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select years of experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-2">0-2 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="6-10">6-10 years</SelectItem>
                  <SelectItem value="11-15">11-15 years</SelectItem>
                  <SelectItem value="16+">16+ years</SelectItem>
                </SelectContent>
              </Select>
              {errors.yearsOfExperience && (
                <p className="text-sm text-destructive">{errors.yearsOfExperience.message}</p>
              )}
            </div>
          </div>

          {/* Areas of Interest */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Areas of Interest</h3>
            <div className="space-y-2">
              <Label htmlFor="areasOfInterest">
                Please describe your areas of interest in pharmaceutical sciences *
              </Label>
              <Textarea
                id="areasOfInterest"
                {...register("areasOfInterest")}
                placeholder="e.g., Clinical pharmacy, drug discovery, pharmaceutical education..."
                rows={4}
              />
              {errors.areasOfInterest && <p className="text-sm text-destructive">{errors.areasOfInterest.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="workingGroups">Which working groups would you like to join? (Optional)</Label>
              <Textarea
                id="workingGroups"
                {...register("workingGroups")}
                placeholder="e.g., Research & Development, Education & Training, Clinical Practice..."
                rows={3}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Additional Information</h3>
            <div className="space-y-2">
              <Label htmlFor="howDidYouHear">How did you hear about EPPAD? *</Label>
              <Input
                id="howDidYouHear"
                {...register("howDidYouHear")}
                placeholder="e.g., Colleague referral, social media, conference..."
              />
              {errors.howDidYouHear && <p className="text-sm text-destructive">{errors.howDidYouHear.message}</p>}
            </div>
          </div>

          <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Application...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
