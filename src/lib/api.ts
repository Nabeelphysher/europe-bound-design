export interface LeadSubmissionData {
    // Required Fields
    name: string;
    phone: string;

    // Optional Standard Fields
    email?: string;
    message?: string;
    form_type?: string;

    // Dynamic Fields
    [key: string]: any;
}

export interface APIResponse {
    status: "success" | "error";
    message: string;
    lead_id?: number;
}

export const submitLead = async (data: LeadSubmissionData): Promise<APIResponse> => {
    try {
        const response = await fetch("https://crm.europecalling.co/api/leads/public/submit/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                status: "error",
                message: result.message || "An error occurred during submission",
            };
        }

        return result as APIResponse;
    } catch (error) {
        console.error("Submission failed", error);
        return {
            status: "error",
            message: "Network error or server is unreachable",
        };
    }
};
