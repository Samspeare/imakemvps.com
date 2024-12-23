import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "@supabase/supabase-js";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">
        Welcome, {user.email?.split("@")[0]}!
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Settings Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Subscription Status
              </span>
              <span className="text-sm font-medium">Free Plan</span>
            </div>
            <Button className="w-full" variant="outline">
              Manage AI Agent
            </Button>
          </CardContent>
        </Card>

        {/* Support Card */}
        <Card className="hover:bg-accent/50 transition-colors cursor-pointer" onClick={() => navigate("/support")}>
          <CardHeader>
            <CardTitle>Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Need help? Check out our FAQs or contact support.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;