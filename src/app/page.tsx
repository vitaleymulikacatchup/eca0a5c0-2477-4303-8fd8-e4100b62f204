"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { Crown, Home, MessageCircle, Star } from "lucide-react";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Grandeur Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero" className="min-h-screen flex items-center">
        <div className="relative z-10 mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Experience Luxury Redefined"
            description="Discover unparalleled comfort and elegance at Grandeur Hotel, where every moment becomes an extraordinary memory"
            tag="5-Star Excellence"
            tagIcon={Star}
            buttons={[
              {
                text: "Book Your Stay",
                href: "contact"
              },
              {
                text: "Explore Rooms",
                href: "rooms"
              }
            ]}
            imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            imageAlt="Luxury hotel lobby with elegant interior design"
          />
        </div>
      </div>

      <div id="amenities" data-section="amenities" className="py-20 lg:py-32">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="World-Class Amenities"
            description="Indulge in our premium facilities designed to exceed your every expectation"
            tag="Amenities"
            tagIcon={Crown}
            features={[
              {
                title: "Luxury Spa & Wellness",
                description: "Rejuvenate your body and mind with our award-winning spa treatments and wellness programs",
                imageSrc: "https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Luxury spa treatment room"
              },
              {
                title: "Fine Dining Experience",
                description: "Savor exquisite cuisine crafted by world-renowned chefs in our elegant restaurant",
                imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Fine dining restaurant interior"
              },
              {
                title: "State-of-the-Art Fitness",
                description: "Maintain your fitness routine with our modern equipment and personal training services",
                imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Modern hotel fitness center"
              },
              {
                title: "24/7 Concierge Service",
                description: "Our dedicated concierge team ensures every request is handled with utmost care and efficiency",
                imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Professional concierge service"
              }
            ]}
          />
        </div>
      </div>

      <div id="rooms" data-section="rooms" className="py-20 lg:py-32">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Luxurious Accommodations"
            description="Choose from our collection of elegantly appointed rooms and suites"
            tag="Rooms & Suites"
            tagIcon={Home}
            products={[
              {
                id: "deluxe",
                name: "Deluxe King Room",
                price: "$299/night",
                imageSrc: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Deluxe king room with elegant furnishings"
              },
              {
                id: "executive",
                name: "Executive Suite",
                price: "$599/night",
                imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Executive suite with separate living area"
              },
              {
                id: "presidential",
                name: "Presidential Suite",
                price: "$1299/night",
                imageSrc: "https://images.pexels.com/photos/27543244/pexels-photo-27543244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Presidential suite with luxury amenities"
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonials" data-section="testimonials" className="py-20 lg:py-32">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Guests Say"
            description="Discover why discerning travelers choose Grandeur Hotel for their most important stays"
            tag="Guest Reviews"
            tagIcon={MessageCircle}
            testimonials={[
              {
                id: "1",
                name: "Sarah Johnson",
                role: "CEO, Fortune Global",
                company: "Technology Executive",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Portrait of Sarah Johnson"
              },
              {
                id: "2",
                name: "Michael Chen",
                role: "Investment Partner",
                company: "Venture Capital Firm",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Portrait of Michael Chen"
              },
              {
                id: "3",
                name: "Emily Rodriguez",
                role: "Creative Director",
                company: "Luxury Brand Agency",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Portrait of Emily Rodriguez"
              },
              {
                id: "4",
                name: "David Kim",
                role: "Managing Director",
                company: "Financial Services",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Portrait of David Kim"
              },
              {
                id: "5",
                name: "Lisa Thompson",
                role: "Global Marketing Head",
                company: "Luxury Retail",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Portrait of Lisa Thompson"
              },
              {
                id: "6",
                name: "James Wilson",
                role: "Executive Producer",
                company: "Entertainment Industry",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                imageAlt: "Portrait of James Wilson"
              }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="py-20 lg:py-32">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Reserve Your Perfect Stay"
            description="Experience luxury like never before. Let us create an unforgettable stay tailored to your needs and preferences."
            inputs={[
              {
                name: "name",
                type: "text",
                placeholder: "Full Name",
                required: true
              },
              {
                name: "email",
                type: "email",
                placeholder: "Email Address",
                required: true
              },
              {
                name: "phone",
                type: "tel",
                placeholder: "Phone Number",
                required: false
              },
              {
                name: "dates",
                type: "text",
                placeholder: "Preferred Dates",
                required: true
              }
            ]}
            textarea={{
              name: "message",
              placeholder: "Special requests or preferences...",
              rows: 4,
              required: false
            }}
            buttonText="Book Now"
          />
        </div>
      </div>

      <div id="footer" data-section="footer">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            logoText="Grandeur Hotel"
            columns={[
              {
                items: [
                  {
                    label: "Rooms & Suites",
                    href: "rooms"
                  },
                  {
                    label: "Amenities",
                    href: "amenities"
                  },
                  {
                    label: "Dining",
                    href: "dining"
                  },
                  {
                    label: "Spa & Wellness",
                    href: "spa"
                  }
                ]
              },
              {
                items: [
                  {
                    label: "About Us",
                    href: "about"
                  },
                  {
                    label: "Guest Reviews",
                    href: "testimonials"
                  },
                  {
                    label: "Contact",
                    href: "contact"
                  },
                  {
                    label: "Location",
                    href: "location"
                  }
                ]
              },
              {
                items: [
                  {
                    label: "Privacy Policy",
                    href: "https://example.com/privacy"
                  },
                  {
                    label: "Terms of Service",
                    href: "https://example.com/terms"
                  },
                  {
                    label: "Cancellation Policy",
                    href: "https://example.com/cancellation"
                  }
                ]
              }
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}