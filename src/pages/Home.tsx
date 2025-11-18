import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Dumbbell, Users, Award, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-gym.jpg";

const Home = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and power with our expert-designed strength programs.",
    },
    {
      icon: TrendingUp,
      title: "HIIT & Cardio",
      description: "High-intensity workouts to maximize fat burning and endurance.",
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Join energetic group sessions with certified trainers.",
    },
    {
      icon: Award,
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific goals.",
    },
  ];

  const membershipPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "month",
      features: [
        "Access to gym equipment",
        "Locker facilities",
        "Mobile app access",
        "Basic workout plans",
      ],
    },
    {
      name: "Pro",
      price: "$89",
      period: "month",
      popular: true,
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Nutrition consultation",
        "Priority booking",
        "Guest passes (2/month)",
      ],
    },
    {
      name: "Elite",
      price: "$149",
      period: "month",
      features: [
        "Everything in Pro",
        "Personal training (4 sessions/month)",
        "Advanced body analytics",
        "Spa & recovery access",
        "Unlimited guest passes",
      ],
    },
  ];

  const transformations = [
    { name: "Sarah M.", result: "Lost 30 lbs in 4 months" },
    { name: "Mike T.", result: "Gained 15 lbs muscle mass" },
    { name: "Jessica L.", result: "Ran first marathon" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="STEELFLEX GYM"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
          <div className="absolute inset-0 steel-grid opacity-20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            FORGE YOUR
            <span className="block text-gradient-primary">STEEL BODY</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your limits. Build strength. Achieve greatness at STEELFLEX GYM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/memberships">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground glow-primary font-bold text-lg px-8">
                Start Your Journey
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/schedule">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8">
                View Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient-primary">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed for every fitness level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-neon group"
              >
                <program.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-muted-foreground">{program.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/programs">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold">
                Explore All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-gradient-accent">Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible memberships designed to fit your lifestyle and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 bg-card border-border hover:scale-105 transition-all duration-300 ${
                  plan.popular ? "border-accent shadow-neon" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-accent text-accent-foreground text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/memberships">
                  <Button
                    className={`w-full font-bold ${
                      plan.popular
                        ? "bg-gradient-accent text-accent-foreground glow-accent"
                        : "bg-gradient-primary text-primary-foreground"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-gradient-primary">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real transformations from our STEELFLEX community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {transformations.map((item, index) => (
              <Card key={index} className="p-6 bg-card border-border text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                <p className="text-primary font-semibold">{item.result}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground glow-primary font-bold">
                Start Your Transformation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
