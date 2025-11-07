"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Heart } from "lucide-react"

const donationSchema = z.object({
  amount: z.string().min(1, "Please select or enter an amount"),
  donationType: z.enum(["one-time", "monthly"]),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  designation: z.string().min(1, "Please select where to direct your donation"),
  anonymous: z.boolean().optional(),
})

type DonationFormData = z.infer<typeof donationSchema>

export function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [customAmount, setCustomAmount] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      donationType: "one-time",
    },
  })

  const selectedAmount = watch("amount")
  const predefinedAmounts = ["25", "50", "100", "250", "500", "1000"]

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true)

    // Simulate loading delay (optional)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Donation data:", data)

    // ✅ Redirect to the external donation page
    window.location.href = "https://eppad1.eppad.org/donation/"
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Donation Type */}
          <div className="space-y-4">
            <Label>Donation Frequency</Label>
            <RadioGroup
              defaultValue="one-time"
              onValueChange={(value) => setValue("donationType", value as any)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time" className="font-normal cursor-pointer">
                  One-time
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly" className="font-normal cursor-pointer">
                  Monthly
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Amount Selection */}
          <div className="space-y-4">
            <Label>Donation Amount *</Label>
            <div className="grid grid-cols-3 gap-3">
              {predefinedAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={selectedAmount === amount ? "default" : "outline"}
                  className={selectedAmount === amount ? "bg-primary" : ""}
                  onClick={() => {
                    setValue("amount", amount)
                    setCustomAmount(false)
                  }}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            <Button
              type="button"
              variant={customAmount ? "default" : "outline"}
              className={`w-full ${customAmount ? "bg-primary" : ""}`}
              onClick={() => {
                setCustomAmount(true)
                setValue("amount", "")
              }}
            >
              Custom Amount
            </Button>
            {customAmount && (
              <div className="space-y-2">
                <Input type="number" placeholder="Enter amount" {...register("amount")} className="text-lg" min="1" />
              </div>
            )}
            {errors.amount && <p className="text-sm text-destructive">{errors.amount.message}</p>}
          </div>

          {/* Designation */}
          <div className="space-y-2">
            <Label htmlFor="designation">Direct My Donation To *</Label>
            <Select onValueChange={(value) => setValue("designation", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Fund (Where Most Needed)</SelectItem>
                <SelectItem value="scholarship">Scholarship Fund</SelectItem>
                <SelectItem value="community">Community Health Programs</SelectItem>
                <SelectItem value="professional">Professional Development</SelectItem>
                <SelectItem value="research">Research Initiatives</SelectItem>
              </SelectContent>
            </Select>
            {errors.designation && <p className="text-sm text-destructive">{errors.designation.message}</p>}
          </div>

          {/* Donor Information */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Donor Information</h3>
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
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Secure Payment:</strong> After clicking "Proceed to Payment", you will be redirected to our secure
              payment processor to complete your donation.
            </p>
          </div>

          <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Heart className="mr-2 h-4 w-4" />
                Proceed to Payment
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
