
import React from "react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ValueCard from "@/components/ValueCard";
import { Calendar, Brain, Trophy, Users, Check, Linkedin, Instagram, Facebook } from "lucide-react";

const Index = () => {
  const currentYear = new Date().getFullYear();
  return <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="bg-hive-blue hexagon-bg min-h-[80vh] flex items-center justify-center text-white">
        <div className="container-width section-padding flex flex-col items-center animate-fade-in">
          <Logo className="mb-8 text-5xl" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold max-w-4xl mb-6 leading-tight">
            Empowering the Next Generation of Entrepreneurs
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mb-8 text-gray-200">
            Hive is a student-led community bridging the gap between academic theory and 
            real-world practice. We equip students with the skills, network, and experience to thrive.
          </p>
          <Button size="lg" onClick={() => window.open("https://forms.gle/Ra9auVocNJPmUZms6", "_blank")}>Join the Hive</Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <SectionHeading>Our Story</SectionHeading>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              As students, we all face the same problem: what we learn in the classroom is not enough. 
              Stepping into the real world made us realize a clear gap between theory and practice. 
              Hive was born to fill this gap.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <SectionHeading>What We Do</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard title="Event Planning & Hosting" description="Coordinate, plan, and host impactful events, exhibitions, and conferences. We create memorable experiences for our clients and their audiences." icon={<Calendar />} />
            <FeatureCard title="Skill Development & Training" description="Provide workshops, intensive courses, and hands-on training. Access programs that align with industry needs." icon={<Brain />} />
            <FeatureCard title="Competitions & Certifications" description="Organize innovation and entrepreneurship competitions. Enable students to qualify for valuable certificates." icon={<Trophy />} />
            <FeatureCard title="Mentorship & Networking" description="Connect students with mentors and successful entrepreneurs. Build strong networks with industry professionals." icon={<Users />} />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <SectionHeading>Our Core Values</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard title="Student-Led" description="Built by students, for students. We know what future leaders need." />
            <ValueCard title="Learn by Doing" description="We value action. Turn knowledge into skills and ideas into impact." />
            <ValueCard title="Inclusive" description="Open to all students from all majors. If you're curious and driven, you belong in Hive." />
          </div>
        </div>
      </section>

      {/* Why Hive Section */}
      <section className="section-padding bg-hive-blue text-white">
        <div className="container-width">
          <SectionHeading className="text-white">Why Choose Hive?</SectionHeading>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {["Created by students who understand student needs.", "Combines academic knowledge with practical, hands-on experience.", "Offers flexible programs aligned with market demands.", "Supported by a strong network of mentors and partners.", "Founded by students experienced in community building and impactful initiatives."].map((item, index) => <li key={index} className="flex items-start">
                  <Check className="mr-3 text-hive-yellow shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <SectionHeading>Our Vision & Mission</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3 text-hive-blue-dark">Our Vision</h3>
              <p className="text-gray-600">
                "To be the partner of choice for universities, educators, and recruiters worldwide."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3 text-hive-blue-dark">Our Mission</h3>
              <p className="text-gray-600">
                "To provide academic and practical learning through training, competitions, and mentorship."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <SectionHeading>Who We Serve</SectionHeading>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg">
              Our current focus is on university students in Jordan, eager to gain real-world skills. 
              We're expanding to support students at all educational levels internationally, 
              along with recent graduates and professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Let's Build This Together Section */}
      <section className="section-padding bg-hive-blue-dark hexagon-bg text-white">
        <div className="container-width">
          <SectionHeading className="text-white">Let's Build This Together</SectionHeading>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg mb-6">
              Hive started with a simple idea: that students deserve more than just theory. 
              We're building a space where young people can grow, connect, and turn ideas into action. 
              If you believe in empowering the next generation, we'd love to have you with us as a mentor, 
              a partner, or just someone who cares.
            </p>
            <p className="text-xl font-redhat font-bold mb-10">
              This is just the beginning. Let's shape the future, together.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" onClick={() => window.open("https://forms.gle/Ra9auVocNJPmUZms6", "_blank")}>Join Our Community</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Logo />
            </div>
            <div className="flex flex-col items-center md:items-end mb-6 md:mb-0">
              <p className="mb-2">Email: hive@string.education</p>
              <div className="flex gap-4 mt-2">
                <a href="https://www.linkedin.com/company/hivejor" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-hive-yellow transition-colors">
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/hivejor?igsh=Nmx0cnRxNTZrbmY4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-hive-yellow transition-colors">
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61575210633277" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-hive-yellow transition-colors">
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p>© {currentYear} Hive. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
