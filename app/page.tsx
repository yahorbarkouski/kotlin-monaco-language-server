import KotlinEditor from "@/components/KotlinEditor";

export default function Home() {
    return (
        <main className="flex min-h-screen justify-between p-12 px-24 container bg-white">
            <div className="w-full space-y-3">
                <h1>Kotlin Language Server Websockets + Monaco Editor React example</h1>
                <KotlinEditor/>
            </div>
        </main>
    )
}
