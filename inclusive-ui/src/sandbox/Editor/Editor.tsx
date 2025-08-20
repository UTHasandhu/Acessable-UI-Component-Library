import React from "react";

export default function Editor() {
    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Editor</h3>
            <textarea
                className="w-full h-full border border-gray-300 p-2 rounded"
                placeholder="Write your code here..."
            />
        </div>
    );
}