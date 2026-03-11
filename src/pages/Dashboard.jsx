function Dashboard() {

    const getToken = localStorage.getItem("token");
    console.log(getToken);

    if (!getToken) {
        window.location.href = "/";
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to the dashboard!</p>
        </div>
    );
}

export default Dashboard;