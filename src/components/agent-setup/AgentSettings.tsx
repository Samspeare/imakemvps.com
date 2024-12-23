import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const settingsSchema = z.object({
  labelFormat: z.enum(["uppercase", "lowercase", "capitalize"]),
  autoApplyToUnread: z.boolean(),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

interface AgentSettingsProps {
  onSubmit: (values: SettingsFormValues) => void;
}

export function AgentSettings({ onSubmit }: AgentSettingsProps) {
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      labelFormat: "uppercase",
      autoApplyToUnread: true,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="labelFormat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label Format</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a label format" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="uppercase">Uppercase</SelectItem>
                  <SelectItem value="lowercase">Lowercase</SelectItem>
                  <SelectItem value="capitalize">Capitalize</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Choose how your labels will be formatted
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="autoApplyToUnread"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  Automatic Label Application
                </FormLabel>
                <FormDescription>
                  Automatically apply labels to unread emails
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Save and Continue</Button>
      </form>
    </Form>
  );
}