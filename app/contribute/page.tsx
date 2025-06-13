import { CHeroSection } from "@/components/common-hero"
import { DonationForm } from "@/components/donation-form"

export default function DonationPage() {
  return (
    <main className="min-h-screen ">
      <CHeroSection value="How To Contribute" />
      <DonationForm />
    </main>
  )
}
