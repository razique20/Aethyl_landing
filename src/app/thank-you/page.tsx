import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Thank You!
        </h1>
        <p className="text-corporate-gray leading-relaxed mb-10">
          We&apos;ve received your quote request. Our team will review your project
          details and get back to you within 24 hours with a custom proposal.
        </p>
        <Link
          href="/"
          className="inline-block btn-accent px-8 py-3 text-sm font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
