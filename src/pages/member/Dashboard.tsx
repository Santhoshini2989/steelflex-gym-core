import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, TrendingUp, User, Award, Bell } from "lucide-react";
import logo from "@/assets/logo.png";

const MemberDashboard = () => {
  const stats = [
    { icon: Calendar, label: "Visits This Month", value: "18" },
    { icon: TrendingUp, label: "Workout Streak", value: "12 days" },
    { icon: Award, label: "Goals Completed", value: "5/8" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src={logo} alt="STEELFLEX GYM" className="h-12" />
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-primary" />
              <div className="hidden sm:block">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-muted-foreground">Pro Member</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Welcome Back, <span className="text-gradient-primary">John</span>
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-primary text-primary-foreground cursor-pointer hover:scale-105 transition-transform">
            <Calendar className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-1">Book Class</h3>
            <p className="text-sm opacity-90">Reserve your spot</p>
          </Card>

          <Card className="p-6 bg-card border-border cursor-pointer hover:border-primary transition-all">
            <User className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-1">Personal Training</h3>
            <p className="text-sm text-muted-foreground">Schedule session</p>
          </Card>

          <Card className="p-6 bg-card border-border cursor-pointer hover:border-primary transition-all">
            <TrendingUp className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-1">Track Progress</h3>
            <p className="text-sm text-muted-foreground">View analytics</p>
          </Card>

          <Card className="p-6 bg-card border-border cursor-pointer hover:border-primary transition-all">
            <CreditCard className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-1">Membership</h3>
            <p className="text-sm text-muted-foreground">Manage plan</p>
          </Card>
        </div>

        {/* Upcoming Classes */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-2xl font-bold mb-4">Upcoming Classes</h2>
          <div className="space-y-4">
            {["HIIT Training", "Strength & Power", "Yoga Flow"].map((className, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-semibold">{className}</h4>
                  <p className="text-sm text-muted-foreground">Today, {6 + i}:00 PM</p>
                </div>
                <Button size="sm" variant="outline" className="border-primary text-primary">
                  Join
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MemberDashboard;
