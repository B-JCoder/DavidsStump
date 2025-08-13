"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, TreePine, Hammer, Sprout, Mountain, Menu, X, CheckCircle } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: [] as string[],
    message: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        services: [],
        message: "",
        timeline: "",
      })
    }, 3000)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-accent/50 wood-texture">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] glass backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Davids%20Stump%20Grinding-01-logo.jpg-KX3SMWVdVdZg87Q1UfAV0gcHyrQaPP.jpeg"
                alt="David's Stump Grinding Logo"
                className="h-8 sm:h-10 w-auto"
              />
              <span className="font-serif font-bold text-lg sm:text-xl text-secondary">David's Stump Grinding & Landscaping</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-secondary/80 hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-secondary/80 hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-secondary/80 hover:text-primary transition-colors font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-secondary/80 hover:text-primary transition-colors font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact-form")}
                className="text-secondary/80 hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            {/* Desktop Call Button */}
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90 shadow-rustic" asChild>
              <a href="tel:7345796557">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden z-[110]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-accent/95 backdrop-blur-md border-b border-primary/10 py-4 z-[105] shadow-rustic-lg">
              <div className="flex flex-col space-y-4 px-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-secondary hover:text-primary transition-colors py-2 font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-secondary hover:text-primary transition-colors py-2 font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-secondary hover:text-primary transition-colors py-2 font-medium"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-secondary hover:text-primary transition-colors py-2 font-medium"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact-form")}
                  className="text-left text-secondary hover:text-primary transition-colors py-2 font-medium"
                >
                  Contact
                </button>
                <Button className="bg-primary hover:bg-primary/90 w-full mt-4 shadow-rustic" asChild>
                  <a href="tel:7345796557">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (734) 579-6557
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 shadow-rustic">
                  Professional Landscaping Services
                </Badge>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary leading-tight">
                  Transform Your
                  <span className="text-primary block">Outdoor Space</span>
                </h1>
                <p className="text-lg sm:text-xl text-secondary/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Expert stump grinding, quality firewood, professional planting, and decorative rocks. Serving your
                  community with reliable, professional landscaping solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-6 sm:px-8 shadow-rustic-lg hover:shadow-rustic transition-all duration-300"
                  onClick={() => scrollToSection("contact-form")}
                >
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-6 sm:px-8 border-primary text-primary hover:bg-primary/5 bg-transparent shadow-rustic hover:shadow-rustic-lg transition-all duration-300"
                  onClick={() => scrollToSection("services")}
                >
                  View Our Work
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-secondary/70">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:7345796557" className="hover:text-primary transition-colors">
                    (734) 579-6557
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:baggygecco@gmail.com" className="hover:text-primary transition-colors">
                    baggygecco@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="relative order-2">
              <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-rustic-lg hover:shadow-rustic transition-all duration-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nowteo.jpg-JpjBcPtCimwb1ksy5CTe6oevbPrBuB.jpeg"
                  alt="Stump grinding in action"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-rustic"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-secondary rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-rustic-lg border border-primary/20">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">15+</div>
                  <div className="text-xs sm:text-sm text-accent">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 shadow-rustic">Our Services</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
              Complete Stump Grinding & Landscaping Solutions
            </h2>
            <p className="text-lg sm:text-xl text-secondary/80 max-w-3xl mx-auto">
              From stump removal to decorative landscaping, we provide comprehensive outdoor services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Hammer,
                title: "Stump Grinding",
                description: "Professional stump removal using state-of-the-art equipment. Complete cleanup included.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nowteo.jpg-JpjBcPtCimwb1ksy5CTe6oevbPrBuB.jpeg",
              },
              {
                icon: TreePine,
                title: "Firewood",
                description:
                  "Seasoned, split firewood delivered to your door. Perfect for fireplaces and outdoor fires.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nowthree.jpg-VyB0naKaAcBXnjktGxbNueH9f5Srec.jpeg",
              },
              {
                icon: Sprout,
                title: "Planting",
                description:
                  "Expert tree and shrub planting services. We help you choose the right plants for your space.",
                image: "https://www.blackforesttrees.com.au/wp-content/uploads/2023/02/Planting-Trees-3.jpg",
              },
              {
                icon: Mountain,
                title: "Decorative Rocks",
                description:
                  "Beautiful landscaping rocks and stones to enhance your outdoor aesthetic and functionality.",
                image: "https://southweststonesupply.com/wp-content/uploads/2020/04/decorative-rock-in-Columbia-MO.jpg",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="glass shadow-rustic-lg hover:shadow-rustic transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-rustic">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-serif text-secondary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-secondary/70 text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-1">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 shadow-rustic">About Us</Badge>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
                  Your Trusted Landscaping Partner
                </h2>
                <p className="text-base sm:text-lg text-secondary/80 leading-relaxed">
                  With over 15 years of experience in landscaping and stump grinding, David's team brings expertise,
                  reliability, and passion to every project. We take pride in transforming outdoor spaces and helping
                  homeowners achieve their landscaping dreams.
                </p>
                <p className="text-base sm:text-lg text-secondary/80 leading-relaxed">
                  From small residential projects to larger commercial work, we approach each job with the same level of
                  professionalism and attention to detail that has made us a trusted name in the community.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm sm:text-base text-secondary/70">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm sm:text-base text-secondary/70">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative order-2 lg:order-2">
              <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-rustic-lg hover:shadow-rustic transition-all duration-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nowthree.jpg-VyB0naKaAcBXnjktGxbNueH9f5Srec.jpeg"
                  alt="Our landscaping work showcase"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-rustic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <Badge className="bg-primary/10 text-primary border-primary/20 shadow-rustic">Who We Are</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
            Dedicated Professionals
          </h2>
          <p className="text-lg sm:text-xl text-secondary/80 leading-relaxed">
            We're a family-owned business committed to excellence in every aspect of landscaping. Our team combines
            traditional craftsmanship with modern techniques to deliver outstanding results.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {[
              {
                number: "1",
                title: "Licensed & Insured",
                description: "Fully licensed and insured for your peace of mind",
              },
              {
                number: "2",
                title: "Local Experts",
                description: "Deep knowledge of local soil, climate, and regulations",
              },
              {
                number: "3",
                title: "Quality Guaranteed",
                description: "We stand behind our work with comprehensive warranties",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto shadow-rustic">
                  <span className="text-lg sm:text-2xl font-bold text-primary">{item.number}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-secondary">{item.title}</h3>
                <p className="text-sm sm:text-base text-secondary/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 to-primary/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 shadow-rustic">Testimonials</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                rating: "★★★★★",
                text: "David and his team did an amazing job removing three large stumps from our backyard. Professional, efficient, and cleaned up perfectly. Highly recommend!",
                author: "Sarah M.",
              },
              {
                rating: "★★★★★",
                text: "Great quality firewood delivered right on time. Burns clean and lasts long. Will definitely order again next season.",
                author: "Mike R.",
              },
              {
                rating: "★★★★★",
                text: "The landscaping rocks they installed transformed our front yard completely. Excellent work and fair pricing. Very satisfied!",
                author: "Jennifer L.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="glass shadow-rustic-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-4">
                    <div className="text-primary text-lg sm:text-xl">{testimonial.rating}</div>
                    <p className="text-sm sm:text-base text-secondary/70 italic">"{testimonial.text}"</p>
                    <div className="font-semibold text-secondary">- {testimonial.author}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 shadow-rustic">FAQ</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How long does stump grinding take?",
                answer:
                  "Most residential stumps can be ground in 1-3 hours, depending on size and location. We'll provide an accurate time estimate during our free consultation.",
              },
              {
                question: "Do you deliver firewood?",
                answer:
                  "Yes! We offer delivery within a 20-mile radius. Delivery fees vary based on distance and quantity ordered. We can also arrange for pickup if you prefer.",
              },
              {
                question: "What types of plants do you recommend?",
                answer:
                  "We recommend native and adapted species that thrive in our local climate. During consultation, we'll assess your soil, sunlight, and preferences to suggest the best options.",
              },
              {
                question: "Are you licensed and insured?",
                answer:
                  "Yes, we are fully licensed and carry comprehensive liability insurance. We can provide proof of insurance upon request for your peace of mind.",
              },
              {
                question: "Do you offer free estimates?",
                answer:
                  "We provide free, no-obligation estimates for all our services. Contact us to schedule a convenient time for an on-site evaluation.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="glass rounded-lg px-4 sm:px-6 shadow-rustic"
              >
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary/70 text-sm sm:text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 shadow-rustic">Get In Touch</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
              Request Your Free Quote
            </h2>
            <p className="text-lg sm:text-xl text-secondary/80">
              Ready to transform your outdoor space? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="glass shadow-rustic-lg">
            <CardContent className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold text-secondary">Thank You!</h3>
                  <p className="text-secondary/70">
                    Your quote request has been submitted successfully. We'll contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-secondary font-medium text-sm sm:text-base">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="bg-accent/30 border-primary/20 focus:border-primary focus:ring-primary/20"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-secondary font-medium text-sm sm:text-base">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-accent/30 border-primary/20 focus:border-primary focus:ring-primary/20"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-secondary font-medium text-sm sm:text-base">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(734) 579-6557"
                        className="bg-accent/30 border-primary/20 focus:border-primary focus:ring-primary/20"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-secondary font-medium text-sm sm:text-base">
                        Property Address
                      </Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="Enter your address"
                        className="bg-accent/30 border-primary/20 focus:border-primary focus:ring-primary/20"
                        value={formData.address}
                        onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-secondary font-medium text-sm sm:text-base">Services Needed *</Label>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      {[
                        { id: "stump-grinding", label: "Stump Grinding", icon: Hammer },
                        { id: "firewood", label: "Firewood", icon: TreePine },
                        { id: "planting", label: "Planting", icon: Sprout },
                        { id: "rocks", label: "Decorative Rocks", icon: Mountain },
                      ].map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors shadow-rustic"
                        >
                          <Checkbox
                            id={service.id}
                            className="border-primary data-[state=checked]:bg-primary"
                            checked={formData.services.includes(service.label)}
                            onCheckedChange={(checked) => handleServiceChange(service.label, checked as boolean)}
                          />
                          <Label
                            htmlFor={service.id}
                            className="flex items-center space-x-2 cursor-pointer text-sm sm:text-base text-secondary"
                          >
                            <service.icon className="w-4 h-4 text-primary" />
                            <span>{service.label}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-secondary font-medium text-sm sm:text-base">
                      Project Description
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your project, including any specific requirements, timeline, or questions you may have..."
                      className="bg-accent/30 border border-primary/20 rounded-md focus:border-primary focus:ring-primary/20 focus:outline-none text-sm sm:text-base min-h-24 sm:min-h-32"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-secondary font-medium text-sm sm:text-base">
                      Preferred Timeline
                    </Label>
                    <select
                      id="timeline"
                      className="w-full px-3 py-2 bg-accent/30 border border-primary/20 rounded-md focus:border-primary focus:ring-primary/20 focus:outline-none text-sm sm:text-base text-secondary"
                      value={formData.timeline}
                      onChange={(e) => setFormData((prev) => ({ ...prev, timeline: e.target.value }))}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2weeks">Within 1-2 weeks</option>
                      <option value="1month">Within 1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 flex-1 shadow-rustic-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Quote Request"}
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="text-base sm:text-lg px-6 sm:px-8 border-primary text-primary hover:bg-primary/5 bg-transparent shadow-rustic"
                      asChild
                    >
                      <a href="tel:7345796557">
                        <Phone className="w-4 h-4 mr-2" />
                        Call (734) 579-6557
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary/60 text-center">
                    * Required fields. We'll respond to your quote request within 24 hours.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-secondary text-accent py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Davids%20Stump%20Grinding-01-logo.jpg-KX3SMWVdVdZg87Q1UfAV0gcHyrQaPP.jpeg"
                  alt="David's Stump Grinding Logo"
                  className="h-10 sm:h-12 w-auto"
                />
                <span className="font-serif font-bold text-lg sm:text-xl">David's Landscaping</span>
              </div>
              <p className="text-accent/80 text-sm sm:text-base">
                Professional landscaping services for residential and commercial properties.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-base sm:text-lg">Services</h3>
              <ul className="space-y-2 text-accent/80 text-sm sm:text-base">
                <li>Stump Grinding</li>
                <li>Firewood Delivery</li>
                <li>Tree & Shrub Planting</li>
                <li>Decorative Rocks</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-base sm:text-lg">Contact Info</h3>
              <div className="space-y-3 text-accent/80 text-sm sm:text-base">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                  <a href="tel:7345796557" className="hover:text-accent transition-colors">
                    (734) 579-6557
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                  <a href="mailto:baggygecco@gmail.com" className="hover:text-accent transition-colors break-all">
                    baggygecco@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                  <span>Serving Local Communities</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-base sm:text-lg">Get Started</h3>
              <p className="text-accent/80 text-sm">
                Ready to transform your outdoor space? Contact us today for a free estimate.
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 w-full shadow-rustic"
                onClick={() => scrollToSection("contact-form")}
              >
                Get Free Quote
              </Button>
            </div>
          </div>

          <div className="border-t border-accent/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-accent/60 text-sm">
            <p>&copy; 2024 David's Stump Grinding & Landscaping. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
