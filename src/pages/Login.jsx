import { useState } from "react";
import { preLoginAuthentication, userLogin } from "../api/authApi";
import { useNavigate } from "react-router";
import Logo from "../assets/grapeslogo.png";

function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [hospitalList, setHospitalList] = useState([]);
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getHospitalList = async (phone) => {
        try {
            const data = await preLoginAuthentication(phone ?? phoneNumber);
            console.log(data.Hospital);
            
            setHospitalList(data.Hospital || []);
        } catch (error) {
            console.error("Error fetching hospital list: ", error);
            setError("Failed to fetch hospital list. Please check the phone number and try again.");
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const phoneNumber = event.target.phoneNumber.value;
        const hospitalId = event.target.hospitalId.value;
        const password = event.target.password.value;

        try {
            const loginResponse = await userLogin(phoneNumber, hospitalId, password);

            console.log(loginResponse);
            
            if (loginResponse.Status === 200) {
                localStorage.setItem("token", loginResponse.Token);
                localStorage.setItem("hospitalName", loginResponse.HospitalName);
                localStorage.setItem("username", loginResponse.Username);
                navigate("/dashboard");
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Error during login: ", error);
        }
    };



    return (
        <div className="  bg-[#f4f3fe]  ">
            <div className="flex items-center justify-center container mx-auto px-4 min-h-screen">
                <div className="w-1/2">
                <img src={Logo} alt="Logo" />

                <div>
                    <h1 className="text-3xl text-center font-bold text-gray-600 mb-4">Welcome, to Grapes HMS</h1>
                </div>
            </div>
            <div className="bg-[#9d8bf7] p-8 rounded-md shadow-md w-1/2 h-fit mx-52">
                <h2 className="text-2xl font-semibold text-white mb-6 ">Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 text-white">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="phoneNumber" className="text-sm font-medium ">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            required
                            value={phoneNumber}
                            onChange={(e) => {
                                const val = e.target.value;
                                setPhoneNumber(val);
                                if (val.length === 10) getHospitalList(val);
                            }}
                            className="border border-gray-300 text-gray-500 rounded-lg px-3 py-2 text-sm focus:outline-none bg-white focus:ring-2 focus:ring-blue-500"
                        />
                        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Hospital</label>
                        <select
                            name="hospitalId"
                            required
                            disabled={hospitalList.length === 0}
                            className="border bg-white border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
                        >
                            <option value="bg-white ">Select Hospital</option>
                            {hospitalList.map((hospital) => (
                                <option className="" key={hospital.hospital_id} value={hospital.hospital_id}>
                                    {hospital.hospital_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm font-medium ">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#6d3cea] hover:bg-[#5a31c0] text-white font-medium py-2 rounded-lg text-sm transition-colors"
                        disabled={loading}
                    >
                        Log in
                    </button>
                </form>
                <div className="h-64">
                            <h1 className="hidden">For height</h1>
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Login;