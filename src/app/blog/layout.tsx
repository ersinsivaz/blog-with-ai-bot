import React, { ReactNode } from "react";
import SideNav from "@/app/ui/components/sidenav";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <section>
            <header style={{ padding: "1rem 0" }}>
               
                <SideNav />
                <hr />
            </header>
            <main>{children}</main>
        </section>
    );
}