import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
      <h1 className="text-5xl font-bold mb-4">Hi，我是 Mason</h1>
      <p className="text-xl text-gray-700 mb-6">這是我的 AI 創作個人網站 ✨</p>
      <Button className="text-lg px-6 py-3">
        聯絡我 <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
}