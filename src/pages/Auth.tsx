import { useEffect } from "react";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome</h1>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <SupabaseAuth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'rgb(var(--color-primary))',
                    brandAccent: 'rgb(var(--color-primary))',
                  },
                },
              },
              style: {
                button: {
                  borderRadius: '4px',
                  backgroundColor: 'rgb(var(--color-primary))',
                  color: 'white',
                  padding: '10px',
                  marginTop: '10px',
                },
                input: {
                  borderRadius: '4px',
                  border: '1px solid #e2e8f0',
                  padding: '10px',
                },
                label: {
                  color: '#4a5568',
                  marginBottom: '4px',
                },
                message: {
                  color: '#e53e3e',
                  marginTop: '4px',
                },
              },
            }}
            providers={[]}
            redirectTo={window.location.origin}
            view="sign_in"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;