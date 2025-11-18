import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleMemberLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication
    navigate("/member/dashboard");
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero steel-grid p-4">
      <Card className="w-full max-w-md p-8 bg-card/95 backdrop-blur-xl border-border shadow-steel">
        <div className="text-center mb-8">
          <img src={logo} alt="STEELFLEX GYM" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Access your STEELFLEX account</p>
        </div>

        <Tabs defaultValue="member" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="member">Member</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>

          <TabsContent value="member">
            <form onSubmit={handleMemberLogin} className="space-y-4">
              <div>
                <Label htmlFor="member-email">Email</Label>
                <Input
                  id="member-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="member-password">Password</Label>
                <Input
                  id="member-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground glow-primary font-bold"
              >
                Sign In
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <a href="#" className="text-primary hover:underline">
                  Join STEELFLEX
                </a>
              </p>
            </form>
          </TabsContent>

          <TabsContent value="admin">
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@steelflexgym.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-accent text-accent-foreground glow-accent font-bold"
              >
                Admin Sign In
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Back to Home
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Login;
