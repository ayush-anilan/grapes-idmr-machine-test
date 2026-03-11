const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const preLoginAuthentication = async (phoneNumber) => {
    try {
        const response = await fetch(`${BASE_URL}/Login/PreloginAuthentication?Phonenumber=${phoneNumber}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber }),
        });
    
        if (!response.ok) {
            throw new Error('Failed to pre-authenticate');
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Prelogin error: ", error);
        throw error;
    }
}

export const userLogin = async (phoneNumber, hospitalId, password) => {
    try {
        const response = await fetch(`${BASE_URL}/Login/UserLogin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber, hospitalId, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        const data = await response.json();
        
        if (data.Token){
            localStorage.setItem("token", data.Token);
        }

        return data;
    } catch (error) {
        console.log("Login error: ", error);
        throw error;
    }
}