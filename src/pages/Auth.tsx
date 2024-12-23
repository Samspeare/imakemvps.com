import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8">
          <SupabaseAuth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "rgb(var(--color-primary))",
                    brandAccent: "rgb(var(--color-primary))",
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