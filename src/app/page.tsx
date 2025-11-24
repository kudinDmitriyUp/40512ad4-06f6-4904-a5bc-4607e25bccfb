"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Zap, Palette, Users, DollarSign, Star, Send, Instagram, Facebook, Linkedin, Twitter, Youtube, Dribbble, Globe } from "lucide-react";

export default function LandingPage() {
  const handleContactSubmit = (email: string) => {
    console.log("Contact form submitted with email:", email);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994892367-jfe127ww.jpg"
          logoAlt="Media Agency Logo"
          brandName="MediaPro"
          navItems={[
            { name: "Portfolio", id: "portfolio" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Rates", id: "rates" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
          buttonClassName="px-6 py-2 rounded-lg"
          buttonTextClassName="font-semibold text-sm"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Creative Media Agency Excellence"
          description="Transforming your vision into stunning visual experiences. Strategic branding, social content, photography, and corporate solutions for brands that demand excellence."
          tag="Award-Winning Studio"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994893048-mo301i3l.jpg"
          imageAlt="Modern media agency creative studio workspace"
          frameStyle="card"
          buttons={[
            { text: "View Portfolio", href: "portfolio" },
            { text: "Let's Create", href: "contact" }
          ]}
          className="py-20"
          containerClassName="max-w-6xl mx-auto"
          titleClassName="text-5xl md:text-6xl font-bold"
          descriptionClassName="text-lg md:text-xl"
          buttonContainerClassName="flex gap-4 justify-center flex-wrap"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo
          title="Our Featured Portfolio"
          description="Curated selection of recent projects showcasing our creative excellence across industries"
          tag="Weekly Updates"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              brand: "Brand Identity",
              name: "E-Commerce Rebrand Campaign",
              price: "Strategic Branding",
              rating: 5,
              reviewCount: "15 Projects",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994893715-zflljiot.jpg",
              imageAlt: "E-commerce branding campaign visual"
            },
            {
              id: "2",
              brand: "Social Media",
              name: "Influencer Content Series",
              price: "Digital Marketing",
              rating: 5,
              reviewCount: "28 Posts",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994894423-b1fl5awg.jpg",
              imageAlt: "Social media content creation samples"
            },
            {
              id: "3",
              brand: "Photography",
              name: "Luxury Product Showcase",
              price: "Professional Shoots",
              rating: 5,
              reviewCount: "120+ Images",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994895062-d85vbvnj.jpg",
              imageAlt: "Professional product photography portfolio"
            },
            {
              id: "4",
              brand: "3D Design",
              name: "Interactive Exhibition Space",
              price: "3D Experience",
              rating: 5,
              reviewCount: "5 Installations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994895760-u3wbzagk.jpg",
              imageAlt: "3D exhibition design and visualization"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Services"
          description="Comprehensive creative solutions tailored to elevate your brand presence and market position"
          tag="What We Offer"
          tagIcon={Palette}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          features={[
            {
              id: "01",
              title: "Branding",
              description: "Strategic brand identity development, logo design, and visual guidelines for lasting impact",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994896419-xzhm4i4z.jpg",
              imageAlt: "Brand identity and logo design services"
            },
            {
              id: "02",
              title: "Social Media",
              description: "Engaging content creation and strategy for Instagram, TikTok, LinkedIn, and all platforms",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994897050-0heqwmfq.jpg",
              imageAlt: "Social media marketing and content creation"
            },
            {
              id: "03",
              title: "Packaging",
              description: "Innovative product packaging design that tells your brand story and captivates consumers",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994897711-cqe9aktm.jpg",
              imageAlt: "Creative product packaging design"
            },
            {
              id: "04",
              title: "Photoshoots",
              description: "Professional photography sessions for products, portraits, events, and lifestyle content",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994898221-076ilr89.jpg",
              imageAlt: "Professional photography studio services"
            },
            {
              id: "05",
              title: "Product Shoots",
              description: "Studio-quality product photography with lighting, styling, and post-production expertise",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994898935-ycp459wv.jpg",
              imageAlt: "High-quality product photography services"
            },
            {
              id: "06",
              title: "3D Exhibitors",
              description: "Immersive 3D designs and virtual exhibition spaces for modern brand experiences",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994899626-p6qmkai8.jpg",
              imageAlt: "3D exhibition and virtual experience design"
            },
            {
              id: "07",
              title: "Events & Corporate",
              description: "Full-service event planning, corporate branding, and professional production management",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994900157-x8t2dijb.jpg",
              imageAlt: "Corporate event management and planning"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Us"
          description="We are a forward-thinking media agency dedicated to transforming brands through innovative creative solutions. Our diverse team of designers, photographers, strategists, and technologists collaborate to deliver award-winning campaigns that resonate with audiences and drive measurable results. Since 2015, we've partnered with over 200 brands to craft their unique stories."
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Team"
          description="Talented creatives and strategists dedicated to bringing your vision to life"
          tag="The Experts"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sarah Creative",
              role: "Creative Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994900661-eungow2i.jpg",
              imageAlt: "Sarah Creative - Creative Director",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://instagram.com" }
              ]
            },
            {
              id: "2",
              name: "Marcus Design",
              role: "Lead Designer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994901200-s1xv6s6t.jpg",
              imageAlt: "Marcus Design - Lead Designer",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Dribbble, url: "https://dribbble.com" }
              ]
            },
            {
              id: "3",
              name: "Elena Studios",
              role: "Photography Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994902121-mtq3ae7x.jpg",
              imageAlt: "Elena Studios - Photography Director",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Globe, url: "https://example.com" }
              ]
            },
            {
              id: "4",
              name: "David Strategy",
              role: "Strategy Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994902858-q2tv290f.jpg",
              imageAlt: "David Strategy - Strategy Manager",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="rates" data-section="rates">
        <PricingCardThree
          title="Service Packages & Rates"
          description="Transparent pricing for our comprehensive creative services. All rates updated yearly."
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              price: "Starting $2,500",
              name: "Branding Package",
              badge: "Popular",
              badgeIcon: Star,
              buttons: [
                { text: "View Details", href: "contact" },
                { text: "Download PDF", href: "contact" }
              ],
              features: [
                "Logo Design & Guidelines",
                "Brand Color Palette",
                "Typography Selection",
                "Initial Brand Strategy",
                "Revision Rounds"
              ]
            },
            {
              id: "2",
              price: "Starting $3,500",
              name: "Social Media Package",
              buttons: [
                { text: "View Details", href: "contact" },
                { text: "Download PDF", href: "contact" }
              ],
              features: [
                "Content Strategy",
                "30-Day Content Calendar",
                "8 Reels/Posts Monthly",
                "Community Management",
                "Performance Analytics"
              ]
            },
            {
              id: "3",
              price: "Starting $4,000",
              name: "Photography Package",
              buttons: [
                { text: "View Details", href: "contact" },
                { text: "Download PDF", href: "contact" }
              ],
              features: [
                "4-Hour Studio Session",
                "Professional Lighting Setup",
                "50+ Edited Images",
                "Usage Rights Included",
                "Digital Delivery"
              ]
            },
            {
              id: "4",
              price: "Custom Quote",
              name: "Enterprise Package",
              badge: "Full Service",
              badgeIcon: Zap,
              buttons: [
                { text: "Discuss Package", href: "contact" },
                { text: "Download PDF", href: "contact" }
              ],
              features: [
                "All Services Included",
                "Dedicated Account Manager",
                "Priority Scheduling",
                "Quarterly Strategy Review",
                "Custom Solutions"
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Let's Create Something Amazing"
          description="Ready to elevate your brand? Reach out to discuss your project, ask questions, or explore collaboration opportunities. We're excited to hear your vision."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32fyUI1AepMVfxIUkQhrdGSZ2DN/uploaded-1763994904408-uqiwc7tj.jpg"
          imageAlt="Professional media agency contact studio"
          mediaPosition="right"
          tagIcon={Send}
          inputPlaceholder="Enter your email"
          buttonText="Send Inquiry"
          termsText="We'll respond within 24 hours. Your project details are confidential and secure."
          onSubmit={handleContactSubmit}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="MediaPro"
          copyrightText="© MediaPro Creative Agency, 2024. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Branding", href: "services" },
                { label: "Social Media", href: "services" },
                { label: "Photography", href: "services" },
                { label: "3D Design", href: "services" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Portfolio", href: "portfolio" },
                { label: "Rates", href: "rates" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Sitemap", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/mediapro", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com/mediapro", ariaLabel: "Facebook" },
            { icon: Linkedin, href: "https://linkedin.com/company/mediapro", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com/mediapro", ariaLabel: "Twitter" },
            { icon: Youtube, href: "https://youtube.com/mediapro", ariaLabel: "YouTube" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}