import {bgBlue, green, red, white} from "next/dist/lib/picocolors";

export default function notFound() {
    return (
        <div className="mini-h-screen  flex items-center bg-blue-900 text-red">Not Found</div>
    );
}