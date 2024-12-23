import { User } from "@supabase/supabase-js";

const WEBHOOK_URL = "https://imakemvps.app.n8n.cloud/webhook-test/e13b2f81-776d-4e37-8531-33a0611d72ee";
const MAX_RETRIES = 3;

interface WebhookError extends Error {
  attempt?: number;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function callWebhookWithRetry(payload: any, retryCount = 0): Promise<Response> {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
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

    return callWebhookWithRetry(payload);
  },

  async notifyAgentAction(action: 'update' | 'deactivate' | 'delete', agentId: string, updatedSettings?: any) {
    const payload = {
      action,
      agent_id: agentId,
      ...(updatedSettings && { updated_settings: updatedSettings }),
    };

    return callWebhookWithRetry(payload);
  },
};