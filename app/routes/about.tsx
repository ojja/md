import { Link } from "@remix-run/react";
import AboutSection from "~/components/AboutSection";

export default function About() {


    return (
        <div className="flex flex-col items-center py-20 space-y-2">
            <AboutSection />
        </div>
    );
}