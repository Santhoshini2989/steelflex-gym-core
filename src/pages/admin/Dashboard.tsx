import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  UserPlus,
  CreditCard,
  BarChart3,
  Settings,
  MessageSquare,
  Package,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "1,284", change: "+12%" },
    { icon: DollarSign, label: "Monthly Revenue", value: "$98,450", change: "+8%" },
    { icon: UserPlus, label: "New Sign-ups", value: "47", change: "+23%" },
    { icon: TrendingUp, label: "Retention Rate", value: "94%", change: "+2%" },
  ];

  const quickActions = [
    { icon: UserPlus, title: "Add Member", path: "/admin/members/new", color: "primary" },
    { icon: Package, title: "Manage Packages", path: "/admin/packages", color: "accent" },
    { icon: Calendar, title: "Class Schedule", path: "/admin/schedule", color: "primary" },
    { icon: CreditCard, title: "Payments", path: "/admin/payments", color: "accent" },
    { icon: MessageSquare, title: "Send Messages", path: "/admin/messages", color: "primary" },
    { icon: BarChart3, title: "Analytics", path: "/admin/analytics", color: "accent" },
  ];

  const recentActivity = [
    { member: "Sarah Johnson", action: "Renewed membership", time: "5 min ago" },
    { member: "Mike Williams", action: "Booked PT session", time: "12 min ago" },
    { member: "Emily Davis", action: "Joined HIIT class", time: "25 min ago" },
    { member: "James Brown", action: "Payment received", time: "1 hour ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="STEELFLEX GYM" className="h-12" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">Admin Portal</h1>
              <p className="text-sm text-muted-foreground">STEELFLEX GYM Management</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-accent" />
              <div className="hidden sm:block">
                <p className="font-semibold">Admin User</p>
                <p className="text-sm text-muted-foreground">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-green-500">{stat.change}</span>
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.path}>
                <Card
                  className={`p-4 bg-card border-border hover:border-${action.color} cursor-pointer hover:scale-105 transition-all text-center`}
                >
                  <action.icon className={`w-8 h-8 text-${action.color} mx-auto mb-2`} />
                  <p className="font-semibold text-sm">{action.title}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                    <div>
                      <p className="font-semibold">{activity.member}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Today's Schedule */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4">Today's Schedule</h2>
            <div className="space-y-4">
              {["Morning HIIT - 6:00 AM", "Strength Training - 10:00 AM", "Yoga - 2:00 PM", "Boxing - 6:00 PM"].map(
                (schedule, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{schedule}</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      View
                    </Button>
                  </div>
                )
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
