import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function StripeSuccess() {
    return(
        <div className="h-screen">
            <div className="mt-32 md:max-w-[50vw] mx-auto">
                <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6"/>
                <div className="text-center">
                    <h1 className="md:text-3xl font-semibold text-center">Payment Successful!</h1>
                    <p className="text-gray-600 my-2 dark:text-gray-400">Thank you for your purchase. We hope you enjoy it</p>
                    <p>Have a great day!</p>
                    <Button asChild className="mt-5">
                        <Link href='/'>Go Back</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}