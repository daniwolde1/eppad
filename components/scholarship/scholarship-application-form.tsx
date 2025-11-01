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

const scholarshipSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  scholarshipType: z.enum(["undergraduate", "graduate", "professional"]),
  institution: z.string().min(2, "Institution name is required"),
  program: z.string().min(2, "Program of study is required"),
  yearOfStudy: z.string().min(1, "Year of study is required"),
  gpa: z.string().min(1, "GPA is required"),
  personalStatement: z.string().min(100, "Personal statement must be at least 100 characters"),
  ethiopianConnection: z.string().min(50, "Please describe your connection to Ethiopia (minimum 50 characters)"),
})

type ScholarshipFormData = z.infer<typeof scholarshipSchema>

export function ScholarshipApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ScholarshipFormData>({
    resolver: zodResolver(scholarshipSchema),
  })

  const onSubmit = async (data: ScholarshipFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Scholarship application:", data)
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
              Thank you for applying for the EPPAD Scholarship. Our selection committee will review your application and
              notify you of the decision by the announced date.
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
                <Input id="firstName" {...register("firstName")} />
                {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" {...register("lastName")} />
                {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" {...register("phone")} />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
              {errors.dateOfBirth && <p className="text-sm text-destructive">{errors.dateOfBirth.message}</p>}
            </div>
          </div>

          {/* Academic Information */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Academic Information</h3>
            <div className="space-y-2">
              <Label htmlFor="scholarshipType">Scholarship Type *</Label>
              <Select onValueChange={(value) => setValue("scholarshipType", value as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select scholarship type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undergraduate">Undergraduate Scholarship - $2,500</SelectItem>
                  <SelectItem value="graduate">Graduate Research Scholarship - $5,000</SelectItem>
                  <SelectItem value="professional">Professional Development Grant - $1,500</SelectItem>
                </SelectContent>
              </Select>
              {errors.scholarshipType && <p className="text-sm text-destructive">{errors.scholarshipType.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution">Institution/University *</Label>
              <Input id="institution" {...register("institution")} placeholder="e.g., University of Maryland" />
              {errors.institution && <p className="text-sm text-destructive">{errors.institution.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="program">Program of Study *</Label>
              <Input id="program" {...register("program")} placeholder="e.g., Doctor of Pharmacy (PharmD)" />
              {errors.program && <p className="text-sm text-destructive">{errors.program.message}</p>}
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="yearOfStudy">Year of Study *</Label>
                <Select onValueChange={(value) => setValue("yearOfStudy", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">First Year</SelectItem>
                    <SelectItem value="2">Second Year</SelectItem>
                    <SelectItem value="3">Third Year</SelectItem>
                    <SelectItem value="4">Fourth Year</SelectItem>
                    <SelectItem value="5+">Fifth Year or Higher</SelectItem>
                  </SelectContent>
                </Select>
                {errors.yearOfStudy && <p className="text-sm text-destructive">{errors.yearOfStudy.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="gpa">Current GPA *</Label>
                <Input id="gpa" {...register("gpa")} placeholder="e.g., 3.75" />
                {errors.gpa && <p className="text-sm text-destructive">{errors.gpa.message}</p>}
              </div>
            </div>
          </div>

          {/* Essays */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Personal Statement</h3>
            <div className="space-y-2">
              <Label htmlFor="personalStatement">
                Describe your career goals and how this scholarship will help you achieve them (500-750 words) *
              </Label>
              <Textarea id="personalStatement" {...register("personalStatement")} rows={8} />
              {errors.personalStatement && (
                <p className="text-sm text-destructive">{errors.personalStatement.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="ethiopianConnection">
                Describe your connection to Ethiopia and your commitment to improving healthcare there *
              </Label>
              <Textarea id="ethiopianConnection" {...register("ethiopianConnection")} rows={6} />
              {errors.ethiopianConnection && (
                <p className="text-sm text-destructive">{errors.ethiopianConnection.message}</p>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> After submitting this form, you will receive an email with instructions for
              uploading required documents (transcripts, letters of recommendation, etc.).
            </p>
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
