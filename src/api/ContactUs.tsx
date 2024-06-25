const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendContactUsRequest = async (contactObj: any) => {
    const response = await fetch(`${API_BASE_URL}/api/my/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactObj),
    })
    if (!response.ok) {
        throw new Error("failed to create user")
    }
}


