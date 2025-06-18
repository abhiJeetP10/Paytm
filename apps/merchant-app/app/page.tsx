"use client";

import { useBalance } from "@repo/zustand/useBalance";

export default function Component() {
    const balance = useBalance();
    return (
        <div>
            hi there {balance}
        </div>
    );
}