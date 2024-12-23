import { supabase } from "@/integrations/supabase/client";

const MAX_RETRIES = 3;

interface WebhookError extends Error {
  attempt?: number;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function callWebhookWithRetry(payload: any, retryCount = 0): Promise<Response> {
  try {
    const { data, error } = await supabase.functions.invoke('webhook-handler', {
      body: payload,
    });

    if (error) throw error;
    if (!data.success) throw new Error('Webhook call failed');

    return new Response(null, { status: 200 });
  } catch (error) {
    const webhookError = error as WebhookError;
    webhookError.attempt = retryCount + 1;
    console.error(`Webhook call failed (attempt ${retryCount + 1}):`, webhookError);

    if (retryCount < MAX_RETRIES) {
      const backoffTime = Math.pow(2, retryCount) * 1000; // Exponential backoff
      await sleep(backoffTime);
      return callWebhookWithRetry(payload, retryCount + 1);
    }

    throw webhookError;
  }
}

export const webhookService = {
  async notifyAgentCreation(agentName: string, agentType: string, settings: any, userId: string) {
    const payload = {
      agent_name: agentName,
      agent_type: agentType,
      settings,
      user_id: userId,
    };

    try {
      await callWebhookWithRetry(payload);
      console.log('Webhook notification sent (agent creation)');
      return true;
    } catch (error) {
      console.error('Failed to notify webhook:', error);
      return false;
    }
  },

  async notifyAgentAction(action: 'update' | 'deactivate' | 'delete', agentId: string, updatedSettings?: any) {
    const payload = {
      action,
      agent_id: agentId,
      ...(updatedSettings && { updated_settings: updatedSettings }),
    };

    try {
      await callWebhookWithRetry(payload);
      console.log(`Webhook notification sent (${action})`);
      return true;
    } catch (error) {
      console.error('Failed to notify webhook:', error);
      return false;
    }
  },
};