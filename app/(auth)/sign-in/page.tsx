import { auth, signIn } from "@/lib/auth";
import { executeAction } from "@/lib/executeAction";
import { redirect } from "next/navigation";

const AuthPage = async () => {
    const session = await auth()
    if (session) redirect("/")
    return (
        <div className="flex items-center justify-center h-screen bg-background">
        <div className="bg-foreground p-8 rounded shadow-md w-96">
            <h1 className="text-2xl font-bold mb-6 text-secondary">Sign In</h1>
            <form
                className="space-y-4"
                action={ async (formData: FormData) => {
                    "use server";
                    await executeAction({
                        actionFn: async () => {
                            await signIn("credentials", formData)
                        }
                    })
                } }
            >
            <div className="mb-4">
                <label className="block text-sm font-medium text-primary mb-2" htmlFor="email">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border text-secondary border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-primary mb-2" htmlFor="password">
                Password
                </label>
                <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border text-secondary border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
                Sign In
            </button>
            </form>
        </div>
        </div>
    );
}

export default AuthPage;