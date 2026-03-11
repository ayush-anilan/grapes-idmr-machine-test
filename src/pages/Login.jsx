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
        setError("");
        try {
            const data = await preLoginAuthentication(phone ?? phoneNumber);

            setHospitalList(data.Hospital || []);
        } catch (error) {
            console.error("Error fetching hospital list: ", error);
            setHospitalList([]);
            setError("Failed to fetch hospital list. Please check the phone number and try again.");
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);
        const phoneNumber = event.target.phoneNumber.value;
        const hospitalId = event.target.hospitalId.value;
        const password = event.target.password.value;

        try {
            const loginResponse = await userLogin(phoneNumber, hospitalId, password);

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
            setError("Unable to login right now. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-[#f1f3ff] px-4 py-6 sm:px-8"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(136, 127, 233, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(136, 127, 233, 0.08) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
            }}
        >
            <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl overflow-hidden rounded-3xl border border-indigo-100 bg-white/80 shadow-2xl shadow-indigo-100 backdrop-blur-sm">
                <section className="relative hidden w-1/2 flex-col justify-between bg-gradient-to-br from-[#f7f8ff] via-[#eef2ff] to-[#f7f1ff] p-12 lg:flex">
                    <div className="space-y-7">
                        <img src={Logo} alt="Grapes HMS logo" className="h-24 w-auto" />
                        <div className="space-y-3 text-slate-700">
                            <h1 className="text-4xl font-semibold tracking-tight">Welcome to Grapes HMS</h1>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-indigo-100/80 bg-white/85 p-5 shadow-md shadow-indigo-100/60">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">Grapes IDMR</p>
                        <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                            <span>Version: 25.8.8</span>
                            <span>PROD-DB01</span>
                        </div>
                    </div>
                </section>

                <section className="flex w-full items-center bg-gradient-to-br from-[#8e7cf4] via-[#8572ef] to-[#755fe3] px-5 py-8 sm:px-10 lg:w-1/2">
                    <div className="w-full rounded-2xl border border-white/25 bg-white/10 p-6 shadow-lg shadow-indigo-950/10 backdrop-blur-sm sm:p-8">
                        <div className="mb-8 space-y-2 text-white">
                            <img src={Logo} alt="Grapes HMS logo" className="h-14 w-auto lg:hidden" />
                            <h2 className="text-3xl font-semibold tracking-tight">Login</h2>
                            <p className="text-sm text-indigo-100">Use your registered credentials to continue.</p>
                        </div>

                        <form onSubmit={handleLogin} className="flex flex-col gap-5 text-white">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phoneNumber" className="text-sm font-medium tracking-wide text-indigo-50">
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    required
                                    inputMode="numeric"
                                    maxLength={10}
                                    value={phoneNumber}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setPhoneNumber(val);
                                        if (val.length === 10) {
                                            getHospitalList(val);
                                        } else if (hospitalList.length > 0) {
                                            setHospitalList([]);
                                        }
                                    }}
                                    className="rounded-xl border border-indigo-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300/40"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="hospitalId" className="text-sm font-medium tracking-wide text-indigo-50">
                                    Organization Name
                                </label>
                                <select
                                    id="hospitalId"
                                    name="hospitalId"
                                    required
                                    disabled={hospitalList.length === 0}
                                    className="rounded-xl border border-indigo-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300/40 disabled:cursor-not-allowed disabled:bg-indigo-50 disabled:text-slate-400"
                                >
                                    <option value="">Select Organization</option>
                                    {hospitalList.map((hospital) => (
                                        <option key={hospital.hospital_id} value={hospital.hospital_id}>
                                            {hospital.hospital_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-sm font-medium tracking-wide text-indigo-50">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    className="rounded-xl border border-indigo-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300/40"
                                />
                                <button
                                    type="button"
                                    className="ml-auto text-xs font-medium text-indigo-100 transition hover:text-white"
                                >
                                    Reset Password?
                                </button>
                            </div>

                            {error && <p className="rounded-lg bg-red-100/95 px-3 py-2 text-sm text-red-700">{error}</p>}

                            <button
                                type="submit"
                                className="mt-1 rounded-xl bg-[#5f39de] px-4 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#4e2ec0] disabled:cursor-not-allowed disabled:opacity-70"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Log In"}
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Login;
