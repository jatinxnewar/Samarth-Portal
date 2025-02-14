import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute top-0 left-0 flex gap-[30rem] p-4 z-20">
        <div className="bg-white/90 rounded-lg p-2"> 
          <img 
            src="/cdot_logo (1).png" 
            alt="C-DOT Logo" 
            className="w-16 h-32 object-contain"
          />
        </div>
        <div>
          <img 
            src="/STPI Logo.png" 
            alt="STPI Logo" 
            className="w-45 h-32 object-contain"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-navy-900">
        <div className="absolute inset-0">
          <Image
            src="Background.png"
            alt="Samarth Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Samarth</h1>
          <p className="text-2xl md:text-3xl text-orange-500 mb-8">Fueling Ideas, Shaping Telecom Future</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Learn More
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-4">
                Program <span className="text-orange-500">Overview</span>
              </h2>
              <p className="text-gray-600 mb-6">
                The program has a maximum cohort size of 18 startups per program, with a total of 36 startups across two
                cohorts of six months each. The program will be delivered in a hybrid mode.
              </p>
              <p className="text-gray-600">
                The "Samarth" Incubation Program is designed to provide comprehensive support for startups and
                innovators engaged in creating next-generation technologies.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Telecom Software", icon: "🌐" },
                { title: "Cyber Security", icon: "🔒" },
                { title: "5G/6G Technologies", icon: "📡" },
                { title: "AI", icon: "🤖" },
                { title: "IoT Applications", icon: "⚡" },
                { title: "Quantum Tech", icon: "💫" },
              ].map((tech) => (
                <Card key={tech.title} className="text-center p-4">
                  <CardContent className="pt-6">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <h3 className="font-semibold text-sm">{tech.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-900 mb-12 text-center">
            Program <span className="text-orange-500">Benefits</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">For Startups & Entrepreneurs</h3>
              <ul className="space-y-4">
                {[
                  "Expert Mentorship",
                  "Comprehensive Support",
                  "Enhanced Market Access",
                  "Funding Opportunities",
                  "Networking and Collaborations",
                  "Workspace and Infrastructure",
                  "IPR & Patent Assistance",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="text-orange-500 h-5 w-5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">For Ecosystem</h3>
              <ul className="space-y-4">
                {["Boost to Telecom Innovation", "Job Creation", "Local And Global Impact", "Economic Growth"].map(
                  (benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="text-orange-500 h-5 w-5" />
                      <span>{benefit}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-900 mb-12 text-center">
            Selection <span className="text-orange-500">Process</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Online Application Submission",
                description: "Submission of business plans, product demos, and pitch decks.",
              },
              {
                title: "Screening Committee Review",
                description:
                  "A panel of experts from STPI will screen applications based on eligibility, business potential, and technical feasibility.",
              },
              {
                title: "Presentation and Final Selection",
                description:
                  "Shortlisted startups shall be invited for the presentation before the Selection Committee comprising of experts from CDOT, STPI, Academia and industry.",
              },
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Apply?</h2>
          <p className="mb-8 text-gray-300">Applications are now open for the next cohort</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
              <a href="https://sayuj.net/">Apply via STPI Portal</a>
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
              <a href="https://www.cdot.in/">Apply via C-DOT Website</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-navy-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">Copyright © 2025 Software Technology Parks of India. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}
